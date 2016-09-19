$(document).ready(function(){
    
    (function($) {
        $.fn.textWidth = function(){
            var calc = '<span style="display:none">' + $(this).text() + '</span>';
            $('body').append(calc);
            var width = $('body').find('span:last').width();
            $('body').find('span:last').remove();
            return width;
        };

        $.fn.stretch = function(args) {

            var that = $(this);
            var textWidth = 10,
                offset = $(".row").width(),
                width = offset,
                
                css = {
                    'padding-left' : that.css('padding-left'),
                    'overflow' : that.css('overflow'),
                    'white-space' : that.css('white-space')
                },
                marqueeCss = {
                    'padding-left' : width,
                    'overflow' : 'hidden',
                    'white-space' : 'nowrap'
                },
                
                args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false, note: "" }, args),
                i = 0,
                stop = textWidth*-1,
                dfd = $.Deferred();

        function go() {
            
            
            
            if(!that.length) return dfd.reject();
            
            if ((width/offset)==.5) {
           
                 that.css("background-color", "white");
            }
            
            if(width == stop) {
               
                that.css("background-color", "gray");
                i++;
 
                if(i == args.count) {
                    that.css(css);
                    return dfd.resolve();
                }
                
                if(args.leftToRight) {
                    width = textWidth*-1;
                }
                
                else {
                    width = offset;
                }
            }
            
            that.css('padding-left', width + 'px');
            if(args.leftToRight) {
                width++;
            } else {
                width++;
            }
            setTimeout(go, args.speed);
        };
        
        if(args.leftToRight) {
            width = textWidth*-1;
            width++;
            stop = offset;
        } else {
            width--;            
        }
        
        that.css(marqueeCss);
        go();
        return dfd.promise();
    };
        
    })(jQuery);

    $(".grow").stretch();
    
   
});