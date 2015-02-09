/*global $, document, navigator, skrollr, setTimeout*/
"use strict";

$(document).ready(function () {
    var lazy, lazyBackground, pad;

    // Move headers on scroll
    skrollr.init({forceHeight: false});

    // Navbar change between transparent and white after initial image
    $(document).on('scroll', function () {
        if($(document).scrollTop() > 700) {
            $('.navbar').removeClass('navbar-transparent').addClass('navbar-white');
        } else {
            $('.navbar').removeClass('navbar-white').addClass('navbar-transparent');
        }
    });

    // Lazy load images
    lazy = function () {
        $(this).attr('src', $(this).attr('data-src'));
        $(this).load(function () {
            this.style.opacity = 1;
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

    $('.post-img').each(lazy);
    $('.person').find('img').each(lazy);
    $('.header-background').each(lazyBackground);

    // Changes background scrolling and sizing for mobile devices
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.front').css(
            {'background-attachment': 'scroll', 'background-size': 'auto 100%'}
        );
    }

    // An obsessive-compulsive edit to get the youtube videos to scale nicely
    $('.entry-media').fitVids();

    // Cascading news articles
    $('.masonry').masonry({
        itemSelector: '.post',
        isFitWidth: true,
        isAnimated: true,
        animationOptions: {
            duration: 2000,
            easing: 'linear',
            queue: false
        }
    });

    // Handles interactivity with people page
    $('.person').click(function () {
        var speed, id, selected, $img, self = this;
        speed = 250;
        id = $(this).attr('id');
        selected = $(this).data('selected');

        // Lazy load images on click
        $img = $('#' + id + '-detail img');
        if ($img.attr('src').substring(0, 4) === 'data') {
            $img.each(lazy);
        }

        // Slide divs, change colors, and keep track with a "selected" data property
        $('.person').data('selected', false);
        $('.person').find('img').addClass('grayscale');
        $('.person-detail').slideUp(speed);
        if (selected) {
            $('.person').find('img').fadeTo(speed, 1);
        } else {
            $(self).find('img').removeClass('grayscale');
            $(self).find('img').fadeTo(speed, 1);
            $('.person:not(#' + id + ')').find('img').fadeTo(speed, 0.75);
            setTimeout(function () { $('#' + id + '-detail').slideDown(speed); }, speed);
        }
        $(this).data('selected', !selected);
    });
});
