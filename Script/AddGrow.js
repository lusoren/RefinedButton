$(document).ready(function(){
    
    
$(".row").click(function(){
        
    //row number as rowN
    var row=$(this).attr('id');
        
    addNote(row);
                
});

});

var growId=0;
function addNote(row) {
        
        var id = "#" + row;
        
        //add musical now with unique class name
        $(id).append("<div class=\"grow grow" + growId + "\"></div>");
        ass= row.replace("row","");

        
        $('<script>')
            
            .attr('type', 'text/javascript')
            .text("$(\".grow" + growId + "\").stretch({ growId:\"" + growId + "\",row:" + ass + "});")
            .appendTo('footer');
        
        getBackground(ass, growId, true);
        growId++;
        return;
}


//number of iterations in row
var toggle = []
for (i = 0; i < 21; i++) {
        toggle[i] =0;
}

//number of notes
var click = []
for (i = 0; i < 21; i++) {
        click[i] =0;
}

var totall= 0;
var x= false;

var img1 = "Like.png";
var img2 = "Like.png";

var once=0;

//return image background
function getBackground(row, idTag, first) {
    
    if (first==true) {
        click[row]=click[row]+1;
    }
    
    if (toggle[row]%2 == 0) {
    
        $(".grow" + idTag).css( "background-image", "url(\'Pics/"+ img1 +"\')");
        $(".grow" + idTag).css( "z-index", toggle[row]);
        
        
        toggle[row]=toggle[row]+1;

        return;
        
    } else {
        
        $(".grow" + idTag).css( "background-image", "url(\'Pics/"+ img2 +"\')");
        $(".grow" + idTag).css( "z-index", toggle[row]);
    

        toggle[row]=toggle[row]+1;
        
        return;
    }
    
}
var kiss=0;
function reset() {
    for (a = 1; a < 21; a=a+1) {
        
        addNote("row"+a);
        kiss=28+a;
        $(".grow" + kiss).css("border-bottom-left-radius","0");
        $(".grow" + kiss).css("border-top-left-radius","0");
    }
    
    return;
}

function destroy() {

    for (f = 1; f < 21; f++) {
        $("#row" + f).html(" ");
        
    }
    
    img1 = "Half1.png";
    img2 = "Half2.png";
    
    $("body").css("background-image", "url(\"Images/Tokyo.jpg\")");
    $("#half").css("display", "none");
    
    //checkTrue(true);
    //$('head').html("");
    return;

}

var xd=true;
function checkTrue(switcher) {
    
    if (switcher==true) {
        xd=false
    }
    if (xd==true) {
        return true;
    }
    else {
        return false;
    }
}

