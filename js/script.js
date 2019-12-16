
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
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        showCopiedMessage($(e.trigger));
        e.clearSelection();
    });

});