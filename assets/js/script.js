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
            nav: true,
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

    });

})();
