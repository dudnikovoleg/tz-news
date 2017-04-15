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
        $('.list-city').addClass('open');

        return openCity = true
    }
    else {

        $('.types-ad-item, .selecter').removeClass('active');//remove all classes active
        $('.list-city').removeClass('open');

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
            return openCity = false

        });

/* ---------------------------------------------- /*
 * Main function for city list
 /* ---------------------------------------------- */

        adItem.on('click', function () {

            toggleListCity(this);

           if (screen.width <= 630){


                if ($(this).index() === 1 || $(this).index() === 0){

                    $(this).parent().children($('.types-ad-item'))
                        .eq(1).after(listCity);//Inserts an element after the second element
                                               // if there are two elements in the row
                }
                else {
                    $(this).parent().after(listCity);//Inserts an element after the parent element
                }


           }

           else {
               $(this).parent().after(listCity);//Inserts an element after the parent element
           }

        });

/* ---------------------------------------------- /*
 * Function for top city list
 /* ---------------------------------------------- */


        $('.selecter').on('click', function () {

            toggleListCity(this);

            $('.selecter').after(listCity);

        });

/* ---------------------------------------------- /*
 * Coled plugin perfectScrollbar for top city list
 /* ---------------------------------------------- */

        $('.list-city-top').perfectScrollbar();


          });
})(jQuery);
