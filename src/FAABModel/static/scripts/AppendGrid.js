!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AppendGrid = t() : e.AppendGrid = t()
}
(window, (function () {
        return function (e) {
            var t = {};
            function n(o) {
                if (t[o])
                    return t[o].exports;
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n),
                r.l = !0,
                r.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: o
                })
            },
            n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            },
            n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var r in e)
                        n.d(o, r, function (t) {
                            return e[t]
                        }
                            .bind(null, r));
                return o
            },
            n.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                }
                 : function () {
                    return e
                };
                return n.d(t, "a", t),
                t
            },
            n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            n.p = "/",
            n(n.s = 0)
        }
        ([function (e, t, n) {
                    "use strict";
                    function o(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    function r(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    n.r(t);
                    var i = function () {
                        function e(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            o(this, e),
                            this.name = t,
                            this.icons = {
                                append: null,
                                removeLast: null,
                                insert: null,
                                remove: null,
                                moveUp: null,
                                moveDown: null
                            },
                            this.isTextBased = n
                        }
                        var t,
                        n,
                        i;
                        return t = e,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        throw "*generateIcon* is not overrided for *".concat(this.name, "*.")
                                    }
                                }
                            ]) && r(t.prototype, n),
                        i && r(t, i),
                        e
                    }
                    ();
                    function u(e) {
                        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function l(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function a(e, t) {
                        return (a = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function c(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = f(e);
                            if (t) {
                                var r = f(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return s(this, n)
                        }
                    }
                    function s(e, t) {
                        return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function f(e) {
                        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var p = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && a(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = c(i);
                        function i(e) {
                            var t;
                            return function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-default", !0),
                            Object.assign(t.icons, {
                                append: "＋",
                                removeLast: "－",
                                insert: "↜",
                                remove: "✕",
                                moveUp: "▲",
                                moveDown: "▼"
                            }),
                            e && Object.assign(t.icons, e),
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createTextNode(this.icons[t] || "");
                                        return e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && l(t.prototype, n),
                        o && l(t, o),
                        i
                    }
                    (i);
                    function d(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        n && n.length && n.forEach((function (t) {
                                if (t) {
                                    var n = t.split(/\s+/gi);
                                    n && n.length && n.forEach((function (t) {
                                            t && e.classList.add(t)
                                        }))
                                }
                            }))
                    }
                    function m(e) {
                        return null == e
                    }
                    function y(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    function h(e) {
                        return "[object Object]" === Object.prototype.toString.call(e)
                    }
                    function v(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                        i = document.createElement(e);
                        return t && (i.id = t),
                        n && (i.name = n),
                        o && d(i, o),
                        r && (i.type = r),
                        i
                    }
                    function b(e) {
                        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function w(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function g(e, t) {
                        return (g = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function O(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = R(e);
                            if (t) {
                                var r = R(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return C(this, n)
                        }
                    }
                    function C(e, t) {
                        return !t || "object" !== b(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function R(e) {
                        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var k = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && g(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = O(i);
                        function i(e) {
                            var t;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-bootstrapicons");
                            var n = {
                                baseUrl: "",
                                icons: null
                            };
                            Object.assign(n, e);
                            var o = {
                                append: "plus",
                                removeLast: "dash",
                                insert: "arrow-90deg-left",
                                remove: "trash",
                                moveUp: "chevron-up",
                                moveDown: "chevron-down"
                            };
                            return n.icons && Object.assign(o, n.icons),
                            t.icons = o,
                            t.baseUrl = n.baseUrl,
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createElement("img");
                                        return n.src = this.baseUrl + this.icons[t] + ".svg",
                                        d(n, this.icons[t]),
                                        e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && w(t.prototype, n),
                        o && w(t, o),
                        i
                    }
                    (i);
                    function P(e) {
                        return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function _(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function S(e, t) {
                        return (S = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function j(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = E(e);
                            if (t) {
                                var r = E(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return x(this, n)
                        }
                    }
                    function x(e, t) {
                        return !t || "object" !== P(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function E(e) {
                        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var B = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && S(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = j(i);
                        function i(e) {
                            var t;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-fontawesome5");
                            var n = {
                                icons: null
                            };
                            Object.assign(n, e);
                            var o = {
                                append: "fa fa-plus",
                                removeLast: "fa fa-minus",
                                insert: "fa fa-reply",
                                remove: "fa fa-times",
                                moveUp: "fa fa-angle-up",
                                moveDown: "fa fa-angle-down"
                            };
                            return n.icons && Object.assign(o, n.icons),
                            t.icons = o,
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createElement("i");
                                        return d(n, this.icons[t]),
                                        e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && _(t.prototype, n),
                        o && _(t, o),
                        i
                    }
                    (i);
                    function I(e) {
                        return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function D(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function F(e, t) {
                        return (F = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function T(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = U(e);
                            if (t) {
                                var r = U(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return L(this, n)
                        }
                    }
                    function L(e, t) {
                        return !t || "object" !== I(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function U(e) {
                        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var A = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && F(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = T(i);
                        function i(e) {
                            var t;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-materialdesignicons3");
                            var n = {
                                icons: null
                            };
                            Object.assign(n, e);
                            var o = {
                                append: "mdi mdi-plus",
                                removeLast: "mdi mdi-minus",
                                insert: "mdi mdi-reply",
                                remove: "mdi mdi-close",
                                moveUp: "mdi mdi-chevron-up",
                                moveDown: "mdi mdi-chevron-down"
                            };
                            return n.icons && Object.assign(o, n.icons),
                            t.icons = o,
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createElement("span");
                                        return d(n, this.icons[t]),
                                        e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && D(t.prototype, n),
                        o && D(t, o),
                        i
                    }
                    (i);
                    function N(e) {
                        return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function G(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function M(e, t) {
                        return (M = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function q(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = $(e);
                            if (t) {
                                var r = $(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return V(this, n)
                        }
                    }
                    function V(e, t) {
                        return !t || "object" !== N(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function $(e) {
                        return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var W = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && M(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = q(i);
                        function i(e) {
                            var t;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-ionicon4");
                            var n = {
                                icons: null
                            };
                            Object.assign(n, e);
                            var o = {
                                append: "icon ion-md-add",
                                removeLast: "icon ion-md-remove",
                                insert: "icon ion-md-undo",
                                remove: "icon ion-md-close",
                                moveUp: "icon ion-md-arrow-dropup",
                                moveDown: "icon ion-md-arrow-dropdown"
                            };
                            return n.icons && Object.assign(o, n.icons),
                            t.icons = o,
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createElement("i");
                                        return d(n, this.icons[t]),
                                        e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && G(t.prototype, n),
                        o && G(t, o),
                        i
                    }
                    (i);
                    function H(e) {
                        return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function z(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function J(e, t) {
                        return (J = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function K(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = X(e);
                            if (t) {
                                var r = X(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return Q(this, n)
                        }
                    }
                    function Q(e, t) {
                        return !t || "object" !== H(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function X(e) {
                        return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var Y = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && J(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = K(i);
                        function i(e) {
                            var t;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-typicons2");
                            var n = {
                                icons: null
                            };
                            Object.assign(n, e);
                            var o = {
                                append: "typcn typcn-plus",
                                removeLast: "typcn typcn-minus",
                                insert: "typcn typcn-arrow-back",
                                remove: "typcn typcn-times",
                                moveUp: "typcn typcn-arrow-sorted-up",
                                moveDown: "typcn typcn-arrow-sorted-down"
                            };
                            return n.icons && Object.assign(o, n.icons),
                            t.icons = o,
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createElement("span");
                                        return d(n, this.icons[t]),
                                        e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && z(t.prototype, n),
                        o && z(t, o),
                        i
                    }
                    (i);
                    function Z(e) {
                        return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function ee(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function te(e, t) {
                        return (te = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function ne(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = re(e);
                            if (t) {
                                var r = re(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return oe(this, n)
                        }
                    }
                    function oe(e, t) {
                        return !t || "object" !== Z(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function re(e) {
                        return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var ie = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && te(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = ne(i);
                        function i(e) {
                            var t;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            t = r.call(this, "icon-openiconic");
                            var n = {
                                icons: null
                            };
                            Object.assign(n, e);
                            var o = {
                                append: "plus",
                                removeLast: "minus",
                                insert: "share",
                                remove: "x",
                                moveUp: "chevron-top",
                                moveDown: "chevron-bottom"
                            };
                            return n.icons && Object.assign(o, n.icons),
                            t.icons = o,
                            t
                        }
                        return t = i,
                        (n = [{
                                    key: "generateIcon",
                                    value: function (e, t) {
                                        var n = document.createElement("span");
                                        return n.className = "oi",
                                        n.dataset.glyph = this.icons[t],
                                        n.setAttribute("aria-hidden", "true"),
                                        e.appendChild(n),
                                        n
                                    }
                                }
                            ]) && ee(t.prototype, n),
                        o && ee(t, o),
                        i
                    }
                    (i);
                    function ue(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    var le = function () {
                        function e(t, n) {
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, e),
                            this.i18n = t,
                            this.iconFramework = n,
                            this.sectionClasses = {
                                table: null,
                                thead: null,
                                theadRow: null,
                                theadCell: null,
                                tbody: null,
                                tbodyRow: null,
                                tbodyCell: null,
                                tfoot: null,
                                tfootRow: null,
                                tfootCell: null,
                                first: null,
                                last: null,
                                control: null,
                                button: null,
                                buttonGroup: null,
                                append: null,
                                removeLast: null,
                                insert: null,
                                remove: null,
                                moveUp: null,
                                moveDown: null,
                                empty: null
                            }
                        }
                        var t,
                        n,
                        o;
                        return t = e,
                        (n = [{
                                    key: "applySectionClasses",
                                    value: function (e) {
                                        for (var t in this.sectionClasses)
                                            e[t] && (this.sectionClasses[t] ? this.sectionClasses[t] += " " + e[t] : this.sectionClasses[t] = e[t])
                                    }
                                }, {
                                    key: "getSectionClasses",
                                    value: function (e) {
                                        return this.sectionClasses[e]
                                    }
                                }, {
                                    key: "createButtonGroup",
                                    value: function () {
                                        return null
                                    }
                                }, {
                                    key: "generateButton",
                                    value: function (e, t, n) {
                                        var o = v("button", n, null, null, "button");
                                        return o.title = this.i18n[t],
                                        d(o, this.getSectionClasses("button"), this.getSectionClasses(t)),
                                        e.appendChild(o),
                                        this.iconFramework.generateIcon(o, t),
                                        o
                                    }
                                }, {
                                    key: "generateControl",
                                    value: function (e, t, n, o) {
                                        var r = null;
                                        if ("select" === t.type)
                                            if (r = v("select", n, o), Array.isArray(t.ctrlOptions)) {
                                                if (t.ctrlOptions.length > 0)
                                                    if (h(t.ctrlOptions[0]))
                                                        for (var i = null, u = null, l = 0; l < t.ctrlOptions.length; l++) {
                                                            m(t.ctrlOptions[l].group) ? u = null : i !== t.ctrlOptions[l].group && (i = t.ctrlOptions[l].group, (u = v("optgroup")).label = i, r.appendChild(u));
                                                            var a = v("option");
                                                            a.value = t.ctrlOptions[l].value,
                                                            a.innerText = t.ctrlOptions[l].label,
                                                            m(t.ctrlOptions[l].title) || a.setAttribute("title", t.ctrlOptions[l].title),
                                                            null === u ? a.appendTo(r) : a.appendTo(u)
                                                        }
                                                    else
                                                        for (var c = 0; c < t.ctrlOptions.length; c++) {
                                                            var s = t.ctrlOptions[c];
                                                            r.options[r.options.length] = new Option(s, s)
                                                        }
                                            } else if (h(t.ctrlOptions))
                                                for (var f in t.ctrlOptions)
                                                    r.options[r.options.length] = new Option(t.ctrlOptions[f], f);
                                            else if ("string" == typeof t.ctrlOptions)
                                                for (var p = t.ctrlOptions.split(";"), y = 0; y < p.length; y++) {
                                                    var b = p[y].indexOf(":");
                                                    r.options[r.options.length] = -1 === b ? new Option(p[y], p[y]) : new Option(p[y].substring(b + 1, p[y].length), p[y].substring(0, b))
                                                }
                                            else
                                                "function" == typeof t.ctrlOptions && t.ctrlOptions(r);
                                        else if ("checkbox" === t.type)
                                            (r = v("input", n, o, null, "checkbox")).value = 1;
                                        else if ("textarea" === t.type)
                                            r = v("textarea", n, o);
                                        else if (-1 != t.type.search(/^(color|date|datetime|datetime\-local|email|month|number|range|search|tel|time|url|week)$/)) {
                                            r = v("input", n, o);
                                            try {
                                                r.type = t.type
                                            } catch (e) {}
                                        } else (r = v("input", n, o)).type = "text";
                                        return d(r, this.getSectionClasses("control"), t.ctrlClass),
                                        e && e.appendChild(r),
                                        r
                                    }
                                }
                            ]) && ue(t.prototype, n),
                        o && ue(t, o),
                        e
                    }
                    ();
                    function ae(e) {
                        return (ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function ce(e, t) {
                        return (ce = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function se(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = pe(e);
                            if (t) {
                                var r = pe(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return fe(this, n)
                        }
                    }
                    function fe(e, t) {
                        return !t || "object" !== ae(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function pe(e) {
                        return (pe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var de = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && ce(e, t)
                        }
                        (n, e);
                        var t = se(n);
                        function n(e, o, r) {
                            var i;
                            return function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, n),
                            (i = t.call(this, o, r)).name = "ui-default",
                            i
                        }
                        return n
                    }
                    (le);
                    function me(e) {
                        return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function ye(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function he(e, t, n) {
                        return (he = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                            var o = function (e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ge(e)); );
                                return e
                            }
                            (e, t);
                            if (o) {
                                var r = Object.getOwnPropertyDescriptor(o, t);
                                return r.get ? r.get.call(n) : r.value
                            }
                        })(e, t, n || e)
                    }
                    function ve(e, t) {
                        return (ve = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function be(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = ge(e);
                            if (t) {
                                var r = ge(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return we(this, n)
                        }
                    }
                    function we(e, t) {
                        return !t || "object" !== me(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function ge(e) {
                        return (ge = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var Oe = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && ve(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = be(i);
                        function i(e, t, n) {
                            var o;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            (o = r.call(this, t, n)).name = "ui-bootstrap4";
                            var u = {
                                useButtonGroup: !0,
                                sectionClasses: null,
                                sizing: "normal"
                            };
                            Object.assign(u, e);
                            var l = {
                                table: "table",
                                thead: "thead-light",
                                control: "form-control",
                                button: "btn",
                                buttonGroup: "btn-group",
                                append: "btn-outline-secondary",
                                removeLast: "btn-outline-secondary",
                                insert: "btn-outline-secondary",
                                remove: "btn-outline-secondary",
                                moveUp: "btn-outline-secondary",
                                moveDown: "btn-outline-secondary",
                                empty: "text-center"
                            };
                            return "small" === u.sizing ? (l.table += " table-sm", l.buttonGroup += " btn-group-sm", l.control += " form-control-sm") : "large" === u.sizing && (l.buttonGroup += " btn-group-lg", l.control += " form-control-lg"),
                            u.sectionClasses && Object.assign(l, u.sectionClasses),
                            o.applySectionClasses(l),
                            o.uiParams = u,
                            o
                        }
                        return t = i,
                        (n = [{
                                    key: "createButtonGroup",
                                    value: function () {
                                        if (this.uiParams.useButtonGroup) {
                                            var e = document.createElement("div");
                                            return d(e, this.getSectionClasses("buttonGroup")),
                                            e
                                        }
                                        return he(ge(i.prototype), "createButtonGroup", this).call(this)
                                    }
                                }, {
                                    key: "generateControl",
                                    value: function (e, t, n, o) {
                                        var r = null;
                                        if ("checkbox" === t.type) {
                                            var u = v("div", null, null, "form-check");
                                            e.appendChild(u),
                                            (r = v("input", n, o, "form-check-input position-static")).type = "checkbox",
                                            r.value = 1,
                                            d(r, t.ctrlClass),
                                            u.appendChild(r)
                                        } else
                                            "readonly" === t.type ? (d(r = v("input", n, o, null, "text"), this.getSectionClasses("control"), t.ctrlClass), r.classList.remove("form-control"), r.classList.add("form-control-plaintext"), r.readOnly = !0, e.appendChild(r)) : r = he(ge(i.prototype), "generateControl", this).call(this, e, t, n, o);
                                        return r
                                    }
                                }
                            ]) && ye(t.prototype, n),
                        o && ye(t, o),
                        i
                    }
                    (le);
                    function Ce(e) {
                        return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function Re(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function ke(e, t, n) {
                        return (ke = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                            var o = function (e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = je(e)); );
                                return e
                            }
                            (e, t);
                            if (o) {
                                var r = Object.getOwnPropertyDescriptor(o, t);
                                return r.get ? r.get.call(n) : r.value
                            }
                        })(e, t, n || e)
                    }
                    function Pe(e, t) {
                        return (Pe = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function _e(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = je(e);
                            if (t) {
                                var r = je(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return Se(this, n)
                        }
                    }
                    function Se(e, t) {
                        return !t || "object" !== Ce(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function je(e) {
                        return (je = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var xe = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && Pe(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = _e(i);
                        function i(e, t, n) {
                            var o;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            (o = r.call(this, t, n)).name = "ui-bulma";
                            var u = {
                                useButtonGroup: !0,
                                sectionClasses: null,
                                sizing: "normal"
                            };
                            Object.assign(u, e);
                            var l = {
                                table: "table",
                                control: "input",
                                button: "button",
                                buttonGroup: "field has-addons",
                                append: "is-outlined",
                                removeLast: "is-outlined",
                                insert: "is-outlined",
                                remove: "is-outlined",
                                moveUp: "is-outlined",
                                moveDown: "is-outlined",
                                empty: "has-text-centered"
                            };
                            return "small" === u.sizing ? (l.table += " is-narrow", l.control += " is-small", l.button += " is-small") : "medium" === u.sizing ? (l.control += " is-medium", l.button += " is-medium") : "large" === u.sizing && (l.control += " is-large", l.button += " is-large"),
                            u.sectionClasses && Object.assign(l, u.sectionClasses),
                            o.applySectionClasses(l),
                            o.uiParams = u,
                            o
                        }
                        return t = i,
                        (n = [{
                                    key: "generateButton",
                                    value: function (e, t, n) {
                                        var o = v("button", n, null, null, "button");
                                        o.title = this.i18n[t],
                                        d(o, this.getSectionClasses("button"), this.getSectionClasses(t));
                                        var r = null;
                                        if (this.iconFramework.isTextBased ? r = o : ((r = document.createElement("span")).classList.add("icon"), o.appendChild(r)), this.iconFramework.generateIcon(r, t), this.uiParams.useButtonGroup) {
                                            var i = document.createElement("p");
                                            i.classList.add("control"),
                                            i.appendChild(o),
                                            e.appendChild(i)
                                        } else
                                            e.appendChild(o);
                                        return o
                                    }
                                }, {
                                    key: "createButtonGroup",
                                    value: function () {
                                        if (this.uiParams.useButtonGroup) {
                                            var e = document.createElement("div");
                                            return d(e, this.getSectionClasses("buttonGroup")),
                                            e
                                        }
                                        return ke(je(i.prototype), "createButtonGroup", this).call(this)
                                    }
                                }, {
                                    key: "generateControl",
                                    value: function (e, t, n, o) {
                                        var r = null;
                                        if ("select" === t.type) {
                                            var u = v("div", null, null, "select");
                                            "small" === this.uiParams.sizing ? u.classList.add("is-small") : "medium" === this.uiParams.sizing ? u.classList.add("is-medium") : "large" === this.uiParams.sizing && u.classList.add("is-large"),
                                            e.appendChild(u),
                                            d(r = ke(je(i.prototype), "generateControl", this).call(this, null, t, n, o), t.ctrlClass),
                                            u.appendChild(r)
                                        } else if ("checkbox" === t.type) {
                                            var l = v("label", null, null, "checkbox");
                                            e.appendChild(l),
                                            (r = v("input", n, o, null, "checkbox")).value = 1,
                                            d(r, t.ctrlClass),
                                            l.appendChild(r)
                                        } else
                                            "readonly" === t.type ? (d(r = v("input", n, o, null, "text"), this.getSectionClasses("control"), t.ctrlClass), r.classList.add("is-static"), r.readOnly = !0, e.appendChild(r)) : r = ke(je(i.prototype), "generateControl", this).call(this, e, t, n, o);
                                        return r
                                    }
                                }
                            ]) && Re(t.prototype, n),
                        o && Re(t, o),
                        i
                    }
                    (le);
                    function Ee(e) {
                        return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        }
                             : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }
                    function Be(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    function Ie(e, t, n) {
                        return (Ie = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                            var o = function (e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Le(e)); );
                                return e
                            }
                            (e, t);
                            if (o) {
                                var r = Object.getOwnPropertyDescriptor(o, t);
                                return r.get ? r.get.call(n) : r.value
                            }
                        })(e, t, n || e)
                    }
                    function De(e, t) {
                        return (De = Object.setPrototypeOf || function (e, t) {
                            return e.__proto__ = t,
                            e
                        })(e, t)
                    }
                    function Fe(e) {
                        var t = function () {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        ();
                        return function () {
                            var n,
                            o = Le(e);
                            if (t) {
                                var r = Le(this).constructor;
                                n = Reflect.construct(o, arguments, r)
                            } else
                                n = o.apply(this, arguments);
                            return Te(this, n)
                        }
                    }
                    function Te(e, t) {
                        return !t || "object" !== Ee(t) && "function" != typeof t ? function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        (e) : t
                    }
                    function Le(e) {
                        return (Le = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var Ue = function (e) {
                        !function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                            t && De(e, t)
                        }
                        (i, e);
                        var t,
                        n,
                        o,
                        r = Fe(i);
                        function i(e, t, n) {
                            var o;
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, i),
                            (o = r.call(this, t, n)).name = "ui-foundation6";
                            var u = {
                                useButtonGroup: !0,
                                sectionClasses: null
                            };
                            Object.assign(u, e);
                            var l = {
                                button: "button",
                                buttonGroup: "button-group"
                            };
                            return u.sectionClasses && Object.assign(l, u.sectionClasses),
                            o.applySectionClasses(l),
                            o.uiParams = u,
                            o
                        }
                        return t = i,
                        (n = [{
                                    key: "createButtonGroup",
                                    value: function () {
                                        if (this.uiParams.useButtonGroup) {
                                            var e = document.createElement("div");
                                            return d(e, this.getSectionClasses("buttonGroup")),
                                            e
                                        }
                                        return Ie(Le(i.prototype), "createButtonGroup", this).call(this)
                                    }
                                }
                            ]) && Be(t.prototype, n),
                        o && Be(t, o),
                        i
                    }
                    (le);
                    function Ae(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    var Ne = function () {
                        function e(t) {
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, e);
                            var n = this;
                            Object.assign(n, {
                                uniqueIndex: 0,
                                rowOrder: [],
                                isDataLoaded: !1,
                                visibleCount: 0,
                                finalColSpan: 0,
                                hideLastColumn: !1,
                                settings: null,
                                tbWhole: null,
                                tbBody: null,
                                iconFramework: null,
                                uiFramework: null
                            });
                            var o = Object.assign({}, t);
                            n.settings = o;
                            var r = null;
                            if (!(r = "string" == typeof o.element ? document.getElementById(o.element) : o.element) || !r.tagName || "TABLE" !== r.tagName)
                                throw "*element* is not defined or is not a table DOM element.";
                            if (n.tbWhole = r, r.innerHTML = "", "bootstrapicons" === o.iconFramework)
                                n.iconFramework = new k(o.iconParams);
                            else if ("fontawesome5" === o.iconFramework)
                                n.iconFramework = new B(o.iconParams);
                            else if ("ionicon4" === o.iconFramework)
                                n.iconFramework = new W(o.iconParams);
                            else if ("materialdesignicons3" === o.iconFramework)
                                n.iconFramework = new A(o.iconParams);
                            else if ("openiconic" === o.iconFramework)
                                n.iconFramework = new ie(o.iconParams);
                            else if ("typicons2" === o.iconFramework)
                                n.iconFramework = new Y(o.iconParams);
                            else {
                                if (o.iconFramework && "default" !== o.iconFramework)
                                    throw "Unknown Icon framework *".concat(o.iconFramework, "*.");
                                n.iconFramework = new p(o.iconParams)
                            }
                            if ("bootstrap4" === o.uiFramework)
                                n.uiFramework = new Oe(o.uiParams, o.i18n, n.iconFramework);
                            else if ("bulma" === o.uiFramework)
                                n.uiFramework = new xe(o.uiParams, o.i18n, n.iconFramework);
                            else if ("foundation6" === o.uiFramework)
                                n.uiFramework = new Ue(o.uiParams, o.i18n, n.iconFramework);
                            else {
                                if (o.uiFramework && "default" !== o.uiFramework)
                                    throw "Unknown UI framework *".concat(o.uiFramework, "*.");
                                n.uiFramework = new de(o.uiParams, o.i18n, n.iconFramework)
                            }
                            m(o.idPrefix) && (r.id ? o.idPrefix = r.id : o.idPrefix = "ag" + (new Date).getTime()),
                            o.sectionClasses && n.uiFramework.applySectionClasses(o.sectionClasses),
                            d(r, n.uiFramework.getSectionClasses("table"));
                            var i = n.createElement("thead");
                            r.appendChild(i);
                            var u,
                            l = n.createElement("tr", "theadRow");
                            i.appendChild(l);
                            var a = 0;
                            o.hideRowNumColumn || (u = n.createElement("th", "theadCell"), l.appendChild(u), a++);
                            for (var c = 0, s = 0; s < o.columns.length; s++)
                                if ("hidden" !== o.columns[s].type) {
                                    if (0 === c) {
                                        if (u = n.createElement("th", "theadCell"), l.appendChild(u), d(u, o.columns[s].displayClass), !m(o.columns[s].displayCss))
                                            for (var f in o.columns[s].displayCss)
                                                u.style[f] = o.columns[s].displayCss[f];
                                        o.columns[s].headerSpan > 1 && (u.setAttribute("colSpan", o.columns[s].headerSpan), c = o.columns[s].headerSpan - 1),
                                        "function" == typeof o.columns[s].display ? o.columns[s].display(u) : o.columns[s].display && (u.innerText = o.columns[s].display)
                                    } else
                                        c--;
                                    a++
                                }
                            u = n.createElement("th", "theadCell"),
                            o.hideButtons.insert && o.hideButtons.remove && o.hideButtons.moveUp && o.hideButtons.moveDown ? (n.hideLastColumn = !0, u.style.display = "none") : a++,
                            !n.hideLastColumn && o.rowButtonsInFront ? o.hideRowNumColumn ? l.insertBefore(u, l.firstChild) : l.insertBefore(u, l.childNodes[1]) : l.appendChild(u),
                            n.finalColSpan = a;
                            var y = n.createElement("tbody");
                            r.appendChild(y),
                            n.tbBody = y;
                            var h = n.createElement("tfoot");
                            r.appendChild(h),
                            l = n.createElement("tr", "tfootRow"),
                            h.appendChild(l),
                            (u = n.createElement("td", "tfootCell")).colSpan = n.finalColSpan,
                            l.appendChild(u);
                            var b = o.idPrefix + "_rowOrder",
                            w = v("input", b, b, null, "hidden");
                            if (u.appendChild(w), o.hideButtons.append && o.hideButtons.removeLast)
                                l.style.display = "none";
                            else {
                                var g = n.uiFramework.createButtonGroup();
                                if (g ? u.appendChild(g) : g = u, !o.hideButtons.append)
                                    n.uiFramework.generateButton(g, "append").addEventListener("click", (function (e) {
                                            n.insertRow(1)
                                        }));
                                if (!o.hideButtons.removeLast)
                                    n.uiFramework.generateButton(g, "removeLast").addEventListener("click", (function (e) {
                                            n.removeRow()
                                        }))
                            }
                            this.showEmptyMessage(),
                            n.settings = o
                        }
                        var t,
                        n,
                        o;
                        return t = e,
                        (n = [{
                                    key: "createElement",
                                    value: function (e, t, n) {
                                        return v(e, n, null, this.uiFramework.getSectionClasses(t || e))
                                    }
                                }, {
                                    key: "loadData",
                                    value: function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                        if (!Array.isArray(e) || !e.length)
                                            throw "*records* should be in array format!";
                                        var n = this,
                                        o = n.settings;
                                        n.tbBody.innerHTML = "",
                                        n.rowOrder.length = 0,
                                        n.uniqueIndex = 0;
                                        for (var r = n.insertRow(e.length), i = 0; i < r.addedRows.length; i++) {
                                            for (var u = 0; u < o.columns.length; u++)
                                                n.setCtrlValue(u, n.rowOrder[i], e[i][o.columns[u].name]);
                                            "function" == typeof o.rowDataLoaded && o.rowDataLoaded(n.tbWhole, e[i], i, n.rowOrder[i])
                                        }
                                        n.isDataLoaded = !0,
                                        t && (n.settings.initData = null),
                                        "function" == typeof o.dataLoaded && o.dataLoaded(n.tbWhole, e)
                                    }
                                }, {
                                    key: "insertRow",
                                    value: function (e, t, n) {
                                        var o,
                                        r,
                                        i = this,
                                        u = i.settings,
                                        l = i.uiFramework,
                                        a = i.tbBody,
                                        c = [],
                                        s = null,
                                        f = !1,
                                        p = e,
                                        h = !1;
                                        if (Array.isArray(e) && (p = e.length, h = !0), y(n)) {
                                            for (var b = 0; b < i.rowOrder.length; b++)
                                                if (i.rowOrder[b] === n) {
                                                    t = b,
                                                    0 !== b && (s = b - 1);
                                                    break
                                                }
                                        } else
                                            y(t) ? t >= i.rowOrder.length ? t = null : s = t - 1 : 0 !== i.rowOrder.length && (t = null, s = i.rowOrder.length - 1);
                                        0 === i.rowOrder.length && (a.innerHTML = "");
                                        for (var w = function (n) {
                                            if (0 < u.maxRowsAllowed && i.rowOrder.length >= u.maxRowsAllowed)
                                                return f = !0, "break";
                                            var s = ++i.uniqueIndex,
                                            p = [];
                                            if ((o = i.createElement("tr", "tbodyRow", u.idPrefix + "_$row_" + s)).dataset.uniqueIndex = s, y(t)) {
                                                var b = t + n;
                                                i.rowOrder.splice(b, 0, s),
                                                a.insertBefore(o, a.childNodes[b])
                                            } else
                                                i.rowOrder.push(s), a.appendChild(o);
                                            c.push(s),
                                            u.hideRowNumColumn || ((r = i.createElement("td", "tbodyCell", u.idPrefix + "_$rowNum_" + s)).innerText = "" + i.rowOrder.length, d(r, l.getSectionClasses("first")), o.appendChild(r));
                                            for (var w = 0; w < u.columns.length; w++)
                                                if ("hidden" !== u.columns[w].type) {
                                                    if (r = i.createElement("td", "tbodyCell"), o.appendChild(r), d(r, u.columns[w].cellClass), !m(u.columns[w].cellCss))
                                                        for (var g in u.columns[w].cellCss)
                                                            r.style[g] = u.columns[w].cellCss[g];
                                                    var O = u.idPrefix + "_" + u.columns[w].name + "_" + s,
                                                    C = void 0;
                                                    C = "function" == typeof u.nameFormatter ? u.nameFormatter(u.idPrefix, u.columns[w].name, s) : O;
                                                    var R = null,
                                                    k = "custom" === u.columns[w].type;
                                                    if (k)
                                                        "function" == typeof u.columns[w].customBuilder && (R = u.columns[w].customBuilder(r, u.idPrefix, u.columns[w].name, s));
                                                        else {
                                                            if (R = i.uiFramework.generateControl(r, u.columns[w], O, C), !m(u.columns[w].ctrlAttr))
                                                                for (var P in u.columns[w].ctrlAttr)
                                                                    R.setAttribute(P, u.columns[w].ctrlAttr[P]);
                                                            if (!m(u.columns[w].ctrlCss))
                                                                for (var _ in u.columns[w].ctrlCss)
                                                                    R.style[_] = u.columns[w].ctrlCss[_];
                                                            if (u.columns[w].events) {
                                                                R.dataset.columnName = u.columns[w].name,
                                                                R.dataset.uniqueIndex = s;
                                                                var S = function (e) {
                                                                    var t = u.columns[w].events[e];
                                                                    R.addEventListener(e, (function (e) {
                                                                            e.columnName = e.currentTarget.dataset.columnName,
                                                                            e.uniqueIndex = parseInt(e.currentTarget.dataset.uniqueIndex),
                                                                            t(e)
                                                                        }))
                                                                };
                                                                for (var j in u.columns[w].events)
                                                                    S(j)
                                                            }
                                                        }
                                                        h ? i.setCtrlValue(w, s, e[n][u.columns[w].name]) : m(u.columns[w].value) || i.setCtrlValue(w, s, u.columns[w].value),
                                                        k || "function" != typeof u.columns[w].ctrlAdded || u.columns[w].ctrlAdded(R, r, s)
                                                    } else
                                                        p.push(w);
                                                if (r = i.createElement("td", "tbodyCell", u.idPrefix + "_$rowButton_" + s), i.hideLastColumn || !u.rowButtonsInFront ? o.appendChild(r) : u.hideRowNumColumn ? o.insertBefore(r, o.firstChild) : o.insertBefore(r, o.childNodes[1]), p.forEach((function (t) {
                                                            var o,
                                                            l = u.columns[t].name,
                                                            a = u.idPrefix + "_" + l + "_" + s;
                                                            o = "function" == typeof u.nameFormatter ? u.nameFormatter(u.idPrefix, l, s) : a,
                                                            r.appendChild(v("input", a, o, null, "hidden")),
                                                            h ? i.setCtrlValue(t, s, e[n][l]) : m(u.columns[t].value) || i.setCtrlValue(t, s, u.columns[t].value)
                                                        })), i.hideLastColumn)
                                                    r.style.display = "none";
                                                else if (u.columns.length > i.visibleCount) {
                                                    d(r, l.getSectionClasses("last"));
                                                    var x = l.createButtonGroup();
                                                    x ? r.appendChild(x) : x = r,
                                                    ["insert", "remove", "moveUp", "moveDown"].forEach((function (e) {
                                                            if (!u.hideButtons[e]) {
                                                                var t = u.idPrefix + "_$" + e + "_" + s,
                                                                n = l.generateButton(x, e, t);
                                                                n.dataset.uniqueIndex = s,
                                                                n.addEventListener("click", (function (t) {
                                                                        var n = parseInt(t.currentTarget.dataset.uniqueIndex);
                                                                        i.rowButtonActions(e, n)
                                                                    }))
                                                            }
                                                        }))
                                                }
                                            }, g = 0; g < p && "break" !== w(g); g++);
                                        return i.saveSetting(),
                                        u.hideRowNumColumn || m(t) || i.sortSequence(t),
                                        y(t) ? "function" == typeof u.afterRowInserted && u.afterRowInserted(i.tbWhole, s, c) : "function" == typeof u.afterRowAppended && u.afterRowAppended(i.tbWhole, s, c),
                                        f && "function" == typeof u.maxNumRowsReached && u.maxNumRowsReached(i.tbWhole), {
                                            addedRows: c,
                                            parentIndex: s,
                                            rowIndex: t
                                        }
                                    }
                                }, {
                                    key: "removeRow",
                                    value: function (e, t, n) {
                                        var o = this.settings,
                                        r = this.tbBody;
                                        if (y(t))
                                            for (var i = 0; i < this.rowOrder.length; i++)
                                                if (this.rowOrder[i] === t) {
                                                    e = i;
                                                    break
                                                }
                                        y(e) ? (n || "function" != typeof o.beforeRowRemove || o.beforeRowRemove(this.tbWhole, e)) && (this.rowOrder.splice(e, 1), r.removeChild(r.childNodes[e]), this.saveSetting(), o.hideRowNumColumn || this.sortSequence(e), "function" == typeof o.afterRowRemoved && o.afterRowRemoved(this.tbWhole, e)) : (n || "function" != typeof o.beforeRowRemove || o.beforeRowRemove(this.tbWhole, this.rowOrder.length - 1)) && (t = this.rowOrder.pop(), r.removeChild(r.lastChild), this.saveSetting(), "function" == typeof o.afterRowRemoved && o.afterRowRemoved(this.tbWhole, null)),
                                        0 === this.rowOrder.length && this.showEmptyMessage()
                                    }
                                }, {
                                    key: "moveUpRow",
                                    value: function (e, t) {
                                        var n = this.settings,
                                        o = this.tbBody,
                                        r = null;
                                        if (y(e) && e > 0 && e < this.rowOrder.length ? (r = e, t = this.rowOrder[e]) : y(t) && (r = this.findRowIndex(t)), !m(r) && r > 0) {
                                            var i = this.rowOrder[r - 1],
                                            u = document.getElementById(n.idPrefix + "_$row_" + t),
                                            l = document.getElementById(n.idPrefix + "_$row_" + i);
                                            if (o.removeChild(u), o.insertBefore(u, l), this.rowOrder[r] = i, this.rowOrder[r - 1] = t, !n.hideRowNumColumn) {
                                                var a = document.getElementById(n.idPrefix + "_$rowNum_" + t),
                                                c = document.getElementById(n.idPrefix + "_$rowNum_" + i),
                                                s = c.innerHTML;
                                                c.innerHTML = a.innerHTML,
                                                a.innerHTML = s
                                            }
                                            this.saveSetting(),
                                            document.getElementById(n.idPrefix + "_$moveUp_" + t).blur(),
                                            document.getElementById(n.idPrefix + "_$moveUp_" + i).focus(),
                                            "function" == typeof n.afterRowSwapped && n.afterRowSwapped(this.tbWhole, r, r - 1)
                                        }
                                    }
                                }, {
                                    key: "moveDownRow",
                                    value: function (e, t) {
                                        var n = this.settings,
                                        o = this.tbBody,
                                        r = null;
                                        if (y(e) && e >= 0 && e < this.rowOrder.length - 1 ? (r = e, t = this.rowOrder[e]) : y(t) && (r = this.findRowIndex(t)), !m(r) && r !== this.rowOrder.length - 1) {
                                            var i = this.rowOrder[r + 1],
                                            u = document.getElementById(n.idPrefix + "_$row_" + t),
                                            l = document.getElementById(n.idPrefix + "_$row_" + i);
                                            if (o.removeChild(l), o.insertBefore(l, u), this.rowOrder[r] = i, this.rowOrder[r + 1] = t, !n.hideRowNumColumn) {
                                                var a = document.getElementById(n.idPrefix + "_$rowNum_" + t),
                                                c = document.getElementById(n.idPrefix + "_$rowNum_" + i),
                                                s = c.innerHTML;
                                                c.innerHTML = a.innerHTML,
                                                a.innerHTML = s
                                            }
                                            this.saveSetting(),
                                            document.getElementById(n.idPrefix + "_$moveDown_" + t).blur(),
                                            document.getElementById(n.idPrefix + "_$moveDown_" + i).focus(),
                                            "function" == typeof n.afterRowSwapped && n.afterRowSwapped(this.tbWhole, r, r + 1)
                                        }
                                    }
                                }, {
                                    key: "setCtrlValue",
                                    value: function (e, t, n) {
                                        var o = this.settings,
                                        r = o.columns[e].type,
                                        i = o.columns[e].name;
                                        if ("custom" === r)
                                            "function" == typeof o.columns[e].customSetter && o.columns[e].customSetter(o.idPrefix, i, t, n);
                                        else {
                                            var u = this.getCellCtrl(o.idPrefix, i, t);
                                            "checkbox" === r ? "boolean" == typeof n ? u.checked = n : y(n) ? u.checked = 0 !== n : u.checked = !m(n) : u.value = m(n) ? "" : n
                                        }
                                    }
                                }, {
                                    key: "getCellCtrl",
                                    value: function (e, t, n) {
                                        return document.getElementById(e + "_" + t + "_" + n)
                                    }
                                }, {
                                    key: "getCtrlValue",
                                    value: function (e, t) {
                                        var n = this.settings,
                                        o = n.columns[e];
                                        if ("custom" === o.type) {
                                            if ("function" == typeof o.customGetter)
                                                return o.customGetter(n.idPrefix, o.name, t);
                                            throw "*customGetter* of column *".concat(o.name, "* is not defined.")
                                        }
                                        var r = this.getCellCtrl(n.idPrefix, o.name, t);
                                        return null === r ? null : "checkbox" === o.type ? r.checked ? 1 : 0 : r.value
                                    }
                                }, {
                                    key: "getRowValue",
                                    value: function (e, t) {
                                        var n = this,
                                        o = {},
                                        r = m(t) ? "" : "_" + t;
                                        return n.settings.columns.forEach((function (t, i) {
                                                var u = t.name + r;
                                                o[u] = n.getCtrlValue(i, e)
                                            })),
                                        o
                                    }
                                }, {
                                    key: "getColumnIndex",
                                    value: function (e) {
                                        for (var t = this.settings.columns, n = 0; n < t.length; n++)
                                            if (t[n].name === e)
                                                return n;
                                        return null
                                    }
                                }, {
                                    key: "isRowEmpty",
                                    value: function (e) {
                                        for (var t = this.settings.columns, n = 0; n < t.length; n++) {
                                            var o = t[n].emptyCriteria,
                                            r = this.getCtrlValue(n, e);
                                            if ("function" == typeof o) {
                                                if (!o(r))
                                                    return !1
                                            } else {
                                                var i = null;
                                                if (m(o)) {
                                                    var u = t[n].type;
                                                    if ("checkbox" === u)
                                                        i = 0;
                                                    else if ("select" === u) {
                                                        var l = this.getCellCtrl(this.settings.idPrefix, t[n].name, e).options;
                                                        i = l.length > 0 ? l[0].value : ""
                                                    } else
                                                        i = ""
                                                } else
                                                    i = o;
                                                if (r !== i)
                                                    return !1
                                            }
                                        }
                                        return !0
                                    }
                                }, {
                                    key: "findRowIndex",
                                    value: function (e) {
                                        for (var t = 0; t < this.rowOrder.length; t++)
                                            if (this.rowOrder[t] === e)
                                                return t;
                                        return null
                                    }
                                }, {
                                    key: "saveSetting",
                                    value: function () {
                                        document.getElementById(this.settings.idPrefix + "_rowOrder").value = this.rowOrder.join()
                                    }
                                }, {
                                    key: "showEmptyMessage",
                                    value: function () {
                                        this.tbBody.innerHTML = "";
                                        var e = this.createElement("tr", "tbodyRow");
                                        this.tbBody.appendChild(e);
                                        var t = this.createElement("td", "tbodyCell");
                                        t.setAttribute("colspan", this.finalColSpan),
                                        d(t, this.uiFramework.getSectionClasses("empty")),
                                        t.innerText = this.settings.i18n.rowEmpty,
                                        e.appendChild(t)
                                    }
                                }, {
                                    key: "sortSequence",
                                    value: function (e) {
                                        for (var t = e || 0; t < this.rowOrder.length; t++)
                                            document.getElementById(this.settings.idPrefix + "_$rowNum_" + this.rowOrder[t]).innerText = "" + (t + 1)
                                    }
                                }, {
                                    key: "rowButtonActions",
                                    value: function (e, t) {
                                        "insert" === e ? this.insertRow(1, null, t) : "remove" === e ? this.removeRow(null, t) : "moveUp" === e ? this.moveUpRow(null, t) : "moveDown" === e && this.moveDownRow(null, t)
                                    }
                                }
                            ]) && Ae(t.prototype, n),
                        o && Ae(t, o),
                        e
                    }
                    ();
                    function Ge(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1,
                            o.configurable = !0,
                            "value" in o && (o.writable = !0),
                            Object.defineProperty(e, o.key, o)
                        }
                    }
                    var Me = new WeakMap,
                    qe = {
                        element: null,
                        uiFramework: null,
                        uiParams: null,
                        iconFramework: null,
                        iconParams: null,
                        initRows: 3,
                        idPrefix: null,
                        initData: null,
                        columns: [],
                        i18n: null,
                        hideButtons: null,
                        hideRowNumColumn: !1,
                        rowButtonsInFront: !1,
                        rowCountName: "_RowCount",
                        sectionClasses: null,
                        maxRowsAllowed: 0
                    },
                    Ve = {
                        nameFormatter: null,
                        dataLoaded: null,
                        rowDataLoaded: null,
                        afterRowAppended: null,
                        afterRowInserted: null,
                        afterRowSwapped: null,
                        beforeRowRemove: null,
                        afterRowRemoved: null,
                        maxNumRowsReached: null
                    },
                    $e = {
                        type: "text",
                        name: null,
                        value: null,
                        display: null,
                        displayCss: null,
                        displayClass: null,
                        displayTooltip: null,
                        headerSpan: 1,
                        cellCss: null,
                        cellClass: null,
                        ctrlAttr: null,
                        ctrlProp: null,
                        ctrlCss: null,
                        ctrlClass: null,
                        ctrlOptions: null,
                        invisible: !1,
                        emptyCriteria: null,
                        customBuilder: null,
                        customGetter: null,
                        customSetter: null,
                        events: null,
                        ctrlAdded: null
                    },
                    We = function () {
                        function e(t) {
                            !function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            (this, e);
                            var n = Object.assign({}, qe, Ve, t),
                            o = {
                                append: "Append Row",
                                removeLast: "Remove Last Row",
                                insert: "Insert Row Above",
                                remove: "Remove Current Row",
                                moveUp: "Move Up",
                                moveDown: "Move Down",
                                rowEmpty: "This Grid Is Empty"
                            };
                            n.i18n && Object.assign(o, n.i18n),
                            n.i18n = o;
                            var r = {
                                append: !1,
                                removeLast: !1,
                                insert: !1,
                                remove: !1,
                                moveUp: !1,
                                moveDown: !1
                            };
                            n.hideButtons && Object.assign(r, n.hideButtons),
                            n.hideButtons = r;
                            for (var i = 0; i < n.columns.length; i++) {
                                var u = Object.assign({}, $e, n.columns[i]);
                                n.columns[i] = u
                            }
                            var l = new Ne(n);
                            Me.set(this, l),
                            Array.isArray(n.initData) ? l.loadData(n.initData, !0) : n.initRows > 0 && l.insertRow(n.initRows)
                        }
                        var t,
                        n,
                        o;
                        return t = e,
                        (n = [{
                                    key: "appendRow",
                                    value: function (e) {
                                        return Me.get(this).insertRow(e || 1).addedRows
                                    }
                                }, {
                                    key: "insertRow",
                                    value: function (e, t) {
                                        return Me.get(this).insertRow(e, t).addedRows
                                    }
                                }, {
                                    key: "removeRow",
                                    value: function (e) {
                                        Me.get(this).removeRow(e)
                                    }
                                }, {
                                    key: "moveUpRow",
                                    value: function (e) {
                                        Me.get(this).moveUpRow(e)
                                    }
                                }, {
                                    key: "moveDownRow",
                                    value: function (e) {
                                        Me.get(this).moveDownRow(e)
                                    }
                                }, {
                                    key: "load",
                                    value: function (e) {
                                        Me.get(this).loadData(e)
                                    }
                                }, {
                                    key: "getAllValue",
                                    value: function (e) {
                                        var t = Me.get(this),
                                        n = e ? {}
                                         : [];
                                        return t.rowOrder.forEach((function (o, r) {
                                                e ? Object.assign(n, t.getRowValue(o, r)) : n.push(t.getRowValue(o))
                                            })),
                                        e && (n[t.settings.rowCountName] = t.rowOrder.length),
                                        n
                                    }
                                }, {
                                    key: "getUniqueIndex",
                                    value: function (e) {
                                        var t = Me.get(this).rowOrder;
                                        return e >= 0 && e < t.length ? t[e] : null
                                    }
                                }, {
                                    key: "getRowIndex",
                                    value: function (e) {
                                        for (var t = Me.get(this).rowOrder, n = 0; n < t.length; n++)
                                            if (t[n] === e)
                                                return n;
                                        return null
                                    }
                                }, {
                                    key: "getRowCount",
                                    value: function () {
                                        return Me.get(this).rowOrder.length
                                    }
                                }, {
                                    key: "getRowOrder",
                                    value: function () {
                                        return Me.get(this).rowOrder.slice()
                                    }
                                }, {
                                    key: "getRowValue",
                                    value: function (e) {
                                        var t = this.getUniqueIndex(e);
                                        return null !== t ? Me.get(this).getRowValue(t) : null
                                    }
                                }, {
                                    key: "getCtrlValue",
                                    value: function (e, t) {
                                        var n = Me.get(this).getColumnIndex(e),
                                        o = this.getUniqueIndex(t);
                                        return null !== n && null !== o ? Me.get(this).getCtrlValue(n, o) : null
                                    }
                                }, {
                                    key: "setCtrlValue",
                                    value: function (e, t, n) {
                                        var o = Me.get(this).getColumnIndex(e),
                                        r = this.getUniqueIndex(t);
                                        if (null !== o && null !== r)
                                            return Me.get(this).setCtrlValue(o, r, n)
                                    }
                                }, {
                                    key: "getColumns",
                                    value: function () {
                                        return Me.get(this).settings.columns.slice()
                                    }
                                }, {
                                    key: "getCellCtrl",
                                    value: function (e, t) {
                                        var n = this.getUniqueIndex(t);
                                        return this.getCellCtrlByUniqueIndex(e, n)
                                    }
                                }, {
                                    key: "getCellCtrlByUniqueIndex",
                                    value: function (e, t) {
                                        var n = Me.get(this);
                                        return null !== n.getColumnIndex(e) && y(t) ? n.getCellCtrl(n.settings.idPrefix, e, t) : null
                                    }
                                }, {
                                    key: "isRowEmpty",
                                    value: function (e) {
                                        var t = this.getUniqueIndex(e);
                                        return null === t || Me.get(this).isRowEmpty(t)
                                    }
                                }, {
                                    key: "removeEmptyRows",
                                    value: function () {
                                        for (var e = Me.get(this), t = this.getRowOrder(), n = 0; n < t.length; n++)
                                            e.isRowEmpty(t[n]) && e.removeRow(null, t[n], !0)
                                    }
                                }
                            ]) && Ge(t.prototype, n),
                        o && Ge(t, o),
                        e
                    }
                    ();
                    t.default = We
                }
            ]).default
    }));
