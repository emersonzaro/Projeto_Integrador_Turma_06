//Gerar Hint dos menus.
$(document).ready(function() {
    // Tooltip only Text
     $('.button').hover(
       
       function(){
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
     }).mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
     });
});