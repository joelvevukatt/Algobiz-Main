/*

[ComeLooks Core Script]

Project: ComeLooks - Multipurpose Business HTML Template 
Version: 1.0
Author : themelooks.com

*/

(function ($) {
    "use strict"; // this function is executed in strict mode

    $(function () {
        /* -------------------------------------------------------------------------*
         * HOME COLUMNS HEIGHT EQUAL TO WINDOW HEIGHT
         * -------------------------------------------------------------------------*/
        $('.home-content, .home-image').css({
            'min-height': $(window).outerHeight()
        });
        
        $(window).on('resize', function () {
            $('.home-content, .home-image').css({
                'min-height': $(window).outerHeight()
            });
        });
        
        /* -------------------------------------------------------------------------*
         * COUNTDOWN
         * -------------------------------------------------------------------------*/
        $('[data-countdown]').each(function () {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<p class="countdown-days"><span class="value">%-D</span> <span class="text">days</span></p> <p class="countdown-hours"><span class="value">%-H</span> <span class="text">hours</span></p> <p class="countdown-minutes"><span class="value">%M</span> <span class="text">minutes</span></p> <p class="countdown-second"> <span class="value">%S</span> <span class="text">seconds</span></p>'));
            });
        });
        
        /* -------------------------------------------------------------------------*
         * ANIMATE SCROLL
         * -------------------------------------------------------------------------*/
        $('#navigation li a, .back-to-top a').on('click', function (e) {
            e.preventDefault();
            var attr = $(this).attr('href');
            $(attr).animatescroll({
                padding: -1,
                easing: 'easeInOutExpo', //swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
                scrollSpeed: 2000
            });
        });
        
        /* -------------------------------------------------------------------------*
         * MAP
         * -------------------------------------------------------------------------*/
        var map, marker, myLatLng;
        
        function initMap() {
            myLatLng = {lat: 23.790546, lng: 90.375583};
            
            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 16,
                scrollwheel: false,
                disableDefaultUI: true,
                zoomControl: true
            });
            
            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true
            });
        }
        
        if ( $("#map").length ) {
           initMap();
        }
        
        /* -------------------------------------------------------------------------*
         * PRETTY PHOTO
         * -------------------------------------------------------------------------*/
		var $gallery = $('#gallery');
		
        if ( $gallery.length ) {
			$gallery.on('click', 'a[data-gal^="prettyPhoto"]', function (e) {
				e.preventDefault();
				
				var $t = $(this);
				
				$.prettyPhoto.open( $t.attr('href') );
			});
        }

        if ( $('.about-video').length ) {
            $(".about-video a[data-gal^='prettyPhoto']").prettyPhoto({
                default_width: 900,
                default_height: 544
            });
        }

        /* -------------------------------------------------------------------------*
         * CONTACT PAGE FORM VALIDATION
         * -------------------------------------------------------------------------*/
        if ( $('#contact-form').length ) {
            $('#contact-form').validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: "required"
                },
                errorPlacement: function (error, element) {
                    return true;
                },
                submitHandler: function() {
                    $('.contact-form-status').show().html('<div class="alert alert-success"  role="alert">Thanks! Your message has been sent.</div>').delay(1000).fadeOut("slow", function () {
                        $(window).trigger('resize').trigger('scroll');
                    });
                    $(window).trigger('resize').trigger('scroll');
                }
            });
        }
        
        if ( $('#subscribeForm').length ) {
            $('#subscribeForm').validate({
                rules: {
                    EMAIL: {
                        required: true,
                        email: true
                    }
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
        
        if ( $('#post-comment-form').length ) {
            $('#post-comment-form').validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    comments: "required"
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }

        /* -------------------------------------------------------------------------*
         * wowJS
         * -------------------------------------------------------------------------*/
        if ( $('.wow').length ) {
            var wow = new WOW();
            wow.init();
        }
        
        /* -------------------------------------------------------------------------*
         * PROGRESS BAR ANIMATIONS
         * -------------------------------------------------------------------------*/
        if ( $('.progress-bar').length ) {
            var waypoint = new Waypoint({
                element: $('.progress-bar'),
                handler: function (direction) {
                    $('.progress-bar').each(function () {
                        var bar_value = $(this).attr('aria-valuenow') + '%';
                        $(this).css("width", bar_value);
                    });
                    this.destroy();
                },
                offset: '100%'
            });
        }
        
        if ( $('#features').length ) {
            var waypoint2 = new Waypoint({
                element: $('#features'),
                handler: function (direction) {
                    $('.back-to-top').toggleClass('show');
                },
                offset: '80%'
            });
        }
        
        /* -------------------------------------------------------------------------*
         * OWL CARSOUSEL
         * -------------------------------------------------------------------------*/
        var homeSlider = $(".home-slider")
        ,   testimonialSlider = $('.testimonial-slider')
        ,   teamSlider = $('.team-members')
        ,   aboutPageTeamSlider = $('.about-page-team-members')
        ,   brandSlider = $('.brand-items')
        ,   postImageSlider = $('.blog-page-post-slider');

        if ( homeSlider.length ) {
            homeSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                addClassActive : true
            });
            $(".owl-next-button").on('click', function () {
                homeSlider.trigger('owl.next');
            });
            $(".owl-prev-button").on('click', function () {
                homeSlider.trigger('owl.prev');
            });
        }

        if ( testimonialSlider.length ) {
            testimonialSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                dots: true
            });
        }

        if ( teamSlider.length ) {
            teamSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                items : 4,
                itemsTablet: [720, 2],
                itemsMobile : [480, 1],
                autoPlay: false,
                navigation: true, // Show next and prev buttons
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

        if ( aboutPageTeamSlider.length ) {
            aboutPageTeamSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 2,
                itemsDesktop: [1000,2], //5 items between 1000px and 901px
                autoPlay: false,
                navigation: true, // Show next and prev buttons
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

        if ( brandSlider.length ) {
            brandSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 600,
                items : 4,
                autoPlay: true,
                navigation: true, // Show next and prev buttons
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

        if ( postImageSlider.length ) {
            postImageSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                navigation: false
            });
            $(".blog-page-post-slider-controls .owl-next-button").on('click', function () {
                postImageSlider.trigger('owl.next');
            });
            $(".blog-page-post-slider-controls .owl-prev-button").on('click', function () {
                postImageSlider.trigger('owl.prev');
            });
        }
        
        /* -------------------------------------------------------------------------*
         * COUNTER
         * -------------------------------------------------------------------------*/
        if ( $('.counter-number').length ) {
            $('.counter-number').counterUp({
                delay: 10,
                time: 1000
            });
        }
        
        /* -------------------------------------------------------------------------*
         * ACCORDION
         * -------------------------------------------------------------------------*/
        $('.panel-heading a').on('click', function(e){
            if($(this).parents('.panel').children('.panel-collapse').hasClass('in')) {
                e.stopPropagation();
                e.preventDefault();
            }
        });
        
        /* -------------------------------------------------------------------------*
         * TOGGLE OFF-CANVAS MENU
         * -------------------------------------------------------------------------*/
        var offCanvasMenu = $('#off-canvas-menu');
        
        $('.menu-toggle-btn button').on('click', function () {
            offCanvasMenu.toggleClass('menu-open');
        });
        
        $('.close-btn button, .home-slider, #features, #about, #services, #subscribe, #gallery, #counter, #team, #testimonial, #pricing-table, #brands, #blog, #contact, #map, #footer, #aboutPage, .blog-header-content, #ptc-page, .coming-soon-page, .page-404').on('click', function () {
            offCanvasMenu.removeClass('menu-open');
        });

        /* -------------------------------------------------------------------------*
         * BACKGROUND VIDEO
         * -------------------------------------------------------------------------*/
        if ( $('#testimonial').length ) {
            $('#testimonial').tubular({videoId: '2GqExKSwTEA', mute: true});
        }
    });

    $(window).on('load', function () {
        /* -------------------------------------------------------------------------*
         * PRODUCT GALLERY
         * -------------------------------------------------------------------------*/
        if ( $('.gallery-items').length ) {
            var gallery = $('.gallery-items')
            ,   galleryItem = '.gallery-item';

            gallery.isotope({
                animationEngine: 'best-available',
                itemSelector: galleryItem
            });
            
            $('.gallery-filter-menu ul').on('click', function(e) {
                if ( $(e.target).is('a') ) {
                    e.preventDefault();
                    var selector = $(e.target).data('filter');
                    var sel_it;
                    
                    if (selector !== '*') {
                        var sel_it = '.' + selector;
                    } else {
                        var sel_it = selector;
                    }
                    gallery.isotope({
                        filter: sel_it
                    });
                    $(window).trigger('resize').trigger('scroll');
                }
            });
        
            $('.load-more-btn').one('click', function () {
                var hiddenItems = $('.hidden-items').html();
                $('.gallery-items').append(hiddenItems).isotope('reloadItems').isotope({ sortBy: 'original-order' });
                $(this).addClass('disabled');
                $(window).trigger('resize').trigger('scroll');
            });
        }
        
        /* -------------------------------------------------------------------------*
         * TOOLTIP
         * -------------------------------------------------------------------------*/
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                trigger: 'hover manual'
            });
        }
        
        $('#navigation li.active, .menu-toggle-btn button').tooltip('show');
        
        $('#navigation').on('activate.bs.scrollspy', function (event) {
            $(this).children('ul').children('li').not('.active').tooltip('hide');
            $(this).children('ul').children('li.active').tooltip('show');
        });
        
        /* -------------------------------------------------------------------------*
         * FLICKER
         * -------------------------------------------------------------------------*/
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=64801217@N07&lang=en-us&format=json&jsoncallback=?", function (data) {
            $.each(data.items, function (i, item) {
                if (i <= 11) { // <— change this number to display more or less images
                    $("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul").wrap("<li><a href='" + item.link + "'target='_blank' title='" + item.title + "' alt='" + item.alt + "'></a></li>");
                }
            });
        });

        /* ------------------------------------------------------------------------- *
         * TWITTER WIDGET
         * ------------------------------------------------------------------------- */
        var $footerTwitter = $('#footerTwitter');

        if ( $footerTwitter.length ) {
            twttr.widgets.createTimeline({
                sourceType: "profile",
                screenName: $footerTwitter.data('user-name')
            }, document.getElementById('footerTwitter'));
        }
        
        /* -------------------------------------------------------------------------*
         * PRELOADER
         * -------------------------------------------------------------------------*/
        $(".preloader-holder").fadeOut('slow');
    });
})(jQuery);
