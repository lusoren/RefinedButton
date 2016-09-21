$(document).ready(function(){
    
    var x=0;
    $(".row").click(function(){
         var id = "#" + $(this).attr('id');
        //row number
        var nt=$(this).attr('id');
        
        //singular calss name
        var div= "grow" + x;
        
        $(id).append("<div class=\"grow grow" + x + "\"></div>");
        
        $('<script>')
            
            .attr('type', 'text/javascript')
            .text("$(\".grow" + x + "\").stretch({ note:\"" + nt + "\"});")
            .appendTo('head');
        
        background(nt, div);
        x++;
    });

});

var ttt= true;
var tttt= 0;

function background(row, div) {

    if (row=="row1") {
        if (ttt==true) {
            $("." + div).css( "background-image", "url(\'Images/Tokyo.jpg\')");
            $("." + div).css( "z-index", tttt);

            tttt++;
            ttt=false;
            return;
        
        } else {
            $("." + div).css( "background-image", "none");
            $("." + div).css("background-color","white");
            $("." + div).css( "z-index", tttt);
            
            tttt++;
            
            ttt=true;
            return;
        }
    }
    
    else {
        alert("fuck");
    }

}