/**
 * Created by Oleg on 07.04.2017.
 */
(function($){

    function initFullScreenVideo(){



        $('body').append('<div id="full-screen-video">'+
            '<table><tr><td>'+
            '<div class="video-wrapper">'+
            '<iframe frameborder="0" allowfullscreen></iframe>'+
            '</div>'+
            '</td></tr></table>'+
            '<div id="fsv-close"></div>'+
            '</div>');
    };

    if($('.video-holder').length){
        initFullScreenVideo();

        $('.video-holder').on('click',function(e){
            e.preventDefault();

            var $this = $(this);

            var videoLink = $this.data('src');

            var fullScreenVideo = $('#full-screen-video');

            $('iframe',fullScreenVideo).attr('src',videoLink+'?showinfo=0&autoplay=1').closest('#full-screen-video').addClass('show');

            $('body').addClass('scroll-stop')

        });

        $('#fsv-close').on('click',function(){
            $('#full-screen-video').removeClass('show');

            $('#full-screen-video').find('iframe').attr('src','');
            $('body').removeClass('scroll-stop')
        });


    }


})(jQuery);
// Full Screen video

// Full Screen Img
(function($){

    function initFullScreenImage(){
        $('body').append('<div id="full-screen-video">'+
            '<table><tr><td>'+
            '<img src="" alt=""/>'+
            '</td></tr></table>'+
            '<div id="fsv-close"></div>'+
            '</div>');
    };

    if($('.history-slider').length){
        // initFullScreenImage();
        //
        // $('.history-slider .image a').on('click',function(e){
        //     e.preventDefault();
        //
        //     var $this = $(this);
        //
        //     var imgLink = $this.attr('href');
        //
        //     var fullScreenImage = $('#full-screen-video');
        //
        //     $('img',fullScreenImage).attr('src',imgLink).closest('#full-screen-video').addClass('show');
        //
        //     $('body').addClass('scroll-stop');
        //
        // });
        //
        // $('#fsv-close').on('click',function(){
        //     $('#full-screen-video').removeClass('show');
        //
        //     $('#full-screen-video').find('image').attr('src','');
        //     $('body').removeClass('scroll-stop');
        // });

        // initFullScreenGallery();
        // !!!

    }

})(jQuery);

