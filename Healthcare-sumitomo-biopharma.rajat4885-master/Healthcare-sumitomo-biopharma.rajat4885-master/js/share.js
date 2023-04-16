//useragent
var flag = (function () {
  if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || navigator.userAgent.indexOf('iPad') != -1 || (navigator.userAgent.indexOf('Android') != -1)) {
    if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1 || (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1)) {
      return "sp";
    } else if (navigator.userAgent.indexOf('iPad') != -1 || (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') < 0)) {
      return "tab";
    }
  } else {
    return "pc";
  }
})();

(function ($) {
  var share = $.share = (function () {
    function init() {
      var wW = 0;
      var link_pathname = "";
      scrollTop_set();
      //ロールオーバー関数
      $('[class!=current] > a').on({
        'mouseenter': function () {
          if ($(this).find("img[src*='_off.']").size() > 0) $(this).find("img:not(.current)").attr("src", $(this).find("img").attr("src").replace("_off.", "_on."));
          else if ($(this).find("img:not(.current)").size() > 0) $(this).find("img").css("opacity", "1");
        },
        'mouseleave': function () {
          if ($(this).find("img[src*='_on.']").size() > 0) $(this).find("img:not(.current)").attr("src", $(this).find("img").attr("src").replace("_on.", "_off."));
          else if ($(this).find("img:not(.current)").size() > 0) $(this).find("img").css("opacity", "1");
        }
      });

      // スムーススクロール
      function scrollTop_set() {
        $('a[href^="#"]').not('a[class*="special"]').on("click", function () {
          var h = $(this).attr("href");
          var t = $(h == "#" || h == "" ? 'body' : h);
          var p = t.offset().top;

          $('html,body').animate({
            scrollTop: p
          }, 500);
          return false;
        });
      }

      function hash_set() {
        if (location.href.indexOf("#") > 0 && $(location.hash).length != false) {
          var hs = location.hash;
          var ts = $(hs == "#" || hs == "" ? 'body' : hs);
          var ps = ts.offset().top;

          $('html,body').animate({
            scrollTop: ps
          }, 500);
        }
      }


      // 点線消し
      $('a[href^="#"]').focus(function () {
        this.blur();
      });
      /*
      if(flag =="sp"){
      	$('.pinch-zoom').each(function () {
      		new RTP.PinchZoom($(this), {});
        });
      }
      
      link_pathnam = window.location.pathname.replace("index.html","");
      if(flag =="pc"){
      	$(".aside_navi li a").each(function(){
      		if($(this).attr("href") == link_pathnam){
      			if($(this).parent().attr("class")=="has_child"){
      				$(this).next("ul.first_sub_nav").show();
      			}
      			else if($(this).parent().parent().attr("class")=="first_sub_nav"){
      				$(this).closest("ul.first_sub_nav").show();
      				$(this).next("ul.second_sub_nav").show();
      			}
      			else{
      				$(this).closest("ul.first_sub_nav").show();
      				$(this).closest("ul.second_sub_nav").show();
      			}
      		}
      	});
      }
      */
      /*  mouseover   mouseleave
        
      function global_nav_init(){
      	if(flag =="pc") {				
      		$("header .global_nav li").on({
      			"mouseenter": function(){
      				$(this).find(" >a").addClass("open");
      				$(this).find(".sub_nav").stop().slideDown(200);
      			},
      			"mouseleave": function(){
      				$(this).find(">a").removeClass("open");
      				$(this).find(".sub_nav").stop().hide();
      			}
      		})
      		
      		
          }
      	else if(flag =="sp"){
      		$("#drawer_btn").on({
      			"click touch": function(){
      				if( $("header").hasClass("open")){
      					$("header").removeClass("open");
      					$("header .header_nav").stop().slideUp(100);
      				}
      				else{
      					$("header").addClass("open");
      					$("header ul.global_nav li").removeClass("open");
      					$(".global_nav li .sub_nav").hide();
      					$("header .header_nav").stop().slideDown(200);
      				}
      			}
      		})
      		
      		$("header ul.global_nav li > a:not('.onlychild')").on({
      			"click touch" : function(){
      				if($(this).next(".sub_nav").css("display")=="block"){
      					$(this).closest("li").removeClass("open");
      					$(this).next(".sub_nav").stop().slideUp(100);
      				}
      				else{
      					$(this).closest("li").addClass("open");
      					$(this).next(".sub_nav").stop().slideDown(200); 
      				}
      				return false;
      			}
      		})
      	}
      	
      	$(window).on({
      	"resize" : function(){
      		if($(window).width() > 767){
      			$("header .global_nav li").removeClass("open");
      			$("header .global_nav li").find(".sub_nav").hide();
      		}
      	  }				
          })
      	
      	$(".global_nav > li").each(function(){
      		var nav_url = $(this).find("> a").attr("href");
      		if(window.location.href.indexOf(nav_url) > 0 &&  nav_url!="#") {
      			$(this).find("> a").addClass("current");
      		}
      	});
      }
      */
      function global_nav_init() {

        $("#drawer_btn").off().on({
          "click touch": function () {
            if ($("header").hasClass("open")) {
              $("header").removeClass("open");
              $("header .header_nav").stop().slideUp(100);
            } else {
              $("header").addClass("open");
              $("header ul.global_nav li").removeClass("open");
              $(".global_nav li .sub_nav").hide();
              $("header .header_nav").stop().slideDown(200);
            }
          }
        })
        if (flag == "sp" || flag == "tab") {
          $("header ul.global_nav > li > a:not('.onlychild')").off().on({
            "click touch": function () {
              if ($(this).next(".sub_nav").css("display") == "block") {
                $(this).closest("li").removeClass("open");
                $(this).next(".sub_nav").stop().slideUp(100);
              } else {
                if (flag == "pc" || flag == "tab") {
                  $(this).closest("li").siblings().removeClass("open").find(".sub_nav").hide();
                }
                $(this).closest("li").addClass("open");
                $(this).next(".sub_nav").stop().slideDown(200);
              }
              return false;
            }
          });
        }
        if (flag == "pc") {
          $("header .global_nav li").on({
            "mouseenter": function () {
              $(this).siblings().removeClass("open").find(".sub_nav").hide();
              $(this).addClass("open");
              $(this).find(".sub_nav").stop().slideDown(200);
            },
            "mouseleave": function () {
              $(this).removeClass("open");
              $(this).find(".sub_nav").stop().hide();
            }
          });
        }

        $(window).on({
          "resize": function () {
            if ($(window).width() > 767) {
              $("header .global_nav li").removeClass("open");
              $("header .global_nav li").find(".sub_nav").hide();
            }
          }
        })

        $(".global_nav > li").each(function () {
          var nav_url = $(this).find("> a").attr("href");
          if ((nav_url !== "/" && window.location.href.indexOf(nav_url) > 0 && nav_url != "#") || (nav_url === "/" && window.location.href.indexOf("/ir/") > 0 && nav_url != "#")) {
            $(this).find("> a").addClass("current");
          }
        });
      }

      function fontsize_init() {

        $("#fontsize .ib").off("click").on("click", function (e) {
          var setFontSize = this.id;
          $("#fontsize .ib").removeClass("current");
          $(this).addClass("current");
          $.cookie('fontsize_en', setFontSize, {
            path: "/"
          });
          elm.removeClass().addClass(setFontSize);
          e.preventDefault();
        });
        if (!history || history == 'font_narmal')
          $("#font_narmal").addClass("current");
        else
          $("#font_large").addClass("current");
      }

      		function remove_reader() {
        		if ($('header').attr('no-read') == "true") {
         			$('#readspeaker_button1').remove();
         			$('#readspeaker_button1-sp').remove();
          			$('.readspeaker_toolbar').remove();
          			$('#nav-utility').css('right', '414px');
       			}
      		}

      //tab
      if (flag == "tab") {
        var $windowWidth = 0;
        $(window).on("load resize orientationchange", function () {
          $windowWidth = $(window).width();
          if ($windowWidth > 667) {
            $("meta[name='viewport']").remove();
            $("title").before('<meta name="viewport" content="width=1200,user-scalable=yes">');
          }
        })
      }

      function reset_height() {
        $(".sub_menu").find("> li").removeAttr("style");
      }

      function setlineHeight() {
        reset_height();
        var $item_block = $(".sub_menu");
        for (var num = 0; num < $item_block.length; num++) {
          for (var i = 0; i < Math.ceil($item_block.eq(num).find("> li").length / 3); i++) {
            var maxHeight = 0;
            for (var j = 0; j < 3; j++) {
              maxHeight = $item_block.eq(num).find("> li").eq(j + i * 3).find("p").innerHeight() > maxHeight ? $item_block.eq(num).find("> li").eq(j + i * 3).find("p").innerHeight() : maxHeight;
              console.log(maxHeight)
            }

            for (var k = 0; k < 3; k++) {
              $item_block.eq(num).find("> li").eq(k + i * 3).find("p").css({
                "height": maxHeight
              });
            }
          }
        }
      }

      function sp_lineHeight_init() {
        if (flag == "sp") {
          $(window).on("load resize orientationchange", function () {
            setlineHeight();
          })
        }
      }

      if (flag == "sp") {
        $("aside .aside_title").on({
          "click touch": function () {
            $("aside .aside_navi > li.has_child").removeClass("open");
            $("aside .aside_navi > li.has_child .first_sub_nav").hide();
            if ($(this).next(".aside_inner").css("display") == "none") {
              $(this).next(".aside_inner").stop().slideDown(200);
              $(this).addClass("open");
            } else {
              $(this).removeClass("open");
              $(this).next(".aside_inner").stop().slideUp(100);
            }
          }
        });
        $("aside .aside_navi > li.has_child > a").on({
          "click touch": function () {
            if ($(this).next(".first_sub_nav").css("display") == "none") {
              $(this).closest("li").addClass("open");
              $(this).next(".first_sub_nav").stop().slideDown(200);
            } else {
              $(this).closest("li").removeClass("open");
              $(this).next(".first_sub_nav").stop().slideUp(200);
            }
            return false;
          }
        });
      }

      //// font size ////
      var history = $.cookie('fontsize_en');
      var elm = $('html');
      (!history) ? elm.addClass('font_narmal'): elm.addClass(history);

      $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
      });
      $('header').load("/header.html", function () {
        fontsize_init();
        global_nav_init();
        hash_set();
        remove_reader();
      });
      $('#footer').load("/footer.html", function () {
        scrollTop_set();
        fontsize_init();
      });
      $('#footer_index').load("/footer_index.html", function () {
        scrollTop_set();
        fontsize_init();
      });
    }

    // scroll top menu
    $(function () {

      $(window).on("scroll", function () {
        $(".nav-global-child").offset({
          top: $("#l-header").height()
        });
      });
      $(window).on("resize", function () {
        $(".nav-global-child").offset({
          top: $("#l-header").height()
        });
      });
    })

    $(function () {
      $(window).on("load", function () {
        // scroll to top
        $(".nav-pagetop-01 span").click(function () {
          $("body, html").animate({
            scrollTop: 0
          }, 300, "swing");
        });
        // hamburger button
        $("#btn-hamburger").on("click", function () {
          $(this).toggleClass("active");
          $("#sp-menu").toggleClass("is-show");
          $("#sp-menu").fadeToggle();
        })
        // accordion
        $(".js-accordion").on("click", function () {
          if ($(this).next(".accordion_area").css("display") == "none") {
            $(this).next(".accordion_area").slideDown();
            $(this).addClass("js-accordion_on");
          } else {
            $(this).next(".accordion_area").slideUp();
            $(this).removeClass("js-accordion_on");
          }
        })
        $("#sp-menu").find("a").on("click", function (e) {
          var t = $(this).attr("href");
          childMenuShow(e, t);
        })
        var s = localStorage.getItem("font-size"),
          e = $("html");
        $("#fontsize-switch .ib").off("click").on("click", function (s) {
          var t = this.id;
          $("#fontsize-switch .ib").removeClass("current"), $(this).addClass("current"), localStorage.setItem("font-size", t), e.removeClass().addClass(t), s.preventDefault();
        }), s && "font_normal" != s ? (e.addClass("font_large"), $("#font_large").addClass("current")) : (e.addClass("font_normal"), $("#font_normal").addClass("current"));
      });
    })

    function childMenuShow(s, e) {
      if (!e.includes('/')) {
        s.preventDefault(), $(e).css("display", "block"), setTimeout(function () {
          $(e).addClass("is-show");
        }, 10), setTimeout(function () {
          $("#sp-menu").css("display", "none");
        }, 300), $(e).find(".back").on("click", function () {
          $("#sp-menu").css("display", "block"), $(e).removeClass("is-show"), setTimeout(function () {
            $(e).css("display", "none");
          }, 300);
        }), $("#btn-hamburger").on("click", function () {
          $(e).removeClass("is-show"), setTimeout(function () {
            $(e).css("display", "none");
          }, 10);
        });
      }
    }

    return {
      init: init
    }

  })();

  $(share.init);
})(jQuery);