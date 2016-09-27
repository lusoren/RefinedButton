$(document).ready(function(){
    
    var growId=0;
    $(".row").click(function(){
        
        //row number as rowN
        var nt=$(this).attr('id');
        
        //#rowN
        var id = "#" + nt;
        
        //add musical now with unique class name
        $(id).append("<div class=\"grow grow" + growId + "\"></div>");
        ass= nt.replace("row","");

        
        $('<script>')
            
            .attr('type', 'text/javascript')
            .text("$(\".grow" + growId + "\").stretch({ note:\"" + nt + "\",row:" + ass + "});")
            .appendTo('head');
        
        
        background(ass, growId, true);
        
        growId++;
        
    });

});

//instantiate toggle
var toggle = []
for (i = 0; i < 21; i++) {
        toggle[i] =0;
}

var click = []
for (i = 0; i < 21; i++) {
        click[i] =0;
}

var color = ["#00E5FF", "Volvo", "BMW"];

function background(row, idTag, first) {

    var img1 = "Half1.png";
    var img2 = "Half2.png";
    
    if (click[row]>3) {
        img1="Tokyo.jpg";
        img2="Tokyo.jpg";
    }
        
    if (click[row]>5) {
        img1="Half3.png";
        img2="Half4.png";
    }
    
    if (first==true) {
        click[row]=click[row]+1;
    }
    
    if (toggle[row]%2 == 0) {
        
        if (first==false) {
            $("#row" + row).css( "background-image", "url(\'Images/"+ img2 +"\')");
        }
        
        
        $(".grow" + idTag).css( "background-image", "url(\'Images/"+ img1 +"\')");
        $(".grow" + idTag).css( "z-index", toggle[row]);
        
  
        console.log(row + " " + click[row]);
        toggle[row]=toggle[row]+1;
        
        return;
        
    } else {
        
        if (first==false) {
            $("#row" + row).css( "background-image", "url(\'Images/"+ img1 +"\')");
        }

        $(".grow" + idTag).css( "background-image", "url(\'Images/"+ img2 +"\')");
        $(".grow" + idTag).css( "z-index", toggle[row]);
        
    
        console.log(row + " " + click[row]);
        toggle[row]=toggle[row]+1;
        
        return;
    }
}