function M(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function L(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function ye(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var E = {
    exports: {}
}
  , _ = {}
  , C = {
    exports: {}
}
  , u = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y = Symbol.for("react.element")
  , F = Symbol.for("react.portal")
  , J = Symbol.for("react.fragment")
  , U = Symbol.for("react.strict_mode")
  , W = Symbol.for("react.profiler")
  , Y = Symbol.for("react.provider")
  , V = Symbol.for("react.context")
  , z = Symbol.for("react.forward_ref")
  , H = Symbol.for("react.suspense")
  , G = Symbol.for("react.memo")
  , K = Symbol.for("react.lazy")
  , S = Symbol.iterator;
function Q(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var T = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , $ = Object.assign
  , P = {};
function p(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = P,
    this.updater = n || T
}
p.prototype.isReactComponent = {};
p.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
p.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function A() {}
A.prototype = p.prototype;
function v(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = P,
    this.updater = n || T
}
var w = v.prototype = new A;
w.constructor = v;
$(w, p.prototype);
w.isPureReactComponent = !0;
var j = Array.isArray
  , D = Object.prototype.hasOwnProperty
  , b = {
    current: null
}
  , q = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function B(e, t, n) {
    var r, o = {}, s = null, c = null;
    if (t != null)
        for (r in t.ref !== void 0 && (c = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            D.call(t, r) && !q.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var i = Array(a), f = 0; f < a; f++)
            i[f] = arguments[f + 2];
        o.children = i
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: y,
        type: e,
        key: s,
        ref: c,
        props: o,
        _owner: b.current
    }
}
function X(e, t) {
    return {
        $$typeof: y,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function x(e) {
    return typeof e == "object" && e !== null && e.$$typeof === y
}
function Z(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var R = /\/+/g;
function k(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Z("" + e.key) : t.toString(36)
}
function h(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var c = !1;
    if (e === null)
        c = !0;
    else
        switch (s) {
        case "string":
        case "number":
            c = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case y:
            case F:
                c = !0
            }
        }
    if (c)
        return c = e,
        o = o(c),
        e = r === "" ? "." + k(c, 0) : r,
        j(o) ? (n = "",
        e != null && (n = e.replace(R, "$&/") + "/"),
        h(o, t, n, "", function(f) {
            return f
        })) : o != null && (x(o) && (o = X(o, n + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(R, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (c = 0,
    r = r === "" ? "." : r + ":",
    j(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var i = r + k(s, a);
            c += h(s, t, n, i, o)
        }
    else if (i = Q(e),
    typeof i == "function")
        for (e = i.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            i = r + k(s, a++),
            c += h(s, t, n, i, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return c
}
function d(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return h(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function ee(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var l = {
    current: null
}
  , m = {
    transition: null
}
  , te = {
    ReactCurrentDispatcher: l,
    ReactCurrentBatchConfig: m,
    ReactCurrentOwner: b
};
function I() {
    throw Error("act(...) is not supported in production builds of React.")
}
u.Children = {
    map: d,
    forEach: function(e, t, n) {
        d(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return d(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return d(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!x(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
u.Component = p;
u.Fragment = J;
u.Profiler = W;
u.PureComponent = v;
u.StrictMode = U;
u.Suspense = H;
u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te;
u.act = I;
u.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = $({}, e.props)
      , o = e.key
      , s = e.ref
      , c = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        c = b.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (i in t)
            D.call(t, i) && !q.hasOwnProperty(i) && (r[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i])
    }
    var i = arguments.length - 2;
    if (i === 1)
        r.children = n;
    else if (1 < i) {
        a = Array(i);
        for (var f = 0; f < i; f++)
            a[f] = arguments[f + 2];
        r.children = a
    }
    return {
        $$typeof: y,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: c
    }
}
;
u.createContext = function(e) {
    return e = {
        $$typeof: V,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Y,
        _context: e
    },
    e.Consumer = e
}
;
u.createElement = B;
u.createFactory = function(e) {
    var t = B.bind(null, e);
    return t.type = e,
    t
}
;
u.createRef = function() {
    return {
        current: null
    }
}
;
u.forwardRef = function(e) {
    return {
        $$typeof: z,
        render: e
    }
}
;
u.isValidElement = x;
u.lazy = function(e) {
    return {
        $$typeof: K,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ee
    }
}
;
u.memo = function(e, t) {
    return {
        $$typeof: G,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
u.startTransition = function(e) {
    var t = m.transition;
    m.transition = {};
    try {
        e()
    } finally {
        m.transition = t
    }
}
;
u.unstable_act = I;
u.useCallback = function(e, t) {
    return l.current.useCallback(e, t)
}
;
u.useContext = function(e) {
    return l.current.useContext(e)
}
;
u.useDebugValue = function() {}
;
u.useDeferredValue = function(e) {
    return l.current.useDeferredValue(e)
}
;
u.useEffect = function(e, t) {
    return l.current.useEffect(e, t)
}
;
u.useId = function() {
    return l.current.useId()
}
;
u.useImperativeHandle = function(e, t, n) {
    return l.current.useImperativeHandle(e, t, n)
}
;
u.useInsertionEffect = function(e, t) {
    return l.current.useInsertionEffect(e, t)
}
;
u.useLayoutEffect = function(e, t) {
    return l.current.useLayoutEffect(e, t)
}
;
u.useMemo = function(e, t) {
    return l.current.useMemo(e, t)
}
;
u.useReducer = function(e, t, n) {
    return l.current.useReducer(e, t, n)
}
;
u.useRef = function(e) {
    return l.current.useRef(e)
}
;
u.useState = function(e) {
    return l.current.useState(e)
}
;
u.useSyncExternalStore = function(e, t, n) {
    return l.current.useSyncExternalStore(e, t, n)
}
;
u.useTransition = function() {
    return l.current.useTransition()
}
;
u.version = "18.3.1";
C.exports = u;
var g = C.exports;
const re = L(g)
  , de = M({
    __proto__: null,
    default: re
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne = g
  , oe = Symbol.for("react.element")
  , ue = Symbol.for("react.fragment")
  , se = Object.prototype.hasOwnProperty
  , ce = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ie = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function N(e, t, n) {
    var r, o = {}, s = null, c = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (c = t.ref);
    for (r in t)
        se.call(t, r) && !ie.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: oe,
        type: e,
        key: s,
        ref: c,
        props: o,
        _owner: ce.current
    }
}
_.Fragment = ue;
_.jsx = N;
_.jsxs = N;
E.exports = _;
var O = E.exports;
const ae = "Test Your Knowledge of Miner's Jargon!"
  , le = {
    successTitle: "Great Job!",
    successText: O.jsxs("span", {
        children: ["You", "'", "re no Johnny Newcome. You know miner jargon like the back of your hand, and you", "'", "d have no problem chatting with the muckmen ", "'", "round the tipple. Click below to access exclusive content from our archives with the password: ", O.jsx("span", {
            className: "fw-bold",
            children: "PICKAXE"
        })]
    }),
    successButtonText: "Access Content",
    failButtonText: "Retry",
    successButtonRoute: {
        name: "Content",
        params: {
            assignment: 1
        }
    },
    failTitle: "Rats!",
    failText: "Looks like your luster didn't pass muster this time around. But, don't break your pick! Take another look at some of the content from our archives to get better acquainted with miner jargon, and you'll do better next time."
}
  , fe = [{
    question: "What were strikebreakers known as?",
    answers: [{
        key: "A",
        text: "Poorboys",
        correct: !1
    }, {
        key: "B",
        text: "Blacklegs",
        correct: !0
    }, {
        key: "C",
        text: "Outta Towners",
        correct: !1
    }, {
        key: "D",
        text: "Hardbacks",
        correct: !1
    }]
}, {
    question: "What was the usual nickname for a new miner?",
    answers: [{
        key: "A",
        text: "Jimmy Pickaxe",
        correct: !1
    }, {
        key: "B",
        text: "Danny Softhands",
        correct: !1
    }, {
        key: "C",
        text: "Johnny Newcome",
        correct: !0
    }, {
        key: "D",
        text: "Shineboot Jack",
        correct: !1
    }]
}, {
    question: "What did it mean if you were slabbed?",
    answers: [{
        key: "A",
        text: "You were fired",
        correct: !1
    }, {
        key: "B",
        text: "You were covered in mud",
        correct: !1
    }, {
        key: "C",
        text: "You lost a fight",
        correct: !1
    }, {
        key: "D",
        text: "You were hit with a falling rock",
        correct: !0
    }]
}, {
    question: "Who was Quinine Jimmy?",
    answers: [{
        key: "A",
        text: "The mining camp doctor on duty",
        correct: !0
    }, {
        key: "B",
        text: "The bartender at the local pub",
        correct: !1
    }, {
        key: "C",
        text: "A miner that just got out of the hospital",
        correct: !1
    }, {
        key: "D",
        text: "A miner that complained constantly",
        correct: !1
    }]
}, {
    question: "What was the term for the spot where mine cars are emptied of their coal?",
    answers: [{
        key: "A",
        text: "Dirtbucket",
        correct: !1
    }, {
        key: "B",
        text: "Tipple",
        correct: !0
    }, {
        key: "C",
        text: "Rockbin",
        correct: !1
    }, {
        key: "D",
        text: "Dumper",
        correct: !1
    }]
}, {
    question: "What would miners call the layers of soil and rock covering a coal seam?",
    answers: [{
        key: "A",
        text: "Thickdirt",
        correct: !1
    }, {
        key: "B",
        text: "Hell's Trapdoor",
        correct: !1
    }, {
        key: "C",
        text: "Overburden",
        correct: !0
    }, {
        key: "D",
        text: "Rockhaul",
        correct: !1
    }]
}, {
    question: 'If another miner runs out yelling "Roof fall!", what does he mean?',
    answers: [{
        key: "A",
        text: "The exposed coal seam ran out",
        correct: !1
    }, {
        key: "B",
        text: "The miner's helmet fell over his eyes",
        correct: !1
    }, {
        key: "C",
        text: "They just finished sounding the next tunnel's structure",
        correct: !1
    }, {
        key: "D",
        text: "The tunnel collapsed",
        correct: !0
    }]
}]
  , he = Object.freeze(Object.defineProperty({
    __proto__: null,
    meta: le,
    questions: fe,
    title: ae
}, Symbol.toStringTag, {
    value: "Module"
}));
export {de as R, re as a, he as b, pe as c, ye as d, L as g, O as j, g as r};
//# sourceMappingURL=quiz-questions-CUbXBx_m.js.map
