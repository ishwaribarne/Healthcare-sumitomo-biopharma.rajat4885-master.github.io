(function ($) {
  var index = $.index = (function () {
    function init() {
			var swiper = new Swiper('.swiper-container',{
				autoplay: 5000,
				loop: true,
				autoplayDisableOnInteraction: false,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			});

			var $btn = $(".tab_list li");
			$btn.off().on("click touch",function(){
				var $index = $(this).index();
				$btn.removeClass("current");
				$btn.eq($index).addClass("current");
				$(".tab_content .tab_inner").removeClass("current");
				$(".tab_content .tab_inner").eq($index).addClass("current");
				return false;
			});

      $("#main_visula").on("contextmenu",function(e){
        return false;
      })
    }

		return {
				init: init
		}

  })();

    $(index.init);
})(jQuery);