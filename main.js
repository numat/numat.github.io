/*global $, document, window, navigator, skrollr, setTimeout*/
"use strict";

$(document).ready(function () {
    var lazy, lazyBackground, pad, $hb, $nb;

    // Move headers on scroll. Disable mobile because adding #skrollr-body messes
    // with the navbar colorchage logic below
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }

    // Navbar change between transparent and white after initial image (if exists)
    $hb = $('.header-background');
    $nb = $('.navbar');
    if (!$hb.length && $nb.hasClass('navbar-transparent')) {
        $nb.removeClass('navbar-transparent').addClass('navbar-white');
    }
    $(document).on('scroll', function () {
        if ($hb.length) {
            if ($(document).scrollTop() > $hb.height() && $nb.hasClass('navbar-transparent')) {
                $nb.removeClass('navbar-transparent').addClass('navbar-white');
            } else if ($(document).scrollTop() < $hb.height() && $nb.hasClass('navbar-white')) {
                $nb.removeClass('navbar-white').addClass('navbar-transparent');
            }
        }
    });

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

    $('.post-img, .tech-img').each(lazy);
    $('.person').find('img').each(lazy);
    $('.header-background').each(lazyBackground);

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
