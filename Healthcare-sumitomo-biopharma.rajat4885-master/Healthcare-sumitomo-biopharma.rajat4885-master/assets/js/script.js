"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function i(n) {
    if (e[n]) return e[n].exports;
    var r = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = t, i.c = e, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      i.d(n, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 0);
}([function (t, e, i) {
  "use strict";

  i.r(e);

  var n = /*#__PURE__*/function () {
    function n() {
      _classCallCheck(this, n);

      this.init();
    }

    _createClass(n, [{
      key: "init",
      value: function init() {
        $(".js-rollover").each(function () {
          var t = $(this),
              e = $(this).attr("src"),
              i = $(this).attr("src").replace("off", "on");
          t.hover(function () {
            t.attr("src", i);
          }, function () {
            t.attr("src", e);
          });
        });
      }
    }]);

    return n;
  }();

  var r = /*#__PURE__*/function () {
    function r() {
      _classCallCheck(this, r);

      this.init();
    }

    _createClass(r, [{
      key: "init",
      value: function init() {
        this.header = $("#l-header"), this.navGlbalChild = $(".nav-global-child"), this.$menuBtn = $("#btn-hamburger"), this.$menuBlock = $("#sp-menu"), this.flag = !0;
        var t = this;
        this.$menuBtn.on("click", function () {
          t.menuShow();
        }), this.$menuBlock.find("a").on("click", function (e) {
          var i = $(this).attr("href");
          t.childMenuShow(e, i);
        }), this.SetnavGlbalChildPos();
      }
    }, {
      key: "childMenuShow",
      value: function childMenuShow(t, e) {
        var i = this;
        if (e.includes('#')) {
          t.preventDefault(), $(e).css("display", "block"), setTimeout(function () {
            $(e).addClass("is-show");
          }, 10), setTimeout(function () {
            i.$menuBlock.css("display", "none");
          }, 300), $(e).find(".back").on("click", function () {
            i.$menuBlock.css("display", "block"), $(e).removeClass("is-show"), setTimeout(function () {
              $(e).css("display", "none");
            }, 300);
          }), i.$menuBtn.on("click", function () {
            $(e).removeClass("is-show"), setTimeout(function () {
              $(e).css("display", "none");
            }, 10);
          });
        }
      }
    }, {
      key: "menuShow",
      value: function menuShow() {
        var t = this;
        !0 === t.flag ? (t.flag = !1, t.$menuBlock.css("display", "block"), t.$menuBtn.addClass("active"), setTimeout(function () {
          t.$menuBlock.addClass("is-show");
        }, 10)) : (t.$menuBtn.removeClass("active"), t.$menuBlock.removeClass("is-show"), setTimeout(function () {
          t.$menuBlock.css("display", "none"), t.flag = !0;
        }, 300));
      }
    }, {
      key: "SetnavGlbalChildPos",
      value: function SetnavGlbalChildPos() {
        var t = this;
        $(window).on("scroll", function () {
          t.navGlbalChild.offset({
            top: t.header.height()
          });
        }), $(window).on("resize", function () {
          t.navGlbalChild.offset({
            top: t.header.height()
          });
        });
      }
    }]);

    return r;
  }();

  var s = /*#__PURE__*/function () {
    function s() {
      _classCallCheck(this, s);

      this.init();
    }

    _createClass(s, [{
      key: "init",
      value: function init() {
        var t = localStorage.getItem("font-size"),
            e = $("html");
        $("#fontsize-switch .ib").off("click").on("click", function (t) {
          var i = this.id;
          $("#fontsize-switch .ib").removeClass("current"), $(this).addClass("current"), localStorage.setItem("font-size", i), e.removeClass().addClass(i), t.preventDefault();
        }), t && "font_normal" != t ? (e.addClass("font_large"), $("#font_large").addClass("current")) : (e.addClass("font_normal"), $("#font_normal").addClass("current"));
      }
    }]);

    return s;
  }();

  var o = /*#__PURE__*/function () {
    function o() {
      _classCallCheck(this, o);

      this.init();
    }

    _createClass(o, [{
      key: "init",
      value: function init() {
        var t = $(".strengths-tab-layout").find(".tab-list li"),
            e = $(".strengths-tab-layout").find(".tab-list-btm li"),
            i = $(".tab-contents .content"),
            n = $(".c-lyt-strengths-01");
        var r = 0;
        t.on("click", function () {
          var n = $(".strengths-tab-layout .tab-list li").index(this);
          i.css("display", "none"), i.eq(n).fadeIn("slow"), t.removeClass("select"), e.removeClass("select"), $(this).addClass("select"), e.eq(n).addClass("select");
        }), e.on("click", function () {
          r = n.offset().top;
          var s = $(".strengths-tab-layout .tab-list-btm li").index(this);
          i.css("display", "none"), i.eq(s).fadeIn("slow"), e.removeClass("select"), t.removeClass("select"), $(this).addClass("select"), t.eq(s).addClass("select"), setTimeout(function () {
            $("body,html").animate({
              scrollTop: r
            }, 200, "swing");
          }, 100);
        });
      }
    }]);

    return o;
  }();

  var a = /*#__PURE__*/function () {
    function a() {
      _classCallCheck(this, a);

      this.init();
    }

    _createClass(a, [{
      key: "init",
      value: function init() {
        var t = $(".graphic-tab-layout").find(".tab-list li"),
            e = ($(".graphic-tab-layout").find(".tab-list-btm li"), $(".graphic-tab-layout .content"));
        $(".graphic-tab-layout");
        t.on("click", function () {
          var i = $(".graphic-tab-layout .tab-list li").index(this);
          e.css("display", "none"), e.eq(i).fadeIn("slow"), t.removeClass("select"), $(this).addClass("select");
        });
      }
    }]);

    return a;
  }();

  var l = /*#__PURE__*/function () {
    function l() {
      _classCallCheck(this, l);

      this.init();
    }

    _createClass(l, [{
      key: "init",
      value: function init() {
        var t = $(".js-more-btn"),
            e = $(".js-pickup-more-contents-list");
        t.on("click", function () {
          $(this).hide(), e.css("display", "block"), setTimeout(function () {
            $(".pickup-contents-list").find("li").each(function () {
              $(this).addClass("is-show");
            });
          }, 10);
        });
      }
    }]);

    return l;
  }();

  var h = /*#__PURE__*/function () {
    function h() {
      _classCallCheck(this, h);

      this.init();
    }

    _createClass(h, [{
      key: "init",
      value: function init() {
        $(".nav-pagetop-01 span").click(function () {
          return $("body, html").animate({
            scrollTop: 0
          }, 300, "swing"), !1;
        });
      }
    }]);

    return h;
  }();

  var c = /*#__PURE__*/function () {
    function c() {
      _classCallCheck(this, c);

      $(".c-lyt-graphic-modal").length > 0 && this.init();
    }

    _createClass(c, [{
      key: "init",
      value: function init() {
        this.modalOpenBtn = document.querySelectorAll(".js-modal-graphic-open"), this.modalCloseBtn = document.getElementsByClassName("js-modal-graphic-close")[0], this.graphicModal = document.getElementsByClassName("c-lyt-graphic-modal")[0], this.overlay = document.getElementsByClassName("c-modal-overlay")[0], this.content = document.getElementsByClassName("graphic-tab-layout")[0], this.flag = !0;

        for (var _t2, _e2 = 0; _e2 < this.modalOpenBtn.length; _e2++) {
          _t2 = this.modalOpenBtn[_e2], _t2.addEventListener("click", this.modalOpen.bind(this));
        }

        this.overlay.addEventListener("click", this.modalClose.bind(this)), this.modalCloseBtn.addEventListener("click", this.modalClose.bind(this));
      }
    }, {
      key: "modalOpen",
      value: function modalOpen(t) {
        var _this = this;

        !0 === this.flag && (this.flag = !1, this.graphicModal.style.display = "block", this.overlay.style.display = "block", setTimeout(function () {
          _this.overlay.classList.add("is-open"), _this.graphicModal.classList.add("is-open");
        }, 100), setTimeout(function () {
          _this.graphicModal.style.display = "block", _this.modalCloseBtn.classList.add("is-open");
        }, 300), setTimeout(function () {
          _this.content.classList.add("is-open");
        }, 500));
      }
    }, {
      key: "modalClose",
      value: function modalClose(t) {
        var _this2 = this;

        this.graphicModal.style.display = "none", this.modalCloseBtn.classList.remove("is-open"), this.overlay.classList.remove("is-open"), this.graphicModal.classList.remove("is-open"), this.content.classList.remove("is-open"), setTimeout(function () {
          _this2.graphicModal.style.display = "none", _this2.overlay.style.display = "none", _this2.flag = !0;
        }, 200);
      }
    }]);

    return c;
  }();

  var u = /*#__PURE__*/function () {
    function u() {
      _classCallCheck(this, u);

      this.modalOpenBtn = document.querySelectorAll(".js-modal-open"), this.modalCloseBtn = document.getElementsByClassName("js-modal-close")[0], this.movieModal = document.getElementsByClassName("c-lyt-movie-modal")[0], this.iframe = document.getElementsByClassName("c-lyt-movie-iframe")[0], this.overlay = document.getElementsByClassName("c-modal-overlay")[0], this.flag = !0;

      for (var _t3, _e3 = 0; _e3 < this.modalOpenBtn.length; _e3++) {
        _t3 = this.modalOpenBtn[_e3], _t3.addEventListener("click", this.modalOpen.bind(this));
      }

      this.overlay.addEventListener("click", this.modalClose.bind(this)), this.modalCloseBtn.addEventListener("click", this.modalClose.bind(this));
    }

    _createClass(u, [{
      key: "modalOpen",
      value: function modalOpen(t) {
        var _this3 = this;

        if (!0 === this.flag) {
          this.flag = !1;
          var e = t.target;

          do {
            if (!e) break;

            if (e.classList.contains("js-modal-open")) {
              this.YouTubeID = e.getAttribute("data-id");
              break;
            }

            e = e.parentNode;
          } while (e);

          this.iframe.setAttribute("src", this.YouTubeID), this.movieModal.style.display = "block", this.overlay.style.display = "block", setTimeout(function () {
            _this3.overlay.classList.add("is-open"), _this3.movieModal.classList.add("is-open");
          }, 100), setTimeout(function () {
            _this3.movieModal.style.display = "block", _this3.modalCloseBtn.classList.add("is-open");
          }, 300);
        }
      }
    }, {
      key: "modalClose",
      value: function modalClose(t) {
        var _this4 = this;

        this.movieModal.style.display = "none", this.iframe.setAttribute("src", ""), this.modalCloseBtn.classList.remove("is-open"), this.overlay.classList.remove("is-open"), this.movieModal.classList.remove("is-open"), setTimeout(function () {
          _this4.movieModal.style.display = "none", _this4.overlay.style.display = "none", _this4.flag = !0;
        }, 200);
      }
    }]);

    return u;
  }();

  var f = /*#__PURE__*/function () {
    function f() {
      _classCallCheck(this, f);

      $(".u-feature-01-sp").length > 0 && this.init();
    }

    _createClass(f, [{
      key: "init",
      value: function init() {
        this.content = document.querySelectorAll(".js-fade-in"), this.fixedNav = document.getElementsByClassName("fixed-nav")[0], this.anchorNav = document.getElementsByClassName("c-nav-anchor-01")[0], this.fixedYear = document.getElementsByClassName("fixed-year")[0], this.fixedYearNum = document.getElementsByClassName("fixed-year-num")[0], this.y = window.pageYOffset || document.documentElement.scrollTop, this.h = window.innerHeight / 2 + 300, $(".title.js-fade-in").addClass("is-load"), this.bind(), this.mainVisualImgLoad(), this.setAnchorNav(), this.setFixedYear(), this.AnchorSmoothScroll();
      }
    }, {
      key: "bind",
      value: function bind() {
        window.addEventListener("scroll", this.toScrollHandler.bind(this));
      }
    }, {
      key: "toScrollHandler",
      value: function toScrollHandler(t) {
        var e = this;
        this.y = window.pageYOffset || document.documentElement.scrollTop, this.h = window.innerHeight / 2 + 300, Array.prototype.forEach.call(this.content, function (t, i) {
          e.setClass(t);
        });
      }
    }, {
      key: "setClass",
      value: function setClass(t, e) {
        t.getBoundingClientRect().top + window.pageYOffset < this.y + this.h && t.classList.add("is-load");
      }
    }, {
      key: "AnchorSmoothScroll",
      value: function AnchorSmoothScroll() {
        $('a[href^="#"]').click(function () {
          var t = $(this).attr("href"),
              e = $("#" == t || "" == t ? "html" : t).offset().top;
          return $("html, body").animate({
            scrollTop: e
          }, 300, "swing"), !1;
        });
      }
    }, {
      key: "setFixedYear",
      value: function setFixedYear() {
        this.yearStartPos = 0, window.addEventListener("scroll", this.toFixedYearScrollHandler.bind(this));
      }
    }, {
      key: "toFixedYearScrollHandler",
      value: function toFixedYearScrollHandler(t) {
        if (this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, this.navHeight = $(".fixed-year").outerHeight() + $(".c-nav-anchor-01").height(), this.yearStartPos = $(".fixed-year-container").offset().top - $(".c-nav-anchor-01").height(), this.yearEndPos = $(".c-lyt-feature-03").offset().top - $(".fixed-year").outerHeight() - 100, this.year2005StartPos = $(".h-2005").offset().top - this.navHeight, this.year2007StartPos = $(".h-2007").offset().top - this.navHeight, this.year2009StartPos = $(".h-2009").offset().top - this.navHeight, this.year2012StartPos = $(".h-2012").offset().top - this.navHeight, this.year2013StartPos = $(".h-2013").offset().top - this.navHeight, this.year2018StartPos = $(".h-2018").offset().top - this.navHeight, this.year2019StartPos = $(".h-2019").offset().top - this.navHeight, this.scrollTop > this.yearStartPos) {
          if (this.scrollTop > this.yearEndPos) {
            var _t4 = this;

            this.fixedYear.classList.remove("fade"), setTimeout(function () {
              _t4.fixedYear.classList.remove("fixed");
            }, 100);
          } else this.fixedYear.classList.add("fixed"), this.fixedYear.classList.add("fade");
        } else this.fixedYear.classList.remove("fixed");
        this.scrollTop > this.year2005StartPos && this.scrollTop < this.year2007StartPos ? this.fixedYearNum.textContent = "2005" : this.scrollTop > this.year2007StartPos && this.scrollTop < this.year2009StartPos ? this.fixedYearNum.textContent = "2007" : this.scrollTop > this.year2009StartPos && this.scrollTop < this.year2012StartPos ? this.fixedYearNum.textContent = "2009" : this.scrollTop > this.year2012StartPos && this.scrollTop < this.year2013StartPos ? this.fixedYearNum.textContent = "2012" : this.scrollTop > this.year2013StartPos && this.scrollTop < this.year2018StartPos ? this.fixedYearNum.textContent = "2013" : this.scrollTop > this.year2018StartPos && this.scrollTop < this.year2019StartPos ? this.fixedYearNum.textContent = "2018" : this.scrollTop > this.year2019StartPos && (this.fixedYearNum.textContent = "2019");
      }
    }, {
      key: "setAnchorNav",
      value: function setAnchorNav() {
        this.startPos = 0;
        window.addEventListener("scroll", this.toAnchorNavScrollHandler.bind(this, this.anchorNav));
      }
    }, {
      key: "toAnchorNavScrollHandler",
      value: function toAnchorNavScrollHandler(t, e) {
        this.startPos = $(".c-lyt-mainvisual-01").height() + $("#l-header").height(), this.EndPos = this.startPos + $("#l-content-inner").height() - $(".c-nav-anchor-01").height(), this.sec01End = this.startPos + $(".c-lyt-feature-02").height() + $(".c-nav-anchor-01").height(), this.sec02End = this.sec01End + $(".c-lyt-feature-03").height() + $(".c-nav-anchor-01").height(), this.sec03End = this.sec02End + $(".c-lyt-feature-04").height() + $(".c-nav-anchor-01").height(), this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, this.scrollTop > this.startPos ? this.scrollTop > this.EndPos ? t.classList.remove("fixed") : t.classList.add("fixed") : t.classList.remove("fixed"), this.scrollTop > this.startPos && this.scrollTop < this.sec01End ? ($(".c-nav-anchor-01 .now").removeClass("current"), $(".c-nav-anchor-01 .progress").addClass("current"), $(".c-nav-anchor-01 .future").removeClass("current")) : this.scrollTop > this.sec01End && this.scrollTop < this.sec02End ? ($(".c-nav-anchor-01 .now").addClass("current"), $(".c-nav-anchor-01 .progress").removeClass("current"), $(".c-nav-anchor-01 .future").removeClass("current")) : this.scrollTop > this.sec02End && this.scrollTop < this.sec03End && ($(".c-nav-anchor-01 .now").removeClass("current"), $(".c-nav-anchor-01 .progress").removeClass("current"), $(".c-nav-anchor-01 .future").addClass("current"));
      }
    }, {
      key: "mainVisualImgLoad",
      value: function mainVisualImgLoad() {
        this.imgs = document.querySelectorAll(".c-lyt-mainvisual-01 img"), this.imgsLength = this.imgs.length, this.imgLoadDoneNum = 0;
        var t = this,
            e = setInterval(function () {
          t.imgLoadDoneNum = 0;

          for (var i = 0; i < t.imgs.length; i++) {
            t.imgs[i].width > 0 && t.imgLoadDoneNum++;
          }

          t.imgLoadDoneNum === t.imgsLength && (t.mainVisualFixedNav(), clearInterval(e));
        }, 100);
      }
    }, {
      key: "mainVisualFixedNav",
      value: function mainVisualFixedNav() {
        this.endPos = 0;
        var t = this;
        setTimeout(function () {
          window.addEventListener("scroll", t.toMainVisualScrollHandler.bind(this, t.fixedNav));
        }, 400);
      }
    }, {
      key: "toMainVisualScrollHandler",
      value: function toMainVisualScrollHandler(t, e) {
        this.endPos = $(".c-lyt-mainvisual-01").height() + $("#l-header").height(), this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, this.scrollTop > endPos - window.innerHeight ? t.classList.remove("fixed") : t.classList.add("fixed");
      }
    }]);

    return f;
  }();

  function d(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function p(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }
  /*!
   * GSAP 3.9.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */


  var m,
      g,
      v,
      _,
      y,
      w,
      x,
      T,
      b,
      k,
      C,
      S,
      E,
      O = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      A = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      M = 1e8,
      P = 2 * Math.PI,
      F = P / 4,
      L = 0,
      N = Math.sqrt,
      B = Math.cos,
      D = Math.sin,
      R = function R(t) {
    return "string" == typeof t;
  },
      z = function z(t) {
    return "function" == typeof t;
  },
      Y = function Y(t) {
    return "number" == typeof t;
  },
      I = function I(t) {
    return void 0 === t;
  },
      H = function H(t) {
    return "object" == _typeof(t);
  },
      j = function j(t) {
    return !1 !== t;
  },
      W = function W() {
    return "undefined" != typeof window;
  },
      q = function q(t) {
    return z(t) || R(t);
  },
      K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      U = Array.isArray,
      V = /(?:-?\.?\d|\.)+/gi,
      X = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      G = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      Z = /[+-]=-?[.\d]+/,
      J = /[^,'"\[\]\s]+/gi,
      tt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      et = {},
      it = {},
      nt = function nt(t) {
    return (it = Et(t, et)) && di;
  },
      rt = function rt(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  },
      st = function st(t, e) {
    return !e && console.warn(t);
  },
      ot = function ot(t, e) {
    return t && (et[t] = e) && it && (it[t] = e) || et;
  },
      at = function at() {
    return 0;
  },
      lt = {},
      ht = [],
      ct = {},
      ut = {},
      ft = {},
      dt = 30,
      pt = [],
      mt = "",
      gt = function gt(t) {
    var e,
        i,
        n = t[0];

    if (H(n) || z(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
      for (i = pt.length; i-- && !pt[i].targetTest(n);) {
        ;
      }

      e = pt[i];
    }

    for (i = t.length; i--;) {
      t[i] && (t[i]._gsap || (t[i]._gsap = new De(t[i], e))) || t.splice(i, 1);
    }

    return t;
  },
      vt = function vt(t) {
    return t._gsap || gt(ne(t))[0]._gsap;
  },
      _t = function _t(t, e, i) {
    return (i = t[e]) && z(i) ? t[e]() : I(i) && t.getAttribute && t.getAttribute(e) || i;
  },
      yt = function yt(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
      wt = function wt(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
      xt = function xt(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  },
      Tt = function Tt(t, e) {
    for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;) {
      ;
    }

    return n < i;
  },
      bt = function bt() {
    var t,
        e,
        i = ht.length,
        n = ht.slice(0);

    for (ct = {}, ht.length = 0, t = 0; t < i; t++) {
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  },
      kt = function kt(t, e, i, n) {
    ht.length && bt(), t.render(e, i, n), ht.length && bt();
  },
      $t = function $t(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(J).length < 2 ? e : R(t) ? t.trim() : t;
  },
      Ct = function Ct(t) {
    return t;
  },
      St = function St(t, e) {
    for (var i in e) {
      i in t || (t[i] = e[i]);
    }

    return t;
  },
      Et = function Et(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  },
      Ot = function t(e, i) {
    for (var n in i) {
      "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = H(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
    }

    return e;
  },
      At = function At(t, e) {
    var i,
        n = {};

    for (i in t) {
      i in e || (n[i] = t[i]);
    }

    return n;
  },
      Mt = function Mt(t) {
    var e,
        i = t.parent || g,
        n = t.keyframes ? (e = U(t.keyframes), function (t, i) {
      for (var n in i) {
        n in t || "duration" === n && e || "ease" === n || (t[n] = i[n]);
      }
    }) : St;
    if (j(t.inherit)) for (; i;) {
      n(t, i.vars.defaults), i = i.parent || i._dp;
    }
    return t;
  },
      Pt = function Pt(t, e, i, n) {
    void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
    var r = e._prev,
        s = e._next;
    r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null;
  },
      Ft = function Ft(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0;
  },
      Lt = function Lt(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i;) {
      i._dirty = 1, i = i.parent;
    }
    return t;
  },
      Nt = function Nt(t) {
    for (var e = t.parent; e && e.parent;) {
      e._dirty = 1, e.totalDuration(), e = e.parent;
    }

    return t;
  },
      Bt = function Bt(t) {
    return t._repeat ? Dt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  },
      Dt = function Dt(t, e) {
    var i = Math.floor(t /= e);
    return t && i === t ? i - 1 : i;
  },
      Rt = function Rt(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  },
      zt = function zt(t) {
    return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0));
  },
      Yt = function Yt(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = xt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), zt(t), i._dirty || Lt(i, t)), t;
  },
      It = function It(t, e) {
    var i;

    if ((e._time || e._initted && !e._dur) && (i = Rt(t.rawTime(), e), (!e._dur || Zt(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (i = t; i._dp;) {
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
      }
      t._zTime = -1e-8;
    }
  },
      Ht = function Ht(t, e, i, n) {
    return e.parent && Ft(e), e._start = xt((Y(i) ? i : i || t !== g ? Xt(t, i, e) : t._time) + e._delay), e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function (t, e, i, n, r) {
      void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
      var s,
          o = t[n];
      if (r) for (s = e[r]; o && o[r] > s;) {
        o = o._prev;
      }
      o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), qt(e) || (t._recent = e), n || It(t, e), t;
  },
      jt = function jt(t, e) {
    return (et.ScrollTrigger || rt("scrollTrigger", e)) && et.ScrollTrigger.create(e, t);
  },
      Wt = function Wt(t, e, i, n) {
    return We(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && x !== ke.frame ? (ht.push(t), t._lazy = [e, n], 1) : void 0 : 1;
  },
      qt = function qt(t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
      Kt = function Kt(t, e, i, n) {
    var r = t._repeat,
        s = xt(e) || 0,
        o = t._tTime / t._tDur;
    return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : xt(s * (r + 1) + t._rDelay * r) : s, o > 0 && !n ? Yt(t, t._tTime = t._tDur * o) : t.parent && zt(t), i || Lt(t.parent, t), t;
  },
      Ut = function Ut(t) {
    return t instanceof ze ? Lt(t) : Kt(t, t._dur);
  },
      Vt = {
    _start: 0,
    endTime: at,
    totalDuration: at
  },
      Xt = function t(e, i, n) {
    var r,
        s,
        o,
        a = e.labels,
        l = e._recent || Vt,
        h = e.duration() >= M ? l.endTime(!1) : e._dur;
    return R(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? l : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = h), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (U(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : h + s)) : null == i ? h : +i;
  },
      Gt = function Gt(t, e, i) {
    var n,
        r,
        s = Y(e[1]),
        o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[o];

    if (s && (a.duration = e[1]), a.parent = i, t) {
      for (n = a, r = i; r && !("immediateRender" in n);) {
        n = r.vars.defaults || {}, r = j(r.vars.inherit) && r.parent;
      }

      a.immediateRender = j(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1];
    }

    return new Xe(e[0], a, e[o + 1]);
  },
      Qt = function Qt(t, e) {
    return t || 0 === t ? e(t) : e;
  },
      Zt = function Zt(t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
      Jt = function Jt(t, e) {
    return R(t) && (e = tt.exec(t)) ? t.substr(e.index + e[0].length) : "";
  },
      te = [].slice,
      ee = function ee(t, e) {
    return t && H(t) && "length" in t && (!e && !t.length || t.length - 1 in t && H(t[0])) && !t.nodeType && t !== v;
  },
      ie = function ie(t, e, i) {
    return void 0 === i && (i = []), t.forEach(function (t) {
      var n;
      return R(t) && !e || ee(t, 1) ? (n = i).push.apply(n, ne(t)) : i.push(t);
    }) || i;
  },
      ne = function ne(t, e, i) {
    return !R(t) || i || !_ && $e() ? U(t) ? ie(t, i) : ee(t) ? te.call(t, 0) : t ? [t] : [] : te.call((e || y).querySelectorAll(t), 0);
  },
      re = function re(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  },
      se = function se(t) {
    if (z(t)) return t;
    var e = H(t) ? t : {
      each: t
    },
        i = Pe(e.ease),
        n = e.from || 0,
        r = parseFloat(e.base) || 0,
        s = {},
        o = n > 0 && n < 1,
        a = isNaN(n) || o,
        l = e.axis,
        h = n,
        c = n;
    return R(n) ? h = c = {
      center: .5,
      edges: .5,
      end: 1
    }[n] || 0 : !o && a && (h = n[0], c = n[1]), function (t, o, u) {
      var f,
          d,
          p,
          m,
          g,
          v,
          _,
          y,
          w,
          x = (u || e).length,
          T = s[x];

      if (!T) {
        if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, M])[1])) {
          for (_ = -M; _ < (_ = u[w++].getBoundingClientRect().left) && w < x;) {
            ;
          }

          w--;
        }

        for (T = s[x] = [], f = a ? Math.min(w, x) * h - .5 : n % w, d = w === M ? 0 : a ? x * c / w - .5 : n / w | 0, _ = 0, y = M, v = 0; v < x; v++) {
          p = v % w - f, m = d - (v / w | 0), T[v] = g = l ? Math.abs("y" === l ? m : p) : N(p * p + m * m), g > _ && (_ = g), g < y && (y = g);
        }

        "random" === n && re(T), T.max = _ - y, T.min = y, T.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (w > x ? x - 1 : l ? "y" === l ? x / w : w : Math.max(w, x / w)) || 0) * ("edges" === n ? -1 : 1), T.b = x < 0 ? r - x : r, T.u = Jt(e.amount || e.each) || 0, i = i && x < 0 ? Ae(i) : i;
      }

      return x = (T[t] - T.min) / T.max || 0, xt(T.b + (i ? i(x) : x) * T.v) + T.u;
    };
  },
      oe = function oe(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var n = Math.round(parseFloat(i) / t) * t * e;
      return (n - n % 1) / e + (Y(i) ? 0 : Jt(i));
    };
  },
      ae = function ae(t, e) {
    var i,
        n,
        r = U(t);
    return !r && H(t) && (i = r = t.radius || M, t.values ? (t = ne(t.values), (n = !Y(t[0])) && (i *= i)) : t = oe(t.increment)), Qt(e, r ? z(t) ? function (e) {
      return n = t(e), Math.abs(n - e) <= i ? n : e;
    } : function (e) {
      for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = M, h = 0, c = t.length; c--;) {
        (r = n ? (r = t[c].x - o) * r + (s = t[c].y - a) * s : Math.abs(t[c] - o)) < l && (l = r, h = c);
      }

      return h = !i || l <= i ? t[h] : e, n || h === e || Y(e) ? h : h + Jt(e);
    } : oe(t));
  },
      le = function le(t, e, i, n) {
    return Qt(U(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
      return U(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n;
    });
  },
      he = function he(t, e, i) {
    return Qt(i, function (i) {
      return t[~~e(i)];
    });
  },
      ce = function ce(t) {
    for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) {
      n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? J : V), o += t.substr(s, e - s) + le(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
    }

    return o + t.substr(s, t.length - s);
  },
      ue = function ue(t, e, i, n, r) {
    var s = e - t,
        o = n - i;
    return Qt(r, function (e) {
      return i + ((e - t) / s * o || 0);
    });
  },
      fe = function fe(t, e, i) {
    var n,
        r,
        s,
        o = t.labels,
        a = M;

    for (n in o) {
      (r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
    }

    return s;
  },
      de = function de(t, e, i) {
    var n,
        r,
        s = t.vars,
        o = s[e];
    if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && ht.length && bt(), n ? o.apply(r, n) : o.call(r);
  },
      pe = function pe(t) {
    return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && de(t, "onInterrupt"), t;
  },
      me = function me(t) {
    var e = (t = !t.name && t["default"] || t).name,
        i = z(t),
        n = e && !i && t.init ? function () {
      this._props = [];
    } : t,
        r = {
      init: at,
      render: ri,
      add: He,
      kill: oi,
      modifier: si,
      rawVars: 0
    },
        s = {
      targetTest: 0,
      get: 0,
      getSetter: ti,
      aliases: {},
      register: 0
    };

    if ($e(), t !== n) {
      if (ut[e]) return;
      St(n, St(At(t, r), s)), Et(n.prototype, Et(r, At(t, s))), ut[n.prop = e] = n, t.targetTest && (pt.push(n), lt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
    }

    ot(e, n), t.register && t.register(di, n, hi);
  },
      ge = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0]
  },
      ve = function ve(t, e, i) {
    return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0;
  },
      _e = function _e(t, e, i) {
    var n,
        r,
        s,
        o,
        a,
        l,
        h,
        c,
        u,
        f,
        d = t ? Y(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ge.black;

    if (!d) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t]) d = ge[t];else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
        d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
      } else if ("hsl" === t.substr(0, 3)) {
        if (d = f = t.match(V), e) {
          if (~t.indexOf("=")) return d = t.match(X), i && d.length < 4 && (d[3] = 1), d;
        } else o = +d[0] % 360 / 360, a = +d[1] / 100, n = 2 * (l = +d[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), d.length > 3 && (d[3] *= 1), d[0] = ve(o + 1 / 3, n, r), d[1] = ve(o, n, r), d[2] = ve(o - 1 / 3, n, r);
      } else d = t.match(V) || ge.transparent;
      d = d.map(Number);
    }

    return e && !f && (n = d[0] / 255, r = d[1] / 255, s = d[2] / 255, l = ((h = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === n ? (r - s) / u + (r < s ? 6 : 0) : h === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), d[0] = ~~(o + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * l + .5)), i && d.length < 4 && (d[3] = 1), d;
  },
      ye = function ye(t) {
    var e = [],
        i = [],
        n = -1;
    return t.split(xe).forEach(function (t) {
      var r = t.match(G) || [];
      e.push.apply(e, r), i.push(n += r.length + 1);
    }), e.c = i, e;
  },
      we = function we(t, e, i) {
    var n,
        r,
        s,
        o,
        a = "",
        l = (t + a).match(xe),
        h = e ? "hsla(" : "rgba(",
        c = 0;
    if (!l) return t;
    if (l = l.map(function (t) {
      return (t = _e(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), i && (s = ye(t), (n = i.c).join(a) !== s.c.join(a))) for (o = (r = t.replace(xe, "1").split(G)).length - 1; c < o; c++) {
      a += r[c] + (~n.indexOf(c) ? l.shift() || h + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
    }
    if (!r) for (o = (r = t.split(xe)).length - 1; c < o; c++) {
      a += r[c] + l[c];
    }
    return a + r[o];
  },
      xe = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";

    for (t in ge) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      Te = /hsl[a]?\(/,
      be = function be(t) {
    var e,
        i = t.join(" ");
    if (xe.lastIndex = 0, xe.test(i)) return e = Te.test(i), t[1] = we(t[1], e), t[0] = we(t[0], e, ye(t[1])), !0;
  },
      ke = function () {
    var t,
        e,
        i,
        n,
        r,
        s,
        o = Date.now,
        a = 500,
        l = 33,
        h = o(),
        c = h,
        u = 1e3 / 240,
        f = u,
        d = [],
        p = function i(p) {
      var m,
          g,
          v,
          _,
          y = o() - c,
          w = !0 === p;

      if (y > a && (h += y - l), ((m = (v = (c += y) - h) - f) > 0 || w) && (_ = ++n.frame, r = v - 1e3 * n.time, n.time = v /= 1e3, f += m + (m >= u ? 4 : u - m), g = 1), w || (t = e(i)), g) for (s = 0; s < d.length; s++) {
        d[s](v, r, _, p);
      }
    };

    return n = {
      time: 0,
      frame: 0,
      tick: function tick() {
        p(!0);
      },
      deltaRatio: function deltaRatio(t) {
        return r / (1e3 / (t || 60));
      },
      wake: function wake() {
        w && (!_ && W() && (v = _ = window, y = v.document || {}, et.gsap = di, (v.gsapVersions || (v.gsapVersions = [])).push(di.version), nt(it || v.GreenSockGlobals || !v.gsap && v || {}), i = v.requestAnimationFrame), t && n.sleep(), e = i || function (t) {
          return setTimeout(t, f - 1e3 * n.time + 1 | 0);
        }, b = 1, p(2));
      },
      sleep: function sleep() {
        (i ? v.cancelAnimationFrame : clearTimeout)(t), b = 0, e = at;
      },
      lagSmoothing: function lagSmoothing(t, e) {
        a = t || 1 / 1e-8, l = Math.min(e, a, 0);
      },
      fps: function fps(t) {
        u = 1e3 / (t || 240), f = 1e3 * n.time + u;
      },
      add: function add(t) {
        d.indexOf(t) < 0 && d.push(t), $e();
      },
      remove: function remove(t, e) {
        ~(e = d.indexOf(t)) && d.splice(e, 1) && s >= e && s--;
      },
      _listeners: d
    };
  }(),
      $e = function $e() {
    return !b && ke.wake();
  },
      Ce = {},
      Se = /^[\d.\-M][\d.\-,\s]/,
      Ee = /["']/g,
      Oe = function Oe(t) {
    for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) {
      i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(Ee, "").trim() : +n, o = i.substr(e + 1).trim();
    }

    return r;
  },
      Ae = function Ae(t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
      Me = function t(e, i) {
    for (var n, r = e._first; r;) {
      r instanceof ze ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next;
    }
  },
      Pe = function Pe(t, e) {
    return t && (z(t) ? t : Ce[t] || function (t) {
      var e,
          i,
          n,
          r,
          s = (t + "").split("("),
          o = Ce[s[0]];
      return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [Oe(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map($t)) : Ce._CE && Se.test(t) ? Ce._CE("", t) : o;
    }(t)) || e;
  },
      Fe = function Fe(t, e, i, n) {
    void 0 === i && (i = function i(t) {
      return 1 - e(1 - t);
    }), void 0 === n && (n = function n(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var r,
        s = {
      easeIn: e,
      easeOut: i,
      easeInOut: n
    };
    return yt(t, function (t) {
      for (var e in Ce[t] = et[t] = s, Ce[r = t.toLowerCase()] = i, s) {
        Ce[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ce[t + "." + e] = s[e];
      }
    }), s;
  },
      Le = function Le(t) {
    return function (e) {
      return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2;
    };
  },
      Ne = function t(e, i, n) {
    var r = i >= 1 ? i : 1,
        s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
        o = s / P * (Math.asin(1 / r) || 0),
        a = function a(t) {
      return 1 === t ? 1 : r * Math.pow(2, -10 * t) * D((t - o) * s) + 1;
    },
        l = "out" === e ? a : "in" === e ? function (t) {
      return 1 - a(1 - t);
    } : Le(a);

    return s = P / s, l.config = function (i, n) {
      return t(e, i, n);
    }, l;
  },
      Be = function t(e, i) {
    void 0 === i && (i = 1.70158);

    var n = function n(t) {
      return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
    },
        r = "out" === e ? n : "in" === e ? function (t) {
      return 1 - n(1 - t);
    } : Le(n);

    return r.config = function (i) {
      return t(e, i);
    }, r;
  };

  yt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var i = e < 5 ? e + 1 : e;
    Fe(t + ",Power" + (i - 1), e ? function (t) {
      return Math.pow(t, i);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, i);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
    });
  }), Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn, Fe("Elastic", Ne("in"), Ne("out"), Ne()), k = 7.5625, S = 1 / (C = 2.75), Fe("Bounce", function (t) {
    return 1 - E(1 - t);
  }, E = function E(t) {
    return t < S ? k * t * t : t < .7272727272727273 ? k * Math.pow(t - 1.5 / C, 2) + .75 : t < .9090909090909092 ? k * (t -= 2.25 / C) * t + .9375 : k * Math.pow(t - 2.625 / C, 2) + .984375;
  }), Fe("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Fe("Circ", function (t) {
    return -(N(1 - t * t) - 1);
  }), Fe("Sine", function (t) {
    return 1 === t ? 1 : 1 - B(t * F);
  }), Fe("Back", Be("in"), Be("out"), Be()), Ce.SteppedEase = Ce.steps = et.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var i = 1 / t,
          n = t + (e ? 0 : 1),
          r = e ? 1 : 0;
      return function (t) {
        return ((n * Zt(0, 1 - 1e-8, t) | 0) + r) * i;
      };
    }
  }, A.ease = Ce["quad.out"], yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return mt += t + "," + t + "Params,";
  });

  var De = function De(t, e) {
    this.id = L++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : _t, this.set = e ? e.getSetter : ti;
  },
      Re = function () {
    function t(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Kt(this, +t.duration, 1, 1), this.data = t.data, b || ke.wake();
    }

    var e = t.prototype;
    return e.delay = function (t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, e.duration = function (t) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, e.totalDuration = function (t) {
      return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, e.totalTime = function (t, e) {
      if ($e(), !arguments.length) return this._tTime;
      var i = this._dp;

      if (i && i.smoothChildTiming && this._ts) {
        for (Yt(this, t), !i._dp || i.parent || It(i, this); i && i.parent;) {
          i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
        }

        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ht(this._dp, this, this._start - this._delay);
      }

      return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), kt(this, t, e)), this;
    }, e.time = function (t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Bt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
    }, e.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, e.progress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Bt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, e.iteration = function (t, e) {
      var i = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Dt(this._tTime, i) + 1 : 1;
    }, e.timeScale = function (t) {
      if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? Rt(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, Nt(this.totalTime(Zt(-this._delay, this._tDur, e), !0)), zt(this), this;
    }, e.paused = function (t) {
      return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : ($e(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps;
    }, e.startTime = function (t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return e && (e._sort || !this.parent) && Ht(e, this, t - this._delay), this;
      }

      return this._start;
    }, e.endTime = function (t) {
      return this._start + (j(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, e.rawTime = function (t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Rt(e.rawTime(t), this) : this._tTime : this._tTime;
    }, e.globalTime = function (t) {
      for (var e = this, i = arguments.length ? t : e.rawTime(); e;) {
        i = e._start + i / (e._ts || 1), e = e._dp;
      }

      return i;
    }, e.repeat = function (t) {
      return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ut(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
    }, e.repeatDelay = function (t) {
      if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, Ut(this), e ? this.time(e) : this;
      }

      return this._rDelay;
    }, e.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, e.seek = function (t, e) {
      return this.totalTime(Xt(this, t), j(e));
    }, e.restart = function (t, e) {
      return this.play().totalTime(t ? -this._delay : 0, j(e));
    }, e.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, e.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, e.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, e.resume = function () {
      return this.paused(!1);
    }, e.reversed = function (t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
    }, e.invalidate = function () {
      return this._initted = this._act = 0, this._zTime = -1e-8, this;
    }, e.isActive = function () {
      var t,
          e = this.parent || this._dp,
          i = this._start;
      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8));
    }, e.eventCallback = function (t, e, i) {
      var n = this.vars;
      return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
    }, e.then = function (t) {
      var e = this;
      return new Promise(function (i) {
        var n = z(t) ? t : Ct,
            r = function r() {
          var t = e.then;
          e.then = null, z(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t;
        };

        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r;
      });
    }, e.kill = function () {
      pe(this);
    }, t;
  }();

  St(Re.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var ze = function (t) {
    function e(e, i) {
      var n;
      return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = j(e.sortChildren), g && Ht(e.parent || g, d(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && jt(d(n), e.scrollTrigger), n;
    }

    p(e, t);
    var i = e.prototype;
    return i.to = function (t, e, i) {
      return Gt(0, arguments, this), this;
    }, i.from = function (t, e, i) {
      return Gt(1, arguments, this), this;
    }, i.fromTo = function (t, e, i, n) {
      return Gt(2, arguments, this), this;
    }, i.set = function (t, e, i) {
      return e.duration = 0, e.parent = this, Mt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Xe(t, e, Xt(this, i), 1), this;
    }, i.call = function (t, e, i) {
      return Ht(this, Xe.delayedCall(0, t, e), i);
    }, i.staggerTo = function (t, e, i, n, r, s, o) {
      return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new Xe(t, i, Xt(this, r)), this;
    }, i.staggerFrom = function (t, e, i, n, r, s, o) {
      return i.runBackwards = 1, Mt(i).immediateRender = j(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o);
    }, i.staggerFromTo = function (t, e, i, n, r, s, o, a) {
      return n.startAt = i, Mt(n).immediateRender = j(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a);
    }, i.render = function (t, e, i) {
      var n,
          r,
          s,
          o,
          a,
          l,
          h,
          c,
          u,
          f,
          d,
          p,
          m = this._time,
          v = this._dirty ? this.totalDuration() : this._tDur,
          _ = this._dur,
          y = t <= 0 ? 0 : xt(t),
          w = this._zTime < 0 != t < 0 && (this._initted || !_);

      if (this !== g && y > v && t >= 0 && (y = v), y !== this._tTime || i || w) {
        if (m !== this._time && _ && (y += this._time - m, t += this._time - m), n = y, u = this._start, l = !(c = this._ts), w && (_ || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
          if (d = this._yoyo, a = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);

          if (n = xt(y % a), y === v ? (o = this._repeat, n = _) : ((o = ~~(y / a)) && o === y / a && (n = _, o--), n > _ && (n = _)), f = Dt(this._tTime, a), !m && this._tTime && f !== o && (f = o), d && 1 & o && (n = _ - n, p = 1), o !== f && !this._lock) {
            var x = d && 1 & f,
                T = x === (d && 1 & o);
            if (o < f && (x = !x), m = x ? 0 : _, this._lock = 1, this.render(m || (p ? 0 : xt(o * a)), e, !_)._lock = 0, this._tTime = y, !e && this.parent && de(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (_ = this._dur, v = this._tDur, T && (this._lock = 2, m = x ? _ : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
            Me(this, p);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function (t, e, i) {
          var n;
          if (i > e) for (n = t._first; n && n._start <= i;) {
            if ("isPause" === n.data && n._start > e) return n;
            n = n._next;
          } else for (n = t._last; n && n._start >= i;) {
            if ("isPause" === n.data && n._start < e) return n;
            n = n._prev;
          }
        }(this, xt(m), xt(n))) && (y -= n - (n = h._start)), this._tTime = y, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && n && !e && (de(this, "onStart"), this._tTime !== y)) return this;
        if (n >= m && t >= 0) for (r = this._first; r;) {
          if (s = r._next, (r._act || n >= r._start) && r._ts && h !== r) {
            if (r.parent !== this) return this.render(t, e, i);

            if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
              h = 0, s && (y += this._zTime = -1e-8);
              break;
            }
          }

          r = s;
        } else {
          r = this._last;

          for (var b = t < 0 ? t : n; r;) {
            if (s = r._prev, (r._act || b <= r._end) && r._ts && h !== r) {
              if (r.parent !== this) return this.render(t, e, i);

              if (r.render(r._ts > 0 ? (b - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (b - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                h = 0, s && (y += this._zTime = b ? -1e-8 : 1e-8);
                break;
              }
            }

            r = s;
          }
        }
        if (h && !e && (this.pause(), h.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = u, zt(this), this.render(t, e, i);
        this._onUpdate && !e && de(this, "onUpdate", !0), (y === v && v >= this.totalDuration() || !y && m) && (u !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !_) && (y === v && this._ts > 0 || !y && this._ts < 0) && Ft(this, 1), e || t < 0 && !m || !y && !m && v || (de(this, y === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())));
      }

      return this;
    }, i.add = function (t, e) {
      var i = this;

      if (Y(e) || (e = Xt(this, e, t)), !(t instanceof Re)) {
        if (U(t)) return t.forEach(function (t) {
          return i.add(t, e);
        }), this;
        if (R(t)) return this.addLabel(t, e);
        if (!z(t)) return this;
        t = Xe.delayedCall(0, t);
      }

      return this !== t ? Ht(this, t, e) : this;
    }, i.getChildren = function (t, e, i, n) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -M);

      for (var r = [], s = this._first; s;) {
        s._start >= n && (s instanceof Xe ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
      }

      return r;
    }, i.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), i = e.length; i--;) {
        if (e[i].vars.id === t) return e[i];
      }
    }, i.remove = function (t) {
      return R(t) ? this.removeLabel(t) : z(t) ? this.killTweensOf(t) : (Pt(this, t), t === this._recent && (this._recent = this._last), Lt(this));
    }, i.totalTime = function (e, i) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(ke.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime;
    }, i.addLabel = function (t, e) {
      return this.labels[t] = Xt(this, e), this;
    }, i.removeLabel = function (t) {
      return delete this.labels[t], this;
    }, i.addPause = function (t, e, i) {
      var n = Xe.delayedCall(0, e || at, i);
      return n.data = "isPause", this._hasPause = 1, Ht(this, n, Xt(this, t));
    }, i.removePause = function (t) {
      var e = this._first;

      for (t = Xt(this, t); e;) {
        e._start === t && "isPause" === e.data && Ft(e), e = e._next;
      }
    }, i.killTweensOf = function (t, e, i) {
      for (var n = this.getTweensOf(t, i), r = n.length; r--;) {
        Ye !== n[r] && n[r].kill(t, e);
      }

      return this;
    }, i.getTweensOf = function (t, e) {
      for (var i, n = [], r = ne(t), s = this._first, o = Y(e); s;) {
        s instanceof Xe ? Tt(s._targets, r) && (o ? (!Ye || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
      }

      return n;
    }, i.tweenTo = function (t, e) {
      e = e || {};
      var i,
          n = this,
          r = Xt(n, t),
          s = e,
          o = s.startAt,
          a = s.onStart,
          l = s.onStartParams,
          h = s.immediateRender,
          c = Xe.to(n, St({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: r,
        overwrite: "auto",
        duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
        onStart: function onStart() {
          if (n.pause(), !i) {
            var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
            c._dur !== t && Kt(c, t, 0, 1).render(c._time, !0, !0), i = 1;
          }

          a && a.apply(c, l || []);
        }
      }, e));
      return h ? c.render(0) : c;
    }, i.tweenFromTo = function (t, e, i) {
      return this.tweenTo(e, St({
        startAt: {
          time: Xt(this, t)
        }
      }, i));
    }, i.recent = function () {
      return this._recent;
    }, i.nextLabel = function (t) {
      return void 0 === t && (t = this._time), fe(this, Xt(this, t));
    }, i.previousLabel = function (t) {
      return void 0 === t && (t = this._time), fe(this, Xt(this, t), 1);
    }, i.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8);
    }, i.shiftChildren = function (t, e, i) {
      void 0 === i && (i = 0);

      for (var n, r = this._first, s = this.labels; r;) {
        r._start >= i && (r._start += t, r._end += t), r = r._next;
      }

      if (e) for (n in s) {
        s[n] >= i && (s[n] += t);
      }
      return Lt(this);
    }, i.invalidate = function () {
      var e = this._first;

      for (this._lock = 0; e;) {
        e.invalidate(), e = e._next;
      }

      return t.prototype.invalidate.call(this);
    }, i.clear = function (t) {
      void 0 === t && (t = !0);

      for (var e, i = this._first; i;) {
        e = i._next, this.remove(i), i = e;
      }

      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Lt(this);
    }, i.totalDuration = function (t) {
      var e,
          i,
          n,
          r = 0,
          s = this,
          o = s._last,
          a = M;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));

      if (s._dirty) {
        for (n = s.parent; o;) {
          e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Ht(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), a = 0), o._end > r && o._ts && (r = o._end), o = e;
        }

        Kt(s, s === g && s._time > r ? s._time : r, 1, 1), s._dirty = 0;
      }

      return s._tDur;
    }, e.updateRoot = function (t) {
      if (g._ts && (kt(g, Rt(t, g)), x = ke.frame), ke.frame >= dt) {
        dt += O.autoSleep || 120;
        var e = g._first;

        if ((!e || !e._ts) && O.autoSleep && ke._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || ke.sleep();
        }
      }
    }, e;
  }(Re);

  St(ze.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var Ye,
      Ie = function Ie(t, e, i, n, r, s, o) {
    var a,
        l,
        h,
        c,
        u,
        f,
        d,
        p,
        m = new hi(this._pt, t, e, 0, 1, ni, null, r),
        g = 0,
        v = 0;

    for (m.b = i, m.e = n, i += "", (d = ~(n += "").indexOf("random(")) && (n = ce(n)), s && (s(p = [i, n], t, e), i = p[0], n = p[1]), l = i.match(Q) || []; a = Q.exec(n);) {
      c = a[0], u = n.substring(g, a.index), h ? h = (h + 1) % 5 : "rgba(" === u.substr(-5) && (h = 1), c !== l[v++] && (f = parseFloat(l[v - 1]) || 0, m._pt = {
        _next: m._pt,
        p: u || 1 === v ? u : ",",
        s: f,
        c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - f,
        m: h && h < 4 ? Math.round : 0
      }, g = Q.lastIndex);
    }

    return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = o, (Z.test(n) || d) && (m.e = 0), this._pt = m, m;
  },
      He = function He(t, e, i, n, r, s, o, a, l) {
    z(n) && (n = n(r || 0, t, s));
    var h,
        c = t[e],
        u = "get" !== i ? i : z(c) ? l ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
        f = z(c) ? l ? Ze : Qe : Ge;
    if (R(n) && (~n.indexOf("random(") && (n = ce(n)), "=" === n.charAt(1) && ((h = parseFloat(u) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (Jt(u) || 0)) || 0 === h) && (n = h)), u !== n) return isNaN(u * n) || "" === n ? (!c && !(e in t) && rt(e, n), Ie.call(this, t, e, u, n, f, a || O.stringFilter, l)) : (h = new hi(this._pt, t, e, +u || 0, n - (u || 0), "boolean" == typeof c ? ii : ei, 0, f), l && (h.fp = l), o && h.modifier(o, this, t), this._pt = h);
  },
      je = function je(t, e, i, n, r, s) {
    var o, a, l, h;
    if (ut[t] && !1 !== (o = new ut[t]()).init(r, o.rawVars ? e[t] : function (t, e, i, n, r) {
      if (z(t) && (t = Ke(t, r, e, i, n)), !H(t) || t.style && t.nodeType || U(t) || K(t)) return R(t) ? Ke(t, r, e, i, n) : t;
      var s,
          o = {};

      for (s in t) {
        o[s] = Ke(t[s], r, e, i, n);
      }

      return o;
    }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new hi(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== T)) for (l = i._ptLookup[i._targets.indexOf(r)], h = o._props.length; h--;) {
      l[o._props[h]] = a;
    }
    return o;
  },
      We = function t(e, i) {
    var n,
        r,
        s,
        o,
        a,
        l,
        h,
        c,
        u,
        f,
        d,
        p,
        v,
        _ = e.vars,
        y = _.ease,
        w = _.startAt,
        x = _.immediateRender,
        T = _.lazy,
        b = _.onUpdate,
        k = _.onUpdateParams,
        $ = _.callbackScope,
        C = _.runBackwards,
        S = _.yoyoEase,
        E = _.keyframes,
        O = _.autoRevert,
        P = e._dur,
        F = e._startAt,
        L = e._targets,
        N = e.parent,
        B = N && "nested" === N.data ? N.parent._targets : L,
        D = "auto" === e._overwrite && !m,
        R = e.timeline;

    if (R && (!E || !y) && (y = "none"), e._ease = Pe(y, A.ease), e._yEase = S ? Ae(Pe(!0 === S ? y : S, A.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !R && !!_.runBackwards, !R || E && !_.stagger) {
      if (p = (c = L[0] ? vt(L[0]).harness : 0) && _[c.prop], n = At(_, lt), F && Ft(F.render(-1, !0)), w) {
        if (Ft(e._startAt = Xe.set(L, St({
          data: "isStart",
          overwrite: !1,
          parent: N,
          immediateRender: !0,
          lazy: j(T),
          startAt: null,
          delay: 0,
          onUpdate: b,
          onUpdateParams: k,
          callbackScope: $,
          stagger: 0
        }, w))), i < 0 && !x && !O && e._startAt.render(-1, !0), x) {
          if (i > 0 && !O && (e._startAt = 0), P && i <= 0) return void (i && (e._zTime = i));
        } else !1 === O && (e._startAt = 0);
      } else if (C && P) if (F) !O && (e._startAt = 0);else if (i && (x = !1), s = St({
        overwrite: !1,
        data: "isFromStart",
        lazy: x && j(T),
        immediateRender: x,
        stagger: 0,
        parent: N
      }, n), p && (s[c.prop] = p), Ft(e._startAt = Xe.set(L, s)), i < 0 && e._startAt.render(-1, !0), e._zTime = i, x) {
        if (!i) return;
      } else t(e._startAt, 1e-8);

      for (e._pt = 0, T = P && j(T) || T && !P, r = 0; r < L.length; r++) {
        if (h = (a = L[r])._gsap || gt(L)[r]._gsap, e._ptLookup[r] = f = {}, ct[h.id] && ht.length && bt(), d = B === L ? r : B.indexOf(a), c && !1 !== (u = new c()).init(a, p || n, e, d, B) && (e._pt = o = new hi(e._pt, a, u.name, 0, 1, u.render, u, 0, u.priority), u._props.forEach(function (t) {
          f[t] = o;
        }), u.priority && (l = 1)), !c || p) for (s in n) {
          ut[s] && (u = je(s, n, e, d, a, B)) ? u.priority && (l = 1) : f[s] = o = He.call(e, a, s, "get", n[s], d, B, 0, _.stringFilter);
        }
        e._op && e._op[r] && e.kill(a, e._op[r]), D && e._pt && (Ye = e, g.killTweensOf(a, f, e.globalTime(i)), v = !e.parent, Ye = 0), e._pt && T && (ct[h.id] = 1);
      }

      l && li(e), e._onInit && e._onInit(e);
    }

    e._onUpdate = b, e._initted = (!e._op || e._pt) && !v, E && i <= 0 && R.render(M, !0, !0);
  },
      qe = function qe(t, e, i, n) {
    var r,
        s,
        o = e.ease || n || "power1.inOut";
    if (U(e)) s = i[t] || (i[t] = []), e.forEach(function (t, i) {
      return s.push({
        t: i / (e.length - 1) * 100,
        v: t,
        e: o
      });
    });else for (r in e) {
      s = i[r] || (i[r] = []), "ease" === r || s.push({
        t: parseFloat(t),
        v: e[r],
        e: o
      });
    }
  },
      Ke = function Ke(t, e, i, n, r) {
    return z(t) ? t.call(e, i, n, r) : R(t) && ~t.indexOf("random(") ? ce(t) : t;
  },
      Ue = mt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Ve = {};

  yt(Ue + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Ve[t] = 1;
  });

  var Xe = function (t) {
    function e(e, i, n, r) {
      var s;
      "number" == typeof i && (n.duration = i, i = n, n = null);
      var o,
          a,
          l,
          h,
          c,
          u,
          f,
          p,
          v = (s = t.call(this, r ? i : Mt(i)) || this).vars,
          _ = v.duration,
          y = v.delay,
          w = v.immediateRender,
          x = v.stagger,
          T = v.overwrite,
          b = v.keyframes,
          k = v.defaults,
          $ = v.scrollTrigger,
          C = v.yoyoEase,
          S = i.parent || g,
          E = (U(e) || K(e) ? Y(e[0]) : "length" in i) ? [e] : ne(e);

      if (s._targets = E.length ? gt(E) : st("GSAP target " + e + " not found. https://greensock.com", !O.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = T, b || x || q(_) || q(y)) {
        if (i = s.vars, (o = s.timeline = new ze({
          data: "nested",
          defaults: k || {}
        })).kill(), o.parent = o._dp = d(s), o._start = 0, x || q(_) || q(y)) {
          if (h = E.length, f = x && se(x), H(x)) for (c in x) {
            ~Ue.indexOf(c) && (p || (p = {}), p[c] = x[c]);
          }

          for (a = 0; a < h; a++) {
            (l = At(i, Ve)).stagger = 0, C && (l.yoyoEase = C), p && Et(l, p), u = E[a], l.duration = +Ke(_, d(s), a, u, E), l.delay = (+Ke(y, d(s), a, u, E) || 0) - s._delay, !x && 1 === h && l.delay && (s._delay = y = l.delay, s._start += y, l.delay = 0), o.to(u, l, f ? f(a, u, E) : 0), o._ease = Ce.none;
          }

          o.duration() ? _ = y = 0 : s.timeline = 0;
        } else if (b) {
          Mt(St(o.vars.defaults, {
            ease: "none"
          })), o._ease = Pe(b.ease || i.ease || "none");
          var A,
              M,
              P,
              F = 0;
          if (U(b)) b.forEach(function (t) {
            return o.to(E, t, ">");
          });else {
            for (c in l = {}, b) {
              "ease" === c || "easeEach" === c || qe(c, b[c], l, b.easeEach);
            }

            for (c in l) {
              for (A = l[c].sort(function (t, e) {
                return t.t - e.t;
              }), F = 0, a = 0; a < A.length; a++) {
                (P = {
                  ease: (M = A[a]).e,
                  duration: (M.t - (a ? A[a - 1].t : 0)) / 100 * _
                })[c] = M.v, o.to(E, P, F), F += P.duration;
              }
            }

            o.duration() < _ && o.to({}, {
              duration: _ - o.duration()
            });
          }
        }

        _ || s.duration(_ = o.duration());
      } else s.timeline = 0;

      return !0 !== T || m || (Ye = d(s), g.killTweensOf(E), Ye = 0), Ht(S, d(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (w || !_ && !b && s._start === xt(S._time) && j(w) && function t(e) {
        return !e || e._ts && t(e.parent);
      }(d(s)) && "nested" !== S.data) && (s._tTime = -1e-8, s.render(Math.max(0, -y))), $ && jt(d(s), $), s;
    }

    p(e, t);
    var i = e.prototype;
    return i.render = function (t, e, i) {
      var n,
          r,
          s,
          o,
          a,
          l,
          h,
          c,
          u,
          f = this._time,
          d = this._tDur,
          p = this._dur,
          m = t > d - 1e-8 && t >= 0 ? d : t < 1e-8 ? 0 : t;

      if (p) {
        if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (n = m, c = this.timeline, this._repeat) {
            if (o = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
            if (n = xt(m % o), m === d ? (s = this._repeat, n = p) : ((s = ~~(m / o)) && s === m / o && (n = p, s--), n > p && (n = p)), (l = this._yoyo && 1 & s) && (u = this._yEase, n = p - n), a = Dt(this._tTime, o), n === f && !i && this._initted) return this;
            s !== a && (c && this._yEase && Me(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(xt(o * s), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Wt(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
            if (p !== this._dur) return this.render(t, e, i);
          }

          if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (u || this._ease)(n / p), this._from && (this.ratio = h = 1 - h), n && !f && !e && (de(this, "onStart"), this._tTime !== m)) return this;

          for (r = this._pt; r;) {
            r.r(h, r.d), r = r._next;
          }

          c && c.render(t < 0 ? t : !n && l ? -1e-8 : c._dur * c._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), de(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && de(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Ft(this, 1), e || t < 0 && !f || !m && !f || (de(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()));
        }
      } else !function (t, e, i, n) {
        var r,
            s,
            o,
            a = t.ratio,
            l = e < 0 || !e && (!t._start && function t(e) {
          var i = e.parent;
          return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
        }(t) && (t._initted || !qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !qt(t)) ? 0 : 1,
            h = t._rDelay,
            c = 0;

        if (h && t._repeat && (c = Zt(0, t._tDur, e), s = Dt(c, h), t._yoyo && 1 & s && (l = 1 - l), s !== Dt(t._tTime, h) && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || n || 1e-8 === t._zTime || !e && t._zTime) {
          if (!t._initted && Wt(t, e, n, i)) return;

          for (o = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, r = t._pt; r;) {
            r.r(l, r.d), r = r._next;
          }

          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && de(t, "onUpdate"), c && t._repeat && !i && t.parent && de(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Ft(t, 1), i || (de(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, i);

      return this;
    }, i.targets = function () {
      return this._targets;
    }, i.invalidate = function () {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
    }, i.kill = function (t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? pe(this) : this;

      if (this.timeline) {
        var i = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Ye && !0 !== Ye.vars.overwrite)._first || pe(this), this.parent && i !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / i, 0, 1), this;
      }

      var n,
          r,
          s,
          o,
          a,
          l,
          h,
          c = this._targets,
          u = t ? ne(t) : c,
          f = this._ptLookup,
          d = this._pt;
      if ((!e || "all" === e) && function (t, e) {
        for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];) {
          ;
        }

        return i < 0;
      }(c, u)) return "all" === e && (this._pt = 0), pe(this);

      for (n = this._op = this._op || [], "all" !== e && (R(e) && (a = {}, yt(e, function (t) {
        return a[t] = 1;
      }), e = a), e = function (t, e) {
        var i,
            n,
            r,
            s,
            o = t[0] ? vt(t[0]).harness : 0,
            a = o && o.aliases;
        if (!a) return e;

        for (n in i = Et({}, e), a) {
          if ((n in i)) for (r = (s = a[n].split(",")).length; r--;) {
            i[s[r]] = i[n];
          }
        }

        return i;
      }(c, e)), h = c.length; h--;) {
        if (~u.indexOf(c[h])) for (a in r = f[h], "all" === e ? (n[h] = e, o = r, s = {}) : (s = n[h] = n[h] || {}, o = e), o) {
          (l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Pt(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
        }
      }

      return this._initted && !this._pt && d && pe(this), this;
    }, e.to = function (t, i) {
      return new e(t, i, arguments[2]);
    }, e.from = function (t, e) {
      return Gt(1, arguments);
    }, e.delayedCall = function (t, i, n, r) {
      return new e(i, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: i,
        onReverseComplete: i,
        onCompleteParams: n,
        onReverseCompleteParams: n,
        callbackScope: r
      });
    }, e.fromTo = function (t, e, i) {
      return Gt(2, arguments);
    }, e.set = function (t, i) {
      return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i);
    }, e.killTweensOf = function (t, e, i) {
      return g.killTweensOf(t, e, i);
    }, e;
  }(Re);

  St(Xe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), yt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    Xe[t] = function () {
      var e = new ze(),
          i = te.call(arguments, 0);
      return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
    };
  });

  var Ge = function Ge(t, e, i) {
    return t[e] = i;
  },
      Qe = function Qe(t, e, i) {
    return t[e](i);
  },
      Ze = function Ze(t, e, i, n) {
    return t[e](n.fp, i);
  },
      Je = function Je(t, e, i) {
    return t.setAttribute(e, i);
  },
      ti = function ti(t, e) {
    return z(t[e]) ? Qe : I(t[e]) && t.setAttribute ? Je : Ge;
  },
      ei = function ei(t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
      ii = function ii(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      ni = function ni(t, e) {
    var i = e._pt,
        n = "";
    if (!t && e.b) n = e.b;else if (1 === t && e.e) n = e.e;else {
      for (; i;) {
        n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
      }

      n += e.c;
    }
    e.set(e.t, e.p, n, e);
  },
      ri = function ri(t, e) {
    for (var i = e._pt; i;) {
      i.r(t, i.d), i = i._next;
    }
  },
      si = function si(t, e, i, n) {
    for (var r, s = this._pt; s;) {
      r = s._next, s.p === n && s.modifier(t, e, i), s = r;
    }
  },
      oi = function oi(t) {
    for (var e, i, n = this._pt; n;) {
      i = n._next, n.p === t && !n.op || n.op === t ? Pt(this, n, "_pt") : n.dep || (e = 1), n = i;
    }

    return !e;
  },
      ai = function ai(t, e, i, n) {
    n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
  },
      li = function li(t) {
    for (var e, i, n, r, s = t._pt; s;) {
      for (e = s._next, i = n; i && i.pr > s.pr;) {
        i = i._next;
      }

      (s._prev = i ? i._prev : r) ? s._prev._next = s : n = s, (s._next = i) ? i._prev = s : r = s, s = e;
    }

    t._pt = n;
  },
      hi = function () {
    function t(t, e, i, n, r, s, o, a, l) {
      this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || ei, this.d = o || this, this.set = a || Ge, this.pr = l || 0, this._next = t, t && (t._prev = this);
    }

    return t.prototype.modifier = function (t, e, i) {
      this.mSet = this.mSet || this.set, this.set = ai, this.m = t, this.mt = i, this.tween = e;
    }, t;
  }();

  yt(mt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return lt[t] = 1;
  }), et.TweenMax = et.TweenLite = Xe, et.TimelineLite = et.TimelineMax = ze, g = new ze({
    sortChildren: !1,
    defaults: A,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), O.stringFilter = be;
  var ci = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
        e[i] = arguments[i];
      }

      e.forEach(function (t) {
        return me(t);
      });
    },
    timeline: function timeline(t) {
      return new ze(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return g.getTweensOf(t, e);
    },
    getProperty: function getProperty(t, e, i, n) {
      R(t) && (t = ne(t)[0]);
      var r = vt(t || {}).get,
          s = i ? Ct : $t;
      return "native" === i && (i = ""), t ? e ? s((ut[e] && ut[e].get || r)(t, e, i, n)) : function (e, i, n) {
        return s((ut[e] && ut[e].get || r)(t, e, i, n));
      } : t;
    },
    quickSetter: function quickSetter(t, e, i) {
      if ((t = ne(t)).length > 1) {
        var n = t.map(function (t) {
          return di.quickSetter(t, e, i);
        }),
            r = n.length;
        return function (t) {
          for (var e = r; e--;) {
            n[e](t);
          }
        };
      }

      t = t[0] || {};
      var s = ut[e],
          o = vt(t),
          a = o.harness && (o.harness.aliases || {})[e] || e,
          l = s ? function (e) {
        var n = new s();
        T._pt = 0, n.init(t, i ? e + i : e, T, 0, [t]), n.render(1, n), T._pt && ri(1, T);
      } : o.set(t, a);
      return s ? l : function (e) {
        return l(t, a, i ? e + i : e, o, 1);
      };
    },
    isTweening: function isTweening(t) {
      return g.getTweensOf(t, !0).length > 0;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Pe(t.ease, A.ease)), Ot(A, t || {});
    },
    config: function config(t) {
      return Ot(O, t || {});
    },
    registerEffect: function registerEffect(t) {
      var e = t.name,
          i = t.effect,
          n = t.plugins,
          r = t.defaults,
          s = t.extendTimeline;
      (n || "").split(",").forEach(function (t) {
        return t && !ut[t] && !et[t] && st(e + " effect requires " + t + " plugin.");
      }), ft[e] = function (t, e, n) {
        return i(ne(t), St(e || {}, r), n);
      }, s && (ze.prototype[e] = function (t, i, n) {
        return this.add(ft[e](t, H(i) ? i : (n = i) && {}, this), n);
      });
    },
    registerEase: function registerEase(t, e) {
      Ce[t] = Pe(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Pe(t, e) : Ce;
    },
    getById: function getById(t) {
      return g.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var i,
          n,
          r = new ze(t);

      for (r.smoothChildTiming = j(t.smoothChildTiming), g.remove(r), r._dp = 0, r._time = r._tTime = g._time, i = g._first; i;) {
        n = i._next, !e && !i._dur && i instanceof Xe && i.vars.onComplete === i._targets[0] || Ht(r, i, i._start - i._delay), i = n;
      }

      return Ht(g, r, 0), r;
    },
    utils: {
      wrap: function t(e, i, n) {
        var r = i - e;
        return U(e) ? he(e, t(0, e.length), i) : Qt(n, function (t) {
          return (r + (t - e) % r) % r + e;
        });
      },
      wrapYoyo: function t(e, i, n) {
        var r = i - e,
            s = 2 * r;
        return U(e) ? he(e, t(0, e.length - 1), i) : Qt(n, function (t) {
          return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t);
        });
      },
      distribute: se,
      random: le,
      snap: ae,
      normalize: function normalize(t, e, i) {
        return ue(t, e, 0, 1, i);
      },
      getUnit: Jt,
      clamp: function clamp(t, e, i) {
        return Qt(i, function (i) {
          return Zt(t, e, i);
        });
      },
      splitColor: _e,
      toArray: ne,
      selector: function selector(t) {
        return t = ne(t)[0] || st("Invalid scope") || {}, function (e) {
          var i = t.current || t.nativeElement || t;
          return ne(e, i.querySelectorAll ? i : i === t ? st("Invalid scope") || y.createElement("div") : t);
        };
      },
      mapRange: ue,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) {
          e[i] = arguments[i];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(t, e) {
        return function (i) {
          return t(parseFloat(i)) + (e || Jt(i));
        };
      },
      interpolate: function t(e, i, n, r) {
        var s = isNaN(e + i) ? 0 : function (t) {
          return (1 - t) * e + t * i;
        };

        if (!s) {
          var o,
              a,
              l,
              h,
              c,
              u = R(e),
              f = {};
          if (!0 === n && (r = 1) && (n = null), u) e = {
            p: e
          }, i = {
            p: i
          };else if (U(e) && !U(i)) {
            for (l = [], h = e.length, c = h - 2, a = 1; a < h; a++) {
              l.push(t(e[a - 1], e[a]));
            }

            h--, s = function s(t) {
              t *= h;
              var e = Math.min(c, ~~t);
              return l[e](t - e);
            }, n = i;
          } else r || (e = Et(U(e) ? [] : {}, e));

          if (!l) {
            for (o in i) {
              He.call(f, e, o, "get", i[o]);
            }

            s = function s(t) {
              return ri(t, f) || (u ? e.p : e);
            };
          }
        }

        return Qt(n, s);
      },
      shuffle: re
    },
    install: nt,
    effects: ft,
    ticker: ke,
    updateRoot: ze.updateRoot,
    plugins: ut,
    globalTimeline: g,
    core: {
      PropTween: hi,
      globals: ot,
      Tween: Xe,
      Timeline: ze,
      Animation: Re,
      getCache: vt,
      _removeLinkedListItem: Pt,
      suppressOverwrites: function suppressOverwrites(t) {
        return m = t;
      }
    }
  };
  yt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return ci[t] = Xe[t];
  }), ke.add(ze.updateRoot), T = ci.to({}, {
    duration: 0
  });

  var ui = function ui(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) {
      i = i._next;
    }

    return i;
  },
      fi = function fi(t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, n) {
        n._onInit = function (t) {
          var n, r;

          if (R(i) && (n = {}, yt(i, function (t) {
            return n[t] = 1;
          }), i = n), e) {
            for (r in n = {}, i) {
              n[r] = e(i[r]);
            }

            i = n;
          }

          !function (t, e) {
            var i,
                n,
                r,
                s = t._targets;

            for (i in e) {
              for (n = s.length; n--;) {
                (r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = ui(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i));
              }
            }
          }(t, i);
        };
      }
    };
  },
      di = ci.registerPlugin({
    name: "attr",
    init: function init(t, e, i, n, r) {
      var s, o;

      for (s in e) {
        (o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s);
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var i = e.length; i--;) {
        this.add(t, i, t[i] || 0, e[i]);
      }
    }
  }, fi("roundProps", oe), fi("modifiers"), fi("snap", ae)) || ci;

  Xe.version = ze.version = di.version = "3.9.1", w = 1, W() && $e();
  Ce.Power0, Ce.Power1, Ce.Power2, Ce.Power3, Ce.Power4, Ce.Linear, Ce.Quad, Ce.Cubic, Ce.Quart, Ce.Quint, Ce.Strong, Ce.Elastic, Ce.Back, Ce.SteppedEase, Ce.Bounce, Ce.Sine, Ce.Expo, Ce.Circ;
  /*!
   * CSSPlugin 3.9.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var pi,
      mi,
      gi,
      vi,
      _i,
      yi,
      wi,
      xi = {},
      Ti = 180 / Math.PI,
      bi = Math.PI / 180,
      ki = Math.atan2,
      $i = /([A-Z])/g,
      Ci = /(?:left|right|width|margin|padding|x)/i,
      Si = /[\s,\(]\S/,
      Ei = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      Oi = function Oi(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
      Ai = function Ai(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
      Mi = function Mi(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  },
      Pi = function Pi(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e);
  },
      Fi = function Fi(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
      Li = function Li(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
      Ni = function Ni(t, e, i) {
    return t.style[e] = i;
  },
      Bi = function Bi(t, e, i) {
    return t.style.setProperty(e, i);
  },
      Di = function Di(t, e, i) {
    return t._gsap[e] = i;
  },
      Ri = function Ri(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i;
  },
      zi = function zi(t, e, i, n, r) {
    var s = t._gsap;
    s.scaleX = s.scaleY = i, s.renderTransform(r, s);
  },
      Yi = function Yi(t, e, i, n, r) {
    var s = t._gsap;
    s[e] = i, s.renderTransform(r, s);
  },
      Ii = "transform",
      Hi = Ii + "Origin",
      ji = function ji(t, e) {
    var i = mi.createElementNS ? mi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : mi.createElement(t);
    return i.style ? i : mi.createElement(t);
  },
      Wi = function t(e, i, n) {
    var r = getComputedStyle(e);
    return r[i] || r.getPropertyValue(i.replace($i, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, Ki(i) || i, 1) || "";
  },
      qi = "O,Moz,ms,Ms,Webkit".split(","),
      Ki = function Ki(t, e, i) {
    var n = (e || _i).style,
        r = 5;
    if (t in n && !i) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(qi[r] + t in n);) {
      ;
    }

    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? qi[r] : "") + t;
  },
      Ui = function Ui() {
    "undefined" != typeof window && window.document && (pi = window, mi = pi.document, gi = mi.documentElement, _i = ji("div") || {
      style: {}
    }, ji("div"), Ii = Ki(Ii), Hi = Ii + "Origin", _i.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", wi = !!Ki("perspective"), vi = 1);
  },
      Vi = function t(e) {
    var i,
        n = ji("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        r = this.parentNode,
        s = this.nextSibling,
        o = this.style.cssText;
    if (gi.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
      i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
    return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), gi.removeChild(n), this.style.cssText = o, i;
  },
      Xi = function Xi(t, e) {
    for (var i = e.length; i--;) {
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    }
  },
      Gi = function Gi(t) {
    var e;

    try {
      e = t.getBBox();
    } catch (i) {
      e = Vi.call(t, !0);
    }

    return e && (e.width || e.height) || t.getBBox === Vi || (e = Vi.call(t, !0)), !e || e.width || e.x || e.y ? e : {
      x: +Xi(t, ["x", "cx", "x1"]) || 0,
      y: +Xi(t, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  },
      Qi = function Qi(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Gi(t));
  },
      Zi = function Zi(t, e) {
    if (e) {
      var i = t.style;
      e in xi && e !== Hi && (e = Ii), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace($i, "-$1").toLowerCase())) : i.removeAttribute(e);
    }
  },
      Ji = function Ji(t, e, i, n, r, s) {
    var o = new hi(t._pt, e, i, 0, 1, s ? Li : Fi);
    return t._pt = o, o.b = n, o.e = r, t._props.push(i), o;
  },
      tn = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      en = function t(e, i, n, r) {
    var s,
        o,
        a,
        l,
        h = parseFloat(n) || 0,
        c = (n + "").trim().substr((h + "").length) || "px",
        u = _i.style,
        f = Ci.test(i),
        d = "svg" === e.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        m = "px" === r,
        g = "%" === r;
    return r === c || !h || tn[r] || tn[c] ? h : ("px" !== c && !m && (h = t(e, i, n, "px")), l = e.getCTM && Qi(e), !g && "%" !== c || !xi[i] && !~i.indexOf("adius") ? (u[f ? "width" : "height"] = 100 + (m ? c : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !d ? e : e.parentNode, l && (o = (e.ownerSVGElement || {}).parentNode), o && o !== mi && o.appendChild || (o = mi.body), (a = o._gsap) && g && a.width && f && a.time === ke.time ? wt(h / a.width * 100) : ((g || "%" === c) && (u.position = Wi(e, "position")), o === e && (u.position = "static"), o.appendChild(_i), s = _i[p], o.removeChild(_i), u.position = "absolute", f && g && ((a = vt(o)).time = ke.time, a.width = o[p]), wt(m ? s * h / 100 : s && h ? 100 / s * h : 0))) : (s = l ? e.getBBox()[f ? "width" : "height"] : e[p], wt(g ? h / s * 100 : h / 100 * s)));
  },
      nn = function nn(t, e, i, n) {
    var r;
    return vi || Ui(), e in Ei && "transform" !== e && ~(e = Ei[e]).indexOf(",") && (e = e.split(",")[0]), xi[e] && "transform" !== e ? (r = pn(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : mn(Wi(t, Hi)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = an[e] && an[e](t, e, i) || Wi(t, e) || _t(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? en(t, e, r, i) + i : r;
  },
      rn = function rn(t, e, i, n) {
    if (!i || "none" === i) {
      var r = Ki(e, t, 1),
          s = r && Wi(t, r, 1);
      s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = Wi(t, "borderTopColor"));
    }

    var o,
        a,
        l,
        h,
        c,
        u,
        f,
        d,
        p,
        m,
        g,
        v,
        _ = new hi(this._pt, t.style, e, 0, 1, ni),
        y = 0,
        w = 0;

    if (_.b = i, _.e = n, i += "", "auto" === (n += "") && (t.style[e] = n, n = Wi(t, e) || n, t.style[e] = i), be(o = [i, n]), n = o[1], l = (i = o[0]).match(G) || [], (n.match(G) || []).length) {
      for (; a = G.exec(n);) {
        f = a[0], p = n.substring(y, a.index), c ? c = (c + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (c = 1), f !== (u = l[w++] || "") && (h = parseFloat(u) || 0, g = u.substr((h + "").length), (v = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)), d = parseFloat(f), m = f.substr((d + "").length), y = G.lastIndex - m.length, m || (m = m || O.units[e] || g, y === n.length && (n += m, _.e += m)), g !== m && (h = en(t, e, u, m) || 0), _._pt = {
          _next: _._pt,
          p: p || 1 === w ? p : ",",
          s: h,
          c: v ? v * d : d - h,
          m: c && c < 4 || "zIndex" === e ? Math.round : 0
        });
      }

      _.c = y < n.length ? n.substring(y, n.length) : "";
    } else _.r = "display" === e && "none" === n ? Li : Fi;

    return Z.test(n) && (_.e = 0), this._pt = _, _;
  },
      sn = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      on = function on(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i,
          n,
          r,
          s = e.t,
          o = s.style,
          a = e.u,
          l = s._gsap;
      if ("all" === a || !0 === a) o.cssText = "", n = 1;else for (r = (a = a.split(",")).length; --r > -1;) {
        i = a[r], xi[i] && (n = 1, i = "transformOrigin" === i ? Hi : Ii), Zi(s, i);
      }
      n && (Zi(s, Ii), l && (l.svg && s.removeAttribute("transform"), pn(s, 1), l.uncache = 1));
    }
  },
      an = {
    clearProps: function clearProps(t, e, i, n, r) {
      if ("isFromStart" !== r.data) {
        var s = t._pt = new hi(t._pt, e, i, 0, 0, on);
        return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1;
      }
    }
  },
      ln = [1, 0, 0, 1, 0, 0],
      hn = {},
      cn = function cn(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
      un = function un(t) {
    var e = Wi(t, Ii);
    return cn(e) ? ln : e.substr(7).match(X).map(wt);
  },
      fn = function fn(t, e) {
    var i,
        n,
        r,
        s,
        o = t._gsap || vt(t),
        a = t.style,
        l = un(t);
    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? ln : l : (l !== ln || t.offsetParent || t === gi || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, gi.appendChild(t)), l = un(t), r ? a.display = r : Zi(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : gi.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  },
      dn = function dn(t, e, i, n, r, s) {
    var o,
        a,
        l,
        h = t._gsap,
        c = r || fn(t, !0),
        u = h.xOrigin || 0,
        f = h.yOrigin || 0,
        d = h.xOffset || 0,
        p = h.yOffset || 0,
        m = c[0],
        g = c[1],
        v = c[2],
        _ = c[3],
        y = c[4],
        w = c[5],
        x = e.split(" "),
        T = parseFloat(x[0]) || 0,
        b = parseFloat(x[1]) || 0;
    i ? c !== ln && (a = m * _ - g * v) && (l = T * (-g / a) + b * (m / a) - (m * w - g * y) / a, T = T * (_ / a) + b * (-v / a) + (v * w - _ * y) / a, b = l) : (T = (o = Gi(t)).x + (~x[0].indexOf("%") ? T / 100 * o.width : T), b = o.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * o.height : b)), n || !1 !== n && h.smooth ? (y = T - u, w = b - f, h.xOffset = d + (y * m + w * v) - y, h.yOffset = p + (y * g + w * _) - w) : h.xOffset = h.yOffset = 0, h.xOrigin = T, h.yOrigin = b, h.smooth = !!n, h.origin = e, h.originIsAbsolute = !!i, t.style[Hi] = "0px 0px", s && (Ji(s, h, "xOrigin", u, T), Ji(s, h, "yOrigin", f, b), Ji(s, h, "xOffset", d, h.xOffset), Ji(s, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", T + " " + b);
  },
      pn = function pn(t, e) {
    var i = t._gsap || new De(t);
    if ("x" in i && !e && !i.uncache) return i;

    var n,
        r,
        s,
        o,
        a,
        l,
        h,
        c,
        u,
        f,
        d,
        p,
        m,
        g,
        v,
        _,
        y,
        w,
        x,
        T,
        b,
        k,
        $,
        C,
        S,
        E,
        A,
        M,
        P,
        F,
        L,
        N,
        B = t.style,
        D = i.scaleX < 0,
        R = Wi(t, Hi) || "0";

    return n = r = s = l = h = c = u = f = d = 0, o = a = 1, i.svg = !(!t.getCTM || !Qi(t)), g = fn(t, i.svg), i.svg && (C = (!i.uncache || "0px 0px" === R) && !e && t.getAttribute("data-svg-origin"), dn(t, C || R, !!C || i.originIsAbsolute, !1 !== i.smooth, g)), p = i.xOrigin || 0, m = i.yOrigin || 0, g !== ln && (w = g[0], x = g[1], T = g[2], b = g[3], n = k = g[4], r = $ = g[5], 6 === g.length ? (o = Math.sqrt(w * w + x * x), a = Math.sqrt(b * b + T * T), l = w || x ? ki(x, w) * Ti : 0, (u = T || b ? ki(T, b) * Ti + l : 0) && (a *= Math.abs(Math.cos(u * bi))), i.svg && (n -= p - (p * w + m * T), r -= m - (p * x + m * b))) : (N = g[6], F = g[7], A = g[8], M = g[9], P = g[10], L = g[11], n = g[12], r = g[13], s = g[14], h = (v = ki(N, P)) * Ti, v && (C = k * (_ = Math.cos(-v)) + A * (y = Math.sin(-v)), S = $ * _ + M * y, E = N * _ + P * y, A = k * -y + A * _, M = $ * -y + M * _, P = N * -y + P * _, L = F * -y + L * _, k = C, $ = S, N = E), c = (v = ki(-T, P)) * Ti, v && (_ = Math.cos(-v), L = b * (y = Math.sin(-v)) + L * _, w = C = w * _ - A * y, x = S = x * _ - M * y, T = E = T * _ - P * y), l = (v = ki(x, w)) * Ti, v && (C = w * (_ = Math.cos(v)) + x * (y = Math.sin(v)), S = k * _ + $ * y, x = x * _ - w * y, $ = $ * _ - k * y, w = C, k = S), h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0, c = 180 - c), o = wt(Math.sqrt(w * w + x * x + T * T)), a = wt(Math.sqrt($ * $ + N * N)), v = ki(k, $), u = Math.abs(v) > 2e-4 ? v * Ti : 0, d = L ? 1 / (L < 0 ? -L : L) : 0), i.svg && (C = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !cn(Wi(t, Ii)), C && t.setAttribute("transform", C))), Math.abs(u) > 90 && Math.abs(u) < 270 && (D ? (o *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), i.x = n - ((i.xPercent = n && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = r - ((i.yPercent = r && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = s + "px", i.scaleX = wt(o), i.scaleY = wt(a), i.rotation = wt(l) + "deg", i.rotationX = wt(h) + "deg", i.rotationY = wt(c) + "deg", i.skewX = u + "deg", i.skewY = f + "deg", i.transformPerspective = d + "px", (i.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (B[Hi] = mn(R)), i.xOffset = i.yOffset = 0, i.force3D = O.force3D, i.renderTransform = i.svg ? yn : wi ? _n : vn, i.uncache = 0, i;
  },
      mn = function mn(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      gn = function gn(t, e, i) {
    var n = Jt(e);
    return wt(parseFloat(e) + parseFloat(en(t, "x", i + "px", n))) + n;
  },
      vn = function vn(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, _n(t, e);
  },
      _n = function _n(t, e) {
    var i = e || this,
        n = i.xPercent,
        r = i.yPercent,
        s = i.x,
        o = i.y,
        a = i.z,
        l = i.rotation,
        h = i.rotationY,
        c = i.rotationX,
        u = i.skewX,
        f = i.skewY,
        d = i.scaleX,
        p = i.scaleY,
        m = i.transformPerspective,
        g = i.force3D,
        v = i.target,
        _ = i.zOrigin,
        y = "",
        w = "auto" === g && t && 1 !== t || !0 === g;

    if (_ && ("0deg" !== c || "0deg" !== h)) {
      var x,
          T = parseFloat(h) * bi,
          b = Math.sin(T),
          k = Math.cos(T);
      T = parseFloat(c) * bi, x = Math.cos(T), s = gn(v, s, b * x * -_), o = gn(v, o, -Math.sin(T) * -_), a = gn(v, a, k * x * -_ + _);
    }

    "0px" !== m && (y += "perspective(" + m + ") "), (n || r) && (y += "translate(" + n + "%, " + r + "%) "), (w || "0px" !== s || "0px" !== o || "0px" !== a) && (y += "0px" !== a || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), "0deg" !== l && (y += "rotate(" + l + ") "), "0deg" !== h && (y += "rotateY(" + h + ") "), "0deg" !== c && (y += "rotateX(" + c + ") "), "0deg" === u && "0deg" === f || (y += "skew(" + u + ", " + f + ") "), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + ") "), v.style[Ii] = y || "translate(0, 0)";
  },
      yn = function yn(t, e) {
    var i,
        n,
        r,
        s,
        o,
        a = e || this,
        l = a.xPercent,
        h = a.yPercent,
        c = a.x,
        u = a.y,
        f = a.rotation,
        d = a.skewX,
        p = a.skewY,
        m = a.scaleX,
        g = a.scaleY,
        v = a.target,
        _ = a.xOrigin,
        y = a.yOrigin,
        w = a.xOffset,
        x = a.yOffset,
        T = a.forceCSS,
        b = parseFloat(c),
        k = parseFloat(u);
    f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= bi, d *= bi, i = Math.cos(f) * m, n = Math.sin(f) * m, r = Math.sin(f - d) * -g, s = Math.cos(f - d) * g, d && (p *= bi, o = Math.tan(d - p), r *= o = Math.sqrt(1 + o * o), s *= o, p && (o = Math.tan(p), i *= o = Math.sqrt(1 + o * o), n *= o)), i = wt(i), n = wt(n), r = wt(r), s = wt(s)) : (i = m, s = g, n = r = 0), (b && !~(c + "").indexOf("px") || k && !~(u + "").indexOf("px")) && (b = en(v, "x", c, "px"), k = en(v, "y", u, "px")), (_ || y || w || x) && (b = wt(b + _ - (_ * i + y * r) + w), k = wt(k + y - (_ * n + y * s) + x)), (l || h) && (o = v.getBBox(), b = wt(b + l / 100 * o.width), k = wt(k + h / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + b + "," + k + ")", v.setAttribute("transform", o), T && (v.style[Ii] = o);
  },
      wn = function wn(t, e, i, n, r, s) {
    var o,
        a,
        l = R(r),
        h = parseFloat(r) * (l && ~r.indexOf("rad") ? Ti : 1),
        c = s ? h * s : h - n,
        u = n + c + "deg";
    return l && ("short" === (o = r.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === o && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === o && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = a = new hi(t._pt, e, i, n, c, Ai), a.e = u, a.u = "deg", t._props.push(i), a;
  },
      xn = function xn(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  },
      Tn = function Tn(t, e, i) {
    var n,
        r,
        s,
        o,
        a,
        l,
        h,
        c = xn({}, i._gsap),
        u = i.style;

    for (r in c.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), u[Ii] = e, n = pn(i, 1), Zi(i, Ii), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[Ii], u[Ii] = e, n = pn(i, 1), u[Ii] = s), xi) {
      (s = c[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = Jt(s) !== (h = Jt(o)) ? en(i, r, s, h) : parseFloat(s), l = parseFloat(o), t._pt = new hi(t._pt, n, r, a, l - a, Oi), t._pt.u = h || 0, t._props.push(r));
    }

    xn(n, c);
  };

  yt("padding,margin,Width,Radius", function (t, e) {
    var i = "Top",
        n = "Right",
        r = "Bottom",
        s = "Left",
        o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(function (i) {
      return e < 2 ? t + i : "border" + i + t;
    });

    an[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
      var s, a;
      if (arguments.length < 4) return s = o.map(function (e) {
        return nn(t, e, i);
      }), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
      s = (n + "").split(" "), a = {}, o.forEach(function (t, e) {
        return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0];
      }), t.init(e, a, r);
    };
  });
  var bn,
      kn,
      $n = {
    name: "css",
    register: Ui,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, i, n, r) {
      var s,
          o,
          a,
          l,
          h,
          c,
          u,
          f,
          d,
          p,
          m,
          g,
          v,
          _,
          y,
          w,
          x,
          T,
          b,
          k = this._props,
          $ = t.style,
          C = i.vars.startAt;

      for (u in vi || Ui(), e) {
        if ("autoRound" !== u && (o = e[u], !ut[u] || !je(u, e, i, n, t, r))) if (h = _typeof(o), c = an[u], "function" === h && (h = _typeof(o = o.call(i, n, t, r))), "string" === h && ~o.indexOf("random(") && (o = ce(o)), c) c(this, t, u, o, i) && (y = 1);else if ("--" === u.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(u) + "").trim(), o += "", xe.lastIndex = 0, xe.test(s) || (f = Jt(s), d = Jt(o)), d ? f !== d && (s = en(t, u, s, d) + d) : f && (o += f), this.add($, "setProperty", s, o, n, r, 0, 0, u), k.push(u);else if ("undefined" !== h) {
          if (C && u in C ? (s = "function" == typeof C[u] ? C[u].call(i, n, t, r) : C[u], R(s) && ~s.indexOf("random(") && (s = ce(s)), Jt(s + "") || (s += O.units[u] || Jt(nn(t, u)) || ""), "=" === (s + "").charAt(1) && (s = nn(t, u))) : s = nn(t, u), l = parseFloat(s), (p = "string" === h && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), u in Ei && ("autoAlpha" === u && (1 === l && "hidden" === nn(t, "visibility") && a && (l = 0), Ji(this, $, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = Ei[u]).indexOf(",") && (u = u.split(",")[0])), m = u in xi) {
            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || pn(t, e.parseTransform), _ = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new hi(this._pt, $, Ii, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === u) this._pt = new hi(this._pt, v, "scaleY", v.scaleY, (p ? p * a : a - v.scaleY) || 0), k.push("scaleY", u), u += "X";else {
              if ("transformOrigin" === u) {
                x = void 0, T = void 0, b = void 0, x = (w = o).split(" "), T = x[0], b = x[1] || "50%", "top" !== T && "bottom" !== T && "left" !== b && "right" !== b || (w = T, T = b, b = w), x[0] = sn[T] || T, x[1] = sn[b] || b, o = x.join(" "), v.svg ? dn(t, o, 0, _, 0, this) : ((d = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Ji(this, v, "zOrigin", v.zOrigin, d), Ji(this, $, u, mn(s), mn(o)));
                continue;
              }

              if ("svgOrigin" === u) {
                dn(t, o, 1, _, 0, this);
                continue;
              }

              if (u in hn) {
                wn(this, v, u, l, o, p);
                continue;
              }

              if ("smoothOrigin" === u) {
                Ji(this, v, "smooth", v.smooth, o);
                continue;
              }

              if ("force3D" === u) {
                v[u] = o;
                continue;
              }

              if ("transform" === u) {
                Tn(this, o, t);
                continue;
              }
            }
          } else u in $ || (u = Ki(u) || u);
          if (m || (a || 0 === a) && (l || 0 === l) && !Si.test(o) && u in $) a || (a = 0), (f = (s + "").substr((l + "").length)) !== (d = Jt(o) || (u in O.units ? O.units[u] : f)) && (l = en(t, u, s, d)), this._pt = new hi(this._pt, m ? v : $, u, l, p ? p * a : a - l, m || "px" !== d && "zIndex" !== u || !1 === e.autoRound ? Oi : Pi), this._pt.u = d || 0, f !== d && "%" !== d && (this._pt.b = s, this._pt.r = Mi);else if (u in $) rn.call(this, t, u, s, o);else {
            if (!(u in t)) {
              rt(u, o);
              continue;
            }

            this.add(t, u, s || t[u], o, n, r);
          }
          k.push(u);
        }
      }

      y && li(this);
    },
    get: nn,
    aliases: Ei,
    getSetter: function getSetter(t, e, i) {
      var n = Ei[e];
      return n && n.indexOf(",") < 0 && (e = n), e in xi && e !== Hi && (t._gsap.x || nn(t, "x")) ? i && yi === i ? "scale" === e ? Ri : Di : (yi = i || {}) && ("scale" === e ? zi : Yi) : t.style && !I(t.style[e]) ? Ni : ~e.indexOf("-") ? Bi : ti(t, e);
    },
    core: {
      _removeProperty: Zi,
      _getMatrix: fn
    }
  };
  di.utils.checkPrefix = Ki, kn = yt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (bn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    xi[t] = 1;
  }), yt(bn, function (t) {
    O.units[t] = "deg", hn[t] = 1;
  }), Ei[kn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + bn, yt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Ei[e[1]] = kn[e[0]];
  }), yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    O.units[t] = "px";
  }), di.registerPlugin($n);

  var Cn,
      Sn,
      En,
      On,
      An,
      Mn,
      Pn,
      Fn,
      Ln,
      Nn,
      Bn,
      Dn,
      Rn,
      zn,
      Yn,
      In,
      Hn,
      jn,
      Wn,
      qn,
      Kn,
      Un,
      Vn,
      Xn,
      Gn,
      Qn,
      Zn = di.registerPlugin($n) || di,
      Jn = (Zn.core.Tween, 1),
      tr = [],
      er = [],
      ir = Date.now,
      nr = ir(),
      rr = 0,
      sr = 1,
      or = function or(t) {
    return t;
  },
      ar = function ar(t) {
    return Ln(t)[0] || (vr(t) && !1 !== Cn.config().nullTargetWarn ? console.warn("Element not found:", t) : null);
  },
      lr = function lr(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
      hr = function hr() {
    return "undefined" != typeof window;
  },
      cr = function cr() {
    return Cn || hr() && (Cn = window.gsap) && Cn.registerPlugin && Cn;
  },
      ur = function ur(t) {
    return !!~Pn.indexOf(t);
  },
      fr = function fr(t, e) {
    return ~tr.indexOf(t) && tr[tr.indexOf(t) + 1][e];
  },
      dr = function dr(t, e) {
    var i = e.s,
        n = e.sc,
        r = er.indexOf(t),
        s = n === Or.sc ? 1 : 2;
    return !~r && (r = er.push(t) - 1), er[r + s] || (er[r + s] = fr(t, i) || (ur(t) ? n : function (e) {
      return arguments.length ? t[i] = e : t[i];
    }));
  },
      pr = function pr(t) {
    return fr(t, "getBoundingClientRect") || (ur(t) ? function () {
      return gs.width = En.innerWidth, gs.height = En.innerHeight, gs;
    } : function () {
      return Pr(t);
    });
  },
      mr = function mr(t, e) {
    var i = e.s,
        n = e.d2,
        r = e.d,
        s = e.a;
    return (i = "scroll" + n) && (s = fr(t, i)) ? s() - pr(t)()[r] : ur(t) ? (Mn[i] || An[i]) - (En["inner" + n] || An["client" + n] || Mn["client" + n]) : t[i] - t["offset" + n];
  },
      gr = function gr(t, e) {
    for (var i = 0; i < Wn.length; i += 3) {
      (!e || ~e.indexOf(Wn[i + 1])) && t(Wn[i], Wn[i + 1], Wn[i + 2]);
    }
  },
      vr = function vr(t) {
    return "string" == typeof t;
  },
      _r = function _r(t) {
    return "function" == typeof t;
  },
      yr = function yr(t) {
    return "number" == typeof t;
  },
      wr = function wr(t) {
    return "object" == _typeof(t);
  },
      xr = function xr(t) {
    return _r(t) && t();
  },
      Tr = function Tr(t, e) {
    return function () {
      var i = xr(t),
          n = xr(e);
      return function () {
        xr(i), xr(n);
      };
    };
  },
      br = function br(t, e, i) {
    return t && t.progress(e ? 0 : 1) && i && t.pause();
  },
      kr = function kr(t, e) {
    if (t.enabled) {
      var i = e(t);
      i && i.totalTime && (t.callbackAnimation = i);
    }
  },
      $r = Math.abs,
      Cr = "padding",
      Sr = "px",
      Er = {
    s: "scrollLeft",
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: function sc(t) {
      return arguments.length ? En.scrollTo(t, Or.sc()) : En.pageXOffset || On.scrollLeft || An.scrollLeft || Mn.scrollLeft || 0;
    }
  },
      Or = {
    s: "scrollTop",
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Er,
    sc: function sc(t) {
      return arguments.length ? En.scrollTo(Er.sc(), t) : En.pageYOffset || On.scrollTop || An.scrollTop || Mn.scrollTop || 0;
    }
  },
      Ar = function Ar(t) {
    return En.getComputedStyle(t);
  },
      Mr = function Mr(t, e) {
    for (var i in e) {
      i in t || (t[i] = e[i]);
    }

    return t;
  },
      Pr = function Pr(t, e) {
    var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== Ar(t)[Yn] && Cn.to(t, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        n = t.getBoundingClientRect();
    return i && i.progress(0).kill(), n;
  },
      Fr = function Fr(t, e) {
    var i = e.d2;
    return t["offset" + i] || t["client" + i] || 0;
  },
      Lr = function Lr(t) {
    var e,
        i = [],
        n = t.labels,
        r = t.duration();

    for (e in n) {
      i.push(n[e] / r);
    }

    return i;
  },
      Nr = function Nr(t) {
    var e = Cn.utils.snap(t),
        i = Array.isArray(t) && t.slice(0).sort(function (t, e) {
      return t - e;
    });
    return i ? function (t, n, r) {
      var s;
      if (void 0 === r && (r = .001), !n) return e(t);

      if (n > 0) {
        for (t -= r, s = 0; s < i.length; s++) {
          if (i[s] >= t) return i[s];
        }

        return i[s - 1];
      }

      for (s = i.length, t += r; s--;) {
        if (i[s] <= t) return i[s];
      }

      return i[0];
    } : function (i, n, r) {
      void 0 === r && (r = .001);
      var s = e(i);
      return !n || Math.abs(s - i) < r || s - i < 0 == n < 0 ? s : e(n < 0 ? i - t : i + t);
    };
  },
      Br = function Br(t, e, i, n) {
    return i.split(",").forEach(function (i) {
      return t(e, i, n);
    });
  },
      Dr = function Dr(t, e, i) {
    return t.addEventListener(e, i, {
      passive: !0
    });
  },
      Rr = function Rr(t, e, i) {
    return t.removeEventListener(e, i);
  },
      zr = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      Yr = {
    toggleActions: "play",
    anticipatePin: 0
  },
      Ir = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
      Hr = function Hr(t, e) {
    if (vr(t)) {
      var i = t.indexOf("="),
          n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
      ~i && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in Ir ? Ir[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
    }

    return t;
  },
      jr = function jr(t, e, i, n, r, s, o, a) {
    var l = r.startColor,
        h = r.endColor,
        c = r.fontSize,
        u = r.indent,
        f = r.fontWeight,
        d = On.createElement("div"),
        p = ur(i) || "fixed" === fr(i, "pinType"),
        m = -1 !== t.indexOf("scroller"),
        g = p ? Mn : i,
        v = -1 !== t.indexOf("start"),
        _ = v ? l : h,
        y = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

    return y += "position:" + ((m || a) && p ? "fixed;" : "absolute;"), (m || a || !p) && (y += (n === Or ? "right" : "bottom") + ":" + (s + parseFloat(u)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = y, d.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(d, g.children[0]) : g.appendChild(d), d._offset = d["offset" + n.op.d2], Wr(d, 0, n, v), d;
  },
      Wr = function Wr(t, e, i, n) {
    var r = {
      display: "block"
    },
        s = i[n ? "os2" : "p2"],
        o = i[n ? "p2" : "os2"];
    t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? "1px" : 0, r["border" + s + "Width"] = 1, r["border" + o + "Width"] = 0, r[i.p] = e + "px", Cn.set(t, r);
  },
      qr = [],
      Kr = {},
      Ur = function Ur() {
    return ir() - rr > 34 && hs();
  },
      Vr = function Vr() {
    hs(), rr || es("scrollStart"), rr = ir();
  },
      Xr = function Xr() {
    return !Rn && !Un && !On.fullscreenElement && Fn.restart(!0);
  },
      Gr = {},
      Qr = [],
      Zr = [],
      Jr = function Jr(t) {
    var e,
        i = Cn.ticker.frame,
        n = [],
        r = 0;

    if (Gn !== i || Jn) {
      for (rs(); r < Zr.length; r += 4) {
        (e = En.matchMedia(Zr[r]).matches) !== Zr[r + 3] && (Zr[r + 3] = e, e ? n.push(r) : rs(1, Zr[r]) || _r(Zr[r + 2]) && Zr[r + 2]());
      }

      for (ns(), r = 0; r < n.length; r++) {
        e = n[r], Xn = Zr[e], Zr[e + 2] = Zr[e + 1](t);
      }

      Xn = 0, Sn && os(0, 1), Gn = i, es("matchMedia");
    }
  },
      ts = function t() {
    return Rr(xs, "scrollEnd", t) || os(!0);
  },
      es = function es(t) {
    return Gr[t] && Gr[t].map(function (t) {
      return t();
    }) || Qr;
  },
      is = [],
      ns = function ns(t) {
    for (var e = 0; e < is.length; e += 5) {
      t && is[e + 4] !== t || (is[e].style.cssText = is[e + 1], is[e].getBBox && is[e].setAttribute("transform", is[e + 2] || ""), is[e + 3].uncache = 1);
    }
  },
      rs = function rs(t, e) {
    var i;

    for (In = 0; In < qr.length; In++) {
      i = qr[In], e && i.media !== e || (t ? i.kill(1) : i.revert());
    }

    e && ns(e), e || es("revert");
  },
      ss = function ss() {
    return er.forEach(function (t) {
      return "function" == typeof t && (t.rec = 0);
    });
  },
      os = function os(t, e) {
    if (!rr || t) {
      Qn = !0;
      var i = es("refreshInit");
      qn && xs.sort(), e || rs(), qr.forEach(function (t) {
        return t.refresh();
      }), qr.forEach(function (t) {
        return "max" === t.vars.end && t.setPositions(t.start, mr(t.scroller, t._dir));
      }), i.forEach(function (t) {
        return t && t.render && t.render(-1);
      }), ss(), Fn.pause(), Qn = !1, es("refresh");
    } else Dr(xs, "scrollEnd", ts);
  },
      as = 0,
      ls = 1,
      hs = function hs() {
    if (!Qn) {
      var t = qr.length,
          e = ir(),
          i = e - nr >= 50,
          n = t && qr[0].scroll();

      if (ls = as > n ? -1 : 1, as = n, i && (rr && !zn && e - rr > 200 && (rr = 0, es("scrollEnd")), Bn = nr, nr = e), ls < 0) {
        for (In = t; In-- > 0;) {
          qr[In] && qr[In].update(0, i);
        }

        ls = 1;
      } else for (In = 0; In < t; In++) {
        qr[In] && qr[In].update(0, i);
      }
    }
  },
      cs = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
      us = cs.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Cr, Cr + "Top", Cr + "Right", Cr + "Bottom", Cr + "Left"]),
      fs = function fs(t, e, i, n) {
    if (t.parentNode !== e) {
      for (var r, s = cs.length, o = e.style, a = t.style; s--;) {
        o[r = cs[s]] = i[r];
      }

      o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a.bottom = a.right = o.flexBasis = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = Fr(t, Er) + Sr, o.height = Fr(t, Or) + Sr, o[Cr] = a.margin = a.top = a.left = "0", ps(n), a.width = a.maxWidth = i.width, a.height = a.maxHeight = i.height, a[Cr] = i[Cr], t.parentNode.insertBefore(e, t), e.appendChild(t);
    }
  },
      ds = /([A-Z])/g,
      ps = function ps(t) {
    if (t) {
      var e,
          i,
          n = t.t.style,
          r = t.length,
          s = 0;

      for ((t.t._gsap || Cn.core.getCache(t.t)).uncache = 1; s < r; s += 2) {
        i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(ds, "-$1").toLowerCase());
      }
    }
  },
      ms = function ms(t) {
    for (var e = us.length, i = t.style, n = [], r = 0; r < e; r++) {
      n.push(us[r], i[us[r]]);
    }

    return n.t = t, n;
  },
      gs = {
    left: 0,
    top: 0
  },
      vs = function vs(t, e, i, n, r, s, o, a, l, h, c, u, f) {
    _r(t) && (t = t(a)), vr(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? Hr("0" + t.substr(3), i) : 0));
    var d,
        p,
        m,
        g = f ? f.time() : 0;
    if (f && f.seek(0), yr(t)) o && Wr(o, i, n, !0);else {
      _r(e) && (e = e(a));

      var v,
          _,
          y,
          w,
          x = t.split(" ");

      m = ar(e) || Mn, (v = Pr(m) || {}) && (v.left || v.top) || "none" !== Ar(m).display || (w = m.style.display, m.style.display = "block", v = Pr(m), w ? m.style.display = w : m.style.removeProperty("display")), _ = Hr(x[0], v[n.d]), y = Hr(x[1] || "0", i), t = v[n.p] - l[n.p] - h + _ + r - y, o && Wr(o, y, n, i - y < 20 || o._isStart && y > 20), i -= i - y;
    }

    if (s) {
      var T = t + i,
          b = s._isStart;
      d = "scroll" + n.d2, Wr(s, T, n, b && T > 20 || !b && (c ? Math.max(Mn[d], An[d]) : s.parentNode[d]) <= T + 1), c && (l = Pr(o), c && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Sr));
    }

    return f && m && (d = Pr(m), f.seek(u), p = Pr(m), f._caScrollDist = d[n.p] - p[n.p], t = t / f._caScrollDist * u), f && f.seek(g), f ? t : Math.round(t);
  },
      _s = /(?:webkit|moz|length|cssText|inset)/i,
      ys = function ys(t, e, i, n) {
    if (t.parentNode !== e) {
      var r,
          s,
          o = t.style;

      if (e === Mn) {
        for (r in t._stOrig = o.cssText, s = Ar(t)) {
          +r || _s.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
        }

        o.top = i, o.left = n;
      } else o.cssText = t._stOrig;

      Cn.core.getCache(t).uncache = 1, e.appendChild(t);
    }
  },
      ws = function ws(t, e) {
    var i,
        n,
        r = dr(t, e),
        s = "_scroll" + e.p2,
        o = function e(o, a, l, h, c) {
      var u = e.tween,
          f = a.onComplete,
          d = {};
      return u && u.kill(), i = Math.round(l), a[s] = o, a.modifiers = d, d[s] = function (t) {
        return (t = lr(r())) !== i && t !== n && Math.abs(t - i) > 2 && Math.abs(t - n) > 2 ? (u.kill(), e.tween = 0) : t = l + h * u.ratio + c * u.ratio * u.ratio, n = i, i = lr(t);
      }, a.onComplete = function () {
        e.tween = 0, f && f.call(u);
      }, u = e.tween = Cn.to(t, a);
    };

    return t[s] = r, Dr(t, "wheel", function () {
      return o.tween && o.tween.kill() && (o.tween = 0);
    }), o;
  };
  /*!
   * ScrollTrigger 3.9.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */


  Er.op = Or;

  var xs = function () {
    function t(e, i) {
      Sn || t.register(Cn) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, i);
    }

    return t.prototype.init = function (e, i) {
      if (this.progress = this.start = 0, this.vars && this.kill(1), sr) {
        var n,
            r,
            s,
            o,
            a,
            l,
            h,
            c,
            u,
            f,
            d,
            p,
            m,
            g,
            v,
            _,
            y,
            w,
            x,
            T,
            b,
            k,
            $,
            C,
            S,
            E,
            O,
            A,
            M,
            P,
            F,
            L,
            N,
            B,
            D,
            R,
            z,
            Y,
            I,
            H,
            j = e = Mr(vr(e) || yr(e) || e.nodeType ? {
          trigger: e
        } : e, Yr),
            W = j.onUpdate,
            q = j.toggleClass,
            K = j.id,
            U = j.onToggle,
            V = j.onRefresh,
            X = j.scrub,
            G = j.trigger,
            Q = j.pin,
            Z = j.pinSpacing,
            J = j.invalidateOnRefresh,
            tt = j.anticipatePin,
            et = j.onScrubComplete,
            it = j.onSnapComplete,
            nt = j.once,
            rt = j.snap,
            st = j.pinReparent,
            ot = j.pinSpacer,
            at = j.containerAnimation,
            lt = j.fastScrollEnd,
            ht = j.preventOverlaps,
            ct = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Er : Or,
            ut = !X && 0 !== X,
            ft = ar(e.scroller || En),
            dt = Cn.core.getCache(ft),
            pt = ur(ft),
            mt = "fixed" === ("pinType" in e ? e.pinType : fr(ft, "pinType") || pt && "fixed"),
            gt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            vt = ut && e.toggleActions.split(" "),
            _t = "markers" in e ? e.markers : Yr.markers,
            yt = pt ? 0 : parseFloat(Ar(ft)["border" + ct.p2 + "Width"]) || 0,
            wt = this,
            xt = e.onRefreshInit && function () {
          return e.onRefreshInit(wt);
        },
            Tt = function (t, e, i) {
          var n = i.d,
              r = i.d2,
              s = i.a;
          return (s = fr(t, "getBoundingClientRect")) ? function () {
            return s()[n];
          } : function () {
            return (e ? En["inner" + r] : t["client" + r]) || 0;
          };
        }(ft, pt, ct),
            bt = function (t, e) {
          return !e || ~tr.indexOf(t) ? pr(t) : function () {
            return gs;
          };
        }(ft, pt),
            kt = 0,
            $t = dr(ft, ct);

        if (wt.media = Xn, wt._dir = ct, tt *= 45, wt.scroller = ft, wt.scroll = at ? at.time.bind(at) : $t, o = $t(), wt.vars = e, i = i || e.animation, "refreshPriority" in e && (qn = 1), dt.tweenScroll = dt.tweenScroll || {
          top: ws(ft, Or),
          left: ws(ft, Er)
        }, wt.tweenTo = n = dt.tweenScroll[ct.p], i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), wt.animation = i.pause(), i.scrollTrigger = wt, (F = yr(X) && X) && (P = Cn.to(i, {
          ease: "power3",
          duration: F,
          onComplete: function onComplete() {
            return et && et(wt);
          }
        })), A = 0, K || (K = i.vars.id)), qr.push(wt), rt && (wr(rt) && !rt.push || (rt = {
          snapTo: rt
        }), "scrollBehavior" in Mn.style && Cn.set(pt ? [Mn, An] : ft, {
          scrollBehavior: "auto"
        }), s = _r(rt.snapTo) ? rt.snapTo : "labels" === rt.snapTo ? function (t) {
          return function (e) {
            return Cn.utils.snap(Lr(t), e);
          };
        }(i) : "labelsDirectional" === rt.snapTo ? (Y = i, function (t, e) {
          return Nr(Lr(Y))(t, e.direction);
        }) : !1 !== rt.directional ? function (t, e) {
          return Nr(rt.snapTo)(t, e.direction);
        } : Cn.utils.snap(rt.snapTo), L = rt.duration || {
          min: .1,
          max: 2
        }, L = wr(L) ? Nn(L.min, L.max) : Nn(L, L), N = Cn.delayedCall(rt.delay || F / 2 || .1, function () {
          if (Math.abs(wt.getVelocity()) < 10 && !zn && kt !== $t()) {
            var t = i && !ut ? i.totalProgress() : wt.progress,
                e = (t - M) / (ir() - Bn) * 1e3 || 0,
                r = Cn.utils.clamp(-wt.progress, 1 - wt.progress, $r(e / 2) * e / .185),
                o = wt.progress + (!1 === rt.inertia ? 0 : r),
                a = Nn(0, 1, s(o, wt)),
                c = $t(),
                u = Math.round(l + a * m),
                f = rt,
                d = f.onStart,
                p = f.onInterrupt,
                g = f.onComplete,
                v = n.tween;

            if (c <= h && c >= l && u !== c) {
              if (v && !v._initted && v.data <= $r(u - c)) return;
              !1 === rt.inertia && (r = a - wt.progress), n(u, {
                duration: L($r(.185 * Math.max($r(o - t), $r(a - t)) / e / .05 || 0)),
                ease: rt.ease || "power3",
                data: $r(u - c),
                onInterrupt: function onInterrupt() {
                  return N.restart(!0) && p && p(wt);
                },
                onComplete: function onComplete() {
                  wt.update(), kt = $t(), A = M = i && !ut ? i.totalProgress() : wt.progress, it && it(wt), g && g(wt);
                }
              }, c, r * m, u - c - r * m), d && d(wt, n.tween);
            }
          } else wt.isActive && N.restart(!0);
        }).pause()), K && (Kr[K] = wt), G = wt.trigger = ar(G || Q), Q = !0 === Q ? G : ar(Q), vr(q) && (q = {
          targets: G,
          className: q
        }), Q && (!1 === Z || "margin" === Z || (Z = !(!Z && "flex" === Ar(Q.parentNode).display) && Cr), wt.pin = Q, !1 !== e.force3D && Cn.set(Q, {
          force3D: !0
        }), (r = Cn.core.getCache(Q)).spacer ? g = r.pinState : (ot && ((ot = ar(ot)) && !ot.nodeType && (ot = ot.current || ot.nativeElement), r.spacerIsNative = !!ot, ot && (r.spacerState = ms(ot))), r.spacer = y = ot || On.createElement("div"), y.classList.add("pin-spacer"), K && y.classList.add("pin-spacer-" + K), r.pinState = g = ms(Q)), wt.spacer = y = r.spacer, O = Ar(Q), $ = O[Z + ct.os2], x = Cn.getProperty(Q), T = Cn.quickSetter(Q, ct.a, Sr), fs(Q, y, O), _ = ms(Q)), _t && (p = wr(_t) ? Mr(_t, zr) : zr, f = jr("scroller-start", K, ft, ct, p, 0), d = jr("scroller-end", K, ft, ct, p, 0, f), w = f["offset" + ct.op.d2], c = jr("start", K, ft, ct, p, w, 0, at), u = jr("end", K, ft, ct, p, w, 0, at), at && (z = Cn.quickSetter([c, u], ct.a, Sr)), mt || tr.length && !0 === fr(ft, "fixedMarkers") || (H = Ar(I = pt ? Mn : ft).position, I.style.position = "absolute" === H || "fixed" === H ? H : "relative", Cn.set([f, d], {
          force3D: !0
        }), S = Cn.quickSetter(f, ct.a, Sr), E = Cn.quickSetter(d, ct.a, Sr))), at) {
          var Ct = at.vars.onUpdate,
              St = at.vars.onUpdateParams;
          at.eventCallback("onUpdate", function () {
            wt.update(0, 0, 1), Ct && Ct.apply(St || []);
          });
        }

        wt.previous = function () {
          return qr[qr.indexOf(wt) - 1];
        }, wt.next = function () {
          return qr[qr.indexOf(wt) + 1];
        }, wt.revert = function (t) {
          var e = !1 !== t || !wt.enabled,
              n = Rn;
          e !== wt.isReverted && (e && (wt.scroll.rec || (wt.scroll.rec = $t()), D = Math.max($t(), wt.scroll.rec || 0), B = wt.progress, R = i && i.progress()), c && [c, u, f, d].forEach(function (t) {
            return t.style.display = e ? "none" : "block";
          }), e && (Rn = 1), wt.update(e), Rn = n, Q && (e ? function (t, e, i) {
            ps(i);
            var n = t._gsap;
            if (n.spacerIsNative) ps(n.spacerState);else if (t.parentNode === e) {
              var r = e.parentNode;
              r && (r.insertBefore(t, e), r.removeChild(e));
            }
          }(Q, y, g) : (!st || !wt.isActive) && fs(Q, y, Ar(Q), C)), wt.isReverted = e);
        }, wt.refresh = function (n, r) {
          if (!Rn && wt.enabled || r) if (Q && n && rr) Dr(t, "scrollEnd", ts);else {
            Rn = 1, P && P.pause(), J && i && i.time(-.01, !0).invalidate(), wt.isReverted || wt.revert();

            for (var s, p, w, T, $, S, E, O, A, M, F = Tt(), L = bt(), N = at ? at.duration() : mr(ft, ct), z = 0, Y = 0, I = e.end, H = e.endTrigger || G, j = e.start || (0 !== e.start && G ? Q ? "0 0" : "0 100%" : 0), W = e.pinnedContainer && ar(e.pinnedContainer), q = G && Math.max(0, qr.indexOf(wt)) || 0, K = q; K--;) {
              (S = qr[K]).end || S.refresh(0, 1) || (Rn = 1), !(E = S.pin) || E !== G && E !== Q || S.isReverted || (M || (M = []), M.unshift(S), S.revert());
            }

            for (_r(j) && (j = j(wt)), l = vs(j, G, F, ct, $t(), c, f, wt, L, yt, mt, N, at) || (Q ? -.001 : 0), _r(I) && (I = I(wt)), vr(I) && !I.indexOf("+=") && (~I.indexOf(" ") ? I = (vr(j) ? j.split(" ")[0] : "") + I : (z = Hr(I.substr(2), F), I = vr(j) ? j : l + z, H = G)), h = Math.max(l, vs(I || (H ? "100% 0" : N), H, F, ct, $t() + z, u, d, wt, L, yt, mt, N, at)) || -.001, m = h - l || (l -= .01) && .001, z = 0, K = q; K--;) {
              (E = (S = qr[K]).pin) && S.start - S._pinPush < l && !at && (s = S.end - S.start, E !== G && E !== W || yr(j) || (z += s * (1 - S.progress)), E === Q && (Y += s));
            }

            if (l += z, h += z, wt._pinPush = Y, c && z && ((s = {})[ct.a] = "+=" + z, W && (s[ct.p] = "-=" + $t()), Cn.set([c, u], s)), Q) s = Ar(Q), T = ct === Or, w = $t(), b = parseFloat(x(ct.a)) + Y, !N && h > 1 && ((pt ? Mn : ft).style["overflow-" + ct.a] = "scroll"), fs(Q, y, s), _ = ms(Q), p = Pr(Q, !0), O = mt && dr(ft, T ? Er : Or)(), Z && ((C = [Z + ct.os2, m + Y + Sr]).t = y, (K = Z === Cr ? Fr(Q, ct) + m + Y : 0) && C.push(ct.d, K + Sr), ps(C), mt && $t(D)), mt && (($ = {
              top: p.top + (T ? w - l : O) + Sr,
              left: p.left + (T ? O : w - l) + Sr,
              boxSizing: "border-box",
              position: "fixed"
            }).width = $.maxWidth = Math.ceil(p.width) + Sr, $.height = $.maxHeight = Math.ceil(p.height) + Sr, $.margin = $.marginTop = $.marginRight = $.marginBottom = $.marginLeft = "0", $[Cr] = s[Cr], $[Cr + "Top"] = s[Cr + "Top"], $[Cr + "Right"] = s[Cr + "Right"], $[Cr + "Bottom"] = s[Cr + "Bottom"], $[Cr + "Left"] = s[Cr + "Left"], v = function (t, e, i) {
              for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) {
                n = t[o], r.push(n, n in e ? e[n] : t[o + 1]);
              }

              return r.t = t.t, r;
            }(g, $, st)), i ? (A = i._initted, Kn(1), i.render(i.duration(), !0, !0), k = x(ct.a) - b + m + Y, m !== k && v.splice(v.length - 2, 2), i.render(0, !0, !0), A || i.invalidate(), Kn(0)) : k = m;else if (G && $t() && !at) for (p = G.parentNode; p && p !== Mn;) {
              p._pinOffset && (l -= p._pinOffset, h -= p._pinOffset), p = p.parentNode;
            }
            M && M.forEach(function (t) {
              return t.revert(!1);
            }), wt.start = l, wt.end = h, o = a = $t(), at || (o < D && $t(D), wt.scroll.rec = 0), wt.revert(!1), Rn = 0, i && ut && i._initted && i.progress() !== R && i.progress(R, !0).render(i.time(), !0, !0), (B !== wt.progress || at) && (i && !ut && i.totalProgress(B, !0), wt.progress = B, wt.update(0, 0, 1)), Q && Z && (y._pinOffset = Math.round(wt.progress * k)), V && V(wt);
          }
        }, wt.getVelocity = function () {
          return ($t() - a) / (ir() - Bn) * 1e3 || 0;
        }, wt.endAnimation = function () {
          br(wt.callbackAnimation), i && (P ? P.progress(1) : i.paused() ? ut || br(i, wt.direction < 0, 1) : br(i, i.reversed()));
        }, wt.labelToScroll = function (t) {
          return i && i.labels && (l || wt.refresh() || l) + i.labels[t] / i.duration() * m || 0;
        }, wt.getTrailing = function (t) {
          var e = qr.indexOf(wt),
              i = wt.direction > 0 ? qr.slice(0, e).reverse() : qr.slice(e + 1);
          return vr(t) ? i.filter(function (e) {
            return e.vars.preventOverlaps === t;
          }) : i;
        }, wt.update = function (t, e, r) {
          if (!at || r || t) {
            var s,
                c,
                u,
                d,
                p,
                g,
                w,
                x = wt.scroll(),
                C = t ? 0 : (x - l) / m,
                O = C < 0 ? 0 : C > 1 ? 1 : C || 0,
                F = wt.progress;

            if (e && (a = o, o = at ? $t() : x, rt && (M = A, A = i && !ut ? i.totalProgress() : O)), tt && !O && Q && !Rn && !Jn && rr && l < x + (x - a) / (ir() - Bn) * tt && (O = 1e-4), O !== F && wt.enabled) {
              if (d = (p = (s = wt.isActive = !!O && O < 1) !== (!!F && F < 1)) || !!O != !!F, wt.direction = O > F ? 1 : -1, wt.progress = O, d && !Rn && (c = O && !F ? 0 : 1 === O ? 1 : 1 === F ? 2 : 3, ut && (u = !p && "none" !== vt[c + 1] && vt[c + 1] || vt[c], w = i && ("complete" === u || "reset" === u || u in i))), ht && p && (w || X || !i) && (_r(ht) ? ht(wt) : wt.getTrailing(ht).forEach(function (t) {
                return t.endAnimation();
              })), ut || (!P || Rn || Jn ? i && i.totalProgress(O, !!Rn) : (P.vars.totalProgress = O, P.invalidate().restart())), Q) if (t && Z && (y.style[Z + ct.os2] = $), mt) {
                if (d) {
                  if (g = !t && O > F && h + 1 > x && x + 1 >= mr(ft, ct), st) if (t || !s && !g) ys(Q, y);else {
                    var L = Pr(Q, !0),
                        B = x - l;
                    ys(Q, Mn, L.top + (ct === Or ? B : 0) + Sr, L.left + (ct === Or ? 0 : B) + Sr);
                  }
                  ps(s || g ? v : _), k !== m && O < 1 && s || T(b + (1 !== O || g ? 0 : k));
                }
              } else T(b + k * O);
              rt && !n.tween && !Rn && !Jn && N.restart(!0), q && (p || nt && O && (O < 1 || !Vn)) && Ln(q.targets).forEach(function (t) {
                return t.classList[s || nt ? "add" : "remove"](q.className);
              }), W && !ut && !t && W(wt), d && !Rn ? (ut && (w && ("complete" === u ? i.pause().totalProgress(1) : "reset" === u ? i.restart(!0).pause() : "restart" === u ? i.restart(!0) : i[u]()), W && W(wt)), !p && Vn || (U && p && kr(wt, U), gt[c] && kr(wt, gt[c]), nt && (1 === O ? wt.kill(!1, 1) : gt[c] = 0), p || gt[c = 1 === O ? 1 : 3] && kr(wt, gt[c])), lt && !s && Math.abs(wt.getVelocity()) > (yr(lt) ? lt : 2500) && (br(wt.callbackAnimation), P ? P.progress(1) : br(i, !O, 1))) : ut && W && !Rn && W(wt);
            }

            if (E) {
              var D = at ? x / at.duration() * (at._caScrollDist || 0) : x;
              S(D + (f._isFlipped ? 1 : 0)), E(D);
            }

            z && z(-x / at.duration() * (at._caScrollDist || 0));
          }
        }, wt.enable = function (e, i) {
          wt.enabled || (wt.enabled = !0, Dr(ft, "resize", Xr), Dr(ft, "scroll", Vr), xt && Dr(t, "refreshInit", xt), !1 !== e && (wt.progress = B = 0, o = a = kt = $t()), !1 !== i && wt.refresh());
        }, wt.getTween = function (t) {
          return t && n ? n.tween : P;
        }, wt.setPositions = function (t, e) {
          Q && (b += t - l, k += e - t - m), wt.start = l = t, wt.end = h = e, m = e - t, wt.update();
        }, wt.disable = function (e, i) {
          if (wt.enabled && (!1 !== e && wt.revert(), wt.enabled = wt.isActive = !1, i || P && P.pause(), D = 0, r && (r.uncache = 1), xt && Rr(t, "refreshInit", xt), N && (N.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !pt)) {
            for (var s = qr.length; s--;) {
              if (qr[s].scroller === ft && qr[s] !== wt) return;
            }

            Rr(ft, "resize", Xr), Rr(ft, "scroll", Vr);
          }
        }, wt.kill = function (t, e) {
          wt.disable(t, e), P && P.kill(), K && delete Kr[K];
          var n = qr.indexOf(wt);
          n >= 0 && qr.splice(n, 1), n === In && ls > 0 && In--, n = 0, qr.forEach(function (t) {
            return t.scroller === wt.scroller && (n = 1);
          }), n || (wt.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.render(-1), e || i.kill()), c && [c, u, f, d].forEach(function (t) {
            return t.parentNode && t.parentNode.removeChild(t);
          }), Q && (r && (r.uncache = 1), n = 0, qr.forEach(function (t) {
            return t.pin === Q && n++;
          }), n || (r.spacer = 0));
        }, wt.enable(!1, !1), i && i.add && !m ? Cn.delayedCall(.01, function () {
          return l || h || wt.refresh();
        }) && (m = .01) && (l = h = 0) : wt.refresh();
      } else this.update = this.refresh = this.kill = or;
    }, t.register = function (e) {
      if (!Sn && (Cn = e || cr(), hr() && window.document && (En = window, On = document, An = On.documentElement, Mn = On.body), Cn && (Ln = Cn.utils.toArray, Nn = Cn.utils.clamp, Kn = Cn.core.suppressOverwrites || or, Cn.core.globals("ScrollTrigger", t), Mn))) {
        Dr(En, "wheel", Vr), Pn = [En, On, An, Mn], Dr(On, "scroll", Vr);
        var i,
            n = Mn.style,
            r = n.borderTopStyle;
        n.borderTopStyle = "solid", i = Pr(Mn), Or.m = Math.round(i.top + Or.sc()) || 0, Er.m = Math.round(i.left + Er.sc()) || 0, r ? n.borderTopStyle = r : n.removeProperty("border-top-style"), Dn = setInterval(Ur, 200), Cn.delayedCall(.5, function () {
          return Jn = 0;
        }), Dr(On, "touchcancel", or), Dr(Mn, "touchstart", or), Br(Dr, On, "pointerdown,touchstart,mousedown", function () {
          return zn = 1;
        }), Br(Dr, On, "pointerup,touchend,mouseup", function () {
          return zn = 0;
        }), Yn = Cn.utils.checkPrefix("transform"), us.push(Yn), Sn = ir(), Fn = Cn.delayedCall(.2, os).pause(), Wn = [On, "visibilitychange", function () {
          var t = En.innerWidth,
              e = En.innerHeight;
          On.hidden ? (Hn = t, jn = e) : Hn === t && jn === e || Xr();
        }, On, "DOMContentLoaded", os, En, "load", function () {
          return rr || os();
        }, En, "resize", Xr], gr(Dr);
      }

      return Sn;
    }, t.defaults = function (t) {
      if (t) for (var e in t) {
        Yr[e] = t[e];
      }
      return Yr;
    }, t.kill = function () {
      sr = 0, qr.slice(0).forEach(function (t) {
        return t.kill(1);
      });
    }, t.config = function (t) {
      "limitCallbacks" in t && (Vn = !!t.limitCallbacks);
      var e = t.syncInterval;
      e && clearInterval(Dn) || (Dn = e) && setInterval(Ur, e), "autoRefreshEvents" in t && (gr(Rr) || gr(Dr, t.autoRefreshEvents || "none"), Un = -1 === (t.autoRefreshEvents + "").indexOf("resize"));
    }, t.scrollerProxy = function (t, e) {
      var i = ar(t),
          n = er.indexOf(i),
          r = ur(i);
      ~n && er.splice(n, r ? 6 : 2), e && (r ? tr.unshift(En, e, Mn, e, An, e) : tr.unshift(i, e));
    }, t.matchMedia = function (t) {
      var e, i, n, r, s;

      for (i in t) {
        n = Zr.indexOf(i), r = t[i], Xn = i, "all" === i ? r() : (e = En.matchMedia(i)) && (e.matches && (s = r()), ~n ? (Zr[n + 1] = Tr(Zr[n + 1], r), Zr[n + 2] = Tr(Zr[n + 2], s)) : (n = Zr.length, Zr.push(i, r, s), e.addListener ? e.addListener(Jr) : e.addEventListener("change", Jr)), Zr[n + 3] = e.matches), Xn = 0;
      }

      return Zr;
    }, t.clearMatchMedia = function (t) {
      t || (Zr.length = 0), (t = Zr.indexOf(t)) >= 0 && Zr.splice(t, 4);
    }, t.isInViewport = function (t, e, i) {
      var n = (vr(t) ? ar(t) : t).getBoundingClientRect(),
          r = n[i ? "width" : "height"] * e || 0;
      return i ? n.right - r > 0 && n.left + r < En.innerWidth : n.bottom - r > 0 && n.top + r < En.innerHeight;
    }, t.positionInViewport = function (t, e, i) {
      vr(t) && (t = ar(t));
      var n = t.getBoundingClientRect(),
          r = n[i ? "width" : "height"],
          s = null == e ? r / 2 : e in Ir ? Ir[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
      return i ? (n.left + s) / En.innerWidth : (n.top + s) / En.innerHeight;
    }, t;
  }();

  xs.version = "3.9.1", xs.saveStyles = function (t) {
    return t ? Ln(t).forEach(function (t) {
      if (t && t.style) {
        var e = is.indexOf(t);
        e >= 0 && is.splice(e, 5), is.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Cn.core.getCache(t), Xn);
      }
    }) : is;
  }, xs.revert = function (t, e) {
    return rs(!t, e);
  }, xs.create = function (t, e) {
    return new xs(t, e);
  }, xs.refresh = function (t) {
    return t ? Xr() : (Sn || xs.register()) && os(!0);
  }, xs.update = hs, xs.clearScrollMemory = ss, xs.maxScroll = function (t, e) {
    return mr(t, e ? Er : Or);
  }, xs.getScrollFunc = function (t, e) {
    return dr(ar(t), e ? Er : Or);
  }, xs.getById = function (t) {
    return Kr[t];
  }, xs.getAll = function () {
    return qr.slice(0);
  }, xs.isScrolling = function () {
    return !!rr;
  }, xs.snapDirectional = Nr, xs.addEventListener = function (t, e) {
    var i = Gr[t] || (Gr[t] = []);
    ~i.indexOf(e) || i.push(e);
  }, xs.removeEventListener = function (t, e) {
    var i = Gr[t],
        n = i && i.indexOf(e);
    n >= 0 && i.splice(n, 1);
  }, xs.batch = function (t, e) {
    var i,
        n = [],
        r = {},
        s = e.interval || .016,
        o = e.batchMax || 1e9,
        a = function a(t, e) {
      var i = [],
          n = [],
          r = Cn.delayedCall(s, function () {
        e(i, n), i = [], n = [];
      }).pause();
      return function (t) {
        i.length || r.restart(!0), i.push(t.trigger), n.push(t), o <= i.length && r.progress(1);
      };
    };

    for (i in e) {
      r[i] = "on" === i.substr(0, 2) && _r(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
    }

    return _r(o) && (o = o(), Dr(xs, "refresh", function () {
      return o = e.batchMax();
    })), Ln(t).forEach(function (t) {
      var e = {};

      for (i in r) {
        e[i] = r[i];
      }

      e.trigger = t, n.push(xs.create(e));
    }), n;
  }, xs.sort = function (t) {
    return qr.sort(t || function (t, e) {
      return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
    });
  }, cr() && Cn.registerPlugin(xs);

  var Ts = /*#__PURE__*/function () {
    function Ts() {
      _classCallCheck(this, Ts);

      if ($(".u-feature-01-pc").length > 0) {
        this.resizeElem = $(".c-lyt-mainvisual-01"), window.innerWidth >= 768 ? this.device = "pc" : this.device = "sp";
        var _t5 = 810,
            _e4 = 1440,
            _i2 = 2432,
            _n2 = 750;
        this.pcRatio = _e4 / _t5, this.spRatio = _n2 / _i2, this.pcRatioHeight = _t5 / _e4, this.spRatioHeight = _i2 / _n2, this.animKvEl = $('[data-anim-kv="el"]'), this.animKvTxt = $('[data-anim-kv="txt"]'), this.animKvBtn = $('[data-anim-kv="btn"]'), this.animKvTarget = $('[data-anim-kv="target"]'), this.animKvScrollAtt = $(".scroll-attention"), this.animStartPoint = .25 * window.innerHeight, this.onKvTrans = !1, this.kvCenterFlg = !0, this.kvStickFlg = !1, this.kvHiddenFlg = !1, this.animKvDelay = 1e3, this.animKvElMT = 145, this.kvElHeight = $(this.animKvEl).height() + this.animKvElMT, this.animYrEl = $('[data-anim-year="el"]'), this.animYrStart = $('[data-anim-year="start"]'), this.animYrTarget = $('[data-anim-year="target"]'), this.animYrSection = $('[data-anim-year="section"]'), this.nowYrTop = $(this.animYrEl).css("top"), this.yrFixFlg = !1, this.yrStickFlg = !1, this.animNowEl = $('[data-anim-now="el"]'), this.animNowStart = $('[data-anim-now="start"]'), this.animNowTarget = $('[data-anim-now="target"]'), this.animNowSection = $('[data-anim-now="section"]'), this.nowElLeft = $(this.animNowEl).css("left"), this.nowElTop = $(this.animNowEl).css("top"), this.nowFixFlg = !1, this.nowStickFlg = !1, this.nowStickOffset = 190, this.animNavEl = $(".js-anim-nav-el"), this.animNavStart = $('[data-anim-nav="start"]'), this.animNavTarget = $('[data-anim-nav="target"]'), this.animNavLinks = $('[data-anim-nav="link"]'), this.pageFooter = $("#l-footer"), this.sectionProgressOffset = $("#anc-01").offset().top, this.sectionNowOffset = $("#anc-02").offset().top, this.sectionFutureOffset = $("#anc-03").offset().top, this.navFixFlg = !1, this.navStickFlg = !1, this.navLinkFlg = !1, this.animFutureEl = $('[data-anim-future="el"]'), this.animFutureTxt = $('[data-anim-future="txt"]'), this.futureAnimFlg = !1, window.requestAnimationFrame = window.requestAnimationFrame.bind(window), Zn.registerPlugin(xs), this.init();
      }
    }

    _createClass(Ts, [{
      key: "init",
      value: function init() {
        var _this5 = this;

        var t = this;
        window;
        this.setSize(), "pc" == this.device && window.addEventListener("resize", this.setSize.bind(this)), window.addEventListener("resize", function () {
          _this5.nowElLeft = $(_this5.animNowEl).css("left"), _this5.navAnim();
        }), window.addEventListener("scroll", this.scrollAnim.bind(this)), this.kvTimelineInit(), this.kvAnimInit(), this.kvScrollAnim(), t.kvStickFlg && $(t.animKvEl).css("opacity", "0"), $(window).load(function () {
          $(t.animYrSection).each(function () {
            t.yearNumAnim(this);
          }), $(t.animNowSection).each(function () {
            t.nowImgAnim(this);
          }), t.navAnim(), t.navAnchor(), $(t.animNavLinks).each(function () {
            t.navLinksAnim(this);
          }), $(t.animFutureTxt).each(function () {
            t.futureTextAnim(this);
          });
        });
      }
    }, {
      key: "setSize",
      value: function setSize() {
        if ("pc" == this.device || "ipad" == this.device) {
          var _t6 = window.innerHeight,
              _e5 = window.innerWidth;

          if (_e5 / _t6 < this.pcRatio) {
            var _e6 = _t6 * this.pcRatio;

            $(this.resizeElem).css({
              height: "100%",
              width: _e6 + "px"
            });
          } else {
            var _t7 = _e5 * this.pcRatioHeight;

            $(this.resizeElem).css({
              height: _t7 + "px",
              width: "100%"
            });
          }
        } else {
          var _t8 = window.innerWidth * this.spRatioHeight;

          $(this.resizeElem).css({
            height: _t8 + "px",
            width: "100%"
          });
        }
      }
    }, {
      key: "scrollAnim",
      value: function scrollAnim() {
        this.kvScrollAnim(), this.yearScrollAnim(), this.nowScrollAnim(), this.navScrollAnim();
      }
    }, {
      key: "kvTimelineInit",
      value: function kvTimelineInit() {
        var t = (window.innerWidth - $(".column-inner").width()) / 2;
        this.kvTL = Zn.timeline({
          scrollTrigger: {
            trigger: ".column-L",
            pin: !0,
            start: "top top",
            end: "+=1000",
            scrub: 1
          }
        }), this.kvTL.fromTo(this.animKvTxt, {
          css: {
            left: "50%",
            position: "fixed",
            top: "50%",
            width: "849px",
            transform: "translate(-50%,-50%)"
          }
        }, {
          css: {
            left: t + "px",
            position: "fixed",
            top: "145px",
            width: "424px",
            transform: "translate(0%,0%)"
          },
          duration: 1
        }), this.kvTL.set(this.animKvTxt, {
          css: {
            top: "0",
            left: "0",
            position: "relative"
          }
        }), this.kvTL.fromTo(this.animKvBtn, {
          opacity: 0
        }, {
          opacity: 1
        }, "+=0.5");
      }
    }, {
      key: "kvAnimInit",
      value: function kvAnimInit() {
        var t = (window.innerWidth - $(".column-inner").width()) / 2;
        $(this.animKvEl).css({
          left: t + "px"
        });
      }
    }, {
      key: "kvScrollAnim",
      value: function kvScrollAnim() {
        var t = $(this.animKvTarget).offset().top,
            e = window.innerHeight + $(window).scrollTop();

        if (e >= t && !this.kvStickFlg) {
          this.kvStickFlg = !0;

          var _t9 = $(this.animKvEl).css("bottom");

          $(this.animKvEl).addClass("is-sticky"), $(this.animKvEl).css({
            left: "0",
            bottom: "" + _t9
          });
        } else if (e < t && this.kvStickFlg) {
          this.kvStickFlg = !1, $(this.animKvEl).removeClass("is-sticky"), $(this.animKvEl).css({
            bottom: "auto"
          });

          var _t10 = (window.innerWidth - $(".column-inner").width()) / 2;

          $(this.animKvEl).css({
            left: _t10 + "px"
          });
        }

        .5 * window.innerHeight + $(window).scrollTop() >= t ? this.kvHiddenFlg || (this.kvHiddenFlg = !0, Zn.set([this.animKvEl, this.animKvScrollAtt], {
          opacity: 0
        })) : .5 * window.innerHeight + $(window).scrollTop() < t && this.kvHiddenFlg && (this.kvHiddenFlg = !1, Zn.set([this.animKvEl, this.animKvScrollAtt], {
          opacity: 1
        }));
      }
    }, {
      key: "yearScrollAnim",
      value: function yearScrollAnim() {
        var t = $(this.animYrStart).offset().top;

        if ($(window).scrollTop() >= t) {
          if (this.yrFixFlg || (this.yrFixFlg = !0, $(this.animYrEl).addClass("is-fixed")), this.yrFixFlg) {
            var _t11 = $(this.animYrTarget).offset().top;

            var _e7 = $(this.animYrTarget).parent().css("padding-top");

            _e7 = this.removePx(_e7);

            var _i3 = $(window).scrollTop() + _e7;

            if (_i3 >= _t11 && !this.yrStickFlg) {
              this.yrStickFlg = !0;
              var _e8 = $(this.animYrEl).parent().offset().top;
              $(this.animYrEl).addClass("is-sticky"), $(this.animYrEl).css({
                top: _t11 - _e8 + "px"
              });
            } else _i3 < _t11 && this.yrStickFlg && (this.yrStickFlg = !1, $(this.animYrEl).removeClass("is-sticky"), $(this.animYrEl).css({
              top: "" + this.nowYrTop
            }));
          }
        } else $(window).scrollTop() < t && this.yrFixFlg && (this.yrFixFlg = !1, $(this.animYrEl).removeClass("is-fixed"));

        var e = $(this.animYrSection[0]).offset().top;
        $(window).scrollTop() < e && $('[data-anim-year="year"]').text("2005");
      }
    }, {
      key: "yearNumAnim",
      value: function yearNumAnim(t) {
        var e = $(t).offset().top,
            i = $(t).height(),
            n = e + i,
            r = $(t).data("anim-year-num");
        $(window).on("scroll", function () {
          var t = $(window).scrollTop();
          t > e && t < n && $('[data-anim-year="year"]').text(r);
        });
      }
    }, {
      key: "nowScrollAnim",
      value: function nowScrollAnim() {
        var t = $(this.animNowStart).offset().top;

        if ($(window).scrollTop() >= t) {
          if (!this.nowFixFlg) {
            this.nowFixFlg = !0, $(this.animNowEl).addClass("is-fixed");

            var _t12 = window.innerWidth - $(".c-lyt-feature-03").width();

            var _e9 = $(".c-lyt-feature-03").css("padding-left");

            _e9 = this.removePx(_e9);
            var _i4 = $(this.animNowEl).offset().left;
            this.leftOffset = 0, _t12 < 0 && window.innerWidth <= 1440 || _t12 >= 0 && window.innerWidth <= 1240 ? this.leftOffset = _i4 + _e9 : window.innerWidth > 1240 && (this.leftOffset = _i4 + (_t12 + _e9) / 2), $(this.animNowEl).css({
              left: this.leftOffset + "px"
            });
          }

          if (this.nowFixFlg) {
            var _t13 = $(this.animNowTarget).offset().top,
                _e10 = $(window).scrollTop() + this.nowStickOffset;

            if (_e10 >= _t13 && !this.nowStickFlg) {
              this.nowStickFlg = !0;
              var _e11 = $(this.animNowEl).parent().offset().top;
              $(this.animNowEl).addClass("is-sticky"), $(this.animNowEl).css({
                left: "" + this.nowElLeft,
                top: _t13 - _e11 + "px"
              });
            } else _e10 < _t13 && this.nowStickFlg && (this.nowStickFlg = !1, $(this.animNowEl).removeClass("is-sticky"), $(this.animNowEl).css({
              top: "" + this.nowElTop
            }), $(this.animNowEl).css({
              left: this.leftOffset + "px"
            }));
          }
        } else $(window).scrollTop() < t && this.nowFixFlg && (this.nowFixFlg = !1, $(this.animNowEl).removeClass("is-fixed"), $(this.animNowEl).css({
          left: "" + this.nowElLeft
        }));
      }
    }, {
      key: "removePx",
      value: function removePx(t) {
        return t.replace("px", "") - 0;
      }
    }, {
      key: "nowImgAnim",
      value: function nowImgAnim(t) {
        var e = $(t).offset().top,
            i = $(t).height(),
            n = e + i,
            r = $(t).data("anim-now-num");
        5 !== r ? $(window).on("scroll", function () {
          $(window).scrollTop() + .3 * window.innerHeight > e && $(window).scrollTop() < n && ($(".js-anim-now-img").addClass("is-hidden"), $(".js-anim-now-img").removeClass("is-show"), $(".js-anim-now-img--" + r).removeClass("is-hidden"), $(".js-anim-now-img--" + r).addClass("is-show"));
        }) : (console.log("5"), $(window).on("scroll", function () {
          $(window).scrollTop() + .2 * window.innerHeight >= n && ($(".js-anim-now-img").addClass("is-hidden"), $(".js-anim-now-img").removeClass("is-show"), $(".js-anim-now-img--" + r).removeClass("is-hidden"), $(".js-anim-now-img--" + r).addClass("is-show")), $(window).scrollTop() + .2 * window.innerHeight < n && ($(".js-anim-now-img--" + r).addClass("is-hidden"), $(".js-anim-now-img--" + r).removeClass("is-show"));
        }));
      }
    }, {
      key: "navAnim",
      value: function navAnim() {
        $(this.animNavEl).css("height", window.innerHeight + "px");
      }
    }, {
      key: "navAnchor",
      value: function navAnchor() {
        var t = $("html, body");
        $('a[href^="#"]').click(function () {
          return t.animate({
            scrollTop: $($.attr(this, "href")).offset().top
          }, 500), !1;
        });
      }
    }, {
      key: "navScrollAnim",
      value: function navScrollAnim() {
        var t = $(this.animNavStart).offset().top;

        if ($(window).scrollTop() >= t) {
          if (this.navFixFlg || (this.navFixFlg = !0, $(this.animNavEl).addClass("is-fixed")), this.navFixFlg) {
            var _t14 = $(this.pageFooter).offset().top,
                _e12 = $(window).scrollTop() + window.innerHeight;

            _e12 >= _t14 && !this.navStickFlg ? (this.navStickFlg = !0, $(this.animNavEl).addClass("is-sticky")) : _e12 < _t14 && this.navStickFlg && (this.navStickFlg = !1, $(this.animNavEl).removeClass("is-sticky"));
          }
        } else $(window).scrollTop() < t && this.navFixFlg && (this.navFixFlg = !1, $(this.animNavEl).removeClass("is-fixed"));

        if (this.sectionProgressOffset < $(window).scrollTop() + .5 * window.innerHeight && $(window).scrollTop() + .5 * window.innerHeight < this.sectionNowOffset) {
          $(this.animNavLinks).removeClass("current"), $(this.animNavLinks).removeClass("is-future"), $(this.animNavLinks[0]).addClass("current");
        } else if (this.sectionNowOffset < $(window).scrollTop() + .5 * window.innerHeight && $(window).scrollTop() + .5 * window.innerHeight < this.sectionFutureOffset) {
          $(this.animNavLinks).removeClass("current"), $(this.animNavLinks).removeClass("is-future"), $(this.animNavLinks[1]).addClass("current");
        } else {
          $(this.animNavLinks).removeClass("current"), $(this.animNavLinks).addClass("is-future"), $(this.animNavLinks[2]).addClass("current");
        }
      }
    }, {
      key: "navLinksAnim",
      value: function navLinksAnim(t) {
        var e = $(this.animNavTarget).offset().top;
        $(window).on("scroll", function () {
          $(window).scrollTop() + .5 * window.innerHeight > e ? $(t).addClass("is-future") : $(window).scrollTop() < e && $(t).removeClass("is-future");
        });
      }
    }, {
      key: "futureTextAnim",
      value: function futureTextAnim(t) {
        var e = $(t).offset().top;
        $(window).on("scroll", function () {
          $(window).scrollTop() + .8 * window.innerHeight > e && 0 == $(t).hasClass("is-show") && ($(t).addClass("is-show"), $(t).find(".inner").addClass("is-show"));
        });
      }
    }]);

    return Ts;
  }();

  window, document, $(function () {
    new n(), new r(), new s(), new o(), new a(), new l(), new h(), new u(), new c(), new Ts(), new f(), $(window).load(function () {
      setTimeout(function () {
        $(".js-slick-main-visual").slick({
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: !0,
          dotsClass: "slide-dots",
          fade: !0,
          speed: 1e3,
          autoplaySpeed: 3e3,
          autoplay: !0,
          swipe: !1,
          cssEase: "linear",
          prevArrow: '<p class="slide-arrow prev-arrow"><span></span></p>',
          nextArrow: '<p class="slide-arrow next-arrow"><span></span></p>'
        });
      }, 100), $(".js-slick-footer-banner-2").slick({
        infinite: !0,
        dots: !1,
        centerMode: !1,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<p class="slide-arrow prev-arrow"><span></span></p>',
        nextArrow: '<p class="slide-arrow next-arrow"><span></span></p>',
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: !0,
            slidesToScroll: 1
          }
        }]
      }), $(".js-slick-footer-banner-4").slick({
        infinite: !0,
        dots: !1,
        centerMode: !1,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<p class="slide-arrow prev-arrow"><span></span></p>',
        nextArrow: '<p class="slide-arrow next-arrow"><span></span></p>',
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: !0,
            slidesToScroll: 1
          }
        }]
      });
    });
  });
}]);