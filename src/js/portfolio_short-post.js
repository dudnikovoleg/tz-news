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
            pageIndex = $('.slider-image.slick-active').index();

            slideName = $('.slider-image.slick-active').attr("name");

            startPage = ('Фото ' + pageIndex + ' из ' + count + '. ' );

            $('.slick-pag').text(startPage)
            $('.slide-name').text(slideName)
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



