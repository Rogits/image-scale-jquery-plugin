/* 
 * License: N/A
 * Twitter: @vic_rog
 * 
 * It scales images.
 * 
 * Copyright 2015.
 */

$.fn.scaleImage = function(options)
{                  
    var $window = $(window);
    var $img = this;                    
    var widthScaleRatio;
    var heightScaleRatio;

    var defaults = {
        position: "absolute",
        destTop: 0,
        destLeft: 0,
        destWidth: $window.width(),
        destHeight: $img.height(),
        scaleWidth: true,
        scaleHeight: false,
        useCss3: false
    };

    var settings = $.extend({}, defaults, options);

    if(settings.useCss3)
    {
        if(settings.scaleWidth)
        {                            
            widthScaleRatio = settings.destWidth / $img.width();

            $img.css({
                "position": settings.position,
                "-ms-transform" : "scaleX(" + 
                        widthScaleRatio + ")",
                "-webkit-transform": "scaleX(" +
                        widthScaleRatio + ")",
                "transform": "scaleX(" + 
                        widthScaleRatio + ")"
            });
            if(settings.position === "absolute" || 
                    settings.position === "relative")
            {
                $img.css({
                    "top": settings.destTop,
                    "left": (-1 * $img.offset().left)
                });  
            }
        }
        if(settings.scaleHeight)
        {                            
            heightScaleRatio = 
                    settings.destHeight / $img.height();

            $img.css({
                "position": settings.position,
                "-ms-transform": "scaleY(" +
                        heightScaleRatio + ")",
                "-webkit-transform": "scaleY(" +
                        heightScaleRatio + ")",
                "transform": "scaleY(" +
                        heightScaleRatio + ")"
            });
            
            if(settings.position === "absolute" || 
                    settings.position === "relative")
            {
                $img.css({
                    "top": settings.destTop,
                    "left": settings.destLeft
                });
            }
        }
    }
    else
    {
        if(settings.scaleWidth)
        {
            $img.css({
                "position": settings.position,                
                "width": settings.destWidth
            });  
            if(settings.position === "absolute" ||
                    settings.position === "relative")
            {
                $img.css({
                    "top": settings.destTop,
                    "left": settings.destLeft
                });
            }
        }
        if(settings.scaleHeight)
        {
            $img.css({
                "position": settings.position,
                "height": settings.destHeight
            });
            if(settings.position === "absolute" || 
                    settings.position === "relative")
            {
                $img.css({
                    "top": settings.destTop,
                    "left": settings.destLeft
                });
            }
        }
    }                   
}; 