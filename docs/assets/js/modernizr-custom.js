/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms-csstransitions-domprefixes-prefixed-setclasses-shiv-testallprops-testprop !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, s;
        for (var l in S)
            if (S.hasOwnProperty(l)) {
                if (e = [], t = S[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), C.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function a(e) {
        var t = x.className,
            n = Modernizr._config.classPrefix || "";
        if (b && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), b ? x.className.baseVal = t : x.className = t)
    }

    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function c(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? u(o, n || t) : o);
        return !1
    }

    function f(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var a = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (a) {
                var i = a.error ? "error" : "log";
                a[i].call(a, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function p() {
        var e = t.body;
        return e || (e = l(b ? "svg" : "body"), e.fake = !0), e
    }

    function m(e, n, r, o) {
        var a, i, s, u, c = "modernizr",
            f = l("div"),
            d = p();
        if (parseInt(r, 10))
            for (; r--;) s = l("div"), s.id = o ? o[r] : c + (r + 1), f.appendChild(s);
        return a = l("style"), a.type = "text/css", a.id = "s" + c, (d.fake ? d : f).appendChild(a), d.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), f.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = x.style.overflow, x.style.overflow = "hidden", x.appendChild(d)), i = n(f, e), d.fake ? (d.parentNode.removeChild(d), x.style.overflow = u, x.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function h(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(f(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + f(t[o]) + ":" + r + ")");
            return a = a.join(" or "), m("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == d(e, null, "position")
            })
        }
        return n
    }

    function g(e, t, o, a) {
        function u() {
            f && (delete z.style, delete z.modElem)
        }
        if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
            var c = h(e, o);
            if (!r(c, "undefined")) return c
        }
        for (var f, d, p, m, g, v = ["modernizr", "tspan", "samp"]; !z.style && v.length;) f = !0, z.modElem = l(v.shift()), z.style = z.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], g = z.style[m], s(m, "-") && (m = i(m)), z.style[m] !== n) {
                if (a || r(o, "undefined")) return u(), "pfx" == t ? m : !0;
                try {
                    z.style[m] = o
                } catch (y) {}
                if (z.style[m] != g) return u(), "pfx" == t ? m : !0
            }
        return u(), !1
    }

    function v(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, o, a) : (s = (e + " " + _.join(i + " ") + i).split(" "), c(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var C = [],
        S = [],
        E = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                S.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                S.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = E, Modernizr = new Modernizr;
    var x = t.documentElement,
        b = "svg" === x.nodeName.toLowerCase();
    b || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t)
        }

        function a(e) {
            var t = y[e[g]];
            return t || (t = {}, v++, e[g] = v, y[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = a(e);
            return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var c, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, f = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var w = "Moz O ms Webkit",
        _ = E._config.usePrefixes ? w.toLowerCase().split(" ") : [];
    E._domPrefixes = _;
    var N = E._config.usePrefixes ? w.split(" ") : [];
    E._cssomPrefixes = N;
    var T = function(t) {
        var r, o = prefixes.length,
            a = e.CSSRule;
        if ("undefined" == typeof a) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;
        for (var i = 0; o > i; i++) {
            var s = prefixes[i],
                l = s.toUpperCase() + "_" + r;
            if (l in a) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    E.atRule = T;
    var j = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function() {
        delete j.elem
    });
    var z = {
        style: j.elem.style
    };
    Modernizr._q.unshift(function() {
        delete z.style
    });
    E.testProp = function(e, t, r) {
        return g([e], n, t, r)
    };
    E.testAllProps = v;
    E.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    E.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
    }), o(), a(C), delete E.addTest, delete E.addAsyncTest;
    for (var P = 0; P < Modernizr._q.length; P++) Modernizr._q[P]();
    e.Modernizr = Modernizr
}(window, document);