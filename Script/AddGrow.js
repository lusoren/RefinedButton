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
            .text("$(\".grow" + growId + "\").stretch({ note:\"" + row + "\",row:" + ass + "});")
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

var img1 = "Half1.png";
var img2 = "Half2.png";

function getBackground(row, idTag, first) {
    
    if (first==true) {
        click[row]=click[row]+1;
        totall++;
        
    }
    
    if (first==false) {
        console.log(totall);
    }
    
    if (totall==50) {
        
        img1 = "Tokyo.jpg";
        img2 = "Tokyo.jpg";
        
        reset();
        return;
    }
    
    if (totall==71) {
        
        


    }
    
    if (toggle[row]%2 == 0) {
    
        $(".grow" + idTag).css( "background-image", "url(\'Images/"+ img1 +"\')");
        $(".grow" + idTag).css( "z-index", toggle[row]);
        
        
        toggle[row]=toggle[row]+1;
    
        
        return;
        
    } else {
        
        $(".grow" + idTag).css( "background-image", "url(\'Images/"+ img2 +"\')");
        $(".grow" + idTag).css( "z-index", toggle[row]);
    

        toggle[row]=toggle[row]+1;
        
        return;
    }
    
}

function reset() {
    for (a = 0; a < 21; a=a+1) {
        addNote("row"+a);
        $("#row" + a).css("border-radius","0");
        
    }
}


var x = "";
var header = "<title>m u s i c __ b o x.</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> <script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-latest.js\"></script>";
var header1= "<script type=\"text/javascript\" src=\"Script/PlayGlass.js\"></script><script type=\"text/javascript\" src=\"Script/Doot.js\"></script>";
var header2= "<script type=\"text/javascript\" src=\"Script/AddGrow.js\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"Style/pageStyle.css\">";

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

