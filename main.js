/*global $, location, document, window, screen, navigator, Headroom, skrollr, setTimeout*/
"use strict";

$(document).ready(function () {
    var headroom, masonryOpts, pad;

    // Show and hide the navbar on scroll
    headroom = new Headroom(document.querySelector('.navbar-fixed-top'));
    headroom.init();

    // Move headers on scroll
    skrollr.init();

    // Changes background scrolling and sizing for mobile devices
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.front').css(
            {'background-attachment': 'scroll', 'background-size': 'auto 100%'}
        );
    }

    // Vertically centers images on the technology page
    // (could not get CSS solutions to play well with bootstrap)
    pad = function () {
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

    // An obsessive-compulsive edit to get the youtube videos to scale nicely
    $('.entry-media').fitVids();

    // Cascading news articles
    masonryOpts = {
        itemSelector: '.post',
        isFitWidth: true,
        isAnimated: true,
        animationOptions: {
            duration: 2000,
            easing: 'linear',
            queue: false
        }
    };
    $('.masonry').masonry(masonryOpts).imagesLoaded(function () {
        $('.masonry').masonry(masonryOpts); // Reload after images are in
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
            $img.attr('src', $img.attr('data-src'));
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
