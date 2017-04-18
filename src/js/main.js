/**
 * Created by Oleg on 31.03.2017.
 */

(function ($) {

    $(document).ready(function () {



        var iconClose       = false, //nid for changed icons menu on close icon
            modal           = $('.modal-box'),
            opnBtn          = $('.callback-btn'),
            closeBtn        = $('.modal-close'),
            upBtn           = $('#up-btn'),
            sbAddress       = $('.sidebar-address'),
            cbNav           = $('.sidebar nav, .download');



/* ---------------------------------------------- /*
 * Sidebar sticky
/* ---------------------------------------------- */

        $("#sidebar").stick_in_parent({});

        function offStiky () {

            if ( screen.width <= 768) {
                $("#sidebar").trigger("sticky_kit:detach");
                $("#sidebar").css({
                    "position": "fixed",
                    "top": "0"
                });

            }else {
                $("#sidebar").stick_in_parent({});

            }
}
        $(window).ready(offStiky);
        $(window).resize(offStiky);

/* ---------------------------------------------- /*
 * Up button
/* ---------------------------------------------- */


        upBtn.click(function() {
            $('html, body').stop().animate({scrollTop : 0}, 300);
        });


/* ---------------------------------------------- /*
 * menu show
/* ---------------------------------------------- */


        $('.menu-btn').on('click', function () {
            sbAddress.removeClass('open');//remove added classes
            sbAddress.addClass('close');//remove added classes

            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            cbNav.addClass('open'); //shows the desired menu item
        });

        $('.phone-btn').on('click', function () {
            cbNav.removeClass('open');//remove added classes
            cbNav.addClass('close');//remove added classes

            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            sbAddress.addClass('open');  //shows the desired menu item
        });


/******* If click out element *******/

        $(document).on('click', function(event) {
            if ($(event.target).closest("#sidebar, .mobile-sidebar").length) return;

            cbNav.removeClass('open');
            cbNav.addClass('close');
            $('.sidebar, .bg-sidebar').removeClass('open-sidebar');


            sbAddress.removeClass('open');
            sbAddress.addClass('close');
            $('.sidebar, .bg-sidebar').removeClass('open-sidebar');


            $('.menu-btn, .phone-btn').removeClass('active');
            iconClose = false

        });

/* ---------------------------------------------- /*
 * button menu Changed on close
 /* ---------------------------------------------- */

        $(".menu-btn, .phone-btn").on('click', function(e) {
            e.preventDefault();
            if (iconClose == false){
                $(this).addClass('active');
                iconClose = true
            }
            else {
                $('.menu-btn, .phone-btn').removeClass('active');
                iconClose = false
            }
        });

/* ---------------------------------------------- /*
 * Nav active link
 /* ---------------------------------------------- */

        // $(".navbar .navbar-list a ").click(function(e) {
        //     e.preventDefault();
        //     $(".navbar .navbar-list a").removeClass('active');
        //     $(this).addClass('active');
        // });

/* ---------------------------------------------- /*
 *  Pop up
/* ---------------------------------------------- */

        opnBtn.on('click', function() {
            modal.css('display', 'block');
        });
        closeBtn.on('click', function() {
            modal.css('display', 'none');
        });

/* ---------------------------------------------- /*
 *  Slice text
 /* ---------------------------------------------- */


        $(".show-text").click(function() {
            $('.text-over').slideDown('300')

            $('.text-over').toggleClass('open');

            $(this).text(function(i, text){
                return text === "Свернуть" ? "Подробнее" : "Свернуть";
            })
        });



    });
})(jQuery);

$(document).on('click', '.header-calc .calc-btn, .online .calculation a', function(){

    localStorage["calcHistory"] = location.href;

});

$(document).on('ready', function(){

   localStorage.removeItem("calcHistory");

});



