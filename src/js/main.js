/**
 * Created by Oleg on 31.03.2017.
 */

(function ($) {

    $(document).ready(function () {



        var iconClose       = false, //nid for changed icons menu on close icon
            allMenuBlock    = $('.sidebar-main, .sidebar-sub, .sidebar-address, .download-price, .form-search'),
            modal           = $('.modal-box'),
            opnBtn          = $('.callback-btn'),
            closeBtn        = $('.modal-close'),
            upBtn           = $('#up-btn');

/* ---------------------------------------------- /*
 * Up button
 /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100 && screen.width >= 768) {
                if (upBtn.is(':hidden')) {
                    upBtn.css({opacity : 1}).fadeIn('slow');
                }
            } else { $('#up-btn').stop(true, false).fadeOut('fast'); }
        });
        upBtn.click(function() {
            $('html, body').stop().animate({scrollTop : 0}, 300);
        });

/* ---------------------------------------------- /*
 * menu show
/* ---------------------------------------------- */

        $('.menu-btn').on('click', function () {
            allMenuBlock.removeClass('open');   //remove added classes
            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            $('.sidebar-main, .sidebar-sub, .download-price').addClass('open'); //shows the desired menu item
        });

        $('.phone-btn').on('click', function () {
            allMenuBlock.removeClass('open');//remove added classes
            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            $('address ').addClass('open');  //shows the desired menu item
        });

        $('.search-btn').on('click', function () {
            allMenuBlock.removeClass('open');//remove added classes
            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            $('.form-search ').addClass('open');     //shows the desired menu item

        });

/* ---------------------------------------------- /*
 * button menu Changed on close
 /* ---------------------------------------------- */

        $(".menu-btn, .phone-btn, .search-btn").on('click', function(e) {
            e.preventDefault();
            if (iconClose == false){
                $(this).addClass('active');
                iconClose = true
            }
            else {
                $('.menu-btn, .phone-btn, .search-btn').removeClass('active');
                iconClose = false
            }
        });

/* ---------------------------------------------- /*
 * Nav active link
 /* ---------------------------------------------- */


        $(".navbar .navbar-list a ").click(function(e) {
            e.preventDefault();
            $(".navbar .navbar-list a").removeClass('active');
            $(this).addClass('active');
        });

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
 *  Go to pages
 /* ---------------------------------------------- */

    /* page 1 */

    $('.to_fool-1').on('click', function () {
        $('#reload-content').load('../templates/news_1.html')
    });

    /* page 2 */

    $('.to_fool-2').on('click', function () {
        $('#reload-content').load('../templates/news_1.html')
    });

    /* page 3 */

    $('.to_fool-3').on('click', function () {
        $('#reload-content').load('../templates/news_1.html')
    });



   /* $('.v-link, .f-link, .g-link ').html(VK.Share.button(false, {type: 'custom', text: '<img src="../img/social_link-v.png" />'}));*/

    });
})(jQuery);





