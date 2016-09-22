$(document).ready(function(){
    
    var growId=0;
    $(".row").click(function(){
        
        //row number as rowN
        var nt=$(this).attr('id');
        
        //#rowN
        var id = "#" + nt;
        
        //add musical now with unique class name
        $(id).append("<div class=\"grow grow" + growId + "\"></div>");
        
        $('<script>')
            
            .attr('type', 'text/javascript')
            .text("$(\".grow" + growId + "\").stretch({ note:\"" + nt + "\"});")
            .appendTo('head');
        
        ass= nt.replace("row","");
        background(ass, growId);
        
        growId++;
        
    });

});

//instantiate toggle
var toggle = []
for (i = 0; i < 21; i++) {
        toggle[i] =0;
}

function background(row, idTag) {
    
    //if (toggle[row]==1) {
    //    $(".grow" + idTag).css( "background-image", "url(\'Images/Half1.png\')");
    //    $(".grow" + idTag).css( "z-index", toggle[1]);
    //
    //    toggle[row]=toggle[row]+2;
    //}

    if (toggle[row]%2 == 0) {
        $(".grow" + idTag).css( "background-image", "url(\'Images/Half1.png\')");
        $(".grow" + idTag).css( "z-index", toggle[1]);
        
        console.log(row + " " + toggle[row]);
        toggle[row]=toggle[row]+1;
        return;
        
    } else {
        $(".grow" + idTag).css( "background-image", "url(\'Images/Half2.png\')");
        $(".grow" + idTag).css( "z-index", toggle[1]);
        
        console.log(row + " " + toggle[row]); 
        toggle[row]=toggle[row]+1;
        return;
    }
}