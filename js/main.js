/*global $, location, document, window, screen, navigator, Headroom*/
"use strict";

// Show and hide the navbar on scroll
var headroom = new Headroom(document.querySelector('.navbar-fixed-top'));
headroom.init();

// Changes background scrolling and sizing for mobile devices
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('#first, #second, #third, #fourth, #technology-header, #people-header').css(
        {'background-attachment': 'scroll', 'background-size': 'auto 100%'}
    );
}

// Vertically centers images on the technology page
// (could not get CSS solutions to play well with bootstrap)
var pad = function () {
    var width, $this;
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width < 768) {
        return 0;
    }

    $this = $(this);
    return Math.max(($this.siblings().height() - $this.children('.img-responsive').height()) / 2.0, 0);
};
$(window).resize(function () {
    $('.vertical-center').css('padding-top', pad);
});
$(window).load(function () {
    $('.vertical-center').css('padding-top', pad);
});

// Introduces easing for anchor (ie. same page) links.
// From http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function () {
    var target;
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});

// Subtle transparency change on arrow hover
$('.scroll-button').hover(function () {
    $(this).animate({opacity: 1}, {queue: false, duration: 250});
}, function () {
    $(this).animate({opacity: 0.9}, {queue: false, duration: 250});
});
