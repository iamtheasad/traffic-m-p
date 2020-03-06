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

            if (topPosition > 900) {
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

    });

})();
