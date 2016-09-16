$(document).ready(function(){
    
    var x=0;
    $(".row").click(function(){
        
        var id = "#" + $(this).attr('id');
        $(id).append("<div class=\"note note" + x + "\" id=\"#ass\"></div>");
        //alert("<div class=\"note" + x + "\" id=\"#ass\"></div>");

        $('<script>')
            
            .attr('type', 'text/javascript')
            .text("$(\".note" + x + "\").marquee({ speed: 0 });")
            .appendTo('head');
    
        x++;
    
    });

});