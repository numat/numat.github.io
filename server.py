"""
A basic server to convert email addresses into proper emails without mailto.
"""
import argparse
from base64 import b64decode
from email.mime.text import MIMEText
from http.server import BaseHTTPRequestHandler, HTTPServer
import logging
from logging.handlers import RotatingFileHandler
import os
import re
import smtplib
import sys
from threading import Thread

from_address, to_address, password = None, None, None
check = re.compile('\S+@\S+\.\S+')

_cred = os.path.expanduser('~/.config/email_credentials.txt')
with open(_cred) as in_file:
    decoded = b64decode(in_file.read().encode('utf-8')).decode('utf-8')
    from_address, password = decoded.split(':')


class Server(BaseHTTPRequestHandler):
    def do_POST(self):
        """Handles posted email addresses."""
        l = int(self.headers['Content-Length'])
        new_address = self.rfile.read(l).decode('utf-8')
        if check.match(new_address) is not None:
            logging.info("Forwarding {} to sales.".format(new_address))
            Thread(target=self.send_email, args=(new_address, )).start()
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(new_address.encode('utf-8'))
        else:
            logging.exception("Received malformed email: " + new_address)
            self.send_response(500)

    def send_email(self, new_address):
        """Sends an email with new user information."""
        s = smtplib.SMTP('smtp.gmail.com:587')
        s.starttls()
        s.login(from_address, password)
        email = MIMEText("Received a request for ION-X information from:\n{}"
                         .format(new_address))
        email['To'] = to_address
        email['From'] = from_address
        email['Subject'] = "Website Request Received"
        s.sendmail(from_address, to_address, email.as_string())
        s.quit()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Forwards posted emails to "
                                                 "sales@numat-tech.com.")
    parser.add_argument('-p', '--port', type=int, default=52300, help="The "
                        "port on which to run the server.")
    args = parser.parse_args()
    to_address = 'sales@numat-tech.com'
    log = os.path.expanduser('~/ionx_server.log')

    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    handler = logging.StreamHandler(sys.stdout)
    handler = RotatingFileHandler(log, maxBytes=2**24, backupCount=5)
    handler.setFormatter(logging.Formatter('%(asctime)s %(levelname)s '
                         '%(funcName)s(%(lineno)d)\n%(message)s\n'))
    logger.addHandler(handler)

    daemon = HTTPServer(('', args.port), Server)
    try:
        daemon.serve_forever()
    except:
        daemon.socket.close()
        logging.exception("Quitting server.")
