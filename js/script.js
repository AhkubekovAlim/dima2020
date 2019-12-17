
$(function(){
    var clipboard =  new ClipboardJS('.clipboard');

    function showCopiedMessage($element){
        $element.append('<div class="copied">Скопировано</div>');
        setTimeout(function(){
            var $copied = $element.find('.copied');
            $copied.remove();
        }, 2000)
    }

    clipboard.on('success', function(e) {
        showCopiedMessage($(e.trigger));
        e.clearSelection();
    });


    var $mainSLider = $('.main-slider');

    $mainSLider.slick({
        autoplay: true,
        dots: false,
        infinite: true,
        fade: true,
        arrows: false,
        speed: 600,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
});