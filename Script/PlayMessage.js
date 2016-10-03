var togle = []
for (i = 0; i < 21; i++) {
        togle[i] =0;
}


function playCool(row){
    
    var audio = new Audio('Message/I.mp3');
    var audio2 = new Audio('Message/Would.mp3');
     
    
    if (togle[row]>2) {
        audio = new Audio('Message/Like.mp3');
       
    }
    
    if (togle[row]>4) {
       audio2 = new Audio('Message/To.mp3');
    }
    
    if (togle[row]>6) {
        audio = new Audio('Message/Get.mp3');
       
    }
    
    if (togle[row]>8) {
        audio2 = new Audio('Message/To.mp3');
       
    }
    
    if (toggle[row]>10) {
        audio = new Audio('Message/Know.mp3');
       
    }
    
    if (togle[row]>12) {
        audio2 = new Audio('Message/You.mp3');
       
    }
    
    if (togle[row]>14) {
        audio = new Audio('Message/You.mp3');
       
    } 
    
    if (togle[row]%2 == 0) {
    
        audio.play();
        
        togle[row]=togle[row]+1;

        return;
        
    } else {
        
        audio2.play();

        togle[row]=togle[row]+1;
        
        return;
    }

}
