// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "10",

            "macros": [{
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.querySelectorAll(\"input.jet-chat__form-field\")[0].value,b=document.querySelectorAll(\"input.jet-chat__form-field\")[1].value;return 2==\/.{2,}\/.test(a)+\/.{2,}@.{2,}\/.test(b)?!0:!1}catch(c){return!1}})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__u",
                "vtp_component": "PATH"
            }, {
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "URL"
            }, {
                "function": "__u",
                "vtp_component": "HOST"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }],
            "tags": [{
                "function": "__ua",
                "once_per_event": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_overrideGaSettings": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": true,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-1217838-28",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "tag_id": 1
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Chat",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": false,
                "vtp_overrideGaSettings": true,
                "vtp_ecommerceMacroData": ["macro", 4],
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-114683021-1",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 2
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_useDebugVersion": false,
                "vtp_eventCategory": "Chat",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": "Start",
                "vtp_eventLabel": ["macro", 3],
                "vtp_useEcommerceDataLayer": false,
                "vtp_overrideGaSettings": true,
                "vtp_ecommerceMacroData": ["macro", 4],
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-114683021-1",
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 3
            }, {
                "function": "__cl",
                "tag_id": 5
            }, {
                "function": "__cl",
                "tag_id": 6
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.location.search.split(\"aff\\x3d\")[1];if(b){var d=document.querySelectorAll(\"a\"),c;for(c=0;c\u003Cd.length;c++){var a=d[c];0==a.href.indexOf(\"https:\/\/www.templatemonster.com\")\u0026\u0026(0\u003Ca.href.indexOf(\"?\")?a.href=a.href+\"\\x26aff\\x3d\"+b:a.href=a.href+\"?aff\\x3d\"+b)}}b=document.location.search.split(\"i\\x3d\")[1];var e=document.location.search.split(\"pr_code\\x3d\")[1];if(b\u0026\u0026e)for(b=b.split(\"\\x26\")[0],d=document.querySelectorAll(\"a\"),c=0;c\u003Cd.length;c++)a=d[c],0==a.href.indexOf(\"https:\/\/www.templatemonster.com\")\u0026\u0026\n(a.href=\"https:\/\/www.templatehelp.com\/preset\/cart.php?act\\x3dadd\\x26templ\\x3d\"+b+\"\\x26pr_code\\x3d\"+e)})();\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 4
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "jet-chat-trigger"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "true"
            }, {
                "function": "_eq",
                "arg0": ["macro", 2],
                "arg1": "jet-chat__form-submit"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 5, 3, 4]
                ],
                [
                    ["if", 1, 2],
                    ["add", 1]
                ],
                [
                    ["if", 2, 3, 4],
                    ["add", 2]
                ]
            ]
        },
        "runtime": []










    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ca, ea = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ea(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja,
        oa = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.km = b.prototype
        },
        pa = this || self,
        qa = function(a) {
            return a
        };
    var ra = function() {},
        sa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        ta = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ua = Array.isArray,
        va = function(a, b) {
            if (a && ua(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        wa = function(a, b) {
            if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        za = function(a, b) {
            for (var c = new ya, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Aa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Ba = function(a) {
            return Math.round(Number(a)) || 0
        },
        Da = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ea = function(a) {
            var b = [];
            if (ua(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Fa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ga = function() {
            return new Date(Date.now())
        },
        Ha = function() {
            return Ga().getTime()
        },
        ya = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ya.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ya.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ia = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ja = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ka = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        La = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ma = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Na = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Oa = /^\w{1,9}$/,
        Qa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Oa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ra = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Sa() {
        for (var a = Ta, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ua() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Ta, Va;

    function Wa(a) {
        Ta = Ta || Ua();
        Va = Va || Sa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Ta[m], Ta[n], Ta[p], Ta[q])
        }
        return b.join("")
    }

    function Xa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Va[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Ta = Ta || Ua();
        Va = Va || Sa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Za = {},
        $a = function(a, b) {
            Za[a] = Za[a] || [];
            Za[a][b] = !0
        },
        ab = function() {
            delete Za.GA4_EVENT
        },
        bb = function(a) {
            var b = Za[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Wa(c.join("")).replace(/\.+$/, "")
        };
    var cb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var db, eb = function() {
        if (void 0 === db) {
            var a = null,
                b = pa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: qa,
                        createScript: qa,
                        createScriptURL: qa
                    })
                } catch (c) {
                    pa.console && pa.console.error(c.message)
                }
                db = a
            } else db = a
        }
        return db
    };
    var fb = function(a) {
        this.h = a
    };
    fb.prototype.toString = function() {
        return this.h + ""
    };
    var gb = {};
    var hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var ib, jb;
    a: {
        for (var kb = ["CLOSURE_FLAGS"], lb = pa, mb = 0; mb < kb.length; mb++)
            if (lb = lb[kb[mb]], null == lb) {
                jb = null;
                break a
            }
        jb = lb
    }
    var nb = jb && jb[610401301];
    ib = null != nb ? nb : !1;

    function ob() {
        var a = pa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var pb, qb = pa.navigator;
    pb = qb ? qb.userAgentData || null : null;

    function rb(a) {
        return ib ? pb ? pb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function sb(a) {
        return -1 != ob().indexOf(a)
    };

    function tb() {
        return ib ? !!pb && 0 < pb.brands.length : !1
    }

    function ub() {
        return tb() ? !1 : sb("Opera")
    }

    function vb() {
        return sb("Firefox") || sb("FxiOS")
    }

    function wb() {
        return tb() ? rb("Chromium") : (sb("Chrome") || sb("CriOS")) && !(tb() ? 0 : sb("Edge")) || sb("Silk")
    };
    var xb = {},
        yb = function(a) {
            this.h = a
        };
    yb.prototype.toString = function() {
        return this.h.toString()
    };
    var zb = function(a) {
        return a instanceof yb && a.constructor === yb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Ab(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };
    (function() {
        return ""
    }).toString().indexOf("`");

    function Bb(a) {
        var b = a = Cb(a),
            c = eb(),
            d = c ? c.createHTML(b) : b;
        return new yb(d, xb)
    }

    function Cb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Db = navigator,
        Fb = C.currentScript && C.currentScript.src,
        Gb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Hb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ib = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Jb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Kb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Lb = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Kb(f, d, Ib);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = Cb(a),
                m = eb(),
                n = m ? m.createScriptURL(l) : l;
            g = new fb(n, gb);
            f.src = g instanceof fb && g.constructor === fb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Hb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = C.getElementsByTagName("script")[0] || C.body || C.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Mb = function() {
            if (Fb) {
                var a = Fb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Nb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = C.createElement("iframe"), l = !0);
            Kb(g, c, Jb);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = C.body && C.body.lastChild || C.body ||
                    C.head;
                m.parentNode.insertBefore(g, m)
            }
            Hb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Ob = function(a, b, c, d) {
            var e = new Image(1, 1);
            Kb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Pb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Qb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        F = function(a) {
            z.setTimeout(a, 0)
        },
        Rb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Sb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Tb = function(a) {
            var b = C.createElement("div"),
                c = b,
                d = Bb("A<div>" + a + "</div>");
            1 === c.nodeType && Ab(c);
            c.innerHTML = zb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Ub = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f =
                    a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Vb = function(a) {
            var b;
            try {
                b = Db.sendBeacon && Db.sendBeacon(a)
            } catch (c) {
                $a("TAGGING", 15)
            }
            b || Ob(a)
        },
        Wb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Xb = function(a, b) {
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Yb = function() {
            var a = z.performance;
            if (a && sa(a.now)) return a.now()
        },
        Zb = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var $b = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        ac = function(a) {
            if (null == a) return String(a);
            var b = $b.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        bc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        G = function(a) {
            if (!a || "object" != ac(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !bc(a, "constructor") && !bc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || bc(a, b)
        },
        J = function(a, b) {
            var c = b || ("array" == ac(a) ? [] : {}),
                d;
            for (d in a)
                if (bc(a, d)) {
                    var e = a[d];
                    "array" == ac(e) ? ("array" != ac(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : G(e) ? (G(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
                }
            return c
        };
    var cc = function(a) {
        if (void 0 === a || ua(a) || G(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };

    function dc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    }

    function ec(a) {
        switch (a) {
            case 1:
                return "G";
            case 3:
                return "g";
            case 2:
                return "D";
            case 4:
                return "d";
            case 0:
                return "g";
            default:
                return "g"
        }
    }

    function fc(a, b) {
        var c = a[1] || 0,
            d = a[2] || 0,
            e = a[3] || 0,
            f = a[4] || 0;
        switch (b) {
            case 0:
                return "G1" + dc(c) + dc(d);
            case 1:
                return "G2" + ec(c) + ec(d);
            case 2:
                return "G2" + ec(c) + ec(d) + ec(e) + ec(f);
            default:
                return "g1--"
        }
    };
    var gc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ki: a("consent"),
            Gg: a("convert_case_to"),
            Hg: a("convert_false_to"),
            Ig: a("convert_null_to"),
            Jg: a("convert_true_to"),
            Kg: a("convert_undefined_to"),
            Ll: a("debug_mode_metadata"),
            zb: a("function"),
            Kf: a("instance_name"),
            Lj: a("live_only"),
            Mj: a("malware_disabled"),
            Nj: a("metadata"),
            Qj: a("original_activity_id"),
            Tl: a("original_vendor_template_id"),
            Sl: a("once_on_load"),
            Pj: a("once_per_event"),
            Kh: a("once_per_load"),
            Xl: a("priority_override"),
            Yl: a("respected_consent_types"),
            Oh: a("setup_tags"),
            wd: a("tag_id"),
            Th: a("teardown_tags")
        }
    }();
    var Dc;
    var Ec = [],
        Fc = [],
        Gc = [],
        Hc = [],
        Ic = [],
        Jc = {},
        Kc, Lc, Nc = function() {
            var a = Mc;
            Lc = Lc || a
        },
        Oc, Pc = [],
        Qc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Jc[c],
                f = b && 2 === b.type && d.wi && e && -1 !== Pc.indexOf(c),
                g = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.Yh && d.Yh(a[m]), e && (g[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.Xh && (g.vtp_gtmCachedValues = d.Xh);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.index;
                        if (null == p) n =
                            "";
                        else {
                            var q;
                            switch (b.type) {
                                case 2:
                                    q = Ec[p];
                                    break;
                                case 1:
                                    q = Hc[p];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var r = q && q[gc.Kf];
                            n = r ? String(r) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var t, u;
            e && (t = e(g));
            if (!e || f) u = Dc(c, l, b);
            f && t !== u && d && d.wi(d.id, c);
            return e ? t : u
        },
        Sc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Rc(a[e], b, c));
            return d
        },
        Rc = function(a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Rc(a[e],
                            b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Ec[f];
                        if (!g || b.ag(g)) return;
                        c[f] = !0;
                        var l = String(g[gc.Kf]);
                        try {
                            var m = Sc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Qc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Oc && (d = Oc.fk(d, m))
                        } catch (y) {
                            b.ki && b.ki(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Rc(a[n], b, c)] = Rc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Rc(a[q], b, c);
                            Lc && (p = p || r === Lc.Ce);
                            d.push(r)
                        }
                        return Lc && p ? Lc.gk(d) : d.join("");
                    case "escape":
                        d = Rc(a[1], b, c);
                        if (Lc && ua(a[1]) && "macro" === a[1][0] && Lc.Jk(a)) return Lc.jl(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) hc[a[t]] && (d = hc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Hc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            ei: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Tc(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        Tc = function(a, b, c) {
            try {
                return Kc(Sc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Wc = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Uc(a), f = 0; f < Fc.length; f++) {
                var g = Fc[f],
                    l = Vc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < Hc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Vc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Uc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Tc(Gc[c], a));
                return b[c]
            }
        };
    var Xc = {
        fk: function(a, b) {
            b[gc.Gg] && "string" === typeof a && (a = 1 == b[gc.Gg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(gc.Ig) && null === a && (a = b[gc.Ig]);
            b.hasOwnProperty(gc.Kg) && void 0 === a && (a = b[gc.Kg]);
            b.hasOwnProperty(gc.Jg) && !0 === a && (a = b[gc.Jg]);
            b.hasOwnProperty(gc.Hg) && !1 === a && (a = b[gc.Hg]);
            return a
        }
    };
    var kd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ld(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var md = new ya;

    function nd(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = md.get(e);
            f || (f = new RegExp(b, d), md.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    };
    var ud = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function vd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var xd = function(a) {
            return wd ? C.querySelectorAll(a) : null
        },
        yd = function(a, b) {
            if (!wd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        zd = !1;
    if (C.querySelectorAll) try {
        var Cd = C.querySelectorAll(":root");
        Cd && 1 == Cd.length && Cd[0] == C.documentElement && (zd = !0)
    } catch (a) {}
    var wd = zd;
    var K = function(a) {
        $a("GTM", a)
    };
    var N = {
            g: {
                df: "ad_data_sharing",
                D: "ad_storage",
                Xd: "ad_user_data",
                M: "analytics_storage",
                Yb: "region",
                Yd: "consent_updated",
                Cg: "wait_for_update",
                Oi: "ads",
                Kl: "all",
                Pi: "play",
                Qi: "search",
                Ri: "youtube",
                Si: "app_remove",
                Ti: "app_store_refund",
                Ui: "app_store_subscription_cancel",
                Vi: "app_store_subscription_convert",
                Wi: "app_store_subscription_renew",
                Lg: "add_payment_info",
                Mg: "add_shipping_info",
                Zb: "add_to_cart",
                ac: "remove_from_cart",
                Ng: "view_cart",
                Db: "begin_checkout",
                bc: "select_item",
                Va: "view_item_list",
                pb: "select_promotion",
                Wa: "view_promotion",
                ya: "purchase",
                fc: "refund",
                Da: "view_item",
                Og: "add_to_wishlist",
                Xi: "exception",
                Yi: "first_open",
                Zi: "first_visit",
                ja: "gtag.config",
                Ea: "gtag.get",
                aj: "in_app_purchase",
                hc: "page_view",
                bj: "screen_view",
                cj: "session_start",
                dj: "timing_complete",
                ej: "track_social",
                ae: "user_engagement",
                qb: "gclid",
                ka: "ads_data_redaction",
                T: "allow_ad_personalization_signals",
                be: "allow_custom_scripts",
                kf: "allow_display_features",
                ce: "allow_enhanced_conversions",
                rb: "allow_google_signals",
                za: "allow_interest_groups",
                fj: "app_id",
                gj: "app_installer_id",
                ij: "app_name",
                jj: "app_version",
                ic: "auid",
                kj: "auto_detection_enabled",
                Eb: "aw_remarketing",
                lf: "aw_remarketing_only",
                de: "discount",
                ee: "aw_feed_country",
                fe: "aw_feed_language",
                U: "items",
                he: "aw_merchant_id",
                Pg: "aw_basket_type",
                Nc: "campaign_content",
                Oc: "campaign_id",
                Pc: "campaign_medium",
                Qc: "campaign_name",
                Rc: "campaign",
                Sc: "campaign_source",
                Tc: "campaign_term",
                Xa: "client_id",
                lj: "content_group",
                mj: "content_type",
                Fa: "conversion_cookie_prefix",
                Uc: "conversion_id",
                ra: "conversion_linker",
                Fb: "conversion_api",
                Ja: "cookie_domain",
                Aa: "cookie_expires",
                Ka: "cookie_flags",
                jc: "cookie_name",
                Vc: "cookie_path",
                Ga: "cookie_prefix",
                Za: "cookie_update",
                sb: "country",
                oa: "currency",
                ie: "customer_lifetime_value",
                kc: "custom_map",
                Qg: "gcldc",
                nj: "debug_mode",
                V: "developer_id",
                oj: "disable_merchant_reported_purchases",
                mc: "dc_custom_params",
                Rg: "dc_natural_search",
                nf: "dynamic_event_settings",
                Sg: "affiliation",
                je: "checkout_option",
                pf: "checkout_step",
                Tg: "coupon",
                Wc: "item_list_name",
                qf: "list_name",
                pj: "promotions",
                Xc: "shipping",
                rf: "tax",
                ke: "engagement_time_msec",
                Yc: "enhanced_client_id",
                Zc: "enhanced_conversions",
                Ug: "enhanced_conversions_automatic_settings",
                me: "estimated_delivery_date",
                tf: "euid_logged_in_state",
                nc: "event_callback",
                qj: "event_category",
                tb: "event_developer_id_string",
                rj: "event_label",
                Vg: "event",
                ne: "event_settings",
                oe: "event_timeout",
                sj: "description",
                tj: "fatal",
                uj: "experiments",
                uf: "firebase_id",
                pe: "first_party_collection",
                qe: "_x_20",
                Gb: "_x_19",
                Wg: "fledge",
                Xg: "flight_error_code",
                Yg: "flight_error_message",
                Zg: "fl_activity_category",
                ah: "fl_activity_group",
                vf: "fl_advertiser_id",
                bh: "fl_ar_dedupe",
                eh: "fl_random_number",
                fh: "tran",
                gh: "u",
                se: "gac_gclid",
                oc: "gac_wbraid",
                hh: "gac_wbraid_multiple_conversions",
                ih: "ga_restrict_domain",
                wf: "ga_temp_client_id",
                te: "gdpr_applies",
                jh: "geo_granularity",
                ab: "value_callback",
                La: "value_key",
                Nl: "google_ono",
                cb: "google_signals",
                kh: "google_tld",
                ue: "groups",
                lh: "gsa_experiment_id",
                mh: "iframe_state",
                ve: "ignore_referrer",
                xf: "internal_traffic_results",
                Hb: "is_legacy_converted",
                vb: "is_legacy_loaded",
                we: "is_passthrough",
                sa: "language",
                yf: "legacy_developer_id_string",
                wa: "linker",
                qc: "accept_incoming",
                wb: "decorate_forms",
                N: "domains",
                Ib: "url_position",
                nh: "method",
                vj: "name",
                ad: "new_customer",
                oh: "non_interaction",
                wj: "optimize_id",
                zf: "page_hostname",
                Jb: "page_path",
                Ba: "page_referrer",
                xb: "page_title",
                ph: "passengers",
                qh: "phone_conversion_callback",
                xj: "phone_conversion_country_code",
                rh: "phone_conversion_css_class",
                yj: "phone_conversion_ids",
                sh: "phone_conversion_number",
                th: "phone_conversion_options",
                sc: "quantity",
                bd: "redact_device_info",
                Af: "redact_enhanced_user_id",
                zj: "redact_ga_client_id",
                Aj: "redact_user_id",
                xe: "referral_exclusion_definition",
                Kb: "restricted_data_processing",
                Bj: "retoken",
                Cj: "sample_rate",
                Bf: "screen_name",
                yb: "screen_resolution",
                Dj: "search_term",
                Ma: "send_page_view",
                Lb: "send_to",
                ye: "server_container_url",
                dd: "session_duration",
                ze: "session_engaged",
                Cf: "session_engaged_time",
                eb: "session_id",
                Ae: "session_number",
                ed: "delivery_postal_code",
                uh: "temporary_client_id",
                Df: "topmost_url",
                Ej: "tracking_id",
                Ef: "traffic_type",
                la: "transaction_id",
                uc: "transport_url",
                vh: "trip_type",
                vc: "update",
                fb: "url_passthrough",
                fd: "_user_agent_architecture",
                gd: "_user_agent_bitness",
                hd: "_user_agent_full_version_list",
                jd: "_user_agent_mobile",
                kd: "_user_agent_model",
                ld: "_user_agent_platform",
                md: "_user_agent_platform_version",
                nd: "_user_agent_wow64",
                ma: "user_data",
                wh: "user_data_auto_latency",
                xh: "user_data_auto_meta",
                yh: "user_data_auto_multi",
                zh: "user_data_auto_selectors",
                Ah: "user_data_auto_status",
                Ff: "user_data_mode",
                Gf: "user_data_settings",
                xa: "user_id",
                Na: "user_properties",
                Bh: "us_privacy_string",
                Z: "value",
                wc: "wbraid",
                Ch: "wbraid_multiple_conversions",
                Hh: "_host_name",
                Ih: "_in_page_command",
                Jh: "_is_passthrough_cid",
                Ee: "non_personalized_ads",
                vd: "_sst_parameters",
                Ya: "conversion_label",
                fa: "page_location",
                ub: "global_developer_id_string",
                Be: "tc_privacy_string"
            }
        },
        $d = {},
        ae = Object.freeze(($d[N.g.T] = 1, $d[N.g.kf] = 1, $d[N.g.ce] = 1, $d[N.g.rb] = 1, $d[N.g.U] = 1, $d[N.g.Ja] = 1, $d[N.g.Aa] = 1, $d[N.g.Ka] = 1, $d[N.g.jc] = 1, $d[N.g.Vc] = 1, $d[N.g.Ga] = 1, $d[N.g.Za] = 1, $d[N.g.kc] = 1, $d[N.g.V] = 1, $d[N.g.nf] = 1,
            $d[N.g.nc] = 1, $d[N.g.ne] = 1, $d[N.g.oe] = 1, $d[N.g.pe] = 1, $d[N.g.ih] = 1, $d[N.g.cb] = 1, $d[N.g.kh] = 1, $d[N.g.ue] = 1, $d[N.g.xf] = 1, $d[N.g.Hb] = 1, $d[N.g.vb] = 1, $d[N.g.wa] = 1, $d[N.g.Af] = 1, $d[N.g.xe] = 1, $d[N.g.Kb] = 1, $d[N.g.Ma] = 1, $d[N.g.Lb] = 1, $d[N.g.ye] = 1, $d[N.g.dd] = 1, $d[N.g.Cf] = 1, $d[N.g.ed] = 1, $d[N.g.uc] = 1, $d[N.g.vc] = 1, $d[N.g.Gf] = 1, $d[N.g.Na] = 1, $d[N.g.vd] = 1, $d));
    Object.freeze([N.g.fa, N.g.Ba, N.g.xb, N.g.sa, N.g.Bf, N.g.xa, N.g.uf, N.g.lj]);
    var be = {},
        ce = Object.freeze((be[N.g.Si] = 1, be[N.g.Ti] = 1, be[N.g.Ui] = 1, be[N.g.Vi] = 1, be[N.g.Wi] = 1, be[N.g.Yi] = 1, be[N.g.Zi] = 1, be[N.g.aj] = 1, be[N.g.cj] = 1, be[N.g.ae] = 1, be)),
        de = {},
        ee = Object.freeze((de[N.g.Lg] = 1, de[N.g.Mg] = 1, de[N.g.Zb] = 1, de[N.g.ac] = 1, de[N.g.Ng] = 1, de[N.g.Db] = 1, de[N.g.bc] = 1, de[N.g.Va] = 1, de[N.g.pb] = 1, de[N.g.Wa] = 1, de[N.g.ya] = 1, de[N.g.fc] = 1, de[N.g.Da] = 1, de[N.g.Og] = 1, de)),
        fe = Object.freeze([N.g.T, N.g.rb, N.g.Za]),
        ge = Object.freeze([].concat(fe)),
        he = Object.freeze([N.g.Aa, N.g.oe, N.g.dd, N.g.Cf, N.g.ke]),
        ie = Object.freeze([].concat(he)),
        je = {},
        le = (je[N.g.D] = "1", je[N.g.M] = "2", je),
        me = {},
        ne = Object.freeze((me[N.g.T] = 1, me[N.g.ce] = 1, me[N.g.za] = 1, me[N.g.Eb] = 1, me[N.g.lf] = 1, me[N.g.de] = 1, me[N.g.ee] = 1, me[N.g.fe] = 1, me[N.g.U] = 1, me[N.g.he] = 1, me[N.g.Fa] = 1, me[N.g.ra] = 1, me[N.g.Ja] = 1, me[N.g.Aa] = 1, me[N.g.Ka] = 1, me[N.g.Ga] = 1, me[N.g.oa] = 1, me[N.g.ie] = 1, me[N.g.V] = 1, me[N.g.oj] = 1, me[N.g.Zc] = 1, me[N.g.me] = 1, me[N.g.uf] = 1, me[N.g.pe] = 1, me[N.g.Hb] = 1, me[N.g.vb] = 1, me[N.g.sa] = 1, me[N.g.ad] = 1, me[N.g.fa] = 1, me[N.g.Ba] = 1, me[N.g.qh] = 1, me[N.g.rh] =
            1, me[N.g.sh] = 1, me[N.g.th] = 1, me[N.g.Kb] = 1, me[N.g.Ma] = 1, me[N.g.Lb] = 1, me[N.g.ye] = 1, me[N.g.ed] = 1, me[N.g.la] = 1, me[N.g.uc] = 1, me[N.g.vc] = 1, me[N.g.fb] = 1, me[N.g.ma] = 1, me[N.g.xa] = 1, me[N.g.Z] = 1, me));
    Object.freeze(N.g);
    var oe = {},
        pe = z.google_tag_manager = z.google_tag_manager || {},
        qe = Math.random();
    oe.Mf = "3671";
    oe.ud = Number("0") || 0;
    oe.da = "dataLayer";
    oe.Mi = "ChAI8JuLpAYQ0uibpbCN241pEiMAY8P8TjzxJTA/iJq4hxF0AmRVg/lUQN3n6gHFXK3uTCb5YxoCkis\x3d";
    var re = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        se = {
            __paused: 1,
            __tg: 1
        },
        te;
    for (te in re) re.hasOwnProperty(te) && (se[te] = 1);
    var ue = Da(""),
        ve, we = !1;
    ve = we;
    var xe, ye = !1;
    xe = ye;
    var ze, Ae = !1;
    ze = Ae;
    var Be, Ce = !1;
    Be = Ce;
    oe.Zd = "www.googletagmanager.com";
    var De = "" + oe.Zd + (ve ? "/gtag/js" : "/gtm.js"),
        Ee = null,
        Fe = null,
        Ge = {},
        He = {},
        Ie = {},
        Je = function() {
            var a = pe.sequence || 1;
            pe.sequence = a + 1;
            return a
        };
    oe.Li = "";
    var Ke = "";
    oe.Ie = Ke;
    var Le = new ya,
        Me = {},
        Ne = {},
        Qe = {
            name: oe.da,
            set: function(a, b) {
                J(Na(a, b), Me);
                Oe()
            },
            get: function(a) {
                return Pe(a, 2)
            },
            reset: function() {
                Le = new ya;
                Me = {};
                Oe()
            }
        },
        Pe = function(a, b) {
            return 2 != b ? Le.get(a) : Re(a)
        },
        Re = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Me, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Se = function(a, b) {
            Ne.hasOwnProperty(a) || (Le.set(a, b), J(Na(a, b), Me), Oe())
        },
        Oe = function(a) {
            k(Ne, function(b, c) {
                Le.set(b, c);
                J(Na(b), Me);
                J(Na(b,
                    c), Me);
                a && delete Ne[b]
            })
        },
        Te = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Re(a) : Le.get(a);
            "array" === ac(d) || "object" === ac(d) ? c = J(d) : c = d;
            return c
        };
    var Ue = [],
        Ve = function(a) {
            return void 0 == Ue[a] ? !1 : Ue[a]
        };
    var O = [];
    O[7] = !0;
    O[9] = !0;
    O[27] = !0;
    O[28] = !0;
    O[11] = !0;
    O[13] = !0;
    O[55] = !0;
    O[15] = !0;
    O[16] = !0;
    O[25] = !0;
    O[26] = !0;
    O[34] = !0;
    O[36] = !0;
    O[43] = !0;
    O[52] = !0;
    O[57] = !0;
    O[59] = !0;
    O[61] = !0;

    O[68] = !0;
    O[72] = !0;
    O[73] = !0, Ue[1] = !0;
    O[75] = !0;
    Ue[2] = !0;
    O[76] = !0;
    O[77] = !0;
    O[79] = !0;
    O[80] = !0;
    O[83] = !0;
    O[88] = !0;
    O[89] = !0;
    O[92] = !0;
    O[93] = !0;
    O[94] = !0;
    O[96] = !0;
    O[97] = !0;
    O[113] = !0;
    O[115] = !0;
    O[117] = !0;
    O[121] = !0;
    var R = function(a) {
        return !!O[a]
    };
    var We = function(a) {
        $a("HEALTH", a)
    };
    var Xe;
    try {
        Xe = JSON.parse(Xa("eyIwIjoiSU4iLCIxIjoiSU4tUkoiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6IiJ9"))
    } catch (a) {
        K(123), We(2), Xe = {}
    }
    var Ye = function() {
            var a = !1;
            return a
        },
        Ze = function() {
            return !!Xe["6"]
        },
        $e = function() {
            var a = "";
            return a
        },
        af = function() {
            var a = !1;
            return a
        },
        bf = function() {
            var a = "";
            return a
        };
    var cf, df = !1,
        ef = function(a) {
            if (!df) {
                df = !0;
                cf = cf || {}
            }
            return cf[a]
        };
    var ff = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        gf = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var tf = /:[0-9]+$/,
        uf = /^\d+\.fls\.doubleclick\.net$/,
        vf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        yf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = wf(a.protocol) || wf(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(tf, "").toLowerCase());
            return xf(a, b, c, d, e)
        },
        xf = function(a, b, c, d, e) {
            var f, g = wf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = zf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(tf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || $a("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = vf(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        wf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        zf = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Af = function(a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || $a("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(tf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Bf = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Af(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Cf = function(a) {
            var b = Af(z.location.href),
                c = yf(b, "host", !1);
            if (c && c.match(uf)) {
                var d = yf(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var yg = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var zg = function(a) {
        zg[" "](a);
        return a
    };
    zg[" "] = function() {};
    var Bg = function() {
        var a = Ag,
            b = "Yf";
        if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
        var c = new a;
        return a.Yf = c
    };
    var Ag = function() {
        var a = {};
        this.h = function() {
            var b = yg.h,
                c = yg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[yg.h] = !0
        }
    };
    var Cg = !1,
        Dg = !1,
        Eg = [],
        Fg = {},
        Gg = {},
        Hg = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_data_sharing: !1
        };

    function Ig() {
        var a = Gb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            cps: {},
            default: Jg,
            update: Kg,
            declare: Lg,
            implicit: Mg,
            addListener: Ng,
            notifyListeners: Og,
            setCps: Pg,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            usedImplicit: !1,
            usedSetCps: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Qg(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Lg(a, b, c, d, e) {
        var f = Ig();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            l = g[a] || {},
            m = l.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Qg(n, m, d, e)) {
            var p = {
                region: l.region,
                declare_region: n,
                declare: "granted" === b,
                implicit: l.implicit,
                default: l.default,
                update: l.update,
                quiet: l.quiet
            };
            if ("" !== d || !1 !== l.declare) g[a] = p
        }
    }

    function Mg(a, b) {
        var c = Ig();
        c.active = !0;
        c.usedImplicit = !0;
        var d = c.entries,
            e = d[a] = d[a] || {};
        !1 !== e.implicit && (e.implicit = "granted" === b)
    }

    function Jg(a, b, c, d, e, f) {
        var g = Ig();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        $a("TAGGING", 19);
        if (void 0 == b) $a("TAGGING", 18);
        else {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (Qg(p, n, d, e)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        implicit: m.implicit,
                        default: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.default) l[a] =
                    r;
                q && z.setTimeout(function() {
                    if (l[a] === r && r.quiet) {
                        r.quiet = !1;
                        var t = [a];
                        if (Ve(4))
                            for (var u in Fg) Fg.hasOwnProperty(u) && Fg[u] === a && t.push(u);
                        for (var v = 0; v < t.length; v++) Rg(t[v]);
                        Og();
                        $a("TAGGING", 2)
                    }
                }, f)
            }
        }
    }

    function Kg(a, b) {
        var c = Ig();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Sg(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Sg(c, a),
                l = [a];
            if (Ve(4))
                for (var m in Fg) Fg.hasOwnProperty(m) && Fg[m] === a && l.push(m);
            if (f.quiet) {
                f.quiet = !1;
                for (var n = 0; n < l.length; n++) Rg(l[n])
            } else if (g !== d)
                for (var p = 0; p < l.length; p++) Rg(l[p])
        }
    }

    function Pg(a, b, c, d, e) {
        var f = Ig(),
            g;
        a: {
            var l = f.cps,
                m, n = l[a] || {},
                p = n.region,
                q = c && h(c) ? c.toUpperCase() : void 0;m = d.toUpperCase();
            if (Qg(q, p, m, e.toUpperCase())) {
                var r = {
                    enabled: "granted" === b,
                    region: q
                };
                if ("" !== m || !1 !== n.enabled) {
                    l[a] = r;
                    g = !0;
                    break a
                }
            }
            g = !1
        }
        g && (f.usedSetCps = !0)
    }

    function Ng(a, b) {
        Eg.push({
            consentTypes: a,
            nk: b
        })
    }

    function Rg(a) {
        for (var b = 0; b < Eg.length; ++b) {
            var c = Eg[b];
            ua(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.oi = !0)
        }
    }

    function Og(a, b) {
        for (var c = 0; c < Eg.length; ++c) {
            var d = Eg[c];
            if (d.oi) {
                d.oi = !1;
                try {
                    d.nk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Sg(a, b) {
        var c = a.entries,
            d = c[b] || {},
            e = d.update;
        if (void 0 !== e) return e ? 1 : 2;
        e = d.default;
        if (void 0 !== e) return e ? 1 : 2;
        if (Ve(4) && Fg.hasOwnProperty(b)) {
            var f = c[Fg[b]] || {};
            e = f.update;
            if (void 0 !== e) return e ? 1 : 2;
            e = f.default;
            if (void 0 !== e) return e ? 1 : 2
        }
        e = d.declare;
        return void 0 !== e ? e ? 1 : 2 : Ve(4) && (e = d.implicit, void 0 !== e) ? e ? 3 : 4 : Ve(3) && Hg.hasOwnProperty(b) ? Hg[b] ? 3 : 4 : 0
    }
    var Tg = function(a) {
            var b = Ig();
            b.accessedAny = !0;
            switch (Sg(b, a)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        },
        Ug = function(a) {
            var b = Ig();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Vg = function() {
            if (!Bg().h()) return !1;
            var a = Ig();
            a.accessedAny = !0;
            return a.active
        },
        Wg = function() {
            var a = Ig();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Xg = function(a, b) {
            Ig().addListener(a, b)
        },
        Yg = function(a, b) {
            Ig().notifyListeners(a, b)
        },
        hh = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Ug(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Xg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        ih = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    Tg(l) && !e[l] && (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Xg(d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };

    function jh() {}

    function kh() {};
    var lh = [N.g.D, N.g.M],
        mh = [N.g.D, N.g.M, N.g.Xd, N.g.df],
        nh = {},
        oh = (nh[N.g.D] = 1, nh[N.g.M] = 2, nh[N.g.Xd] = 3, nh[N.g.df] = 4, nh),
        ph = {},
        qh = (ph[N.g.Oi] = "a", ph[N.g.Qi] = "s", ph[N.g.Ri] = "y", ph[N.g.Pi] = "p", ph),
        rh = function(a) {
            for (var b = a[N.g.Yb], c = Array.isArray(b) ? b : [b], d = {
                    Hc: 0
                }; d.Hc < c.length; d = {
                    Hc: d.Hc
                }, ++d.Hc) k(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Yb) {
                        var l = c[e.Hc],
                            m = Xe["0"] || "",
                            n = Xe["1"] || "";
                        Dg = !0;
                        Cg && $a("TAGGING", 20);
                        Ig().declare(f, g, l, m, n)
                    }
                }
            }(d))
        },
        sh = function(a) {
            var b = a[N.g.Yb];
            b && K(40);
            var c = a[N.g.Cg];
            c && K(41);
            for (var d = ua(b) ? b : [b], e = {
                    Ic: 0
                }; e.Ic < d.length; e = {
                    Ic: e.Ic
                }, ++e.Ic) k(a, function(f) {
                return function(g, l) {
                    if (g !== N.g.Yb && g !== N.g.Cg) {
                        var m = d[f.Ic],
                            n = Number(c),
                            p = Xe["0"] || "",
                            q = Xe["1"] || "";
                        Cg = !0;
                        Dg && $a("TAGGING", 20);
                        Ig().default(g, l, m, p, q, n)
                    }
                }
            }(e))
        },
        th = function(a, b) {
            k(a, function(c, d) {
                Cg = !0;
                Dg && $a("TAGGING", 20);
                Ig().update(c, d)
            });
            Yg(b.eventId, b.priorityId)
        },
        uh = function(a) {
            for (var b = a[N.g.Yb], c = Array.isArray(b) ? b : [b], d = {
                    Jc: 0
                }; d.Jc < c.length; d = {
                    Jc: d.Jc
                }, ++d.Jc) k(a, function(e) {
                return function(f, g) {
                    if (f !==
                        N.g.Yb) {
                        var l = c[e.Jc],
                            m = Xe["0"] || "",
                            n = Xe["1"] || "";
                        Ig().setCps(f, g, l, m, n)
                    }
                }
            }(d))
        },
        vh = function() {
            var a = {},
                b;
            for (b in oh)
                if (oh.hasOwnProperty(b)) {
                    var c = oh[b],
                        d, e = Ig();
                    e.accessedAny = !0;
                    d = Sg(e, b);
                    a[c] = d
                }
            if (R(104)) return fc(a, 2);
            var f = R(111) && lh.every(Tg),
                g = R(112);
            return f || g ? fc(a, 1) : fc(a, 0)
        },
        wh = {},
        xh = (wh[N.g.D] = 0, wh[N.g.M] = 1, wh[N.g.Xd] = 2, wh[N.g.df] = 3, wh);

    function yh(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var zh = function() {
            if (R(106)) {
                for (var a = "1", b = 0; b < mh.length; b++) {
                    var c = a,
                        d, e = mh[b],
                        f = Fg[e];
                    d = void 0 === f ? 0 : xh.hasOwnProperty(f) ? 12 | xh[f] : 8;
                    var g = Ig();
                    g.accessedAny = !0;
                    var l = g.entries[e] || {};
                    d = d << 2 | yh(l.implicit);
                    a = c + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [d] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [yh(l.declare) << 4 | yh(l.default) << 2 | yh(l.update)])
                }
                return a
            }
            for (var m = "G1", n = 0; n < lh.length; n++) {
                var p;
                a: {
                    var q = lh[n],
                        r = Ig();r.accessedDefault = !0;
                    switch ((r.entries[q] || {}).default) {
                        case !0:
                            p = 3;
                            break a;
                        case !1:
                            p = 2;
                            break a;
                        default:
                            p = 1
                    }
                }
                switch (p) {
                    case 3:
                        m += "1";
                        break;
                    case 2:
                        m += "0";
                        break;
                    case 1:
                        m += "-"
                }
            }
            return m
        },
        Ah = function() {
            var a = Ig(),
                b = a.cps,
                c = [],
                d;
            for (d in Gg) Gg.hasOwnProperty(d) && Gg[d].enabled && (a.usedSetCps ? b.hasOwnProperty(d) && b[d].enabled && c.push(d) : c.push(d));
            for (var e = "", f = 0; f < c.length; f++) {
                var g = qh[c[f]];
                g && (e += g)
            }
            return "" === e ? "-" : e
        },
        Bh = function() {
            return Tg(N.g.Xd) ? Ze() || Ig().usedSetCps : !1
        },
        Ch = function(a, b) {
            ih(a, b)
        },
        Dh = function(a, b) {
            hh(a, b)
        };
    var Eh = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Fh = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Gh = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Hh = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Ih(a) {
        return "null" !== a.origin
    };
    var Lh = function(a, b, c, d) {
            return Jh(d) ? Fh(a, String(b || Kh()), c) : []
        },
        Oh = function(a, b, c, d, e) {
            if (Jh(e)) {
                var f = Mh(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Nh(f, function(g) {
                        return g.Ne
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Nh(f, function(g) {
                        return g.Jd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ph(a, b, c, d) {
        var e = Kh(),
            f = window;
        Ih(f) && (f.document.cookie = a);
        var g = Kh();
        return e != g || void 0 != c && 0 <= Lh(b, g, !1, d).indexOf(c)
    }
    var Th = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete g[u], t;
                g[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete g[u], t;
                g[u] = !0;
                return t + "; " + u
            }
            if (!Jh(c.kb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Qh(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.hm);
            f = d(f, "samesite",
                c.im);
            c.jm && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Rh(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Sh(q, c.path) && Ph(r, a, b, c.kb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Sh(m, c.path) ? 1 : Ph(f, a, b, c.kb) ? 0 : 1
        },
        Uh = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Th(a, b, c)
        };

    function Nh(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Mh(a, b, c) {
        for (var d = [], e = Lh(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Ne: 1 * m[0] || 1,
                    Jd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Qh = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Vh = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Wh = /(^|\.)doubleclick\.net$/i,
        Sh = function(a, b) {
            return Wh.test(window.document.location.hostname) || "/" === b && Vh.test(a)
        },
        Kh = function() {
            return Ih(window) ? window.document.cookie : ""
        },
        Rh = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Wh.test(e) || Vh.test(e) || a.push("none");
            return a
        },
        Jh = function(a) {
            return Bg().h() && a && Vg() ? Ug(a) ? Tg(a) : !1 : !0
        };
    var Xh = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Eh(a) & 2147483647) : String(b)
        },
        Yh = function(a) {
            return [Xh(a), Math.round(Ha() / 1E3)].join(".")
        },
        ai = function(a, b, c, d, e) {
            var f = Zh(b);
            return Oh(a, f, $h(c), d, e)
        },
        bi = function(a, b, c, d) {
            var e = "" + Zh(c),
                f = $h(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Zh = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        $h = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var ci = function() {
        pe.dedupe_gclid || (pe.dedupe_gclid = "" + Yh());
        return pe.dedupe_gclid
    };
    var di = function() {
        var a = !1;
        return a
    };
    var fi = function(a, b) {
            var c = ei();
            c.pending || (c.pending = []);
            va(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        gi = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = []
        },
        ei = function() {
            var a = Gb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new gi, a.tidr = b);
            return b
        };
    var T = {
            C: "GTM-P9FT69",
            Ua: ""
        },
        hi = {
            mi: "GTM-P9FT69",
            ni: "GTM-P9FT69"
        };
    T.De = Da("");
    var ii = function() {
            return hi.mi ? hi.mi.split("|") : [T.C]
        },
        ji = function() {
            return hi.ni ? hi.ni.split("|") : []
        },
        ki = function(a) {
            var b = ei();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        };

    function li() {
        var a = ei();
        if (a.pending) {
            for (var b, c = [], d = !1, e = ii(), f = ji(), g = {}, l = 0; l < a.pending.length; g = {
                    Wb: g.Wb
                }, l++) g.Wb = a.pending[l], va(g.Wb.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Wb.target.ctid
                }
            }(g)) ? d || (b = g.Wb.onLoad, d = !0) : c.push(g.Wb);
            a.pending = c;
            if (b) try {
                b(T.Ua || "_" + T.C)
            } catch (m) {}
        }
    }
    var mi = function() {
            for (var a = ei(), b = ii(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = ii(), d.destinations = ji()) : a.container[b[c]] = {
                    state: 2,
                    containers: ii(),
                    destinations: ji()
                }
            }
            for (var e = ji(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && K(93);
                g ? (g.state = 2, g.containers = ii(), g.destinations = ji()) : a.destination[e[f]] = {
                    state: 2,
                    containers: ii(),
                    destinations: ji()
                }
            }
            li()
        },
        ni = function(a) {
            return !!ei().container[a]
        },
        oi = function() {
            return {
                ctid: T.C,
                isDestination: T.De
            }
        },
        pi = function() {
            var a =
                ei().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        qi = function() {
            var a = {};
            k(ei().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var ri = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        si = function(a) {
            var b = T.C.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = T.C;
            c.sl = oe.ud;
            c.xl = oe.Mf;
            c.Sk = T.De ? 2 : 1;
            ve ? (c.Xe = ri[b], c.Xe || (c.Xe = 0)) : c.Xe = Be ? 13 : 10;
            ze ? c.kg = 1 : di() ? c.kg = 2 : c.kg = 3;
            var d;
            var e = c.Xe,
                f = c.kg;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + vd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Zl,
                l = 4 + d + (g ? "" + vd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.xl;
            m = n && ud.test(n) ?
                "" + vd(3, 2) + n : "";
            var p, q = c.sl;
            p = q ? "" + vd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + vd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Sk || 0) + w
                }
            } else r = "";
            return l + m + p + r
        };

    function ti(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ui = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function vi() {
        return ib ? !!pb && !!pb.platform : !1
    }

    function wi() {
        return sb("iPhone") && !sb("iPod") && !sb("iPad")
    }

    function xi() {
        wi() || sb("iPad") || sb("iPod")
    };
    ub();
    tb() || sb("Trident") || sb("MSIE");
    sb("Edge");
    !sb("Gecko") || -1 != ob().toLowerCase().indexOf("webkit") && !sb("Edge") || sb("Trident") || sb("MSIE") || sb("Edge"); - 1 != ob().toLowerCase().indexOf("webkit") && !sb("Edge") && sb("Mobile");
    vi() || sb("Macintosh");
    vi() || sb("Windows");
    (vi() ? "Linux" === pb.platform : sb("Linux")) || vi() || sb("CrOS");
    var yi = pa.navigator || null;
    yi && (yi.appVersion || "").indexOf("X11");
    vi() || sb("Android");
    wi();
    sb("iPad");
    sb("iPod");
    xi();
    ob().toLowerCase().indexOf("kaios");
    var zi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        Ai = /#|$/,
        Bi = function(a, b) {
            var c = a.search(Ai),
                d = zi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Ci = /[?&]($|#)/,
        Di = function(a, b, c) {
            for (var d, e = a.search(Ai), f = 0, g, l = []; 0 <= (g = zi(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(Ci, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Ei = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        zg(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Fi = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Gi(a) {
        if (!a || !C.head) return null;
        var b = Hi("META");
        C.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Ii = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Ei(z.top) ? 1 : 2
        },
        Hi = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Ji(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Hi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        l = cb(g, e);
                    0 <= l && Array.prototype.splice.call(g, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            ui(e, "load", f);
            ui(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Li = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Fi(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Ki(c, b)
        },
        Ki = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Ji(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Mi = function() {};
    var Ni = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Oi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.J = {};
            this.Cb = 0;
            var c;
            this.X = null != (c = b.El) ? c : 500;
            var d;
            this.H = null != (d = b.am) ? d : !1;
            this.B = null
        };
    oa(Oi, Mi);
    Oi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.H
            },
            d = Hh(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.X && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.X));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Ni(c), c.internalBlockOnErrors = b.H, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Pi(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Oi.prototype.removeEventListener = function(a) {
        a && a.listenerId && Pi(this, "removeEventListener", null, a.listenerId)
    };
    var Ri = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Qi(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Qi(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Qi(a.purpose.legitimateInterests,
                b) && Qi(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Qi = function(a, b) {
            return !(!a || !a[b])
        },
        Pi = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Si(a)) {
                Ti(a);
                var f = ++a.Cb;
                a.J[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Si = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ti = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.J[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, ui(a.m, "message", a.B))
        },
        Ui = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Ni(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Li({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Vi = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Wi = ti('', 500);

    function Xi() {
        var a = pe.tcf || {};
        return pe.tcf = a
    }
    var cj = function() {
        var a = Xi(),
            b = new Oi(z, {
                El: -1
            });
        Yi(b) && Zi() && K(124);
        if (!Zi() && !a.active && Yi(b)) {
            a.active = !0;
            a.Ue = {};
            $i();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) aj(a), bj(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Vi) Vi.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                l;
                            for (l in Vi)
                                if (Vi.hasOwnProperty(l))
                                    if ("1" ===
                                        l) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Ui(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Ri(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[l] = Ri(c, l, Vi[l]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Ue = d, bj(a))
                    }
                })
            } catch (c) {
                aj(a), bj(a)
            }
        }
    };

    function aj(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function $i() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Wi, a);
        sh(b)
    }

    function Yi(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Si(a) ? !0 : !1
    }
    var Zi = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function bj(a) {
        var b = {},
            c = (b.ad_storage = a.Ue["1"] ? "granted" : "denied", b);
        th(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: dj()
        })
    }
    var dj = function() {
            var a = Xi();
            return a.active ? a.tcString || "" : ""
        },
        ej = function() {
            var a = Xi();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        fj = function(a) {
            if (!Vi.hasOwnProperty(String(a))) return !0;
            var b = Xi();
            return b.active && b.Ue ? !!b.Ue[String(a)] : !0
        };
    var gj = function(a) {
            var b = String(a[gc.zb] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        hj = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var ij = {
            sampleRate: "0.005000",
            Hi: "",
            Gi: Number("5"),
            lm: Number("")
        },
        jj = [];

    function kj(a) {
        jj.push(a)
    }
    var lj = !1,
        mj;
    if (!(mj = hj)) {
        var nj = Math.random(),
            oj = ij.sampleRate;
        mj = nj < Number(oj)
    }
    var pj = mj,
        qj = "https://www.googletagmanager.com/a?id=" + T.C,
        rj = void 0,
        sj = {},
        tj = void 0,
        uj = new function() {
            var a = 5;
            0 < ij.Gi && (a = ij.Gi);
            this.h = 0;
            this.B = [];
            this.m = a
        },
        vj = 1E3;

    function wj(a) {
        var b = rj;
        if (void 0 === b) return "";
        for (var c = [qj], d = 0; d < jj.length; d++) {
            var e = jj[d]({
                eventId: b,
                Bb: !!a,
                zi: function() {
                    lj = !0
                }
            });
            "&" === e[0] && c.push(e)
        }
        c.push("&z=0");
        return c.join("")
    }

    function xj() {
        tj && (z.clearTimeout(tj), tj = void 0);
        if (void 0 !== rj && yj) {
            var a;
            (a = sj[rj]) || (a = uj.h < uj.m ? !1 : 1E3 > Ha() - uj.B[uj.h % uj.m]);
            if (a || 0 >= vj--) K(1), sj[rj] = !0;
            else {
                var b = uj.h++ % uj.m;
                uj.B[b] = Ha();
                var c = wj(!0);
                Ob(c);
                if (lj) {
                    var d = c.replace("/a?", "/td?");
                    Ob(d)
                }
                yj = lj = !1
            }
        }
    }
    var yj = !1;

    function zj(a) {
        sj[a] || (a !== rj && (xj(), rj = a), yj = !0, tj || (tj = z.setTimeout(xj, 500)), 2022 <= wj().length && xj())
    }
    var Aj = wa();

    function Bj() {
        Aj = wa()
    }

    function Cj() {
        return ["&v=3&t=t", "&pid=" + Aj].join("")
    };
    var Dj = void 0;

    function Ej(a) {
        var b = "";
        return b
    };
    vb();
    wi() || sb("iPod");
    sb("iPad");
    !sb("Android") || wb() || vb() || ub() || sb("Silk");
    wb();
    !sb("Safari") || wb() || (tb() ? 0 : sb("Coast")) || ub() || (tb() ? 0 : sb("Edge")) || (tb() ? rb("Microsoft Edge") : sb("Edg/")) || (tb() ? rb("Opera") : sb("OPR")) || vb() || sb("Silk") || sb("Android") || xi();
    var Fj = {},
        Gj = null,
        Hj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Gj) {
                Gj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    Fj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Gj[q] && (Gj[q] = p)
                    }
                }
            }
            for (var r = Fj[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    D = r[(x & 3) << 4 | y >> 4],
                    I = r[(y & 15) << 2 | A >> 6],
                    H = r[A & 63];
                t[w++] = "" + B + D + I + H
            }
            var E = 0,
                L = u;
            switch (b.length - v) {
                case 2:
                    E = b[v + 1], L = r[(E & 15) << 2] || u;
                case 1:
                    var M = b[v];
                    t[w] = "" + r[M >> 2] + r[(M & 3) << 4 | E >> 4] + L + u
            }
            return t.join("")
        };
    var Ij = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Jj() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function Kj() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Lj() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Mj() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Nj() {
        if (!Mj()) return null;
        var a = Jj();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(Ij).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function Tj(a, b, c, d) {
        var e, f = Number(null != a.ib ? a.ib : void 0);
        0 !== f && (e = new Date((b || Ha()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            kb: d
        }
    };
    var Uj;
    var Yj = function() {
            var a = Vj,
                b = Wj,
                c = Xj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Pb(C, "mousedown", d);
                Pb(C, "keyup", d);
                Pb(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Zj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Xj().decorators.push(f)
        },
        ak = function(a, b, c) {
            for (var d = Xj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ka(e, g.callback())
                }
            }
            return e
        };

    function Xj() {
        var a = Gb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var bk = /(.*?)\*(.*?)\*(.*)/,
        ck = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        dk = /^(?:www\.|m\.|amp\.)+/,
        ek = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function fk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var yk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Wa(String(d))))
            }
        var e = b.join("*");
        return ["1", gk(e), e].join("*")
    };

    function gk(a, b) {
        var c = [Db.userAgent, (new Date).getTimezoneOffset(), Db.userLanguage || Db.language, Math.floor(Ha() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Uj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Uj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Uj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function zk() {
        return function(a) {
            var b = Af(z.location.href),
                c = b.search.replace("?", ""),
                d = vf(c, "_gl", !0) || "";
            a.query = Ak(d) || {};
            var e = yf(b, "fragment").match(fk("_gl"));
            a.fragment = Ak(e && e[3] || "") || {}
        }
    }

    function Bk(a, b) {
        var c = fk(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Ck = function(a, b) {
            b || (b = "_gl");
            var c = ek.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Bk(b, (c[2] || "").slice(1)),
                f = Bk(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Dk = function(a) {
            var b = zk(),
                c = Xj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ka(d, e.query), a && Ka(d, e.fragment));
            return d
        },
        Ak = function(a) {
            try {
                var b = Ek(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Xa(d[e + 1]);
                        c[f] = g
                    }
                    $a("TAGGING", 6);
                    return c
                }
            } catch (l) {
                $a("TAGGING",
                    8)
            }
        };

    function Ek(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = bk.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === gk(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                $a("TAGGING", 7)
            }
        }
    }

    function Fk(a, b, c, d) {
        function e(p) {
            p = Bk(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ek.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function Gk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = ak(b, 1, c),
            e = ak(b, 2, c),
            f = ak(b, 3, c);
        if (La(d)) {
            var g = yk(d);
            c ? Hk("_gl", g, a) : Ik("_gl", g, a, !1)
        }
        if (!c && La(e)) {
            var l = yk(e);
            Ik("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Ik(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Hk(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Fk(n, p, q)
            }
    }

    function Ik(a, b, c, d) {
        if (c.href) {
            var e = Fk(a, b, c.href, void 0 === d ? !1 : d);
            hb.test(e) && (c.href = e)
        }
    }

    function Hk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = C.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = Fk(a, b, c.action);
                hb.test(n) && (c.action = n)
            }
        }
    }

    function Vj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Gk(e, e.hostname)
            }
        } catch (g) {}
    }

    function Wj(a) {
        try {
            if (a.action) {
                var b = yf(Af(a.action), "host");
                Gk(a, b)
            }
        } catch (c) {}
    }
    var Jk = function(a, b, c, d) {
            Yj();
            Zj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Kk = function(a, b) {
            Yj();
            Zj(a, [xf(z.location, "host", !0)], b, !0, !0)
        },
        Lk = function() {
            var a = C.location.hostname,
                b = ck.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(dk, ""),
                m = e.replace(dk, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        Mk = function(a, b) {
            return !1 === a ? !1 : a || b || Lk()
        };
    var Nk = ["1"],
        Ok = {},
        Pk = {},
        Rk = function(a) {
            return Ok[Qk(a)]
        },
        Vk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Qk(a.prefix);
            if (!Ok[c])
                if (Sk(c, a.path, a.domain)) {
                    if (Ve(1)) {
                        var d = Pk[Qk(a.prefix)];
                        Tk(a, d ? d.id : void 0, d ? d.hg : void 0)
                    }
                } else {
                    if (Ve(2)) {
                        var e = Cf("auiddc");
                        if (e) {
                            $a("TAGGING", 17);
                            Ok[c] = e;
                            return
                        }
                    }
                    if (b) {
                        var f = Qk(a.prefix),
                            g = Yh();
                        if (0 === Uk(f, g, a)) {
                            var l = Gb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = g)
                        }
                        Sk(c, a.path, a.domain)
                    }
                }
        };

    function Tk(a, b, c) {
        var d = Qk(a.prefix),
            e = Ok[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Ha() / 1E3)));
                    Uk(d, l, a, 1E3 * g)
                }
            }
        }
    }

    function Uk(a, b, c, d) {
        var e = bi(b, "1", c.domain, c.path),
            f = Tj(c, d);
        f.kb = "ad_storage";
        return Uh(a, e, f)
    }

    function Sk(a, b, c) {
        var d = ai(a, b, c, Nk, "ad_storage");
        if (!d) return !1;
        Wk(a, d);
        return !0
    }

    function Wk(a, b) {
        var c = b.split(".");
        5 === c.length ? (Ok[a] = c.slice(0, 2).join("."), Pk[a] = {
            id: c.slice(2, 4).join("."),
            hg: Number(c[4]) || 0
        }) : 3 === c.length ? Pk[a] = {
            id: c.slice(0, 2).join("."),
            hg: Number(c[2]) || 0
        } : Ok[a] = b
    }

    function Qk(a) {
        return (a || "_gcl") + "_au"
    }

    function Xk(a) {
        Vg() ? hh(function() {
            Tg("ad_storage") ? a() : ih(a, "ad_storage")
        }, ["ad_storage"]) : a()
    }

    function Yk(a) {
        var b = Dk(!0),
            c = Qk(a.prefix);
        Xk(function() {
            var d = b[c];
            if (d) {
                Wk(c, d);
                var e = 1E3 * Number(Ok[c].split(".")[1]);
                if (e) {
                    $a("TAGGING", 16);
                    var f = Tj(a, e);
                    f.kb = "ad_storage";
                    var g = bi(d, "1", a.domain, a.path);
                    Uh(c, g, f)
                }
            }
        })
    }

    function Zk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                l = ai(a, e.path, e.domain, Nk, "ad_storage");
            l && (g[a] = l);
            return g
        };
        Xk(function() {
            Jk(f, b, c, d)
        })
    };
    var $k = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                xg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function al(a, b) {
        var c = $k(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].xg] || (d[c[e].xg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].xg].push(g)
            }
        }
        return d
    };
    var bl = /^\w+$/,
        cl = /^[\w-]+$/,
        dl = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        el = function() {
            return Bg().h() && Vg() ? Tg("ad_storage") : !0
        },
        fl = function(a, b) {
            Ug("ad_storage") ? el() ? a() : ih(a, "ad_storage") : b ? $a("TAGGING", 3) : hh(function() {
                fl(a, !0)
            }, ["ad_storage"])
        },
        hl = function(a) {
            return gl(a).map(function(b) {
                return b.aa
            })
        },
        gl = function(a) {
            var b = [];
            if (!Ih(z) || !C.cookie) return b;
            var c = Lh(a, C.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Rd: d.Rd
                }, e++) {
                var f = il(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.Rd = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = va(b, function(q) {
                            return function(r) {
                                return r.aa === q.Rd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = jl(p.labels, n || [])) : b.push({
                        version: l,
                        aa: d.Rd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return kl(b)
        };

    function jl(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function ll(a) {
        return a && "string" == typeof a && a.match(bl) ? a : "_gcl"
    }
    var nl = function() {
            var a = Af(z.location.href),
                b = yf(a, "query", !1, void 0, "gclid"),
                c = yf(a, "query", !1, void 0, "gclsrc"),
                d = yf(a, "query", !1, void 0, "wbraid"),
                e = yf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || vf(f, "gclid");
                c = c || vf(f, "gclsrc");
                d = d || vf(f, "wbraid")
            }
            return ml(b, c, e, d)
        },
        ml = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && cl.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(cl)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        pl = function(a) {
            var b = nl();
            fl(function() {
                ol(b, !1, a)
            })
        };

    function ol(a, b, c, d, e) {
        function f(w, x) {
            var y = ql(w, g);
            y && (Uh(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = ll(c.prefix);
        d = d || Ha();
        var l = Tj(c, d, !0);
        l.kb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = ql("gb", g),
                t = !1;
            if (!b)
                for (var u = gl(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var sl = function(a, b) {
            var c = Dk(!0);
            fl(function() {
                for (var d = ll(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== dl[f]) {
                        var g = ql(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(rl(l), Ha()),
                                n;
                            b: {
                                var p = m;
                                if (Ih(z))
                                    for (var q = Lh(g, C.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (rl(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = Tj(b, m, !0);
                                t.kb = "ad_storage";
                                Uh(g, l, t)
                            }
                        }
                    }
                }
                ol(ml(c.gclid, c.gclsrc), !1, b)
            })
        },
        ql = function(a, b) {
            var c = dl[a];
            if (void 0 !== c) return b + c
        },
        rl = function(a) {
            return 0 !== tl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function il(a) {
        var b = tl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function tl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !cl.test(a[2]) ? [] : a
    }
    var ul = function(a, b, c, d, e) {
            if (ua(b) && Ih(z)) {
                var f = ll(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = ql(a[m], f);
                            if (n) {
                                var p = Lh(n, C.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                fl(function() {
                    Jk(g, b, c, d)
                })
            }
        },
        kl = function(a) {
            return a.filter(function(b) {
                return cl.test(b.aa)
            })
        },
        vl = function(a, b) {
            if (Ih(z)) {
                for (var c = ll(b.prefix), d = {}, e = 0; e < a.length; e++) dl[a[e]] && (d[a[e]] = dl[a[e]]);
                fl(function() {
                    k(d, function(f, g) {
                        var l = Lh(c + g, C.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            u) {
                            return rl(u) - rl(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = rl(m),
                                p = 0 !== tl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== tl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            ol(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function wl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var xl = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Vg()) {
                var c = nl();
                if (wl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    Kk(function() {
                        return d
                    }, 3);
                    Kk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        yl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!el()) return e;
            var f = gl(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.aa].concat(l.labels || [], [b]).join("."),
                    p = Tj(c, m, !0);
                p.kb = "ad_storage";
                Uh(a, n, p)
            }
            return e
        };

    function zl(a, b) {
        var c = ll(b),
            d = ql(a, c);
        if (!d) return 0;
        for (var e = gl(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Al(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Bl = function(a) {
        var b = Math.max(zl("aw", a), Al(el() ? al() : {}));
        return Math.max(zl("gb", a), Al(el() ? al("_gac_gb", !0) : {})) > b
    };
    var Gl = /[A-Z]+/,
        Hl = /\s/,
        Il = function(a, b) {
            if (h(a)) {
                a = Fa(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (Gl.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b && R(120)) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = g(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || Hl.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            W: d + "-" + f[0],
                            I: f
                        }
                    }
                }
            }
        },
        Kl = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = Il(a[d], b);
                e && (c[e.id] = e)
            }
            Jl(c);
            var f = [];
            k(c, function(g, l) {
                f.push(l)
            });
            return f
        };

    function Jl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.I[1] && b.push(d.W)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Ll = function(a, b, c, d) {
        var e = Mb(),
            f;
        if (1 === e) a: {
            var g = De;g = g.toLowerCase();
            for (var l = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Nl = function(a, b, c) {
            if (z[a.functionName]) return b.ng && F(b.ng), z[a.functionName];
            var d = Ml();
            z[a.functionName] = d;
            if (a.Ke)
                for (var e = 0; e < a.Ke.length; e++) z[a.Ke[e]] = z[a.Ke[e]] || Ml();
            a.Se && void 0 === z[a.Se] && (z[a.Se] = c);
            Lb(Ll("https://", "http://", a.vg), b.ng, b.Xk);
            return d
        },
        Ml = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ol = {
            functionName: "_googWcmImpl",
            Se: "_googWcmAk",
            vg: "www.gstatic.com/wcm/loader.js"
        },
        Pl = {
            functionName: "_gaPhoneImpl",
            Se: "ga_wpid",
            vg: "www.gstatic.com/gaphone/loader.js"
        },
        Ql = {
            Ji: "",
            Sj: "5"
        },
        Rl = {
            functionName: "_googCallTrackingImpl",
            Ke: [Pl.functionName, Ol.functionName],
            vg: "www.gstatic.com/call-tracking/call-tracking_" + (Ql.Ji || Ql.Sj) + ".js"
        },
        Sl = {},
        Tl = function(a, b, c, d) {
            K(22);
            if (c) {
                d = d || {};
                var e = Nl(Ol, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.jb && (f.autoreplace = c);
                e(2, d.jb, f, c, 0, Ga(), d.options)
            }
        },
        Ul = function(a, b, c, d) {
            K(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ga()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Sl[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.I.length ? (e.adData = {
                            ak: g.I[0],
                            cl: g.I[1]
                        }, Sl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.W
                        }, Sl[g.id] = !0))
                }(e.gaData || e.adData) && Nl(Rl, d)(d.jb, e, d.options)
            }
        },
        Vl = function() {
            var a = !1;
            return a
        },
        Wl = function(a, b) {
            if (a)
                if (di()) {} else {
                    if (h(a)) {
                        var c =
                            Il(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = S(b, N.g.yj);
                    if (f && ua(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var l = Il(f[g]);
                            l && (d.push(l), (a.id === l.id || a.id === a.W && a.W === l.W) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = S(b, N.g.sh),
                            n;
                        if (m) {
                            ua(m) ? n = m : n = [m];
                            var p = S(b, N.g.qh),
                                q = S(b, N.g.rh),
                                r = S(b, N.g.th),
                                t = S(b, N.g.xj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) Ul(d, n[w], t, {
                                        jb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.I[1]) Vl() ? Ul([a], n[w], t || "US", {
                                jb: u,
                                options: r
                            }) : Tl(a.I[0], a.I[1], n[w], {
                                jb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (Vl()) Ul([a], n[w], t || "US", {
                                    jb: u
                                });
                                else {
                                    var x = a.W,
                                        y = n[w],
                                        A = {
                                            jb: u
                                        };
                                    K(23);
                                    if (y) {
                                        A = A || {};
                                        var B = Nl(Pl, A, x),
                                            D = {};
                                        void 0 !== A.jb ? D.receiver = A.jb : D.replace = y;
                                        D.ga_wpid = x;
                                        D.destination = y;
                                        B(2, Ga(), D)
                                    }
                                }
                        }
                    }
                }
        };
    var Xl = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = J(c.eventMetadata || {});
        this.isAborted = !1
    };
    Xl.prototype.copyToHitData = function(a, b) {
        var c = S(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var Yl = function(a, b, c) {
        var d = ef(a.target.W);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Zl(a) {
        return {
            getDestinationId: function() {
                return a.target.W
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.h, b)
            },
            gm: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var sm = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.J = d;
            this.m = e;
            this.H = f;
            this.X = g;
            this.B = l;
            this.eventMetadata = m;
            this.K = n;
            this.O = p;
            this.isGtmEvent = q
        },
        S = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.J[b]) return a.J[b];
            if (void 0 !== a.m[b]) return a.m[b];
            pj && tm(a, a.H[b], a.X[b]) && (K(71), K(79));
            return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        um = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.J);
            b(a.m);
            b(a.H);
            if (pj)
                for (var d = Object.keys(a.X), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        K(71);
                        K(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        vm = function(a, b, c) {
            function d(m) {
                G(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.H[b]), d(a.m[b]), d(a.J[b]));
            c && 2 !== c || d(a.h[b]);
            if (pj) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.X[b]), d(a.m[b]), d(a.J[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || tm(a, e, l)) K(71), K(81);
                f = g;
                e = l
            }
            return f ? e :
                void 0
        },
        wm = function(a) {
            var b = [N.g.Rc, N.g.Nc, N.g.Oc, N.g.Pc, N.g.Qc, N.g.Sc, N.g.Tc],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.J) || e(a.m)) return c;
            e(a.H);
            if (pj) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.X);
                tm(a, c, f) && (K(71), K(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        tm = function(a, b, c) {
            if (!pj) return !1;
            try {
                if (b === c) return !1;
                var d = ac(b);
                if (d !== ac(c) || !(G(b) && G(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e =
                            0; e < b.length; e++)
                        if (tm(a, b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || tm(a, b[g], c[g])) return !0
                }
            } catch (l) {
                K(72)
            }
            return !1
        },
        xm = function(a, b) {
            this.If = a;
            this.Hj = b;
            this.H = {};
            this.qd = {};
            this.h = {};
            this.J = {};
            this.m = {};
            this.pd = {};
            this.B = {};
            this.Mc = function() {};
            this.Cb = function() {};
            this.X = !1
        },
        ym = function(a, b) {
            a.H = b;
            return a
        },
        zm = function(a, b) {
            a.qd = b;
            return a
        },
        Am = function(a, b) {
            a.h = b;
            return a
        },
        Bm = function(a, b) {
            a.J = b;
            return a
        },
        Cm = function(a, b) {
            a.m =
                b;
            return a
        },
        Dm = function(a, b) {
            a.pd = b;
            return a
        },
        Em = function(a, b) {
            a.B = b || {};
            return a
        },
        Fm = function(a, b) {
            a.Mc = b;
            return a
        },
        Gm = function(a, b) {
            a.Cb = b;
            return a
        },
        Hm = function(a, b) {
            a.X = b;
            return a
        },
        Im = function(a) {
            return new sm(a.If, a.Hj, a.H, a.qd, a.h, a.J, a.m, a.pd, a.B, a.Mc, a.Cb, a.X)
        };

    function Mm(a) {
        var b = S(a.h, N.g.vb),
            c = S(a.h, N.g.Hb);
        R(107) && b && !c ? (a.eventName !== N.g.ja && a.eventName !== N.g.ae && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0)
    };

    function Om() {
        return "attribution-reporting"
    }

    function Pm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Qm = !1;

    function Rm() {
        if (Pm("join-ad-interest-group") && sa(Db.joinAdInterestGroup)) return !0;
        Qm || (Gi('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Qm = !0);
        return Pm("join-ad-interest-group") && sa(Db.joinAdInterestGroup)
    }

    function Sm(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ha() - d) {
                $a("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                $a("TAGGING", 10);
                return
            }
        } catch (e) {}
        Nb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ha()
        }, c)
    }

    function Tm() {
        return "https://td.doubleclick.net"
    };
    var Um = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Vm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Wm = /^\d+\.fls\.doubleclick\.net$/,
        Xm = /;gac=([^;?]+)/,
        Ym = /;gacgb=([^;?]+)/,
        Zm = /;gclaw=([^;?]+)/,
        $m = /;gclgb=([^;?]+)/;

    function an(a, b) {
        if (Wm.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(Um) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var bn = function(a, b, c) {
        var d = el() ? al("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = yl("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            rk: f ? e.join(";") : "",
            qk: an(d, Ym)
        }
    };

    function cn(a, b, c) {
        if (Wm.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Vm)) return [{
                aa: d[1]
            }]
        } else return gl((a || "_gcl") + b);
        return []
    }
    var dn = function(a) {
            return cn(a, "_aw", Zm).map(function(b) {
                return b.aa
            }).join(".")
        },
        en = function(a) {
            return cn(a, "_gb", $m).map(function(b) {
                return b.aa
            }).join(".")
        },
        fn = function(a, b) {
            var c = yl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var gn = function() {
        if (sa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Tn = {
        F: {
            Bg: "ads_conversion_hit",
            ef: "container_execute_start",
            Eg: "container_setup_end",
            ff: "container_setup_start",
            Dg: "container_execute_end",
            Fg: "container_yield_end",
            hf: "container_yield_start",
            Dh: "event_execute_end",
            Eh: "event_setup_end",
            od: "event_setup_start",
            Fh: "ga4_conversion_hit",
            rd: "page_load",
            Ul: "pageview",
            Ab: "snippet_load",
            Ph: "tag_callback_error",
            Qh: "tag_callback_failure",
            Rh: "tag_callback_success",
            Sh: "tag_execute_end",
            yc: "tag_execute_start"
        }
    };
    var Un = !1,
        Vn = "L S Y E TC HTC".split(" "),
        Wn = ["S", "E"],
        Xn = ["TS", "TE"];
    var yo = function(a) {},
        zo = function(a) {},
        Yn = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var l = {};
            return l
        },
        Zn = function(a) {
            var b = !1;
            return b
        },
        $n = function(a, b) {},
        Ao = function() {
            var a = {};
            return a
        },
        ro = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        Bo = function() {},
        Co = function(a, b, c) {};
    var Do = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Eo = function(a, b, c) {
        var d = Bi(a, "fmt");
        if (b) {
            var e = Bi(a, "random"),
                f = Bi(a, "label") || "";
            if (!e) return !1;
            var g = Hj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Do(g, b)) return !1
        }
        d && 4 != d && (a = Di(a, "rfmt", d));
        var l = Di(a, "fmt", 4);
        Lb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Uo = function() {
            this.h = {}
        },
        Vo = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Wo = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Yo = function(a, b, c, d) {};

    function $o(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Af("" + c + b).href
        }
    }

    function ap() {
        return !!oe.Ie && "SGTM_TOKEN" !== oe.Ie.split("@@").join("")
    }

    function bp(a) {
        for (var b = cp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = S(a, d.value);
            if (e) return e
        }
    }

    function cp() {
        var a = [];
        R(113) && a.push(N.g.ye);
        a.push(N.g.uc);
        return a
    };
    var ep = function(a, b, c, d) {
            if (!dp() && !ni(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + oe.da,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = ap();
                l && (f += "&sign=" + oe.Ie);
                var m = xe || ze ? $o(b, e + f) : void 0;
                if (!m) {
                    var n = oe.Zd + e;
                    l && Fb && g && (n = Fb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = Ll("https://", "http://", n + f)
                }
                var p = oi();
                ei().container[a] = {
                    state: 1,
                    context: d,
                    parent: p
                };
                fi({
                    ctid: a,
                    isDestination: !1
                });
                Lb(m)
            }
        },
        fp = function(a, b, c, d) {
            var e;
            if (e = !dp()) {
                var f = ei().destination[a];
                e = !(f && f.state)
            }
            if (e)
                if (pi()) ei().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: oi()
                }, fi({
                    ctid: a,
                    isDestination: !0
                }, d), K(91);
                else {
                    var g = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + oe.da + "&cx=c";
                    ap() && (g += "&sign=" + oe.Ie);
                    var l = xe || ze ? $o(b, g) : void 0;
                    l || (l = Ll("https://", "http://", oe.Zd + g));
                    ei().destination[a] = {
                        state: 1,
                        context: c,
                        parent: oi()
                    };
                    fi({
                        ctid: a,
                        isDestination: !0
                    }, d);
                    Lb(l)
                }
        };

    function dp() {
        if (di()) {
            return !0
        }
        return !1
    };
    var hp = function(a, b) {
        gp(a).entity.push(b)
    };

    function gp(a) {
        var b, c = pe.r;
        c || (c = {
            container: {}
        }, pe.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: []
        }, b.container[a] = d);
        return d
    };
    var ip = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        jp = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        kp = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        lp = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        op = function(a) {
            var b = Pe("gtm.allowlist") || Pe("gtm.whitelist");
            b && K(9);
            ve && (b = ["google", "gtagfl", "lcl", "zone"]);
            mp() && (ve ?
                K(116) : K(117), np && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ma(Ea(b), jp),
                d = Pe("gtm.blocklist") || Pe("gtm.blacklist");
            d || (d = Pe("tagTypeBlacklist")) && K(3);
            d ? K(8) : d = [];
            mp() && (d = Ea(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ea(d).indexOf("google") && K(2);
            var e = d && Ma(Ea(d), kp),
                f = {};
            return function(g) {
                var l = g && g[gc.zb];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = He[l] || [],
                    n = a(l, m);
                if (R(117)) {
                    var p;
                    p = gp(T.Ua || "_" + T.C).entity;
                    for (var q = 0; q < p.length; q++) try {
                        n = n && p[q](l, m)
                    } catch (y) {
                        n = !1
                    }
                }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        K(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = za(e, m || []);
                        w && K(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = za(e, lp));
                return f[l] = x
            }
        },
        np = !1;
    var mp = function() {
        return ip.test(z.location && z.location.hostname)
    };
    var pp = "",
        qp = [];

    function rp(a) {
        var b = "";
        pp && (b = "&dl=" + encodeURIComponent(pp));
        0 < qp.length && (b += "&tdp=" + qp.join("."));
        a.Bb && (pp = "", qp.length = 0, b && a.zi());
        return b
    };
    var sp = [];

    function tp(a) {
        if (!sp.length) return "";
        var b = "&tdc=" + sp.join("!");
        a.Bb && (a.zi(), sp.length = 0);
        return b
    };
    var up = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        vp = {},
        wp = Object.freeze((vp[N.g.Ma] = !0, vp)),
        xp = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        zp = function(a, b, c) {
            if (pj && "config" === a && !(1 < Il(b).I.length)) {
                var d, e = Gb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.H);
                J(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = yp(d[l], f);
                    m.length && (xp && console.log(m), g.push(l))
                }
                g.length && (g.length && pj && sp.push(b + "*" + g.join(".")), $a("TAGGING", up[C.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Ap(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function yp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? wp[q] : t
            },
            f;
        for (f in Ap(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === ac(l) || "array" === ac(l),
                p = "object" === ac(m) || "array" === ac(m);
            if (n && p) yp(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Bp = !1,
        Cp = 0,
        Dp = [];

    function Ep(a) {
        if (!Bp) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Bp = !0;
                for (var e = 0; e < Dp.length; e++) F(Dp[e])
            }
            Dp.push = function() {
                for (var f = 0; f < arguments.length; f++) F(arguments[f]);
                return 0
            }
        }
    }

    function Fp() {
        if (!Bp && 140 > Cp) {
            Cp++;
            try {
                C.documentElement.doScroll("left"), Ep()
            } catch (a) {
                z.setTimeout(Fp, 50)
            }
        }
    }
    var Gp = function(a) {
        Bp ? a() : Dp.push(a)
    };
    var Hp = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: T.C
        }
    };

    function Ip(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Kp = function(a, b) {
            this.h = !1;
            this.H = [];
            this.J = {
                tags: []
            };
            this.X = !1;
            this.m = this.B = 0;
            Jp(this, a, b)
        },
        Lp = function(a, b, c, d) {
            if (se.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            G(d) && (e = J(d, e));
            e.id = c;
            e.status = "timeout";
            return a.J.tags.push(e) - 1
        },
        Mp = function(a, b, c, d) {
            var e = a.J.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Np = function(a) {
            if (!a.h) {
                for (var b = a.H, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.H.length = 0
            }
        },
        Jp = function(a, b, c) {
            void 0 !== b && Op(a, b);
            c && z.setTimeout(function() {
                return Np(a)
            }, Number(c))
        },
        Op = function(a,
            b) {
            var c = Ja(function() {
                return F(function() {
                    b(T.C, a.J)
                })
            });
            a.h ? c() : a.H.push(c)
        },
        Pp = function(a) {
            a.B++;
            return Ja(function() {
                a.m++;
                a.X && a.m >= a.B && Np(a)
            })
        },
        Qp = function(a) {
            a.X = !0;
            a.m >= a.B && Np(a)
        };
    var Rp = {},
        Tp = function() {
            return z[Sp()]
        },
        Up = !1;
    var Vp = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ga());
                z[b] = c
            }
            return z[b]
        },
        Wp = function(a) {
            if (Vg()) {
                var b = Tp();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Sp() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Xp = function(a) {},
        Yp = function(a, b) {
            return function() {
                var c = Tp(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var Iq = {},
        Jq = {};

    function Kq(a, b) {
        if (pj) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            Iq[a] = "&e=" + c + "&eid=" + a;
            zj(a)
        }
    }

    function Lq(a) {
        var b = a.eventId,
            c = a.Bb;
        if (!Iq[b]) return "";
        var d = Jq[b] ? "" : "&es=1";
        d += Iq[b];
        c && (Jq[b] = !0);
        return d
    };
    var Mq = {};

    function Nq(a, b) {
        pj && (Mq[a] = Mq[a] || {}, Mq[a][b] = (Mq[a][b] || 0) + 1)
    }

    function Oq(a) {
        for (var b = a.eventId, c = a.Bb, d = Object.entries(Mq[b] || {}), e = [], f = 0; f < d.length; f++) {
            var g = fa(d[f]),
                l = g.next().value,
                m = g.next().value;
            e.push("" + l + m)
        }
        c && delete Mq[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var Pq = {},
        Qq = {
            aev: "1",
            c: "2",
            jsm: "3",
            v: "4",
            j: "5",
            smm: "6",
            rmm: "7",
            input: "8"
        };

    function Rq(a, b, c) {
        if (pj) {
            Pq[a] = Pq[a] || [];
            var d = Qq[b] || "0",
                e;
            e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === C ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || G(c) ? "0" : "e";
            Pq[a].push("" + d + e)
        }
    }

    function Sq(a) {
        var b = a.eventId,
            c = Pq[b] || [];
        if (!c.length) return "";
        a.Bb && delete Pq[b];
        return "&pcr=" + c.join(".")
    };
    var Tq = {},
        Uq = {};

    function Vq(a, b, c) {
        if (pj && b) {
            var d = gj(b);
            Tq[a] = Tq[a] || [];
            Tq[a].push(c + d);
            var e = b["function"];
            if (!e) throw Error("Error: No function name given for function call.");
            var f = (Jc[e] ? "1" : "2") + d;
            Uq[a] = Uq[a] || [];
            Uq[a].push(f);
            zj(a)
        }
    }

    function Wq(a) {
        var b = a.eventId,
            c = a.Bb,
            d = "",
            e = Tq[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = Uq[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete Tq[b], delete Uq[b]);
        return d
    };

    function Xq(a, b, c, d) {
        var e = Hc[a],
            f = Yq(a, b, c, d);
        if (!f) return null;
        var g = Rc(e[gc.Oh], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Xq(l.index, {
                K: f,
                O: 1 === l.ei ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Yq(a, b, c, d) {
        function e() {
            if (f[gc.Mj]) l();
            else {
                var w = Sc(f, c, []),
                    x = w[gc.Ki];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Tg(x[y])) {
                            l();
                            return
                        }
                var A = Lp(c.Mb, String(f[gc.zb]), Number(f[gc.wd]), w[gc.Nj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = Ha() - H;
                        Vq(c.id, Hc[a], "5");
                        Mp(c.Mb, A, "success", E);
                        R(70) && Co(c, f, Tn.F.Rh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = Ha() - H;
                        Vq(c.id, Hc[a], "6");
                        Mp(c.Mb, A, "failure", E);
                        R(70) && Co(c, f, Tn.F.Qh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Vq(c.id, f, "1");
                var D = function() {
                    We(3);
                    var E = Ha() - H;
                    Vq(c.id, f, "7");
                    Mp(c.Mb, A, "exception", E);
                    R(70) && Co(c, f, Tn.F.Ph);
                    B || (B = !0, l())
                };
                if (R(70)) {
                    var I = Yn(Tn.F.yc, T.C, c.id, Number(f[gc.wd]), c.name, gj(f));
                    Zn(I)
                }
                var H = Ha();
                try {
                    Qc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    D(E)
                }
                R(70) && Co(c, f, Tn.F.Sh)
            }
        }
        var f = Hc[a],
            g = b.K,
            l = b.O,
            m = b.terminate;
        if (c.ag(f)) return null;
        var n = Rc(f[gc.Th], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Xq(p.index, {
                    K: g,
                    O: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.ei ? m : q
        }
        if (f[gc.Kh] || f[gc.Pj]) {
            var r = f[gc.Kh] ? Ic : c.Cl,
                t = g,
                u = l;
            if (!r[a]) {
                e = Ja(e);
                var v = Zq(a, r, e);
                g = v.K;
                l = v.O
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Zq(a, b, c) {
        var d = [],
            e = [];
        b[a] = $q(d, e, c);
        return {
            K: function() {
                b[a] = ar;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            O: function() {
                b[a] = br;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function $q(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function ar(a) {
        a()
    }

    function br(a, b) {
        b()
    };
    var dr = function(a, b) {
            return 1 === arguments.length ? cr("config", a) : cr("config", a, b)
        },
        er = function(a, b, c) {
            c = c || {};
            c[N.g.Lb] = a;
            return cr("event", b, c)
        };

    function cr(a) {
        return arguments
    }
    var fr = function() {
        this.h = [];
        this.m = []
    };
    fr.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    fr.prototype.listen = function(a) {
        this.m.push(a)
    };
    fr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    fr.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var hr = function(a, b, c) {
            gr().enqueue(a, b, c)
        },
        jr = function() {
            var a = ir;
            gr().listen(a)
        };

    function gr() {
        var a = pe.mb;
        a || (a = new fr, pe.mb = a);
        return a
    }
    var rr = function(a) {
            var b = pe.zones;
            return b ? b.getIsAllowedFn(ii(), a) : function() {
                return !0
            }
        },
        sr = function(a) {
            var b = pe.zones;
            return b ? b.isActive(ii(), a) : !0
        };
    var vr = function(a, b) {
        for (var c = [], d = 0; d < Hc.length; d++)
            if (a[d]) {
                var e = Hc[d];
                var f = Pp(b.Mb);
                try {
                    var g = Xq(d, {
                        K: f,
                        O: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = e["function"];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Jc[l];
                        c.push({
                            Ci: d,
                            ri: (m ? m.priorityOverride || 0 : 0) || Ip(e[gc.zb], 1) || 0,
                            execute: g
                        })
                    } else tr(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(ur);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function ur(a, b) {
        var c, d = b.ri,
            e = a.ri;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ci,
                l = b.Ci;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function tr(a, b) {
        if (pj) {
            var c = function(d) {
                var e = b.ag(Hc[d]) ? "3" : "4",
                    f = Rc(Hc[d][gc.Oh], b, []);
                f && f.length && c(f[0].index);
                Vq(b.id, Hc[d], e);
                var g = Rc(Hc[d][gc.Th], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var yr = !1,
        wr;
    var Dr = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (R(70)) {
            var e = Yn(Tn.F.od, T.C, b, void 0, d);
            Zn(e)
        }
        if ("gtm.js" === d) {
            if (yr) return !1;
            yr = !0
        }
        var f, g = !1;
        if (sr(b)) f = rr(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            g = !0;
            f = rr(Number.MAX_SAFE_INTEGER)
        }
        Kq(b, d);
        var l = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                ag: op(f),
                Cl: [],
                ki: function() {
                    K(6);
                    We(0)
                },
                Xh: zr(),
                Yh: Ar(b),
                Mb: new Kp(function() {
                    if (R(70)) {
                        var v = Yn(Tn.F.Dh, T.C, b, void 0, d);
                        if (Zn(v)) {
                            var w =
                                Yn(Tn.F.od, T.C, b, void 0, d);
                            $n(v, w)
                        }
                        if ("gtm.load" === d) {
                            var x = Yn(Tn.F.Dg, T.C);
                            if (Zn(x)) {
                                var y = Yn(Tn.F.ef, T.C);
                                $n(x, y)
                            }
                            Bo();
                        }
                    }
                    l && l.apply(l, [].slice.call(arguments, 0))
                }, m)
            };
        R(119) && (n.wi = Nq);
        var p = Wc(n);
        g && (p = Br(p));
        if (R(70)) {
            var q = Yn(Tn.F.Eh, T.C, b, void 0, d);
            if (Zn(q)) {
                var r =
                    Yn(Tn.F.od, T.C, b, void 0, d);
                $n(q, r)
            }
        }
        var t = vr(p, n),
            u = !1;
        Qp(n.Mb);
        "gtm.js" !== d && "gtm.sync" !== d || Xp(T.C);
        return Cr(p, t) || u
    };

    function Ar(a) {
        return function(b) {
            cc(b) || Rq(a, "input", b)
        }
    }

    function zr() {
        var a = {};
        a.event = Te("event", 1);
        a.ecommerce = Te("ecommerce", 1);
        a.gtm = Te("gtm");
        a.eventModel = Te("eventModel");
        return a
    }

    function Br(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Hc[c][gc.zb]);
                if (re[d] || void 0 !== Hc[c][gc.Qj] || Ie[d] || Ip(d, 2)) b[c] = !0
            }
        return b
    }

    function Cr(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Hc[c] && !se[String(Hc[c][gc.zb])]) return !0;
        return !1
    }
    var Er = {};

    function Fr(a, b, c) {
        pj && void 0 !== a && (Er[a] = Er[a] || [], Er[a].push(c + b), zj(a))
    }

    function Gr(a) {
        var b = a.eventId,
            c = a.Bb,
            d = "",
            e = Er[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Er[b];
        return d
    };
    var Ir = function(a, b, c, d) {
            var e = Il(c, d.isGtmEvent);
            e && Hr.push("event", [b, a], e, d)
        },
        Jr = function(a, b, c, d) {
            var e = Il(c, d.isGtmEvent);
            e && Hr.push("get", [a, b], e, d)
        },
        Kr = function() {
            this.status = 1;
            this.H = {};
            this.h = {};
            this.J = {};
            this.X = null;
            this.B = {};
            this.m = !1
        },
        Lr = function(a, b, c, d) {
            var e = Ha();
            this.type = a;
            this.B = e;
            this.h = b;
            this.m = c;
            this.messageContext = d
        },
        Mr = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        Nr = function(a, b) {
            var c = b.W;
            return a.m[c] = a.m[c] || new Kr
        },
        Or = function(a, b, c, d) {
            if (d.h) {
                var e = Nr(a, d.h),
                    f = e.X;
                if (f) {
                    var g =
                        J(c),
                        l = J(e.H[d.h.id]),
                        m = J(e.B),
                        n = J(e.h),
                        p = J(a.B),
                        q = {};
                    if (pj) try {
                        q = J(Me)
                    } catch (v) {
                        K(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Fr(d.messageContext.eventId, r, v);
                            var w = g[N.g.nc];
                            w && F(w)
                        },
                        u = Im(Hm(Gm(Fm(Em(Cm(Bm(Dm(Am(zm(ym(new xm(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2")
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3")
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Fr(d.messageContext.eventId, r, "1"), zp(d.type, d.h.id, u),
                            f(d.h.id, b, d.B, u)
                    } catch (v) {
                        Fr(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Mr.prototype.register = function(a, b, c) {
        var d = Nr(this, a);
        3 !== d.status && (d.X = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Mr.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Nr(this, c).status && (Nr(this, c).status = 2, this.push("require", [{}], c, {})), Nr(this, c).m && (d.deferrable = !1));
        this.h.push(new Lr(a, c, b, d));
        d.deferrable || this.flush()
    };
    Mr.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || Nr(this, g).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Nr(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.m[0], function(r, t) {
                            J(Na(r, t), b.B)
                        });
                        break;
                    case "config":
                        var l = Nr(this, g);
                        e.lb = {};
                        k(f.m[0], function(r) {
                            return function(t, u) {
                                J(Na(t, u), r.lb)
                            }
                        }(e));
                        var m = !!e.lb[N.g.vc];
                        delete e.lb[N.g.vc];
                        var n = g.W === g.id;
                        m || (n ? l.B = {} : l.H[g.id] = {});
                        l.m && m || Or(this, N.g.ja, e.lb, f);
                        l.m = !0;
                        n ? J(e.lb, l.B) : (J(e.lb, l.H[g.id]), K(70));
                        d = !0;
                        break;
                    case "event":
                        e.Qd = {};
                        k(f.m[0], function(r) {
                            return function(t, u) {
                                J(Na(t, u), r.Qd)
                            }
                        }(e));
                        Or(this, f.m[1], e.Qd, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[N.g.La] = f.m[0], p[N.g.ab] = f.m[1], p);
                        Or(this, N.g.Ea, q, f)
                }
                this.h.shift();
                Pr(this, f)
            }
            e = {
                lb: e.lb,
                Qd: e.Qd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Pr = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = Nr(a, b.h).J[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.J)
                                for (var g = f.J[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        Qr = function(a, b) {
            var c = Hr,
                d = J(b);
            J(Nr(c, a).h, d);
            Nr(c, a).h = d
        },
        Hr = new Mr;
    var Rr = {},
        Sr = {},
        Tr = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Vd: e.Vd,
                    Sd: e.Sd
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) e.Vd = Il(g, b), e.Vd && (va(ji(), function(q) {
                    return function(r) {
                        return q.Vd.W === r
                    }
                }(e)) ? c.push(g) : d.push(g));
                else {
                    var l = Rr[g] || [];
                    e.Sd = {};
                    l.forEach(function(q) {
                        return function(r) {
                            return q.Sd[r] = !0
                        }
                    }(e));
                    for (var m = ii(), n = 0; n < m.length; n++)
                        if (e.Sd[m[n]]) {
                            c = c.concat(ji());
                            break
                        }
                    var p = Sr[g] || [];
                    p.length && (c = c.concat(p))
                }
            }
            return {
                Uk: c,
                Wk: d
            }
        },
        Ur = function(a) {
            k(Rr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Vr = function(a) {
            k(Sr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Wr = "HA GF G UA AW DC MC".split(" "),
        Xr = !1,
        Yr = !1;

    function Zr(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Je()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var $r = void 0,
        as = void 0;

    function bs(a, b, c) {
        var d = J(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        var e = J(b);
        J(c, e);
        hr(dr(ii()[0], e), a.eventId, d)
    }

    function cs(a) {
        for (var b = cp(), c = fa(b), d = c.next(); !d.done; d = c.next()) {
            var e = d.value,
                f = a && a[e] || Hr.B[e];
            if (f) return f
        }
    }
    var ds = {
            config: function(a, b) {
                var c = R(122),
                    d = Zr(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !G(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = Il(a[1], b.isGtmEvent);
                    if (f) {
                        var g, l, m;
                        a: {
                            if (!T.De) {
                                var n = ki(oi());
                                if (n && n.parent && n.context && 1 === n.context.source && 0 !== n.parent.ctid.indexOf("GTM-")) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Yk: ki(p),
                                        Tk: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.Yk, l = r.Tk);
                        Kq(d.eventId, "gtag.config");
                        var t = f.W,
                            u = f.id !== t;
                        if (u ? -1 === ji().indexOf(t) : -1 === ii().indexOf(t)) {
                            if (!(c &&
                                    b.inheritParentConfig || R(61) && e[N.g.vb])) {
                                var v = cs(e);
                                if (u) fp(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    $r ? bs(b, w, $r) : as || (as = J(w))
                                } else ep(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (K(128), l && K(130), c && b.inheritParentConfig)) {
                                var x = e;
                                as ? bs(b, as, x) : !x[N.g.vc] && ue && $r || ($r = J(x));
                                return
                            }
                            if (ue && !u && !e[N.g.vc]) {
                                var y = Yr;
                                Yr = !0;
                                if (y) return
                            }
                            Xr || K(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Vr(f.id);
                                    var A = f.id,
                                        B = e[N.g.ue] || "default";
                                    B = String(B).split(",");
                                    for (var D = 0; D < B.length; D++) {
                                        var I = Sr[B[D]] || [];
                                        Sr[B[D]] = I;
                                        0 > I.indexOf(A) && I.push(A)
                                    }
                                } else {
                                    Ur(f.id);
                                    var H = f.id,
                                        E = e[N.g.ue] || "default";
                                    E = E.toString().split(",");
                                    for (var L = 0; L < E.length; L++) {
                                        var M = Rr[E[L]] || [];
                                        Rr[E[L]] = M;
                                        0 > M.indexOf(H) && M.push(H)
                                    }
                                }
                            delete e[N.g.ue];
                            var Y = b.eventMetadata || {};
                            Y.hasOwnProperty("is_external_event") || (Y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = Y;
                            delete e[N.g.nc];
                            for (var W = u ? [f.id] : ji(), Q = 0; Q < W.length; Q++) {
                                var P =
                                    e,
                                    ha = J(b),
                                    ba = Il(W[Q], ha.isGtmEvent);
                                ba && Hr.push("config", [P], ba, ha)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    K(39);
                    var c = Zr(a, b),
                        d = a[1];
                    "default" === d ? sh(a[2]) : "update" === d ? th(a[2], c) : "declare" === d ? b.fromContainerExecution && rh(a[2]) : "core_platform_services" === d && uh(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!G(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = J(e), e[N.g.nc] && (g.eventCallback = e[N.g.nc]), e[N.g.oe] &&
                        (g.eventTimeout = e[N.g.oe]));
                    var l = Zr(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[N.g.Lb];
                    void 0 === r && (r = Pe(N.g.Lb, 2), void 0 === r && (r = "default"));
                    if (h(r) || ua(r)) {
                        var t;
                        b.isGtmEvent && R(120) ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Tr(t, b.isGtmEvent),
                            v = u.Uk,
                            w = u.Wk;
                        if (w.length)
                            for (var x = cs(q), y = 0; y < w.length; y++) {
                                var A = Il(w[y], b.isGtmEvent);
                                A && fp(A.W, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Kl(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Kq(m, c);
                        for (var D = [], I = 0; I < B.length; I++) {
                            var H = B[I],
                                E = J(b);
                            if (-1 !== Wr.indexOf(H.prefix)) {
                                var L = J(d),
                                    M = E.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                                E.eventMetadata = M;
                                delete L[N.g.nc];
                                Ir(c, L, H.id, E)
                            }
                            D.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[N.g.Lb] = D.join() : delete g.eventModel[N.g.Lb];
                        Xr || K(43);
                        void 0 === b.noGtmEvent &&
                            b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                K(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && sa(a[3])) {
                    var c = Il(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Xr || K(43);
                        var f = cs();
                        if (!va(ji(), function(l) {
                                return c.W === l
                            })) fp(c.W, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Wr.indexOf(c.prefix)) {
                            Zr(a, b);
                            var g = {};
                            jh(J((g[N.g.La] = d, g[N.g.ab] = e, g)));
                            Jr(d, function(l) {
                                F(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a,
                b) {
                if (2 == a.length && a[1].getTime) {
                    Xr = !0;
                    var c = Zr(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && G(a[1]) ? c = J(a[1]) : 3 == a.length && h(a[1]) && (c = {}, G(a[2]) || ua(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Zr(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    J(c);
                    var g = J(c);
                    Hr.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    R(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        es = {
            policy: !0
        };
    var fs = function(a) {
            var b = z[oe.da].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        gs = function(a) {
            var b = z[oe.da],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var hs = !1,
        is = [];

    function js() {
        if (!hs) {
            hs = !0;
            for (var a = 0; a < is.length; a++) F(is[a])
        }
    }
    var ks = function(a) {
        hs ? F(a) : is.push(a)
    };
    var Bs = function(a) {
        if (As(a)) return a;
        this.h = a
    };
    Bs.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var As = function(a) {
        return !a || "object" !== ac(a) || G(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Bs.prototype.getUntrustedMessageValue = Bs.prototype.getUntrustedMessageValue;
    var Cs = 0,
        Ds = {},
        Es = [],
        Fs = [],
        Gs = !1,
        Hs = !1;

    function Is(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Js = function(a) {
            return z[oe.da].push(a)
        },
        Ks = function(a, b) {
            var c = pe[oe.da],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Ls(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && Se(e), Se(e, f))
        });
        Ee || (Ee = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Je(), a["gtm.uniqueEventId"] = d, Se("gtm.uniqueEventId", d));
        return Dr(a)
    }

    function Ms(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Aa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Ns() {
        var a;
        if (Fs.length) a = Fs.shift();
        else if (Es.length) a = Es.shift();
        else return;
        var b;
        var c = a;
        if (Gs || !Ms(c.message)) b = c;
        else {
            Gs = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Je());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Es.unshift(l, c);
            if (pj && T.C) {
                var m, n = ki(oi());
                m = n && n.context;
                var p, q = Af(z.location.href);
                p = q.hostname + q.pathname;
                var r = m && m.fromContainerExecution,
                    t = m && m.source,
                    u = T.C,
                    v = T.Ua,
                    w = T.De;
                pj && (pp || (pp = p), qp.push(u + ";" + v + ";" + (r ? 1 : 0) + ";" + (t || 0) + ";" + (w ? 1 : 0)))
            }
            b = f
        }
        return b
    }

    function Os() {
        for (var a = !1, b; !Hs && (b = Ns());) {
            Hs = !0;
            delete Me.eventModel;
            Oe();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Hs = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Pe(l, 1);
                        if (ua(m) || G(m)) m = J(m);
                        Ne[l] = m
                    }
                try {
                    if (sa(d)) try {
                        d.call(Qe)
                    } catch (D) {} else if (ua(d)) {
                        var n = d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = Pe(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (D) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Aa(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = ds[d[0]];
                                    if (w && (!e.fromContainerExecution || !es[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && K(101)
                        }
                        else u = d;
                        if (u) {
                            var x = Ls(u, e);
                            a = x || a;
                            v && x && K(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Oe(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Ds[String(y)] || [], B = 0; B < A.length; B++) Fs.push(Ps(A[B]));
                        A.length && Fs.sort(Is);
                        delete Ds[String(y)];
                        y > Cs && (Cs = y)
                    }
                    Hs = !1
                }
            }
        }
        return !a
    }

    function Qs() {
        if (R(70)) {
            var a = Yn(Tn.F.ef, T.C);
            Zn(a);
            if (Rs()) {
                var b = Yn(Tn.F.Fg, T.C);
                if (Zn(b)) {
                    var c = Yn(Tn.F.hf, T.C);
                    $n(b, c)
                }
            }
        }
        var d = Os();
        try {
            fs(T.C)
        } catch (e) {}
        return d
    }

    function ir(a) {
        if (Cs < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Ds[b] = Ds[b] || [];
            Ds[b].push(a)
        } else Fs.push(Ps(a)), Fs.sort(Is), F(function() {
            Hs || Os()
        })
    }

    function Ps(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Ss = function() {
            function a(g) {
                var l = {};
                if (As(g)) {
                    var m = g;
                    g = As(m) ? m.getUntrustedMessageValue() : void 0;
                    l.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: l
                }
            }
            var b = Gb(oe.da, []),
                c = pe[oe.da] = pe[oe.da] || {};
            !0 === c.pruned && K(83);
            Ds = gr().get();
            jr();
            Gp(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            ks(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < pe.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var l = 0; l < arguments.length; l++) g[l] = new Bs(arguments[l])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(r) {
                    return a(r)
                });
                Es.push.apply(Es, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (K(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return Os() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            Es.push.apply(Es, e);
            if (Rs()) {
                if (R(70)) {
                    var f = Yn(Tn.F.hf, T.C);
                    Zn(f)
                }
                F(Qs)
            }
        },
        Rs = function() {
            var a = !0;
            return a
        };

    function Ts(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ha();
        return b < c + 3E5 && b > c - 9E5
    }

    function Us(a) {
        return a && 0 === a.indexOf("pending:") ? Ts(a.substr(8)) : !1
    };
    var Mc = {};
    Mc.Ce = new String("undefined");
    var pt = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Mc.Ce ? b : a[d]);
            return c.join("")
        }
    };
    pt.prototype.toString = function() {
        return this.h("undefined")
    };
    pt.prototype.valueOf = pt.prototype.toString;
    Mc.Tj = pt;
    Mc.Lf = {};
    Mc.gk = function(a) {
        return new pt(a)
    };
    var qt = {};
    Mc.ql = function(a, b) {
        var c = Je();
        qt[c] = [a, b];
        return c
    };
    Mc.ai = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = qt[c];
            if (d && "function" === typeof d[b]) d[b]();
            qt[c] = void 0
        }
    };
    Mc.Jk = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    Mc.jl = function(a) {
        if (a === Mc.Ce) return a;
        var b = Je();
        Mc.Lf[b] = a;
        return 'google_tag_manager["' + T.C + '"].macro(' + b + ")"
    };
    Mc.Vk = function(a, b, c) {
        a instanceof Mc.Tj && (a = a.h(Mc.ql(b, c)), b = ra);
        return {
            Dk: a,
            K: b
        }
    };
    var rt = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Wb(a, "className"),
                "gtm.elementId": a["for"] || Rb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Wb(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Wb(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        st = function(a) {
            pe.hasOwnProperty("autoEventsSettings") || (pe.autoEventsSettings = {});
            var b = pe.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        tt = function(a, b, c) {
            st(a)[b] = c
        },
        ut = function(a, b, c, d) {
            var e = st(a),
                f = Ia(e, b, d);
            e[b] = c(f)
        },
        vt = function(a, b, c) {
            var d = st(a);
            return Ia(d, b, c)
        };
    var Qt = z.clearTimeout,
        Rt = z.setTimeout,
        U = function(a, b, c, d) {
            if (di()) {
                b && F(b)
            } else return Lb(a, b, c, d)
        },
        St = function() {
            return new Date
        },
        Tt = function() {
            return z.location.href
        },
        Ut = function(a) {
            return yf(Af(a), "fragment")
        },
        Vt = function(a) {
            return zf(Af(a))
        },
        Wt = function(a, b) {
            return Pe(a, b || 2)
        },
        Xt = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Js(a)) : d = Js(a);
            return d
        },
        Yt = function(a, b) {
            z[a] = b
        },
        V = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Zt = function(a, b, c) {
            return Lh(a, b, void 0 === c ? !0 : !!c)
        },
        $t = function(a, b, c) {
            return 0 === Uh(a, b, c)
        },
        au = function(a, b) {
            if (di()) {
                b && F(b)
            } else Nb(a, b)
        },
        bu = function(a) {
            return !!vt(a, "init", !1)
        },
        cu = function(a) {
            tt(a, "init", !0)
        },
        du = function(a, b, c) {
            cc(a) || Rq(c, b, a)
        };

    var eu = Mc.Vk;

    function Bu(a, b) {
        function c(g) {
            var l = Af(g),
                m = yf(l, "protocol"),
                n = yf(l, "host", !0),
                p = yf(l, "port"),
                q = yf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Cu(a) {
        return Du(a) ? 1 : 0
    }

    function Du(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Cu(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < kd.length; g++) {
                            var l = kd[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return ld(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return nd(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Bu(b, c)
        }
        return !1
    };

    function Eu() {
        var a = ["&cv=10", "&rv=" + oe.Mf, "&tc=" + Hc.filter(function(b) {
            return b
        }).length];
        oe.ud && a.push("&x=" + oe.ud);
        return a.join("")
    };

    function Fu() {
        function a(c, d) {
            var e = bb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    af();

    function av() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var bv = function() {
            var a = av();
            a.hid = a.hid || wa();
            return a.hid
        },
        cv = function(a, b) {
            var c = av();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var zv = function() {
            var a = !0;
            fj(7) && fj(9) && fj(10) || (a = !1);
            return a
        },
        Av = function() {
            var a = !0;
            fj(3) && fj(4) || (a = !1);
            return a
        };
    var aw = window,
        bw = document,
        cw = function(a) {
            var b = aw._gaUserPrefs;
            if (b && b.ioo && b.ioo() || bw.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === aw["ga-disable-" + a]) return !0;
            try {
                var c = aw.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Fh("AMP_TOKEN", String(bw.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return bw.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function iw(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Na] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var rw = function(a, b) {};

    function qw(a, b) {
        var c = function() {};
        return c
    }

    function sw(a, b, c) {};
    var kx = function(a, b) {
            if (!b.isGtmEvent) {
                var c = S(b, N.g.La),
                    d = S(b, N.g.ab),
                    e = S(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    hx.hasOwnProperty(c) ? f = hx[c] : ix.hasOwnProperty(c) && (f = ix[c]);
                    1 === f && (f = jx(c));
                    h(f) ? Tp()(function() {
                        var g = Tp().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        lx = function(a, b) {
            var c = a[N.g.Ib],
                d = b + ".",
                e = a[N.g.N] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[N.g.wb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = Tp();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, g)
        },
        px = function(a,
            b, c) {
            if (Vg() && (!c.isGtmEvent || !mx[a])) {
                var d = !Tg(N.g.M),
                    e = function(f) {
                        var g, l, m = Tp(),
                            n = nx(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.isGtmEvent || ox(b, n.createOnlyFields)) {
                            c.isGtmEvent && (g = "gtm" + Je(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
                            m(function() {
                                var t = m.getByName(b);
                                t && (p = t.get("clientId"));
                                c.isGtmEvent || m.remove(b)
                            });
                            m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                            d && Tg(N.g.M) && (d = !1, m(function() {
                                var t = Tp().getByName(c.isGtmEvent ? g : b);
                                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = le[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = le[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                            }));
                            c.isGtmEvent && m(function() {
                                m.remove(g)
                            })
                        }
                    };
                Ch(function() {
                    return e(N.g.M)
                }, N.g.M);
                Ch(function() {
                        return e(N.g.D)
                    },
                    N.g.D);
                c.isGtmEvent && (mx[a] = !0)
            }
        },
        qx = function(a, b) {
            ap() && b && (a[N.g.Gb] = b)
        },
        zx = function(a, b, c) {
            function d() {
                var E = S(c, N.g.kc);
                l(function() {
                    if (!c.isGtmEvent && G(E)) {
                        var L = u.fieldsToSend,
                            M = m().getByName(n),
                            Y;
                        for (Y in E)
                            if (E.hasOwnProperty(Y) && /^(dimension|metric)\d+$/.test(Y) && void 0 != E[Y]) {
                                var W = M.get(jx(E[Y]));
                                rx(L, Y, W)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var E = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: E
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                l = c.isGtmEvent ? Vp(S(c, "gaFunctionName")) : Vp();
            if (sa(l)) {
                var m = Tp,
                    n;
                c.isGtmEvent ? n = S(c, "name") || S(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(E) {
                        var L = [].slice.call(arguments, 0);
                        L[0] = n ? n + "." + L[0] : "" + L[0];
                        l.apply(window, L)
                    },
                    q = function(E) {
                        var L = function(ha, ba) {
                                for (var aa = 0; ba && aa < ba.length; aa++) p(ha, ba[aa])
                            },
                            M = c.isGtmEvent,
                            Y = M ? sx(u) : tx(b, c);
                        if (Y) {
                            var W = {};
                            qx(W, E);
                            p("require", "ec", "ec.js", W);
                            M && Y.Tf && p("set", "&cu", Y.Tf);
                            var Q = Y.action;
                            if (M || "impressions" === Q)
                                if (L("ec:addImpression",
                                        Y.ji), !M) return;
                            if ("promo_click" === Q || "promo_view" === Q || M && Y.Kd) {
                                var P = Y.Kd;
                                L("ec:addPromo", P);
                                if (P && 0 < P.length && "promo_click" === Q) {
                                    M ? p("ec:setAction", Q, Y.Qa) : p("ec:setAction", Q);
                                    return
                                }
                                if (!M) return
                            }
                            "promo_view" !== Q && "impressions" !== Q && (L("ec:addProduct", Y.Rb), p("ec:setAction", Q, Y.Qa))
                        }
                    },
                    r = function(E) {
                        if (E) {
                            var L = {};
                            if (G(E))
                                for (var M in ux) ux.hasOwnProperty(M) && vx(ux[M], M, E[M], L);
                            qx(L, x);
                            p("require", "linkid", L)
                        }
                    },
                    t = function() {
                        if (di()) {} else {
                            var E =
                                S(c, N.g.wj);
                            E && (p("require", E, {
                                dataLayer: oe.da
                            }), p("require", "render"))
                        }
                    },
                    u = nx(n, b, c),
                    v = function(E, L, M) {
                        M && (L = "" + L);
                        u.fieldsToSend[E] = L
                    };
                !c.isGtmEvent && ox(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), wx[n] = !1);
                l("create", f, u.createOnlyFields);
                if (u.createOnlyFields[N.g.Gb] && !c.isGtmEvent) {
                    var w = xe || ze ? $o(u.createOnlyFields[N.g.Gb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var x = c.isGtmEvent ? u.fieldsToSet[N.g.Gb] : u.createOnlyFields[N.g.Gb];
                if (x) {
                    var y = c.isGtmEvent ? u.fieldsToSet[N.g.qe] : u.createOnlyFields[N.g.qe];
                    y && !wx[n] && (wx[n] = !0, l(Yp(n, y)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var A = u[N.g.wa];
                A && A[N.g.N] && lx(A, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var B = {};
                        qx(B, x);
                        p("require", "linkid", "linkid.js", B)
                    }
                    Vg() && px(f, n, c)
                }
                if (b === N.g.hc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: D
                            })
                        }
                        q(x);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && Wp(n +
                            ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === N.g.ja ? (t(), Wl(f, c), S(c, N.g.fb) && (xl(["aw", "dc"]), Wp(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), px(f, n, c)) : b === N.g.Ea ? kx(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Ba(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || xx[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value &&
                    v("eventValue", Ba(u.value))), p("send", u.fieldsToSend));
                if (!yx && !c.isGtmEvent) {
                    yx = !0;
                    var I = function() {
                            c.O()
                        },
                        H = function() {
                            m().loaded || I()
                        };
                    di() ? F(H) : Lb(g, H, I)
                }
            } else F(c.O)
        },
        Ax = function(a, b, c, d) {
            Dh(function() {
                zx(a, b, d)
            }, [N.g.M, N.g.D])
        },
        Cx = function(a) {
            function b(e) {
                function f(l, m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[l] = e[p];
                            break
                        }
                    }
                }
                var g = J(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant",
                    "item_variant"
                ]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var l = "", m = 0; m < Bx.length; m++) void 0 !== e[Bx[m]] && (l && (l += "/"), l += e[Bx[m]]);
                        l && (g.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && G(a[d]) && c.push(b(a[d]));
            return c.length ? c :
                void 0
        },
        Dx = function(a) {
            return Tg(a)
        },
        Ex = !1;
    var yx, wx = {},
        mx = {},
        Fx = {},
        Gx = Object.freeze((Fx.page_hostname = 1, Fx[N.g.T] = 1, Fx[N.g.rb] = 1, Fx[N.g.Ja] = 1, Fx[N.g.Aa] = 1, Fx[N.g.Ka] = 1, Fx[N.g.jc] = 1, Fx[N.g.Vc] = 1, Fx[N.g.Ga] = 1, Fx[N.g.Za] = 1, Fx[N.g.fa] = 1, Fx[N.g.Jb] = 1, Fx[N.g.Ba] = 1, Fx[N.g.xb] = 1, Fx)),
        Hx = {},
        hx = Object.freeze((Hx.client_storage = "storage", Hx.sample_rate = 1, Hx.site_speed_sample_rate = 1, Hx.store_gac = 1, Hx.use_amp_client_id =
            1, Hx[N.g.Xa] = 1, Hx[N.g.ra] = "storeGac", Hx[N.g.Ja] = 1, Hx[N.g.Aa] = 1, Hx[N.g.Ka] = 1, Hx[N.g.jc] = 1, Hx[N.g.Vc] = 1, Hx[N.g.Za] = 1, Hx)),
        Ix = {},
        Jx = Object.freeze((Ix._cs = 1, Ix._useUp = 1, Ix.allowAnchor = 1, Ix.allowLinker = 1, Ix.alwaysSendReferrer = 1, Ix.clientId = 1, Ix.cookieDomain = 1, Ix.cookieExpires = 1, Ix.cookieFlags = 1, Ix.cookieName = 1, Ix.cookiePath = 1, Ix.cookieUpdate = 1, Ix.legacyCookieDomain = 1, Ix.legacyHistoryImport = 1, Ix.name = 1, Ix.sampleRate = 1, Ix.siteSpeedSampleRate = 1, Ix.storage = 1, Ix.storeGac = 1, Ix.useAmpClientId = 1, Ix._cd2l = 1, Ix)),
        Kx = Object.freeze({
            anonymize_ip: 1
        }),
        Lx = {},
        ix = Object.freeze((Lx.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, Lx.app_id = 1, Lx.app_installer_id = 1, Lx.app_name = 1, Lx.app_version = 1, Lx.description = "exDescription", Lx.fatal = "exFatal", Lx.language = 1, Lx.page_hostname = "hostname", Lx.transport_type = "transport", Lx[N.g.oa] = "currencyCode", Lx[N.g.oh] = 1, Lx[N.g.fa] = "location", Lx[N.g.Jb] = "page", Lx[N.g.Ba] = "referrer", Lx[N.g.xb] =
            "title", Lx[N.g.Bf] = 1, Lx[N.g.xa] = 1, Lx)),
        Mx = {},
        Nx = Object.freeze((Mx.content_id = 1, Mx.event_action = 1, Mx.event_category = 1, Mx.event_label = 1, Mx.link_attribution = 1, Mx.name = 1, Mx[N.g.wa] = 1, Mx[N.g.nh] = 1, Mx[N.g.Ma] = 1, Mx[N.g.Z] = 1, Mx)),
        Ox = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Bx = Object.freeze(["item_category",
            "item_category2", "item_category3", "item_category4", "item_category5"
        ]),
        Px = {},
        ux = Object.freeze((Px.levels = 1, Px[N.g.Aa] = "duration", Px[N.g.jc] = 1, Px)),
        Qx = {},
        Rx = Object.freeze((Qx.anonymize_ip = 1, Qx.fatal = 1, Qx.send_page_view = 1, Qx.store_gac = 1, Qx.use_amp_client_id = 1, Qx[N.g.ra] = 1, Qx[N.g.oh] = 1, Qx)),
        vx = function(a, b, c, d) {
            if (void 0 !== c)
                if (Rx[b] && (c = Da(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[jx(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        jx = function(a) {
            return a &&
                h(a) ? a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase()
                }) : a
        },
        Sx = {},
        xx = Object.freeze((Sx.checkout_progress = 1, Sx.select_content = 1, Sx.set_checkout_option = 1, Sx[N.g.Zb] = 1, Sx[N.g.ac] = 1, Sx[N.g.Db] = 1, Sx[N.g.bc] = 1, Sx[N.g.Va] = 1, Sx[N.g.pb] = 1, Sx[N.g.Wa] = 1, Sx[N.g.ya] = 1, Sx[N.g.fc] = 1, Sx[N.g.Da] = 1, Sx)),
        Tx = {},
        Ux = Object.freeze((Tx.checkout_progress = 1, Tx.set_checkout_option = 1, Tx[N.g.Lg] = 1, Tx[N.g.Mg] = 1, Tx[N.g.Zb] = 1, Tx[N.g.ac] = 1, Tx[N.g.Ng] = 1, Tx[N.g.Db] = 1, Tx[N.g.ya] = 1, Tx[N.g.fc] = 1, Tx[N.g.Og] = 1, Tx)),
        Vx = {},
        Wx = Object.freeze((Vx.generate_lead =
            1, Vx.login = 1, Vx.search = 1, Vx.select_content = 1, Vx.share = 1, Vx.sign_up = 1, Vx.view_search_results = 1, Vx[N.g.bc] = 1, Vx[N.g.Va] = 1, Vx[N.g.pb] = 1, Vx[N.g.Wa] = 1, Vx[N.g.Da] = 1, Vx)),
        Xx = function(a) {
            var b = "general";
            Ux[a] ? b = "ecommerce" : Wx[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        Yx = {},
        Zx = Object.freeze((Yx.view_search_results = 1, Yx[N.g.Va] = 1, Yx[N.g.Wa] = 1, Yx[N.g.Da] = 1, Yx)),
        rx = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        $x = function(a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e =
                            d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        nx = function(a, b, c) {
            var d = function(M) {
                    return S(c, M)
                },
                e = {},
                f = {},
                g = {},
                l = {},
                m = $x(d(N.g.uj));
            !c.isGtmEvent && m && rx(f, "exp", m);
            g["&gtm"] = si(!0);
            c.isGtmEvent || (g._no_slc = !0);
            Vg() && (l._cs = Dx);
            var n = d(N.g.kc);
            if (!c.isGtmEvent && G(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && rx(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = um(c), u = 0; u <
                t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    Ox.hasOwnProperty(v) ? e[v] = w : Jx.hasOwnProperty(v) ? l[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== N.g.V ? d(v) : vm(c, v);
                    if (Nx.hasOwnProperty(v)) vx(Nx[v], v, x, e);
                    else if (Kx.hasOwnProperty(v)) vx(Kx[v], v, x, g);
                    else if (ix.hasOwnProperty(v)) vx(ix[v], v, x, f);
                    else if (hx.hasOwnProperty(v)) vx(hx[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) vx(1, v, x, f);
                    else if (v === N.g.V) {
                        if (!Ex) {
                            var y = Qa(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === N.g.ja ? A = Qa(vm(c,
                            v), ".") : (A = Qa(vm(c, v, 1), "."), B = Qa(vm(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === N.g.Ga && 0 > t.indexOf(N.g.jc) && (l.cookieName = x + "_ga");
                    R(96) && Gx[v] && (c.m.hasOwnProperty(v) || b === N.g.ja && c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            R(96) && r && (f["&jsscut"] = "1");
            !1 !== d(N.g.kf) && !1 !== d(N.g.rb) && zv() || (g.allowAdFeatures = !1);
            !1 !== d(N.g.T) && Av() || (g.allowAdPersonalizationSignals = !1);
            !c.isGtmEvent && d(N.g.fb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var D = g.hitCallback;
                g.hitCallback = function() {
                    sa(D) &&
                        D();
                    c.K()
                }
            } else {
                rx(l, "cookieDomain", "auto");
                rx(g, "forceSSL", !0);
                rx(e, "eventCategory", Xx(b));
                Zx[b] && rx(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? rx(e, "eventLabel", d(N.g.nh)) : "search" === b || "view_search_results" === b ? rx(e, "eventLabel", d(N.g.Dj)) : "select_content" === b && rx(e, "eventLabel", d(N.g.mj));
                var I = e[N.g.wa] || {},
                    H = I[N.g.qc];
                H || 0 != H && I[N.g.N] ? l.allowLinker = !0 : !1 === H && rx(l, "useAmpClientId", !1);
                f.hitCallback = c.K;
                l.name = a
            }
            Vg() && (g["&gcs"] = vh(), R(106) && (g["&gcd"] = zh()), Tg(N.g.M) || (l.storage =
                "none"), Tg(N.g.D) || (g.allowAdFeatures = !1, l.storeGac = !1));
            R(109) && (Bh() && (g["&dma_cps"] = Ah()), Ze() && (g["&dma"] = "1"));
            var E = bp(c) || d(N.g.Gb),
                L = d(N.g.qe);
            E && (c.isGtmEvent || (l[N.g.Gb] = E), l._cd2l = !0);
            L && !c.isGtmEvent && (l[N.g.qe] = L);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        },
        sx = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Tf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.ji = "impressions" === b.translateIfKeyEquals ?
                    Cx(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Kd = "promoView" === b.translateIfKeyEquals ? Cx(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Kd = "promoClick" === b.translateIfKeyEquals ? Cx(f) : f;
                c.Qa = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var l = b[g].products;
                    c.Rb = "products" === b.translateIfKeyEquals ? Cx(l) :
                        l;
                    c.Qa = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        tx = function(a, b) {
            function c(u) {
                return {
                    id: d(N.g.la),
                    affiliation: d(N.g.Sg),
                    revenue: d(N.g.Z),
                    tax: d(N.g.rf),
                    shipping: d(N.g.Xc),
                    coupon: d(N.g.Tg),
                    list: d(N.g.qf) || d(N.g.Wc) || u
                }
            }
            for (var d = function(u) {
                    return S(b, u)
                }, e = d(N.g.U), f, g = 0; e && g < e.length && !(f = e[g][N.g.qf] || e[g][N.g.Wc]); g++);
            var l = d(N.g.kc);
            if (G(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && rx(n, p, n[l[p]])
                }
            var q =
                null,
                r = d(N.g.pj);
            if (a === N.g.ya || a === N.g.fc) q = {
                action: a,
                Qa: c(),
                Rb: Cx(e)
            };
            else if (a === N.g.Zb) q = {
                action: "add",
                Qa: c(),
                Rb: Cx(e)
            };
            else if (a === N.g.ac) q = {
                action: "remove",
                Qa: c(),
                Rb: Cx(e)
            };
            else if (a === N.g.Da) q = {
                action: "detail",
                Qa: c(f),
                Rb: Cx(e)
            };
            else if (a === N.g.Va) q = {
                action: "impressions",
                ji: Cx(e)
            };
            else if (a === N.g.Wa) q = {
                action: "promo_view",
                Kd: Cx(r) || Cx(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === N.g.pb) q = {
                action: "promo_click",
                Kd: Cx(r) || Cx(e)
            };
            else if ("select_content" === a || a === N.g.bc) q = {
                action: "click",
                Qa: {
                    list: d(N.g.qf) || d(N.g.Wc) || f
                },
                Rb: Cx(e)
            };
            else if (a === N.g.Db || "checkout_progress" === a) {
                var t = {
                    step: a === N.g.Db ? 1 : d(N.g.pf),
                    option: d(N.g.je)
                };
                q = {
                    action: "checkout",
                    Rb: Cx(e),
                    Qa: J(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Qa: {
                    step: d(N.g.pf),
                    option: d(N.g.je)
                }
            });
            q && (q.Tf = d(N.g.oa));
            return q
        },
        ay = {},
        ox = function(a, b) {
            var c = ay[a];
            ay[a] = J(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var by = qw;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var dy = encodeURI,
        X = encodeURIComponent,
        ey = function(a, b, c) {
            Ob(a, b, c)
        },
        fy = function(a, b) {
            if (!a) return !1;
            var c = yf(Af(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f =
                        c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        gy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };

    Z.o.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.s = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = V("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        du(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.s = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = Wt("gtm.referrer", 1) || C.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? yf(Af(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Vt(String(b)) : String(b)
            })
        }();
    Z.o.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = rt(c, "gtm.click");
                    Xt(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.s = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!bu("cl")) {
                    var c = V("document");
                    Pb(c, "click", a, !0);
                    cu("cl")
                }
                F(b.vtp_gtmOnSuccess)
            })
        }();
    Z.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.s = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Wt("gtm.url", 1)) || Tt();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Vt(String(c));
                var e = Af(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? ua(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = yf(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = yf(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Wt(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                du(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();


    Z.o.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(Tt());
                ua(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !fy(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return yf(Af(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Rb(r, "value");
                    case "button":
                        return Sb(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) zt(r.elements[u]) && t++;
                    return t
                }
            }

            function l(r, t, u) {
                var v = r.interactedFormField;
                return v && Rb(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.s = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(r) {
                var t =
                    r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, Sb) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = Af(A),
                                D = String(r.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = yf(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var I;
                        if (void 0 === r.vtp_attribute) I = b(w,
                            v, u);
                        else {
                            var H = w.element;
                            I = H && Rb(H, r.vtp_attribute) || u || ""
                        }
                        return I;
                    case "MD":
                        var E = r.vtp_mdValue,
                            L = a(w, t, "MD", Lt);
                        return E && L ? Ot(L, E) || u : L || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        var M = b(w, v, u);
                        du(M, "aev", r.vtp_gtmEventId);
                        return M
                }
            })
        }();









    Z.o.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Da(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && J(gy(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                J(gy(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Da(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {
                var q =
                    function(L, M, Y) {
                        for (var W in L)
                            if (r.hasOwnProperty(W)) {
                                var Q = Y[M] || {};
                                Q.actionField = Q.actionField || {};
                                Q.actionField[r[W]] = L[W];
                                Y[M] = Q
                            }
                    },
                    r = {
                        transaction_id: "id",
                        affiliation: "affiliation",
                        value: "revenue",
                        tax: "tax",
                        shipping: "shipping",
                        coupon: "coupon",
                        item_list_name: "list"
                    },
                    t = {},
                    u = (t[N.g.bc] = "click", t[N.g.Da] = "detail", t[N.g.Zb] = "add", t[N.g.ac] = "remove", t[N.g.Db] = "checkout", t[N.g.ya] = "purchase", t[N.g.fc] = "refund", t),
                    v;
                if (m.vtp_useEcommerceDataLayer) {
                    var w = !1;
                    m.vtp_useGA4SchemaForEcommerce && (v = m.vtp_gtmCachedValues.eventModel,
                        w = !!v);
                    w || (v = Wt("ecommerce", 1))
                } else m.vtp_ecommerceMacroData && (v = m.vtp_ecommerceMacroData.ecommerce, !v && m.vtp_useGA4SchemaForEcommerce && (v = m.vtp_ecommerceMacroData));
                if (!G(v)) return;
                v = Object(v);
                var x = {},
                    y = v.currencyCode;
                m.vtp_useGA4SchemaForEcommerce && (y = y || v.currency);
                var A = Ia(n, "currencyCode", y);
                A && (x.currencyCode = A);
                v.impressions &&
                    (x.impressions = v.impressions);
                v.promoView && (x.promoView = v.promoView);
                if (m.vtp_useGA4SchemaForEcommerce) {
                    if (p === N.g.Va && !v.impressions) v.items && (x.impressions = v.items, x.translateIfKeyEquals = "impressions");
                    else if (p === N.g.Wa && !v.promoView) v.promoView = {}, v.items && (x.promoView = {}, x.promoView.promotions = v.items, x.translateIfKeyEquals = "promoView");
                    else if (p === N.g.pb && !v.promoClick) v.promoClick = {}, v.items && (x.promoClick = {}, x.promoClick.promotions = v.items, x.translateIfKeyEquals = "promoClick", q(v, "promoClick",
                        x));
                    else if (u.hasOwnProperty(p)) {
                        var B = u[p];
                        !v[B] && v.items && (x[B] = {}, x[B].products = v.items, x.translateIfKeyEquals = "products", q(v, B, x))
                    }
                    var D = x.translateIfKeyEquals;
                    if ("promoClick" === D || "products" === D) return x
                }
                if (v.promoClick) return x.promoClick = v.promoClick, x;
                for (var I = "detail checkout checkout_option click add remove purchase refund".split(" "), H = 0; H < I.length; H++) {
                    var E = v[I[H]];
                    if (E) return x[I[H]] = E, x
                }
                m.vtp_useGA4SchemaForEcommerce && u.hasOwnProperty(p) && q(v, u[p], x);
                return x;
            }

            function e(m, n) {
                if (!f) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = xe || ze ? $o(n._x_19, "/analytics.js") : void 0,
                        t = Ll("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    U("analytics.js" === p && r ? r : t, function() {
                        var u = Tp();
                        u && u.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Z.__ua = m;
                Z.__ua.s = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    J(gy(t.vtp_contentGroup, "index", "group"), p);
                    J(gy(t.vtp_dimension, "index", "dimension"), q);
                    J(gy(t.vtp_metric, "index", "metric"), r);
                    var u = J(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = J(m, u)
                }
                J(gy(m.vtp_contentGroup, "index", "group"), p);
                J(gy(m.vtp_dimension, "index", "dimension"), q);
                J(gy(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName &&
                    "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Je(), y = A + ".");
                var B = function(ba, aa) {
                    for (var xa in aa) aa.hasOwnProperty(xa) && (v[ba + xa] = aa[xa])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel),
                    v.value = c(Ba, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = N.g.hc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var D = {};
                        D[N.g.N] = m.vtp_autoLinkDomains;
                        D.use_anchor = m.vtp_useHashAutoLink;
                        D[N.g.wb] = m.vtp_decorateFormsAutoLink;
                        v[N.g.wa] = D
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Ba(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var I = {};
                a(v, I);
                v.name || (I.gtmTrackerName = A);
                I.gaFunctionName = m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (I.nonInteraction = m.vtp_nonInteraction);
                var H = Im(Hm(Gm(Fm(ym(new xm(m.vtp_gtmEventId, m.vtp_gtmPriorityId),
                    I), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                Ax(w, x, Date.now(), H);
                var E = Vp(m.vtp_functionName);
                if (sa(E)) {
                    var L = function(ba) {
                        var aa = [].slice.call(arguments, 0);
                        aa[0] = y + aa[0];
                        E.apply(window, aa)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else F(m.vtp_gtmOnFailure)
            })
        }();




    Z.o.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var l = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(l.nodeName).toUpperCase() && "text/gtmscript" == l.type) {
                                var n = C.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = l.id;
                                n.text = l.text || l.textContent || l.innerHTML || "";
                                l.charset && (n.charset = l.charset);
                                var p = l.getAttribute("data-gtmsrc");
                                p && (n.src = p, Hb(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (l.innerHTML && 0 <= l.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; l.firstChild;) q.push(l.removeChild(l.firstChild));
                                d.insertBefore(l, null);
                                a(l, q, m, g)()
                            } else d.insertBefore(l, null), m()
                        } else f()
                    } catch (r) {
                        F(g)
                    }
                }
            }

            function b(d) {
                if (C.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = eu(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Dk,
                        l = f.K;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, l, e) : a(C.body, Tb(g), l, e)()
                } else Rt(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.s =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1
        }();


    var Az = {};
    Az.macro = function(a) {
        if (Mc.Lf.hasOwnProperty(a)) return Mc.Lf[a]
    }, Az.onHtmlSuccess = Mc.ai(!0), Az.onHtmlFailure = Mc.ai(!1);
    Az.dataLayer = Qe;
    Az.callback = function(a) {
        Ge.hasOwnProperty(a) && sa(Ge[a]) && Ge[a]();
        delete Ge[a]
    };
    Az.bootstrap = 0;
    Az._spx = !1;

    function Bz() {
        pe[T.C] = pe[T.C] || Az;
        T.Ua && (pe["ctid_" + T.Ua] = Az);
        mi();
        pi() || k(qi(), function(a, b) {
            fp(a, b.transportUrl, b.context);
            K(92)
        });
        Ka(He, Z.o);
        Nc();
        Oc = Xc
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            Ts(m) && (l = g.Fj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = Af(C.referrer);
                c = "cct.google" === xf(d, "host")
            }
            if (!c) {
                var e = Lh("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Lb("https://cct.google/taggy/agent.js"))
        }
        if (Be) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    ve ? (v = "OGT", w = "GTAG") : Be && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Lb("https://" + oe.Zd + "/debug/bootstrap?id=" + T.C + "&src=" + w + "&cond=" + u + "&gtm=" + si()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Fb,
                            containerProduct: v,
                            debug: !1,
                            id: T.C,
                            destinations: ji()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    oe.Li && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Pl: 1,
                    Gj: 2,
                    Rj: 3,
                    Ni: 4,
                    Fj: 5
                },
                l = void 0,
                m = void 0,
                n = yf(z.location, "query", !1, void 0, "gtm_debug");
            Ts(n) && (l = g.Gj);
            if (!l && C.referrer) {
                var p = Af(C.referrer);
                "tagassistant.google.com" === xf(p, "host") && (l = g.Rj)
            }
            if (!l) {
                var q =
                    Lh("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.Ni)
            }
            l || b();
            if (!l && Us(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Fb ? f(l) : a()
                    },
                    t = !1;
                Pb(C, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else l && Fb ? f(l) : a()
        }
    })(function() {
        if (R(70)) {
            var a = Yn(Tn.F.ff, T.C);
            Zn(a)
        }
        Bg().m();
        cj();
        if (T.Ua ? pe["ctid_" + T.Ua] : pe[T.C]) {
            var b = pe.zones;
            b && b.unregisterChild(ii());
        } else {
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Ec.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) Hc.push(f[g]);
            for (var l = c.predicates || [], m = 0; m < l.length; m++) Gc.push(l[m]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], r = {}, t = 0; t < q.length; t++) r[q[t][0]] = Array.prototype.slice.call(q[t], 1);
                Fc.push(r)
            }
            Jc = Z;
            Kc = Cu;
            Bz();
            if (R(102)) {
                for (var u = Xe["7"], v = u ? u.split("|") : [], w = {}, x = 0; x < v.length; x++) w[v[x]] = !0;
                for (var y = 0; y < mh.length; y++) {
                    var A = mh[y],
                        B = w[A] ? "granted" : "denied";
                    Ig().implicit(A, B)
                }
            }
            Ss();
            Bp = !1;
            Cp = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Ep();
            else {
                Pb(C, "DOMContentLoaded", Ep);
                Pb(C, "readystatechange", Ep);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var D = !0;
                    try {
                        D = !z.frameElement
                    } catch (Y) {}
                    D && Fp()
                }
                Pb(z, "load", Ep)
            }
            hs = !1;
            "complete" === C.readyState ? js() : Pb(z, "load", js);
            pj && (kj(Cj), z.setInterval(Bj, 864E5));
            kj(Eu);
            R(119) && kj(Oq);
            kj(Lq);
            kj(Fu);
            kj(Sq);
            kj(Ej);
            kj(tp);
            kj(rp);
            kj(Wq);
            kj(Gr);
            We(1);
            Fe = Ha();
            Az.bootstrap = Fe;
            if (R(70)) {
                var L = Yn(Tn.F.Eg, T.C);
                if (Zn(L)) {
                    var M = Yn(Tn.F.ff, T.C);
                    $n(L, M)
                }
            }
        }
    });

})()