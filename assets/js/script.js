(function iamStrict() {
    "use strict"; // Javascript Strict Method

    jQuery(document).ready(function () {

        /* Case Study Slider Start */
        $('.case_studies_carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
        /* Case Study Slider Start */


        /* Testimonial Slider Start */
        $(".testimonial_carousel").owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplaySpeed: 1000,
        });
        /* Testimonial Slider End */

        /* Home Page Company Logo Carousel Start */
        $('.logo_carousel').owlCarousel({
            items: 5,
            loop: true,
            margin: 100,
            autoplay: true,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
        });
        /* Home Page Company Logo Carousel End */


        /* Scroll to Top Button Start */
        // https://codepen.io/karencho/pen/KIgur
        var topBottomButton = $(".bottom_to_top");

        $(window).scroll(function () {

            var topPosition = $(this).scrollTop(); // scrollTop is a jquery function

            if (topPosition > 200) {
                $(topBottomButton).css({
                    "opacity": "1",
                })

            } else {
                $(topBottomButton).css({
                    "opacity": "0",
                })
            }
        });

        $(topBottomButton).on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;

        });
        /* Scroll to Top Button End */


        // Blog Single Menu / Navigation Background Change on Scrolling
        $(window).scroll(function () {
            $('.menu_area').toggleClass('scrolled', $(this).scrollTop() > 100
            );
        });


        /* Home-2 Testimonial Slider Start */
        $(".home_2_testimonial_carousel").owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplaySpeed: 1000,
        });
        /* Home-2 Testimonial Slider End */


        /* Home-3 Hero Slider Start */
        $(".homepage_3_slides").owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            dots: true,
            nav: true,
            navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: {
                0: {
                    nav: false,
                },
                600: {
                    nav: true,
                }
            }
        });
        /* Home-3 Hero Slider End */


        /* Home-3 Header Start */
        $('.video_play_btn').magnificPopup({
            type: 'iframe',

            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%?autoplay=2' // https: added in the url
                    }

                },

                srcAction: 'iframe_src',
            }
        });
        /* Home-3 Header End */


        /* Home-4 Canvas Menu Show and Off Start */
        $('.menu_trigger').on('click', function () {
            $('.off_canvas_menu').addClass('show_off_canvas_menu');
            $('.off_canvas_menu_shade').addClass('active');
        });

        $('.menu_close, .off_canvas_menu_shade').on('click', function () {
            $('.off_canvas_menu').removeClass('show_off_canvas_menu');
            $('.off_canvas_menu_shade').removeClass('active');
        });
        /* Home-4 Canvas Menu Show and Off End */


        /* Home-4 Search Box Show and Hide Start */
        $(".search_trigger").on('click', function () {
            $('.search_box').toggleClass('active');
        });

        $('.homepage_4_slides').on('click', function () {
            $('.search_box').removeClass('active');
        });
        /* Home-4 Search Box Show and Hide End */


        /* Home-4 Testimonial Hover Effect Start */
        $('.single_testimial_box_4').hover(function () {
            $('.single_testimial_box_4').removeClass('active');
            $(this).addClass('active');
        });
        /* Home-4 Testimonial Hover Effect End */


        /* Home-4 How Traffic Work Popup Video Start */
        $('.video_play_icon').magnificPopup({
            type: 'iframe',

            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // https: added in the url
                    }

                },

                srcAction: 'iframe_src',
            }
        });
        /* Home-4 How Traffic Work Popup Video End */


    });
})();
