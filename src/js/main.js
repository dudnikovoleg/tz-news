/**
 * Created by Oleg on 28.03.2017.
 */
(function($){
    $(document).ready(function () {

//sticky for left static

       $("#responsive-menu, #sidebar-mob").stick_in_parent();



        var menu = $('.mob-menu'),
            search = $('.mob-search'),
            sidebar = $('.sidebar'),
            isClosed = false;

        menu.on('click', function () {
            menuShow();
        });
        search.on('click', function () {
            searchShow();
        });



        function menuShow() {

            if (isClosed == true) {
                $(sidebar).css("left", "-200px");
                $(".remove-men, .glyphicon-remove").css("display", "none");
                isClosed = false;
            } else {
                $(sidebar).css("left", "49px");
                $(".remove-men").css("display", "inline-block");

                isClosed = true;
            }
        }
        function searchShow() {

            if (isClosed == true) {
                $(sidebar).css("left", "-200px");
                $(".sidebar-sub-menu, .glyphicon-remove").css("display", "none");
                isClosed = false;
            } else {
                $(sidebar).css("left", "49px");
                $(".remove-search").css("display", "inline-block");
                isClosed = true;
            }
        }

    });
})(jQuery);
