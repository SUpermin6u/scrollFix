/**
 * jquery.scrollfix v1.0
 *
 * author: szm
 * email: supermin6u@foxmail.com
 * github: https://github.com/SUpermin6u/scrollFix
 *
 * Free to use under the MIT license.
 */
(function($) {
    /**
     * when scroll to the certain place, will fixed there
     * @param {jQuery Selector} $selector   selector to do the scrollfix
     * @param {Object} absoluteCss   style before fixed
     * @param {Object} fixedCss   style after fixed
     */
    var scrollFixBar = function($selector,absoluteCss,fixedCss){
        var isBarFixed = false;
        var $bar = $selector;
        if(!$bar.length){return;}

        var aCss = absoluteCss || {
            'position':'absolute',
            'top':'auto'
        }
        var fCss = fixedCss || {
            'position':'fixed',
            'top':0
        }
        $bar.css(aCss);

        var barOffsetTop = $bar.offset().top;

        $(window).scroll(function(){
            var top = $('body').scrollTop() || $('html').scrollTop();
            if(top > barOffsetTop && !isBarFixed){
                $bar.css(fCss);
                isBarFixed = true;
            }
            if(top <= barOffsetTop&& isBarFixed){
                $bar.css(aCss);
                isBarFixed = false;

            }
        });
        $(window).scroll();
    }

})(jQuery);