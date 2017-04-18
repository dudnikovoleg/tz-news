/**
 * Created by Oleg on 13.04.2017.
 */
(function ($) {
    $(document).ready(function () {



        var adItem      = $('.types-ad-item'),
            listCity    = $('.list-city'),
            openCity    = false,
            defaultCity = 'Выберите город',
            cityName;

/* ---------------------------------------------- /*
 * Function for show and hide city list and active class
 /* ---------------------------------------------- */

function toggleListCity(target) {
   
    if ( openCity === false )
    {
        $(target).addClass('active');
        $('.select-city .list-city').addClass('open');

        $('.types-ad-item').removeClass('active');
        
        return openCity = true
    }
    else {

        $('.selecter, .types-ad-item').removeClass('active');//remove all classes active
        $('.select-city .list-city').removeClass('open');

        return openCity = false
    }
}

 /* ---------------------------------------------- /*
* Inserts the name of the city
/* ---------------------------------------------- */

        $(".list-city-row li").on('click', function() {

            if ($(this).attr('id') === 'removeCity'){
                $(".selecter").text(defaultCity);
            }else {
                cityName = $(this).text();
                $(".selecter").text(cityName);
            }

            toggleListCity(this); 

            var city = $(this).attr("city");

            if ( $(this).attr("city") ) {

                $('.types-ad-item').hide();

                $('.types-ad-item [city="'+city+'"]').parents(".types-ad-item").show().attr("city", city);

            } else {

                $('.types-ad-item').show();

                $('.types-ad-item').attr("city", '');

            }

            return openCity = false

        });

/* ---------------------------------------------- /*
 * Main function for city list
 /* ---------------------------------------------- */

        adItem.on('click', function (e) {

            if ( $(this).attr("city") ) {

                location = $(this).find('[city="'+$(this).attr("city")+'"] a').attr("href");

                return false;

            }

            //toggleListCity(this);
           
            if( $(this).hasClass("active") ) {

                $("section > .list-city, .types-ad-wrap > .list-city").remove();
                $('.types-ad-item').removeClass('active');

                return false;

            }            

            $('.selecter, .types-ad-item').removeClass('active');
            
            $('.select-city .list-city').removeClass('open');
            $("section > .list-city, .types-ad-wrap > .list-city").remove();

            $(this).addClass('active');

            var listCity1 = $(this).find(".list-city").clone().attr("style", '');

           if (screen.width <= 630){


                if ($(this).index() === 1 || $(this).index() === 0){

                    $(this).parent().children($('.types-ad-item'))
                        .eq(1).after(listCity1);//Inserts an element after the second element
                                               // if there are two elements in the row
                }
                else {
                    $(this).parent().after(listCity1);//Inserts an element after the parent element
                }


           }

           else {
               $(this).parent().after(listCity1);//Inserts an element after the parent element
           }

        });

/* ---------------------------------------------- /*
 * Hide cities block on click outside him
 /* ---------------------------------------------- */

        $(document).click(function(e){ 

            if( $(e.target).closest(".types-ad-item, .selecter, .list-city").length ) return;  

            $("section > .list-city, .select-city .list-city").removeClass("open");

            $(".types-ad-item, .selecter").removeClass('active');

            e.stopPropagation();

        }); 

/* ---------------------------------------------- /*
 * Function for top city list
 /* ---------------------------------------------- */


        $('.selecter').on('click', function () {

            openCity = false;

            toggleListCity(this);

            $("section > .list-city, .types-ad-wrap > .list-city").remove();            

            //$('.selecter').after(listCity);

        });

/* ---------------------------------------------- /*
 * Coled plugin perfectScrollbar for top city list
 /* ---------------------------------------------- */

        //$('.list-city-top').perfectScrollbar();


          });
})(jQuery);
