/**
 * Created by Oleg on 31.03.2017.
 */

(function ($) {

    $(document).ready(function () {



    var     modal           = $('.modal-box'),
            count           = $('.page').length,
            pageIndex,
            startPage;






        /* ---------------------------------------------- /*
         * Slider
         /* ----------------------------------------- */

        $('.news-slider').slick({

            infinite: false,
            touchMove: false,
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow')
        });


        function slidPage() {
            pageIndex = $('.page.slick-active').index()+1;

            startPage = (pageIndex + '/' + count);

            $('.slick-pag').text(startPage)

        }

        slidPage();
        $('.news-slider').on('swipe', function(event, slick, direction){
            slidPage();
        });


        $('.slick-arrow').on('click', function () {
            slidPage()
        });

        /* ---------------------------------------------- /*
         *  Carousel reviews
         /* ---------------------------------------------- */

        $('.reviews-slide').slick({
            dots: true,
            arrows: false,
            slidesToScroll: 1,
            adaptiveHeight: true,
            touchMove: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,

            customPaging : function(i) {

                return '<a class="slide"></a>';
            }

        });

        /* ---------------------------------------------- /*
         *  Carousel footer
         /* ---------------------------------------------- */

        $('.responsive-carousel').slick({
            dots: false,
            touchMove: false,

            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            prevArrow: $('.prev-item'),
            nextArrow: $('.next-item'),

            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }

            ]

        });



    });
})(jQuery);





