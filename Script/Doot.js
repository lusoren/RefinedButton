function playDoot(nt, id){
    
    if (id>10) {
        playGlass(nt);
        return;
    }
    var rand= Math.round(Math.random() *23) + 1;
    
    var audio = new Audio("Doot/Doot" + rand + ".mp3");
    console.log("Doot/Doot" + rand + ".mp3");
    audio.play();
    
    
}