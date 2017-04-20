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

/* ---------------------------------------------- /*
 *  Forms sending
 /* ---------------------------------------------- */
$(function(){

    $(document).on("submit","#Form",function(e){

        e.preventDefault();       

        var stop = false;

        $(this).find("input").each(function(){
            
            if( $(this).val().length == 0 ){

                $(this).parents("form").find('[type="submit"]').addClass("error");
                $(this).parents("form").find('input,textarea').trigger("blur");  
                stop = true;              
                
            }

        });

        if ( stop ) {
            return false;
        }        

        var m_method=$(this).attr('method');
        var m_action=$(this).attr('action');
        var m_data=$(this).serialize();

        $.ajax({
            type: m_method,
            url: m_action,
            data: m_data,
            resetForm: 'true',
            success: function(result){
                var data = $(result).find(".modal-content-form").html();                
                $(".modal-content-form").html(data);
                $(".mesage-report").css("opacity", "1");
                setTimeout( function() { $(".mesage-report").css("opacity", "0"); }, 2000);

            }

        });

    });

});

$(function(){

    $(document).on("submit","#Form-question",function(e){

        e.preventDefault();

        var stop = false;

        $(this).find("input").each(function(){
            
            if( $(this).val().length == 0 ){

                $(this).parents("form").find('[type="submit"]').addClass("error");
                $(this).parents("form").find('input,textarea').trigger("blur");  
                stop = true;              
                
            }

        });
        if ( stop ) {
            return false;
        }        

        var m_method=$(this).attr('method');
        var m_action=$(this).attr('action');
        var m_data=$(this).serialize();

        $.ajax({
            type: m_method,
            url: m_action,
            data: m_data,
            resetForm: 'true',
            success: function(result){
                var data = $(result).find(".question-form-content").html();                
                $(".question-form-content").html(data);
                $(".question-form-report").css("opacity", "1");
                setTimeout( function() { $(".question-form-report").css("opacity", "0"); }, 2000);

            }

        });

    });

});


/* ---------------------------------------------- /*
 *  Forms validation
 /* ---------------------------------------------- */

$(document).on( 'blur' , '[name="name"] , [name="surname"] , [name="email"] , [name="tel"] , [name="question"] ' , function(){

    var field = $(this).attr("name");
    var fieldValue = $(this).val();
    var message, error;

    switch (field) {

        case 'name':
            message = 'Имя должно быть не меньше 3 символов';

            error = is_not_empty( fieldValue , message , 1 );

            if ( error ) {
                
                $(this).siblings(".form-field-error").text(error);
                $(this).addClass("error");
                $(this).parents("form").find('[type="submit"]').addClass("error");

            } else {
                $(this).siblings(".form-field-error").empty();
                $(this).removeClass("error");
                $(this).parents("form").find('[type="submit"]').removeClass("error");
            }
               
            break;


        case 'surname':
            message = 'Фамилия должна быть не меньше 3 символов';
            
            error = is_not_empty( fieldValue , message , 1 );

            if ( error ) {

                $(this).siblings(".form-field-error").text(error);
                $(this).addClass("error");
                $(this).parents("form").find('[type="submit"]').addClass("error");

            } else {
                $(this).siblings(".form-field-error").empty();
                $(this).removeClass("error");
                $(this).parents("form").find('[type="submit"]').removeClass("error");
            }
             
            break;


        case 'email': 

            var mailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]*\.)+[A-z]{2,4}$/i;           

            if( !mailRegExp.test(fieldValue) ) {

                message = 'E-mаil введен не корректно';

                $(this).siblings(".form-field-error").text(message);
                $(this).addClass("error");
                $(this).parents("form").find('[type="submit"]').addClass("error");
                              
            } else {
                $(this).siblings(".form-field-error").empty();
                $(this).removeClass("error");
                $(this).parents("form").find('[type="submit"]').removeClass("error");
            }

            break;


        case 'tel':            

            var telRegExp = /[0-9]{10}/i;           

            if( !telRegExp.test(fieldValue) || fieldValue.length != 10 ) {

                message = 'Телефон должен состоять из 10 цифр';

                $(this).siblings(".form-field-error").text(message);
                $(this).addClass("error");
                $(this).parents("form").find('[type="submit"]').addClass("error");
                              
            } else {
                $(this).siblings(".form-field-error").empty();
                $(this).removeClass("error");
                $(this).parents("form").find('[type="submit"]').removeClass("error");
            }

            break;


        case 'question':
            message = 'Сообщение должно быть не меньше 3 символов';
            
            if ( fieldValue.length < 3 ) {
            
                $(this).siblings(".form-field-error").text(message);
                $(this).addClass("error");
                $(this).parents("form").find('[type="submit"]').addClass("error");

            } else {
                $(this).siblings(".form-field-error").empty();
                $(this).removeClass("error");
                $(this).parents("form").find('[type="submit"]').removeClass("error");
            }

            break;

   
    }

    function is_not_empty ( value , message , forbid = 0 , limit = 3 ) { 

        var Reg62=/^[а-яА-ЯёЁa-zA-Z0-9]+$/i;
        

        if( !Reg62.test(value) && forbid == 1 ) {

            message = 'Только цифры и буквы';

            return message;              
        }               

        if ( value.length < limit ) {
            
            return message;
        }

        return false;   

    }


});

