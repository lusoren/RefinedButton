$(document).ready(function(){
    
    var x=0;
    $(".row").click(function(){
        
        var id = "#" + $(this).attr('id');
        $(id).append("<div class=\"note note" + x + "\" id=\"#ass\"></div>");
        //alert("<div class=\"note" + x + "\" id=\"#ass\"></div>");
        

        if (id=="#row1") {
            var nt="AFlat";
        }
        if (id=="#row2") {
            var nt="A";
        }
        if (id=="#row3") {
            var nt="ASharp";
        }
        if (id=="#row4") {
            var nt="BFlat";
        }
        if (id=="#row5") {
            var nt="B";
        }
        if (id=="#row6") {
            var nt="BSharp";
        }
        if (id=="#row7") {
            var nt="CFlat";
        }
        if (id=="#row8") {
            var nt="C";
        }
        if (id=="#row9") {
            var nt="CSharp";
        }
        if (id=="#row10") {
            var nt="DFlat";
        }
        if (id=="#row11") {
            var nt="D";
        }
        if (id=="#row12") {
            var nt="DSharp";
        }
        if (id=="#row13") {
            var nt="EFlat";
        }
        if (id=="#row14") {
            var nt="E";
        }
        if (id=="#row15") {
            var nt="ESharp";
        }
        if (id=="#row16") {
            var nt="FFlat";
        }
        if (id=="#row17") {
            var nt="F";
        }
        if (id=="#row18") {
            var nt="FSharp";
        }
        if (id=="#row19") {
            var nt="GFlat";
        }
        if (id=="#row20") {
            var nt="G";
        }
        
        playGlass(nt);

        $('<script>')
            
            .attr('type', 'text/javascript')
            .text("$(\".note" + x + "\").marquee({ note:\"" + nt + "\"});")
            .appendTo('head');
    
        x++;
    
    });

});