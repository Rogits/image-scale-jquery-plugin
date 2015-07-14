/* 
 * License: N/A
 * Author: @vic_rog
 * 
 * It scales images to fit full screen width.
 * 
 * Copyright 2015.
 */

$.fn.scaleImage = function()
{                       
    var $scale = this;
    var settings = {};
    var $doc = $(document);
    var getDocumentWidth = function(){
        return $doc.width();
    };
    var documentWidth = getDocumentWidth();
    var documentHeight = parseInt($doc.height());
    var getImageWidth = function(){
        return parseInt($scale.css("width"));
    };
    var getImageHeight = function(){
        return parseInt($scale.css("height"));
    };
    var imgWidth = getImageWidth();
    var imgHeight = getImageHeight();
    var getImageOffsetTop = function(){
        return $scale.offset().top;
    };
    var getImageOffsetLeft = function(){
        return $scale.offset().left;
    };
    var imgOffsetLeft = getImageOffsetLeft();

    var docImageWidthScaleRatio = documentWidth / imgWidth;
    var docImageHeightScaleRatio = documentHeight / imgHeight;
    $scale.css({
        "-ms-transform" : "scaleX(" + docImageWidthScaleRatio + ")",
        "-webkit-transform": "scaleX(" + docImageWidthScaleRatio + ")",
        "transform": "scaleX(" + docImageWidthScaleRatio + ")"
    });
    imgOffsetLeft = getImageOffsetLeft(); // reacquire new dimensions
     $scale.css("left", "+=" + 
            (imgOffsetLeft * -1) + "px");
    var getScaledImageWidth = function(){
        return Math.round(getImageWidth() * docImageWidthScaleRatio);
    };
    var getScaledImageHeight = function(){
        return Math.round(getImageHeight() * docImageHeightScaleRatio);
    };
    settings.imageOffsetTop = getImageOffsetTop();
    settings.imageOffsetLeft = imgOffsetLeft;
    settings.imageWidth = imgWidth;
    settings.imageHeight = imgHeight;
    settings.scaledImageWidth = getScaledImageWidth();
    settings.scaledImageHeight = getScaledImageHeight();

    return settings;
};
