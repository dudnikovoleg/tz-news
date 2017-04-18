/**
 * Created by Oleg on 18.04.2017.
 */

(function ($) {

    $(document).ready(function () {


        var
            count           = $('.folio-img').length,
            pageIndex,
            startPage;


        $('#compare-slide-img').slick({
            dots: false,
            touchMove: false,
            infinite: true,
            prevArrow: $('.prev-item'),
            nextArrow: $('.next-item'),



        });

        function slidPage() {
            pageIndex = $('.folio-img.slick-active').index();

            startPage = ('Фото ' + pageIndex + ' из ' + count + '.' );

            $('.slick-pag').text(startPage)
        }

        slidPage();
        $('#compare-slide-img').on('swipe', function(event, slick, direction){
            slidPage();
        });


        $('.slick-arrow').on('click', function () {
            slidPage()
        });

    });
})(jQuery);



