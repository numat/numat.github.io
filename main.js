/* jshint globalstrict: true, undef: true, unused: true */
/*global $, document, window, navigator, skrollr, setTimeout*/
'use strict';

$(document).ready(function () {
    var lazy, lazyBackground, emailRegex, $hb, $nb, $masonry, isIE;

    // Move headers on scroll. Disable mobile because adding #skrollr-body messes
    // with the navbar colorchage logic below
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }

    // From http://stackoverflow.com/questions/19999388/jquery-check-if-user-is-using-ie
    isIE = function () {
        var ua, rv, msie, trident, edge;
        ua = window.navigator.userAgent;
        msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        trident = ua.indexOf('Trident/');
        if (trident > 0) {
            rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        edge = ua.indexOf('Edge/');
        if (edge > 0) {
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        return false;
    }();

    // Open all non-local links in new tab
    // This allows us to use markdown syntax without worrying about target="_blank"
    $('a[href^=http]').attr('target', '_blank');

    // Navbar change between transparent and white after initial image (if exists)
    // Disable for IE, as it doesn't support image filters
    $hb = $('.header-background, .background-video');
    $nb = $('.navbar');
    if ((!$hb.length || isIE) && $nb.hasClass('navbar-transparent')) {
        $nb.removeClass('navbar-transparent').addClass('navbar-white');
    }
    $(document).on('scroll', function () {
        if ($hb.length && !isIE) {
            if ($(document).scrollTop() > $hb.height() && $nb.hasClass('navbar-transparent')) {
                $nb.removeClass('navbar-transparent').addClass('navbar-white');
            } else if ($(document).scrollTop() < $hb.height() && $nb.hasClass('navbar-white')) {
                $nb.removeClass('navbar-white').addClass('navbar-transparent');
            }
        }
    });

    // Reduce navbar padding on IE to handle its different CSS interpretation
    if (isIE) {
        $('.nav > li > a').css({'padding-left': '8px', 'padding-right': '8px'});
    }

    // Lazy load images
    lazy = function () {
        $(this).attr('src', $(this).attr('data-src'));
        $(this).load(function () {
            this.style.opacity = 1;
            $(this).css('height', 'auto');
        });
    };

    // Background image loading. Need to load into an unassigned img in
    // order to catch onload event
    lazyBackground = function () {
        var self = this, dataSrc = $(this).attr('data-src');
        $('<img/>').attr('src', dataSrc).load(function () {
            $(self).css('background-image', 'url(' + dataSrc + ')');
            $(this).remove();
            self.style.opacity = 1;
        });
    };

    $('.post-img, .tech-img, .platform-img, .partner-img').each(lazy);
    $('.person, .partner').find('img').each(lazy);
    $('.person-detail, .partner-detail').find('img').each(lazy);
    $('.header-background').each(lazyBackground);

    // An obsessive-compulsive edit to get the youtube videos to scale nicely
    $('.entry-media').fitVids();

    // Cascading news articles
    $masonry = $('.masonry');
    if ($masonry.length) {
        $masonry.masonry({
            itemSelector: '.post',
            isFitWidth: true,
            isAnimated: true,
            animationOptions: {
                duration: 2000,
                easing: 'linear',
                queue: false
            }
        });
    }

    // Handles interactivity with people page
    $('.person').click(function () {
        var speed, id, selected;
        speed = 250;
        id = $(this).attr('id');
        selected = $(this).data('selected');

        // Slide divs, change colors, and keep track with a "selected" data property
        $('.person').data('selected', false);
        $('.person').find('img').addClass('grayscale');
        $('.person-detail').slideUp(speed);
        if (selected) {
            $('.person').find('img').fadeTo(speed, 1);
        } else {
            $(this).find('img').removeClass('grayscale');
            $(this).find('img').fadeTo(speed, 1);
            $('.person:not(#' + id + ')').find('img').fadeTo(speed, 0.75);
            setTimeout(function () { $('#' + id + '-detail').slideDown(speed); }, speed);
        }
        $(this).data('selected', !selected);
    });

    // Handles interactivity with partners page
    $('.partner').click(function () {
        var speed, id, selected;
        speed = 250;
        id = $(this).attr('id');
        selected = $(this).data('selected');

        // Slide divs, change colors, and keep track with a "selected" data property
        $('.partner').data('selected', false);
        $('.partner').find('img').addClass('grayscale');
        $('.partner-detail').slideUp(speed);
        if (selected) {
            $('.partner').find('img').fadeTo(speed, 1);
        } else {
            $(this).find('img').removeClass('grayscale');
            $(this).find('img').fadeTo(speed, 1);
            $('.partner:not(#' + id + ')').find('img').fadeTo(speed, 0.75);
            setTimeout(function () { $('#' + id + '-detail').slideDown(speed); }, speed);
        }
        $(this).data('selected', !selected);
    });

    // Handles email requests from the ION-X page
    $('.ionx-learn-more-button').click(function () {
        $.ajax({
            type: 'POST',
            url: 'https://internal.numat-tech.com/ionx-email/',
            data: $('.ionx-learn-more-input').val(),
            success: function () {
                $('.ionx-learn-more-input, .ionx-learn-more-button, .ionx-learn-more-failure').hide();
                $('.ionx-learn-more-success').show();
            },
            error: function () {
                $('.ionx-learn-more-input, .ionx-learn-more-button, .ionx-learn-more-success').hide();
                $('.ionx-learn-more-failure').show();
            }
        });
        $('.ionx-learn-more-input, .ionx-learn-more-button').prop('disabled', true);
        $('.ionx-learn-more-success, .ionx-learn-more-failure').hide();
    });
    emailRegex = /^\S+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    $('.ionx-learn-more-input').keyup(function (e) {
        $('.ionx-learn-more-button').prop('disabled', !(emailRegex.test($(this).val())));
        if (e && e.keyCode === 13) {
            $('.ionx-learn-more-button').click();
        }
    });
    $('.ionx-learn-more-reset').click(function () {
        $('.ionx-learn-more-success, .ionx-learn-more-failure').hide();
        $('.ionx-learn-more-input').prop('disabled', false).val('').show();
        $('.ionx-learn-more-button').show();
    });
});
