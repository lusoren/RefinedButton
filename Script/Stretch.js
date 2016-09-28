
var once= 0;
var resets= 0;
$(document).ready(function(){
    
    (function($) {
        
        $.fn.stretch = function(args) {
            
            
            var that = $(this);
            var textWidth = 10,
                offset = $(".row").width(),
                classs=that.attr('class'),
                width = '0',
                
                css = {
                    'padding-left' : that.css('padding-left'),
                    'overflow' : that.css('overflow'),
                    'white-space' : that.css('white-space')
                },
                marqueeCss = {
                    'padding-left' : 'width',
                    'overflow' : 'hidden',
                    'white-space' : 'nowrap'
                },
                
                args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false, note: "", row: 0, destroy: false }, args),
                i = 0,
                stop = textWidth*-1,
                dfd = $.Deferred();

        function go() {
        
            if(!that.length) return dfd.reject();
            
            if ((width/offset)==.5) {
                
                playGlass(args.note);
                that.css("border-color","white");
 
            }
            
            
            if(width == offset) {
            
                i++;
 
                if(i == args.count) {
                    that.css(css);
                    return dfd.resolve();
                }
                
                if(args.leftToRight) {
                    width = textWidth*-1;
                }
                
                else {
                    
                    resets++;
                    width = 0;
                    noteId= classs.replace("grow grow","");
                    that.css("border-color","black");
                    
                    if (resets==30 && once==0) {
                        once++;
                        destroy();
                        return;
                    }   
    
                    getBackground(args.row, noteId, false);
                                        
                }
            }
            
            that.css('padding-left', width + 'px');
            
            width++;
            setTimeout(go, args.speed);
        };
        
        if(args.leftToRight) {
  
            
              
        }
        
        that.css(marqueeCss);
    

        
        if (checkTrue()==true) {
            go();
        }
        
        return dfd.promise();
    };
        
    })(jQuery);
   
});

