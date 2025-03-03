var x1 = Object.defineProperty;
var E1 = (a, r, i) =>
  r in a
    ? x1(a, r, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (a[r] = i);
var ri = (a, r, i) => E1(a, typeof r != "symbol" ? r + "" : r, i);
function C1(a, r) {
  for (var i = 0; i < r.length; i++) {
    const u = r[i];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const s in u)
        if (s !== "default" && !(s in a)) {
          const f = Object.getOwnPropertyDescriptor(u, s);
          f &&
            Object.defineProperty(
              a,
              s,
              f.get ? f : { enumerable: !0, get: () => u[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && u(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function u(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = i(s);
    fetch(s.href, f);
  }
})();
function kg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var $c = { exports: {} },
  ii = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m;
function T1() {
  if (_m) return ii;
  _m = 1;
  var a = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function i(u, s, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      f = {};
      for (var p in s) p !== "key" && (f[p] = s[p]);
    } else f = s;
    return (
      (s = f.ref),
      { $$typeof: a, type: u, key: d, ref: s !== void 0 ? s : null, props: f }
    );
  }
  return (ii.Fragment = r), (ii.jsx = i), (ii.jsxs = i), ii;
}
var Nm;
function A1() {
  return Nm || ((Nm = 1), ($c.exports = T1())), $c.exports;
}
var B = A1(),
  Hc = { exports: {} },
  ye = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm;
function R1() {
  if (Bm) return ye;
  Bm = 1;
  var a = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function x(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (S && O[S]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    E = {};
  function _(O, Y, re) {
    (this.props = O),
      (this.context = Y),
      (this.refs = E),
      (this.updater = re || R);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (O, Y) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, O, Y, "setState");
    }),
    (_.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function z() {}
  z.prototype = _.prototype;
  function H(O, Y, re) {
    (this.props = O),
      (this.context = Y),
      (this.refs = E),
      (this.updater = re || R);
  }
  var k = (H.prototype = new z());
  (k.constructor = H), T(k, _.prototype), (k.isPureReactComponent = !0);
  var U = Array.isArray,
    M = { H: null, A: null, T: null, S: null },
    G = Object.prototype.hasOwnProperty;
  function P(O, Y, re, ie, I, pe) {
    return (
      (re = pe.ref),
      {
        $$typeof: a,
        type: O,
        key: Y,
        ref: re !== void 0 ? re : null,
        props: pe,
      }
    );
  }
  function ee(O, Y) {
    return P(O.type, Y, void 0, void 0, void 0, O.props);
  }
  function Z(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }
  function v(O) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (re) {
        return Y[re];
      })
    );
  }
  var Q = /\/+/g;
  function F(O, Y) {
    return typeof O == "object" && O !== null && O.key != null
      ? v("" + O.key)
      : Y.toString(36);
  }
  function te() {}
  function ce(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(te, te)
            : ((O.status = "pending"),
              O.then(
                function (Y) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = Y));
                },
                function (Y) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = Y));
                },
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function de(O, Y, re, ie, I) {
    var pe = typeof O;
    (pe === "undefined" || pe === "boolean") && (O = null);
    var J = !1;
    if (O === null) J = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case a:
            case r:
              J = !0;
              break;
            case b:
              return (J = O._init), de(J(O._payload), Y, re, ie, I);
          }
      }
    if (J)
      return (
        (I = I(O)),
        (J = ie === "" ? "." + F(O, 0) : ie),
        U(I)
          ? ((re = ""),
            J != null && (re = J.replace(Q, "$&/") + "/"),
            de(I, Y, re, "", function (we) {
              return we;
            }))
          : I != null &&
            (Z(I) &&
              (I = ee(
                I,
                re +
                  (I.key == null || (O && O.key === I.key)
                    ? ""
                    : ("" + I.key).replace(Q, "$&/") + "/") +
                  J,
              )),
            Y.push(I)),
        1
      );
    J = 0;
    var Te = ie === "" ? "." : ie + ":";
    if (U(O))
      for (var he = 0; he < O.length; he++)
        (ie = O[he]), (pe = Te + F(ie, he)), (J += de(ie, Y, re, pe, I));
    else if (((he = x(O)), typeof he == "function"))
      for (O = he.call(O), he = 0; !(ie = O.next()).done; )
        (ie = ie.value), (pe = Te + F(ie, he++)), (J += de(ie, Y, re, pe, I));
    else if (pe === "object") {
      if (typeof O.then == "function") return de(ce(O), Y, re, ie, I);
      throw (
        ((Y = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return J;
  }
  function W(O, Y, re) {
    if (O == null) return O;
    var ie = [],
      I = 0;
    return (
      de(O, ie, "", "", function (pe) {
        return Y.call(re, pe, I++);
      }),
      ie
    );
  }
  function ne(O) {
    if (O._status === -1) {
      var Y = O._result;
      (Y = Y()),
        Y.then(
          function (re) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = re));
          },
          function (re) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = re));
          },
        ),
        O._status === -1 && ((O._status = 0), (O._result = Y));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ae =
    typeof reportError == "function"
      ? reportError
      : function (O) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Y = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof O == "object" &&
                O !== null &&
                typeof O.message == "string"
                  ? String(O.message)
                  : String(O),
              error: O,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", O);
            return;
          }
          console.error(O);
        };
  function se() {}
  return (
    (ye.Children = {
      map: W,
      forEach: function (O, Y, re) {
        W(
          O,
          function () {
            Y.apply(this, arguments);
          },
          re,
        );
      },
      count: function (O) {
        var Y = 0;
        return (
          W(O, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (O) {
        return (
          W(O, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (O) {
        if (!Z(O))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return O;
      },
    }),
    (ye.Component = _),
    (ye.Fragment = i),
    (ye.Profiler = s),
    (ye.PureComponent = H),
    (ye.StrictMode = u),
    (ye.Suspense = g),
    (ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M),
    (ye.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ye.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (ye.cloneElement = function (O, Y, re) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + ".",
        );
      var ie = T({}, O.props),
        I = O.key,
        pe = void 0;
      if (Y != null)
        for (J in (Y.ref !== void 0 && (pe = void 0),
        Y.key !== void 0 && (I = "" + Y.key),
        Y))
          !G.call(Y, J) ||
            J === "key" ||
            J === "__self" ||
            J === "__source" ||
            (J === "ref" && Y.ref === void 0) ||
            (ie[J] = Y[J]);
      var J = arguments.length - 2;
      if (J === 1) ie.children = re;
      else if (1 < J) {
        for (var Te = Array(J), he = 0; he < J; he++)
          Te[he] = arguments[he + 2];
        ie.children = Te;
      }
      return P(O.type, I, void 0, void 0, pe, ie);
    }),
    (ye.createContext = function (O) {
      return (
        (O = {
          $$typeof: d,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: f, _context: O }),
        O
      );
    }),
    (ye.createElement = function (O, Y, re) {
      var ie,
        I = {},
        pe = null;
      if (Y != null)
        for (ie in (Y.key !== void 0 && (pe = "" + Y.key), Y))
          G.call(Y, ie) &&
            ie !== "key" &&
            ie !== "__self" &&
            ie !== "__source" &&
            (I[ie] = Y[ie]);
      var J = arguments.length - 2;
      if (J === 1) I.children = re;
      else if (1 < J) {
        for (var Te = Array(J), he = 0; he < J; he++)
          Te[he] = arguments[he + 2];
        I.children = Te;
      }
      if (O && O.defaultProps)
        for (ie in ((J = O.defaultProps), J))
          I[ie] === void 0 && (I[ie] = J[ie]);
      return P(O, pe, void 0, void 0, null, I);
    }),
    (ye.createRef = function () {
      return { current: null };
    }),
    (ye.forwardRef = function (O) {
      return { $$typeof: p, render: O };
    }),
    (ye.isValidElement = Z),
    (ye.lazy = function (O) {
      return { $$typeof: b, _payload: { _status: -1, _result: O }, _init: ne };
    }),
    (ye.memo = function (O, Y) {
      return { $$typeof: m, type: O, compare: Y === void 0 ? null : Y };
    }),
    (ye.startTransition = function (O) {
      var Y = M.T,
        re = {};
      M.T = re;
      try {
        var ie = O(),
          I = M.S;
        I !== null && I(re, ie),
          typeof ie == "object" &&
            ie !== null &&
            typeof ie.then == "function" &&
            ie.then(se, ae);
      } catch (pe) {
        ae(pe);
      } finally {
        M.T = Y;
      }
    }),
    (ye.unstable_useCacheRefresh = function () {
      return M.H.useCacheRefresh();
    }),
    (ye.use = function (O) {
      return M.H.use(O);
    }),
    (ye.useActionState = function (O, Y, re) {
      return M.H.useActionState(O, Y, re);
    }),
    (ye.useCallback = function (O, Y) {
      return M.H.useCallback(O, Y);
    }),
    (ye.useContext = function (O) {
      return M.H.useContext(O);
    }),
    (ye.useDebugValue = function () {}),
    (ye.useDeferredValue = function (O, Y) {
      return M.H.useDeferredValue(O, Y);
    }),
    (ye.useEffect = function (O, Y) {
      return M.H.useEffect(O, Y);
    }),
    (ye.useId = function () {
      return M.H.useId();
    }),
    (ye.useImperativeHandle = function (O, Y, re) {
      return M.H.useImperativeHandle(O, Y, re);
    }),
    (ye.useInsertionEffect = function (O, Y) {
      return M.H.useInsertionEffect(O, Y);
    }),
    (ye.useLayoutEffect = function (O, Y) {
      return M.H.useLayoutEffect(O, Y);
    }),
    (ye.useMemo = function (O, Y) {
      return M.H.useMemo(O, Y);
    }),
    (ye.useOptimistic = function (O, Y) {
      return M.H.useOptimistic(O, Y);
    }),
    (ye.useReducer = function (O, Y, re) {
      return M.H.useReducer(O, Y, re);
    }),
    (ye.useRef = function (O) {
      return M.H.useRef(O);
    }),
    (ye.useState = function (O) {
      return M.H.useState(O);
    }),
    (ye.useSyncExternalStore = function (O, Y, re) {
      return M.H.useSyncExternalStore(O, Y, re);
    }),
    (ye.useTransition = function () {
      return M.H.useTransition();
    }),
    (ye.version = "19.0.0"),
    ye
  );
}
var Um;
function bf() {
  return Um || ((Um = 1), (Hc.exports = R1())), Hc.exports;
}
var A = bf();
const Mn = kg(A),
  ef = C1({ __proto__: null, default: Mn }, [A]);
var Lc = { exports: {} },
  oi = {},
  qc = { exports: {} },
  Gc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jm;
function O1() {
  return (
    jm ||
      ((jm = 1),
      (function (a) {
        function r(W, ne) {
          var ae = W.length;
          W.push(ne);
          e: for (; 0 < ae; ) {
            var se = (ae - 1) >>> 1,
              O = W[se];
            if (0 < s(O, ne)) (W[se] = ne), (W[ae] = O), (ae = se);
            else break e;
          }
        }
        function i(W) {
          return W.length === 0 ? null : W[0];
        }
        function u(W) {
          if (W.length === 0) return null;
          var ne = W[0],
            ae = W.pop();
          if (ae !== ne) {
            W[0] = ae;
            e: for (var se = 0, O = W.length, Y = O >>> 1; se < Y; ) {
              var re = 2 * (se + 1) - 1,
                ie = W[re],
                I = re + 1,
                pe = W[I];
              if (0 > s(ie, ae))
                I < O && 0 > s(pe, ie)
                  ? ((W[se] = pe), (W[I] = ae), (se = I))
                  : ((W[se] = ie), (W[re] = ae), (se = re));
              else if (I < O && 0 > s(pe, ae))
                (W[se] = pe), (W[I] = ae), (se = I);
              else break e;
            }
          }
          return ne;
        }
        function s(W, ne) {
          var ae = W.sortIndex - ne.sortIndex;
          return ae !== 0 ? ae : W.id - ne.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            p = d.now();
          a.unstable_now = function () {
            return d.now() - p;
          };
        }
        var g = [],
          m = [],
          b = 1,
          S = null,
          x = 3,
          R = !1,
          T = !1,
          E = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          z = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        function k(W) {
          for (var ne = i(m); ne !== null; ) {
            if (ne.callback === null) u(m);
            else if (ne.startTime <= W)
              u(m), (ne.sortIndex = ne.expirationTime), r(g, ne);
            else break;
            ne = i(m);
          }
        }
        function U(W) {
          if (((E = !1), k(W), !T))
            if (i(g) !== null) (T = !0), ce();
            else {
              var ne = i(m);
              ne !== null && de(U, ne.startTime - W);
            }
        }
        var M = !1,
          G = -1,
          P = 5,
          ee = -1;
        function Z() {
          return !(a.unstable_now() - ee < P);
        }
        function v() {
          if (M) {
            var W = a.unstable_now();
            ee = W;
            var ne = !0;
            try {
              e: {
                (T = !1), E && ((E = !1), z(G), (G = -1)), (R = !0);
                var ae = x;
                try {
                  t: {
                    for (
                      k(W), S = i(g);
                      S !== null && !(S.expirationTime > W && Z());

                    ) {
                      var se = S.callback;
                      if (typeof se == "function") {
                        (S.callback = null), (x = S.priorityLevel);
                        var O = se(S.expirationTime <= W);
                        if (((W = a.unstable_now()), typeof O == "function")) {
                          (S.callback = O), k(W), (ne = !0);
                          break t;
                        }
                        S === i(g) && u(g), k(W);
                      } else u(g);
                      S = i(g);
                    }
                    if (S !== null) ne = !0;
                    else {
                      var Y = i(m);
                      Y !== null && de(U, Y.startTime - W), (ne = !1);
                    }
                  }
                  break e;
                } finally {
                  (S = null), (x = ae), (R = !1);
                }
                ne = void 0;
              }
            } finally {
              ne ? Q() : (M = !1);
            }
          }
        }
        var Q;
        if (typeof H == "function")
          Q = function () {
            H(v);
          };
        else if (typeof MessageChannel < "u") {
          var F = new MessageChannel(),
            te = F.port2;
          (F.port1.onmessage = v),
            (Q = function () {
              te.postMessage(null);
            });
        } else
          Q = function () {
            _(v, 0);
          };
        function ce() {
          M || ((M = !0), Q());
        }
        function de(W, ne) {
          G = _(function () {
            W(a.unstable_now());
          }, ne);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (W) {
            W.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            T || R || ((T = !0), ce());
          }),
          (a.unstable_forceFrameRate = function (W) {
            0 > W || 125 < W
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (P = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return i(g);
          }),
          (a.unstable_next = function (W) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = x;
            }
            var ae = x;
            x = ne;
            try {
              return W();
            } finally {
              x = ae;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (W, ne) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var ae = x;
            x = W;
            try {
              return ne();
            } finally {
              x = ae;
            }
          }),
          (a.unstable_scheduleCallback = function (W, ne, ae) {
            var se = a.unstable_now();
            switch (
              (typeof ae == "object" && ae !== null
                ? ((ae = ae.delay),
                  (ae = typeof ae == "number" && 0 < ae ? se + ae : se))
                : (ae = se),
              W)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = ae + O),
              (W = {
                id: b++,
                callback: ne,
                priorityLevel: W,
                startTime: ae,
                expirationTime: O,
                sortIndex: -1,
              }),
              ae > se
                ? ((W.sortIndex = ae),
                  r(m, W),
                  i(g) === null &&
                    W === i(m) &&
                    (E ? (z(G), (G = -1)) : (E = !0), de(U, ae - se)))
                : ((W.sortIndex = O), r(g, W), T || R || ((T = !0), ce())),
              W
            );
          }),
          (a.unstable_shouldYield = Z),
          (a.unstable_wrapCallback = function (W) {
            var ne = x;
            return function () {
              var ae = x;
              x = ne;
              try {
                return W.apply(this, arguments);
              } finally {
                x = ae;
              }
            };
          });
      })(Gc)),
    Gc
  );
}
var km;
function M1() {
  return km || ((km = 1), (qc.exports = O1())), qc.exports;
}
var Vc = { exports: {} },
  xt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $m;
function w1() {
  if ($m) return xt;
  $m = 1;
  var a = bf();
  function r(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        m += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var u = {
      d: {
        f: i,
        r: function () {
          throw Error(r(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function f(g, m, b) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: m,
      implementation: b,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (xt.createPortal = function (g, m) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return f(g, m, null, b);
    }),
    (xt.flushSync = function (g) {
      var m = d.T,
        b = u.p;
      try {
        if (((d.T = null), (u.p = 2), g)) return g();
      } finally {
        (d.T = m), (u.p = b), u.d.f();
      }
    }),
    (xt.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        u.d.C(g, m));
    }),
    (xt.prefetchDNS = function (g) {
      typeof g == "string" && u.d.D(g);
    }),
    (xt.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var b = m.as,
          S = p(b, m.crossOrigin),
          x = typeof m.integrity == "string" ? m.integrity : void 0,
          R = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        b === "style"
          ? u.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: S,
              integrity: x,
              fetchPriority: R,
            })
          : b === "script" &&
            u.d.X(g, {
              crossOrigin: S,
              integrity: x,
              fetchPriority: R,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (xt.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var b = p(m.as, m.crossOrigin);
            u.d.M(g, {
              crossOrigin: b,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && u.d.M(g);
    }),
    (xt.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var b = m.as,
          S = p(b, m.crossOrigin);
        u.d.L(g, b, {
          crossOrigin: S,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (xt.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var b = p(m.as, m.crossOrigin);
          u.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: b,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else u.d.m(g);
    }),
    (xt.requestFormReset = function (g) {
      u.d.r(g);
    }),
    (xt.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (xt.useFormState = function (g, m, b) {
      return d.H.useFormState(g, m, b);
    }),
    (xt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (xt.version = "19.0.0"),
    xt
  );
}
var Hm;
function $g() {
  if (Hm) return Vc.exports;
  Hm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), (Vc.exports = w1()), Vc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lm;
function D1() {
  if (Lm) return oi;
  Lm = 1;
  var a = M1(),
    r = bf(),
    i = $g();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var f = Symbol.for("react.element"),
    d = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    S = Symbol.for("react.provider"),
    x = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    z = Symbol.for("react.memo"),
    H = Symbol.for("react.lazy"),
    k = Symbol.for("react.offscreen"),
    U = Symbol.for("react.memo_cache_sentinel"),
    M = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var P = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === P ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case g:
        return "Fragment";
      case p:
        return "Portal";
      case b:
        return "Profiler";
      case m:
        return "StrictMode";
      case E:
        return "Suspense";
      case _:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return (e.displayName || "Context") + ".Provider";
        case x:
          return (e._context.displayName || "Context") + ".Consumer";
        case T:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case z:
          return (
            (t = e.displayName || null), t !== null ? t : ee(e.type) || "Memo"
          );
        case H:
          (t = e._payload), (e = e._init);
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  var Z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    v = Object.assign,
    Q,
    F;
  function te(e) {
    if (Q === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (Q = (t && t[1]) || ""),
          (F =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Q +
      e +
      F
    );
  }
  var ce = !1;
  function de(e, t) {
    if (!e || ce) return "";
    ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (q) {
                  var $ = q;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (q) {
                  $ = q;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                $ = q;
              }
              (K = e()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (q) {
            if (q && $ && typeof q.stack == "string") return [q.stack, $.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = l.DetermineComponentFrameRoot(),
        h = c[0],
        y = c[1];
      if (h && y) {
        var C = h.split(`
`),
          D = y.split(`
`);
        for (
          o = l = 0;
          l < C.length && !C[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; o < D.length && !D[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (l === C.length || o === D.length)
          for (
            l = C.length - 1, o = D.length - 1;
            1 <= l && 0 <= o && C[l] !== D[o];

          )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (C[l] !== D[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || C[l] !== D[o])) {
                  var V =
                    `
` + C[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", e.displayName)),
                    V
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      (ce = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? te(n) : "";
  }
  function W(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return te(e.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 15:
        return (e = de(e.type, !1)), e;
      case 11:
        return (e = de(e.type.render, !1)), e;
      case 1:
        return (e = de(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ne(e) {
    try {
      var t = "";
      do (t += W(e)), (e = e.return);
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function ae(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function se(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (ae(e) !== e) throw Error(u(188));
  }
  function Y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ae(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var c = o.alternate;
      if (c === null) {
        if (((l = o.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === c.child) {
        for (c = o.child; c; ) {
          if (c === n) return O(o), e;
          if (c === l) return O(o), t;
          c = c.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== l.return) (n = o), (l = c);
      else {
        for (var h = !1, y = o.child; y; ) {
          if (y === n) {
            (h = !0), (n = o), (l = c);
            break;
          }
          if (y === l) {
            (h = !0), (l = o), (n = c);
            break;
          }
          y = y.sibling;
        }
        if (!h) {
          for (y = c.child; y; ) {
            if (y === n) {
              (h = !0), (n = c), (l = o);
              break;
            }
            if (y === l) {
              (h = !0), (l = c), (n = o);
              break;
            }
            y = y.sibling;
          }
          if (!h) throw Error(u(189));
        }
      }
      if (n.alternate !== l) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function re(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = re(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var ie = Array.isArray,
    I = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    pe = { pending: !1, data: null, method: null, action: null },
    J = [],
    Te = -1;
  function he(e) {
    return { current: e };
  }
  function we(e) {
    0 > Te || ((e.current = J[Te]), (J[Te] = null), Te--);
  }
  function Ee(e, t) {
    Te++, (J[Te] = e.current), (e.current = t);
  }
  var ot = he(null),
    gn = he(null),
    Bt = he(null),
    yn = he(null);
  function Un(e, t) {
    switch ((Ee(Bt, t), Ee(gn, e), Ee(ot, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? om(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = om(e)), (t = um(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    we(ot), Ee(ot, t);
  }
  function Kt() {
    we(ot), we(gn), we(Bt);
  }
  function Je(e) {
    e.memoizedState !== null && Ee(yn, e);
    var t = ot.current,
      n = um(t, e.type);
    t !== n && (Ee(gn, e), Ee(ot, n));
  }
  function vt(e) {
    gn.current === e && (we(ot), we(gn)),
      yn.current === e && (we(yn), (ei._currentValue = pe));
  }
  var cn = Object.prototype.hasOwnProperty,
    ia = a.unstable_scheduleCallback,
    oa = a.unstable_cancelCallback,
    me = a.unstable_shouldYield,
    Bi = a.unstable_requestPaint,
    Ut = a.unstable_now,
    Ui = a.unstable_getCurrentPriorityLevel,
    ur = a.unstable_ImmediatePriority,
    ut = a.unstable_UserBlockingPriority,
    lt = a.unstable_NormalPriority,
    Tt = a.unstable_LowPriority,
    ua = a.unstable_IdlePriority,
    jt = a.log,
    fn = a.unstable_setDisableYieldValue,
    sr = null,
    kt = null;
  function r0(e) {
    if (kt && typeof kt.onCommitFiberRoot == "function")
      try {
        kt.onCommitFiberRoot(sr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function sa(e) {
    if (
      (typeof jt == "function" && fn(e),
      kt && typeof kt.setStrictMode == "function")
    )
      try {
        kt.setStrictMode(sr, e);
      } catch {}
  }
  var $t = Math.clz32 ? Math.clz32 : u0,
    i0 = Math.log,
    o0 = Math.LN2;
  function u0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((i0(e) / o0) | 0)) | 0;
  }
  var ji = 128,
    ki = 4194304;
  function ja(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function $i(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      o = e.suspendedLanes,
      c = e.pingedLanes,
      h = e.warmLanes;
    e = e.finishedLanes !== 0;
    var y = n & 134217727;
    return (
      y !== 0
        ? ((n = y & ~o),
          n !== 0
            ? (l = ja(n))
            : ((c &= y),
              c !== 0
                ? (l = ja(c))
                : e || ((h = y & ~h), h !== 0 && (l = ja(h)))))
        : ((y = n & ~o),
          y !== 0
            ? (l = ja(y))
            : c !== 0
              ? (l = ja(c))
              : e || ((h = n & ~h), h !== 0 && (l = ja(h)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            !(t & o) &&
            ((o = l & -l),
            (h = t & -t),
            o >= h || (o === 32 && (h & 4194176) !== 0))
          ? t
          : l
    );
  }
  function cr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function s0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function If() {
    var e = ji;
    return (ji <<= 1), !(ji & 4194176) && (ji = 128), e;
  }
  function ed() {
    var e = ki;
    return (ki <<= 1), !(ki & 62914560) && (ki = 4194304), e;
  }
  function Nu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function fr(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function c0(e, t, n, l, o, c) {
    var h = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var y = e.entanglements,
      C = e.expirationTimes,
      D = e.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var V = 31 - $t(n),
        K = 1 << V;
      (y[V] = 0), (C[V] = -1);
      var $ = D[V];
      if ($ !== null)
        for (D[V] = null, V = 0; V < $.length; V++) {
          var q = $[V];
          q !== null && (q.lane &= -536870913);
        }
      n &= ~K;
    }
    l !== 0 && td(e, l, 0),
      c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(h & ~t));
  }
  function td(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - $t(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194218));
  }
  function nd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - $t(n),
        o = 1 << l;
      (o & t) | (e[l] & t) && (e[l] |= t), (n &= ~o);
    }
  }
  function ad(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function ld() {
    var e = I.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Rm(e.type));
  }
  function f0(e, t) {
    var n = I.p;
    try {
      return (I.p = e), t();
    } finally {
      I.p = n;
    }
  }
  var ca = Math.random().toString(36).slice(2),
    bt = "__reactFiber$" + ca,
    Dt = "__reactProps$" + ca,
    dl = "__reactContainer$" + ca,
    Bu = "__reactEvents$" + ca,
    d0 = "__reactListeners$" + ca,
    h0 = "__reactHandles$" + ca,
    rd = "__reactResources$" + ca,
    dr = "__reactMarker$" + ca;
  function Uu(e) {
    delete e[bt], delete e[Dt], delete e[Bu], delete e[d0], delete e[h0];
  }
  function ka(e) {
    var t = e[bt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[dl] || n[bt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = fm(e); e !== null; ) {
            if ((n = e[bt])) return n;
            e = fm(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function hl(e) {
    if ((e = e[bt] || e[dl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function hr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function pl(e) {
    var t = e[rd];
    return (
      t ||
        (t = e[rd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function st(e) {
    e[dr] = !0;
  }
  var id = new Set(),
    od = {};
  function $a(e, t) {
    ml(e, t), ml(e + "Capture", t);
  }
  function ml(e, t) {
    for (od[e] = t, e = 0; e < t.length; e++) id.add(t[e]);
  }
  var jn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ud = {},
    sd = {};
  function m0(e) {
    return cn.call(sd, e)
      ? !0
      : cn.call(ud, e)
        ? !1
        : p0.test(e)
          ? (sd[e] = !0)
          : ((ud[e] = !0), !1);
  }
  function Hi(e, t, n) {
    if (m0(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Li(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function kn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Zt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function cd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function g0(e) {
    var t = cd(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (h) {
            (l = "" + h), c.call(this, h);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (h) {
            l = "" + h;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function qi(e) {
    e._valueTracker || (e._valueTracker = g0(e));
  }
  function fd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = cd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Gi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var y0 = /[\n"\\]/g;
  function Pt(e) {
    return e.replace(y0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ju(e, t, n, l, o, c, h, y) {
    (e.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (e.type = h)
        : e.removeAttribute("type"),
      t != null
        ? h === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Zt(t))
          : e.value !== "" + Zt(t) && (e.value = "" + Zt(t))
        : (h !== "submit" && h !== "reset") || e.removeAttribute("value"),
      t != null
        ? ku(e, h, Zt(t))
        : n != null
          ? ku(e, h, Zt(n))
          : l != null && e.removeAttribute("value"),
      o == null && c != null && (e.defaultChecked = !!c),
      o != null &&
        (e.checked = o && typeof o != "function" && typeof o != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.name = "" + Zt(y))
        : e.removeAttribute("name");
  }
  function dd(e, t, n, l, o, c, h, y) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) return;
      (n = n != null ? "" + Zt(n) : ""),
        (t = t != null ? "" + Zt(t) : n),
        y || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = y ? e.checked : !!l),
      (e.defaultChecked = !!l),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.name = h);
  }
  function ku(e, t, n) {
    (t === "number" && Gi(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function gl(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Zt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), l && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function hd(e, t, n) {
    if (
      t != null &&
      ((t = "" + Zt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function pd(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(u(92));
        if (ie(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Zt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l);
  }
  function yl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var v0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function md(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || v0.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function gd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var o in t)
        (l = t[o]), t.hasOwnProperty(o) && n[o] !== l && md(e, o, l);
    } else for (var c in t) t.hasOwnProperty(c) && md(e, c, t[c]);
  }
  function $u(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var b0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    S0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vi(e) {
    return S0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Hu = null;
  function Lu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var vl = null,
    bl = null;
  function yd(e) {
    var t = hl(e);
    if (t && (e = t.stateNode)) {
      var n = e[Dt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (ju(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Pt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var o = l[Dt] || null;
                if (!o) throw Error(u(90));
                ju(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (l = n[t]), l.form === e.form && fd(l);
          }
          break e;
        case "textarea":
          hd(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && gl(e, !!n.multiple, t, !1);
      }
    }
  }
  var qu = !1;
  function vd(e, t, n) {
    if (qu) return e(t, n);
    qu = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((qu = !1),
        (vl !== null || bl !== null) &&
          (Oo(), vl && ((t = vl), (e = bl), (bl = vl = null), yd(t), e)))
      )
        for (t = 0; t < e.length; t++) yd(e[t]);
    }
  }
  function pr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Dt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var Gu = !1;
  if (jn)
    try {
      var mr = {};
      Object.defineProperty(mr, "passive", {
        get: function () {
          Gu = !0;
        },
      }),
        window.addEventListener("test", mr, mr),
        window.removeEventListener("test", mr, mr);
    } catch {
      Gu = !1;
    }
  var fa = null,
    Vu = null,
    Yi = null;
  function bd() {
    if (Yi) return Yi;
    var e,
      t = Vu,
      n = t.length,
      l,
      o = "value" in fa ? fa.value : fa.textContent,
      c = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var h = n - e;
    for (l = 1; l <= h && t[n - l] === o[c - l]; l++);
    return (Yi = o.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Xi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Qi() {
    return !0;
  }
  function Sd() {
    return !1;
  }
  function zt(e) {
    function t(n, l, o, c, h) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null);
      for (var y in e)
        e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(c) : c[y]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Qi
          : Sd),
        (this.isPropagationStopped = Sd),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Qi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Qi));
        },
        persist: function () {},
        isPersistent: Qi,
      }),
      t
    );
  }
  var Ha = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ki = zt(Ha),
    gr = v({}, Ha, { view: 0, detail: 0 }),
    x0 = zt(gr),
    Yu,
    Xu,
    yr,
    Zi = v({}, gr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ku,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== yr &&
              (yr && e.type === "mousemove"
                ? ((Yu = e.screenX - yr.screenX), (Xu = e.screenY - yr.screenY))
                : (Xu = Yu = 0),
              (yr = e)),
            Yu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Xu;
      },
    }),
    xd = zt(Zi),
    E0 = v({}, Zi, { dataTransfer: 0 }),
    C0 = zt(E0),
    T0 = v({}, gr, { relatedTarget: 0 }),
    Qu = zt(T0),
    A0 = v({}, Ha, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    R0 = zt(A0),
    O0 = v({}, Ha, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    M0 = zt(O0),
    w0 = v({}, Ha, { data: 0 }),
    Ed = zt(w0),
    D0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    z0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function N0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _0[e])
        ? !!t[e]
        : !1;
  }
  function Ku() {
    return N0;
  }
  var B0 = v({}, gr, {
      key: function (e) {
        if (e.key) {
          var t = D0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Xi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? z0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ku,
      charCode: function (e) {
        return e.type === "keypress" ? Xi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Xi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    U0 = zt(B0),
    j0 = v({}, Zi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Cd = zt(j0),
    k0 = v({}, gr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ku,
    }),
    $0 = zt(k0),
    H0 = v({}, Ha, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    L0 = zt(H0),
    q0 = v({}, Zi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    G0 = zt(q0),
    V0 = v({}, Ha, { newState: 0, oldState: 0 }),
    Y0 = zt(V0),
    X0 = [9, 13, 27, 32],
    Zu = jn && "CompositionEvent" in window,
    vr = null;
  jn && "documentMode" in document && (vr = document.documentMode);
  var Q0 = jn && "TextEvent" in window && !vr,
    Td = jn && (!Zu || (vr && 8 < vr && 11 >= vr)),
    Ad = " ",
    Rd = !1;
  function Od(e, t) {
    switch (e) {
      case "keyup":
        return X0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Md(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sl = !1;
  function K0(e, t) {
    switch (e) {
      case "compositionend":
        return Md(t);
      case "keypress":
        return t.which !== 32 ? null : ((Rd = !0), Ad);
      case "textInput":
        return (e = t.data), e === Ad && Rd ? null : e;
      default:
        return null;
    }
  }
  function Z0(e, t) {
    if (Sl)
      return e === "compositionend" || (!Zu && Od(e, t))
        ? ((e = bd()), (Yi = Vu = fa = null), (Sl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Td && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var P0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function wd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!P0[e.type] : t === "textarea";
  }
  function Dd(e, t, n, l) {
    vl ? (bl ? bl.push(l) : (bl = [l])) : (vl = l),
      (t = _o(t, "onChange")),
      0 < t.length &&
        ((n = new Ki("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t }));
  }
  var br = null,
    Sr = null;
  function W0(e) {
    nm(e, 0);
  }
  function Pi(e) {
    var t = hr(e);
    if (fd(t)) return e;
  }
  function zd(e, t) {
    if (e === "change") return t;
  }
  var _d = !1;
  if (jn) {
    var Pu;
    if (jn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var Nd = document.createElement("div");
        Nd.setAttribute("oninput", "return;"),
          (Wu = typeof Nd.oninput == "function");
      }
      Pu = Wu;
    } else Pu = !1;
    _d = Pu && (!document.documentMode || 9 < document.documentMode);
  }
  function Bd() {
    br && (br.detachEvent("onpropertychange", Ud), (Sr = br = null));
  }
  function Ud(e) {
    if (e.propertyName === "value" && Pi(Sr)) {
      var t = [];
      Dd(t, Sr, e, Lu(e)), vd(W0, t);
    }
  }
  function J0(e, t, n) {
    e === "focusin"
      ? (Bd(), (br = t), (Sr = n), br.attachEvent("onpropertychange", Ud))
      : e === "focusout" && Bd();
  }
  function F0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Pi(Sr);
  }
  function I0(e, t) {
    if (e === "click") return Pi(t);
  }
  function ev(e, t) {
    if (e === "input" || e === "change") return Pi(t);
  }
  function tv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ht = typeof Object.is == "function" ? Object.is : tv;
  function xr(e, t) {
    if (Ht(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!cn.call(t, o) || !Ht(e[o], t[o])) return !1;
    }
    return !0;
  }
  function jd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function kd(e, t) {
    var n = jd(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jd(n);
    }
  }
  function $d(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? $d(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Hd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Gi(e.document);
    }
    return t;
  }
  function Ju(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function nv(e, t) {
    var n = Hd(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      $d(t.ownerDocument.documentElement, t)
    ) {
      if (l !== null && Ju(t)) {
        if (
          ((e = l.start),
          (n = l.end),
          n === void 0 && (n = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(n, t.value.length));
        else if (
          ((n = ((e = t.ownerDocument || document) && e.defaultView) || window),
          n.getSelection)
        ) {
          n = n.getSelection();
          var o = t.textContent.length,
            c = Math.min(l.start, o);
          (l = l.end === void 0 ? c : Math.min(l.end, o)),
            !n.extend && c > l && ((o = l), (l = c), (c = o)),
            (o = kd(t, c));
          var h = kd(t, l);
          o &&
            h &&
            (n.rangeCount !== 1 ||
              n.anchorNode !== o.node ||
              n.anchorOffset !== o.offset ||
              n.focusNode !== h.node ||
              n.focusOffset !== h.offset) &&
            ((e = e.createRange()),
            e.setStart(o.node, o.offset),
            n.removeAllRanges(),
            c > l
              ? (n.addRange(e), n.extend(h.node, h.offset))
              : (e.setEnd(h.node, h.offset), n.addRange(e)));
        }
      }
      for (e = [], n = t; (n = n.parentNode); )
        n.nodeType === 1 &&
          e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (n = e[t]),
          (n.element.scrollLeft = n.left),
          (n.element.scrollTop = n.top);
    }
  }
  var av = jn && "documentMode" in document && 11 >= document.documentMode,
    xl = null,
    Fu = null,
    Er = null,
    Iu = !1;
  function Ld(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Iu ||
      xl == null ||
      xl !== Gi(l) ||
      ((l = xl),
      "selectionStart" in l && Ju(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Er && xr(Er, l)) ||
        ((Er = l),
        (l = _o(Fu, "onSelect")),
        0 < l.length &&
          ((t = new Ki("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = xl))));
  }
  function La(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var El = {
      animationend: La("Animation", "AnimationEnd"),
      animationiteration: La("Animation", "AnimationIteration"),
      animationstart: La("Animation", "AnimationStart"),
      transitionrun: La("Transition", "TransitionRun"),
      transitionstart: La("Transition", "TransitionStart"),
      transitioncancel: La("Transition", "TransitionCancel"),
      transitionend: La("Transition", "TransitionEnd"),
    },
    es = {},
    qd = {};
  jn &&
    ((qd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete El.animationend.animation,
      delete El.animationiteration.animation,
      delete El.animationstart.animation),
    "TransitionEvent" in window || delete El.transitionend.transition);
  function qa(e) {
    if (es[e]) return es[e];
    if (!El[e]) return e;
    var t = El[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in qd) return (es[e] = t[n]);
    return e;
  }
  var Gd = qa("animationend"),
    Vd = qa("animationiteration"),
    Yd = qa("animationstart"),
    lv = qa("transitionrun"),
    rv = qa("transitionstart"),
    iv = qa("transitioncancel"),
    Xd = qa("transitionend"),
    Qd = new Map(),
    Kd =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function dn(e, t) {
    Qd.set(e, t), $a(t, [e]);
  }
  var Wt = [],
    Cl = 0,
    ts = 0;
  function Wi() {
    for (var e = Cl, t = (ts = Cl = 0); t < e; ) {
      var n = Wt[t];
      Wt[t++] = null;
      var l = Wt[t];
      Wt[t++] = null;
      var o = Wt[t];
      Wt[t++] = null;
      var c = Wt[t];
      if (((Wt[t++] = null), l !== null && o !== null)) {
        var h = l.pending;
        h === null ? (o.next = o) : ((o.next = h.next), (h.next = o)),
          (l.pending = o);
      }
      c !== 0 && Zd(n, o, c);
    }
  }
  function Ji(e, t, n, l) {
    (Wt[Cl++] = e),
      (Wt[Cl++] = t),
      (Wt[Cl++] = n),
      (Wt[Cl++] = l),
      (ts |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function ns(e, t, n, l) {
    return Ji(e, t, n, l), Fi(e);
  }
  function da(e, t) {
    return Ji(e, null, null, t), Fi(e);
  }
  function Zd(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, c = e.return; c !== null; )
      (c.childLanes |= n),
        (l = c.alternate),
        l !== null && (l.childLanes |= n),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (o = !0)),
        (e = c),
        (c = c.return);
    o &&
      t !== null &&
      e.tag === 3 &&
      ((c = e.stateNode),
      (o = 31 - $t(n)),
      (c = c.hiddenUpdates),
      (e = c[o]),
      e === null ? (c[o] = [t]) : e.push(t),
      (t.lane = n | 536870912));
  }
  function Fi(e) {
    if (50 < Kr) throw ((Kr = 0), (uc = null), Error(u(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Tl = {},
    Pd = new WeakMap();
  function Jt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Pd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: ne(t) }), Pd.set(e, t), t);
    }
    return { value: e, source: t, stack: ne(t) };
  }
  var Al = [],
    Rl = 0,
    Ii = null,
    eo = 0,
    Ft = [],
    It = 0,
    Ga = null,
    $n = 1,
    Hn = "";
  function Va(e, t) {
    (Al[Rl++] = eo), (Al[Rl++] = Ii), (Ii = e), (eo = t);
  }
  function Wd(e, t, n) {
    (Ft[It++] = $n), (Ft[It++] = Hn), (Ft[It++] = Ga), (Ga = e);
    var l = $n;
    e = Hn;
    var o = 32 - $t(l) - 1;
    (l &= ~(1 << o)), (n += 1);
    var c = 32 - $t(t) + o;
    if (30 < c) {
      var h = o - (o % 5);
      (c = (l & ((1 << h) - 1)).toString(32)),
        (l >>= h),
        (o -= h),
        ($n = (1 << (32 - $t(t) + o)) | (n << o) | l),
        (Hn = c + e);
    } else ($n = (1 << c) | (n << o) | l), (Hn = e);
  }
  function as(e) {
    e.return !== null && (Va(e, 1), Wd(e, 1, 0));
  }
  function ls(e) {
    for (; e === Ii; )
      (Ii = Al[--Rl]), (Al[Rl] = null), (eo = Al[--Rl]), (Al[Rl] = null);
    for (; e === Ga; )
      (Ga = Ft[--It]),
        (Ft[It] = null),
        (Hn = Ft[--It]),
        (Ft[It] = null),
        ($n = Ft[--It]),
        (Ft[It] = null);
  }
  var At = null,
    ht = null,
    Ae = !1,
    hn = null,
    vn = !1,
    rs = Error(u(519));
  function Ya(e) {
    var t = Error(u(418, ""));
    throw (Ar(Jt(t, e)), rs);
  }
  function Jd(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[bt] = e), (t[Dt] = l), n)) {
      case "dialog":
        xe("cancel", t), xe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        xe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Pr.length; n++) xe(Pr[n], t);
        break;
      case "source":
        xe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        xe("error", t), xe("load", t);
        break;
      case "details":
        xe("toggle", t);
        break;
      case "input":
        xe("invalid", t),
          dd(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ),
          qi(t);
        break;
      case "select":
        xe("invalid", t);
        break;
      case "textarea":
        xe("invalid", t), pd(t, l.value, l.defaultValue, l.children), qi(t);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      im(t.textContent, n)
        ? (l.popover != null && (xe("beforetoggle", t), xe("toggle", t)),
          l.onScroll != null && xe("scroll", t),
          l.onScrollEnd != null && xe("scrollend", t),
          l.onClick != null && (t.onclick = No),
          (t = !0))
        : (t = !1),
      t || Ya(e);
  }
  function Fd(e) {
    for (At = e.return; At; )
      switch (At.tag) {
        case 3:
        case 27:
          vn = !0;
          return;
        case 5:
        case 13:
          vn = !1;
          return;
        default:
          At = At.return;
      }
  }
  function Cr(e) {
    if (e !== At) return !1;
    if (!Ae) return Fd(e), (Ae = !0), !1;
    var t = !1,
      n;
    if (
      ((n = e.tag !== 3 && e.tag !== 27) &&
        ((n = e.tag === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Ac(e.type, e.memoizedProps))),
        (n = !n)),
      n && (t = !0),
      t && ht && Ya(e),
      Fd(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === "/$")) {
              if (t === 0) {
                ht = mn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          e = e.nextSibling;
        }
        ht = null;
      }
    } else ht = At ? mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Tr() {
    (ht = At = null), (Ae = !1);
  }
  function Ar(e) {
    hn === null ? (hn = [e]) : hn.push(e);
  }
  var Rr = Error(u(460)),
    Id = Error(u(474)),
    is = { then: function () {} };
  function eh(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function to() {}
  function th(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(to, to), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === Rr ? Error(u(483)) : e);
      default:
        if (typeof t.status == "string") t.then(to, to);
        else {
          if (((e = Le), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  (o.status = "fulfilled"), (o.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var o = t;
                  (o.status = "rejected"), (o.reason = l);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === Rr ? Error(u(483)) : e);
        }
        throw ((Or = t), Rr);
    }
  }
  var Or = null;
  function nh() {
    if (Or === null) throw Error(u(459));
    var e = Or;
    return (Or = null), e;
  }
  var Ol = null,
    Mr = 0;
  function no(e) {
    var t = Mr;
    return (Mr += 1), Ol === null && (Ol = []), th(Ol, e, t);
  }
  function wr(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function ao(e, t) {
    throw t.$$typeof === f
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function ah(e) {
    var t = e._init;
    return t(e._payload);
  }
  function lh(e) {
    function t(N, w) {
      if (e) {
        var j = N.deletions;
        j === null ? ((N.deletions = [w]), (N.flags |= 16)) : j.push(w);
      }
    }
    function n(N, w) {
      if (!e) return null;
      for (; w !== null; ) t(N, w), (w = w.sibling);
      return null;
    }
    function l(N) {
      for (var w = new Map(); N !== null; )
        N.key !== null ? w.set(N.key, N) : w.set(N.index, N), (N = N.sibling);
      return w;
    }
    function o(N, w) {
      return (N = Ta(N, w)), (N.index = 0), (N.sibling = null), N;
    }
    function c(N, w, j) {
      return (
        (N.index = j),
        e
          ? ((j = N.alternate),
            j !== null
              ? ((j = j.index), j < w ? ((N.flags |= 33554434), w) : j)
              : ((N.flags |= 33554434), w))
          : ((N.flags |= 1048576), w)
      );
    }
    function h(N) {
      return e && N.alternate === null && (N.flags |= 33554434), N;
    }
    function y(N, w, j, X) {
      return w === null || w.tag !== 6
        ? ((w = ec(j, N.mode, X)), (w.return = N), w)
        : ((w = o(w, j)), (w.return = N), w);
    }
    function C(N, w, j, X) {
      var le = j.type;
      return le === g
        ? V(N, w, j.props.children, X, j.key)
        : w !== null &&
            (w.elementType === le ||
              (typeof le == "object" &&
                le !== null &&
                le.$$typeof === H &&
                ah(le) === w.type))
          ? ((w = o(w, j.props)), wr(w, j), (w.return = N), w)
          : ((w = Eo(j.type, j.key, j.props, null, N.mode, X)),
            wr(w, j),
            (w.return = N),
            w);
    }
    function D(N, w, j, X) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== j.containerInfo ||
        w.stateNode.implementation !== j.implementation
        ? ((w = tc(j, N.mode, X)), (w.return = N), w)
        : ((w = o(w, j.children || [])), (w.return = N), w);
    }
    function V(N, w, j, X, le) {
      return w === null || w.tag !== 7
        ? ((w = el(j, N.mode, X, le)), (w.return = N), w)
        : ((w = o(w, j)), (w.return = N), w);
    }
    function K(N, w, j) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = ec("" + w, N.mode, j)), (w.return = N), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case d:
            return (
              (j = Eo(w.type, w.key, w.props, null, N.mode, j)),
              wr(j, w),
              (j.return = N),
              j
            );
          case p:
            return (w = tc(w, N.mode, j)), (w.return = N), w;
          case H:
            var X = w._init;
            return (w = X(w._payload)), K(N, w, j);
        }
        if (ie(w) || G(w))
          return (w = el(w, N.mode, j, null)), (w.return = N), w;
        if (typeof w.then == "function") return K(N, no(w), j);
        if (w.$$typeof === R) return K(N, bo(N, w), j);
        ao(N, w);
      }
      return null;
    }
    function $(N, w, j, X) {
      var le = w !== null ? w.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return le !== null ? null : y(N, w, "" + j, X);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case d:
            return j.key === le ? C(N, w, j, X) : null;
          case p:
            return j.key === le ? D(N, w, j, X) : null;
          case H:
            return (le = j._init), (j = le(j._payload)), $(N, w, j, X);
        }
        if (ie(j) || G(j)) return le !== null ? null : V(N, w, j, X, null);
        if (typeof j.then == "function") return $(N, w, no(j), X);
        if (j.$$typeof === R) return $(N, w, bo(N, j), X);
        ao(N, j);
      }
      return null;
    }
    function q(N, w, j, X, le) {
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return (N = N.get(j) || null), y(w, N, "" + X, le);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case d:
            return (
              (N = N.get(X.key === null ? j : X.key) || null), C(w, N, X, le)
            );
          case p:
            return (
              (N = N.get(X.key === null ? j : X.key) || null), D(w, N, X, le)
            );
          case H:
            var be = X._init;
            return (X = be(X._payload)), q(N, w, j, X, le);
        }
        if (ie(X) || G(X)) return (N = N.get(j) || null), V(w, N, X, le, null);
        if (typeof X.then == "function") return q(N, w, j, no(X), le);
        if (X.$$typeof === R) return q(N, w, j, bo(w, X), le);
        ao(w, X);
      }
      return null;
    }
    function oe(N, w, j, X) {
      for (
        var le = null, be = null, ue = w, fe = (w = 0), dt = null;
        ue !== null && fe < j.length;
        fe++
      ) {
        ue.index > fe ? ((dt = ue), (ue = null)) : (dt = ue.sibling);
        var Re = $(N, ue, j[fe], X);
        if (Re === null) {
          ue === null && (ue = dt);
          break;
        }
        e && ue && Re.alternate === null && t(N, ue),
          (w = c(Re, w, fe)),
          be === null ? (le = Re) : (be.sibling = Re),
          (be = Re),
          (ue = dt);
      }
      if (fe === j.length) return n(N, ue), Ae && Va(N, fe), le;
      if (ue === null) {
        for (; fe < j.length; fe++)
          (ue = K(N, j[fe], X)),
            ue !== null &&
              ((w = c(ue, w, fe)),
              be === null ? (le = ue) : (be.sibling = ue),
              (be = ue));
        return Ae && Va(N, fe), le;
      }
      for (ue = l(ue); fe < j.length; fe++)
        (dt = q(ue, N, fe, j[fe], X)),
          dt !== null &&
            (e &&
              dt.alternate !== null &&
              ue.delete(dt.key === null ? fe : dt.key),
            (w = c(dt, w, fe)),
            be === null ? (le = dt) : (be.sibling = dt),
            (be = dt));
      return (
        e &&
          ue.forEach(function (za) {
            return t(N, za);
          }),
        Ae && Va(N, fe),
        le
      );
    }
    function ge(N, w, j, X) {
      if (j == null) throw Error(u(151));
      for (
        var le = null,
          be = null,
          ue = w,
          fe = (w = 0),
          dt = null,
          Re = j.next();
        ue !== null && !Re.done;
        fe++, Re = j.next()
      ) {
        ue.index > fe ? ((dt = ue), (ue = null)) : (dt = ue.sibling);
        var za = $(N, ue, Re.value, X);
        if (za === null) {
          ue === null && (ue = dt);
          break;
        }
        e && ue && za.alternate === null && t(N, ue),
          (w = c(za, w, fe)),
          be === null ? (le = za) : (be.sibling = za),
          (be = za),
          (ue = dt);
      }
      if (Re.done) return n(N, ue), Ae && Va(N, fe), le;
      if (ue === null) {
        for (; !Re.done; fe++, Re = j.next())
          (Re = K(N, Re.value, X)),
            Re !== null &&
              ((w = c(Re, w, fe)),
              be === null ? (le = Re) : (be.sibling = Re),
              (be = Re));
        return Ae && Va(N, fe), le;
      }
      for (ue = l(ue); !Re.done; fe++, Re = j.next())
        (Re = q(ue, N, fe, Re.value, X)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              ue.delete(Re.key === null ? fe : Re.key),
            (w = c(Re, w, fe)),
            be === null ? (le = Re) : (be.sibling = Re),
            (be = Re));
      return (
        e &&
          ue.forEach(function (S1) {
            return t(N, S1);
          }),
        Ae && Va(N, fe),
        le
      );
    }
    function Ze(N, w, j, X) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === g &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case d:
            e: {
              for (var le = j.key; w !== null; ) {
                if (w.key === le) {
                  if (((le = j.type), le === g)) {
                    if (w.tag === 7) {
                      n(N, w.sibling),
                        (X = o(w, j.props.children)),
                        (X.return = N),
                        (N = X);
                      break e;
                    }
                  } else if (
                    w.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === H &&
                      ah(le) === w.type)
                  ) {
                    n(N, w.sibling),
                      (X = o(w, j.props)),
                      wr(X, j),
                      (X.return = N),
                      (N = X);
                    break e;
                  }
                  n(N, w);
                  break;
                } else t(N, w);
                w = w.sibling;
              }
              j.type === g
                ? ((X = el(j.props.children, N.mode, X, j.key)),
                  (X.return = N),
                  (N = X))
                : ((X = Eo(j.type, j.key, j.props, null, N.mode, X)),
                  wr(X, j),
                  (X.return = N),
                  (N = X));
            }
            return h(N);
          case p:
            e: {
              for (le = j.key; w !== null; ) {
                if (w.key === le)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === j.containerInfo &&
                    w.stateNode.implementation === j.implementation
                  ) {
                    n(N, w.sibling),
                      (X = o(w, j.children || [])),
                      (X.return = N),
                      (N = X);
                    break e;
                  } else {
                    n(N, w);
                    break;
                  }
                else t(N, w);
                w = w.sibling;
              }
              (X = tc(j, N.mode, X)), (X.return = N), (N = X);
            }
            return h(N);
          case H:
            return (le = j._init), (j = le(j._payload)), Ze(N, w, j, X);
        }
        if (ie(j)) return oe(N, w, j, X);
        if (G(j)) {
          if (((le = G(j)), typeof le != "function")) throw Error(u(150));
          return (j = le.call(j)), ge(N, w, j, X);
        }
        if (typeof j.then == "function") return Ze(N, w, no(j), X);
        if (j.$$typeof === R) return Ze(N, w, bo(N, j), X);
        ao(N, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          w !== null && w.tag === 6
            ? (n(N, w.sibling), (X = o(w, j)), (X.return = N), (N = X))
            : (n(N, w), (X = ec(j, N.mode, X)), (X.return = N), (N = X)),
          h(N))
        : n(N, w);
    }
    return function (N, w, j, X) {
      try {
        Mr = 0;
        var le = Ze(N, w, j, X);
        return (Ol = null), le;
      } catch (ue) {
        if (ue === Rr) throw ue;
        var be = an(29, ue, null, N.mode);
        return (be.lanes = X), (be.return = N), be;
      } finally {
      }
    };
  }
  var Xa = lh(!0),
    rh = lh(!1),
    Ml = he(null),
    lo = he(0);
  function ih(e, t) {
    (e = Wn), Ee(lo, e), Ee(Ml, t), (Wn = e | t.baseLanes);
  }
  function os() {
    Ee(lo, Wn), Ee(Ml, Ml.current);
  }
  function us() {
    (Wn = lo.current), we(Ml), we(lo);
  }
  var en = he(null),
    bn = null;
  function ha(e) {
    var t = e.alternate;
    Ee(rt, rt.current & 1),
      Ee(en, e),
      bn === null &&
        (t === null || Ml.current !== null || t.memoizedState !== null) &&
        (bn = e);
  }
  function oh(e) {
    if (e.tag === 22) {
      if ((Ee(rt, rt.current), Ee(en, e), bn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (bn = e);
      }
    } else pa();
  }
  function pa() {
    Ee(rt, rt.current), Ee(en, en.current);
  }
  function Ln(e) {
    we(en), bn === e && (bn = null), we(rt);
  }
  var rt = he(0);
  function ro(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ov =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    uv = a.unstable_scheduleCallback,
    sv = a.unstable_NormalPriority,
    it = {
      $$typeof: R,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ss() {
    return { controller: new ov(), data: new Map(), refCount: 0 };
  }
  function Dr(e) {
    e.refCount--,
      e.refCount === 0 &&
        uv(sv, function () {
          e.controller.abort();
        });
  }
  var zr = null,
    cs = 0,
    wl = 0,
    Dl = null;
  function cv(e, t) {
    if (zr === null) {
      var n = (zr = []);
      (cs = 0),
        (wl = gc()),
        (Dl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return cs++, t.then(uh, uh), t;
  }
  function uh() {
    if (--cs === 0 && zr !== null) {
      Dl !== null && (Dl.status = "fulfilled");
      var e = zr;
      (zr = null), (wl = 0), (Dl = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function fv(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        },
      ),
      l
    );
  }
  var sh = Z.S;
  Z.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      cv(e, t),
      sh !== null && sh(e, t);
  };
  var Qa = he(null);
  function fs() {
    var e = Qa.current;
    return e !== null ? e : Le.pooledCache;
  }
  function io(e, t) {
    t === null ? Ee(Qa, Qa.current) : Ee(Qa, t.pool);
  }
  function ch() {
    var e = fs();
    return e === null ? null : { parent: it._currentValue, pool: e };
  }
  var ma = 0,
    ve = null,
    Ne = null,
    et = null,
    oo = !1,
    zl = !1,
    Ka = !1,
    uo = 0,
    _r = 0,
    _l = null,
    dv = 0;
  function Fe() {
    throw Error(u(321));
  }
  function ds(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function hs(e, t, n, l, o, c) {
    return (
      (ma = c),
      (ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Z.H = e === null || e.memoizedState === null ? Za : ga),
      (Ka = !1),
      (c = n(l, o)),
      (Ka = !1),
      zl && (c = dh(t, n, l, o)),
      fh(e),
      c
    );
  }
  function fh(e) {
    Z.H = Sn;
    var t = Ne !== null && Ne.next !== null;
    if (((ma = 0), (et = Ne = ve = null), (oo = !1), (_r = 0), (_l = null), t))
      throw Error(u(300));
    e === null ||
      ct ||
      ((e = e.dependencies), e !== null && vo(e) && (ct = !0));
  }
  function dh(e, t, n, l) {
    ve = e;
    var o = 0;
    do {
      if ((zl && (_l = null), (_r = 0), (zl = !1), 25 <= o))
        throw Error(u(301));
      if (((o += 1), (et = Ne = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (Z.H = Pa), (c = t(n, l));
    } while (zl);
    return c;
  }
  function hv() {
    var e = Z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Nr(t) : t),
      (e = e.useState()[0]),
      (Ne !== null ? Ne.memoizedState : null) !== e && (ve.flags |= 1024),
      t
    );
  }
  function ps() {
    var e = uo !== 0;
    return (uo = 0), e;
  }
  function ms(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function gs(e) {
    if (oo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      oo = !1;
    }
    (ma = 0), (et = Ne = ve = null), (zl = !1), (_r = uo = 0), (_l = null);
  }
  function _t() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return et === null ? (ve.memoizedState = et = e) : (et = et.next = e), et;
  }
  function tt() {
    if (Ne === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = et === null ? ve.memoizedState : et.next;
    if (t !== null) (et = t), (Ne = e);
    else {
      if (e === null)
        throw ve.alternate === null ? Error(u(467)) : Error(u(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        et === null ? (ve.memoizedState = et = e) : (et = et.next = e);
    }
    return et;
  }
  var so;
  so = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Nr(e) {
    var t = _r;
    return (
      (_r += 1),
      _l === null && (_l = []),
      (e = th(_l, e, t)),
      (t = ve),
      (et === null ? t.memoizedState : et.next) === null &&
        ((t = t.alternate),
        (Z.H = t === null || t.memoizedState === null ? Za : ga)),
      e
    );
  }
  function co(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Nr(e);
      if (e.$$typeof === R) return St(e);
    }
    throw Error(u(438, String(e)));
  }
  function ys(e) {
    var t = null,
      n = ve.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = ve.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = so()), (ve.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = U;
    return t.index++, n;
  }
  function qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fo(e) {
    var t = tt();
    return vs(t, Ne, e);
  }
  function vs(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = n;
    var o = e.baseQueue,
      c = l.pending;
    if (c !== null) {
      if (o !== null) {
        var h = o.next;
        (o.next = c.next), (c.next = h);
      }
      (t.baseQueue = o = c), (l.pending = null);
    }
    if (((c = e.baseState), o === null)) e.memoizedState = c;
    else {
      t = o.next;
      var y = (h = null),
        C = null,
        D = t,
        V = !1;
      do {
        var K = D.lane & -536870913;
        if (K !== D.lane ? (Ce & K) === K : (ma & K) === K) {
          var $ = D.revertLane;
          if ($ === 0)
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              K === wl && (V = !0);
          else if ((ma & $) === $) {
            (D = D.next), $ === wl && (V = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              C === null ? ((y = C = K), (h = c)) : (C = C.next = K),
              (ve.lanes |= $),
              (Aa |= $);
          (K = D.action),
            Ka && n(c, K),
            (c = D.hasEagerState ? D.eagerState : n(c, K));
        } else
          ($ = {
            lane: K,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            C === null ? ((y = C = $), (h = c)) : (C = C.next = $),
            (ve.lanes |= K),
            (Aa |= K);
        D = D.next;
      } while (D !== null && D !== t);
      if (
        (C === null ? (h = c) : (C.next = y),
        !Ht(c, e.memoizedState) && ((ct = !0), V && ((n = Dl), n !== null)))
      )
        throw n;
      (e.memoizedState = c),
        (e.baseState = h),
        (e.baseQueue = C),
        (l.lastRenderedState = c);
    }
    return o === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function bs(e) {
    var t = tt(),
      n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      o = n.pending,
      c = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var h = (o = o.next);
      do (c = e(c, h.action)), (h = h.next);
      while (h !== o);
      Ht(c, t.memoizedState) || (ct = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c);
    }
    return [c, l];
  }
  function hh(e, t, n) {
    var l = ve,
      o = tt(),
      c = Ae;
    if (c) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = t();
    var h = !Ht((Ne || o).memoizedState, n);
    if (
      (h && ((o.memoizedState = n), (ct = !0)),
      (o = o.queue),
      Es(gh.bind(null, l, o, e), [e]),
      o.getSnapshot !== t || h || (et !== null && et.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Nl(9, mh.bind(null, l, o, n, t), { destroy: void 0 }, null),
        Le === null)
      )
        throw Error(u(349));
      c || ma & 60 || ph(l, t, n);
    }
    return n;
  }
  function ph(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ve.updateQueue),
      t === null
        ? ((t = so()), (ve.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function mh(e, t, n, l) {
    (t.value = n), (t.getSnapshot = l), yh(t) && vh(e);
  }
  function gh(e, t, n) {
    return n(function () {
      yh(t) && vh(e);
    });
  }
  function yh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function vh(e) {
    var t = da(e, 2);
    t !== null && Rt(t, e, 2);
  }
  function Ss(e) {
    var t = _t();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Ka)) {
        sa(!0);
        try {
          n();
        } finally {
          sa(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function bh(e, t, n, l) {
    return (e.baseState = n), vs(e, Ne, typeof l == "function" ? l : qn);
  }
  function pv(e, t, n, l, o) {
    if (mo(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          c.listeners.push(h);
        },
      };
      Z.T !== null ? n(!0) : (c.isTransition = !1),
        l(c),
        (n = t.pending),
        n === null
          ? ((c.next = t.pending = c), Sh(t, c))
          : ((c.next = n.next), (t.pending = n.next = c));
    }
  }
  function Sh(e, t) {
    var n = t.action,
      l = t.payload,
      o = e.state;
    if (t.isTransition) {
      var c = Z.T,
        h = {};
      Z.T = h;
      try {
        var y = n(o, l),
          C = Z.S;
        C !== null && C(h, y), xh(e, t, y);
      } catch (D) {
        xs(e, t, D);
      } finally {
        Z.T = c;
      }
    } else
      try {
        (c = n(o, l)), xh(e, t, c);
      } catch (D) {
        xs(e, t, D);
      }
  }
  function xh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Eh(e, t, l);
          },
          function (l) {
            return xs(e, t, l);
          },
        )
      : Eh(e, t, n);
  }
  function Eh(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      Ch(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Sh(e, n)));
  }
  function xs(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = n), Ch(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function Ch(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Th(e, t) {
    return t;
  }
  function Ah(e, t) {
    if (Ae) {
      var n = Le.formState;
      if (n !== null) {
        e: {
          var l = ve;
          if (Ae) {
            if (ht) {
              t: {
                for (var o = ht, c = vn; o.nodeType !== 8; ) {
                  if (!c) {
                    o = null;
                    break t;
                  }
                  if (((o = mn(o.nextSibling)), o === null)) {
                    o = null;
                    break t;
                  }
                }
                (c = o.data), (o = c === "F!" || c === "F" ? o : null);
              }
              if (o) {
                (ht = mn(o.nextSibling)), (l = o.data === "F!");
                break e;
              }
            }
            Ya(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = _t()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Th,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Vh.bind(null, ve, l)),
      (l.dispatch = n),
      (l = Ss(!1)),
      (c = Os.bind(null, ve, !1, l.queue)),
      (l = _t()),
      (o = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = o),
      (n = pv.bind(null, ve, o, c, n)),
      (o.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Rh(e) {
    var t = tt();
    return Oh(t, Ne, e);
  }
  function Oh(e, t, n) {
    (t = vs(e, t, Th)[0]),
      (e = fo(qn)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? Nr(t)
          : t);
    var l = tt(),
      o = l.queue,
      c = o.dispatch;
    return (
      n !== l.memoizedState &&
        ((ve.flags |= 2048),
        Nl(9, mv.bind(null, o, n), { destroy: void 0 }, null)),
      [t, c, e]
    );
  }
  function mv(e, t) {
    e.action = t;
  }
  function Mh(e) {
    var t = tt(),
      n = Ne;
    if (n !== null) return Oh(t, n, e);
    tt(), (t = t.memoizedState), (n = tt());
    var l = n.queue.dispatch;
    return (n.memoizedState = e), [t, l, !1];
  }
  function Nl(e, t, n, l) {
    return (
      (e = { tag: e, create: t, inst: n, deps: l, next: null }),
      (t = ve.updateQueue),
      t === null && ((t = so()), (ve.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function wh() {
    return tt().memoizedState;
  }
  function ho(e, t, n, l) {
    var o = _t();
    (ve.flags |= e),
      (o.memoizedState = Nl(
        1 | t,
        n,
        { destroy: void 0 },
        l === void 0 ? null : l,
      ));
  }
  function po(e, t, n, l) {
    var o = tt();
    l = l === void 0 ? null : l;
    var c = o.memoizedState.inst;
    Ne !== null && l !== null && ds(l, Ne.memoizedState.deps)
      ? (o.memoizedState = Nl(t, n, c, l))
      : ((ve.flags |= e), (o.memoizedState = Nl(1 | t, n, c, l)));
  }
  function Dh(e, t) {
    ho(8390656, 8, e, t);
  }
  function Es(e, t) {
    po(2048, 8, e, t);
  }
  function zh(e, t) {
    return po(4, 2, e, t);
  }
  function _h(e, t) {
    return po(4, 4, e, t);
  }
  function Nh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Bh(e, t, n) {
    (n = n != null ? n.concat([e]) : null), po(4, 4, Nh.bind(null, t, e), n);
  }
  function Cs() {}
  function Uh(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && ds(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function jh(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && ds(t, l[1])) return l[0];
    if (((l = e()), Ka)) {
      sa(!0);
      try {
        e();
      } finally {
        sa(!1);
      }
    }
    return (n.memoizedState = [l, t]), l;
  }
  function Ts(e, t, n) {
    return n === void 0 || ma & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = $p()), (ve.lanes |= e), (Aa |= e), n);
  }
  function kh(e, t, n, l) {
    return Ht(n, t)
      ? n
      : Ml.current !== null
        ? ((e = Ts(e, n, l)), Ht(e, t) || (ct = !0), e)
        : ma & 42
          ? ((e = $p()), (ve.lanes |= e), (Aa |= e), t)
          : ((ct = !0), (e.memoizedState = n));
  }
  function $h(e, t, n, l, o) {
    var c = I.p;
    I.p = c !== 0 && 8 > c ? c : 8;
    var h = Z.T,
      y = {};
    (Z.T = y), Os(e, !1, t, n);
    try {
      var C = o(),
        D = Z.S;
      if (
        (D !== null && D(y, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var V = fv(C, l);
        Br(e, t, V, Vt(e));
      } else Br(e, t, l, Vt(e));
    } catch (K) {
      Br(e, t, { then: function () {}, status: "rejected", reason: K }, Vt());
    } finally {
      (I.p = c), (Z.T = h);
    }
  }
  function gv() {}
  function As(e, t, n, l) {
    if (e.tag !== 5) throw Error(u(476));
    var o = Hh(e).queue;
    $h(
      e,
      o,
      t,
      pe,
      n === null
        ? gv
        : function () {
            return Lh(e), n(l);
          },
    );
  }
  function Hh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: pe,
      baseState: pe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: pe,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Lh(e) {
    var t = Hh(e).next.queue;
    Br(e, t, {}, Vt());
  }
  function Rs() {
    return St(ei);
  }
  function qh() {
    return tt().memoizedState;
  }
  function Gh() {
    return tt().memoizedState;
  }
  function yv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Vt();
          e = ba(n);
          var l = Sa(t, e, n);
          l !== null && (Rt(l, t, n), kr(l, t, n)),
            (t = { cache: ss() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function vv(e, t, n) {
    var l = Vt();
    (n = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      mo(e)
        ? Yh(t, n)
        : ((n = ns(e, t, n, l)), n !== null && (Rt(n, e, l), Xh(n, t, l)));
  }
  function Vh(e, t, n) {
    var l = Vt();
    Br(e, t, n, l);
  }
  function Br(e, t, n, l) {
    var o = {
      lane: l,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (mo(e)) Yh(t, o);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            y = c(h, n);
          if (((o.hasEagerState = !0), (o.eagerState = y), Ht(y, h)))
            return Ji(e, t, o, 0), Le === null && Wi(), !1;
        } catch {
        } finally {
        }
      if (((n = ns(e, t, o, l)), n !== null))
        return Rt(n, e, l), Xh(n, t, l), !0;
    }
    return !1;
  }
  function Os(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: gc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mo(e))
    ) {
      if (t) throw Error(u(479));
    } else (t = ns(e, n, l, 2)), t !== null && Rt(t, e, 2);
  }
  function mo(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
  }
  function Yh(e, t) {
    zl = oo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Xh(e, t, n) {
    if (n & 4194176) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), nd(e, n);
    }
  }
  var Sn = {
    readContext: St,
    use: co,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useLayoutEffect: Fe,
    useInsertionEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
  };
  (Sn.useCacheRefresh = Fe),
    (Sn.useMemoCache = Fe),
    (Sn.useHostTransitionStatus = Fe),
    (Sn.useFormState = Fe),
    (Sn.useActionState = Fe),
    (Sn.useOptimistic = Fe);
  var Za = {
    readContext: St,
    use: co,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: St,
    useEffect: Dh,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null),
        ho(4194308, 4, Nh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ka) {
        sa(!0);
        try {
          e();
        } finally {
          sa(!1);
        }
      }
      return (n.memoizedState = [l, t]), l;
    },
    useReducer: function (e, t, n) {
      var l = _t();
      if (n !== void 0) {
        var o = n(t);
        if (Ka) {
          sa(!0);
          try {
            n(t);
          } finally {
            sa(!1);
          }
        }
      } else o = t;
      return (
        (l.memoizedState = l.baseState = o),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o,
        }),
        (l.queue = e),
        (e = e.dispatch = vv.bind(null, ve, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Ss(e);
      var t = e.queue,
        n = Vh.bind(null, ve, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: Cs,
    useDeferredValue: function (e, t) {
      var n = _t();
      return Ts(n, e, t);
    },
    useTransition: function () {
      var e = Ss(!1);
      return (
        (e = $h.bind(null, ve, e.queue, !0, !1)),
        (_t().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var l = ve,
        o = _t();
      if (Ae) {
        if (n === void 0) throw Error(u(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(u(349));
        Ce & 60 || ph(l, t, n);
      }
      o.memoizedState = n;
      var c = { value: n, getSnapshot: t };
      return (
        (o.queue = c),
        Dh(gh.bind(null, l, c, e), [e]),
        (l.flags |= 2048),
        Nl(9, mh.bind(null, l, c, n, t), { destroy: void 0 }, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Le.identifierPrefix;
      if (Ae) {
        var n = Hn,
          l = $n;
        (n = (l & ~(1 << (32 - $t(l) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = uo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = dv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (_t().memoizedState = yv.bind(null, ve));
    },
  };
  (Za.useMemoCache = ys),
    (Za.useHostTransitionStatus = Rs),
    (Za.useFormState = Ah),
    (Za.useActionState = Ah),
    (Za.useOptimistic = function (e) {
      var t = _t();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n), (t = Os.bind(null, ve, !0, n)), (n.dispatch = t), [e, t]
      );
    });
  var ga = {
    readContext: St,
    use: co,
    useCallback: Uh,
    useContext: St,
    useEffect: Es,
    useImperativeHandle: Bh,
    useInsertionEffect: zh,
    useLayoutEffect: _h,
    useMemo: jh,
    useReducer: fo,
    useRef: wh,
    useState: function () {
      return fo(qn);
    },
    useDebugValue: Cs,
    useDeferredValue: function (e, t) {
      var n = tt();
      return kh(n, Ne.memoizedState, e, t);
    },
    useTransition: function () {
      var e = fo(qn)[0],
        t = tt().memoizedState;
      return [typeof e == "boolean" ? e : Nr(e), t];
    },
    useSyncExternalStore: hh,
    useId: qh,
  };
  (ga.useCacheRefresh = Gh),
    (ga.useMemoCache = ys),
    (ga.useHostTransitionStatus = Rs),
    (ga.useFormState = Rh),
    (ga.useActionState = Rh),
    (ga.useOptimistic = function (e, t) {
      var n = tt();
      return bh(n, Ne, e, t);
    });
  var Pa = {
    readContext: St,
    use: co,
    useCallback: Uh,
    useContext: St,
    useEffect: Es,
    useImperativeHandle: Bh,
    useInsertionEffect: zh,
    useLayoutEffect: _h,
    useMemo: jh,
    useReducer: bs,
    useRef: wh,
    useState: function () {
      return bs(qn);
    },
    useDebugValue: Cs,
    useDeferredValue: function (e, t) {
      var n = tt();
      return Ne === null ? Ts(n, e, t) : kh(n, Ne.memoizedState, e, t);
    },
    useTransition: function () {
      var e = bs(qn)[0],
        t = tt().memoizedState;
      return [typeof e == "boolean" ? e : Nr(e), t];
    },
    useSyncExternalStore: hh,
    useId: qh,
  };
  (Pa.useCacheRefresh = Gh),
    (Pa.useMemoCache = ys),
    (Pa.useHostTransitionStatus = Rs),
    (Pa.useFormState = Mh),
    (Pa.useActionState = Mh),
    (Pa.useOptimistic = function (e, t) {
      var n = tt();
      return Ne !== null
        ? bh(n, Ne, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    });
  function Ms(e, t, n, l) {
    (t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ws = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ae(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Vt(),
        o = ba(l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Sa(e, o, l)),
        t !== null && (Rt(t, e, l), kr(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Vt(),
        o = ba(l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Sa(e, o, l)),
        t !== null && (Rt(t, e, l), kr(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Vt(),
        l = ba(n);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Sa(e, l, n)),
        t !== null && (Rt(t, e, n), kr(t, e, n));
    },
  };
  function Qh(e, t, n, l, o, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, c, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !xr(n, l) || !xr(o, c)
          : !0
    );
  }
  function Kh(e, t, n, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && ws.enqueueReplaceState(t, t.state, null);
  }
  function Wa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = v({}, n));
      for (var o in e) n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  var go =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Zh(e) {
    go(e);
  }
  function Ph(e) {
    console.error(e);
  }
  function Wh(e) {
    go(e);
  }
  function yo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Jh(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Ds(e, t, n) {
    return (
      (n = ba(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        yo(e, t);
      }),
      n
    );
  }
  function Fh(e) {
    return (e = ba(e)), (e.tag = 3), e;
  }
  function Ih(e, t, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = l.value;
      (e.payload = function () {
        return o(c);
      }),
        (e.callback = function () {
          Jh(t, n, l);
        });
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (e.callback = function () {
        Jh(t, n, l),
          typeof o != "function" &&
            (Ra === null ? (Ra = new Set([this])) : Ra.add(this));
        var y = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function bv(e, t, n, l, o) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && jr(t, n, o, !0),
        (n = en.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              bn === null ? fc() : n.alternate === null && Ke === 0 && (Ke = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              l === is
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  hc(e, l, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === is
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  hc(e, l, o)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return hc(e, l, o), fc(), !1;
    }
    if (Ae)
      return (
        (t = en.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = o),
            l !== rs && ((e = Error(u(422), { cause: l })), Ar(Jt(e, n))))
          : (l !== rs && ((t = Error(u(423), { cause: l })), Ar(Jt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (o &= -o),
            (e.lanes |= o),
            (l = Jt(l, n)),
            (o = Ds(e.stateNode, l, o)),
            Xs(e, o),
            Ke !== 4 && (Ke = 2)),
        !1
      );
    var c = Error(u(520), { cause: l });
    if (
      ((c = Jt(c, n)),
      Xr === null ? (Xr = [c]) : Xr.push(c),
      Ke !== 4 && (Ke = 2),
      t === null)
    )
      return !0;
    (l = Jt(l, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = o & -o),
            (n.lanes |= e),
            (e = Ds(n.stateNode, l, e)),
            Xs(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Ra === null || !Ra.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (o &= -o),
              (n.lanes |= o),
              (o = Fh(o)),
              Ih(o, e, n, l),
              Xs(n, o),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ep = Error(u(461)),
    ct = !1;
  function pt(e, t, n, l) {
    t.child = e === null ? rh(t, null, n, l) : Xa(t, e.child, n, l);
  }
  function tp(e, t, n, l, o) {
    n = n.render;
    var c = t.ref;
    if ("ref" in l) {
      var h = {};
      for (var y in l) y !== "ref" && (h[y] = l[y]);
    } else h = l;
    return (
      Fa(t),
      (l = hs(e, t, n, h, c, o)),
      (y = ps()),
      e !== null && !ct
        ? (ms(e, t, o), Gn(e, t, o))
        : (Ae && y && as(t), (t.flags |= 1), pt(e, t, l, o), t.child)
    );
  }
  function np(e, t, n, l, o) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !Is(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = c), ap(e, t, c, l, o))
        : ((e = Eo(n.type, null, l, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !Hs(e, o))) {
      var h = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : xr), n(h, l) && e.ref === t.ref)
      )
        return Gn(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = Ta(c, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ap(e, t, n, l, o) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (xr(c, l) && e.ref === t.ref)
        if (((ct = !1), (t.pendingProps = l = c), Hs(e, o)))
          e.flags & 131072 && (ct = !0);
        else return (t.lanes = e.lanes), Gn(e, t, o);
    }
    return zs(e, t, n, l, o);
  }
  function lp(e, t, n) {
    var l = t.pendingProps,
      o = l.children,
      c = (t.stateNode._pendingVisibility & 2) !== 0,
      h = e !== null ? e.memoizedState : null;
    if ((Ur(e, t), l.mode === "hidden" || c)) {
      if (t.flags & 128) {
        if (((l = h !== null ? h.baseLanes | n : n), e !== null)) {
          for (o = t.child = e.child, c = 0; o !== null; )
            (c = c | o.lanes | o.childLanes), (o = o.sibling);
          t.childLanes = c & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return rp(e, t, l, n);
      }
      if (n & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && io(t, h !== null ? h.cachePool : null),
          h !== null ? ih(t, h) : os(),
          oh(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          rp(e, t, h !== null ? h.baseLanes | n : n, n)
        );
    } else
      h !== null
        ? (io(t, h.cachePool), ih(t, h), pa(), (t.memoizedState = null))
        : (e !== null && io(t, null), os(), pa());
    return pt(e, t, o, n), t.child;
  }
  function rp(e, t, n, l) {
    var o = fs();
    return (
      (o = o === null ? null : { parent: it._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: n, cachePool: o }),
      e !== null && io(t, null),
      os(),
      oh(t),
      e !== null && jr(e, t, l, !0),
      null
    );
  }
  function Ur(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (e === null || e.ref !== n) && (t.flags |= 2097664);
    }
  }
  function zs(e, t, n, l, o) {
    return (
      Fa(t),
      (n = hs(e, t, n, l, void 0, o)),
      (l = ps()),
      e !== null && !ct
        ? (ms(e, t, o), Gn(e, t, o))
        : (Ae && l && as(t), (t.flags |= 1), pt(e, t, n, o), t.child)
    );
  }
  function ip(e, t, n, l, o, c) {
    return (
      Fa(t),
      (t.updateQueue = null),
      (n = dh(t, l, n, o)),
      fh(e),
      (l = ps()),
      e !== null && !ct
        ? (ms(e, t, c), Gn(e, t, c))
        : (Ae && l && as(t), (t.flags |= 1), pt(e, t, n, c), t.child)
    );
  }
  function op(e, t, n, l, o) {
    if ((Fa(t), t.stateNode === null)) {
      var c = Tl,
        h = n.contextType;
      typeof h == "object" && h !== null && (c = St(h)),
        (c = new n(l, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = ws),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = l),
        (c.state = t.memoizedState),
        (c.refs = {}),
        Vs(t),
        (h = n.contextType),
        (c.context = typeof h == "object" && h !== null ? St(h) : Tl),
        (c.state = t.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (Ms(t, n, h, l), (c.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((h = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          h !== c.state && ws.enqueueReplaceState(c, c.state, null),
          Hr(t, l, c, o),
          $r(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps,
        C = Wa(n, y);
      c.props = C;
      var D = c.context,
        V = n.contextType;
      (h = Tl), typeof V == "object" && V !== null && (h = St(V));
      var K = n.getDerivedStateFromProps;
      (V =
        typeof K == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (y = t.pendingProps !== y),
        V ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((y || D !== h) && Kh(t, c, l, h)),
        (va = !1);
      var $ = t.memoizedState;
      (c.state = $),
        Hr(t, l, c, o),
        $r(),
        (D = t.memoizedState),
        y || $ !== D || va
          ? (typeof K == "function" && (Ms(t, n, K, l), (D = t.memoizedState)),
            (C = va || Qh(t, n, C, l, $, D, h))
              ? (V ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = D)),
            (c.props = l),
            (c.state = D),
            (c.context = h),
            (l = C))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (c = t.stateNode),
        Ys(e, t),
        (h = t.memoizedProps),
        (V = Wa(n, h)),
        (c.props = V),
        (K = t.pendingProps),
        ($ = c.context),
        (D = n.contextType),
        (C = Tl),
        typeof D == "object" && D !== null && (C = St(D)),
        (y = n.getDerivedStateFromProps),
        (D =
          typeof y == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((h !== K || $ !== C) && Kh(t, c, l, C)),
        (va = !1),
        ($ = t.memoizedState),
        (c.state = $),
        Hr(t, l, c, o),
        $r();
      var q = t.memoizedState;
      h !== K ||
      $ !== q ||
      va ||
      (e !== null && e.dependencies !== null && vo(e.dependencies))
        ? (typeof y == "function" && (Ms(t, n, y, l), (q = t.memoizedState)),
          (V =
            va ||
            Qh(t, n, V, l, $, q, C) ||
            (e !== null && e.dependencies !== null && vo(e.dependencies)))
            ? (D ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(l, q, C),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(l, q, C)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (h === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (h === e.memoizedProps && $ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = q)),
          (c.props = l),
          (c.state = q),
          (c.context = C),
          (l = V))
        : (typeof c.componentDidUpdate != "function" ||
            (h === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (h === e.memoizedProps && $ === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (c = l),
      Ur(e, t),
      (l = (t.flags & 128) !== 0),
      c || l
        ? ((c = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Xa(t, e.child, null, o)),
              (t.child = Xa(t, null, n, o)))
            : pt(e, t, n, o),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = Gn(e, t, o)),
      e
    );
  }
  function up(e, t, n, l) {
    return Tr(), (t.flags |= 256), pt(e, t, n, l), t.child;
  }
  var _s = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ns(e) {
    return { baseLanes: e, cachePool: ch() };
  }
  function Bs(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= ln), e;
  }
  function sp(e, t, n) {
    var l = t.pendingProps,
      o = !1,
      c = (t.flags & 128) !== 0,
      h;
    if (
      ((h = c) ||
        (h =
          e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0),
      h && ((o = !0), (t.flags &= -129)),
      (h = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ae) {
        if ((o ? ha(t) : pa(), Ae)) {
          var y = ht,
            C;
          if ((C = y)) {
            e: {
              for (C = y, y = vn; C.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((C = mn(C.nextSibling)), C === null)) {
                  y = null;
                  break e;
                }
              }
              y = C;
            }
            y !== null
              ? ((t.memoizedState = {
                  dehydrated: y,
                  treeContext: Ga !== null ? { id: $n, overflow: Hn } : null,
                  retryLane: 536870912,
                }),
                (C = an(18, null, null, 0)),
                (C.stateNode = y),
                (C.return = t),
                (t.child = C),
                (At = t),
                (ht = null),
                (C = !0))
              : (C = !1);
          }
          C || Ya(t);
        }
        if (
          ((y = t.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return y.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Ln(t);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        o
          ? (pa(),
            (o = t.mode),
            (y = js({ mode: "hidden", children: y }, o)),
            (l = el(l, o, n, null)),
            (y.return = t),
            (l.return = t),
            (y.sibling = l),
            (t.child = y),
            (o = t.child),
            (o.memoizedState = Ns(n)),
            (o.childLanes = Bs(e, h, n)),
            (t.memoizedState = _s),
            l)
          : (ha(t), Us(t, y))
      );
    }
    if (
      ((C = e.memoizedState), C !== null && ((y = C.dehydrated), y !== null))
    ) {
      if (c)
        t.flags & 256
          ? (ha(t), (t.flags &= -257), (t = ks(e, t, n)))
          : t.memoizedState !== null
            ? (pa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (pa(),
              (o = l.fallback),
              (y = t.mode),
              (l = js({ mode: "visible", children: l.children }, y)),
              (o = el(o, y, n, null)),
              (o.flags |= 2),
              (l.return = t),
              (o.return = t),
              (l.sibling = o),
              (t.child = l),
              Xa(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Ns(n)),
              (l.childLanes = Bs(e, h, n)),
              (t.memoizedState = _s),
              (t = o));
      else if ((ha(t), y.data === "$!")) {
        if (((h = y.nextSibling && y.nextSibling.dataset), h)) var D = h.dgst;
        (h = D),
          (l = Error(u(419))),
          (l.stack = ""),
          (l.digest = h),
          Ar({ value: l, source: null, stack: null }),
          (t = ks(e, t, n));
      } else if (
        (ct || jr(e, t, n, !1), (h = (n & e.childLanes) !== 0), ct || h)
      ) {
        if (((h = Le), h !== null)) {
          if (((l = n & -n), l & 42)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = l & (h.suspendedLanes | n) ? 0 : l),
            l !== 0 && l !== C.retryLane)
          )
            throw ((C.retryLane = l), da(e, l), Rt(h, e, l), ep);
        }
        y.data === "$?" || fc(), (t = ks(e, t, n));
      } else
        y.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Bv.bind(null, e)),
            (y._reactRetry = t),
            (t = null))
          : ((e = C.treeContext),
            (ht = mn(y.nextSibling)),
            (At = t),
            (Ae = !0),
            (hn = null),
            (vn = !1),
            e !== null &&
              ((Ft[It++] = $n),
              (Ft[It++] = Hn),
              (Ft[It++] = Ga),
              ($n = e.id),
              (Hn = e.overflow),
              (Ga = t)),
            (t = Us(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return o
      ? (pa(),
        (o = l.fallback),
        (y = t.mode),
        (C = e.child),
        (D = C.sibling),
        (l = Ta(C, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = C.subtreeFlags & 31457280),
        D !== null ? (o = Ta(D, o)) : ((o = el(o, y, n, null)), (o.flags |= 2)),
        (o.return = t),
        (l.return = t),
        (l.sibling = o),
        (t.child = l),
        (l = o),
        (o = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = Ns(n))
          : ((C = y.cachePool),
            C !== null
              ? ((D = it._currentValue),
                (C = C.parent !== D ? { parent: D, pool: D } : C))
              : (C = ch()),
            (y = { baseLanes: y.baseLanes | n, cachePool: C })),
        (o.memoizedState = y),
        (o.childLanes = Bs(e, h, n)),
        (t.memoizedState = _s),
        l)
      : (ha(t),
        (n = e.child),
        (e = n.sibling),
        (n = Ta(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((h = t.deletions),
          h === null ? ((t.deletions = [e]), (t.flags |= 16)) : h.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Us(e, t) {
    return (
      (t = js({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function js(e, t) {
    return Up(e, t, 0, null);
  }
  function ks(e, t, n) {
    return (
      Xa(t, e.child, null, n),
      (e = Us(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function cp(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), qs(e.return, t, n);
  }
  function $s(e, t, n, l, o) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: o,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = n),
        (c.tailMode = o));
  }
  function fp(e, t, n) {
    var l = t.pendingProps,
      o = l.revealOrder,
      c = l.tail;
    if ((pt(e, t, l.children, n), (l = rt.current), l & 2))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && cp(e, n, t);
          else if (e.tag === 19) cp(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((Ee(rt, l), o)) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ro(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          $s(t, !1, o, n, c);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ro(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        $s(t, !0, n, null, c);
        break;
      case "together":
        $s(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Aa |= t.lanes),
      !(n & t.childLanes))
    )
      if (e !== null) {
        if ((jr(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Ta(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Ta(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Hs(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && vo(e)));
  }
  function Sv(e, t, n) {
    switch (t.tag) {
      case 3:
        Un(t, t.stateNode.containerInfo),
          ya(t, it, e.memoizedState.cache),
          Tr();
        break;
      case 27:
      case 5:
        Je(t);
        break;
      case 4:
        Un(t, t.stateNode.containerInfo);
        break;
      case 10:
        ya(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ha(t), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? sp(e, t, n)
              : (ha(t), (e = Gn(e, t, n)), e !== null ? e.sibling : null);
        ha(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (jr(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          o)
        ) {
          if (l) return fp(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Ee(rt, rt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), lp(e, t, n);
      case 24:
        ya(t, it, e.memoizedState.cache);
    }
    return Gn(e, t, n);
  }
  function dp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) ct = !0;
      else {
        if (!Hs(e, n) && !(t.flags & 128)) return (ct = !1), Sv(e, t, n);
        ct = !!(e.flags & 131072);
      }
    else (ct = !1), Ae && t.flags & 1048576 && Wd(t, eo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            o = l._init;
          if (((l = o(l._payload)), (t.type = l), typeof l == "function"))
            Is(l)
              ? ((e = Wa(l, e)), (t.tag = 1), (t = op(null, t, l, e, n)))
              : ((t.tag = 0), (t = zs(null, t, l, e, n)));
          else {
            if (l != null) {
              if (((o = l.$$typeof), o === T)) {
                (t.tag = 11), (t = tp(null, t, l, e, n));
                break e;
              } else if (o === z) {
                (t.tag = 14), (t = np(null, t, l, e, n));
                break e;
              }
            }
            throw ((t = ee(l) || l), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return zs(e, t, t.type, t.pendingProps, n);
      case 1:
        return (l = t.type), (o = Wa(l, t.pendingProps)), op(e, t, l, o, n);
      case 3:
        e: {
          if ((Un(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          var c = t.pendingProps;
          (o = t.memoizedState), (l = o.element), Ys(e, t), Hr(t, c, null, n);
          var h = t.memoizedState;
          if (
            ((c = h.cache),
            ya(t, it, c),
            c !== o.cache && Gs(t, [it], n, !0),
            $r(),
            (c = h.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: c, isDehydrated: !1, cache: h.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = up(e, t, c, n);
              break e;
            } else if (c !== l) {
              (l = Jt(Error(u(424)), t)), Ar(l), (t = up(e, t, c, n));
              break e;
            } else
              for (
                ht = mn(t.stateNode.containerInfo.firstChild),
                  At = t,
                  Ae = !0,
                  hn = null,
                  vn = !0,
                  n = rh(t, null, c, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Tr(), c === l)) {
              t = Gn(e, t, n);
              break e;
            }
            pt(e, t, c, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ur(e, t),
          e === null
            ? (n = mm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ae ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Bo(Bt.current).createElement(n)),
                (l[bt] = t),
                (l[Dt] = e),
                mt(l, n, e),
                st(l),
                (t.stateNode = l))
            : (t.memoizedState = mm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Je(t),
          e === null &&
            Ae &&
            ((l = t.stateNode = dm(t.type, t.pendingProps, Bt.current)),
            (At = t),
            (vn = !0),
            (ht = mn(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || Ae ? pt(e, t, l, n) : (t.child = Xa(t, null, l, n)),
          Ur(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ae &&
            ((o = l = ht) &&
              ((l = Wv(l, t.type, t.pendingProps, vn)),
              l !== null
                ? ((t.stateNode = l),
                  (At = t),
                  (ht = mn(l.firstChild)),
                  (vn = !1),
                  (o = !0))
                : (o = !1)),
            o || Ya(t)),
          Je(t),
          (o = t.type),
          (c = t.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (l = c.children),
          Ac(o, c) ? (l = null) : h !== null && Ac(o, h) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((o = hs(e, t, hv, null, null, n)), (ei._currentValue = o)),
          Ur(e, t),
          pt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ae &&
            ((e = n = ht) &&
              ((n = Jv(n, t.pendingProps, vn)),
              n !== null
                ? ((t.stateNode = n), (At = t), (ht = null), (e = !0))
                : (e = !1)),
            e || Ya(t)),
          null
        );
      case 13:
        return sp(e, t, n);
      case 4:
        return (
          Un(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Xa(t, null, l, n)) : pt(e, t, l, n),
          t.child
        );
      case 11:
        return tp(e, t, t.type, t.pendingProps, n);
      case 7:
        return pt(e, t, t.pendingProps, n), t.child;
      case 8:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return pt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          ya(t, t.type, l.value),
          pt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (o = t.type._context),
          (l = t.pendingProps.children),
          Fa(t),
          (o = St(o)),
          (l = l(o)),
          (t.flags |= 1),
          pt(e, t, l, n),
          t.child
        );
      case 14:
        return np(e, t, t.type, t.pendingProps, n);
      case 15:
        return ap(e, t, t.type, t.pendingProps, n);
      case 19:
        return fp(e, t, n);
      case 22:
        return lp(e, t, n);
      case 24:
        return (
          Fa(t),
          (l = St(it)),
          e === null
            ? ((o = fs()),
              o === null &&
                ((o = Le),
                (c = ss()),
                (o.pooledCache = c),
                c.refCount++,
                c !== null && (o.pooledCacheLanes |= n),
                (o = c)),
              (t.memoizedState = { parent: l, cache: o }),
              Vs(t),
              ya(t, it, o))
            : (e.lanes & n && (Ys(e, t), Hr(t, null, null, n), $r()),
              (o = e.memoizedState),
              (c = t.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (t.memoizedState = o),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = o),
                  ya(t, it, l))
                : ((l = c.cache),
                  ya(t, it, l),
                  l !== o.cache && Gs(t, [it], n, !0))),
          pt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  var Ls = he(null),
    Ja = null,
    Vn = null;
  function ya(e, t, n) {
    Ee(Ls, t._currentValue), (t._currentValue = n);
  }
  function Yn(e) {
    (e._currentValue = Ls.current), we(Ls);
  }
  function qs(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Gs(e, t, n, l) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var c = o.dependencies;
      if (c !== null) {
        var h = o.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = o;
          for (var C = 0; C < t.length; C++)
            if (y.context === t[C]) {
              (c.lanes |= n),
                (y = c.alternate),
                y !== null && (y.lanes |= n),
                qs(c.return, n, e),
                l || (h = null);
              break e;
            }
          c = y.next;
        }
      } else if (o.tag === 18) {
        if (((h = o.return), h === null)) throw Error(u(341));
        (h.lanes |= n),
          (c = h.alternate),
          c !== null && (c.lanes |= n),
          qs(h, n, e),
          (h = null);
      } else h = o.child;
      if (h !== null) h.return = o;
      else
        for (h = o; h !== null; ) {
          if (h === e) {
            h = null;
            break;
          }
          if (((o = h.sibling), o !== null)) {
            (o.return = h.return), (h = o);
            break;
          }
          h = h.return;
        }
      o = h;
    }
  }
  function jr(e, t, n, l) {
    e = null;
    for (var o = t, c = !1; o !== null; ) {
      if (!c) {
        if (o.flags & 524288) c = !0;
        else if (o.flags & 262144) break;
      }
      if (o.tag === 10) {
        var h = o.alternate;
        if (h === null) throw Error(u(387));
        if (((h = h.memoizedProps), h !== null)) {
          var y = o.type;
          Ht(o.pendingProps.value, h.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (o === yn.current) {
        if (((h = o.alternate), h === null)) throw Error(u(387));
        h.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (e !== null ? e.push(ei) : (e = [ei]));
      }
      o = o.return;
    }
    e !== null && Gs(t, e, n, l), (t.flags |= 262144);
  }
  function vo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ht(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Fa(e) {
    (Ja = e),
      (Vn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function St(e) {
    return hp(Ja, e);
  }
  function bo(e, t) {
    return Ja === null && Fa(e), hp(e, t);
  }
  function hp(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Vn === null)) {
      if (e === null) throw Error(u(308));
      (Vn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Vn = Vn.next = t;
    return n;
  }
  var va = !1;
  function Vs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ys(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ba(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Sa(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), Ye & 2)) {
      var o = l.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (l.pending = t),
        (t = Fi(e)),
        Zd(e, null, n),
        t
      );
    }
    return Ji(e, l, t, n), Fi(e);
  }
  function kr(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194176) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (n |= l), (t.lanes = n), nd(e, n);
    }
  }
  function Xs(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var o = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          c === null ? (o = c = h) : (c = c.next = h), (n = n.next);
        } while (n !== null);
        c === null ? (o = c = t) : (c = c.next = t);
      } else o = c = t;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: c,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Qs = !1;
  function $r() {
    if (Qs) {
      var e = Dl;
      if (e !== null) throw e;
    }
  }
  function Hr(e, t, n, l) {
    Qs = !1;
    var o = e.updateQueue;
    va = !1;
    var c = o.firstBaseUpdate,
      h = o.lastBaseUpdate,
      y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var C = y,
        D = C.next;
      (C.next = null), h === null ? (c = D) : (h.next = D), (h = C);
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== h &&
          (y === null ? (V.firstBaseUpdate = D) : (y.next = D),
          (V.lastBaseUpdate = C)));
    }
    if (c !== null) {
      var K = o.baseState;
      (h = 0), (V = D = C = null), (y = c);
      do {
        var $ = y.lane & -536870913,
          q = $ !== y.lane;
        if (q ? (Ce & $) === $ : (l & $) === $) {
          $ !== 0 && $ === wl && (Qs = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var oe = e,
              ge = y;
            $ = t;
            var Ze = n;
            switch (ge.tag) {
              case 1:
                if (((oe = ge.payload), typeof oe == "function")) {
                  K = oe.call(Ze, K, $);
                  break e;
                }
                K = oe;
                break e;
              case 3:
                oe.flags = (oe.flags & -65537) | 128;
              case 0:
                if (
                  ((oe = ge.payload),
                  ($ = typeof oe == "function" ? oe.call(Ze, K, $) : oe),
                  $ == null)
                )
                  break e;
                K = v({}, K, $);
                break e;
              case 2:
                va = !0;
            }
          }
          ($ = y.callback),
            $ !== null &&
              ((e.flags |= 64),
              q && (e.flags |= 8192),
              (q = o.callbacks),
              q === null ? (o.callbacks = [$]) : q.push($));
        } else
          (q = {
            lane: $,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            V === null ? ((D = V = q), (C = K)) : (V = V.next = q),
            (h |= $);
        if (((y = y.next), y === null)) {
          if (((y = o.shared.pending), y === null)) break;
          (q = y),
            (y = q.next),
            (q.next = null),
            (o.lastBaseUpdate = q),
            (o.shared.pending = null);
        }
      } while (!0);
      V === null && (C = K),
        (o.baseState = C),
        (o.firstBaseUpdate = D),
        (o.lastBaseUpdate = V),
        c === null && (o.shared.lanes = 0),
        (Aa |= h),
        (e.lanes = h),
        (e.memoizedState = K);
    }
  }
  function pp(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function mp(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) pp(n[e], t);
  }
  function Lr(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var c = n.create,
              h = n.inst;
            (l = c()), (h.destroy = l);
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (y) {
      ke(t, t.return, y);
    }
  }
  function xa(e, t, n) {
    try {
      var l = t.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        l = c;
        do {
          if ((l.tag & e) === e) {
            var h = l.inst,
              y = h.destroy;
            if (y !== void 0) {
              (h.destroy = void 0), (o = t);
              var C = n;
              try {
                y();
              } catch (D) {
                ke(o, C, D);
              }
            }
          }
          l = l.next;
        } while (l !== c);
      }
    } catch (D) {
      ke(t, t.return, D);
    }
  }
  function gp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        mp(t, n);
      } catch (l) {
        ke(e, e.return, l);
      }
    }
  }
  function yp(e, t, n) {
    (n.props = Wa(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function Ia(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = l;
            break;
          default:
            o = l;
        }
        typeof n == "function" ? (e.refCleanup = n(o)) : (n.current = o);
      }
    } catch (c) {
      ke(e, t, c);
    }
  }
  function Lt(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          ke(e, t, o);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          ke(e, t, o);
        }
      else n.current = null;
  }
  function vp(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      ke(e, e.return, o);
    }
  }
  function bp(e, t, n) {
    try {
      var l = e.stateNode;
      Xv(l, e.type, n, t), (l[Dt] = t);
    } catch (o) {
      ke(e, e.return, o);
    }
  }
  function Sp(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Ks(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Zs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = No));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (Zs(e, t, n), e = e.sibling; e !== null; )
        Zs(e, t, n), (e = e.sibling);
  }
  function So(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (So(e, t, n), e = e.sibling; e !== null; )
        So(e, t, n), (e = e.sibling);
  }
  var Xn = !1,
    Qe = !1,
    Ps = !1,
    xp = typeof WeakSet == "function" ? WeakSet : Set,
    ft = null,
    Ep = !1;
  function xv(e, t) {
    if (((e = e.containerInfo), (Cc = Lo), (e = Hd(e)), Ju(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var o = l.anchorOffset,
              c = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, c.nodeType;
            } catch {
              n = null;
              break e;
            }
            var h = 0,
              y = -1,
              C = -1,
              D = 0,
              V = 0,
              K = e,
              $ = null;
            t: for (;;) {
              for (
                var q;
                K !== n || (o !== 0 && K.nodeType !== 3) || (y = h + o),
                  K !== c || (l !== 0 && K.nodeType !== 3) || (C = h + l),
                  K.nodeType === 3 && (h += K.nodeValue.length),
                  (q = K.firstChild) !== null;

              )
                ($ = K), (K = q);
              for (;;) {
                if (K === e) break t;
                if (
                  ($ === n && ++D === o && (y = h),
                  $ === c && ++V === l && (C = h),
                  (q = K.nextSibling) !== null)
                )
                  break;
                (K = $), ($ = K.parentNode);
              }
              K = q;
            }
            n = y === -1 || C === -1 ? null : { start: y, end: C };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Tc = { focusedElem: e, selectionRange: n }, Lo = !1, ft = t;
      ft !== null;

    )
      if (
        ((t = ft), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ft = e);
      else
        for (; ft !== null; ) {
          switch (((t = ft), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && c !== null) {
                (e = void 0),
                  (n = t),
                  (o = c.memoizedProps),
                  (c = c.memoizedState),
                  (l = n.stateNode);
                try {
                  var oe = Wa(n.type, o, n.elementType === n.type);
                  (e = l.getSnapshotBeforeUpdate(oe, c)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ge) {
                  ke(n, n.return, ge);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Mc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Mc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ft = e);
            break;
          }
          ft = t.return;
        }
    return (oe = Ep), (Ep = !1), oe;
  }
  function Cp(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, n), l & 4 && Lr(5, n);
        break;
      case 1:
        if ((Kn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (y) {
              ke(n, n.return, y);
            }
          else {
            var o = Wa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              ke(n, n.return, y);
            }
          }
        l & 64 && gp(n), l & 512 && Ia(n, n.return);
        break;
      case 3:
        if ((Kn(e, n), l & 64 && ((l = n.updateQueue), l !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            mp(l, e);
          } catch (y) {
            ke(n, n.return, y);
          }
        }
        break;
      case 26:
        Kn(e, n), l & 512 && Ia(n, n.return);
        break;
      case 27:
      case 5:
        Kn(e, n), t === null && l & 4 && vp(n), l & 512 && Ia(n, n.return);
        break;
      case 12:
        Kn(e, n);
        break;
      case 13:
        Kn(e, n), l & 4 && Rp(e, n);
        break;
      case 22:
        if (((o = n.memoizedState !== null || Xn), !o)) {
          t = (t !== null && t.memoizedState !== null) || Qe;
          var c = Xn,
            h = Qe;
          (Xn = o),
            (Qe = t) && !h ? Ea(e, n, (n.subtreeFlags & 8772) !== 0) : Kn(e, n),
            (Xn = c),
            (Qe = h);
        }
        l & 512 &&
          (n.memoizedProps.mode === "manual"
            ? Ia(n, n.return)
            : Lt(n, n.return));
        break;
      default:
        Kn(e, n);
    }
  }
  function Tp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Tp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Uu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var nt = null,
    qt = !1;
  function Qn(e, t, n) {
    for (n = n.child; n !== null; ) Ap(e, t, n), (n = n.sibling);
  }
  function Ap(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(sr, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Qe || Lt(n, t),
          Qn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Qe || Lt(n, t);
        var l = nt,
          o = qt;
        for (
          nt = n.stateNode, Qn(e, t, n), n = n.stateNode, t = n.attributes;
          t.length;

        )
          n.removeAttributeNode(t[0]);
        Uu(n), (nt = l), (qt = o);
        break;
      case 5:
        Qe || Lt(n, t);
      case 6:
        o = nt;
        var c = qt;
        if (((nt = null), Qn(e, t, n), (nt = o), (qt = c), nt !== null))
          if (qt)
            try {
              (e = nt),
                (l = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(l)
                  : e.removeChild(l);
            } catch (h) {
              ke(n, t, h);
            }
          else
            try {
              nt.removeChild(n.stateNode);
            } catch (h) {
              ke(n, t, h);
            }
        break;
      case 18:
        nt !== null &&
          (qt
            ? ((t = nt),
              (n = n.stateNode),
              t.nodeType === 8
                ? Oc(t.parentNode, n)
                : t.nodeType === 1 && Oc(t, n),
              li(t))
            : Oc(nt, n.stateNode));
        break;
      case 4:
        (l = nt),
          (o = qt),
          (nt = n.stateNode.containerInfo),
          (qt = !0),
          Qn(e, t, n),
          (nt = l),
          (qt = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qe || xa(2, n, t), Qe || xa(4, n, t), Qn(e, t, n);
        break;
      case 1:
        Qe ||
          (Lt(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && yp(n, t, l)),
          Qn(e, t, n);
        break;
      case 21:
        Qn(e, t, n);
        break;
      case 22:
        Qe || Lt(n, t),
          (Qe = (l = Qe) || n.memoizedState !== null),
          Qn(e, t, n),
          (Qe = l);
        break;
      default:
        Qn(e, t, n);
    }
  }
  function Rp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        li(e);
      } catch (n) {
        ke(t, t.return, n);
      }
  }
  function Ev(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new xp()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new xp()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function Ws(e, t) {
    var n = Ev(e);
    t.forEach(function (l) {
      var o = Uv.bind(null, e, l);
      n.has(l) || (n.add(l), l.then(o, o));
    });
  }
  function tn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l],
          c = e,
          h = t,
          y = h;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
            case 5:
              (nt = y.stateNode), (qt = !1);
              break e;
            case 3:
              (nt = y.stateNode.containerInfo), (qt = !0);
              break e;
            case 4:
              (nt = y.stateNode.containerInfo), (qt = !0);
              break e;
          }
          y = y.return;
        }
        if (nt === null) throw Error(u(160));
        Ap(c, h, o),
          (nt = null),
          (qt = !1),
          (c = o.alternate),
          c !== null && (c.return = null),
          (o.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Op(t, e), (t = t.sibling);
  }
  var pn = null;
  function Op(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tn(t, e),
          nn(e),
          l & 4 && (xa(3, e, e.return), Lr(3, e), xa(5, e, e.return));
        break;
      case 1:
        tn(t, e),
          nn(e),
          l & 512 && (Qe || n === null || Lt(n, n.return)),
          l & 64 &&
            Xn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var o = pn;
        if (
          (tn(t, e),
          nn(e),
          l & 512 && (Qe || n === null || Lt(n, n.return)),
          l & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (n = e.memoizedProps),
                    (o = o.ownerDocument || o);
                  t: switch (l) {
                    case "title":
                      (c = o.getElementsByTagName("title")[0]),
                        (!c ||
                          c[dr] ||
                          c[bt] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = o.createElement(l)),
                          o.head.insertBefore(
                            c,
                            o.querySelector("head > title"),
                          )),
                        mt(c, l, n),
                        (c[bt] = e),
                        st(c),
                        (l = c);
                      break e;
                    case "link":
                      var h = vm("link", "href", o).get(l + (n.href || ""));
                      if (h) {
                        for (var y = 0; y < h.length; y++)
                          if (
                            ((c = h[y]),
                            c.getAttribute("href") ===
                              (n.href == null ? null : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            h.splice(y, 1);
                            break t;
                          }
                      }
                      (c = o.createElement(l)),
                        mt(c, l, n),
                        o.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (h = vm("meta", "content", o).get(
                          l + (n.content || ""),
                        ))
                      ) {
                        for (y = 0; y < h.length; y++)
                          if (
                            ((c = h[y]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            h.splice(y, 1);
                            break t;
                          }
                      }
                      (c = o.createElement(l)),
                        mt(c, l, n),
                        o.head.appendChild(c);
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  (c[bt] = e), st(c), (l = c);
                }
                e.stateNode = l;
              } else bm(o, e.type, e.stateNode);
            else e.stateNode = ym(o, l, e.memoizedProps);
          else
            c !== l
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                l === null
                  ? bm(o, e.type, e.stateNode)
                  : ym(o, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                bp(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (o = e.stateNode), (c = e.memoizedProps);
          try {
            for (var C = o.firstChild; C; ) {
              var D = C.nextSibling,
                V = C.nodeName;
              C[dr] ||
                V === "HEAD" ||
                V === "BODY" ||
                V === "SCRIPT" ||
                V === "STYLE" ||
                (V === "LINK" && C.rel.toLowerCase() === "stylesheet") ||
                o.removeChild(C),
                (C = D);
            }
            for (var K = e.type, $ = o.attributes; $.length; )
              o.removeAttributeNode($[0]);
            mt(o, K, c), (o[bt] = e), (o[Dt] = c);
          } catch (oe) {
            ke(e, e.return, oe);
          }
        }
      case 5:
        if (
          (tn(t, e),
          nn(e),
          l & 512 && (Qe || n === null || Lt(n, n.return)),
          e.flags & 32)
        ) {
          o = e.stateNode;
          try {
            yl(o, "");
          } catch (oe) {
            ke(e, e.return, oe);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((o = e.memoizedProps), bp(e, o, n !== null ? n.memoizedProps : o)),
          l & 1024 && (Ps = !0);
        break;
      case 6:
        if ((tn(t, e), nn(e), l & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          (l = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = l;
          } catch (oe) {
            ke(e, e.return, oe);
          }
        }
        break;
      case 3:
        if (
          ((ko = null),
          (o = pn),
          (pn = Uo(t.containerInfo)),
          tn(t, e),
          (pn = o),
          nn(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            li(t.containerInfo);
          } catch (oe) {
            ke(e, e.return, oe);
          }
        Ps && ((Ps = !1), Mp(e));
        break;
      case 4:
        (l = pn),
          (pn = Uo(e.stateNode.containerInfo)),
          tn(t, e),
          nn(e),
          (pn = l);
        break;
      case 12:
        tn(t, e), nn(e);
        break;
      case 13:
        tn(t, e),
          nn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (rc = Ut()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Ws(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (Qe || n === null || Lt(n, n.return)),
          (C = e.memoizedState !== null),
          (D = n !== null && n.memoizedState !== null),
          (V = Xn),
          (K = Qe),
          (Xn = V || C),
          (Qe = K || D),
          tn(t, e),
          (Qe = K),
          (Xn = V),
          nn(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = C ? t._visibility & -2 : t._visibility | 1),
            C && ((t = Xn || Qe), n === null || D || t || Bl(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (n === null) {
                D = n = t;
                try {
                  if (((o = D.stateNode), C))
                    (c = o.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    (h = D.stateNode), (y = D.memoizedProps.style);
                    var q =
                      y != null && y.hasOwnProperty("display")
                        ? y.display
                        : null;
                    h.style.display =
                      q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (oe) {
                  ke(D, D.return, oe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                D = t;
                try {
                  D.stateNode.nodeValue = C ? "" : D.memoizedProps;
                } catch (oe) {
                  ke(D, D.return, oe);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Ws(e, n))));
        break;
      case 19:
        tn(t, e),
          nn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Ws(e, l)));
        break;
      case 21:
        break;
      default:
        tn(t, e), nn(e);
    }
  }
  function nn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var n = e.return; n !== null; ) {
              if (Sp(n)) {
                var l = n;
                break e;
              }
              n = n.return;
            }
            throw Error(u(160));
          }
          switch (l.tag) {
            case 27:
              var o = l.stateNode,
                c = Ks(e);
              So(e, c, o);
              break;
            case 5:
              var h = l.stateNode;
              l.flags & 32 && (yl(h, ""), (l.flags &= -33));
              var y = Ks(e);
              So(e, y, h);
              break;
            case 3:
            case 4:
              var C = l.stateNode.containerInfo,
                D = Ks(e);
              Zs(e, D, C);
              break;
            default:
              throw Error(u(161));
          }
        }
      } catch (V) {
        ke(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Mp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Kn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Cp(e, t.alternate, t), (t = t.sibling);
  }
  function Bl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xa(4, t, t.return), Bl(t);
          break;
        case 1:
          Lt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && yp(t, t.return, n),
            Bl(t);
          break;
        case 26:
        case 27:
        case 5:
          Lt(t, t.return), Bl(t);
          break;
        case 22:
          Lt(t, t.return), t.memoizedState === null && Bl(t);
          break;
        default:
          Bl(t);
      }
      e = e.sibling;
    }
  }
  function Ea(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        o = e,
        c = t,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ea(o, c, n), Lr(4, c);
          break;
        case 1:
          if (
            (Ea(o, c, n),
            (l = c),
            (o = l.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (D) {
              ke(l, l.return, D);
            }
          if (((l = c), (o = l.updateQueue), o !== null)) {
            var y = l.stateNode;
            try {
              var C = o.shared.hiddenCallbacks;
              if (C !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < C.length; o++)
                  pp(C[o], y);
            } catch (D) {
              ke(l, l.return, D);
            }
          }
          n && h & 64 && gp(c), Ia(c, c.return);
          break;
        case 26:
        case 27:
        case 5:
          Ea(o, c, n), n && l === null && h & 4 && vp(c), Ia(c, c.return);
          break;
        case 12:
          Ea(o, c, n);
          break;
        case 13:
          Ea(o, c, n), n && h & 4 && Rp(o, c);
          break;
        case 22:
          c.memoizedState === null && Ea(o, c, n), Ia(c, c.return);
          break;
        default:
          Ea(o, c, n);
      }
      t = t.sibling;
    }
  }
  function Js(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Dr(n));
  }
  function Fs(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Dr(e));
  }
  function Ca(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) wp(e, t, n, l), (t = t.sibling);
  }
  function wp(e, t, n, l) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ca(e, t, n, l), o & 2048 && Lr(9, t);
        break;
      case 3:
        Ca(e, t, n, l),
          o & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Dr(e)));
        break;
      case 12:
        if (o & 2048) {
          Ca(e, t, n, l), (e = t.stateNode);
          try {
            var c = t.memoizedProps,
              h = c.id,
              y = c.onPostCommit;
            typeof y == "function" &&
              y(
                h,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (C) {
            ke(t, t.return, C);
          }
        } else Ca(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        (c = t.stateNode),
          t.memoizedState !== null
            ? c._visibility & 4
              ? Ca(e, t, n, l)
              : qr(e, t)
            : c._visibility & 4
              ? Ca(e, t, n, l)
              : ((c._visibility |= 4),
                Ul(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          o & 2048 && Js(t.alternate, t);
        break;
      case 24:
        Ca(e, t, n, l), o & 2048 && Fs(t.alternate, t);
        break;
      default:
        Ca(e, t, n, l);
    }
  }
  function Ul(e, t, n, l, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e,
        h = t,
        y = n,
        C = l,
        D = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ul(c, h, y, C, o), Lr(8, h);
          break;
        case 23:
          break;
        case 22:
          var V = h.stateNode;
          h.memoizedState !== null
            ? V._visibility & 4
              ? Ul(c, h, y, C, o)
              : qr(c, h)
            : ((V._visibility |= 4), Ul(c, h, y, C, o)),
            o && D & 2048 && Js(h.alternate, h);
          break;
        case 24:
          Ul(c, h, y, C, o), o && D & 2048 && Fs(h.alternate, h);
          break;
        default:
          Ul(c, h, y, C, o);
      }
      t = t.sibling;
    }
  }
  function qr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          o = l.flags;
        switch (l.tag) {
          case 22:
            qr(n, l), o & 2048 && Js(l.alternate, l);
            break;
          case 24:
            qr(n, l), o & 2048 && Fs(l.alternate, l);
            break;
          default:
            qr(n, l);
        }
        t = t.sibling;
      }
  }
  var Gr = 8192;
  function jl(e) {
    if (e.subtreeFlags & Gr)
      for (e = e.child; e !== null; ) Dp(e), (e = e.sibling);
  }
  function Dp(e) {
    switch (e.tag) {
      case 26:
        jl(e),
          e.flags & Gr &&
            e.memoizedState !== null &&
            c1(pn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        jl(e);
        break;
      case 3:
      case 4:
        var t = pn;
        (pn = Uo(e.stateNode.containerInfo)), jl(e), (pn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Gr), (Gr = 16777216), jl(e), (Gr = t))
            : jl(e));
        break;
      default:
        jl(e);
    }
  }
  function zp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Vr(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (ft = l), Np(l, e);
        }
      zp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) _p(e), (e = e.sibling);
  }
  function _p(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Vr(e), e.flags & 2048 && xa(9, e, e.return);
        break;
      case 3:
        Vr(e);
        break;
      case 12:
        Vr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), xo(e))
          : Vr(e);
        break;
      default:
        Vr(e);
    }
  }
  function xo(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          (ft = l), Np(l, e);
        }
      zp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          xa(8, t, t.return), xo(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 4 && ((n._visibility &= -5), xo(t));
          break;
        default:
          xo(t);
      }
      e = e.sibling;
    }
  }
  function Np(e, t) {
    for (; ft !== null; ) {
      var n = ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Dr(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (ft = l);
      else
        e: for (n = e; ft !== null; ) {
          l = ft;
          var o = l.sibling,
            c = l.return;
          if ((Tp(l), l === n)) {
            ft = null;
            break e;
          }
          if (o !== null) {
            (o.return = c), (ft = o);
            break e;
          }
          ft = c;
        }
    }
  }
  function Cv(e, t, n, l) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function an(e, t, n, l) {
    return new Cv(e, t, n, l);
  }
  function Is(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ta(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = an(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 31457280),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Bp(e, t) {
    e.flags &= 31457282;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Eo(e, t, n, l, o, c) {
    var h = 0;
    if (((l = e), typeof e == "function")) Is(e) && (h = 1);
    else if (typeof e == "string")
      h = u1(e, n, ot.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case g:
          return el(n.children, o, c, t);
        case m:
          (h = 8), (o |= 24);
          break;
        case b:
          return (
            (e = an(12, n, t, o | 2)), (e.elementType = b), (e.lanes = c), e
          );
        case E:
          return (e = an(13, n, t, o)), (e.elementType = E), (e.lanes = c), e;
        case _:
          return (e = an(19, n, t, o)), (e.elementType = _), (e.lanes = c), e;
        case k:
          return Up(n, o, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case S:
              case R:
                h = 10;
                break e;
              case x:
                h = 9;
                break e;
              case T:
                h = 11;
                break e;
              case z:
                h = 14;
                break e;
              case H:
                (h = 16), (l = null);
                break e;
            }
          (h = 29),
            (n = Error(u(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = an(h, n, t, o)), (t.elementType = e), (t.type = l), (t.lanes = c), t
    );
  }
  function el(e, t, n, l) {
    return (e = an(7, e, l, t)), (e.lanes = n), e;
  }
  function Up(e, t, n, l) {
    (e = an(22, e, l, t)), (e.elementType = k), (e.lanes = n);
    var o = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var c = o._current;
        if (c === null) throw Error(u(456));
        if (!(o._pendingVisibility & 2)) {
          var h = da(c, 2);
          h !== null && ((o._pendingVisibility |= 2), Rt(h, c, 2));
        }
      },
      attach: function () {
        var c = o._current;
        if (c === null) throw Error(u(456));
        if (o._pendingVisibility & 2) {
          var h = da(c, 2);
          h !== null && ((o._pendingVisibility &= -3), Rt(h, c, 2));
        }
      },
    };
    return (e.stateNode = o), e;
  }
  function ec(e, t, n) {
    return (e = an(6, e, null, t)), (e.lanes = n), e;
  }
  function tc(e, t, n) {
    return (
      (t = an(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Zn(e) {
    e.flags |= 4;
  }
  function jp(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Sm(t))) {
      if (
        ((t = en.current),
        t !== null &&
          ((Ce & 4194176) === Ce
            ? bn !== null
            : ((Ce & 62914560) !== Ce && !(Ce & 536870912)) || t !== bn))
      )
        throw ((Or = is), Id);
      e.flags |= 8192;
    }
  }
  function Co(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ed() : 536870912), (e.lanes |= t), ($l |= t));
  }
  function Yr(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 31457280),
          (l |= o.flags & 31457280),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = n), t;
  }
  function Tv(e, t, n) {
    var l = t.pendingProps;
    switch ((ls(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ve(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Yn(it),
          Kt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Cr(t)
              ? Zn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), hn !== null && (sc(hn), (hn = null)))),
          Ve(t),
          null
        );
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (Zn(t),
              n !== null ? (Ve(t), jp(t, n)) : (Ve(t), (t.flags &= -16777217)))
            : n
              ? n !== e.memoizedState
                ? (Zn(t), Ve(t), jp(t, n))
                : (Ve(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && Zn(t), Ve(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        vt(t), (n = Bt.current);
        var o = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && Zn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return Ve(t), null;
          }
          (e = ot.current),
            Cr(t) ? Jd(t) : ((e = dm(o, l, n)), (t.stateNode = e), Zn(t));
        }
        return Ve(t), null;
      case 5:
        if ((vt(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Zn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return Ve(t), null;
          }
          if (((e = ot.current), Cr(t))) Jd(t);
          else {
            switch (((o = Bo(Bt.current)), e)) {
              case 1:
                e = o.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = o.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    (e = o.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? o.createElement("select", { is: l.is })
                        : o.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? o.createElement(n, { is: l.is })
                        : o.createElement(n);
                }
            }
            (e[bt] = t), (e[Dt] = l);
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                (o.child.return = o), (o = o.child);
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t) break e;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
            t.stateNode = e;
            e: switch ((mt(e, n, l), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Zn(t);
          }
        }
        return Ve(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Zn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = Bt.current), Cr(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (o = At),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            (e[bt] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                im(e.nodeValue, n)
              )),
              e || Ya(t);
          } else (e = Bo(e).createTextNode(l)), (e[bt] = t), (t.stateNode = e);
        }
        return Ve(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((o = Cr(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(u(317));
              o[bt] = t;
            } else
              Tr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ve(t), (o = !1);
          } else hn !== null && (sc(hn), (hn = null)), (o = !0);
          if (!o) return t.flags & 256 ? (Ln(t), t) : (Ln(t), null);
        }
        if ((Ln(t), t.flags & 128)) return (t.lanes = n), t;
        if (
          ((n = l !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          (l = t.child),
            (o = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (o = l.alternate.memoizedState.cachePool.pool);
          var c = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (c = l.memoizedState.cachePool.pool),
            c !== o && (l.flags |= 2048);
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          Co(t, t.updateQueue),
          Ve(t),
          null
        );
      case 4:
        return Kt(), e === null && Sc(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Yn(t.type), Ve(t), null;
      case 19:
        if ((we(rt), (o = t.memoizedState), o === null)) return Ve(t), null;
        if (((l = (t.flags & 128) !== 0), (c = o.rendering), c === null))
          if (l) Yr(o, !1);
          else {
            if (Ke !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((c = ro(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Yr(o, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Co(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Bp(n, e), (n = n.sibling);
                  return Ee(rt, (rt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ut() > To &&
              ((t.flags |= 128), (l = !0), Yr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = ro(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Co(t, e),
                Yr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ae)
              )
                return Ve(t), null;
            } else
              2 * Ut() - o.renderingStartTime > To &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), Yr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = o.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (o.last = c));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ut()),
            (t.sibling = null),
            (e = rt.current),
            Ee(rt, l ? (e & 1) | 2 : e & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Ln(t),
          us(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? n & 536870912 &&
              !(t.flags & 128) &&
              (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          (n = t.updateQueue),
          n !== null && Co(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && we(Qa),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Yn(it),
          Ve(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Av(e, t) {
    switch ((ls(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Yn(it),
          Kt(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return vt(t), null;
      case 13:
        if (
          (Ln(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          Tr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return we(rt), null;
      case 4:
        return Kt(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return (
          Ln(t),
          us(),
          e !== null && we(Qa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Yn(it), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kp(e, t) {
    switch ((ls(t), t.tag)) {
      case 3:
        Yn(it), Kt();
        break;
      case 26:
      case 27:
      case 5:
        vt(t);
        break;
      case 4:
        Kt();
        break;
      case 13:
        Ln(t);
        break;
      case 19:
        we(rt);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        Ln(t), us(), e !== null && we(Qa);
        break;
      case 24:
        Yn(it);
    }
  }
  var Rv = {
      getCacheForType: function (e) {
        var t = St(it),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
    },
    Ov = typeof WeakMap == "function" ? WeakMap : Map,
    Ye = 0,
    Le = null,
    Se = null,
    Ce = 0,
    qe = 0,
    Gt = null,
    Pn = !1,
    kl = !1,
    nc = !1,
    Wn = 0,
    Ke = 0,
    Aa = 0,
    tl = 0,
    ac = 0,
    ln = 0,
    $l = 0,
    Xr = null,
    xn = null,
    lc = !1,
    rc = 0,
    To = 1 / 0,
    Ao = null,
    Ra = null,
    Ro = !1,
    nl = null,
    Qr = 0,
    ic = 0,
    oc = null,
    Kr = 0,
    uc = null;
  function Vt() {
    if (Ye & 2 && Ce !== 0) return Ce & -Ce;
    if (Z.T !== null) {
      var e = wl;
      return e !== 0 ? e : gc();
    }
    return ld();
  }
  function $p() {
    ln === 0 && (ln = !(Ce & 536870912) || Ae ? If() : 536870912);
    var e = en.current;
    return e !== null && (e.flags |= 32), ln;
  }
  function Rt(e, t, n) {
    ((e === Le && qe === 2) || e.cancelPendingCommit !== null) &&
      (Hl(e, 0), Jn(e, Ce, ln, !1)),
      fr(e, n),
      (!(Ye & 2) || e !== Le) &&
        (e === Le && (!(Ye & 2) && (tl |= n), Ke === 4 && Jn(e, Ce, ln, !1)),
        En(e));
  }
  function Hp(e, t, n) {
    if (Ye & 6) throw Error(u(327));
    var l = (!n && (t & 60) === 0 && (t & e.expiredLanes) === 0) || cr(e, t),
      o = l ? Dv(e, t) : dc(e, t, !0),
      c = l;
    do {
      if (o === 0) {
        kl && !l && Jn(e, t, 0, !1);
        break;
      } else if (o === 6) Jn(e, t, 0, !Pn);
      else {
        if (((n = e.current.alternate), c && !Mv(n))) {
          (o = dc(e, t, !1)), (c = !1);
          continue;
        }
        if (o === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var h = 0;
          else
            (h = e.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
          if (h !== 0) {
            t = h;
            e: {
              var y = e;
              o = Xr;
              var C = y.current.memoizedState.isDehydrated;
              if ((C && (Hl(y, h).flags |= 256), (h = dc(y, h, !1)), h !== 2)) {
                if (nc && !C) {
                  (y.errorRecoveryDisabledLanes |= c), (tl |= c), (o = 4);
                  break e;
                }
                (c = xn), (xn = o), c !== null && sc(c);
              }
              o = h;
            }
            if (((c = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          Hl(e, 0), Jn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), o)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194176) === t) {
                Jn(l, t, ln, !Pn);
                break e;
              }
              break;
            case 2:
              xn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if (
            ((l.finishedWork = n),
            (l.finishedLanes = t),
            (t & 62914560) === t && ((c = rc + 300 - Ut()), 10 < c))
          ) {
            if ((Jn(l, t, ln, !Pn), $i(l, 0) !== 0)) break e;
            l.timeoutHandle = sm(
              Lp.bind(null, l, n, xn, Ao, lc, t, ln, tl, $l, Pn, 2, -0, 0),
              c,
            );
            break e;
          }
          Lp(l, n, xn, Ao, lc, t, ln, tl, $l, Pn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    En(e);
  }
  function sc(e) {
    xn === null ? (xn = e) : xn.push.apply(xn, e);
  }
  function Lp(e, t, n, l, o, c, h, y, C, D, V, K, $) {
    var q = t.subtreeFlags;
    if (
      (q & 8192 || (q & 16785408) === 16785408) &&
      ((Ir = { stylesheets: null, count: 0, unsuspend: s1 }),
      Dp(t),
      (t = f1()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(Kp.bind(null, e, n, l, o, h, y, C, 1, K, $))),
        Jn(e, c, h, !D);
      return;
    }
    Kp(e, n, l, o, h, y, C, V, K, $);
  }
  function Mv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var o = n[l],
            c = o.getSnapshot;
          o = o.value;
          try {
            if (!Ht(c(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Jn(e, t, n, l) {
    (t &= ~ac),
      (t &= ~tl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var o = t; 0 < o; ) {
      var c = 31 - $t(o),
        h = 1 << c;
      (l[c] = -1), (o &= ~h);
    }
    n !== 0 && td(e, n, t);
  }
  function Oo() {
    return Ye & 6 ? !0 : (Zr(0), !1);
  }
  function cc() {
    if (Se !== null) {
      if (qe === 0) var e = Se.return;
      else (e = Se), (Vn = Ja = null), gs(e), (Ol = null), (Mr = 0), (e = Se);
      for (; e !== null; ) kp(e.alternate, e), (e = e.return);
      Se = null;
    }
  }
  function Hl(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), Kv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      cc(),
      (Le = e),
      (Se = n = Ta(e.current, null)),
      (Ce = t),
      (qe = 0),
      (Gt = null),
      (Pn = !1),
      (kl = cr(e, t)),
      (nc = !1),
      ($l = ln = ac = tl = Aa = Ke = 0),
      (xn = Xr = null),
      (lc = !1),
      t & 8 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var o = 31 - $t(l),
          c = 1 << o;
        (t |= e[o]), (l &= ~c);
      }
    return (Wn = t), Wi(), n;
  }
  function qp(e, t) {
    (ve = null),
      (Z.H = Sn),
      t === Rr
        ? ((t = nh()), (qe = 3))
        : t === Id
          ? ((t = nh()), (qe = 4))
          : (qe =
              t === ep
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Gt = t),
      Se === null && ((Ke = 1), yo(e, Jt(t, e.current)));
  }
  function Gp() {
    var e = Z.H;
    return (Z.H = Sn), e === null ? Sn : e;
  }
  function Vp() {
    var e = Z.A;
    return (Z.A = Rv), e;
  }
  function fc() {
    (Ke = 4),
      Pn || ((Ce & 4194176) !== Ce && en.current !== null) || (kl = !0),
      (!(Aa & 134217727) && !(tl & 134217727)) ||
        Le === null ||
        Jn(Le, Ce, ln, !1);
  }
  function dc(e, t, n) {
    var l = Ye;
    Ye |= 2;
    var o = Gp(),
      c = Vp();
    (Le !== e || Ce !== t) && ((Ao = null), Hl(e, t)), (t = !1);
    var h = Ke;
    e: do
      try {
        if (qe !== 0 && Se !== null) {
          var y = Se,
            C = Gt;
          switch (qe) {
            case 8:
              cc(), (h = 6);
              break e;
            case 3:
            case 2:
            case 6:
              en.current === null && (t = !0);
              var D = qe;
              if (((qe = 0), (Gt = null), Ll(e, y, C, D), n && kl)) {
                h = 0;
                break e;
              }
              break;
            default:
              (D = qe), (qe = 0), (Gt = null), Ll(e, y, C, D);
          }
        }
        wv(), (h = Ke);
        break;
      } catch (V) {
        qp(e, V);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Vn = Ja = null),
      (Ye = l),
      (Z.H = o),
      (Z.A = c),
      Se === null && ((Le = null), (Ce = 0), Wi()),
      h
    );
  }
  function wv() {
    for (; Se !== null; ) Yp(Se);
  }
  function Dv(e, t) {
    var n = Ye;
    Ye |= 2;
    var l = Gp(),
      o = Vp();
    Le !== e || Ce !== t
      ? ((Ao = null), (To = Ut() + 500), Hl(e, t))
      : (kl = cr(e, t));
    e: do
      try {
        if (qe !== 0 && Se !== null) {
          t = Se;
          var c = Gt;
          t: switch (qe) {
            case 1:
              (qe = 0), (Gt = null), Ll(e, t, c, 1);
              break;
            case 2:
              if (eh(c)) {
                (qe = 0), (Gt = null), Xp(t);
                break;
              }
              (t = function () {
                qe === 2 && Le === e && (qe = 7), En(e);
              }),
                c.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              eh(c)
                ? ((qe = 0), (Gt = null), Xp(t))
                : ((qe = 0), (Gt = null), Ll(e, t, c, 7));
              break;
            case 5:
              var h = null;
              switch (Se.tag) {
                case 26:
                  h = Se.memoizedState;
                case 5:
                case 27:
                  var y = Se;
                  if (!h || Sm(h)) {
                    (qe = 0), (Gt = null);
                    var C = y.sibling;
                    if (C !== null) Se = C;
                    else {
                      var D = y.return;
                      D !== null ? ((Se = D), Mo(D)) : (Se = null);
                    }
                    break t;
                  }
              }
              (qe = 0), (Gt = null), Ll(e, t, c, 5);
              break;
            case 6:
              (qe = 0), (Gt = null), Ll(e, t, c, 6);
              break;
            case 8:
              cc(), (Ke = 6);
              break e;
            default:
              throw Error(u(462));
          }
        }
        zv();
        break;
      } catch (V) {
        qp(e, V);
      }
    while (!0);
    return (
      (Vn = Ja = null),
      (Z.H = l),
      (Z.A = o),
      (Ye = n),
      Se !== null ? 0 : ((Le = null), (Ce = 0), Wi(), Ke)
    );
  }
  function zv() {
    for (; Se !== null && !me(); ) Yp(Se);
  }
  function Yp(e) {
    var t = dp(e.alternate, e, Wn);
    (e.memoizedProps = e.pendingProps), t === null ? Mo(e) : (Se = t);
  }
  function Xp(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ip(n, t, t.pendingProps, t.type, void 0, Ce);
        break;
      case 11:
        t = ip(n, t, t.pendingProps, t.type.render, t.ref, Ce);
        break;
      case 5:
        gs(t);
      default:
        kp(n, t), (t = Se = Bp(t, Wn)), (t = dp(n, t, Wn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Mo(e) : (Se = t);
  }
  function Ll(e, t, n, l) {
    (Vn = Ja = null), gs(t), (Ol = null), (Mr = 0);
    var o = t.return;
    try {
      if (bv(e, o, t, n, Ce)) {
        (Ke = 1), yo(e, Jt(n, e.current)), (Se = null);
        return;
      }
    } catch (c) {
      if (o !== null) throw ((Se = o), c);
      (Ke = 1), yo(e, Jt(n, e.current)), (Se = null);
      return;
    }
    t.flags & 32768
      ? (Ae || l === 1
          ? (e = !0)
          : kl || Ce & 536870912
            ? (e = !1)
            : ((Pn = e = !0),
              (l === 2 || l === 3 || l === 6) &&
                ((l = en.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Qp(t, e))
      : Mo(t);
  }
  function Mo(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Qp(t, Pn);
        return;
      }
      e = t.return;
      var n = Tv(t.alternate, t, Wn);
      if (n !== null) {
        Se = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Ke === 0 && (Ke = 5);
  }
  function Qp(e, t) {
    do {
      var n = Av(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (Se = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Se = e;
        return;
      }
      Se = e = n;
    } while (e !== null);
    (Ke = 6), (Se = null);
  }
  function Kp(e, t, n, l, o, c, h, y, C, D) {
    var V = Z.T,
      K = I.p;
    try {
      (I.p = 2), (Z.T = null), _v(e, t, n, l, K, o, c, h, y, C, D);
    } finally {
      (Z.T = V), (I.p = K);
    }
  }
  function _v(e, t, n, l, o, c, h, y) {
    do ql();
    while (nl !== null);
    if (Ye & 6) throw Error(u(327));
    var C = e.finishedWork;
    if (((l = e.finishedLanes), C === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), C === e.current))
      throw Error(u(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var D = C.lanes | C.childLanes;
    if (
      ((D |= ts),
      c0(e, l, D, c, h, y),
      e === Le && ((Se = Le = null), (Ce = 0)),
      (!(C.subtreeFlags & 10256) && !(C.flags & 10256)) ||
        Ro ||
        ((Ro = !0),
        (ic = D),
        (oc = n),
        jv(lt, function () {
          return ql(), null;
        })),
      (n = (C.flags & 15990) !== 0),
      C.subtreeFlags & 15990 || n
        ? ((n = Z.T),
          (Z.T = null),
          (c = I.p),
          (I.p = 2),
          (h = Ye),
          (Ye |= 4),
          xv(e, C),
          Op(C, e),
          nv(Tc, e.containerInfo),
          (Lo = !!Cc),
          (Tc = Cc = null),
          (e.current = C),
          Cp(e, C.alternate, C),
          Bi(),
          (Ye = h),
          (I.p = c),
          (Z.T = n))
        : (e.current = C),
      Ro ? ((Ro = !1), (nl = e), (Qr = l)) : Zp(e, D),
      (D = e.pendingLanes),
      D === 0 && (Ra = null),
      r0(C.stateNode),
      En(e),
      t !== null)
    )
      for (o = e.onRecoverableError, C = 0; C < t.length; C++)
        (D = t[C]), o(D.value, { componentStack: D.stack });
    return (
      Qr & 3 && ql(),
      (D = e.pendingLanes),
      l & 4194218 && D & 42
        ? e === uc
          ? Kr++
          : ((Kr = 0), (uc = e))
        : (Kr = 0),
      Zr(0),
      null
    );
  }
  function Zp(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Dr(t)));
  }
  function ql() {
    if (nl !== null) {
      var e = nl,
        t = ic;
      ic = 0;
      var n = ad(Qr),
        l = Z.T,
        o = I.p;
      try {
        if (((I.p = 32 > n ? 32 : n), (Z.T = null), nl === null)) var c = !1;
        else {
          (n = oc), (oc = null);
          var h = nl,
            y = Qr;
          if (((nl = null), (Qr = 0), Ye & 6)) throw Error(u(331));
          var C = Ye;
          if (
            ((Ye |= 4),
            _p(h.current),
            wp(h, h.current, y, n),
            (Ye = C),
            Zr(0, !1),
            kt && typeof kt.onPostCommitFiberRoot == "function")
          )
            try {
              kt.onPostCommitFiberRoot(sr, h);
            } catch {}
          c = !0;
        }
        return c;
      } finally {
        (I.p = o), (Z.T = l), Zp(e, t);
      }
    }
    return !1;
  }
  function Pp(e, t, n) {
    (t = Jt(n, t)),
      (t = Ds(e.stateNode, t, 2)),
      (e = Sa(e, t, 2)),
      e !== null && (fr(e, 2), En(e));
  }
  function ke(e, t, n) {
    if (e.tag === 3) Pp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pp(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ra === null || !Ra.has(l)))
          ) {
            (e = Jt(n, e)),
              (n = Fh(2)),
              (l = Sa(t, n, 2)),
              l !== null && (Ih(n, l, t, e), fr(l, 2), En(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function hc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Ov();
      var o = new Set();
      l.set(t, o);
    } else (o = l.get(t)), o === void 0 && ((o = new Set()), l.set(t, o));
    o.has(n) ||
      ((nc = !0), o.add(n), (e = Nv.bind(null, e, t, n)), t.then(e, e));
  }
  function Nv(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Le === e &&
        (Ce & n) === n &&
        (Ke === 4 || (Ke === 3 && (Ce & 62914560) === Ce && 300 > Ut() - rc)
          ? !(Ye & 2) && Hl(e, 0)
          : (ac |= n),
        $l === Ce && ($l = 0)),
      En(e);
  }
  function Wp(e, t) {
    t === 0 && (t = ed()), (e = da(e, t)), e !== null && (fr(e, t), En(e));
  }
  function Bv(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Wp(e, n);
  }
  function Uv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    l !== null && l.delete(t), Wp(e, n);
  }
  function jv(e, t) {
    return ia(e, t);
  }
  var wo = null,
    Gl = null,
    pc = !1,
    Do = !1,
    mc = !1,
    al = 0;
  function En(e) {
    e !== Gl &&
      e.next === null &&
      (Gl === null ? (wo = Gl = e) : (Gl = Gl.next = e)),
      (Do = !0),
      pc || ((pc = !0), $v(kv));
  }
  function Zr(e, t) {
    if (!mc && Do) {
      mc = !0;
      do
        for (var n = !1, l = wo; l !== null; ) {
          if (e !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var c = 0;
            else {
              var h = l.suspendedLanes,
                y = l.pingedLanes;
              (c = (1 << (31 - $t(42 | e) + 1)) - 1),
                (c &= o & ~(h & ~y)),
                (c = c & 201326677 ? (c & 201326677) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((n = !0), Ip(l, c));
          } else
            (c = Ce),
              (c = $i(l, l === Le ? c : 0)),
              !(c & 3) || cr(l, c) || ((n = !0), Ip(l, c));
          l = l.next;
        }
      while (n);
      mc = !1;
    }
  }
  function kv() {
    Do = pc = !1;
    var e = 0;
    al !== 0 && (Qv() && (e = al), (al = 0));
    for (var t = Ut(), n = null, l = wo; l !== null; ) {
      var o = l.next,
        c = Jp(l, t);
      c === 0
        ? ((l.next = null),
          n === null ? (wo = o) : (n.next = o),
          o === null && (Gl = n))
        : ((n = l), (e !== 0 || c & 3) && (Do = !0)),
        (l = o);
    }
    Zr(e);
  }
  function Jp(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        o = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;

    ) {
      var h = 31 - $t(c),
        y = 1 << h,
        C = o[h];
      C === -1
        ? (!(y & n) || y & l) && (o[h] = s0(y, t))
        : C <= t && (e.expiredLanes |= y),
        (c &= ~y);
    }
    if (
      ((t = Le),
      (n = Ce),
      (n = $i(e, e === t ? n : 0)),
      (l = e.callbackNode),
      n === 0 || (e === t && qe === 2) || e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && oa(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(n & 3) || cr(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && oa(l), ad(n))) {
        case 2:
        case 8:
          n = ut;
          break;
        case 32:
          n = lt;
          break;
        case 268435456:
          n = ua;
          break;
        default:
          n = lt;
      }
      return (
        (l = Fp.bind(null, e)),
        (n = ia(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && oa(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Fp(e, t) {
    var n = e.callbackNode;
    if (ql() && e.callbackNode !== n) return null;
    var l = Ce;
    return (
      (l = $i(e, e === Le ? l : 0)),
      l === 0
        ? null
        : (Hp(e, l, t),
          Jp(e, Ut()),
          e.callbackNode != null && e.callbackNode === n
            ? Fp.bind(null, e)
            : null)
    );
  }
  function Ip(e, t) {
    if (ql()) return null;
    Hp(e, t, !0);
  }
  function $v(e) {
    Zv(function () {
      Ye & 6 ? ia(ur, e) : e();
    });
  }
  function gc() {
    return al === 0 && (al = If()), al;
  }
  function em(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Vi("" + e);
  }
  function tm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Hv(e, t, n, l, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var c = em((o[Dt] || null).action),
        h = l.submitter;
      h &&
        ((t = (t = h[Dt] || null)
          ? em(t.formAction)
          : h.getAttribute("formAction")),
        t !== null && ((c = t), (h = null)));
      var y = new Ki("action", "action", null, l, o);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (al !== 0) {
                  var C = h ? tm(o, h) : new FormData(o);
                  As(
                    n,
                    { pending: !0, data: C, method: o.method, action: c },
                    null,
                    C,
                  );
                }
              } else
                typeof c == "function" &&
                  (y.preventDefault(),
                  (C = h ? tm(o, h) : new FormData(o)),
                  As(
                    n,
                    { pending: !0, data: C, method: o.method, action: c },
                    c,
                    C,
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var yc = 0; yc < Kd.length; yc++) {
    var vc = Kd[yc],
      Lv = vc.toLowerCase(),
      qv = vc[0].toUpperCase() + vc.slice(1);
    dn(Lv, "on" + qv);
  }
  dn(Gd, "onAnimationEnd"),
    dn(Vd, "onAnimationIteration"),
    dn(Yd, "onAnimationStart"),
    dn("dblclick", "onDoubleClick"),
    dn("focusin", "onFocus"),
    dn("focusout", "onBlur"),
    dn(lv, "onTransitionRun"),
    dn(rv, "onTransitionStart"),
    dn(iv, "onTransitionCancel"),
    dn(Xd, "onTransitionEnd"),
    ml("onMouseEnter", ["mouseout", "mouseover"]),
    ml("onMouseLeave", ["mouseout", "mouseover"]),
    ml("onPointerEnter", ["pointerout", "pointerover"]),
    ml("onPointerLeave", ["pointerout", "pointerover"]),
    $a(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    $a(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    $a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $a(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    $a(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    $a(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Pr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Gv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Pr),
    );
  function nm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        o = l.event;
      l = l.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var h = l.length - 1; 0 <= h; h--) {
            var y = l[h],
              C = y.instance,
              D = y.currentTarget;
            if (((y = y.listener), C !== c && o.isPropagationStopped()))
              break e;
            (c = y), (o.currentTarget = D);
            try {
              c(o);
            } catch (V) {
              go(V);
            }
            (o.currentTarget = null), (c = C);
          }
        else
          for (h = 0; h < l.length; h++) {
            if (
              ((y = l[h]),
              (C = y.instance),
              (D = y.currentTarget),
              (y = y.listener),
              C !== c && o.isPropagationStopped())
            )
              break e;
            (c = y), (o.currentTarget = D);
            try {
              c(o);
            } catch (V) {
              go(V);
            }
            (o.currentTarget = null), (c = C);
          }
      }
    }
  }
  function xe(e, t) {
    var n = t[Bu];
    n === void 0 && (n = t[Bu] = new Set());
    var l = e + "__bubble";
    n.has(l) || (am(t, e, 2, !1), n.add(l));
  }
  function bc(e, t, n) {
    var l = 0;
    t && (l |= 4), am(n, e, l, t);
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Sc(e) {
    if (!e[zo]) {
      (e[zo] = !0),
        id.forEach(function (n) {
          n !== "selectionchange" && (Gv.has(n) || bc(n, !1, e), bc(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || ((t[zo] = !0), bc("selectionchange", !1, t));
    }
  }
  function am(e, t, n, l) {
    switch (Rm(t)) {
      case 2:
        var o = p1;
        break;
      case 8:
        o = m1;
        break;
      default:
        o = Nc;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !Gu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      l
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1);
  }
  function xc(e, t, n, l, o) {
    var c = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var h = l.tag;
        if (h === 3 || h === 4) {
          var y = l.stateNode.containerInfo;
          if (y === o || (y.nodeType === 8 && y.parentNode === o)) break;
          if (h === 4)
            for (h = l.return; h !== null; ) {
              var C = h.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = h.stateNode.containerInfo),
                C === o || (C.nodeType === 8 && C.parentNode === o))
              )
                return;
              h = h.return;
            }
          for (; y !== null; ) {
            if (((h = ka(y)), h === null)) return;
            if (((C = h.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              l = c = h;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    vd(function () {
      var D = c,
        V = Lu(n),
        K = [];
      e: {
        var $ = Qd.get(e);
        if ($ !== void 0) {
          var q = Ki,
            oe = e;
          switch (e) {
            case "keypress":
              if (Xi(n) === 0) break e;
            case "keydown":
            case "keyup":
              q = U0;
              break;
            case "focusin":
              (oe = "focus"), (q = Qu);
              break;
            case "focusout":
              (oe = "blur"), (q = Qu);
              break;
            case "beforeblur":
            case "afterblur":
              q = Qu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = xd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = C0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = $0;
              break;
            case Gd:
            case Vd:
            case Yd:
              q = R0;
              break;
            case Xd:
              q = L0;
              break;
            case "scroll":
            case "scrollend":
              q = x0;
              break;
            case "wheel":
              q = G0;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = M0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = Cd;
              break;
            case "toggle":
            case "beforetoggle":
              q = Y0;
          }
          var ge = (t & 4) !== 0,
            Ze = !ge && (e === "scroll" || e === "scrollend"),
            N = ge ? ($ !== null ? $ + "Capture" : null) : $;
          ge = [];
          for (var w = D, j; w !== null; ) {
            var X = w;
            if (
              ((j = X.stateNode),
              (X = X.tag),
              (X !== 5 && X !== 26 && X !== 27) ||
                j === null ||
                N === null ||
                ((X = pr(w, N)), X != null && ge.push(Wr(w, X, j))),
              Ze)
            )
              break;
            w = w.return;
          }
          0 < ge.length &&
            (($ = new q($, oe, null, n, V)),
            K.push({ event: $, listeners: ge }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            (($ = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            $ &&
              n !== Hu &&
              (oe = n.relatedTarget || n.fromElement) &&
              (ka(oe) || oe[dl]))
          )
            break e;
          if (
            (q || $) &&
            (($ =
              V.window === V
                ? V
                : ($ = V.ownerDocument)
                  ? $.defaultView || $.parentWindow
                  : window),
            q
              ? ((oe = n.relatedTarget || n.toElement),
                (q = D),
                (oe = oe ? ka(oe) : null),
                oe !== null &&
                  ((Ze = ae(oe)),
                  (ge = oe.tag),
                  oe !== Ze || (ge !== 5 && ge !== 27 && ge !== 6)) &&
                  (oe = null))
              : ((q = null), (oe = D)),
            q !== oe)
          ) {
            if (
              ((ge = xd),
              (X = "onMouseLeave"),
              (N = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ge = Cd),
                (X = "onPointerLeave"),
                (N = "onPointerEnter"),
                (w = "pointer")),
              (Ze = q == null ? $ : hr(q)),
              (j = oe == null ? $ : hr(oe)),
              ($ = new ge(X, w + "leave", q, n, V)),
              ($.target = Ze),
              ($.relatedTarget = j),
              (X = null),
              ka(V) === D &&
                ((ge = new ge(N, w + "enter", oe, n, V)),
                (ge.target = j),
                (ge.relatedTarget = Ze),
                (X = ge)),
              (Ze = X),
              q && oe)
            )
              t: {
                for (ge = q, N = oe, w = 0, j = ge; j; j = Vl(j)) w++;
                for (j = 0, X = N; X; X = Vl(X)) j++;
                for (; 0 < w - j; ) (ge = Vl(ge)), w--;
                for (; 0 < j - w; ) (N = Vl(N)), j--;
                for (; w--; ) {
                  if (ge === N || (N !== null && ge === N.alternate)) break t;
                  (ge = Vl(ge)), (N = Vl(N));
                }
                ge = null;
              }
            else ge = null;
            q !== null && lm(K, $, q, ge, !1),
              oe !== null && Ze !== null && lm(K, Ze, oe, ge, !0);
          }
        }
        e: {
          if (
            (($ = D ? hr(D) : window),
            (q = $.nodeName && $.nodeName.toLowerCase()),
            q === "select" || (q === "input" && $.type === "file"))
          )
            var le = zd;
          else if (wd($))
            if (_d) le = ev;
            else {
              le = F0;
              var be = J0;
            }
          else
            (q = $.nodeName),
              !q ||
              q.toLowerCase() !== "input" ||
              ($.type !== "checkbox" && $.type !== "radio")
                ? D && $u(D.elementType) && (le = zd)
                : (le = I0);
          if (le && (le = le(e, D))) {
            Dd(K, le, n, V);
            break e;
          }
          be && be(e, $, D),
            e === "focusout" &&
              D &&
              $.type === "number" &&
              D.memoizedProps.value != null &&
              ku($, "number", $.value);
        }
        switch (((be = D ? hr(D) : window), e)) {
          case "focusin":
            (wd(be) || be.contentEditable === "true") &&
              ((xl = be), (Fu = D), (Er = null));
            break;
          case "focusout":
            Er = Fu = xl = null;
            break;
          case "mousedown":
            Iu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Iu = !1), Ld(K, n, V);
            break;
          case "selectionchange":
            if (av) break;
          case "keydown":
          case "keyup":
            Ld(K, n, V);
        }
        var ue;
        if (Zu)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Sl
            ? Od(e, n) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (fe = "onCompositionStart");
        fe &&
          (Td &&
            n.locale !== "ko" &&
            (Sl || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && Sl && (ue = bd())
              : ((fa = V),
                (Vu = "value" in fa ? fa.value : fa.textContent),
                (Sl = !0))),
          (be = _o(D, fe)),
          0 < be.length &&
            ((fe = new Ed(fe, e, null, n, V)),
            K.push({ event: fe, listeners: be }),
            ue
              ? (fe.data = ue)
              : ((ue = Md(n)), ue !== null && (fe.data = ue)))),
          (ue = Q0 ? K0(e, n) : Z0(e, n)) &&
            ((fe = _o(D, "onBeforeInput")),
            0 < fe.length &&
              ((be = new Ed("onBeforeInput", "beforeinput", null, n, V)),
              K.push({ event: be, listeners: fe }),
              (be.data = ue))),
          Hv(K, e, D, n, V);
      }
      nm(K, t);
    });
  }
  function Wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function _o(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var o = e,
        c = o.stateNode;
      (o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          c === null ||
          ((o = pr(e, n)),
          o != null && l.unshift(Wr(e, o, c)),
          (o = pr(e, t)),
          o != null && l.push(Wr(e, o, c))),
        (e = e.return);
    }
    return l;
  }
  function Vl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function lm(e, t, n, l, o) {
    for (var c = t._reactName, h = []; n !== null && n !== l; ) {
      var y = n,
        C = y.alternate,
        D = y.stateNode;
      if (((y = y.tag), C !== null && C === l)) break;
      (y !== 5 && y !== 26 && y !== 27) ||
        D === null ||
        ((C = D),
        o
          ? ((D = pr(n, c)), D != null && h.unshift(Wr(n, D, C)))
          : o || ((D = pr(n, c)), D != null && h.push(Wr(n, D, C)))),
        (n = n.return);
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Vv = /\r\n?/g,
    Yv = /\u0000|\uFFFD/g;
  function rm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Vv,
        `
`,
      )
      .replace(Yv, "");
  }
  function im(e, t) {
    return (t = rm(t)), rm(e) === t;
  }
  function No() {}
  function Be(e, t, n, l, o, c) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || yl(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            yl(e, "" + l);
        break;
      case "className":
        Li(e, "class", l);
        break;
      case "tabIndex":
        Li(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Li(e, n, l);
        break;
      case "style":
        gd(e, l, c);
        break;
      case "data":
        if (t !== "object") {
          Li(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (l = Vi("" + l)), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (t !== "input" && Be(e, t, "name", o.name, o, null),
                Be(e, t, "formEncType", o.formEncType, o, null),
                Be(e, t, "formMethod", o.formMethod, o, null),
                Be(e, t, "formTarget", o.formTarget, o, null))
              : (Be(e, t, "encType", o.encType, o, null),
                Be(e, t, "method", o.method, o, null),
                Be(e, t, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (l = Vi("" + l)), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = No);
        break;
      case "onScroll":
        l != null && xe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && xe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Vi("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        xe("beforetoggle", e), xe("toggle", e), Hi(e, "popover", l);
        break;
      case "xlinkActuate":
        kn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        kn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        kn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        kn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        kn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        kn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        kn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        kn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        kn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Hi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = b0.get(n) || n), Hi(e, n, l));
    }
  }
  function Ec(e, t, n, l, o, c) {
    switch (n) {
      case "style":
        gd(e, l, c);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(u(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? yl(e, l)
          : (typeof l == "number" || typeof l == "bigint") && yl(e, "" + l);
        break;
      case "onScroll":
        l != null && xe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && xe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = No);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!od.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")),
              (t = n.slice(2, o ? n.length - 7 : void 0)),
              (c = e[Dt] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && e.removeEventListener(t, c, o),
              typeof l == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, o);
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, "")
                : Hi(e, n, l);
          }
    }
  }
  function mt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        xe("error", e), xe("load", e);
        var l = !1,
          o = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var h = n[c];
            if (h != null)
              switch (c) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Be(e, t, c, h, n, null);
              }
          }
        o && Be(e, t, "srcSet", n.srcSet, n, null),
          l && Be(e, t, "src", n.src, n, null);
        return;
      case "input":
        xe("invalid", e);
        var y = (c = h = o = null),
          C = null,
          D = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var V = n[l];
            if (V != null)
              switch (l) {
                case "name":
                  o = V;
                  break;
                case "type":
                  h = V;
                  break;
                case "checked":
                  C = V;
                  break;
                case "defaultChecked":
                  D = V;
                  break;
                case "value":
                  c = V;
                  break;
                case "defaultValue":
                  y = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(u(137, t));
                  break;
                default:
                  Be(e, t, l, V, n, null);
              }
          }
        dd(e, c, y, C, D, h, o, !1), qi(e);
        return;
      case "select":
        xe("invalid", e), (l = h = c = null);
        for (o in n)
          if (n.hasOwnProperty(o) && ((y = n[o]), y != null))
            switch (o) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                h = y;
                break;
              case "multiple":
                l = y;
              default:
                Be(e, t, o, y, n, null);
            }
        (t = c),
          (n = h),
          (e.multiple = !!l),
          t != null ? gl(e, !!l, t, !1) : n != null && gl(e, !!l, n, !0);
        return;
      case "textarea":
        xe("invalid", e), (c = o = l = null);
        for (h in n)
          if (n.hasOwnProperty(h) && ((y = n[h]), y != null))
            switch (h) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(u(91));
                break;
              default:
                Be(e, t, h, y, n, null);
            }
        pd(e, l, o, c), qi(e);
        return;
      case "option":
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Be(e, t, C, l, n, null);
            }
        return;
      case "dialog":
        xe("cancel", e), xe("close", e);
        break;
      case "iframe":
      case "object":
        xe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Pr.length; l++) xe(Pr[l], e);
        break;
      case "image":
        xe("error", e), xe("load", e);
        break;
      case "details":
        xe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        xe("error", e), xe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in n)
          if (n.hasOwnProperty(D) && ((l = n[D]), l != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Be(e, t, D, l, n, null);
            }
        return;
      default:
        if ($u(t)) {
          for (V in n)
            n.hasOwnProperty(V) &&
              ((l = n[V]), l !== void 0 && Ec(e, t, V, l, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((l = n[y]), l != null && Be(e, t, y, l, n, null));
  }
  function Xv(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          c = null,
          h = null,
          y = null,
          C = null,
          D = null,
          V = null;
        for (q in n) {
          var K = n[q];
          if (n.hasOwnProperty(q) && K != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = K;
              default:
                l.hasOwnProperty(q) || Be(e, t, q, null, l, K);
            }
        }
        for (var $ in l) {
          var q = l[$];
          if (((K = n[$]), l.hasOwnProperty($) && (q != null || K != null)))
            switch ($) {
              case "type":
                c = q;
                break;
              case "name":
                o = q;
                break;
              case "checked":
                D = q;
                break;
              case "defaultChecked":
                V = q;
                break;
              case "value":
                h = q;
                break;
              case "defaultValue":
                y = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(u(137, t));
                break;
              default:
                q !== K && Be(e, t, $, q, l, K);
            }
        }
        ju(e, h, y, C, D, V, c, o);
        return;
      case "select":
        q = h = y = $ = null;
        for (c in n)
          if (((C = n[c]), n.hasOwnProperty(c) && C != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                q = C;
              default:
                l.hasOwnProperty(c) || Be(e, t, c, null, l, C);
            }
        for (o in l)
          if (
            ((c = l[o]),
            (C = n[o]),
            l.hasOwnProperty(o) && (c != null || C != null))
          )
            switch (o) {
              case "value":
                $ = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                h = c;
              default:
                c !== C && Be(e, t, o, c, l, C);
            }
        (t = y),
          (n = h),
          (l = q),
          $ != null
            ? gl(e, !!n, $, !1)
            : !!l != !!n &&
              (t != null ? gl(e, !!n, t, !0) : gl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        q = $ = null;
        for (y in n)
          if (
            ((o = n[y]),
            n.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Be(e, t, y, null, l, o);
            }
        for (h in l)
          if (
            ((o = l[h]),
            (c = n[h]),
            l.hasOwnProperty(h) && (o != null || c != null))
          )
            switch (h) {
              case "value":
                $ = o;
                break;
              case "defaultValue":
                q = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== c && Be(e, t, h, o, l, c);
            }
        hd(e, $, q);
        return;
      case "option":
        for (var oe in n)
          if (
            (($ = n[oe]),
            n.hasOwnProperty(oe) && $ != null && !l.hasOwnProperty(oe))
          )
            switch (oe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Be(e, t, oe, null, l, $);
            }
        for (C in l)
          if (
            (($ = l[C]),
            (q = n[C]),
            l.hasOwnProperty(C) && $ !== q && ($ != null || q != null))
          )
            switch (C) {
              case "selected":
                e.selected =
                  $ && typeof $ != "function" && typeof $ != "symbol";
                break;
              default:
                Be(e, t, C, $, l, q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ge in n)
          ($ = n[ge]),
            n.hasOwnProperty(ge) &&
              $ != null &&
              !l.hasOwnProperty(ge) &&
              Be(e, t, ge, null, l, $);
        for (D in l)
          if (
            (($ = l[D]),
            (q = n[D]),
            l.hasOwnProperty(D) && $ !== q && ($ != null || q != null))
          )
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if ($ != null) throw Error(u(137, t));
                break;
              default:
                Be(e, t, D, $, l, q);
            }
        return;
      default:
        if ($u(t)) {
          for (var Ze in n)
            ($ = n[Ze]),
              n.hasOwnProperty(Ze) &&
                $ !== void 0 &&
                !l.hasOwnProperty(Ze) &&
                Ec(e, t, Ze, void 0, l, $);
          for (V in l)
            ($ = l[V]),
              (q = n[V]),
              !l.hasOwnProperty(V) ||
                $ === q ||
                ($ === void 0 && q === void 0) ||
                Ec(e, t, V, $, l, q);
          return;
        }
    }
    for (var N in n)
      ($ = n[N]),
        n.hasOwnProperty(N) &&
          $ != null &&
          !l.hasOwnProperty(N) &&
          Be(e, t, N, null, l, $);
    for (K in l)
      ($ = l[K]),
        (q = n[K]),
        !l.hasOwnProperty(K) ||
          $ === q ||
          ($ == null && q == null) ||
          Be(e, t, K, $, l, q);
  }
  var Cc = null,
    Tc = null;
  function Bo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function om(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function um(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ac(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Rc = null;
  function Qv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Rc
        ? !1
        : ((Rc = e), !0)
      : ((Rc = null), !1);
  }
  var sm = typeof setTimeout == "function" ? setTimeout : void 0,
    Kv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cm = typeof Promise == "function" ? Promise : void 0,
    Zv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof cm < "u"
          ? function (e) {
              return cm.resolve(null).then(e).catch(Pv);
            }
          : sm;
  function Pv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Oc(e, t) {
    var n = t,
      l = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (l === 0) {
            e.removeChild(o), li(t);
            return;
          }
          l--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || l++;
      n = o;
    } while (n);
    li(t);
  }
  function Mc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Mc(n), Uu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Wv(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[dr])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== o.rel ||
                e.getAttribute("href") !== (o.href == null ? null : o.href) ||
                e.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                e.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (o.src == null ? null : o.src) ||
                  e.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  e.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = mn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Jv(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function fm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function dm(e, t, n) {
    switch (((t = Bo(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  var rn = new Map(),
    hm = new Set();
  function Uo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var Fn = I.d;
  I.d = { f: Fv, r: Iv, D: e1, C: t1, L: n1, m: a1, X: r1, S: l1, M: i1 };
  function Fv() {
    var e = Fn.f(),
      t = Oo();
    return e || t;
  }
  function Iv(e) {
    var t = hl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Lh(t) : Fn.r(e);
  }
  var Yl = typeof document > "u" ? null : document;
  function pm(e, t, n) {
    var l = Yl;
    if (l && typeof t == "string" && t) {
      var o = Pt(t);
      (o = 'link[rel="' + e + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        hm.has(o) ||
          (hm.add(o),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(o) === null &&
            ((t = l.createElement("link")),
            mt(t, "link", e),
            st(t),
            l.head.appendChild(t)));
    }
  }
  function e1(e) {
    Fn.D(e), pm("dns-prefetch", e, null);
  }
  function t1(e, t) {
    Fn.C(e, t), pm("preconnect", e, t);
  }
  function n1(e, t, n) {
    Fn.L(e, t, n);
    var l = Yl;
    if (l && e && t) {
      var o = 'link[rel="preload"][as="' + Pt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + Pt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (o += '[imagesizes="' + Pt(n.imageSizes) + '"]'))
        : (o += '[href="' + Pt(e) + '"]');
      var c = o;
      switch (t) {
        case "style":
          c = Xl(e);
          break;
        case "script":
          c = Ql(e);
      }
      rn.has(c) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        rn.set(c, e),
        l.querySelector(o) !== null ||
          (t === "style" && l.querySelector(Jr(c))) ||
          (t === "script" && l.querySelector(Fr(c))) ||
          ((t = l.createElement("link")),
          mt(t, "link", e),
          st(t),
          l.head.appendChild(t)));
    }
  }
  function a1(e, t) {
    Fn.m(e, t);
    var n = Yl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        o =
          'link[rel="modulepreload"][as="' + Pt(l) + '"][href="' + Pt(e) + '"]',
        c = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Ql(e);
      }
      if (
        !rn.has(c) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        rn.set(c, e),
        n.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Fr(c))) return;
        }
        (l = n.createElement("link")),
          mt(l, "link", e),
          st(l),
          n.head.appendChild(l);
      }
    }
  }
  function l1(e, t, n) {
    Fn.S(e, t, n);
    var l = Yl;
    if (l && e) {
      var o = pl(l).hoistableStyles,
        c = Xl(e);
      t = t || "default";
      var h = o.get(c);
      if (!h) {
        var y = { loading: 0, preload: null };
        if ((h = l.querySelector(Jr(c)))) y.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = rn.get(c)) && wc(e, n);
          var C = (h = l.createElement("link"));
          st(C),
            mt(C, "link", e),
            (C._p = new Promise(function (D, V) {
              (C.onload = D), (C.onerror = V);
            })),
            C.addEventListener("load", function () {
              y.loading |= 1;
            }),
            C.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            jo(h, t, l);
        }
        (h = { type: "stylesheet", instance: h, count: 1, state: y }),
          o.set(c, h);
      }
    }
  }
  function r1(e, t) {
    Fn.X(e, t);
    var n = Yl;
    if (n && e) {
      var l = pl(n).hoistableScripts,
        o = Ql(e),
        c = l.get(o);
      c ||
        ((c = n.querySelector(Fr(o))),
        c ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = rn.get(o)) && Dc(e, t),
          (c = n.createElement("script")),
          st(c),
          mt(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(o, c));
    }
  }
  function i1(e, t) {
    Fn.M(e, t);
    var n = Yl;
    if (n && e) {
      var l = pl(n).hoistableScripts,
        o = Ql(e),
        c = l.get(o);
      c ||
        ((c = n.querySelector(Fr(o))),
        c ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = rn.get(o)) && Dc(e, t),
          (c = n.createElement("script")),
          st(c),
          mt(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        l.set(o, c));
    }
  }
  function mm(e, t, n, l) {
    var o = (o = Bt.current) ? Uo(o) : null;
    if (!o) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Xl(n.href)),
            (n = pl(o).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Xl(n.href);
          var c = pl(o).hoistableStyles,
            h = c.get(e);
          if (
            (h ||
              ((o = o.ownerDocument || o),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, h),
              (c = o.querySelector(Jr(e))) &&
                !c._p &&
                ((h.instance = c), (h.state.loading = 5)),
              rn.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                rn.set(e, n),
                c || o1(o, e, n, h.state))),
            t && l === null)
          )
            throw Error(u(528, ""));
          return h;
        }
        if (t && l !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ql(n)),
              (n = pl(o).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Xl(e) {
    return 'href="' + Pt(e) + '"';
  }
  function Jr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function gm(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function o1(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        mt(t, "link", n),
        st(t),
        e.head.appendChild(t));
  }
  function Ql(e) {
    return '[src="' + Pt(e) + '"]';
  }
  function Fr(e) {
    return "script[async]" + e;
  }
  function ym(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Pt(n.href) + '"]');
          if (l) return (t.instance = l), st(l), l;
          var o = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            st(l),
            mt(l, "style", o),
            jo(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          o = Xl(n.href);
          var c = e.querySelector(Jr(o));
          if (c) return (t.state.loading |= 4), (t.instance = c), st(c), c;
          (l = gm(n)),
            (o = rn.get(o)) && wc(l, o),
            (c = (e.ownerDocument || e).createElement("link")),
            st(c);
          var h = c;
          return (
            (h._p = new Promise(function (y, C) {
              (h.onload = y), (h.onerror = C);
            })),
            mt(c, "link", l),
            (t.state.loading |= 4),
            jo(c, n.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = Ql(n.src)),
            (o = e.querySelector(Fr(c)))
              ? ((t.instance = o), st(o), o)
              : ((l = n),
                (o = rn.get(c)) && ((l = v({}, n)), Dc(l, o)),
                (e = e.ownerDocument || e),
                (o = e.createElement("script")),
                st(o),
                mt(o, "link", l),
                e.head.appendChild(o),
                (t.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((l = t.instance), (t.state.loading |= 4), jo(l, n.precedence, e));
    return t.instance;
  }
  function jo(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        o = l.length ? l[l.length - 1] : null,
        c = o,
        h = 0;
      h < l.length;
      h++
    ) {
      var y = l[h];
      if (y.dataset.precedence === t) c = y;
      else if (c !== o) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function wc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Dc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var ko = null;
  function vm(e, t, n) {
    if (ko === null) {
      var l = new Map(),
        o = (ko = new Map());
      o.set(n, l);
    } else (o = ko), (l = o.get(n)), l || ((l = new Map()), o.set(n, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), o = 0;
      o < n.length;
      o++
    ) {
      var c = n[o];
      if (
        !(
          c[dr] ||
          c[bt] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = c.getAttribute(t) || "";
        h = e + h;
        var y = l.get(h);
        y ? y.push(c) : l.set(h, [c]);
      }
    }
    return l;
  }
  function bm(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function u1(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Sm(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  var Ir = null;
  function s1() {}
  function c1(e, t, n) {
    if (Ir === null) throw Error(u(475));
    var l = Ir;
    if (
      t.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var o = Xl(n.href),
          c = e.querySelector(Jr(o));
        if (c) {
          (e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = $o.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = c),
            st(c);
          return;
        }
        (c = e.ownerDocument || e),
          (n = gm(n)),
          (o = rn.get(o)) && wc(n, o),
          (c = c.createElement("link")),
          st(c);
        var h = c;
        (h._p = new Promise(function (y, C) {
          (h.onload = y), (h.onerror = C);
        })),
          mt(c, "link", n),
          (t.instance = c);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (l.count++,
          (t = $o.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function f1() {
    if (Ir === null) throw Error(u(475));
    var e = Ir;
    return (
      e.stylesheets && e.count === 0 && zc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && zc(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function $o() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ho = null;
  function zc(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ho = new Map()),
        t.forEach(d1, e),
        (Ho = null),
        $o.call(e));
  }
  function d1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ho.get(e);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), Ho.set(e, n);
        for (
          var o = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < o.length;
          c++
        ) {
          var h = o[c];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (l = h));
        }
        l && n.set(null, l);
      }
      (o = t.instance),
        (h = o.getAttribute("data-precedence")),
        (c = n.get(h) || l),
        c === l && n.set(null, o),
        n.set(h, o),
        this.count++,
        (l = $o.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        c
          ? c.parentNode.insertBefore(o, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(o, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var ei = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0,
  };
  function h1(e, t, n, l, o, c, h, y) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Nu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Nu(0)),
      (this.hiddenUpdates = Nu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = c),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map());
  }
  function xm(e, t, n, l, o, c, h, y, C, D, V, K) {
    return (
      (e = new h1(e, t, n, h, y, C, D, K)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = an(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = ss()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Vs(c),
      e
    );
  }
  function Em(e) {
    return e ? ((e = Tl), e) : Tl;
  }
  function Cm(e, t, n, l, o, c) {
    (o = Em(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = ba(t)),
      (l.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (l.callback = c),
      (n = Sa(e, l, t)),
      n !== null && (Rt(n, e, t), kr(n, e, t));
  }
  function Tm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _c(e, t) {
    Tm(e, t), (e = e.alternate) && Tm(e, t);
  }
  function Am(e) {
    if (e.tag === 13) {
      var t = da(e, 67108864);
      t !== null && Rt(t, e, 67108864), _c(e, 67108864);
    }
  }
  var Lo = !0;
  function p1(e, t, n, l) {
    var o = Z.T;
    Z.T = null;
    var c = I.p;
    try {
      (I.p = 2), Nc(e, t, n, l);
    } finally {
      (I.p = c), (Z.T = o);
    }
  }
  function m1(e, t, n, l) {
    var o = Z.T;
    Z.T = null;
    var c = I.p;
    try {
      (I.p = 8), Nc(e, t, n, l);
    } finally {
      (I.p = c), (Z.T = o);
    }
  }
  function Nc(e, t, n, l) {
    if (Lo) {
      var o = Bc(l);
      if (o === null) xc(e, t, l, qo, n), Om(e, l);
      else if (y1(o, e, t, n, l)) l.stopPropagation();
      else if ((Om(e, l), t & 4 && -1 < g1.indexOf(e))) {
        for (; o !== null; ) {
          var c = hl(o);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var h = ja(c.pendingLanes);
                  if (h !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; h; ) {
                      var C = 1 << (31 - $t(h));
                      (y.entanglements[1] |= C), (h &= ~C);
                    }
                    En(c), !(Ye & 6) && ((To = Ut() + 500), Zr(0));
                  }
                }
                break;
              case 13:
                (y = da(c, 2)), y !== null && Rt(y, c, 2), Oo(), _c(c, 2);
            }
          if (((c = Bc(l)), c === null && xc(e, t, l, qo, n), c === o)) break;
          o = c;
        }
        o !== null && l.stopPropagation();
      } else xc(e, t, l, null, n);
    }
  }
  function Bc(e) {
    return (e = Lu(e)), Uc(e);
  }
  var qo = null;
  function Uc(e) {
    if (((qo = null), (e = ka(e)), e !== null)) {
      var t = ae(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = se(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (qo = e), null;
  }
  function Rm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ui()) {
          case ur:
            return 2;
          case ut:
            return 8;
          case lt:
          case Tt:
            return 32;
          case ua:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jc = !1,
    Oa = null,
    Ma = null,
    wa = null,
    ti = new Map(),
    ni = new Map(),
    Da = [],
    g1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Om(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Oa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ma = null;
        break;
      case "mouseover":
      case "mouseout":
        wa = null;
        break;
      case "pointerover":
      case "pointerout":
        ti.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ni.delete(t.pointerId);
    }
  }
  function ai(e, t, n, l, o, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: c,
          targetContainers: [o],
        }),
        t !== null && ((t = hl(t)), t !== null && Am(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function y1(e, t, n, l, o) {
    switch (t) {
      case "focusin":
        return (Oa = ai(Oa, e, t, n, l, o)), !0;
      case "dragenter":
        return (Ma = ai(Ma, e, t, n, l, o)), !0;
      case "mouseover":
        return (wa = ai(wa, e, t, n, l, o)), !0;
      case "pointerover":
        var c = o.pointerId;
        return ti.set(c, ai(ti.get(c) || null, e, t, n, l, o)), !0;
      case "gotpointercapture":
        return (
          (c = o.pointerId), ni.set(c, ai(ni.get(c) || null, e, t, n, l, o)), !0
        );
    }
    return !1;
  }
  function Mm(e) {
    var t = ka(e.target);
    if (t !== null) {
      var n = ae(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = se(n)), t !== null)) {
            (e.blockedOn = t),
              f0(e.priority, function () {
                if (n.tag === 13) {
                  var l = Vt(),
                    o = da(n, l);
                  o !== null && Rt(o, n, l), _c(n, l);
                }
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Hu = l), n.target.dispatchEvent(l), (Hu = null);
      } else return (t = hl(n)), t !== null && Am(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function wm(e, t, n) {
    Go(e) && n.delete(t);
  }
  function v1() {
    (jc = !1),
      Oa !== null && Go(Oa) && (Oa = null),
      Ma !== null && Go(Ma) && (Ma = null),
      wa !== null && Go(wa) && (wa = null),
      ti.forEach(wm),
      ni.forEach(wm);
  }
  function Vo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      jc ||
        ((jc = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, v1)));
  }
  var Yo = null;
  function Dm(e) {
    Yo !== e &&
      ((Yo = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Yo === e && (Yo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            o = e[t + 2];
          if (typeof l != "function") {
            if (Uc(l || n) === null) continue;
            break;
          }
          var c = hl(n);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            As(c, { pending: !0, data: o, method: n.method, action: l }, l, o));
        }
      }));
  }
  function li(e) {
    function t(C) {
      return Vo(C, e);
    }
    Oa !== null && Vo(Oa, e),
      Ma !== null && Vo(Ma, e),
      wa !== null && Vo(wa, e),
      ti.forEach(t),
      ni.forEach(t);
    for (var n = 0; n < Da.length; n++) {
      var l = Da[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Da.length && ((n = Da[0]), n.blockedOn === null); )
      Mm(n), n.blockedOn === null && Da.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var o = n[l],
          c = n[l + 1],
          h = o[Dt] || null;
        if (typeof c == "function") h || Dm(n);
        else if (h) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (((o = c), (h = c[Dt] || null))) y = h.formAction;
            else if (Uc(o) !== null) continue;
          } else y = h.action;
          typeof y == "function" ? (n[l + 1] = y) : (n.splice(l, 3), (l -= 3)),
            Dm(n);
        }
      }
  }
  function kc(e) {
    this._internalRoot = e;
  }
  (Xo.prototype.render = kc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var n = t.current,
        l = Vt();
      Cm(n, l, e, t, null, null);
    }),
    (Xo.prototype.unmount = kc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && ql(),
            Cm(e.current, 2, null, e, null, null),
            Oo(),
            (t[dl] = null);
        }
      });
  function Xo(e) {
    this._internalRoot = e;
  }
  Xo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ld();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Da.length && t !== 0 && t < Da[n].priority; n++);
      Da.splice(n, 0, e), n === 0 && Mm(e);
    }
  };
  var zm = r.version;
  if (zm !== "19.0.0") throw Error(u(527, zm, "19.0.0"));
  I.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = Y(t)),
      (e = e !== null ? re(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var b1 = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Z,
    findFiberByHostInstance: ka,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        (sr = Qo.inject(b1)), (kt = Qo);
      } catch {}
  }
  return (
    (oi.createRoot = function (e, t) {
      if (!s(e)) throw Error(u(299));
      var n = !1,
        l = "",
        o = Zh,
        c = Ph,
        h = Wh,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (h = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (y = t.unstable_transitionCallbacks)),
        (t = xm(e, 1, !1, null, null, n, l, o, c, h, y, null)),
        (e[dl] = t.current),
        Sc(e.nodeType === 8 ? e.parentNode : e),
        new kc(t)
      );
    }),
    (oi.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(u(299));
      var l = !1,
        o = "",
        c = Zh,
        h = Ph,
        y = Wh,
        C = null,
        D = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (C = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (D = n.formState)),
        (t = xm(e, 1, !0, t, n ?? null, l, o, c, h, y, C, D)),
        (t.context = Em(null)),
        (n = t.current),
        (l = Vt()),
        (o = ba(l)),
        (o.callback = null),
        Sa(n, o, l),
        (t.current.lanes = l),
        fr(t, l),
        En(t),
        (e[dl] = t.current),
        Sc(e),
        new Xo(t)
      );
    }),
    (oi.version = "19.0.0"),
    oi
  );
}
var qm;
function z1() {
  if (qm) return Lc.exports;
  qm = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (r) {
        console.error(r);
      }
  }
  return a(), (Lc.exports = D1()), Lc.exports;
}
var _1 = z1();
function cl(a, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${a}`);
  return (
    r.forEach((u) => i.searchParams.append("args[]", u)),
    `Minified MUI error #${a}; visit ${i} for the full message.`
  );
}
const wn = "$$material";
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var u in i) ({}).hasOwnProperty.call(i, u) && (a[u] = i[u]);
          }
          return a;
        }),
    uu.apply(null, arguments)
  );
}
function N1(a) {
  if (a.sheet) return a.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === a) return document.styleSheets[r];
}
function B1(a) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", a.key),
    a.nonce !== void 0 && r.setAttribute("nonce", a.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var U1 = (function () {
    function a(i) {
      var u = this;
      (this._insertTag = function (s) {
        var f;
        u.tags.length === 0
          ? u.insertionPoint
            ? (f = u.insertionPoint.nextSibling)
            : u.prepend
              ? (f = u.container.firstChild)
              : (f = u.before)
          : (f = u.tags[u.tags.length - 1].nextSibling),
          u.container.insertBefore(s, f),
          u.tags.push(s);
      }),
        (this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = i.nonce),
        (this.key = i.key),
        (this.container = i.container),
        (this.prepend = i.prepend),
        (this.insertionPoint = i.insertionPoint),
        (this.before = null);
    }
    var r = a.prototype;
    return (
      (r.hydrate = function (u) {
        u.forEach(this._insertTag);
      }),
      (r.insert = function (u) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(B1(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = N1(s);
          try {
            f.insertRule(u, f.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(u));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (u) {
          var s;
          return (s = u.parentNode) == null ? void 0 : s.removeChild(u);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      a
    );
  })(),
  Et = "-ms-",
  su = "-moz-",
  Oe = "-webkit-",
  Hg = "comm",
  Sf = "rule",
  xf = "decl",
  j1 = "@import",
  Lg = "@keyframes",
  k1 = "@layer",
  $1 = Math.abs,
  yu = String.fromCharCode,
  H1 = Object.assign;
function L1(a, r) {
  return gt(a, 0) ^ 45
    ? (((((((r << 2) ^ gt(a, 0)) << 2) ^ gt(a, 1)) << 2) ^ gt(a, 2)) << 2) ^
        gt(a, 3)
    : 0;
}
function qg(a) {
  return a.trim();
}
function q1(a, r) {
  return (a = r.exec(a)) ? a[0] : a;
}
function Me(a, r, i) {
  return a.replace(r, i);
}
function tf(a, r) {
  return a.indexOf(r);
}
function gt(a, r) {
  return a.charCodeAt(r) | 0;
}
function gi(a, r, i) {
  return a.slice(r, i);
}
function An(a) {
  return a.length;
}
function Ef(a) {
  return a.length;
}
function Ko(a, r) {
  return r.push(a), a;
}
function G1(a, r) {
  return a.map(r).join("");
}
var vu = 1,
  ar = 1,
  Gg = 0,
  Nt = 0,
  at = 0,
  lr = "";
function bu(a, r, i, u, s, f, d) {
  return {
    value: a,
    root: r,
    parent: i,
    type: u,
    props: s,
    children: f,
    line: vu,
    column: ar,
    length: d,
    return: "",
  };
}
function ui(a, r) {
  return H1(bu("", null, null, "", null, null, 0), a, { length: -a.length }, r);
}
function V1() {
  return at;
}
function Y1() {
  return (
    (at = Nt > 0 ? gt(lr, --Nt) : 0), ar--, at === 10 && ((ar = 1), vu--), at
  );
}
function Xt() {
  return (
    (at = Nt < Gg ? gt(lr, Nt++) : 0), ar++, at === 10 && ((ar = 1), vu++), at
  );
}
function Dn() {
  return gt(lr, Nt);
}
function eu() {
  return Nt;
}
function Ei(a, r) {
  return gi(lr, a, r);
}
function yi(a) {
  switch (a) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Vg(a) {
  return (vu = ar = 1), (Gg = An((lr = a))), (Nt = 0), [];
}
function Yg(a) {
  return (lr = ""), a;
}
function tu(a) {
  return qg(Ei(Nt - 1, nf(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function X1(a) {
  for (; (at = Dn()) && at < 33; ) Xt();
  return yi(a) > 2 || yi(at) > 3 ? "" : " ";
}
function Q1(a, r) {
  for (
    ;
    --r &&
    Xt() &&
    !(at < 48 || at > 102 || (at > 57 && at < 65) || (at > 70 && at < 97));

  );
  return Ei(a, eu() + (r < 6 && Dn() == 32 && Xt() == 32));
}
function nf(a) {
  for (; Xt(); )
    switch (at) {
      case a:
        return Nt;
      case 34:
      case 39:
        a !== 34 && a !== 39 && nf(at);
        break;
      case 40:
        a === 41 && nf(a);
        break;
      case 92:
        Xt();
        break;
    }
  return Nt;
}
function K1(a, r) {
  for (; Xt() && a + at !== 57; ) if (a + at === 84 && Dn() === 47) break;
  return "/*" + Ei(r, Nt - 1) + "*" + yu(a === 47 ? a : Xt());
}
function Z1(a) {
  for (; !yi(Dn()); ) Xt();
  return Ei(a, Nt);
}
function P1(a) {
  return Yg(nu("", null, null, null, [""], (a = Vg(a)), 0, [0], a));
}
function nu(a, r, i, u, s, f, d, p, g) {
  for (
    var m = 0,
      b = 0,
      S = d,
      x = 0,
      R = 0,
      T = 0,
      E = 1,
      _ = 1,
      z = 1,
      H = 0,
      k = "",
      U = s,
      M = f,
      G = u,
      P = k;
    _;

  )
    switch (((T = H), (H = Xt()))) {
      case 40:
        if (T != 108 && gt(P, S - 1) == 58) {
          tf((P += Me(tu(H), "&", "&\f")), "&\f") != -1 && (z = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += tu(H);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += X1(T);
        break;
      case 92:
        P += Q1(eu() - 1, 7);
        continue;
      case 47:
        switch (Dn()) {
          case 42:
          case 47:
            Ko(W1(K1(Xt(), eu()), r, i), g);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * E:
        p[m++] = An(P) * z;
      case 125 * E:
      case 59:
      case 0:
        switch (H) {
          case 0:
          case 125:
            _ = 0;
          case 59 + b:
            z == -1 && (P = Me(P, /\f/g, "")),
              R > 0 &&
                An(P) - S &&
                Ko(
                  R > 32
                    ? Vm(P + ";", u, i, S - 1)
                    : Vm(Me(P, " ", "") + ";", u, i, S - 2),
                  g,
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (Ko((G = Gm(P, r, i, m, b, s, p, k, (U = []), (M = []), S)), f),
              H === 123)
            )
              if (b === 0) nu(P, r, G, G, U, f, S, p, M);
              else
                switch (x === 99 && gt(P, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nu(
                      a,
                      G,
                      G,
                      u && Ko(Gm(a, G, G, 0, 0, s, p, k, s, (U = []), S), M),
                      s,
                      M,
                      S,
                      p,
                      u ? U : M,
                    );
                    break;
                  default:
                    nu(P, G, G, G, [""], M, 0, p, M);
                }
        }
        (m = b = R = 0), (E = z = 1), (k = P = ""), (S = d);
        break;
      case 58:
        (S = 1 + An(P)), (R = T);
      default:
        if (E < 1) {
          if (H == 123) --E;
          else if (H == 125 && E++ == 0 && Y1() == 125) continue;
        }
        switch (((P += yu(H)), H * E)) {
          case 38:
            z = b > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (p[m++] = (An(P) - 1) * z), (z = 1);
            break;
          case 64:
            Dn() === 45 && (P += tu(Xt())),
              (x = Dn()),
              (b = S = An((k = P += Z1(eu())))),
              H++;
            break;
          case 45:
            T === 45 && An(P) == 2 && (E = 0);
        }
    }
  return f;
}
function Gm(a, r, i, u, s, f, d, p, g, m, b) {
  for (
    var S = s - 1, x = s === 0 ? f : [""], R = Ef(x), T = 0, E = 0, _ = 0;
    T < u;
    ++T
  )
    for (var z = 0, H = gi(a, S + 1, (S = $1((E = d[T])))), k = a; z < R; ++z)
      (k = qg(E > 0 ? x[z] + " " + H : Me(H, /&\f/g, x[z]))) && (g[_++] = k);
  return bu(a, r, i, s === 0 ? Sf : p, g, m, b);
}
function W1(a, r, i) {
  return bu(a, r, i, Hg, yu(V1()), gi(a, 2, -2), 0);
}
function Vm(a, r, i, u) {
  return bu(a, r, i, xf, gi(a, 0, u), gi(a, u + 1, -1), u);
}
function er(a, r) {
  for (var i = "", u = Ef(a), s = 0; s < u; s++) i += r(a[s], s, a, r) || "";
  return i;
}
function J1(a, r, i, u) {
  switch (a.type) {
    case k1:
      if (a.children.length) break;
    case j1:
    case xf:
      return (a.return = a.return || a.value);
    case Hg:
      return "";
    case Lg:
      return (a.return = a.value + "{" + er(a.children, u) + "}");
    case Sf:
      a.value = a.props.join(",");
  }
  return An((i = er(a.children, u)))
    ? (a.return = a.value + "{" + i + "}")
    : "";
}
function F1(a) {
  var r = Ef(a);
  return function (i, u, s, f) {
    for (var d = "", p = 0; p < r; p++) d += a[p](i, u, s, f) || "";
    return d;
  };
}
function I1(a) {
  return function (r) {
    r.root || ((r = r.return) && a(r));
  };
}
function Xg(a) {
  var r = Object.create(null);
  return function (i) {
    return r[i] === void 0 && (r[i] = a(i)), r[i];
  };
}
var eb = function (r, i, u) {
    for (
      var s = 0, f = 0;
      (s = f), (f = Dn()), s === 38 && f === 12 && (i[u] = 1), !yi(f);

    )
      Xt();
    return Ei(r, Nt);
  },
  tb = function (r, i) {
    var u = -1,
      s = 44;
    do
      switch (yi(s)) {
        case 0:
          s === 38 && Dn() === 12 && (i[u] = 1), (r[u] += eb(Nt - 1, i, u));
          break;
        case 2:
          r[u] += tu(s);
          break;
        case 4:
          if (s === 44) {
            (r[++u] = Dn() === 58 ? "&\f" : ""), (i[u] = r[u].length);
            break;
          }
        default:
          r[u] += yu(s);
      }
    while ((s = Xt()));
    return r;
  },
  nb = function (r, i) {
    return Yg(tb(Vg(r), i));
  },
  Ym = new WeakMap(),
  ab = function (r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (
        var i = r.value,
          u = r.parent,
          s = r.column === u.column && r.line === u.line;
        u.type !== "rule";

      )
        if (((u = u.parent), !u)) return;
      if (
        !(r.props.length === 1 && i.charCodeAt(0) !== 58 && !Ym.get(u)) &&
        !s
      ) {
        Ym.set(r, !0);
        for (
          var f = [], d = nb(i, f), p = u.props, g = 0, m = 0;
          g < d.length;
          g++
        )
          for (var b = 0; b < p.length; b++, m++)
            r.props[m] = f[g] ? d[g].replace(/&\f/g, p[b]) : p[b] + " " + d[g];
      }
    }
  },
  lb = function (r) {
    if (r.type === "decl") {
      var i = r.value;
      i.charCodeAt(0) === 108 &&
        i.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  };
function Qg(a, r) {
  switch (L1(a, r)) {
    case 5103:
      return Oe + "print-" + a + a;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Oe + a + a;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + a + su + a + Et + a + a;
    case 6828:
    case 4268:
      return Oe + a + Et + a + a;
    case 6165:
      return Oe + a + Et + "flex-" + a + a;
    case 5187:
      return (
        Oe + a + Me(a, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + Et + "flex-$1$2") + a
      );
    case 5443:
      return Oe + a + Et + "flex-item-" + Me(a, /flex-|-self/, "") + a;
    case 4675:
      return (
        Oe +
        a +
        Et +
        "flex-line-pack" +
        Me(a, /align-content|flex-|-self/, "") +
        a
      );
    case 5548:
      return Oe + a + Et + Me(a, "shrink", "negative") + a;
    case 5292:
      return Oe + a + Et + Me(a, "basis", "preferred-size") + a;
    case 6060:
      return (
        Oe +
        "box-" +
        Me(a, "-grow", "") +
        Oe +
        a +
        Et +
        Me(a, "grow", "positive") +
        a
      );
    case 4554:
      return Oe + Me(a, /([^-])(transform)/g, "$1" + Oe + "$2") + a;
    case 6187:
      return (
        Me(
          Me(Me(a, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"),
          a,
          "",
        ) + a
      );
    case 5495:
    case 3959:
      return Me(a, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return (
        Me(
          Me(a, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + Et + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        Oe +
        a +
        a
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Me(a, /(.+)-inline(.+)/, Oe + "$1$2") + a;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (An(a) - 1 - r > 6)
        switch (gt(a, r + 1)) {
          case 109:
            if (gt(a, r + 4) !== 45) break;
          case 102:
            return (
              Me(
                a,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Oe +
                  "$2-$3$1" +
                  su +
                  (gt(a, r + 3) == 108 ? "$3" : "$2-$3"),
              ) + a
            );
          case 115:
            return ~tf(a, "stretch")
              ? Qg(Me(a, "stretch", "fill-available"), r) + a
              : a;
        }
      break;
    case 4949:
      if (gt(a, r + 1) !== 115) break;
    case 6444:
      switch (gt(a, An(a) - 3 - (~tf(a, "!important") && 10))) {
        case 107:
          return Me(a, ":", ":" + Oe) + a;
        case 101:
          return (
            Me(
              a,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Oe +
                (gt(a, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Oe +
                "$2$3$1" +
                Et +
                "$2box$3",
            ) + a
          );
      }
      break;
    case 5936:
      switch (gt(a, r + 11)) {
        case 114:
          return Oe + a + Et + Me(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        case 108:
          return Oe + a + Et + Me(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        case 45:
          return Oe + a + Et + Me(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return Oe + a + Et + a + a;
  }
  return a;
}
var rb = function (r, i, u, s) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case xf:
          r.return = Qg(r.value, r.length);
          break;
        case Lg:
          return er([ui(r, { value: Me(r.value, "@", "@" + Oe) })], s);
        case Sf:
          if (r.length)
            return G1(r.props, function (f) {
              switch (q1(f, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return er(
                    [ui(r, { props: [Me(f, /:(read-\w+)/, ":" + su + "$1")] })],
                    s,
                  );
                case "::placeholder":
                  return er(
                    [
                      ui(r, {
                        props: [Me(f, /:(plac\w+)/, ":" + Oe + "input-$1")],
                      }),
                      ui(r, { props: [Me(f, /:(plac\w+)/, ":" + su + "$1")] }),
                      ui(r, { props: [Me(f, /:(plac\w+)/, Et + "input-$1")] }),
                    ],
                    s,
                  );
              }
              return "";
            });
      }
  },
  ib = [rb],
  ob = function (r) {
    var i = r.key;
    if (i === "css") {
      var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(u, function (E) {
        var _ = E.getAttribute("data-emotion");
        _.indexOf(" ") !== -1 &&
          (document.head.appendChild(E), E.setAttribute("data-s", ""));
      });
    }
    var s = r.stylisPlugins || ib,
      f = {},
      d,
      p = [];
    (d = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
        function (E) {
          for (
            var _ = E.getAttribute("data-emotion").split(" "), z = 1;
            z < _.length;
            z++
          )
            f[_[z]] = !0;
          p.push(E);
        },
      );
    var g,
      m = [ab, lb];
    {
      var b,
        S = [
          J1,
          I1(function (E) {
            b.insert(E);
          }),
        ],
        x = F1(m.concat(s, S)),
        R = function (_) {
          return er(P1(_), x);
        };
      g = function (_, z, H, k) {
        (b = H),
          R(_ ? _ + "{" + z.styles + "}" : z.styles),
          k && (T.inserted[z.name] = !0);
      };
    }
    var T = {
      key: i,
      sheet: new U1({
        key: i,
        container: d,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: f,
      registered: {},
      insert: g,
    };
    return T.sheet.hydrate(p), T;
  },
  Yc = { exports: {} },
  De = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm;
function ub() {
  if (Xm) return De;
  Xm = 1;
  var a = typeof Symbol == "function" && Symbol.for,
    r = a ? Symbol.for("react.element") : 60103,
    i = a ? Symbol.for("react.portal") : 60106,
    u = a ? Symbol.for("react.fragment") : 60107,
    s = a ? Symbol.for("react.strict_mode") : 60108,
    f = a ? Symbol.for("react.profiler") : 60114,
    d = a ? Symbol.for("react.provider") : 60109,
    p = a ? Symbol.for("react.context") : 60110,
    g = a ? Symbol.for("react.async_mode") : 60111,
    m = a ? Symbol.for("react.concurrent_mode") : 60111,
    b = a ? Symbol.for("react.forward_ref") : 60112,
    S = a ? Symbol.for("react.suspense") : 60113,
    x = a ? Symbol.for("react.suspense_list") : 60120,
    R = a ? Symbol.for("react.memo") : 60115,
    T = a ? Symbol.for("react.lazy") : 60116,
    E = a ? Symbol.for("react.block") : 60121,
    _ = a ? Symbol.for("react.fundamental") : 60117,
    z = a ? Symbol.for("react.responder") : 60118,
    H = a ? Symbol.for("react.scope") : 60119;
  function k(M) {
    if (typeof M == "object" && M !== null) {
      var G = M.$$typeof;
      switch (G) {
        case r:
          switch (((M = M.type), M)) {
            case g:
            case m:
            case u:
            case f:
            case s:
            case S:
              return M;
            default:
              switch (((M = M && M.$$typeof), M)) {
                case p:
                case b:
                case T:
                case R:
                case d:
                  return M;
                default:
                  return G;
              }
          }
        case i:
          return G;
      }
    }
  }
  function U(M) {
    return k(M) === m;
  }
  return (
    (De.AsyncMode = g),
    (De.ConcurrentMode = m),
    (De.ContextConsumer = p),
    (De.ContextProvider = d),
    (De.Element = r),
    (De.ForwardRef = b),
    (De.Fragment = u),
    (De.Lazy = T),
    (De.Memo = R),
    (De.Portal = i),
    (De.Profiler = f),
    (De.StrictMode = s),
    (De.Suspense = S),
    (De.isAsyncMode = function (M) {
      return U(M) || k(M) === g;
    }),
    (De.isConcurrentMode = U),
    (De.isContextConsumer = function (M) {
      return k(M) === p;
    }),
    (De.isContextProvider = function (M) {
      return k(M) === d;
    }),
    (De.isElement = function (M) {
      return typeof M == "object" && M !== null && M.$$typeof === r;
    }),
    (De.isForwardRef = function (M) {
      return k(M) === b;
    }),
    (De.isFragment = function (M) {
      return k(M) === u;
    }),
    (De.isLazy = function (M) {
      return k(M) === T;
    }),
    (De.isMemo = function (M) {
      return k(M) === R;
    }),
    (De.isPortal = function (M) {
      return k(M) === i;
    }),
    (De.isProfiler = function (M) {
      return k(M) === f;
    }),
    (De.isStrictMode = function (M) {
      return k(M) === s;
    }),
    (De.isSuspense = function (M) {
      return k(M) === S;
    }),
    (De.isValidElementType = function (M) {
      return (
        typeof M == "string" ||
        typeof M == "function" ||
        M === u ||
        M === m ||
        M === f ||
        M === s ||
        M === S ||
        M === x ||
        (typeof M == "object" &&
          M !== null &&
          (M.$$typeof === T ||
            M.$$typeof === R ||
            M.$$typeof === d ||
            M.$$typeof === p ||
            M.$$typeof === b ||
            M.$$typeof === _ ||
            M.$$typeof === z ||
            M.$$typeof === H ||
            M.$$typeof === E))
      );
    }),
    (De.typeOf = k),
    De
  );
}
var Qm;
function sb() {
  return Qm || ((Qm = 1), (Yc.exports = ub())), Yc.exports;
}
var Xc, Km;
function cb() {
  if (Km) return Xc;
  Km = 1;
  var a = sb(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    i = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    u = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  (f[a.ForwardRef] = u), (f[a.Memo] = s);
  function d(T) {
    return a.isMemo(T) ? s : f[T.$$typeof] || r;
  }
  var p = Object.defineProperty,
    g = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    S = Object.getPrototypeOf,
    x = Object.prototype;
  function R(T, E, _) {
    if (typeof E != "string") {
      if (x) {
        var z = S(E);
        z && z !== x && R(T, z, _);
      }
      var H = g(E);
      m && (H = H.concat(m(E)));
      for (var k = d(T), U = d(E), M = 0; M < H.length; ++M) {
        var G = H[M];
        if (!i[G] && !(_ && _[G]) && !(U && U[G]) && !(k && k[G])) {
          var P = b(E, G);
          try {
            p(T, G, P);
          } catch {}
        }
      }
    }
    return T;
  }
  return (Xc = R), Xc;
}
cb();
var fb = !0;
function Kg(a, r, i) {
  var u = "";
  return (
    i.split(" ").forEach(function (s) {
      a[s] !== void 0 ? r.push(a[s] + ";") : s && (u += s + " ");
    }),
    u
  );
}
var Cf = function (r, i, u) {
    var s = r.key + "-" + i.name;
    (u === !1 || fb === !1) &&
      r.registered[s] === void 0 &&
      (r.registered[s] = i.styles);
  },
  Tf = function (r, i, u) {
    Cf(r, i, u);
    var s = r.key + "-" + i.name;
    if (r.inserted[i.name] === void 0) {
      var f = i;
      do r.insert(i === f ? "." + s : "", f, r.sheet, !0), (f = f.next);
      while (f !== void 0);
    }
  };
function db(a) {
  for (var r = 0, i, u = 0, s = a.length; s >= 4; ++u, s -= 4)
    (i =
      (a.charCodeAt(u) & 255) |
      ((a.charCodeAt(++u) & 255) << 8) |
      ((a.charCodeAt(++u) & 255) << 16) |
      ((a.charCodeAt(++u) & 255) << 24)),
      (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
      (i ^= i >>> 24),
      (r =
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      r ^= (a.charCodeAt(u + 2) & 255) << 16;
    case 2:
      r ^= (a.charCodeAt(u + 1) & 255) << 8;
    case 1:
      (r ^= a.charCodeAt(u) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var hb = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  pb = /[A-Z]|^ms/g,
  mb = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Zg = function (r) {
    return r.charCodeAt(1) === 45;
  },
  Zm = function (r) {
    return r != null && typeof r != "boolean";
  },
  Qc = Xg(function (a) {
    return Zg(a) ? a : a.replace(pb, "-$&").toLowerCase();
  }),
  Pm = function (r, i) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof i == "string")
          return i.replace(mb, function (u, s, f) {
            return (Rn = { name: s, styles: f, next: Rn }), s;
          });
    }
    return hb[r] !== 1 && !Zg(r) && typeof i == "number" && i !== 0
      ? i + "px"
      : i;
  };
function vi(a, r, i) {
  if (i == null) return "";
  var u = i;
  if (u.__emotion_styles !== void 0) return u;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var s = i;
      if (s.anim === 1)
        return (Rn = { name: s.name, styles: s.styles, next: Rn }), s.name;
      var f = i;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            (Rn = { name: d.name, styles: d.styles, next: Rn }), (d = d.next);
        var p = f.styles + ";";
        return p;
      }
      return gb(a, r, i);
    }
    case "function": {
      if (a !== void 0) {
        var g = Rn,
          m = i(a);
        return (Rn = g), vi(a, r, m);
      }
      break;
    }
  }
  var b = i;
  if (r == null) return b;
  var S = r[b];
  return S !== void 0 ? S : b;
}
function gb(a, r, i) {
  var u = "";
  if (Array.isArray(i))
    for (var s = 0; s < i.length; s++) u += vi(a, r, i[s]) + ";";
  else
    for (var f in i) {
      var d = i[f];
      if (typeof d != "object") {
        var p = d;
        r != null && r[p] !== void 0
          ? (u += f + "{" + r[p] + "}")
          : Zm(p) && (u += Qc(f) + ":" + Pm(f, p) + ";");
      } else if (
        Array.isArray(d) &&
        typeof d[0] == "string" &&
        (r == null || r[d[0]] === void 0)
      )
        for (var g = 0; g < d.length; g++)
          Zm(d[g]) && (u += Qc(f) + ":" + Pm(f, d[g]) + ";");
      else {
        var m = vi(a, r, d);
        switch (f) {
          case "animation":
          case "animationName": {
            u += Qc(f) + ":" + m + ";";
            break;
          }
          default:
            u += f + "{" + m + "}";
        }
      }
    }
  return u;
}
var Wm = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Rn;
function Ci(a, r, i) {
  if (
    a.length === 1 &&
    typeof a[0] == "object" &&
    a[0] !== null &&
    a[0].styles !== void 0
  )
    return a[0];
  var u = !0,
    s = "";
  Rn = void 0;
  var f = a[0];
  if (f == null || f.raw === void 0) (u = !1), (s += vi(i, r, f));
  else {
    var d = f;
    s += d[0];
  }
  for (var p = 1; p < a.length; p++)
    if (((s += vi(i, r, a[p])), u)) {
      var g = f;
      s += g[p];
    }
  Wm.lastIndex = 0;
  for (var m = "", b; (b = Wm.exec(s)) !== null; ) m += "-" + b[1];
  var S = db(s) + m;
  return { name: S, styles: s, next: Rn };
}
var yb = function (r) {
    return r();
  },
  Pg = ef.useInsertionEffect ? ef.useInsertionEffect : !1,
  Wg = Pg || yb,
  Jm = Pg || A.useLayoutEffect,
  Jg = A.createContext(typeof HTMLElement < "u" ? ob({ key: "css" }) : null);
Jg.Provider;
var Af = function (r) {
    return A.forwardRef(function (i, u) {
      var s = A.useContext(Jg);
      return r(i, s, u);
    });
  },
  Ti = A.createContext({}),
  Rf = {}.hasOwnProperty,
  af = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  vb = function (r, i) {
    var u = {};
    for (var s in i) Rf.call(i, s) && (u[s] = i[s]);
    return (u[af] = r), u;
  },
  bb = function (r) {
    var i = r.cache,
      u = r.serialized,
      s = r.isStringTag;
    return (
      Cf(i, u, s),
      Wg(function () {
        return Tf(i, u, s);
      }),
      null
    );
  },
  Sb = Af(function (a, r, i) {
    var u = a.css;
    typeof u == "string" && r.registered[u] !== void 0 && (u = r.registered[u]);
    var s = a[af],
      f = [u],
      d = "";
    typeof a.className == "string"
      ? (d = Kg(r.registered, f, a.className))
      : a.className != null && (d = a.className + " ");
    var p = Ci(f, void 0, A.useContext(Ti));
    d += r.key + "-" + p.name;
    var g = {};
    for (var m in a) Rf.call(a, m) && m !== "css" && m !== af && (g[m] = a[m]);
    return (
      (g.className = d),
      i && (g.ref = i),
      A.createElement(
        A.Fragment,
        null,
        A.createElement(bb, {
          cache: r,
          serialized: p,
          isStringTag: typeof s == "string",
        }),
        A.createElement(s, g),
      )
    );
  }),
  xb = Sb,
  Eb = function (r, i) {
    var u = arguments;
    if (i == null || !Rf.call(i, "css"))
      return A.createElement.apply(void 0, u);
    var s = u.length,
      f = new Array(s);
    (f[0] = xb), (f[1] = vb(r, i));
    for (var d = 2; d < s; d++) f[d] = u[d];
    return A.createElement.apply(null, f);
  };
(function (a) {
  var r;
  r || (r = a.JSX || (a.JSX = {}));
})(Eb);
var Cb = Af(function (a, r) {
  var i = a.styles,
    u = Ci([i], void 0, A.useContext(Ti)),
    s = A.useRef();
  return (
    Jm(
      function () {
        var f = r.key + "-global",
          d = new r.sheet.constructor({
            key: f,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          p = !1,
          g = document.querySelector(
            'style[data-emotion="' + f + " " + u.name + '"]',
          );
        return (
          r.sheet.tags.length && (d.before = r.sheet.tags[0]),
          g !== null &&
            ((p = !0), g.setAttribute("data-emotion", f), d.hydrate([g])),
          (s.current = [d, p]),
          function () {
            d.flush();
          }
        );
      },
      [r],
    ),
    Jm(
      function () {
        var f = s.current,
          d = f[0],
          p = f[1];
        if (p) {
          f[1] = !1;
          return;
        }
        if ((u.next !== void 0 && Tf(r, u.next, !0), d.tags.length)) {
          var g = d.tags[d.tags.length - 1].nextElementSibling;
          (d.before = g), d.flush();
        }
        r.insert("", u, d, !1);
      },
      [r, u.name],
    ),
    null
  );
});
function Of() {
  for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
    r[i] = arguments[i];
  return Ci(r);
}
function Ai() {
  var a = Of.apply(void 0, arguments),
    r = "animation-" + a.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + a.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var Tb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Ab = Xg(function (a) {
    return (
      Tb.test(a) ||
      (a.charCodeAt(0) === 111 &&
        a.charCodeAt(1) === 110 &&
        a.charCodeAt(2) < 91)
    );
  }),
  Rb = Ab,
  Ob = function (r) {
    return r !== "theme";
  },
  Fm = function (r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? Rb : Ob;
  },
  Im = function (r, i, u) {
    var s;
    if (i) {
      var f = i.shouldForwardProp;
      s =
        r.__emotion_forwardProp && f
          ? function (d) {
              return r.__emotion_forwardProp(d) && f(d);
            }
          : f;
    }
    return typeof s != "function" && u && (s = r.__emotion_forwardProp), s;
  },
  Mb = function (r) {
    var i = r.cache,
      u = r.serialized,
      s = r.isStringTag;
    return (
      Cf(i, u, s),
      Wg(function () {
        return Tf(i, u, s);
      }),
      null
    );
  },
  wb = function a(r, i) {
    var u = r.__emotion_real === r,
      s = (u && r.__emotion_base) || r,
      f,
      d;
    i !== void 0 && ((f = i.label), (d = i.target));
    var p = Im(r, i, u),
      g = p || Fm(s),
      m = !g("as");
    return function () {
      var b = arguments,
        S =
          u && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (f !== void 0 && S.push("label:" + f + ";"),
        b[0] == null || b[0].raw === void 0)
      )
        S.push.apply(S, b);
      else {
        var x = b[0];
        S.push(x[0]);
        for (var R = b.length, T = 1; T < R; T++) S.push(b[T], x[T]);
      }
      var E = Af(function (_, z, H) {
        var k = (m && _.as) || s,
          U = "",
          M = [],
          G = _;
        if (_.theme == null) {
          G = {};
          for (var P in _) G[P] = _[P];
          G.theme = A.useContext(Ti);
        }
        typeof _.className == "string"
          ? (U = Kg(z.registered, M, _.className))
          : _.className != null && (U = _.className + " ");
        var ee = Ci(S.concat(M), z.registered, G);
        (U += z.key + "-" + ee.name), d !== void 0 && (U += " " + d);
        var Z = m && p === void 0 ? Fm(k) : g,
          v = {};
        for (var Q in _) (m && Q === "as") || (Z(Q) && (v[Q] = _[Q]));
        return (
          (v.className = U),
          H && (v.ref = H),
          A.createElement(
            A.Fragment,
            null,
            A.createElement(Mb, {
              cache: z,
              serialized: ee,
              isStringTag: typeof k == "string",
            }),
            A.createElement(k, v),
          )
        );
      });
      return (
        (E.displayName =
          f !== void 0
            ? f
            : "Styled(" +
              (typeof s == "string"
                ? s
                : s.displayName || s.name || "Component") +
              ")"),
        (E.defaultProps = r.defaultProps),
        (E.__emotion_real = E),
        (E.__emotion_base = s),
        (E.__emotion_styles = S),
        (E.__emotion_forwardProp = p),
        Object.defineProperty(E, "toString", {
          value: function () {
            return "." + d;
          },
        }),
        (E.withComponent = function (_, z) {
          var H = a(_, uu({}, i, z, { shouldForwardProp: Im(E, z, !0) }));
          return H.apply(void 0, S);
        }),
        E
      );
    };
  },
  Db = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  lf = wb.bind(null);
Db.forEach(function (a) {
  lf[a] = lf(a);
});
function zb(a) {
  return a == null || Object.keys(a).length === 0;
}
function Fg(a) {
  const { styles: r, defaultTheme: i = {} } = a,
    u = typeof r == "function" ? (s) => r(zb(s) ? i : s) : r;
  return B.jsx(Cb, { styles: u });
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Ig(a, r) {
  return lf(a, r);
}
function _b(a, r) {
  Array.isArray(a.__emotion_styles) &&
    (a.__emotion_styles = r(a.__emotion_styles));
}
const eg = [];
function tg(a) {
  return (eg[0] = a), Ci(eg);
}
var Kc = { exports: {} },
  Ue = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng;
function Nb() {
  if (ng) return Ue;
  ng = 1;
  var a = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.suspense_list"),
    b = Symbol.for("react.memo"),
    S = Symbol.for("react.lazy"),
    x = Symbol.for("react.offscreen"),
    R = Symbol.for("react.client.reference");
  function T(E) {
    if (typeof E == "object" && E !== null) {
      var _ = E.$$typeof;
      switch (_) {
        case a:
          switch (((E = E.type), E)) {
            case i:
            case s:
            case u:
            case g:
            case m:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case d:
                case p:
                case S:
                case b:
                  return E;
                case f:
                  return E;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  return (
    (Ue.ContextConsumer = f),
    (Ue.ContextProvider = d),
    (Ue.Element = a),
    (Ue.ForwardRef = p),
    (Ue.Fragment = i),
    (Ue.Lazy = S),
    (Ue.Memo = b),
    (Ue.Portal = r),
    (Ue.Profiler = s),
    (Ue.StrictMode = u),
    (Ue.Suspense = g),
    (Ue.SuspenseList = m),
    (Ue.isContextConsumer = function (E) {
      return T(E) === f;
    }),
    (Ue.isContextProvider = function (E) {
      return T(E) === d;
    }),
    (Ue.isElement = function (E) {
      return typeof E == "object" && E !== null && E.$$typeof === a;
    }),
    (Ue.isForwardRef = function (E) {
      return T(E) === p;
    }),
    (Ue.isFragment = function (E) {
      return T(E) === i;
    }),
    (Ue.isLazy = function (E) {
      return T(E) === S;
    }),
    (Ue.isMemo = function (E) {
      return T(E) === b;
    }),
    (Ue.isPortal = function (E) {
      return T(E) === r;
    }),
    (Ue.isProfiler = function (E) {
      return T(E) === s;
    }),
    (Ue.isStrictMode = function (E) {
      return T(E) === u;
    }),
    (Ue.isSuspense = function (E) {
      return T(E) === g;
    }),
    (Ue.isSuspenseList = function (E) {
      return T(E) === m;
    }),
    (Ue.isValidElementType = function (E) {
      return (
        typeof E == "string" ||
        typeof E == "function" ||
        E === i ||
        E === s ||
        E === u ||
        E === g ||
        E === m ||
        E === x ||
        (typeof E == "object" &&
          E !== null &&
          (E.$$typeof === S ||
            E.$$typeof === b ||
            E.$$typeof === d ||
            E.$$typeof === f ||
            E.$$typeof === p ||
            E.$$typeof === R ||
            E.getModuleId !== void 0))
      );
    }),
    (Ue.typeOf = T),
    Ue
  );
}
var ag;
function Bb() {
  return ag || ((ag = 1), (Kc.exports = Nb())), Kc.exports;
}
var ey = Bb();
function On(a) {
  if (typeof a != "object" || a === null) return !1;
  const r = Object.getPrototypeOf(a);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in a) &&
    !(Symbol.iterator in a)
  );
}
function ty(a) {
  if (A.isValidElement(a) || ey.isValidElementType(a) || !On(a)) return a;
  const r = {};
  return (
    Object.keys(a).forEach((i) => {
      r[i] = ty(a[i]);
    }),
    r
  );
}
function Qt(a, r, i = { clone: !0 }) {
  const u = i.clone ? { ...a } : a;
  return (
    On(a) &&
      On(r) &&
      Object.keys(r).forEach((s) => {
        A.isValidElement(r[s]) || ey.isValidElementType(r[s])
          ? (u[s] = r[s])
          : On(r[s]) && Object.prototype.hasOwnProperty.call(a, s) && On(a[s])
            ? (u[s] = Qt(a[s], r[s], i))
            : i.clone
              ? (u[s] = On(r[s]) ? ty(r[s]) : r[s])
              : (u[s] = r[s]);
      }),
    u
  );
}
const Ub = (a) => {
  const r = Object.keys(a).map((i) => ({ key: i, val: a[i] })) || [];
  return (
    r.sort((i, u) => i.val - u.val),
    r.reduce((i, u) => ({ ...i, [u.key]: u.val }), {})
  );
};
function jb(a) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: i = "px",
      step: u = 5,
      ...s
    } = a,
    f = Ub(r),
    d = Object.keys(f);
  function p(x) {
    return `@media (min-width:${typeof r[x] == "number" ? r[x] : x}${i})`;
  }
  function g(x) {
    return `@media (max-width:${(typeof r[x] == "number" ? r[x] : x) - u / 100}${i})`;
  }
  function m(x, R) {
    const T = d.indexOf(R);
    return `@media (min-width:${typeof r[x] == "number" ? r[x] : x}${i}) and (max-width:${(T !== -1 && typeof r[d[T]] == "number" ? r[d[T]] : R) - u / 100}${i})`;
  }
  function b(x) {
    return d.indexOf(x) + 1 < d.length ? m(x, d[d.indexOf(x) + 1]) : p(x);
  }
  function S(x) {
    const R = d.indexOf(x);
    return R === 0
      ? p(d[1])
      : R === d.length - 1
        ? g(d[R])
        : m(x, d[d.indexOf(x) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: p,
    down: g,
    between: m,
    only: b,
    not: S,
    unit: i,
    ...s,
  };
}
function kb(a, r) {
  if (!a.containerQueries) return r;
  const i = Object.keys(r)
    .filter((u) => u.startsWith("@container"))
    .sort((u, s) => {
      var d, p;
      const f = /min-width:\s*([0-9.]+)/;
      return (
        +(((d = u.match(f)) == null ? void 0 : d[1]) || 0) -
        +(((p = s.match(f)) == null ? void 0 : p[1]) || 0)
      );
    });
  return i.length
    ? i.reduce(
        (u, s) => {
          const f = r[s];
          return delete u[s], (u[s] = f), u;
        },
        { ...r },
      )
    : r;
}
function $b(a, r) {
  return (
    r === "@" ||
    (r.startsWith("@") &&
      (a.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/)))
  );
}
function Hb(a, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i) return null;
  const [, u, s] = i,
    f = Number.isNaN(+u) ? u || 0 : +u;
  return a.containerQueries(s).up(f);
}
function Lb(a) {
  const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function i(f, d) {
    (f.up = (...p) => r(a.breakpoints.up(...p), d)),
      (f.down = (...p) => r(a.breakpoints.down(...p), d)),
      (f.between = (...p) => r(a.breakpoints.between(...p), d)),
      (f.only = (...p) => r(a.breakpoints.only(...p), d)),
      (f.not = (...p) => {
        const g = r(a.breakpoints.not(...p), d);
        return g.includes("not all and")
          ? g
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : g;
      });
  }
  const u = {},
    s = (f) => (i(u, f), u);
  return i(s), { ...a, containerQueries: s };
}
const qb = { borderRadius: 4 };
function mi(a, r) {
  return r ? Qt(a, r, { clone: !1 }) : a;
}
const Su = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  lg = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (a) => `@media (min-width:${Su[a]}px)`,
  },
  Gb = {
    containerQueries: (a) => ({
      up: (r) => {
        let i = typeof r == "number" ? r : Su[r] || r;
        return (
          typeof i == "number" && (i = `${i}px`),
          a ? `@container ${a} (min-width:${i})` : `@container (min-width:${i})`
        );
      },
    }),
  };
function aa(a, r, i) {
  const u = a.theme || {};
  if (Array.isArray(r)) {
    const f = u.breakpoints || lg;
    return r.reduce((d, p, g) => ((d[f.up(f.keys[g])] = i(r[g])), d), {});
  }
  if (typeof r == "object") {
    const f = u.breakpoints || lg;
    return Object.keys(r).reduce((d, p) => {
      if ($b(f.keys, p)) {
        const g = Hb(u.containerQueries ? u : Gb, p);
        g && (d[g] = i(r[p], p));
      } else if (Object.keys(f.values || Su).includes(p)) {
        const g = f.up(p);
        d[g] = i(r[p], p);
      } else {
        const g = p;
        d[g] = r[g];
      }
      return d;
    }, {});
  }
  return i(r);
}
function Vb(a = {}) {
  var i;
  return (
    ((i = a.keys) == null
      ? void 0
      : i.reduce((u, s) => {
          const f = a.up(s);
          return (u[f] = {}), u;
        }, {})) || {}
  );
}
function Yb(a, r) {
  return a.reduce((i, u) => {
    const s = i[u];
    return (!s || Object.keys(s).length === 0) && delete i[u], i;
  }, r);
}
function je(a) {
  if (typeof a != "string") throw new Error(cl(7));
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function xu(a, r, i = !0) {
  if (!r || typeof r != "string") return null;
  if (a && a.vars && i) {
    const u = `vars.${r}`
      .split(".")
      .reduce((s, f) => (s && s[f] ? s[f] : null), a);
    if (u != null) return u;
  }
  return r.split(".").reduce((u, s) => (u && u[s] != null ? u[s] : null), a);
}
function cu(a, r, i, u = i) {
  let s;
  return (
    typeof a == "function"
      ? (s = a(i))
      : Array.isArray(a)
        ? (s = a[i] || u)
        : (s = xu(a, i) || u),
    r && (s = r(s, u, a)),
    s
  );
}
function Ie(a) {
  const { prop: r, cssProperty: i = a.prop, themeKey: u, transform: s } = a,
    f = (d) => {
      if (d[r] == null) return null;
      const p = d[r],
        g = d.theme,
        m = xu(g, u) || {};
      return aa(d, p, (S) => {
        let x = cu(m, s, S);
        return (
          S === x &&
            typeof S == "string" &&
            (x = cu(m, s, `${r}${S === "default" ? "" : je(S)}`, S)),
          i === !1 ? x : { [i]: x }
        );
      });
    };
  return (f.propTypes = {}), (f.filterProps = [r]), f;
}
function Xb(a) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = a(i)), r[i]);
}
const Qb = { m: "margin", p: "padding" },
  Kb = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  rg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Zb = Xb((a) => {
    if (a.length > 2)
      if (rg[a]) a = rg[a];
      else return [a];
    const [r, i] = a.split(""),
      u = Qb[r],
      s = Kb[i] || "";
    return Array.isArray(s) ? s.map((f) => u + f) : [u + s];
  }),
  Mf = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  wf = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Mf, ...wf];
function Ri(a, r, i, u) {
  const s = xu(a, r, !0) ?? i;
  return typeof s == "number" || typeof s == "string"
    ? (f) =>
        typeof f == "string"
          ? f
          : typeof s == "string"
            ? `calc(${f} * ${s})`
            : s * f
    : Array.isArray(s)
      ? (f) => {
          if (typeof f == "string") return f;
          const d = Math.abs(f),
            p = s[d];
          return f >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
        }
      : typeof s == "function"
        ? s
        : () => {};
}
function Df(a) {
  return Ri(a, "spacing", 8);
}
function Oi(a, r) {
  return typeof r == "string" || r == null ? r : a(r);
}
function Pb(a, r) {
  return (i) => a.reduce((u, s) => ((u[s] = Oi(r, i)), u), {});
}
function Wb(a, r, i, u) {
  if (!r.includes(i)) return null;
  const s = Zb(i),
    f = Pb(s, u),
    d = a[i];
  return aa(a, d, f);
}
function ny(a, r) {
  const i = Df(a.theme);
  return Object.keys(a)
    .map((u) => Wb(a, r, u, i))
    .reduce(mi, {});
}
function Pe(a) {
  return ny(a, Mf);
}
Pe.propTypes = {};
Pe.filterProps = Mf;
function We(a) {
  return ny(a, wf);
}
We.propTypes = {};
We.filterProps = wf;
function ay(a = 8, r = Df({ spacing: a })) {
  if (a.mui) return a;
  const i = (...u) =>
    (u.length === 0 ? [1] : u)
      .map((f) => {
        const d = r(f);
        return typeof d == "number" ? `${d}px` : d;
      })
      .join(" ");
  return (i.mui = !0), i;
}
function Eu(...a) {
  const r = a.reduce(
      (u, s) => (
        s.filterProps.forEach((f) => {
          u[f] = s;
        }),
        u
      ),
      {},
    ),
    i = (u) => Object.keys(u).reduce((s, f) => (r[f] ? mi(s, r[f](u)) : s), {});
  return (
    (i.propTypes = {}),
    (i.filterProps = a.reduce((u, s) => u.concat(s.filterProps), [])),
    i
  );
}
function un(a) {
  return typeof a != "number" ? a : `${a}px solid`;
}
function sn(a, r) {
  return Ie({ prop: a, themeKey: "borders", transform: r });
}
const Jb = sn("border", un),
  Fb = sn("borderTop", un),
  Ib = sn("borderRight", un),
  eS = sn("borderBottom", un),
  tS = sn("borderLeft", un),
  nS = sn("borderColor"),
  aS = sn("borderTopColor"),
  lS = sn("borderRightColor"),
  rS = sn("borderBottomColor"),
  iS = sn("borderLeftColor"),
  oS = sn("outline", un),
  uS = sn("outlineColor"),
  Cu = (a) => {
    if (a.borderRadius !== void 0 && a.borderRadius !== null) {
      const r = Ri(a.theme, "shape.borderRadius", 4),
        i = (u) => ({ borderRadius: Oi(r, u) });
      return aa(a, a.borderRadius, i);
    }
    return null;
  };
Cu.propTypes = {};
Cu.filterProps = ["borderRadius"];
Eu(Jb, Fb, Ib, eS, tS, nS, aS, lS, rS, iS, Cu, oS, uS);
const Tu = (a) => {
  if (a.gap !== void 0 && a.gap !== null) {
    const r = Ri(a.theme, "spacing", 8),
      i = (u) => ({ gap: Oi(r, u) });
    return aa(a, a.gap, i);
  }
  return null;
};
Tu.propTypes = {};
Tu.filterProps = ["gap"];
const Au = (a) => {
  if (a.columnGap !== void 0 && a.columnGap !== null) {
    const r = Ri(a.theme, "spacing", 8),
      i = (u) => ({ columnGap: Oi(r, u) });
    return aa(a, a.columnGap, i);
  }
  return null;
};
Au.propTypes = {};
Au.filterProps = ["columnGap"];
const Ru = (a) => {
  if (a.rowGap !== void 0 && a.rowGap !== null) {
    const r = Ri(a.theme, "spacing", 8),
      i = (u) => ({ rowGap: Oi(r, u) });
    return aa(a, a.rowGap, i);
  }
  return null;
};
Ru.propTypes = {};
Ru.filterProps = ["rowGap"];
const sS = Ie({ prop: "gridColumn" }),
  cS = Ie({ prop: "gridRow" }),
  fS = Ie({ prop: "gridAutoFlow" }),
  dS = Ie({ prop: "gridAutoColumns" }),
  hS = Ie({ prop: "gridAutoRows" }),
  pS = Ie({ prop: "gridTemplateColumns" }),
  mS = Ie({ prop: "gridTemplateRows" }),
  gS = Ie({ prop: "gridTemplateAreas" }),
  yS = Ie({ prop: "gridArea" });
Eu(Tu, Au, Ru, sS, cS, fS, dS, hS, pS, mS, gS, yS);
function tr(a, r) {
  return r === "grey" ? r : a;
}
const vS = Ie({ prop: "color", themeKey: "palette", transform: tr }),
  bS = Ie({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: tr,
  }),
  SS = Ie({ prop: "backgroundColor", themeKey: "palette", transform: tr });
Eu(vS, bS, SS);
function Yt(a) {
  return a <= 1 && a !== 0 ? `${a * 100}%` : a;
}
const xS = Ie({ prop: "width", transform: Yt }),
  zf = (a) => {
    if (a.maxWidth !== void 0 && a.maxWidth !== null) {
      const r = (i) => {
        var s, f, d, p, g;
        const u =
          ((d =
            (f = (s = a.theme) == null ? void 0 : s.breakpoints) == null
              ? void 0
              : f.values) == null
            ? void 0
            : d[i]) || Su[i];
        return u
          ? ((g = (p = a.theme) == null ? void 0 : p.breakpoints) == null
              ? void 0
              : g.unit) !== "px"
            ? { maxWidth: `${u}${a.theme.breakpoints.unit}` }
            : { maxWidth: u }
          : { maxWidth: Yt(i) };
      };
      return aa(a, a.maxWidth, r);
    }
    return null;
  };
zf.filterProps = ["maxWidth"];
const ES = Ie({ prop: "minWidth", transform: Yt }),
  CS = Ie({ prop: "height", transform: Yt }),
  TS = Ie({ prop: "maxHeight", transform: Yt }),
  AS = Ie({ prop: "minHeight", transform: Yt });
Ie({ prop: "size", cssProperty: "width", transform: Yt });
Ie({ prop: "size", cssProperty: "height", transform: Yt });
const RS = Ie({ prop: "boxSizing" });
Eu(xS, zf, ES, CS, TS, AS, RS);
const Mi = {
  border: { themeKey: "borders", transform: un },
  borderTop: { themeKey: "borders", transform: un },
  borderRight: { themeKey: "borders", transform: un },
  borderBottom: { themeKey: "borders", transform: un },
  borderLeft: { themeKey: "borders", transform: un },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: un },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Cu },
  color: { themeKey: "palette", transform: tr },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: tr,
  },
  backgroundColor: { themeKey: "palette", transform: tr },
  p: { style: We },
  pt: { style: We },
  pr: { style: We },
  pb: { style: We },
  pl: { style: We },
  px: { style: We },
  py: { style: We },
  padding: { style: We },
  paddingTop: { style: We },
  paddingRight: { style: We },
  paddingBottom: { style: We },
  paddingLeft: { style: We },
  paddingX: { style: We },
  paddingY: { style: We },
  paddingInline: { style: We },
  paddingInlineStart: { style: We },
  paddingInlineEnd: { style: We },
  paddingBlock: { style: We },
  paddingBlockStart: { style: We },
  paddingBlockEnd: { style: We },
  m: { style: Pe },
  mt: { style: Pe },
  mr: { style: Pe },
  mb: { style: Pe },
  ml: { style: Pe },
  mx: { style: Pe },
  my: { style: Pe },
  margin: { style: Pe },
  marginTop: { style: Pe },
  marginRight: { style: Pe },
  marginBottom: { style: Pe },
  marginLeft: { style: Pe },
  marginX: { style: Pe },
  marginY: { style: Pe },
  marginInline: { style: Pe },
  marginInlineStart: { style: Pe },
  marginInlineEnd: { style: Pe },
  marginBlock: { style: Pe },
  marginBlockStart: { style: Pe },
  marginBlockEnd: { style: Pe },
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({ "@media print": { display: a } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Tu },
  rowGap: { style: Ru },
  columnGap: { style: Au },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Yt },
  maxWidth: { style: zf },
  minWidth: { transform: Yt },
  height: { transform: Yt },
  maxHeight: { transform: Yt },
  minHeight: { transform: Yt },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function OS(...a) {
  const r = a.reduce((u, s) => u.concat(Object.keys(s)), []),
    i = new Set(r);
  return a.every((u) => i.size === Object.keys(u).length);
}
function MS(a, r) {
  return typeof a == "function" ? a(r) : a;
}
function wS() {
  function a(i, u, s, f) {
    const d = { [i]: u, theme: s },
      p = f[i];
    if (!p) return { [i]: u };
    const { cssProperty: g = i, themeKey: m, transform: b, style: S } = p;
    if (u == null) return null;
    if (m === "typography" && u === "inherit") return { [i]: u };
    const x = xu(s, m) || {};
    return S
      ? S(d)
      : aa(d, u, (T) => {
          let E = cu(x, b, T);
          return (
            T === E &&
              typeof T == "string" &&
              (E = cu(x, b, `${i}${T === "default" ? "" : je(T)}`, T)),
            g === !1 ? E : { [g]: E }
          );
        });
  }
  function r(i) {
    const { sx: u, theme: s = {} } = i || {};
    if (!u) return null;
    const f = s.unstable_sxConfig ?? Mi;
    function d(p) {
      let g = p;
      if (typeof p == "function") g = p(s);
      else if (typeof p != "object") return p;
      if (!g) return null;
      const m = Vb(s.breakpoints),
        b = Object.keys(m);
      let S = m;
      return (
        Object.keys(g).forEach((x) => {
          const R = MS(g[x], s);
          if (R != null)
            if (typeof R == "object")
              if (f[x]) S = mi(S, a(x, R, s, f));
              else {
                const T = aa({ theme: s }, R, (E) => ({ [x]: E }));
                OS(T, R) ? (S[x] = r({ sx: R, theme: s })) : (S = mi(S, T));
              }
            else S = mi(S, a(x, R, s, f));
        }),
        kb(s, Yb(b, S))
      );
    }
    return Array.isArray(u) ? u.map(d) : d(u);
  }
  return r;
}
const Na = wS();
Na.filterProps = ["sx"];
function DS(a, r) {
  var u;
  const i = this;
  if (i.vars) {
    if (
      !((u = i.colorSchemes) != null && u[a]) ||
      typeof i.getColorSchemeSelector != "function"
    )
      return {};
    let s = i.getColorSchemeSelector(a);
    return s === "&"
      ? r
      : ((s.includes("data-") || s.includes(".")) &&
          (s = `*:where(${s.replace(/\s*&$/, "")}) &`),
        { [s]: r });
  }
  return i.palette.mode === a ? r : {};
}
function wi(a = {}, ...r) {
  const {
      breakpoints: i = {},
      palette: u = {},
      spacing: s,
      shape: f = {},
      ...d
    } = a,
    p = jb(i),
    g = ay(s);
  let m = Qt(
    {
      breakpoints: p,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...u },
      spacing: g,
      shape: { ...qb, ...f },
    },
    d,
  );
  return (
    (m = Lb(m)),
    (m.applyStyles = DS),
    (m = r.reduce((b, S) => Qt(b, S), m)),
    (m.unstable_sxConfig = {
      ...Mi,
      ...(d == null ? void 0 : d.unstable_sxConfig),
    }),
    (m.unstable_sx = function (S) {
      return Na({ sx: S, theme: this });
    }),
    m
  );
}
function zS(a) {
  return Object.keys(a).length === 0;
}
function ly(a = null) {
  const r = A.useContext(Ti);
  return !r || zS(r) ? a : r;
}
const _S = wi();
function Di(a = _S) {
  return ly(a);
}
function NS({ styles: a, themeId: r, defaultTheme: i = {} }) {
  const u = Di(i),
    s = typeof a == "function" ? a((r && u[r]) || u) : a;
  return B.jsx(Fg, { styles: s });
}
const BS = (a) => {
  var u;
  const r = { systemProps: {}, otherProps: {} },
    i =
      ((u = a == null ? void 0 : a.theme) == null
        ? void 0
        : u.unstable_sxConfig) ?? Mi;
  return (
    Object.keys(a).forEach((s) => {
      i[s] ? (r.systemProps[s] = a[s]) : (r.otherProps[s] = a[s]);
    }),
    r
  );
};
function _f(a) {
  const { sx: r, ...i } = a,
    { systemProps: u, otherProps: s } = BS(i);
  let f;
  return (
    Array.isArray(r)
      ? (f = [u, ...r])
      : typeof r == "function"
        ? (f = (...d) => {
            const p = r(...d);
            return On(p) ? { ...u, ...p } : u;
          })
        : (f = { ...u, ...r }),
    { ...s, sx: f }
  );
}
const ig = (a) => a,
  US = () => {
    let a = ig;
    return {
      configure(r) {
        a = r;
      },
      generate(r) {
        return a(r);
      },
      reset() {
        a = ig;
      },
    };
  },
  ry = US();
function iy(a) {
  var r,
    i,
    u = "";
  if (typeof a == "string" || typeof a == "number") u += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var s = a.length;
      for (r = 0; r < s; r++)
        a[r] && (i = iy(a[r])) && (u && (u += " "), (u += i));
    } else for (i in a) a[i] && (u && (u += " "), (u += i));
  return u;
}
function ze() {
  for (var a, r, i = 0, u = "", s = arguments.length; i < s; i++)
    (a = arguments[i]) && (r = iy(a)) && (u && (u += " "), (u += r));
  return u;
}
function jS(a = {}) {
  const {
      themeId: r,
      defaultTheme: i,
      defaultClassName: u = "MuiBox-root",
      generateClassName: s,
    } = a,
    f = Ig("div", {
      shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as",
    })(Na);
  return A.forwardRef(function (g, m) {
    const b = Di(i),
      { className: S, component: x = "div", ...R } = _f(g);
    return B.jsx(f, {
      as: x,
      ref: m,
      className: ze(S, s ? s(u) : u),
      theme: (r && b[r]) || b,
      ...R,
    });
  });
}
const kS = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function Ct(a, r, i = "Mui") {
  const u = kS[r];
  return u ? `${i}-${u}` : `${ry.generate(a)}-${r}`;
}
function Mt(a, r, i = "Mui") {
  const u = {};
  return (
    r.forEach((s) => {
      u[s] = Ct(a, s, i);
    }),
    u
  );
}
function oy(a) {
  const { variants: r, ...i } = a,
    u = { variants: r, style: tg(i), isProcessed: !0 };
  return (
    u.style === i ||
      (r &&
        r.forEach((s) => {
          typeof s.style != "function" && (s.style = tg(s.style));
        })),
    u
  );
}
const $S = wi();
function Zc(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
function HS(a) {
  return a ? (r, i) => i[a] : null;
}
function LS(a, r, i) {
  a.theme = GS(a.theme) ? i : a.theme[r] || a.theme;
}
function au(a, r) {
  const i = typeof r == "function" ? r(a) : r;
  if (Array.isArray(i)) return i.flatMap((u) => au(a, u));
  if (Array.isArray(i == null ? void 0 : i.variants)) {
    let u;
    if (i.isProcessed) u = i.style;
    else {
      const { variants: s, ...f } = i;
      u = f;
    }
    return uy(a, i.variants, [u]);
  }
  return i != null && i.isProcessed ? i.style : i;
}
function uy(a, r, i = []) {
  var s;
  let u;
  e: for (let f = 0; f < r.length; f += 1) {
    const d = r[f];
    if (typeof d.props == "function") {
      if (
        (u ?? (u = { ...a, ...a.ownerState, ownerState: a.ownerState }),
        !d.props(u))
      )
        continue;
    } else
      for (const p in d.props)
        if (
          a[p] !== d.props[p] &&
          ((s = a.ownerState) == null ? void 0 : s[p]) !== d.props[p]
        )
          continue e;
    typeof d.style == "function"
      ? (u ?? (u = { ...a, ...a.ownerState, ownerState: a.ownerState }),
        i.push(d.style(u)))
      : i.push(d.style);
  }
  return i;
}
function sy(a = {}) {
  const {
    themeId: r,
    defaultTheme: i = $S,
    rootShouldForwardProp: u = Zc,
    slotShouldForwardProp: s = Zc,
  } = a;
  function f(p) {
    LS(p, r, i);
  }
  return (p, g = {}) => {
    _b(p, (M) => M.filter((G) => G !== Na));
    const {
        name: m,
        slot: b,
        skipVariantsResolver: S,
        skipSx: x,
        overridesResolver: R = HS(YS(b)),
        ...T
      } = g,
      E = S !== void 0 ? S : (b && b !== "Root" && b !== "root") || !1,
      _ = x || !1;
    let z = Zc;
    b === "Root" || b === "root"
      ? (z = u)
      : b
        ? (z = s)
        : VS(p) && (z = void 0);
    const H = Ig(p, { shouldForwardProp: z, label: qS(), ...T }),
      k = (M) => {
        if (typeof M == "function" && M.__emotion_real !== M)
          return function (P) {
            return au(P, M);
          };
        if (On(M)) {
          const G = oy(M);
          return G.variants
            ? function (ee) {
                return au(ee, G);
              }
            : G.style;
        }
        return M;
      },
      U = (...M) => {
        const G = [],
          P = M.map(k),
          ee = [];
        if (
          (G.push(f),
          m &&
            R &&
            ee.push(function (F) {
              var W, ne;
              const ce =
                (ne = (W = F.theme.components) == null ? void 0 : W[m]) == null
                  ? void 0
                  : ne.styleOverrides;
              if (!ce) return null;
              const de = {};
              for (const ae in ce) de[ae] = au(F, ce[ae]);
              return R(F, de);
            }),
          m &&
            !E &&
            ee.push(function (F) {
              var de, W;
              const te = F.theme,
                ce =
                  (W =
                    (de = te == null ? void 0 : te.components) == null
                      ? void 0
                      : de[m]) == null
                    ? void 0
                    : W.variants;
              return ce ? uy(F, ce) : null;
            }),
          _ || ee.push(Na),
          Array.isArray(P[0]))
        ) {
          const Q = P.shift(),
            F = new Array(G.length).fill(""),
            te = new Array(ee.length).fill("");
          let ce;
          (ce = [...F, ...Q, ...te]),
            (ce.raw = [...F, ...Q.raw, ...te]),
            G.unshift(ce);
        }
        const Z = [...G, ...P, ...ee],
          v = H(...Z);
        return p.muiName && (v.muiName = p.muiName), v;
      };
    return H.withConfig && (U.withConfig = H.withConfig), U;
  };
}
function qS(a, r) {
  return void 0;
}
function GS(a) {
  for (const r in a) return !1;
  return !0;
}
function VS(a) {
  return typeof a == "string" && a.charCodeAt(0) > 96;
}
function YS(a) {
  return a && a.charAt(0).toLowerCase() + a.slice(1);
}
const cy = sy();
function bi(a, r) {
  const i = { ...r };
  for (const u in a)
    if (Object.prototype.hasOwnProperty.call(a, u)) {
      const s = u;
      if (s === "components" || s === "slots") i[s] = { ...a[s], ...i[s] };
      else if (s === "componentsProps" || s === "slotProps") {
        const f = a[s],
          d = r[s];
        if (!d) i[s] = f || {};
        else if (!f) i[s] = d;
        else {
          i[s] = { ...d };
          for (const p in f)
            if (Object.prototype.hasOwnProperty.call(f, p)) {
              const g = p;
              i[s][g] = bi(f[g], d[g]);
            }
        }
      } else i[s] === void 0 && (i[s] = a[s]);
    }
  return i;
}
function XS(a) {
  const { theme: r, name: i, props: u } = a;
  return !r ||
    !r.components ||
    !r.components[i] ||
    !r.components[i].defaultProps
    ? u
    : bi(r.components[i].defaultProps, u);
}
function fy({ props: a, name: r, defaultTheme: i, themeId: u }) {
  let s = Di(i);
  return u && (s = s[u] || s), XS({ theme: s, name: r, props: a });
}
const dy = typeof window < "u" ? A.useLayoutEffect : A.useEffect;
function QS(a, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(a, i));
}
function Nf(a, r = 0, i = 1) {
  return QS(a, r, i);
}
function KS(a) {
  a = a.slice(1);
  const r = new RegExp(`.{1,${a.length >= 6 ? 2 : 1}}`, "g");
  let i = a.match(r);
  return (
    i && i[0].length === 1 && (i = i.map((u) => u + u)),
    i
      ? `rgb${i.length === 4 ? "a" : ""}(${i.map((u, s) => (s < 3 ? parseInt(u, 16) : Math.round((parseInt(u, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function Ba(a) {
  if (a.type) return a;
  if (a.charAt(0) === "#") return Ba(KS(a));
  const r = a.indexOf("("),
    i = a.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(cl(9, a));
  let u = a.substring(r + 1, a.length - 1),
    s;
  if (i === "color") {
    if (
      ((u = u.split(" ")),
      (s = u.shift()),
      u.length === 4 && u[3].charAt(0) === "/" && (u[3] = u[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        s,
      ))
    )
      throw new Error(cl(10, s));
  } else u = u.split(",");
  return (
    (u = u.map((f) => parseFloat(f))), { type: i, values: u, colorSpace: s }
  );
}
const ZS = (a) => {
    const r = Ba(a);
    return r.values
      .slice(0, 3)
      .map((i, u) => (r.type.includes("hsl") && u !== 0 ? `${i}%` : i))
      .join(" ");
  },
  di = (a, r) => {
    try {
      return ZS(a);
    } catch {
      return a;
    }
  };
function Ou(a) {
  const { type: r, colorSpace: i } = a;
  let { values: u } = a;
  return (
    r.includes("rgb")
      ? (u = u.map((s, f) => (f < 3 ? parseInt(s, 10) : s)))
      : r.includes("hsl") && ((u[1] = `${u[1]}%`), (u[2] = `${u[2]}%`)),
    r.includes("color") ? (u = `${i} ${u.join(" ")}`) : (u = `${u.join(", ")}`),
    `${r}(${u})`
  );
}
function hy(a) {
  a = Ba(a);
  const { values: r } = a,
    i = r[0],
    u = r[1] / 100,
    s = r[2] / 100,
    f = u * Math.min(s, 1 - s),
    d = (m, b = (m + i / 30) % 12) =>
      s - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let p = "rgb";
  const g = [
    Math.round(d(0) * 255),
    Math.round(d(8) * 255),
    Math.round(d(4) * 255),
  ];
  return (
    a.type === "hsla" && ((p += "a"), g.push(r[3])), Ou({ type: p, values: g })
  );
}
function rf(a) {
  a = Ba(a);
  let r = a.type === "hsl" || a.type === "hsla" ? Ba(hy(a)).values : a.values;
  return (
    (r = r.map(
      (i) => (
        a.type !== "color" && (i /= 255),
        i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function PS(a, r) {
  const i = rf(a),
    u = rf(r);
  return (Math.max(i, u) + 0.05) / (Math.min(i, u) + 0.05);
}
function ta(a, r) {
  return (
    (a = Ba(a)),
    (r = Nf(r)),
    (a.type === "rgb" || a.type === "hsl") && (a.type += "a"),
    a.type === "color" ? (a.values[3] = `/${r}`) : (a.values[3] = r),
    Ou(a)
  );
}
function Zo(a, r, i) {
  try {
    return ta(a, r);
  } catch {
    return a;
  }
}
function Bf(a, r) {
  if (((a = Ba(a)), (r = Nf(r)), a.type.includes("hsl"))) a.values[2] *= 1 - r;
  else if (a.type.includes("rgb") || a.type.includes("color"))
    for (let i = 0; i < 3; i += 1) a.values[i] *= 1 - r;
  return Ou(a);
}
function $e(a, r, i) {
  try {
    return Bf(a, r);
  } catch {
    return a;
  }
}
function Uf(a, r) {
  if (((a = Ba(a)), (r = Nf(r)), a.type.includes("hsl")))
    a.values[2] += (100 - a.values[2]) * r;
  else if (a.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1) a.values[i] += (255 - a.values[i]) * r;
  else if (a.type.includes("color"))
    for (let i = 0; i < 3; i += 1) a.values[i] += (1 - a.values[i]) * r;
  return Ou(a);
}
function He(a, r, i) {
  try {
    return Uf(a, r);
  } catch {
    return a;
  }
}
function WS(a, r = 0.15) {
  return rf(a) > 0.5 ? Bf(a, r) : Uf(a, r);
}
function Po(a, r, i) {
  try {
    return WS(a, r);
  } catch {
    return a;
  }
}
function JS(a, r) {
  var i, u, s;
  return (
    A.isValidElement(a) &&
    r.indexOf(
      a.type.muiName ??
        ((s =
          (u = (i = a.type) == null ? void 0 : i._payload) == null
            ? void 0
            : u.value) == null
          ? void 0
          : s.muiName),
    ) !== -1
  );
}
function FS(a, r) {
  typeof a == "function" ? a(r) : a && (a.current = r);
}
let og = 0;
function IS(a) {
  const [r, i] = A.useState(a),
    u = a || r;
  return (
    A.useEffect(() => {
      r == null && ((og += 1), i(`mui-${og}`));
    }, [r]),
    u
  );
}
const ex = { ...ef },
  ug = ex.useId;
function tx(a) {
  if (ug !== void 0) {
    const r = ug();
    return a ?? r;
  }
  return IS(a);
}
function nx({ controlled: a, default: r, name: i, state: u = "value" }) {
  const { current: s } = A.useRef(a !== void 0),
    [f, d] = A.useState(r),
    p = s ? a : f,
    g = A.useCallback((m) => {
      s || d(m);
    }, []);
  return [p, g];
}
function lu(a) {
  const r = A.useRef(a);
  return (
    dy(() => {
      r.current = a;
    }),
    A.useRef((...i) => (0, r.current)(...i)).current
  );
}
function fu(...a) {
  return A.useMemo(
    () =>
      a.every((r) => r == null)
        ? null
        : (r) => {
            a.forEach((i) => {
              FS(i, r);
            });
          },
    a,
  );
}
const sg = {};
function py(a, r) {
  const i = A.useRef(sg);
  return i.current === sg && (i.current = a(r)), i;
}
const ax = [];
function lx(a) {
  A.useEffect(a, ax);
}
class jf {
  constructor() {
    ri(this, "currentId", null);
    ri(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    ri(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new jf();
  }
  start(r, i) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), i();
      }, r));
  }
}
function my() {
  const a = py(jf.create).current;
  return lx(a.disposeEffect), a;
}
function cg(a) {
  try {
    return a.matches(":focus-visible");
  } catch {}
  return !1;
}
function wt(a, r, i = void 0) {
  const u = {};
  for (const s in a) {
    const f = a[s];
    let d = "",
      p = !0;
    for (let g = 0; g < f.length; g += 1) {
      const m = f[g];
      m &&
        ((d += (p === !0 ? "" : " ") + r(m)),
        (p = !1),
        i && i[m] && (d += " " + i[m]));
    }
    u[s] = d;
  }
  return u;
}
function rx(a) {
  return typeof a == "string";
}
function ix(a, r, i) {
  return a === void 0 || rx(a)
    ? r
    : { ...r, ownerState: { ...r.ownerState, ...i } };
}
function ox(a, r = []) {
  if (a === void 0) return {};
  const i = {};
  return (
    Object.keys(a)
      .filter(
        (u) =>
          u.match(/^on[A-Z]/) && typeof a[u] == "function" && !r.includes(u),
      )
      .forEach((u) => {
        i[u] = a[u];
      }),
    i
  );
}
function fg(a) {
  if (a === void 0) return {};
  const r = {};
  return (
    Object.keys(a)
      .filter((i) => !(i.match(/^on[A-Z]/) && typeof a[i] == "function"))
      .forEach((i) => {
        r[i] = a[i];
      }),
    r
  );
}
function ux(a) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: u,
    externalForwardedProps: s,
    className: f,
  } = a;
  if (!r) {
    const R = ze(
        i == null ? void 0 : i.className,
        f,
        s == null ? void 0 : s.className,
        u == null ? void 0 : u.className,
      ),
      T = {
        ...(i == null ? void 0 : i.style),
        ...(s == null ? void 0 : s.style),
        ...(u == null ? void 0 : u.style),
      },
      E = { ...i, ...s, ...u };
    return (
      R.length > 0 && (E.className = R),
      Object.keys(T).length > 0 && (E.style = T),
      { props: E, internalRef: void 0 }
    );
  }
  const d = ox({ ...s, ...u }),
    p = fg(u),
    g = fg(s),
    m = r(d),
    b = ze(
      m == null ? void 0 : m.className,
      i == null ? void 0 : i.className,
      f,
      s == null ? void 0 : s.className,
      u == null ? void 0 : u.className,
    ),
    S = {
      ...(m == null ? void 0 : m.style),
      ...(i == null ? void 0 : i.style),
      ...(s == null ? void 0 : s.style),
      ...(u == null ? void 0 : u.style),
    },
    x = { ...m, ...i, ...g, ...p };
  return (
    b.length > 0 && (x.className = b),
    Object.keys(S).length > 0 && (x.style = S),
    { props: x, internalRef: m.ref }
  );
}
function sx(a, r, i) {
  return typeof a == "function" ? a(r, i) : a;
}
const gy = A.createContext(null);
function kf() {
  return A.useContext(gy);
}
const cx = typeof Symbol == "function" && Symbol.for,
  fx = cx ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function dx(a, r) {
  return typeof r == "function" ? r(a) : { ...a, ...r };
}
function hx(a) {
  const { children: r, theme: i } = a,
    u = kf(),
    s = A.useMemo(() => {
      const f = u === null ? { ...i } : dx(u, i);
      return f != null && (f[fx] = u !== null), f;
    }, [i, u]);
  return B.jsx(gy.Provider, { value: s, children: r });
}
const px = A.createContext();
function mx({ value: a, ...r }) {
  return B.jsx(px.Provider, { value: a ?? !0, ...r });
}
const yy = A.createContext(void 0);
function gx({ value: a, children: r }) {
  return B.jsx(yy.Provider, { value: a, children: r });
}
function yx(a) {
  const { theme: r, name: i, props: u } = a;
  if (!r || !r.components || !r.components[i]) return u;
  const s = r.components[i];
  return s.defaultProps
    ? bi(s.defaultProps, u)
    : !s.styleOverrides && !s.variants
      ? bi(s, u)
      : u;
}
function vx({ props: a, name: r }) {
  const i = A.useContext(yy);
  return yx({ props: a, name: r, theme: { components: i } });
}
const dg = {};
function hg(a, r, i, u = !1) {
  return A.useMemo(() => {
    const s = (a && r[a]) || r;
    if (typeof i == "function") {
      const f = i(s),
        d = a ? { ...r, [a]: f } : f;
      return u ? () => d : d;
    }
    return a ? { ...r, [a]: i } : { ...r, ...i };
  }, [a, r, i, u]);
}
function vy(a) {
  const { children: r, theme: i, themeId: u } = a,
    s = ly(dg),
    f = kf() || dg,
    d = hg(u, s, i),
    p = hg(u, f, i, !0),
    g = (u ? d[u] : d).direction === "rtl";
  return B.jsx(hx, {
    theme: p,
    children: B.jsx(Ti.Provider, {
      value: d,
      children: B.jsx(mx, {
        value: g,
        children: B.jsx(gx, {
          value: u ? d[u].components : d.components,
          children: r,
        }),
      }),
    }),
  });
}
const pg = { theme: void 0 };
function bx(a) {
  let r, i;
  return function (s) {
    let f = r;
    return (
      (f === void 0 || s.theme !== i) &&
        ((pg.theme = s.theme), (f = oy(a(pg))), (r = f), (i = s.theme)),
      f
    );
  };
}
const $f = "mode",
  Hf = "color-scheme",
  Sx = "data-color-scheme";
function xx(a) {
  const {
    defaultMode: r = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: u = "dark",
    modeStorageKey: s = $f,
    colorSchemeStorageKey: f = Hf,
    attribute: d = Sx,
    colorSchemeNode: p = "document.documentElement",
    nonce: g,
  } = a;
  let m = "",
    b = d;
  if (
    (d === "class" && (b = ".%s"),
    d === "data" && (b = "[data-%s]"),
    b.startsWith("."))
  ) {
    const x = b.substring(1);
    m += `${p}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${p}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const S = b.match(/\[([^\]]+)\]/);
  if (S) {
    const [x, R] = S[1].split("=");
    R ||
      (m += `${p}.removeAttribute('${x}'.replace('%s', light));
      ${p}.removeAttribute('${x}'.replace('%s', dark));`),
      (m += `
      ${p}.setAttribute('${x}'.replace('%s', colorScheme), ${R ? `${R}.replace('%s', colorScheme)` : '""'});`);
  } else m += `${p}.setAttribute('${b}', colorScheme);`;
  return B.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? g : "",
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${u}';
  const light = localStorage.getItem('${f}-light') || '${i}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`,
      },
    },
    "mui-color-scheme-init",
  );
}
function mg(a) {
  if (
    typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    a === "system"
  )
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
function by(a, r) {
  if (a.mode === "light" || (a.mode === "system" && a.systemMode === "light"))
    return r("light");
  if (a.mode === "dark" || (a.mode === "system" && a.systemMode === "dark"))
    return r("dark");
}
function Ex(a) {
  return by(a, (r) => {
    if (r === "light") return a.lightColorScheme;
    if (r === "dark") return a.darkColorScheme;
  });
}
function Pc(a, r) {
  if (typeof window > "u") return;
  let i;
  try {
    (i = localStorage.getItem(a) || void 0), i || localStorage.setItem(a, r);
  } catch {}
  return i || r;
}
function Cx(a) {
  const {
      defaultMode: r = "light",
      defaultLightColorScheme: i,
      defaultDarkColorScheme: u,
      supportedColorSchemes: s = [],
      modeStorageKey: f = $f,
      colorSchemeStorageKey: d = Hf,
      storageWindow: p = typeof window > "u" ? void 0 : window,
      noSsr: g = !1,
    } = a,
    m = s.join(","),
    b = s.length > 1,
    [S, x] = A.useState(() => {
      const U = Pc(f, r),
        M = Pc(`${d}-light`, i),
        G = Pc(`${d}-dark`, u);
      return {
        mode: U,
        systemMode: mg(U),
        lightColorScheme: M,
        darkColorScheme: G,
      };
    }),
    [R, T] = A.useState(g || !b);
  A.useEffect(() => {
    T(!0);
  }, []);
  const E = Ex(S),
    _ = A.useCallback(
      (U) => {
        x((M) => {
          if (U === M.mode) return M;
          const G = U ?? r;
          try {
            localStorage.setItem(f, G);
          } catch {}
          return { ...M, mode: G, systemMode: mg(G) };
        });
      },
      [f, r],
    ),
    z = A.useCallback(
      (U) => {
        U
          ? typeof U == "string"
            ? U && !m.includes(U)
              ? console.error(
                  `\`${U}\` does not exist in \`theme.colorSchemes\`.`,
                )
              : x((M) => {
                  const G = { ...M };
                  return (
                    by(M, (P) => {
                      try {
                        localStorage.setItem(`${d}-${P}`, U);
                      } catch {}
                      P === "light" && (G.lightColorScheme = U),
                        P === "dark" && (G.darkColorScheme = U);
                    }),
                    G
                  );
                })
            : x((M) => {
                const G = { ...M },
                  P = U.light === null ? i : U.light,
                  ee = U.dark === null ? u : U.dark;
                if (P)
                  if (!m.includes(P))
                    console.error(
                      `\`${P}\` does not exist in \`theme.colorSchemes\`.`,
                    );
                  else {
                    G.lightColorScheme = P;
                    try {
                      localStorage.setItem(`${d}-light`, P);
                    } catch {}
                  }
                if (ee)
                  if (!m.includes(ee))
                    console.error(
                      `\`${ee}\` does not exist in \`theme.colorSchemes\`.`,
                    );
                  else {
                    G.darkColorScheme = ee;
                    try {
                      localStorage.setItem(`${d}-dark`, ee);
                    } catch {}
                  }
                return G;
              })
          : x((M) => {
              try {
                localStorage.setItem(`${d}-light`, i),
                  localStorage.setItem(`${d}-dark`, u);
              } catch {}
              return { ...M, lightColorScheme: i, darkColorScheme: u };
            });
      },
      [m, d, i, u],
    ),
    H = A.useCallback(
      (U) => {
        S.mode === "system" &&
          x((M) => {
            const G = U != null && U.matches ? "dark" : "light";
            return M.systemMode === G ? M : { ...M, systemMode: G };
          });
      },
      [S.mode],
    ),
    k = A.useRef(H);
  return (
    (k.current = H),
    A.useEffect(() => {
      if (typeof window.matchMedia != "function" || !b) return;
      const U = (...G) => k.current(...G),
        M = window.matchMedia("(prefers-color-scheme: dark)");
      return (
        M.addListener(U),
        U(M),
        () => {
          M.removeListener(U);
        }
      );
    }, [b]),
    A.useEffect(() => {
      if (p && b) {
        const U = (M) => {
          const G = M.newValue;
          typeof M.key == "string" &&
            M.key.startsWith(d) &&
            (!G || m.match(G)) &&
            (M.key.endsWith("light") && z({ light: G }),
            M.key.endsWith("dark") && z({ dark: G })),
            M.key === f &&
              (!G || ["light", "dark", "system"].includes(G)) &&
              _(G || r);
        };
        return (
          p.addEventListener("storage", U),
          () => {
            p.removeEventListener("storage", U);
          }
        );
      }
    }, [z, _, f, d, m, r, p, b]),
    {
      ...S,
      mode: R ? S.mode : void 0,
      systemMode: R ? S.systemMode : void 0,
      colorScheme: R ? E : void 0,
      setMode: _,
      setColorScheme: z,
    }
  );
}
const Tx =
  "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ax(a) {
  const {
      themeId: r,
      theme: i = {},
      modeStorageKey: u = $f,
      colorSchemeStorageKey: s = Hf,
      disableTransitionOnChange: f = !1,
      defaultColorScheme: d,
      resolveTheme: p,
    } = a,
    g = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0,
    },
    m = A.createContext(void 0),
    b = () => A.useContext(m) || g,
    S = {},
    x = {};
  function R(z) {
    var Bi, Ut, Ui, ur;
    const {
        children: H,
        theme: k,
        modeStorageKey: U = u,
        colorSchemeStorageKey: M = s,
        disableTransitionOnChange: G = f,
        storageWindow: P = typeof window > "u" ? void 0 : window,
        documentNode: ee = typeof document > "u" ? void 0 : document,
        colorSchemeNode: Z = typeof document > "u"
          ? void 0
          : document.documentElement,
        disableNestedContext: v = !1,
        disableStyleSheetGeneration: Q = !1,
        defaultMode: F = "system",
        noSsr: te,
      } = z,
      ce = A.useRef(!1),
      de = kf(),
      W = A.useContext(m),
      ne = !!W && !v,
      ae = A.useMemo(() => k || (typeof i == "function" ? i() : i), [k]),
      se = ae[r],
      O = se || ae,
      { colorSchemes: Y = S, components: re = x, cssVarPrefix: ie } = O,
      I = Object.keys(Y)
        .filter((ut) => !!Y[ut])
        .join(","),
      pe = A.useMemo(() => I.split(","), [I]),
      J = typeof d == "string" ? d : d.light,
      Te = typeof d == "string" ? d : d.dark,
      he =
        Y[J] && Y[Te]
          ? F
          : ((Ut =
              (Bi = Y[O.defaultColorScheme]) == null ? void 0 : Bi.palette) ==
            null
              ? void 0
              : Ut.mode) || ((Ui = O.palette) == null ? void 0 : Ui.mode),
      {
        mode: we,
        setMode: Ee,
        systemMode: ot,
        lightColorScheme: gn,
        darkColorScheme: Bt,
        colorScheme: yn,
        setColorScheme: Un,
      } = Cx({
        supportedColorSchemes: pe,
        defaultLightColorScheme: J,
        defaultDarkColorScheme: Te,
        modeStorageKey: U,
        colorSchemeStorageKey: M,
        defaultMode: he,
        storageWindow: P,
        noSsr: te,
      });
    let Kt = we,
      Je = yn;
    ne && ((Kt = W.mode), (Je = W.colorScheme));
    const vt = A.useMemo(() => {
        var ua;
        const ut = Je || O.defaultColorScheme,
          lt =
            ((ua = O.generateThemeVars) == null ? void 0 : ua.call(O)) ||
            O.vars,
          Tt = {
            ...O,
            components: re,
            colorSchemes: Y,
            cssVarPrefix: ie,
            vars: lt,
          };
        if (
          (typeof Tt.generateSpacing == "function" &&
            (Tt.spacing = Tt.generateSpacing()),
          ut)
        ) {
          const jt = Y[ut];
          jt &&
            typeof jt == "object" &&
            Object.keys(jt).forEach((fn) => {
              jt[fn] && typeof jt[fn] == "object"
                ? (Tt[fn] = { ...Tt[fn], ...jt[fn] })
                : (Tt[fn] = jt[fn]);
            });
        }
        return p ? p(Tt) : Tt;
      }, [O, Je, re, Y, ie]),
      cn = O.colorSchemeSelector;
    dy(() => {
      if (Je && Z && cn && cn !== "media") {
        const ut = cn;
        let lt = cn;
        if (
          (ut === "class" && (lt = ".%s"),
          ut === "data" && (lt = "[data-%s]"),
          ut != null &&
            ut.startsWith("data-") &&
            !ut.includes("%s") &&
            (lt = `[${ut}="%s"]`),
          lt.startsWith("."))
        )
          Z.classList.remove(
            ...pe.map((Tt) => lt.substring(1).replace("%s", Tt)),
          ),
            Z.classList.add(lt.substring(1).replace("%s", Je));
        else {
          const Tt = lt.replace("%s", Je).match(/\[([^\]]+)\]/);
          if (Tt) {
            const [ua, jt] = Tt[1].split("=");
            jt ||
              pe.forEach((fn) => {
                Z.removeAttribute(ua.replace(Je, fn));
              }),
              Z.setAttribute(ua, jt ? jt.replace(/"|'/g, "") : "");
          } else Z.setAttribute(lt, Je);
        }
      }
    }, [Je, cn, Z, pe]),
      A.useEffect(() => {
        let ut;
        if (G && ce.current && ee) {
          const lt = ee.createElement("style");
          lt.appendChild(ee.createTextNode(Tx)),
            ee.head.appendChild(lt),
            window.getComputedStyle(ee.body),
            (ut = setTimeout(() => {
              ee.head.removeChild(lt);
            }, 1));
        }
        return () => {
          clearTimeout(ut);
        };
      }, [Je, G, ee]),
      A.useEffect(
        () => (
          (ce.current = !0),
          () => {
            ce.current = !1;
          }
        ),
        [],
      );
    const ia = A.useMemo(
      () => ({
        allColorSchemes: pe,
        colorScheme: Je,
        darkColorScheme: Bt,
        lightColorScheme: gn,
        mode: Kt,
        setColorScheme: Un,
        setMode: Ee,
        systemMode: ot,
      }),
      [pe, Je, Bt, gn, Kt, Un, Ee, ot, vt.colorSchemeSelector],
    );
    let oa = !0;
    (Q ||
      O.cssVariables === !1 ||
      (ne && (de == null ? void 0 : de.cssVarPrefix) === ie)) &&
      (oa = !1);
    const me = B.jsxs(A.Fragment, {
      children: [
        B.jsx(vy, { themeId: se ? r : void 0, theme: vt, children: H }),
        oa &&
          B.jsx(Fg, {
            styles:
              ((ur = vt.generateStyleSheets) == null ? void 0 : ur.call(vt)) ||
              [],
          }),
      ],
    });
    return ne ? me : B.jsx(m.Provider, { value: ia, children: me });
  }
  const T = typeof d == "string" ? d : d.light,
    E = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: R,
    useColorScheme: b,
    getInitColorSchemeScript: (z) =>
      xx({
        colorSchemeStorageKey: s,
        defaultLightColorScheme: T,
        defaultDarkColorScheme: E,
        modeStorageKey: u,
        ...z,
      }),
  };
}
function Rx(a = "") {
  function r(...u) {
    if (!u.length) return "";
    const s = u[0];
    return typeof s == "string" &&
      !s.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${a ? `${a}-` : ""}${s}${r(...u.slice(1))})`
      : `, ${s}`;
  }
  return (u, ...s) => `var(--${a ? `${a}-` : ""}${u}${r(...s)})`;
}
const gg = (a, r, i, u = []) => {
    let s = a;
    r.forEach((f, d) => {
      d === r.length - 1
        ? Array.isArray(s)
          ? (s[Number(f)] = i)
          : s && typeof s == "object" && (s[f] = i)
        : s &&
          typeof s == "object" &&
          (s[f] || (s[f] = u.includes(f) ? [] : {}), (s = s[f]));
    });
  },
  Ox = (a, r, i) => {
    function u(s, f = [], d = []) {
      Object.entries(s).forEach(([p, g]) => {
        (!i || !i([...f, p])) &&
          g != null &&
          (typeof g == "object" && Object.keys(g).length > 0
            ? u(g, [...f, p], Array.isArray(g) ? [...d, p] : d)
            : r([...f, p], g, d));
      });
    }
    u(a);
  },
  Mx = (a, r) =>
    typeof r == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((u) =>
          a.includes(u),
        ) || a[a.length - 1].toLowerCase().includes("opacity")
        ? r
        : `${r}px`
      : r;
function Wc(a, r) {
  const { prefix: i, shouldSkipGeneratingVar: u } = r || {},
    s = {},
    f = {},
    d = {};
  return (
    Ox(
      a,
      (p, g, m) => {
        if (
          (typeof g == "string" || typeof g == "number") &&
          (!u || !u(p, g))
        ) {
          const b = `--${i ? `${i}-` : ""}${p.join("-")}`,
            S = Mx(p, g);
          Object.assign(s, { [b]: S }),
            gg(f, p, `var(${b})`, m),
            gg(d, p, `var(${b}, ${S})`, m);
        }
      },
      (p) => p[0] === "vars",
    ),
    { css: s, vars: f, varsWithDefaults: d }
  );
}
function wx(a, r = {}) {
  const {
      getSelector: i = _,
      disableCssColorScheme: u,
      colorSchemeSelector: s,
    } = r,
    {
      colorSchemes: f = {},
      components: d,
      defaultColorScheme: p = "light",
      ...g
    } = a,
    { vars: m, css: b, varsWithDefaults: S } = Wc(g, r);
  let x = S;
  const R = {},
    { [p]: T, ...E } = f;
  if (
    (Object.entries(E || {}).forEach(([k, U]) => {
      const { vars: M, css: G, varsWithDefaults: P } = Wc(U, r);
      (x = Qt(x, P)), (R[k] = { css: G, vars: M });
    }),
    T)
  ) {
    const { css: k, vars: U, varsWithDefaults: M } = Wc(T, r);
    (x = Qt(x, M)), (R[p] = { css: k, vars: U });
  }
  function _(k, U) {
    var G, P;
    let M = s;
    if (
      (s === "class" && (M = ".%s"),
      s === "data" && (M = "[data-%s]"),
      s != null &&
        s.startsWith("data-") &&
        !s.includes("%s") &&
        (M = `[${s}="%s"]`),
      k)
    ) {
      if (M === "media")
        return a.defaultColorScheme === k
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${((P = (G = f[k]) == null ? void 0 : G.palette) == null ? void 0 : P.mode) || k})`]:
                { ":root": U },
            };
      if (M)
        return a.defaultColorScheme === k
          ? `:root, ${M.replace("%s", String(k))}`
          : M.replace("%s", String(k));
    }
    return ":root";
  }
  return {
    vars: x,
    generateThemeVars: () => {
      let k = { ...m };
      return (
        Object.entries(R).forEach(([, { vars: U }]) => {
          k = Qt(k, U);
        }),
        k
      );
    },
    generateStyleSheets: () => {
      var ee, Z;
      const k = [],
        U = a.defaultColorScheme || "light";
      function M(v, Q) {
        Object.keys(Q).length &&
          k.push(typeof v == "string" ? { [v]: { ...Q } } : v);
      }
      M(i(void 0, { ...b }), b);
      const { [U]: G, ...P } = R;
      if (G) {
        const { css: v } = G,
          Q =
            (Z = (ee = f[U]) == null ? void 0 : ee.palette) == null
              ? void 0
              : Z.mode,
          F = !u && Q ? { colorScheme: Q, ...v } : { ...v };
        M(i(U, { ...F }), F);
      }
      return (
        Object.entries(P).forEach(([v, { css: Q }]) => {
          var ce, de;
          const F =
              (de = (ce = f[v]) == null ? void 0 : ce.palette) == null
                ? void 0
                : de.mode,
            te = !u && F ? { colorScheme: F, ...Q } : { ...Q };
          M(i(v, { ...te }), te);
        }),
        k
      );
    },
  };
}
function Dx(a) {
  return function (i) {
    return a === "media"
      ? `@media (prefers-color-scheme: ${i})`
      : a
        ? a.startsWith("data-") && !a.includes("%s")
          ? `[${a}="${i}"] &`
          : a === "class"
            ? `.${i} &`
            : a === "data"
              ? `[data-${i}] &`
              : `${a.replace("%s", i)} &`
        : "&";
  };
}
const zx = wi(),
  _x = cy("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        r[`maxWidth${je(String(i.maxWidth))}`],
        i.fixed && r.fixed,
        i.disableGutters && r.disableGutters,
      ];
    },
  }),
  Nx = (a) => fy({ props: a, name: "MuiContainer", defaultTheme: zx }),
  Bx = (a, r) => {
    const i = (g) => Ct(r, g),
      { classes: u, fixed: s, disableGutters: f, maxWidth: d } = a,
      p = {
        root: [
          "root",
          d && `maxWidth${je(String(d))}`,
          s && "fixed",
          f && "disableGutters",
        ],
      };
    return wt(p, i, u);
  };
function Ux(a = {}) {
  const {
      createStyledComponent: r = _x,
      useThemeProps: i = Nx,
      componentName: u = "MuiContainer",
    } = a,
    s = r(
      ({ theme: d, ownerState: p }) => ({
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        ...(!p.disableGutters && {
          paddingLeft: d.spacing(2),
          paddingRight: d.spacing(2),
          [d.breakpoints.up("sm")]: {
            paddingLeft: d.spacing(3),
            paddingRight: d.spacing(3),
          },
        }),
      }),
      ({ theme: d, ownerState: p }) =>
        p.fixed &&
        Object.keys(d.breakpoints.values).reduce((g, m) => {
          const b = m,
            S = d.breakpoints.values[b];
          return (
            S !== 0 &&
              (g[d.breakpoints.up(b)] = {
                maxWidth: `${S}${d.breakpoints.unit}`,
              }),
            g
          );
        }, {}),
      ({ theme: d, ownerState: p }) => ({
        ...(p.maxWidth === "xs" && {
          [d.breakpoints.up("xs")]: {
            maxWidth: Math.max(d.breakpoints.values.xs, 444),
          },
        }),
        ...(p.maxWidth &&
          p.maxWidth !== "xs" && {
            [d.breakpoints.up(p.maxWidth)]: {
              maxWidth: `${d.breakpoints.values[p.maxWidth]}${d.breakpoints.unit}`,
            },
          }),
      }),
    );
  return A.forwardRef(function (p, g) {
    const m = i(p),
      {
        className: b,
        component: S = "div",
        disableGutters: x = !1,
        fixed: R = !1,
        maxWidth: T = "lg",
        classes: E,
        ..._
      } = m,
      z = { ...m, component: S, disableGutters: x, fixed: R, maxWidth: T },
      H = Bx(z, u);
    return B.jsx(s, {
      as: S,
      ownerState: z,
      className: ze(H.root, b),
      ref: g,
      ..._,
    });
  });
}
const jx = (a, r) => a.filter((i) => r.includes(i)),
  rr = (a, r, i) => {
    const u = a.keys[0];
    Array.isArray(r)
      ? r.forEach((s, f) => {
          i((d, p) => {
            f <= a.keys.length - 1 &&
              (f === 0 ? Object.assign(d, p) : (d[a.up(a.keys[f])] = p));
          }, s);
        })
      : r && typeof r == "object"
        ? (Object.keys(r).length > a.keys.length
            ? a.keys
            : jx(a.keys, Object.keys(r))
          ).forEach((f) => {
            if (a.keys.includes(f)) {
              const d = r[f];
              d !== void 0 &&
                i((p, g) => {
                  u === f ? Object.assign(p, g) : (p[a.up(f)] = g);
                }, d);
            }
          })
        : (typeof r == "number" || typeof r == "string") &&
          i((s, f) => {
            Object.assign(s, f);
          }, r);
  };
function du(a) {
  return `--Grid-${a}Spacing`;
}
function Mu(a) {
  return `--Grid-parent-${a}Spacing`;
}
const yg = "--Grid-columns",
  nr = "--Grid-parent-columns",
  kx = ({ theme: a, ownerState: r }) => {
    const i = {};
    return (
      rr(a.breakpoints, r.size, (u, s) => {
        let f = {};
        s === "grow" && (f = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" }),
          s === "auto" &&
            (f = {
              flexBasis: "auto",
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: "none",
              width: "auto",
            }),
          typeof s == "number" &&
            (f = {
              flexGrow: 0,
              flexBasis: "auto",
              width: `calc(100% * ${s} / var(${nr}) - (var(${nr}) - ${s}) * (var(${Mu("column")}) / var(${nr})))`,
            }),
          u(i, f);
      }),
      i
    );
  },
  $x = ({ theme: a, ownerState: r }) => {
    const i = {};
    return (
      rr(a.breakpoints, r.offset, (u, s) => {
        let f = {};
        s === "auto" && (f = { marginLeft: "auto" }),
          typeof s == "number" &&
            (f = {
              marginLeft:
                s === 0
                  ? "0px"
                  : `calc(100% * ${s} / var(${nr}) + var(${Mu("column")}) * ${s} / var(${nr}))`,
            }),
          u(i, f);
      }),
      i
    );
  },
  Hx = ({ theme: a, ownerState: r }) => {
    if (!r.container) return {};
    const i = { [yg]: 12 };
    return (
      rr(a.breakpoints, r.columns, (u, s) => {
        const f = s ?? 12;
        u(i, { [yg]: f, "> *": { [nr]: f } });
      }),
      i
    );
  },
  Lx = ({ theme: a, ownerState: r }) => {
    if (!r.container) return {};
    const i = {};
    return (
      rr(a.breakpoints, r.rowSpacing, (u, s) => {
        var d;
        const f =
          typeof s == "string"
            ? s
            : (d = a.spacing) == null
              ? void 0
              : d.call(a, s);
        u(i, { [du("row")]: f, "> *": { [Mu("row")]: f } });
      }),
      i
    );
  },
  qx = ({ theme: a, ownerState: r }) => {
    if (!r.container) return {};
    const i = {};
    return (
      rr(a.breakpoints, r.columnSpacing, (u, s) => {
        var d;
        const f =
          typeof s == "string"
            ? s
            : (d = a.spacing) == null
              ? void 0
              : d.call(a, s);
        u(i, { [du("column")]: f, "> *": { [Mu("column")]: f } });
      }),
      i
    );
  },
  Gx = ({ theme: a, ownerState: r }) => {
    if (!r.container) return {};
    const i = {};
    return (
      rr(a.breakpoints, r.direction, (u, s) => {
        u(i, { flexDirection: s });
      }),
      i
    );
  },
  Vx = ({ ownerState: a }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...(a.container && {
      display: "flex",
      flexWrap: "wrap",
      ...(a.wrap && a.wrap !== "wrap" && { flexWrap: a.wrap }),
      gap: `var(${du("row")}) var(${du("column")})`,
    }),
  }),
  Yx = (a) => {
    const r = [];
    return (
      Object.entries(a).forEach(([i, u]) => {
        u !== !1 && u !== void 0 && r.push(`grid-${i}-${String(u)}`);
      }),
      r
    );
  },
  Xx = (a, r = "xs") => {
    function i(u) {
      return u === void 0
        ? !1
        : (typeof u == "string" && !Number.isNaN(Number(u))) ||
            (typeof u == "number" && u > 0);
    }
    if (i(a)) return [`spacing-${r}-${String(a)}`];
    if (typeof a == "object" && !Array.isArray(a)) {
      const u = [];
      return (
        Object.entries(a).forEach(([s, f]) => {
          i(f) && u.push(`spacing-${s}-${String(f)}`);
        }),
        u
      );
    }
    return [];
  },
  Qx = (a) =>
    a === void 0
      ? []
      : typeof a == "object"
        ? Object.entries(a).map(([r, i]) => `direction-${r}-${i}`)
        : [`direction-xs-${String(a)}`],
  Kx = wi(),
  Zx = cy("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (a, r) => r.root,
  });
function Px(a) {
  return fy({ props: a, name: "MuiGrid", defaultTheme: Kx });
}
function Wx(a = {}) {
  const {
      createStyledComponent: r = Zx,
      useThemeProps: i = Px,
      useTheme: u = Di,
      componentName: s = "MuiGrid",
    } = a,
    f = (m, b) => {
      const { container: S, direction: x, spacing: R, wrap: T, size: E } = m,
        _ = {
          root: [
            "root",
            S && "container",
            T !== "wrap" && `wrap-xs-${String(T)}`,
            ...Qx(x),
            ...Yx(E),
            ...(S ? Xx(R, b.breakpoints.keys[0]) : []),
          ],
        };
      return wt(_, (z) => Ct(s, z), {});
    };
  function d(m, b, S = () => !0) {
    const x = {};
    return (
      m === null ||
        (Array.isArray(m)
          ? m.forEach((R, T) => {
              R !== null && S(R) && b.keys[T] && (x[b.keys[T]] = R);
            })
          : typeof m == "object"
            ? Object.keys(m).forEach((R) => {
                const T = m[R];
                T != null && S(T) && (x[R] = T);
              })
            : (x[b.keys[0]] = m)),
      x
    );
  }
  const p = r(Hx, qx, Lx, kx, Gx, Vx, $x),
    g = A.forwardRef(function (b, S) {
      const x = u(),
        R = i(b),
        T = _f(R),
        {
          className: E,
          children: _,
          columns: z = 12,
          container: H = !1,
          component: k = "div",
          direction: U = "row",
          wrap: M = "wrap",
          size: G = {},
          offset: P = {},
          spacing: ee = 0,
          rowSpacing: Z = ee,
          columnSpacing: v = ee,
          unstable_level: Q = 0,
          ...F
        } = T,
        te = d(G, x.breakpoints, (Y) => Y !== !1),
        ce = d(P, x.breakpoints),
        de = b.columns ?? (Q ? void 0 : z),
        W = b.spacing ?? (Q ? void 0 : ee),
        ne = b.rowSpacing ?? b.spacing ?? (Q ? void 0 : Z),
        ae = b.columnSpacing ?? b.spacing ?? (Q ? void 0 : v),
        se = {
          ...T,
          level: Q,
          columns: de,
          container: H,
          direction: U,
          wrap: M,
          spacing: W,
          rowSpacing: ne,
          columnSpacing: ae,
          size: te,
          offset: ce,
        },
        O = f(se, x);
      return B.jsx(p, {
        ref: S,
        as: k,
        ownerState: se,
        className: ze(O.root, E),
        ...F,
        children: A.Children.map(_, (Y) => {
          var re;
          return A.isValidElement(Y) &&
            JS(Y, ["Grid"]) &&
            H &&
            Y.props.container
            ? A.cloneElement(Y, {
                unstable_level:
                  ((re = Y.props) == null ? void 0 : re.unstable_level) ??
                  Q + 1,
              })
            : Y;
        }),
      });
    });
  return (g.muiName = "Grid"), g;
}
const Si = { black: "#000", white: "#fff" },
  Jx = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Kl = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  rl = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  si = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Zl = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Pl = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Wl = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  };
function Sy() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Si.white, default: Si.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const Fx = Sy();
function xy() {
  return {
    text: {
      primary: Si.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Si.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const vg = xy();
function bg(a, r, i, u) {
  const s = u.light || u,
    f = u.dark || u * 1.5;
  a[r] ||
    (a.hasOwnProperty(i)
      ? (a[r] = a[i])
      : r === "light"
        ? (a.light = Uf(a.main, s))
        : r === "dark" && (a.dark = Bf(a.main, f)));
}
function Ix(a = "light") {
  return a === "dark"
    ? { main: Zl[200], light: Zl[50], dark: Zl[400] }
    : { main: Zl[700], light: Zl[400], dark: Zl[800] };
}
function eE(a = "light") {
  return a === "dark"
    ? { main: Kl[200], light: Kl[50], dark: Kl[400] }
    : { main: Kl[500], light: Kl[300], dark: Kl[700] };
}
function tE(a = "light") {
  return a === "dark"
    ? { main: rl[500], light: rl[300], dark: rl[700] }
    : { main: rl[700], light: rl[400], dark: rl[800] };
}
function nE(a = "light") {
  return a === "dark"
    ? { main: Pl[400], light: Pl[300], dark: Pl[700] }
    : { main: Pl[700], light: Pl[500], dark: Pl[900] };
}
function aE(a = "light") {
  return a === "dark"
    ? { main: Wl[400], light: Wl[300], dark: Wl[700] }
    : { main: Wl[800], light: Wl[500], dark: Wl[900] };
}
function lE(a = "light") {
  return a === "dark"
    ? { main: si[400], light: si[300], dark: si[700] }
    : { main: "#ed6c02", light: si[500], dark: si[900] };
}
function Lf(a) {
  const {
      mode: r = "light",
      contrastThreshold: i = 3,
      tonalOffset: u = 0.2,
      ...s
    } = a,
    f = a.primary || Ix(r),
    d = a.secondary || eE(r),
    p = a.error || tE(r),
    g = a.info || nE(r),
    m = a.success || aE(r),
    b = a.warning || lE(r);
  function S(E) {
    return PS(E, vg.text.primary) >= i ? vg.text.primary : Fx.text.primary;
  }
  const x = ({
    color: E,
    name: _,
    mainShade: z = 500,
    lightShade: H = 300,
    darkShade: k = 700,
  }) => {
    if (
      ((E = { ...E }),
      !E.main && E[z] && (E.main = E[z]),
      !E.hasOwnProperty("main"))
    )
      throw new Error(cl(11, _ ? ` (${_})` : "", z));
    if (typeof E.main != "string")
      throw new Error(cl(12, _ ? ` (${_})` : "", JSON.stringify(E.main)));
    return (
      bg(E, "light", H, u),
      bg(E, "dark", k, u),
      E.contrastText || (E.contrastText = S(E.main)),
      E
    );
  };
  let R;
  return (
    r === "light" ? (R = Sy()) : r === "dark" && (R = xy()),
    Qt(
      {
        common: { ...Si },
        mode: r,
        primary: x({ color: f, name: "primary" }),
        secondary: x({
          color: d,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: x({ color: p, name: "error" }),
        warning: x({ color: b, name: "warning" }),
        info: x({ color: g, name: "info" }),
        success: x({ color: m, name: "success" }),
        grey: Jx,
        contrastThreshold: i,
        getContrastText: S,
        augmentColor: x,
        tonalOffset: u,
        ...R,
      },
      s,
    )
  );
}
function rE(a) {
  const r = {};
  return (
    Object.entries(a).forEach((u) => {
      const [s, f] = u;
      typeof f == "object" &&
        (r[s] =
          `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
    }),
    r
  );
}
function iE(a, r) {
  return {
    toolbar: {
      minHeight: 56,
      [a.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [a.up("sm")]: { minHeight: 64 },
    },
    ...r,
  };
}
function oE(a) {
  return Math.round(a * 1e5) / 1e5;
}
const Sg = { textTransform: "uppercase" },
  xg = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ey(a, r) {
  const {
      fontFamily: i = xg,
      fontSize: u = 14,
      fontWeightLight: s = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: d = 500,
      fontWeightBold: p = 700,
      htmlFontSize: g = 16,
      allVariants: m,
      pxToRem: b,
      ...S
    } = typeof r == "function" ? r(a) : r,
    x = u / 14,
    R = b || ((_) => `${(_ / g) * x}rem`),
    T = (_, z, H, k, U) => ({
      fontFamily: i,
      fontWeight: _,
      fontSize: R(z),
      lineHeight: H,
      ...(i === xg ? { letterSpacing: `${oE(k / z)}em` } : {}),
      ...U,
      ...m,
    }),
    E = {
      h1: T(s, 96, 1.167, -1.5),
      h2: T(s, 60, 1.2, -0.5),
      h3: T(f, 48, 1.167, 0),
      h4: T(f, 34, 1.235, 0.25),
      h5: T(f, 24, 1.334, 0),
      h6: T(d, 20, 1.6, 0.15),
      subtitle1: T(f, 16, 1.75, 0.15),
      subtitle2: T(d, 14, 1.57, 0.1),
      body1: T(f, 16, 1.5, 0.15),
      body2: T(f, 14, 1.43, 0.15),
      button: T(d, 14, 1.75, 0.4, Sg),
      caption: T(f, 12, 1.66, 0.4),
      overline: T(f, 12, 2.66, 1, Sg),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Qt(
    {
      htmlFontSize: g,
      pxToRem: R,
      fontFamily: i,
      fontSize: u,
      fontWeightLight: s,
      fontWeightRegular: f,
      fontWeightMedium: d,
      fontWeightBold: p,
      ...E,
    },
    S,
    { clone: !1 },
  );
}
const uE = 0.2,
  sE = 0.14,
  cE = 0.12;
function Ge(...a) {
  return [
    `${a[0]}px ${a[1]}px ${a[2]}px ${a[3]}px rgba(0,0,0,${uE})`,
    `${a[4]}px ${a[5]}px ${a[6]}px ${a[7]}px rgba(0,0,0,${sE})`,
    `${a[8]}px ${a[9]}px ${a[10]}px ${a[11]}px rgba(0,0,0,${cE})`,
  ].join(",");
}
const fE = [
    "none",
    Ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  dE = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Cy = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Eg(a) {
  return `${Math.round(a)}ms`;
}
function hE(a) {
  if (!a) return 0;
  const r = a / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function pE(a) {
  const r = { ...dE, ...a.easing },
    i = { ...Cy, ...a.duration };
  return {
    getAutoHeightDuration: hE,
    create: (s = ["all"], f = {}) => {
      const {
        duration: d = i.standard,
        easing: p = r.easeInOut,
        delay: g = 0,
        ...m
      } = f;
      return (Array.isArray(s) ? s : [s])
        .map(
          (b) =>
            `${b} ${typeof d == "string" ? d : Eg(d)} ${p} ${typeof g == "string" ? g : Eg(g)}`,
        )
        .join(",");
    },
    ...a,
    easing: r,
    duration: i,
  };
}
const mE = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function gE(a) {
  return (
    On(a) ||
    typeof a > "u" ||
    typeof a == "string" ||
    typeof a == "boolean" ||
    typeof a == "number" ||
    Array.isArray(a)
  );
}
function Ty(a = {}) {
  const r = { ...a };
  function i(u) {
    const s = Object.entries(u);
    for (let f = 0; f < s.length; f++) {
      const [d, p] = s[f];
      !gE(p) || d.startsWith("unstable_")
        ? delete u[d]
        : On(p) && ((u[d] = { ...p }), i(u[d]));
    }
  }
  return (
    i(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function of(a = {}, ...r) {
  const {
    breakpoints: i,
    mixins: u = {},
    spacing: s,
    palette: f = {},
    transitions: d = {},
    typography: p = {},
    shape: g,
    ...m
  } = a;
  if (a.vars) throw new Error(cl(20));
  const b = Lf(f),
    S = wi(a);
  let x = Qt(S, {
    mixins: iE(S.breakpoints, u),
    palette: b,
    shadows: fE.slice(),
    typography: Ey(b, p),
    transitions: pE(d),
    zIndex: { ...mE },
  });
  return (
    (x = Qt(x, m)),
    (x = r.reduce((R, T) => Qt(R, T), x)),
    (x.unstable_sxConfig = {
      ...Mi,
      ...(m == null ? void 0 : m.unstable_sxConfig),
    }),
    (x.unstable_sx = function (T) {
      return Na({ sx: T, theme: this });
    }),
    (x.toRuntimeSource = Ty),
    x
  );
}
function uf(a) {
  let r;
  return (
    a < 1 ? (r = 5.11916 * a ** 2) : (r = 4.5 * Math.log(a + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const yE = [...Array(25)].map((a, r) => {
  if (r === 0) return "none";
  const i = uf(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Ay(a) {
  return {
    inputPlaceholder: a === "dark" ? 0.5 : 0.42,
    inputUnderline: a === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: a === "dark" ? 0.2 : 0.12,
    switchTrack: a === "dark" ? 0.3 : 0.38,
  };
}
function Ry(a) {
  return a === "dark" ? yE : [];
}
function vE(a) {
  const { palette: r = { mode: "light" }, opacity: i, overlays: u, ...s } = a,
    f = Lf(r);
  return {
    palette: f,
    opacity: { ...Ay(f.mode), ...i },
    overlays: u || Ry(f.mode),
    ...s,
  };
}
function bE(a) {
  var r;
  return (
    !!a[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!a[0].match(/sxConfig$/) ||
    (a[0] === "palette" &&
      !!((r = a[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const SE = (a) => [
    ...[...Array(25)].map((r, i) => `--${a ? `${a}-` : ""}overlays-${i}`),
    `--${a ? `${a}-` : ""}palette-AppBar-darkBg`,
    `--${a ? `${a}-` : ""}palette-AppBar-darkColor`,
  ],
  xE = (a) => (r, i) => {
    const u = a.rootSelector || ":root",
      s = a.colorSchemeSelector;
    let f = s;
    if (
      (s === "class" && (f = ".%s"),
      s === "data" && (f = "[data-%s]"),
      s != null &&
        s.startsWith("data-") &&
        !s.includes("%s") &&
        (f = `[${s}="%s"]`),
      a.defaultColorScheme === r)
    ) {
      if (r === "dark") {
        const d = {};
        return (
          SE(a.cssVarPrefix).forEach((p) => {
            (d[p] = i[p]), delete i[p];
          }),
          f === "media"
            ? { [u]: i, "@media (prefers-color-scheme: dark)": { [u]: d } }
            : f
              ? { [f.replace("%s", r)]: d, [`${u}, ${f.replace("%s", r)}`]: i }
              : { [u]: { ...i, ...d } }
        );
      }
      if (f && f !== "media") return `${u}, ${f.replace("%s", String(r))}`;
    } else if (r) {
      if (f === "media")
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [u]: i } };
      if (f) return f.replace("%s", String(r));
    }
    return u;
  };
function EE(a, r) {
  r.forEach((i) => {
    a[i] || (a[i] = {});
  });
}
function L(a, r, i) {
  !a[r] && i && (a[r] = i);
}
function hi(a) {
  return typeof a != "string" || !a.startsWith("hsl") ? a : hy(a);
}
function In(a, r) {
  `${r}Channel` in a || (a[`${r}Channel`] = di(hi(a[r])));
}
function CE(a) {
  return typeof a == "number"
    ? `${a}px`
    : typeof a == "string" || typeof a == "function" || Array.isArray(a)
      ? a
      : "8px";
}
const Cn = (a) => {
    try {
      return a();
    } catch {}
  },
  TE = (a = "mui") => Rx(a);
function Jc(a, r, i, u) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const s = u === "dark" ? "dark" : "light";
  if (!i) {
    a[u] = vE({
      ...r,
      palette: { mode: s, ...(r == null ? void 0 : r.palette) },
    });
    return;
  }
  const { palette: f, ...d } = of({
    ...i,
    palette: { mode: s, ...(r == null ? void 0 : r.palette) },
  });
  return (
    (a[u] = {
      ...r,
      palette: f,
      opacity: { ...Ay(s), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || Ry(s),
    }),
    d
  );
}
function AE(a = {}, ...r) {
  const {
      colorSchemes: i = { light: !0 },
      defaultColorScheme: u,
      disableCssColorScheme: s = !1,
      cssVarPrefix: f = "mui",
      shouldSkipGeneratingVar: d = bE,
      colorSchemeSelector: p = i.light && i.dark ? "media" : void 0,
      rootSelector: g = ":root",
      ...m
    } = a,
    b = Object.keys(i)[0],
    S = u || (i.light && b !== "light" ? "light" : b),
    x = TE(f),
    { [S]: R, light: T, dark: E, ..._ } = i,
    z = { ..._ };
  let H = R;
  if (
    (((S === "dark" && !("dark" in i)) || (S === "light" && !("light" in i))) &&
      (H = !0),
    !H)
  )
    throw new Error(cl(21, S));
  const k = Jc(z, H, m, S);
  T && !z.light && Jc(z, T, void 0, "light"),
    E && !z.dark && Jc(z, E, void 0, "dark");
  let U = {
    defaultColorScheme: S,
    ...k,
    cssVarPrefix: f,
    colorSchemeSelector: p,
    rootSelector: g,
    getCssVar: x,
    colorSchemes: z,
    font: { ...rE(k.typography), ...k.font },
    spacing: CE(m.spacing),
  };
  Object.keys(U.colorSchemes).forEach((Z) => {
    const v = U.colorSchemes[Z].palette,
      Q = (F) => {
        const te = F.split("-"),
          ce = te[1],
          de = te[2];
        return x(F, v[ce][de]);
      };
    if (
      (v.mode === "light" &&
        (L(v.common, "background", "#fff"),
        L(v.common, "onBackground", "#000")),
      v.mode === "dark" &&
        (L(v.common, "background", "#000"),
        L(v.common, "onBackground", "#fff")),
      EE(v, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      v.mode === "light")
    ) {
      L(v.Alert, "errorColor", $e(v.error.light, 0.6)),
        L(v.Alert, "infoColor", $e(v.info.light, 0.6)),
        L(v.Alert, "successColor", $e(v.success.light, 0.6)),
        L(v.Alert, "warningColor", $e(v.warning.light, 0.6)),
        L(v.Alert, "errorFilledBg", Q("palette-error-main")),
        L(v.Alert, "infoFilledBg", Q("palette-info-main")),
        L(v.Alert, "successFilledBg", Q("palette-success-main")),
        L(v.Alert, "warningFilledBg", Q("palette-warning-main")),
        L(
          v.Alert,
          "errorFilledColor",
          Cn(() => v.getContrastText(v.error.main)),
        ),
        L(
          v.Alert,
          "infoFilledColor",
          Cn(() => v.getContrastText(v.info.main)),
        ),
        L(
          v.Alert,
          "successFilledColor",
          Cn(() => v.getContrastText(v.success.main)),
        ),
        L(
          v.Alert,
          "warningFilledColor",
          Cn(() => v.getContrastText(v.warning.main)),
        ),
        L(v.Alert, "errorStandardBg", He(v.error.light, 0.9)),
        L(v.Alert, "infoStandardBg", He(v.info.light, 0.9)),
        L(v.Alert, "successStandardBg", He(v.success.light, 0.9)),
        L(v.Alert, "warningStandardBg", He(v.warning.light, 0.9)),
        L(v.Alert, "errorIconColor", Q("palette-error-main")),
        L(v.Alert, "infoIconColor", Q("palette-info-main")),
        L(v.Alert, "successIconColor", Q("palette-success-main")),
        L(v.Alert, "warningIconColor", Q("palette-warning-main")),
        L(v.AppBar, "defaultBg", Q("palette-grey-100")),
        L(v.Avatar, "defaultBg", Q("palette-grey-400")),
        L(v.Button, "inheritContainedBg", Q("palette-grey-300")),
        L(v.Button, "inheritContainedHoverBg", Q("palette-grey-A100")),
        L(v.Chip, "defaultBorder", Q("palette-grey-400")),
        L(v.Chip, "defaultAvatarColor", Q("palette-grey-700")),
        L(v.Chip, "defaultIconColor", Q("palette-grey-700")),
        L(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        L(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        L(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        L(v.LinearProgress, "primaryBg", He(v.primary.main, 0.62)),
        L(v.LinearProgress, "secondaryBg", He(v.secondary.main, 0.62)),
        L(v.LinearProgress, "errorBg", He(v.error.main, 0.62)),
        L(v.LinearProgress, "infoBg", He(v.info.main, 0.62)),
        L(v.LinearProgress, "successBg", He(v.success.main, 0.62)),
        L(v.LinearProgress, "warningBg", He(v.warning.main, 0.62)),
        L(v.Skeleton, "bg", `rgba(${Q("palette-text-primaryChannel")} / 0.11)`),
        L(v.Slider, "primaryTrack", He(v.primary.main, 0.62)),
        L(v.Slider, "secondaryTrack", He(v.secondary.main, 0.62)),
        L(v.Slider, "errorTrack", He(v.error.main, 0.62)),
        L(v.Slider, "infoTrack", He(v.info.main, 0.62)),
        L(v.Slider, "successTrack", He(v.success.main, 0.62)),
        L(v.Slider, "warningTrack", He(v.warning.main, 0.62));
      const F = Po(v.background.default, 0.8);
      L(v.SnackbarContent, "bg", F),
        L(
          v.SnackbarContent,
          "color",
          Cn(() => v.getContrastText(F)),
        ),
        L(v.SpeedDialAction, "fabHoverBg", Po(v.background.paper, 0.15)),
        L(v.StepConnector, "border", Q("palette-grey-400")),
        L(v.StepContent, "border", Q("palette-grey-400")),
        L(v.Switch, "defaultColor", Q("palette-common-white")),
        L(v.Switch, "defaultDisabledColor", Q("palette-grey-100")),
        L(v.Switch, "primaryDisabledColor", He(v.primary.main, 0.62)),
        L(v.Switch, "secondaryDisabledColor", He(v.secondary.main, 0.62)),
        L(v.Switch, "errorDisabledColor", He(v.error.main, 0.62)),
        L(v.Switch, "infoDisabledColor", He(v.info.main, 0.62)),
        L(v.Switch, "successDisabledColor", He(v.success.main, 0.62)),
        L(v.Switch, "warningDisabledColor", He(v.warning.main, 0.62)),
        L(v.TableCell, "border", He(Zo(v.divider, 1), 0.88)),
        L(v.Tooltip, "bg", Zo(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      L(v.Alert, "errorColor", He(v.error.light, 0.6)),
        L(v.Alert, "infoColor", He(v.info.light, 0.6)),
        L(v.Alert, "successColor", He(v.success.light, 0.6)),
        L(v.Alert, "warningColor", He(v.warning.light, 0.6)),
        L(v.Alert, "errorFilledBg", Q("palette-error-dark")),
        L(v.Alert, "infoFilledBg", Q("palette-info-dark")),
        L(v.Alert, "successFilledBg", Q("palette-success-dark")),
        L(v.Alert, "warningFilledBg", Q("palette-warning-dark")),
        L(
          v.Alert,
          "errorFilledColor",
          Cn(() => v.getContrastText(v.error.dark)),
        ),
        L(
          v.Alert,
          "infoFilledColor",
          Cn(() => v.getContrastText(v.info.dark)),
        ),
        L(
          v.Alert,
          "successFilledColor",
          Cn(() => v.getContrastText(v.success.dark)),
        ),
        L(
          v.Alert,
          "warningFilledColor",
          Cn(() => v.getContrastText(v.warning.dark)),
        ),
        L(v.Alert, "errorStandardBg", $e(v.error.light, 0.9)),
        L(v.Alert, "infoStandardBg", $e(v.info.light, 0.9)),
        L(v.Alert, "successStandardBg", $e(v.success.light, 0.9)),
        L(v.Alert, "warningStandardBg", $e(v.warning.light, 0.9)),
        L(v.Alert, "errorIconColor", Q("palette-error-main")),
        L(v.Alert, "infoIconColor", Q("palette-info-main")),
        L(v.Alert, "successIconColor", Q("palette-success-main")),
        L(v.Alert, "warningIconColor", Q("palette-warning-main")),
        L(v.AppBar, "defaultBg", Q("palette-grey-900")),
        L(v.AppBar, "darkBg", Q("palette-background-paper")),
        L(v.AppBar, "darkColor", Q("palette-text-primary")),
        L(v.Avatar, "defaultBg", Q("palette-grey-600")),
        L(v.Button, "inheritContainedBg", Q("palette-grey-800")),
        L(v.Button, "inheritContainedHoverBg", Q("palette-grey-700")),
        L(v.Chip, "defaultBorder", Q("palette-grey-700")),
        L(v.Chip, "defaultAvatarColor", Q("palette-grey-300")),
        L(v.Chip, "defaultIconColor", Q("palette-grey-300")),
        L(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        L(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        L(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        L(v.LinearProgress, "primaryBg", $e(v.primary.main, 0.5)),
        L(v.LinearProgress, "secondaryBg", $e(v.secondary.main, 0.5)),
        L(v.LinearProgress, "errorBg", $e(v.error.main, 0.5)),
        L(v.LinearProgress, "infoBg", $e(v.info.main, 0.5)),
        L(v.LinearProgress, "successBg", $e(v.success.main, 0.5)),
        L(v.LinearProgress, "warningBg", $e(v.warning.main, 0.5)),
        L(v.Skeleton, "bg", `rgba(${Q("palette-text-primaryChannel")} / 0.13)`),
        L(v.Slider, "primaryTrack", $e(v.primary.main, 0.5)),
        L(v.Slider, "secondaryTrack", $e(v.secondary.main, 0.5)),
        L(v.Slider, "errorTrack", $e(v.error.main, 0.5)),
        L(v.Slider, "infoTrack", $e(v.info.main, 0.5)),
        L(v.Slider, "successTrack", $e(v.success.main, 0.5)),
        L(v.Slider, "warningTrack", $e(v.warning.main, 0.5));
      const F = Po(v.background.default, 0.98);
      L(v.SnackbarContent, "bg", F),
        L(
          v.SnackbarContent,
          "color",
          Cn(() => v.getContrastText(F)),
        ),
        L(v.SpeedDialAction, "fabHoverBg", Po(v.background.paper, 0.15)),
        L(v.StepConnector, "border", Q("palette-grey-600")),
        L(v.StepContent, "border", Q("palette-grey-600")),
        L(v.Switch, "defaultColor", Q("palette-grey-300")),
        L(v.Switch, "defaultDisabledColor", Q("palette-grey-600")),
        L(v.Switch, "primaryDisabledColor", $e(v.primary.main, 0.55)),
        L(v.Switch, "secondaryDisabledColor", $e(v.secondary.main, 0.55)),
        L(v.Switch, "errorDisabledColor", $e(v.error.main, 0.55)),
        L(v.Switch, "infoDisabledColor", $e(v.info.main, 0.55)),
        L(v.Switch, "successDisabledColor", $e(v.success.main, 0.55)),
        L(v.Switch, "warningDisabledColor", $e(v.warning.main, 0.55)),
        L(v.TableCell, "border", $e(Zo(v.divider, 1), 0.68)),
        L(v.Tooltip, "bg", Zo(v.grey[700], 0.92));
    }
    In(v.background, "default"),
      In(v.background, "paper"),
      In(v.common, "background"),
      In(v.common, "onBackground"),
      In(v, "divider"),
      Object.keys(v).forEach((F) => {
        const te = v[F];
        F !== "tonalOffset" &&
          te &&
          typeof te == "object" &&
          (te.main && L(v[F], "mainChannel", di(hi(te.main))),
          te.light && L(v[F], "lightChannel", di(hi(te.light))),
          te.dark && L(v[F], "darkChannel", di(hi(te.dark))),
          te.contrastText &&
            L(v[F], "contrastTextChannel", di(hi(te.contrastText))),
          F === "text" && (In(v[F], "primary"), In(v[F], "secondary")),
          F === "action" &&
            (te.active && In(v[F], "active"),
            te.selected && In(v[F], "selected")));
      });
  }),
    (U = r.reduce((Z, v) => Qt(Z, v), U));
  const M = {
      prefix: f,
      disableCssColorScheme: s,
      shouldSkipGeneratingVar: d,
      getSelector: xE(U),
    },
    { vars: G, generateThemeVars: P, generateStyleSheets: ee } = wx(U, M);
  return (
    (U.vars = G),
    Object.entries(U.colorSchemes[U.defaultColorScheme]).forEach(([Z, v]) => {
      U[Z] = v;
    }),
    (U.generateThemeVars = P),
    (U.generateStyleSheets = ee),
    (U.generateSpacing = function () {
      return ay(m.spacing, Df(this));
    }),
    (U.getColorSchemeSelector = Dx(p)),
    (U.spacing = U.generateSpacing()),
    (U.shouldSkipGeneratingVar = d),
    (U.unstable_sxConfig = {
      ...Mi,
      ...(m == null ? void 0 : m.unstable_sxConfig),
    }),
    (U.unstable_sx = function (v) {
      return Na({ sx: v, theme: this });
    }),
    (U.toRuntimeSource = Ty),
    U
  );
}
function Cg(a, r, i) {
  a.colorSchemes &&
    i &&
    (a.colorSchemes[r] = {
      ...(i !== !0 && i),
      palette: Lf({ ...(i === !0 ? {} : i.palette), mode: r }),
    });
}
function wu(a = {}, ...r) {
  const {
      palette: i,
      cssVariables: u = !1,
      colorSchemes: s = i ? void 0 : { light: !0 },
      defaultColorScheme: f = i == null ? void 0 : i.mode,
      ...d
    } = a,
    p = f || "light",
    g = s == null ? void 0 : s[p],
    m = {
      ...s,
      ...(i
        ? { [p]: { ...(typeof g != "boolean" && g), palette: i } }
        : void 0),
    };
  if (u === !1) {
    if (!("colorSchemes" in a)) return of(a, ...r);
    let b = i;
    "palette" in a ||
      (m[p] &&
        (m[p] !== !0
          ? (b = m[p].palette)
          : p === "dark" && (b = { mode: "dark" })));
    const S = of({ ...a, palette: b }, ...r);
    return (
      (S.defaultColorScheme = p),
      (S.colorSchemes = m),
      S.palette.mode === "light" &&
        ((S.colorSchemes.light = {
          ...(m.light !== !0 && m.light),
          palette: S.palette,
        }),
        Cg(S, "dark", m.dark)),
      S.palette.mode === "dark" &&
        ((S.colorSchemes.dark = {
          ...(m.dark !== !0 && m.dark),
          palette: S.palette,
        }),
        Cg(S, "light", m.light)),
      S
    );
  }
  return (
    !i && !("light" in m) && p === "light" && (m.light = !0),
    AE(
      {
        ...d,
        colorSchemes: m,
        defaultColorScheme: p,
        ...(typeof u != "boolean" && u),
      },
      ...r,
    )
  );
}
const qf = wu();
function Gf() {
  const a = Di(qf);
  return a[wn] || a;
}
function RE(a) {
  return a !== "ownerState" && a !== "theme" && a !== "sx" && a !== "as";
}
const Oy = (a) => RE(a) && a !== "classes",
  _e = sy({ themeId: wn, defaultTheme: qf, rootShouldForwardProp: Oy });
function Tg({ theme: a, ...r }) {
  const i = wn in a ? a[wn] : void 0;
  return B.jsx(vy, { ...r, themeId: i ? wn : void 0, theme: i || a });
}
const Wo = {
    attribute: "data-mui-color-scheme",
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode",
  },
  {
    CssVarsProvider: OE,
    useColorScheme: vA,
    getInitColorSchemeScript: bA,
  } = Ax({
    themeId: wn,
    theme: () => wu({ cssVariables: !0 }),
    colorSchemeStorageKey: Wo.colorSchemeStorageKey,
    modeStorageKey: Wo.modeStorageKey,
    defaultColorScheme: {
      light: Wo.defaultLightColorScheme,
      dark: Wo.defaultDarkColorScheme,
    },
    resolveTheme: (a) => {
      const r = { ...a, typography: Ey(a.palette, a.typography) };
      return (
        (r.unstable_sx = function (u) {
          return Na({ sx: u, theme: this });
        }),
        r
      );
    },
  }),
  ME = OE;
function wE({ theme: a, ...r }) {
  return typeof a == "function"
    ? B.jsx(Tg, { theme: a, ...r })
    : "colorSchemes" in (wn in a ? a[wn] : a)
      ? B.jsx(ME, { theme: a, ...r })
      : B.jsx(Tg, { theme: a, ...r });
}
function DE(a) {
  return B.jsx(NS, { ...a, defaultTheme: qf, themeId: wn });
}
function My(a) {
  return function (i) {
    return B.jsx(DE, {
      styles: typeof a == "function" ? (u) => a({ theme: u, ...i }) : a,
    });
  };
}
function zE() {
  return _f;
}
const Ot = bx;
function yt(a) {
  return vx(a);
}
function _E(a) {
  return Ct("MuiSvgIcon", a);
}
Mt("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const NE = (a) => {
    const { color: r, fontSize: i, classes: u } = a,
      s = {
        root: ["root", r !== "inherit" && `color${je(r)}`, `fontSize${je(i)}`],
      };
    return wt(s, _E, u);
  },
  BE = _e("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        i.color !== "inherit" && r[`color${je(i.color)}`],
        r[`fontSize${je(i.fontSize)}`],
      ];
    },
  })(
    Ot(({ theme: a }) => {
      var r, i, u, s, f, d, p, g, m, b, S, x, R, T;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (s = (r = a.transitions) == null ? void 0 : r.create) == null
            ? void 0
            : s.call(r, "fill", {
                duration:
                  (u =
                    (i = (a.vars ?? a).transitions) == null
                      ? void 0
                      : i.duration) == null
                    ? void 0
                    : u.shorter,
              }),
        variants: [
          { props: (E) => !E.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((d = (f = a.typography) == null ? void 0 : f.pxToRem) == null
                  ? void 0
                  : d.call(f, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((g = (p = a.typography) == null ? void 0 : p.pxToRem) == null
                  ? void 0
                  : g.call(p, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((b = (m = a.typography) == null ? void 0 : m.pxToRem) == null
                  ? void 0
                  : b.call(m, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((a.vars ?? a).palette)
            .filter(([, E]) => E && E.main)
            .map(([E]) => {
              var _, z;
              return {
                props: { color: E },
                style: {
                  color:
                    (z = (_ = (a.vars ?? a).palette) == null ? void 0 : _[E]) ==
                    null
                      ? void 0
                      : z.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (x = (S = (a.vars ?? a).palette) == null ? void 0 : S.action) ==
                null
                  ? void 0
                  : x.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (T = (R = (a.vars ?? a).palette) == null ? void 0 : R.action) ==
                null
                  ? void 0
                  : T.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    }),
  ),
  sf = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiSvgIcon" }),
      {
        children: s,
        className: f,
        color: d = "inherit",
        component: p = "svg",
        fontSize: g = "medium",
        htmlColor: m,
        inheritViewBox: b = !1,
        titleAccess: S,
        viewBox: x = "0 0 24 24",
        ...R
      } = u,
      T = A.isValidElement(s) && s.type === "svg",
      E = {
        ...u,
        color: d,
        component: p,
        fontSize: g,
        instanceFontSize: r.fontSize,
        inheritViewBox: b,
        viewBox: x,
        hasSvgAsChild: T,
      },
      _ = {};
    b || (_.viewBox = x);
    const z = NE(E);
    return B.jsxs(BE, {
      as: p,
      className: ze(z.root, f),
      focusable: "false",
      color: m,
      "aria-hidden": S ? void 0 : !0,
      role: S ? "img" : void 0,
      ref: i,
      ..._,
      ...R,
      ...(T && s.props),
      ownerState: E,
      children: [
        T ? s.props.children : s,
        S ? B.jsx("title", { children: S }) : null,
      ],
    });
  });
sf.muiName = "SvgIcon";
function wy(a, r) {
  function i(u, s) {
    return B.jsx(sf, { "data-testid": `${r}Icon`, ref: s, ...u, children: a });
  }
  return (i.muiName = sf.muiName), A.memo(A.forwardRef(i));
}
function Dy(a, r) {
  if (a == null) return {};
  var i = {};
  for (var u in a)
    if ({}.hasOwnProperty.call(a, u)) {
      if (r.indexOf(u) !== -1) continue;
      i[u] = a[u];
    }
  return i;
}
function cf(a, r) {
  return (
    (cf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, u) {
          return (i.__proto__ = u), i;
        }),
    cf(a, r)
  );
}
function zy(a, r) {
  (a.prototype = Object.create(r.prototype)),
    (a.prototype.constructor = a),
    cf(a, r);
}
var UE = $g();
const Jo = kg(UE),
  Ag = { disabled: !1 },
  hu = Mn.createContext(null);
var jE = function (r) {
    return r.scrollTop;
  },
  pi = "unmounted",
  il = "exited",
  ol = "entering",
  Fl = "entered",
  ff = "exiting",
  la = (function (a) {
    zy(r, a);
    function r(u, s) {
      var f;
      f = a.call(this, u, s) || this;
      var d = s,
        p = d && !d.isMounting ? u.enter : u.appear,
        g;
      return (
        (f.appearStatus = null),
        u.in
          ? p
            ? ((g = il), (f.appearStatus = ol))
            : (g = Fl)
          : u.unmountOnExit || u.mountOnEnter
            ? (g = pi)
            : (g = il),
        (f.state = { status: g }),
        (f.nextCallback = null),
        f
      );
    }
    r.getDerivedStateFromProps = function (s, f) {
      var d = s.in;
      return d && f.status === pi ? { status: il } : null;
    };
    var i = r.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (s) {
        var f = null;
        if (s !== this.props) {
          var d = this.state.status;
          this.props.in
            ? d !== ol && d !== Fl && (f = ol)
            : (d === ol || d === Fl) && (f = ff);
        }
        this.updateStatus(!1, f);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var s = this.props.timeout,
          f,
          d,
          p;
        return (
          (f = d = p = s),
          s != null &&
            typeof s != "number" &&
            ((f = s.exit),
            (d = s.enter),
            (p = s.appear !== void 0 ? s.appear : d)),
          { exit: f, enter: d, appear: p }
        );
      }),
      (i.updateStatus = function (s, f) {
        if ((s === void 0 && (s = !1), f !== null))
          if ((this.cancelNextCallback(), f === ol)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var d = this.props.nodeRef
                ? this.props.nodeRef.current
                : Jo.findDOMNode(this);
              d && jE(d);
            }
            this.performEnter(s);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === il &&
            this.setState({ status: pi });
      }),
      (i.performEnter = function (s) {
        var f = this,
          d = this.props.enter,
          p = this.context ? this.context.isMounting : s,
          g = this.props.nodeRef ? [p] : [Jo.findDOMNode(this), p],
          m = g[0],
          b = g[1],
          S = this.getTimeouts(),
          x = p ? S.appear : S.enter;
        if ((!s && !d) || Ag.disabled) {
          this.safeSetState({ status: Fl }, function () {
            f.props.onEntered(m);
          });
          return;
        }
        this.props.onEnter(m, b),
          this.safeSetState({ status: ol }, function () {
            f.props.onEntering(m, b),
              f.onTransitionEnd(x, function () {
                f.safeSetState({ status: Fl }, function () {
                  f.props.onEntered(m, b);
                });
              });
          });
      }),
      (i.performExit = function () {
        var s = this,
          f = this.props.exit,
          d = this.getTimeouts(),
          p = this.props.nodeRef ? void 0 : Jo.findDOMNode(this);
        if (!f || Ag.disabled) {
          this.safeSetState({ status: il }, function () {
            s.props.onExited(p);
          });
          return;
        }
        this.props.onExit(p),
          this.safeSetState({ status: ff }, function () {
            s.props.onExiting(p),
              s.onTransitionEnd(d.exit, function () {
                s.safeSetState({ status: il }, function () {
                  s.props.onExited(p);
                });
              });
          });
      }),
      (i.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (s, f) {
        (f = this.setNextCallback(f)), this.setState(s, f);
      }),
      (i.setNextCallback = function (s) {
        var f = this,
          d = !0;
        return (
          (this.nextCallback = function (p) {
            d && ((d = !1), (f.nextCallback = null), s(p));
          }),
          (this.nextCallback.cancel = function () {
            d = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (s, f) {
        this.setNextCallback(f);
        var d = this.props.nodeRef
            ? this.props.nodeRef.current
            : Jo.findDOMNode(this),
          p = s == null && !this.props.addEndListener;
        if (!d || p) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var g = this.props.nodeRef
              ? [this.nextCallback]
              : [d, this.nextCallback],
            m = g[0],
            b = g[1];
          this.props.addEndListener(m, b);
        }
        s != null && setTimeout(this.nextCallback, s);
      }),
      (i.render = function () {
        var s = this.state.status;
        if (s === pi) return null;
        var f = this.props,
          d = f.children;
        f.in,
          f.mountOnEnter,
          f.unmountOnExit,
          f.appear,
          f.enter,
          f.exit,
          f.timeout,
          f.addEndListener,
          f.onEnter,
          f.onEntering,
          f.onEntered,
          f.onExit,
          f.onExiting,
          f.onExited,
          f.nodeRef;
        var p = Dy(f, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Mn.createElement(
          hu.Provider,
          { value: null },
          typeof d == "function"
            ? d(s, p)
            : Mn.cloneElement(Mn.Children.only(d), p),
        );
      }),
      r
    );
  })(Mn.Component);
la.contextType = hu;
la.propTypes = {};
function Jl() {}
la.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Jl,
  onEntering: Jl,
  onEntered: Jl,
  onExit: Jl,
  onExiting: Jl,
  onExited: Jl,
};
la.UNMOUNTED = pi;
la.EXITED = il;
la.ENTERING = ol;
la.ENTERED = Fl;
la.EXITING = ff;
function kE(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return a;
}
function Vf(a, r) {
  var i = function (f) {
      return r && A.isValidElement(f) ? r(f) : f;
    },
    u = Object.create(null);
  return (
    a &&
      A.Children.map(a, function (s) {
        return s;
      }).forEach(function (s) {
        u[s.key] = i(s);
      }),
    u
  );
}
function $E(a, r) {
  (a = a || {}), (r = r || {});
  function i(b) {
    return b in r ? r[b] : a[b];
  }
  var u = Object.create(null),
    s = [];
  for (var f in a) f in r ? s.length && ((u[f] = s), (s = [])) : s.push(f);
  var d,
    p = {};
  for (var g in r) {
    if (u[g])
      for (d = 0; d < u[g].length; d++) {
        var m = u[g][d];
        p[u[g][d]] = i(m);
      }
    p[g] = i(g);
  }
  for (d = 0; d < s.length; d++) p[s[d]] = i(s[d]);
  return p;
}
function ul(a, r, i) {
  return i[r] != null ? i[r] : a.props[r];
}
function HE(a, r) {
  return Vf(a.children, function (i) {
    return A.cloneElement(i, {
      onExited: r.bind(null, i),
      in: !0,
      appear: ul(i, "appear", a),
      enter: ul(i, "enter", a),
      exit: ul(i, "exit", a),
    });
  });
}
function LE(a, r, i) {
  var u = Vf(a.children),
    s = $E(r, u);
  return (
    Object.keys(s).forEach(function (f) {
      var d = s[f];
      if (A.isValidElement(d)) {
        var p = f in r,
          g = f in u,
          m = r[f],
          b = A.isValidElement(m) && !m.props.in;
        g && (!p || b)
          ? (s[f] = A.cloneElement(d, {
              onExited: i.bind(null, d),
              in: !0,
              exit: ul(d, "exit", a),
              enter: ul(d, "enter", a),
            }))
          : !g && p && !b
            ? (s[f] = A.cloneElement(d, { in: !1 }))
            : g &&
              p &&
              A.isValidElement(m) &&
              (s[f] = A.cloneElement(d, {
                onExited: i.bind(null, d),
                in: m.props.in,
                exit: ul(d, "exit", a),
                enter: ul(d, "enter", a),
              }));
      }
    }),
    s
  );
}
var qE =
    Object.values ||
    function (a) {
      return Object.keys(a).map(function (r) {
        return a[r];
      });
    },
  GE = {
    component: "div",
    childFactory: function (r) {
      return r;
    },
  },
  Yf = (function (a) {
    zy(r, a);
    function r(u, s) {
      var f;
      f = a.call(this, u, s) || this;
      var d = f.handleExited.bind(kE(f));
      return (
        (f.state = {
          contextValue: { isMounting: !0 },
          handleExited: d,
          firstRender: !0,
        }),
        f
      );
    }
    var i = r.prototype;
    return (
      (i.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (i.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (s, f) {
        var d = f.children,
          p = f.handleExited,
          g = f.firstRender;
        return { children: g ? HE(s, p) : LE(s, d, p), firstRender: !1 };
      }),
      (i.handleExited = function (s, f) {
        var d = Vf(this.props.children);
        s.key in d ||
          (s.props.onExited && s.props.onExited(f),
          this.mounted &&
            this.setState(function (p) {
              var g = uu({}, p.children);
              return delete g[s.key], { children: g };
            }));
      }),
      (i.render = function () {
        var s = this.props,
          f = s.component,
          d = s.childFactory,
          p = Dy(s, ["component", "childFactory"]),
          g = this.state.contextValue,
          m = qE(this.state.children).map(d);
        return (
          delete p.appear,
          delete p.enter,
          delete p.exit,
          f === null
            ? Mn.createElement(hu.Provider, { value: g }, m)
            : Mn.createElement(
                hu.Provider,
                { value: g },
                Mn.createElement(f, p, m),
              )
        );
      }),
      r
    );
  })(Mn.Component);
Yf.propTypes = {};
Yf.defaultProps = GE;
function Rg(a, r) {
  const { timeout: i, easing: u, style: s = {} } = a;
  return {
    duration:
      s.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing:
      s.transitionTimingFunction ?? (typeof u == "object" ? u[r.mode] : u),
    delay: s.transitionDelay,
  };
}
function VE(a) {
  return Ct("MuiCollapse", a);
}
Mt("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const YE = (a) => {
    const { orientation: r, classes: i } = a,
      u = {
        root: ["root", `${r}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${r}`],
        wrapperInner: ["wrapperInner", `${r}`],
      };
    return wt(u, VE, i);
  },
  XE = _e("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        r[i.orientation],
        i.state === "entered" && r.entered,
        i.state === "exited" && !i.in && i.collapsedSize === "0px" && r.hidden,
      ];
    },
  })(
    Ot(({ theme: a }) => ({
      height: 0,
      overflow: "hidden",
      transition: a.transitions.create("height"),
      variants: [
        {
          props: { orientation: "horizontal" },
          style: {
            height: "auto",
            width: 0,
            transition: a.transitions.create("width"),
          },
        },
        {
          props: { state: "entered" },
          style: { height: "auto", overflow: "visible" },
        },
        {
          props: { state: "entered", orientation: "horizontal" },
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: r }) =>
            r.state === "exited" && !r.in && r.collapsedSize === "0px",
          style: { visibility: "hidden" },
        },
      ],
    })),
  ),
  QE = _e("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (a, r) => r.wrapper,
  })({
    display: "flex",
    width: "100%",
    variants: [
      {
        props: { orientation: "horizontal" },
        style: { width: "auto", height: "100%" },
      },
    ],
  }),
  KE = _e("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (a, r) => r.wrapperInner,
  })({
    width: "100%",
    variants: [
      {
        props: { orientation: "horizontal" },
        style: { width: "auto", height: "100%" },
      },
    ],
  }),
  df = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiCollapse" }),
      {
        addEndListener: s,
        children: f,
        className: d,
        collapsedSize: p = "0px",
        component: g,
        easing: m,
        in: b,
        onEnter: S,
        onEntered: x,
        onEntering: R,
        onExit: T,
        onExited: E,
        onExiting: _,
        orientation: z = "vertical",
        style: H,
        timeout: k = Cy.standard,
        TransitionComponent: U = la,
        ...M
      } = u,
      G = { ...u, orientation: z, collapsedSize: p },
      P = YE(G),
      ee = Gf(),
      Z = my(),
      v = A.useRef(null),
      Q = A.useRef(),
      F = typeof p == "number" ? `${p}px` : p,
      te = z === "horizontal",
      ce = te ? "width" : "height",
      de = A.useRef(null),
      W = fu(i, de),
      ne = (J) => (Te) => {
        if (J) {
          const he = de.current;
          Te === void 0 ? J(he) : J(he, Te);
        }
      },
      ae = () =>
        v.current ? v.current[te ? "clientWidth" : "clientHeight"] : 0,
      se = ne((J, Te) => {
        v.current && te && (v.current.style.position = "absolute"),
          (J.style[ce] = F),
          S && S(J, Te);
      }),
      O = ne((J, Te) => {
        const he = ae();
        v.current && te && (v.current.style.position = "");
        const { duration: we, easing: Ee } = Rg(
          { style: H, timeout: k, easing: m },
          { mode: "enter" },
        );
        if (k === "auto") {
          const ot = ee.transitions.getAutoHeightDuration(he);
          (J.style.transitionDuration = `${ot}ms`), (Q.current = ot);
        } else
          J.style.transitionDuration = typeof we == "string" ? we : `${we}ms`;
        (J.style[ce] = `${he}px`),
          (J.style.transitionTimingFunction = Ee),
          R && R(J, Te);
      }),
      Y = ne((J, Te) => {
        (J.style[ce] = "auto"), x && x(J, Te);
      }),
      re = ne((J) => {
        (J.style[ce] = `${ae()}px`), T && T(J);
      }),
      ie = ne(E),
      I = ne((J) => {
        const Te = ae(),
          { duration: he, easing: we } = Rg(
            { style: H, timeout: k, easing: m },
            { mode: "exit" },
          );
        if (k === "auto") {
          const Ee = ee.transitions.getAutoHeightDuration(Te);
          (J.style.transitionDuration = `${Ee}ms`), (Q.current = Ee);
        } else
          J.style.transitionDuration = typeof he == "string" ? he : `${he}ms`;
        (J.style[ce] = F), (J.style.transitionTimingFunction = we), _ && _(J);
      }),
      pe = (J) => {
        k === "auto" && Z.start(Q.current || 0, J), s && s(de.current, J);
      };
    return B.jsx(U, {
      in: b,
      onEnter: se,
      onEntered: Y,
      onEntering: O,
      onExit: re,
      onExited: ie,
      onExiting: I,
      addEndListener: pe,
      nodeRef: de,
      timeout: k === "auto" ? null : k,
      ...M,
      children: (J, { ownerState: Te, ...he }) =>
        B.jsx(XE, {
          as: g,
          className: ze(
            P.root,
            d,
            { entered: P.entered, exited: !b && F === "0px" && P.hidden }[J],
          ),
          style: { [te ? "minWidth" : "minHeight"]: F, ...H },
          ref: W,
          ownerState: { ...G, state: J },
          ...he,
          children: B.jsx(QE, {
            ownerState: { ...G, state: J },
            className: P.wrapper,
            ref: v,
            children: B.jsx(KE, {
              ownerState: { ...G, state: J },
              className: P.wrapperInner,
              children: f,
            }),
          }),
        }),
    });
  });
df && (df.muiSupportAuto = !0);
function ZE(a) {
  return Ct("MuiPaper", a);
}
Mt("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const PE = (a) => {
    const { square: r, elevation: i, variant: u, classes: s } = a,
      f = {
        root: [
          "root",
          u,
          !r && "rounded",
          u === "elevation" && `elevation${i}`,
        ],
      };
    return wt(f, ZE, s);
  },
  WE = _e("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        r[i.variant],
        !i.square && r.rounded,
        i.variant === "elevation" && r[`elevation${i.elevation}`],
      ];
    },
  })(
    Ot(({ theme: a }) => ({
      backgroundColor: (a.vars || a).palette.background.paper,
      color: (a.vars || a).palette.text.primary,
      transition: a.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: r }) => !r.square,
          style: { borderRadius: a.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(a.vars || a).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    })),
  ),
  _y = A.forwardRef(function (r, i) {
    var R;
    const u = yt({ props: r, name: "MuiPaper" }),
      s = Gf(),
      {
        className: f,
        component: d = "div",
        elevation: p = 1,
        square: g = !1,
        variant: m = "elevation",
        ...b
      } = u,
      S = { ...u, component: d, elevation: p, square: g, variant: m },
      x = PE(S);
    return B.jsx(WE, {
      as: d,
      ownerState: S,
      className: ze(x.root, f),
      ref: i,
      ...b,
      style: {
        ...(m === "elevation" && {
          "--Paper-shadow": (s.vars || s).shadows[p],
          ...(s.vars && {
            "--Paper-overlay": (R = s.vars.overlays) == null ? void 0 : R[p],
          }),
          ...(!s.vars &&
            s.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${ta("#fff", uf(p))}, ${ta("#fff", uf(p))})`,
            }),
        }),
        ...b.style,
      },
    });
  }),
  Ny = A.createContext({});
function Og(a, r) {
  const {
      className: i,
      elementType: u,
      ownerState: s,
      externalForwardedProps: f,
      internalForwardedProps: d,
      shouldForwardComponentProp: p = !1,
      ...g
    } = r,
    {
      component: m,
      slots: b = { [a]: void 0 },
      slotProps: S = { [a]: void 0 },
      ...x
    } = f,
    R = b[a] || u,
    T = sx(S[a], s),
    {
      props: { component: E, ..._ },
      internalRef: z,
    } = ux({
      className: i,
      ...g,
      externalForwardedProps: a === "root" ? x : void 0,
      externalSlotProps: T,
    }),
    H = fu(z, T == null ? void 0 : T.ref, r.ref),
    k = a === "root" ? E || m : E,
    U = ix(
      R,
      {
        ...(a === "root" && !m && !b[a] && d),
        ...(a !== "root" && !b[a] && d),
        ..._,
        ...(k && !p && { as: k }),
        ...(k && p && { component: k }),
        ref: H,
      },
      s,
    );
  return [R, U];
}
function JE(a) {
  return Ct("MuiAccordion", a);
}
const Fo = Mt("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region",
  ]),
  FE = (a) => {
    const {
      classes: r,
      square: i,
      expanded: u,
      disabled: s,
      disableGutters: f,
    } = a;
    return wt(
      {
        root: [
          "root",
          !i && "rounded",
          u && "expanded",
          s && "disabled",
          !f && "gutters",
        ],
        heading: ["heading"],
        region: ["region"],
      },
      JE,
      r,
    );
  },
  IE = _e(_y, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        { [`& .${Fo.region}`]: r.region },
        r.root,
        !i.square && r.rounded,
        !i.disableGutters && r.gutters,
      ];
    },
  })(
    Ot(({ theme: a }) => {
      const r = { duration: a.transitions.duration.shortest };
      return {
        position: "relative",
        transition: a.transitions.create(["margin"], r),
        overflowAnchor: "none",
        "&::before": {
          position: "absolute",
          left: 0,
          top: -1,
          right: 0,
          height: 1,
          content: '""',
          opacity: 1,
          backgroundColor: (a.vars || a).palette.divider,
          transition: a.transitions.create(["opacity", "background-color"], r),
        },
        "&:first-of-type": { "&::before": { display: "none" } },
        [`&.${Fo.expanded}`]: {
          "&::before": { opacity: 0 },
          "&:first-of-type": { marginTop: 0 },
          "&:last-of-type": { marginBottom: 0 },
          "& + &": { "&::before": { display: "none" } },
        },
        [`&.${Fo.disabled}`]: {
          backgroundColor: (a.vars || a).palette.action.disabledBackground,
        },
      };
    }),
    Ot(({ theme: a }) => ({
      variants: [
        {
          props: (r) => !r.square,
          style: {
            borderRadius: 0,
            "&:first-of-type": {
              borderTopLeftRadius: (a.vars || a).shape.borderRadius,
              borderTopRightRadius: (a.vars || a).shape.borderRadius,
            },
            "&:last-of-type": {
              borderBottomLeftRadius: (a.vars || a).shape.borderRadius,
              borderBottomRightRadius: (a.vars || a).shape.borderRadius,
              "@supports (-ms-ime-align: auto)": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            },
          },
        },
        {
          props: (r) => !r.disableGutters,
          style: { [`&.${Fo.expanded}`]: { margin: "16px 0" } },
        },
      ],
    })),
  ),
  e2 = _e("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (a, r) => r.heading,
  })({ all: "unset" }),
  By = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiAccordion" }),
      {
        children: s,
        className: f,
        defaultExpanded: d = !1,
        disabled: p = !1,
        disableGutters: g = !1,
        expanded: m,
        onChange: b,
        square: S = !1,
        slots: x = {},
        slotProps: R = {},
        TransitionComponent: T,
        TransitionProps: E,
        ..._
      } = u,
      [z, H] = nx({
        controlled: m,
        default: d,
        name: "Accordion",
        state: "expanded",
      }),
      k = A.useCallback(
        (W) => {
          H(!z), b && b(W, !z);
        },
        [z, b, H],
      ),
      [U, ...M] = A.Children.toArray(s),
      G = A.useMemo(
        () => ({ expanded: z, disabled: p, disableGutters: g, toggle: k }),
        [z, p, g, k],
      ),
      P = { ...u, square: S, disabled: p, disableGutters: g, expanded: z },
      ee = FE(P),
      Z = { transition: T, ...x },
      v = { transition: E, ...R },
      Q = { slots: Z, slotProps: v },
      [F, te] = Og("heading", {
        elementType: e2,
        externalForwardedProps: Q,
        className: ee.heading,
        ownerState: P,
      }),
      [ce, de] = Og("transition", {
        elementType: df,
        externalForwardedProps: Q,
        ownerState: P,
      });
    return B.jsxs(IE, {
      className: ze(ee.root, f),
      ref: i,
      ownerState: P,
      square: S,
      ..._,
      children: [
        B.jsx(F, {
          ...te,
          children: B.jsx(Ny.Provider, { value: G, children: U }),
        }),
        B.jsx(ce, {
          in: z,
          timeout: "auto",
          ...de,
          children: B.jsx("div", {
            "aria-labelledby": U.props.id,
            id: U.props["aria-controls"],
            role: "region",
            className: ee.region,
            children: M,
          }),
        }),
      ],
    });
  });
function t2(a) {
  return Ct("MuiAccordionDetails", a);
}
Mt("MuiAccordionDetails", ["root"]);
const n2 = (a) => {
    const { classes: r } = a;
    return wt({ root: ["root"] }, t2, r);
  },
  a2 = _e("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (a, r) => r.root,
  })(Ot(({ theme: a }) => ({ padding: a.spacing(1, 2, 2) }))),
  Uy = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiAccordionDetails" }),
      { className: s, ...f } = u,
      d = u,
      p = n2(d);
    return B.jsx(a2, { className: ze(p.root, s), ref: i, ownerState: d, ...f });
  });
class pu {
  constructor() {
    ri(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new pu();
  }
  static use() {
    const r = py(pu.create).current,
      [i, u] = A.useState(!1);
    return (
      (r.shouldMount = i),
      (r.setShouldMount = u),
      A.useEffect(r.mountEffect, [i]),
      r
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = r2()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.pulsate(...r);
    });
  }
}
function l2() {
  return pu.use();
}
function r2() {
  let a, r;
  const i = new Promise((u, s) => {
    (a = u), (r = s);
  });
  return (i.resolve = a), (i.reject = r), i;
}
function i2(a) {
  const {
      className: r,
      classes: i,
      pulsate: u = !1,
      rippleX: s,
      rippleY: f,
      rippleSize: d,
      in: p,
      onExited: g,
      timeout: m,
    } = a,
    [b, S] = A.useState(!1),
    x = ze(r, i.ripple, i.rippleVisible, u && i.ripplePulsate),
    R = { width: d, height: d, top: -(d / 2) + f, left: -(d / 2) + s },
    T = ze(i.child, b && i.childLeaving, u && i.childPulsate);
  return (
    !p && !b && S(!0),
    A.useEffect(() => {
      if (!p && g != null) {
        const E = setTimeout(g, m);
        return () => {
          clearTimeout(E);
        };
      }
    }, [g, p, m]),
    B.jsx("span", {
      className: x,
      style: R,
      children: B.jsx("span", { className: T }),
    })
  );
}
const on = Mt("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  hf = 550,
  o2 = 80,
  u2 = Ai`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  s2 = Ai`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  c2 = Ai`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  f2 = _e("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  d2 = _e(i2, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${on.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${u2};
    animation-duration: ${hf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  &.${on.ripplePulsate} {
    animation-duration: ${({ theme: a }) => a.transitions.duration.shorter}ms;
  }

  & .${on.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${on.childLeaving} {
    opacity: 0;
    animation-name: ${s2};
    animation-duration: ${hf}ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
  }

  & .${on.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${c2};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a }) => a.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  h2 = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiTouchRipple" }),
      { center: s = !1, classes: f = {}, className: d, ...p } = u,
      [g, m] = A.useState([]),
      b = A.useRef(0),
      S = A.useRef(null);
    A.useEffect(() => {
      S.current && (S.current(), (S.current = null));
    }, [g]);
    const x = A.useRef(!1),
      R = my(),
      T = A.useRef(null),
      E = A.useRef(null),
      _ = A.useCallback(
        (U) => {
          const {
            pulsate: M,
            rippleX: G,
            rippleY: P,
            rippleSize: ee,
            cb: Z,
          } = U;
          m((v) => [
            ...v,
            B.jsx(
              d2,
              {
                classes: {
                  ripple: ze(f.ripple, on.ripple),
                  rippleVisible: ze(f.rippleVisible, on.rippleVisible),
                  ripplePulsate: ze(f.ripplePulsate, on.ripplePulsate),
                  child: ze(f.child, on.child),
                  childLeaving: ze(f.childLeaving, on.childLeaving),
                  childPulsate: ze(f.childPulsate, on.childPulsate),
                },
                timeout: hf,
                pulsate: M,
                rippleX: G,
                rippleY: P,
                rippleSize: ee,
              },
              b.current,
            ),
          ]),
            (b.current += 1),
            (S.current = Z);
        },
        [f],
      ),
      z = A.useCallback(
        (U = {}, M = {}, G = () => {}) => {
          const {
            pulsate: P = !1,
            center: ee = s || M.pulsate,
            fakeElement: Z = !1,
          } = M;
          if ((U == null ? void 0 : U.type) === "mousedown" && x.current) {
            x.current = !1;
            return;
          }
          (U == null ? void 0 : U.type) === "touchstart" && (x.current = !0);
          const v = Z ? null : E.current,
            Q = v
              ? v.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let F, te, ce;
          if (
            ee ||
            U === void 0 ||
            (U.clientX === 0 && U.clientY === 0) ||
            (!U.clientX && !U.touches)
          )
            (F = Math.round(Q.width / 2)), (te = Math.round(Q.height / 2));
          else {
            const { clientX: de, clientY: W } =
              U.touches && U.touches.length > 0 ? U.touches[0] : U;
            (F = Math.round(de - Q.left)), (te = Math.round(W - Q.top));
          }
          if (ee)
            (ce = Math.sqrt((2 * Q.width ** 2 + Q.height ** 2) / 3)),
              ce % 2 === 0 && (ce += 1);
          else {
            const de =
                Math.max(Math.abs((v ? v.clientWidth : 0) - F), F) * 2 + 2,
              W = Math.max(Math.abs((v ? v.clientHeight : 0) - te), te) * 2 + 2;
            ce = Math.sqrt(de ** 2 + W ** 2);
          }
          U != null && U.touches
            ? T.current === null &&
              ((T.current = () => {
                _({
                  pulsate: P,
                  rippleX: F,
                  rippleY: te,
                  rippleSize: ce,
                  cb: G,
                });
              }),
              R.start(o2, () => {
                T.current && (T.current(), (T.current = null));
              }))
            : _({ pulsate: P, rippleX: F, rippleY: te, rippleSize: ce, cb: G });
        },
        [s, _, R],
      ),
      H = A.useCallback(() => {
        z({}, { pulsate: !0 });
      }, [z]),
      k = A.useCallback(
        (U, M) => {
          if (
            (R.clear(),
            (U == null ? void 0 : U.type) === "touchend" && T.current)
          ) {
            T.current(),
              (T.current = null),
              R.start(0, () => {
                k(U, M);
              });
            return;
          }
          (T.current = null),
            m((G) => (G.length > 0 ? G.slice(1) : G)),
            (S.current = M);
        },
        [R],
      );
    return (
      A.useImperativeHandle(i, () => ({ pulsate: H, start: z, stop: k }), [
        H,
        z,
        k,
      ]),
      B.jsx(f2, {
        className: ze(on.root, f.root, d),
        ref: E,
        ...p,
        children: B.jsx(Yf, { component: null, exit: !0, children: g }),
      })
    );
  });
function p2(a) {
  return Ct("MuiButtonBase", a);
}
const m2 = Mt("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  g2 = (a) => {
    const {
        disabled: r,
        focusVisible: i,
        focusVisibleClassName: u,
        classes: s,
      } = a,
      d = wt({ root: ["root", r && "disabled", i && "focusVisible"] }, p2, s);
    return i && u && (d.root += ` ${u}`), d;
  },
  y2 = _e("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (a, r) => r.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${m2.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  jy = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiButtonBase" }),
      {
        action: s,
        centerRipple: f = !1,
        children: d,
        className: p,
        component: g = "button",
        disabled: m = !1,
        disableRipple: b = !1,
        disableTouchRipple: S = !1,
        focusRipple: x = !1,
        focusVisibleClassName: R,
        LinkComponent: T = "a",
        onBlur: E,
        onClick: _,
        onContextMenu: z,
        onDragLeave: H,
        onFocus: k,
        onFocusVisible: U,
        onKeyDown: M,
        onKeyUp: G,
        onMouseDown: P,
        onMouseLeave: ee,
        onMouseUp: Z,
        onTouchEnd: v,
        onTouchMove: Q,
        onTouchStart: F,
        tabIndex: te = 0,
        TouchRippleProps: ce,
        touchRippleRef: de,
        type: W,
        ...ne
      } = u,
      ae = A.useRef(null),
      se = l2(),
      O = fu(se.ref, de),
      [Y, re] = A.useState(!1);
    m && Y && re(!1),
      A.useImperativeHandle(
        s,
        () => ({
          focusVisible: () => {
            re(!0), ae.current.focus();
          },
        }),
        [],
      );
    const ie = se.shouldMount && !b && !m;
    A.useEffect(() => {
      Y && x && !b && se.pulsate();
    }, [b, x, Y, se]);
    const I = ea(se, "start", P, S),
      pe = ea(se, "stop", z, S),
      J = ea(se, "stop", H, S),
      Te = ea(se, "stop", Z, S),
      he = ea(
        se,
        "stop",
        (me) => {
          Y && me.preventDefault(), ee && ee(me);
        },
        S,
      ),
      we = ea(se, "start", F, S),
      Ee = ea(se, "stop", v, S),
      ot = ea(se, "stop", Q, S),
      gn = ea(
        se,
        "stop",
        (me) => {
          cg(me.target) || re(!1), E && E(me);
        },
        !1,
      ),
      Bt = lu((me) => {
        ae.current || (ae.current = me.currentTarget),
          cg(me.target) && (re(!0), U && U(me)),
          k && k(me);
      }),
      yn = () => {
        const me = ae.current;
        return g && g !== "button" && !(me.tagName === "A" && me.href);
      },
      Un = lu((me) => {
        x &&
          !me.repeat &&
          Y &&
          me.key === " " &&
          se.stop(me, () => {
            se.start(me);
          }),
          me.target === me.currentTarget &&
            yn() &&
            me.key === " " &&
            me.preventDefault(),
          M && M(me),
          me.target === me.currentTarget &&
            yn() &&
            me.key === "Enter" &&
            !m &&
            (me.preventDefault(), _ && _(me));
      }),
      Kt = lu((me) => {
        x &&
          me.key === " " &&
          Y &&
          !me.defaultPrevented &&
          se.stop(me, () => {
            se.pulsate(me);
          }),
          G && G(me),
          _ &&
            me.target === me.currentTarget &&
            yn() &&
            me.key === " " &&
            !me.defaultPrevented &&
            _(me);
      });
    let Je = g;
    Je === "button" && (ne.href || ne.to) && (Je = T);
    const vt = {};
    Je === "button"
      ? ((vt.type = W === void 0 ? "button" : W), (vt.disabled = m))
      : (!ne.href && !ne.to && (vt.role = "button"),
        m && (vt["aria-disabled"] = m));
    const cn = fu(i, ae),
      ia = {
        ...u,
        centerRipple: f,
        component: g,
        disabled: m,
        disableRipple: b,
        disableTouchRipple: S,
        focusRipple: x,
        tabIndex: te,
        focusVisible: Y,
      },
      oa = g2(ia);
    return B.jsxs(y2, {
      as: Je,
      className: ze(oa.root, p),
      ownerState: ia,
      onBlur: gn,
      onClick: _,
      onContextMenu: pe,
      onFocus: Bt,
      onKeyDown: Un,
      onKeyUp: Kt,
      onMouseDown: I,
      onMouseLeave: he,
      onMouseUp: Te,
      onDragLeave: J,
      onTouchEnd: Ee,
      onTouchMove: ot,
      onTouchStart: we,
      ref: cn,
      tabIndex: m ? -1 : te,
      type: W,
      ...vt,
      ...ne,
      children: [d, ie ? B.jsx(h2, { ref: O, center: f, ...ce }) : null],
    });
  });
function ea(a, r, i, u = !1) {
  return lu((s) => (i && i(s), u || a[r](s), !0));
}
function v2(a) {
  return Ct("MuiAccordionSummary", a);
}
const Il = Mt("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper",
  ]),
  b2 = (a) => {
    const { classes: r, expanded: i, disabled: u, disableGutters: s } = a;
    return wt(
      {
        root: ["root", i && "expanded", u && "disabled", !s && "gutters"],
        focusVisible: ["focusVisible"],
        content: ["content", i && "expanded", !s && "contentGutters"],
        expandIconWrapper: ["expandIconWrapper", i && "expanded"],
      },
      v2,
      r,
    );
  },
  S2 = _e(jy, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (a, r) => r.root,
  })(
    Ot(({ theme: a }) => {
      const r = { duration: a.transitions.duration.shortest };
      return {
        display: "flex",
        width: "100%",
        minHeight: 48,
        padding: a.spacing(0, 2),
        transition: a.transitions.create(["min-height", "background-color"], r),
        [`&.${Il.focusVisible}`]: {
          backgroundColor: (a.vars || a).palette.action.focus,
        },
        [`&.${Il.disabled}`]: {
          opacity: (a.vars || a).palette.action.disabledOpacity,
        },
        [`&:hover:not(.${Il.disabled})`]: { cursor: "pointer" },
        variants: [
          {
            props: (i) => !i.disableGutters,
            style: { [`&.${Il.expanded}`]: { minHeight: 64 } },
          },
        ],
      };
    }),
  ),
  x2 = _e("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (a, r) => r.content,
  })(
    Ot(({ theme: a }) => ({
      display: "flex",
      textAlign: "start",
      flexGrow: 1,
      margin: "12px 0",
      variants: [
        {
          props: (r) => !r.disableGutters,
          style: {
            transition: a.transitions.create(["margin"], {
              duration: a.transitions.duration.shortest,
            }),
            [`&.${Il.expanded}`]: { margin: "20px 0" },
          },
        },
      ],
    })),
  ),
  E2 = _e("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (a, r) => r.expandIconWrapper,
  })(
    Ot(({ theme: a }) => ({
      display: "flex",
      color: (a.vars || a).palette.action.active,
      transform: "rotate(0deg)",
      transition: a.transitions.create("transform", {
        duration: a.transitions.duration.shortest,
      }),
      [`&.${Il.expanded}`]: { transform: "rotate(180deg)" },
    })),
  ),
  ky = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiAccordionSummary" }),
      {
        children: s,
        className: f,
        expandIcon: d,
        focusVisibleClassName: p,
        onClick: g,
        ...m
      } = u,
      {
        disabled: b = !1,
        disableGutters: S,
        expanded: x,
        toggle: R,
      } = A.useContext(Ny),
      T = (z) => {
        R && R(z), g && g(z);
      },
      E = { ...u, expanded: x, disabled: b, disableGutters: S },
      _ = b2(E);
    return B.jsxs(S2, {
      focusRipple: !1,
      disableRipple: !0,
      disabled: b,
      "aria-expanded": x,
      className: ze(_.root, f),
      focusVisibleClassName: ze(_.focusVisible, p),
      onClick: T,
      ref: i,
      ownerState: E,
      ...m,
      children: [
        B.jsx(x2, { className: _.content, ownerState: E, children: s }),
        d &&
          B.jsx(E2, {
            className: _.expandIconWrapper,
            ownerState: E,
            children: d,
          }),
      ],
    });
  });
function C2(a) {
  return typeof a.main == "string";
}
function T2(a, r = []) {
  if (!C2(a)) return !1;
  for (const i of r)
    if (!a.hasOwnProperty(i) || typeof a[i] != "string") return !1;
  return !0;
}
function Xf(a = []) {
  return ([, r]) => r && T2(r, a);
}
function A2(a) {
  return Ct("MuiCircularProgress", a);
}
Mt("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const _a = 44,
  pf = Ai`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  mf = Ai`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  R2 =
    typeof pf != "string"
      ? Of`
        animation: ${pf} 1.4s linear infinite;
      `
      : null,
  O2 =
    typeof mf != "string"
      ? Of`
        animation: ${mf} 1.4s ease-in-out infinite;
      `
      : null,
  M2 = (a) => {
    const { classes: r, variant: i, color: u, disableShrink: s } = a,
      f = {
        root: ["root", i, `color${je(u)}`],
        svg: ["svg"],
        circle: ["circle", `circle${je(i)}`, s && "circleDisableShrink"],
      };
    return wt(f, A2, r);
  },
  w2 = _e("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [r.root, r[i.variant], r[`color${je(i.color)}`]];
    },
  })(
    Ot(({ theme: a }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: a.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: R2 || { animation: `${pf} 1.4s linear infinite` },
        },
        ...Object.entries(a.palette)
          .filter(Xf())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (a.vars || a).palette[r].main },
          })),
      ],
    })),
  ),
  D2 = _e("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (a, r) => r.svg,
  })({ display: "block" }),
  z2 = _e("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.circle,
        r[`circle${je(i.variant)}`],
        i.disableShrink && r.circleDisableShrink,
      ];
    },
  })(
    Ot(({ theme: a }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: a.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: r }) =>
            r.variant === "indeterminate" && !r.disableShrink,
          style: O2 || { animation: `${mf} 1.4s ease-in-out infinite` },
        },
      ],
    })),
  ),
  _2 = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiCircularProgress" }),
      {
        className: s,
        color: f = "primary",
        disableShrink: d = !1,
        size: p = 40,
        style: g,
        thickness: m = 3.6,
        value: b = 0,
        variant: S = "indeterminate",
        ...x
      } = u,
      R = {
        ...u,
        color: f,
        disableShrink: d,
        size: p,
        thickness: m,
        value: b,
        variant: S,
      },
      T = M2(R),
      E = {},
      _ = {},
      z = {};
    if (S === "determinate") {
      const H = 2 * Math.PI * ((_a - m) / 2);
      (E.strokeDasharray = H.toFixed(3)),
        (z["aria-valuenow"] = Math.round(b)),
        (E.strokeDashoffset = `${(((100 - b) / 100) * H).toFixed(3)}px`),
        (_.transform = "rotate(-90deg)");
    }
    return B.jsx(w2, {
      className: ze(T.root, s),
      style: { width: p, height: p, ..._, ...g },
      ownerState: R,
      ref: i,
      role: "progressbar",
      ...z,
      ...x,
      children: B.jsx(D2, {
        className: T.svg,
        ownerState: R,
        viewBox: `${_a / 2} ${_a / 2} ${_a} ${_a}`,
        children: B.jsx(z2, {
          className: T.circle,
          style: E,
          ownerState: R,
          cx: _a,
          cy: _a,
          r: (_a - m) / 2,
          fill: "none",
          strokeWidth: m,
        }),
      }),
    });
  });
function N2(a) {
  return Ct("MuiTypography", a);
}
Mt("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const B2 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  U2 = zE(),
  j2 = (a) => {
    const {
        align: r,
        gutterBottom: i,
        noWrap: u,
        paragraph: s,
        variant: f,
        classes: d,
      } = a,
      p = {
        root: [
          "root",
          f,
          a.align !== "inherit" && `align${je(r)}`,
          i && "gutterBottom",
          u && "noWrap",
          s && "paragraph",
        ],
      };
    return wt(p, N2, d);
  },
  k2 = _e("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        i.variant && r[i.variant],
        i.align !== "inherit" && r[`align${je(i.align)}`],
        i.noWrap && r.noWrap,
        i.gutterBottom && r.gutterBottom,
        i.paragraph && r.paragraph,
      ];
    },
  })(
    Ot(({ theme: a }) => {
      var r;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(a.typography)
            .filter(([i, u]) => i !== "inherit" && u && typeof u == "object")
            .map(([i, u]) => ({ props: { variant: i }, style: u })),
          ...Object.entries(a.palette)
            .filter(Xf())
            .map(([i]) => ({
              props: { color: i },
              style: { color: (a.vars || a).palette[i].main },
            })),
          ...Object.entries(((r = a.palette) == null ? void 0 : r.text) || {})
            .filter(([, i]) => typeof i == "string")
            .map(([i]) => ({
              props: { color: `text${je(i)}` },
              style: { color: (a.vars || a).palette.text[i] },
            })),
          {
            props: ({ ownerState: i }) => i.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: i }) => i.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: i }) => i.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: i }) => i.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    }),
  ),
  Mg = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  zn = A.forwardRef(function (r, i) {
    const { color: u, ...s } = yt({ props: r, name: "MuiTypography" }),
      f = !B2[u],
      d = U2({ ...s, ...(f && { color: u }) }),
      {
        align: p = "inherit",
        className: g,
        component: m,
        gutterBottom: b = !1,
        noWrap: S = !1,
        paragraph: x = !1,
        variant: R = "body1",
        variantMapping: T = Mg,
        ...E
      } = d,
      _ = {
        ...d,
        align: p,
        color: u,
        className: g,
        component: m,
        gutterBottom: b,
        noWrap: S,
        paragraph: x,
        variant: R,
        variantMapping: T,
      },
      z = m || (x ? "p" : T[R] || Mg[R]) || "span",
      H = j2(_);
    return B.jsx(k2, {
      as: z,
      ref: i,
      className: ze(H.root, g),
      ...E,
      ownerState: _,
      style: {
        ...(p !== "inherit" && { "--Typography-textAlign": p }),
        ...E.style,
      },
    });
  }),
  $2 = Mt("MuiBox", ["root"]),
  H2 = wu(),
  _n = jS({
    themeId: wn,
    defaultTheme: H2,
    defaultClassName: $2.root,
    generateClassName: ry.generate,
  });
function L2(a) {
  return Ct("MuiButton", a);
}
const ll = Mt("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  q2 = A.createContext({}),
  G2 = A.createContext(void 0),
  V2 = (a) => {
    const {
        color: r,
        disableElevation: i,
        fullWidth: u,
        size: s,
        variant: f,
        loading: d,
        loadingPosition: p,
        classes: g,
      } = a,
      m = {
        root: [
          "root",
          d && "loading",
          f,
          `${f}${je(r)}`,
          `size${je(s)}`,
          `${f}Size${je(s)}`,
          `color${je(r)}`,
          i && "disableElevation",
          u && "fullWidth",
          d && `loadingPosition${je(p)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${je(s)}`],
        endIcon: ["icon", "endIcon", `iconSize${je(s)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      b = wt(m, L2, g);
    return { ...g, ...b };
  },
  $y = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  Y2 = _e(jy, {
    shouldForwardProp: (a) => Oy(a) || a === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        r[i.variant],
        r[`${i.variant}${je(i.color)}`],
        r[`size${je(i.size)}`],
        r[`${i.variant}Size${je(i.size)}`],
        i.color === "inherit" && r.colorInherit,
        i.disableElevation && r.disableElevation,
        i.fullWidth && r.fullWidth,
        i.loading && r.loading,
      ];
    },
  })(
    Ot(({ theme: a }) => {
      const r =
          a.palette.mode === "light"
            ? a.palette.grey[300]
            : a.palette.grey[800],
        i =
          a.palette.mode === "light"
            ? a.palette.grey.A100
            : a.palette.grey[700];
      return {
        ...a.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (a.vars || a).shape.borderRadius,
        transition: a.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: a.transitions.duration.short },
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${ll.disabled}`]: { color: (a.vars || a).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (a.vars || a).shadows[2],
              "&:hover": {
                boxShadow: (a.vars || a).shadows[4],
                "@media (hover: none)": { boxShadow: (a.vars || a).shadows[2] },
              },
              "&:active": { boxShadow: (a.vars || a).shadows[8] },
              [`&.${ll.focusVisible}`]: { boxShadow: (a.vars || a).shadows[6] },
              [`&.${ll.disabled}`]: {
                color: (a.vars || a).palette.action.disabled,
                boxShadow: (a.vars || a).shadows[0],
                backgroundColor: (a.vars || a).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${ll.disabled}`]: {
                border: `1px solid ${(a.vars || a).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(a.palette)
            .filter(Xf())
            .map(([u]) => ({
              props: { color: u },
              style: {
                "--variant-textColor": (a.vars || a).palette[u].main,
                "--variant-outlinedColor": (a.vars || a).palette[u].main,
                "--variant-outlinedBorder": a.vars
                  ? `rgba(${a.vars.palette[u].mainChannel} / 0.5)`
                  : ta(a.palette[u].main, 0.5),
                "--variant-containedColor": (a.vars || a).palette[u]
                  .contrastText,
                "--variant-containedBg": (a.vars || a).palette[u].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (a.vars || a).palette[u].dark,
                    "--variant-textBg": a.vars
                      ? `rgba(${a.vars.palette[u].mainChannel} / ${a.vars.palette.action.hoverOpacity})`
                      : ta(a.palette[u].main, a.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (a.vars || a).palette[u].main,
                    "--variant-outlinedBg": a.vars
                      ? `rgba(${a.vars.palette[u].mainChannel} / ${a.vars.palette.action.hoverOpacity})`
                      : ta(a.palette[u].main, a.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": a.vars
                ? a.vars.palette.Button.inheritContainedBg
                : r,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": a.vars
                    ? a.vars.palette.Button.inheritContainedHoverBg
                    : i,
                  "--variant-textBg": a.vars
                    ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`
                    : ta(a.palette.text.primary, a.palette.action.hoverOpacity),
                  "--variant-outlinedBg": a.vars
                    ? `rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`
                    : ta(a.palette.text.primary, a.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: a.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: a.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${ll.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${ll.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: a.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: a.transitions.duration.short },
              ),
              [`&.${ll.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    }),
  ),
  X2 = _e("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.startIcon,
        i.loading && r.startIconLoadingStart,
        r[`iconSize${je(i.size)}`],
      ];
    },
  })(({ theme: a }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: a.transitions.create(["opacity"], {
            duration: a.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...$y,
    ],
  })),
  Q2 = _e("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.endIcon,
        i.loading && r.endIconLoadingEnd,
        r[`iconSize${je(i.size)}`],
      ];
    },
  })(({ theme: a }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: a.transitions.create(["opacity"], {
            duration: a.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...$y,
    ],
  })),
  K2 = _e("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (a, r) => r.loadingIndicator,
  })(({ theme: a }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [
      { props: { loading: !0 }, style: { display: "flex" } },
      { props: { loadingPosition: "start" }, style: { left: 14 } },
      {
        props: { loadingPosition: "start", size: "small" },
        style: { left: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "start" },
        style: { left: 6 },
      },
      {
        props: { loadingPosition: "center" },
        style: {
          left: "50%",
          transform: "translate(-50%)",
          color: (a.vars || a).palette.action.disabled,
        },
      },
      { props: { loadingPosition: "end" }, style: { right: 14 } },
      {
        props: { loadingPosition: "end", size: "small" },
        style: { right: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "end" },
        style: { right: 6 },
      },
      {
        props: { loadingPosition: "start", fullWidth: !0 },
        style: { position: "relative", left: -10 },
      },
      {
        props: { loadingPosition: "end", fullWidth: !0 },
        style: { position: "relative", right: -10 },
      },
    ],
  })),
  wg = _e("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (a, r) => r.loadingIconPlaceholder,
  })({ display: "inline-block", width: "1em", height: "1em" }),
  Z2 = A.forwardRef(function (r, i) {
    const u = A.useContext(q2),
      s = A.useContext(G2),
      f = bi(u, r),
      d = yt({ props: f, name: "MuiButton" }),
      {
        children: p,
        color: g = "primary",
        component: m = "button",
        className: b,
        disabled: S = !1,
        disableElevation: x = !1,
        disableFocusRipple: R = !1,
        endIcon: T,
        focusVisibleClassName: E,
        fullWidth: _ = !1,
        id: z,
        loading: H = null,
        loadingIndicator: k,
        loadingPosition: U = "center",
        size: M = "medium",
        startIcon: G,
        type: P,
        variant: ee = "text",
        ...Z
      } = d,
      v = tx(z),
      Q = k ?? B.jsx(_2, { "aria-labelledby": v, color: "inherit", size: 16 }),
      F = {
        ...d,
        color: g,
        component: m,
        disabled: S,
        disableElevation: x,
        disableFocusRipple: R,
        fullWidth: _,
        loading: H,
        loadingIndicator: Q,
        loadingPosition: U,
        size: M,
        type: P,
        variant: ee,
      },
      te = V2(F),
      ce =
        (G || (H && U === "start")) &&
        B.jsx(X2, {
          className: te.startIcon,
          ownerState: F,
          children:
            G ||
            B.jsx(wg, { className: te.loadingIconPlaceholder, ownerState: F }),
        }),
      de =
        (T || (H && U === "end")) &&
        B.jsx(Q2, {
          className: te.endIcon,
          ownerState: F,
          children:
            T ||
            B.jsx(wg, { className: te.loadingIconPlaceholder, ownerState: F }),
        }),
      W = s || "",
      ne =
        typeof H == "boolean"
          ? B.jsx("span", {
              className: te.loadingWrapper,
              style: { display: "contents" },
              children:
                H &&
                B.jsx(K2, {
                  className: te.loadingIndicator,
                  ownerState: F,
                  children: Q,
                }),
            })
          : null;
    return B.jsxs(Y2, {
      ownerState: F,
      className: ze(u.className, te.root, b, W),
      component: m,
      disabled: S || H,
      focusRipple: !R,
      focusVisibleClassName: ze(te.focusVisible, E),
      ref: i,
      type: P,
      id: v,
      ...Z,
      classes: te,
      children: [ce, U !== "end" && ne, p, U === "end" && ne, de],
    });
  });
function P2(a) {
  return Ct("MuiCard", a);
}
Mt("MuiCard", ["root"]);
const W2 = (a) => {
    const { classes: r } = a;
    return wt({ root: ["root"] }, P2, r);
  },
  J2 = _e(_y, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (a, r) => r.root,
  })({ overflow: "hidden" }),
  Du = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiCard" }),
      { className: s, raised: f = !1, ...d } = u,
      p = { ...u, raised: f },
      g = W2(p);
    return B.jsx(J2, {
      className: ze(g.root, s),
      elevation: f ? 8 : void 0,
      ref: i,
      ownerState: p,
      ...d,
    });
  });
function F2(a) {
  return Ct("MuiCardContent", a);
}
Mt("MuiCardContent", ["root"]);
const I2 = (a) => {
    const { classes: r } = a;
    return wt({ root: ["root"] }, F2, r);
  },
  eC = _e("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (a, r) => r.root,
  })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
  Qf = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiCardContent" }),
      { className: s, component: f = "div", ...d } = u,
      p = { ...u, component: f },
      g = I2(p);
    return B.jsx(eC, {
      as: f,
      className: ze(g.root, s),
      ownerState: p,
      ref: i,
      ...d,
    });
  }),
  tC = Ux({
    createStyledComponent: _e("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (a, r) => {
        const { ownerState: i } = a;
        return [
          r.root,
          r[`maxWidth${je(String(i.maxWidth))}`],
          i.fixed && r.fixed,
          i.disableGutters && r.disableGutters,
        ];
      },
    }),
    useThemeProps: (a) => yt({ props: a, name: "MuiContainer" }),
  }),
  gf = typeof My({}) == "function",
  nC = (a, r) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...(r && !a.vars && { colorScheme: a.palette.mode }),
  }),
  aC = (a) => ({
    color: (a.vars || a).palette.text.primary,
    ...a.typography.body1,
    backgroundColor: (a.vars || a).palette.background.default,
    "@media print": { backgroundColor: (a.vars || a).palette.common.white },
  }),
  Hy = (a, r = !1) => {
    var f, d;
    const i = {};
    r &&
      a.colorSchemes &&
      typeof a.getColorSchemeSelector == "function" &&
      Object.entries(a.colorSchemes).forEach(([p, g]) => {
        var b, S;
        const m = a.getColorSchemeSelector(p);
        m.startsWith("@")
          ? (i[m] = {
              ":root": {
                colorScheme: (b = g.palette) == null ? void 0 : b.mode,
              },
            })
          : (i[m.replace(/\s*&/, "")] = {
              colorScheme: (S = g.palette) == null ? void 0 : S.mode,
            });
      });
    let u = {
      html: nC(a, r),
      "*, *::before, *::after": { boxSizing: "inherit" },
      "strong, b": { fontWeight: a.typography.fontWeightBold },
      body: {
        margin: 0,
        ...aC(a),
        "&::backdrop": {
          backgroundColor: (a.vars || a).palette.background.default,
        },
      },
      ...i,
    };
    const s =
      (d = (f = a.components) == null ? void 0 : f.MuiCssBaseline) == null
        ? void 0
        : d.styleOverrides;
    return s && (u = [u, s]), u;
  },
  ru = "mui-ecs",
  lC = (a) => {
    const r = Hy(a, !1),
      i = Array.isArray(r) ? r[0] : r;
    return (
      !a.vars &&
        i &&
        (i.html[`:root:has(${ru})`] = { colorScheme: a.palette.mode }),
      a.colorSchemes &&
        Object.entries(a.colorSchemes).forEach(([u, s]) => {
          var d, p;
          const f = a.getColorSchemeSelector(u);
          f.startsWith("@")
            ? (i[f] = {
                [`:root:not(:has(.${ru}))`]: {
                  colorScheme: (d = s.palette) == null ? void 0 : d.mode,
                },
              })
            : (i[f.replace(/\s*&/, "")] = {
                [`&:not(:has(.${ru}))`]: {
                  colorScheme: (p = s.palette) == null ? void 0 : p.mode,
                },
              });
        }),
      r
    );
  },
  rC = My(
    gf
      ? ({ theme: a, enableColorScheme: r }) => Hy(a, r)
      : ({ theme: a }) => lC(a),
  );
function iC(a) {
  const r = yt({ props: a, name: "MuiCssBaseline" }),
    { children: i, enableColorScheme: u = !1 } = r;
  return B.jsxs(A.Fragment, {
    children: [
      gf && B.jsx(rC, { enableColorScheme: u }),
      !gf && !u && B.jsx("span", { className: ru, style: { display: "none" } }),
      i,
    ],
  });
}
function oC(a) {
  return Ct("MuiDivider", a);
}
Mt("MuiDivider", [
  "root",
  "absolute",
  "fullWidth",
  "inset",
  "middle",
  "flexItem",
  "light",
  "vertical",
  "withChildren",
  "withChildrenVertical",
  "textAlignRight",
  "textAlignLeft",
  "wrapper",
  "wrapperVertical",
]);
const uC = (a) => {
    const {
      absolute: r,
      children: i,
      classes: u,
      flexItem: s,
      light: f,
      orientation: d,
      textAlign: p,
      variant: g,
    } = a;
    return wt(
      {
        root: [
          "root",
          r && "absolute",
          g,
          f && "light",
          d === "vertical" && "vertical",
          s && "flexItem",
          i && "withChildren",
          i && d === "vertical" && "withChildrenVertical",
          p === "right" && d !== "vertical" && "textAlignRight",
          p === "left" && d !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", d === "vertical" && "wrapperVertical"],
      },
      oC,
      u,
    );
  },
  sC = _e("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [
        r.root,
        i.absolute && r.absolute,
        r[i.variant],
        i.light && r.light,
        i.orientation === "vertical" && r.vertical,
        i.flexItem && r.flexItem,
        i.children && r.withChildren,
        i.children && i.orientation === "vertical" && r.withChildrenVertical,
        i.textAlign === "right" &&
          i.orientation !== "vertical" &&
          r.textAlignRight,
        i.textAlign === "left" &&
          i.orientation !== "vertical" &&
          r.textAlignLeft,
      ];
    },
  })(
    Ot(({ theme: a }) => ({
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: "solid",
      borderColor: (a.vars || a).palette.divider,
      borderBottomWidth: "thin",
      variants: [
        {
          props: { absolute: !0 },
          style: { position: "absolute", bottom: 0, left: 0, width: "100%" },
        },
        {
          props: { light: !0 },
          style: {
            borderColor: a.vars
              ? `rgba(${a.vars.palette.dividerChannel} / 0.08)`
              : ta(a.palette.divider, 0.08),
          },
        },
        { props: { variant: "inset" }, style: { marginLeft: 72 } },
        {
          props: { variant: "middle", orientation: "horizontal" },
          style: { marginLeft: a.spacing(2), marginRight: a.spacing(2) },
        },
        {
          props: { variant: "middle", orientation: "vertical" },
          style: { marginTop: a.spacing(1), marginBottom: a.spacing(1) },
        },
        {
          props: { orientation: "vertical" },
          style: {
            height: "100%",
            borderBottomWidth: 0,
            borderRightWidth: "thin",
          },
        },
        {
          props: { flexItem: !0 },
          style: { alignSelf: "stretch", height: "auto" },
        },
        {
          props: ({ ownerState: r }) => !!r.children,
          style: {
            display: "flex",
            textAlign: "center",
            border: 0,
            borderTopStyle: "solid",
            borderLeftStyle: "solid",
            "&::before, &::after": { content: '""', alignSelf: "center" },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.children && r.orientation !== "vertical",
          style: {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(a.vars || a).palette.divider}`,
              borderTopStyle: "inherit",
            },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.orientation === "vertical" && r.children,
          style: {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(a.vars || a).palette.divider}`,
              borderLeftStyle: "inherit",
            },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.textAlign === "right" && r.orientation !== "vertical",
          style: {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        },
        {
          props: ({ ownerState: r }) =>
            r.textAlign === "left" && r.orientation !== "vertical",
          style: {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          },
        },
      ],
    })),
  ),
  cC = _e("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (a, r) => {
      const { ownerState: i } = a;
      return [r.wrapper, i.orientation === "vertical" && r.wrapperVertical];
    },
  })(
    Ot(({ theme: a }) => ({
      display: "inline-block",
      paddingLeft: `calc(${a.spacing(1)} * 1.2)`,
      paddingRight: `calc(${a.spacing(1)} * 1.2)`,
      whiteSpace: "nowrap",
      variants: [
        {
          props: { orientation: "vertical" },
          style: {
            paddingTop: `calc(${a.spacing(1)} * 1.2)`,
            paddingBottom: `calc(${a.spacing(1)} * 1.2)`,
          },
        },
      ],
    })),
  ),
  mu = A.forwardRef(function (r, i) {
    const u = yt({ props: r, name: "MuiDivider" }),
      {
        absolute: s = !1,
        children: f,
        className: d,
        orientation: p = "horizontal",
        component: g = f || p === "vertical" ? "div" : "hr",
        flexItem: m = !1,
        light: b = !1,
        role: S = g !== "hr" ? "separator" : void 0,
        textAlign: x = "center",
        variant: R = "fullWidth",
        ...T
      } = u,
      E = {
        ...u,
        absolute: s,
        component: g,
        flexItem: m,
        light: b,
        orientation: p,
        role: S,
        textAlign: x,
        variant: R,
      },
      _ = uC(E);
    return B.jsx(sC, {
      as: g,
      className: ze(_.root, d),
      role: S,
      ref: i,
      ownerState: E,
      "aria-orientation":
        S === "separator" && (g !== "hr" || p === "vertical") ? p : void 0,
      ...T,
      children: f
        ? B.jsx(cC, { className: _.wrapper, ownerState: E, children: f })
        : null,
    });
  });
mu && (mu.muiSkipListHighlight = !0);
const sl = Wx({
    createStyledComponent: _e("div", {
      name: "MuiGrid2",
      slot: "Root",
      overridesResolver: (a, r) => {
        const { ownerState: i } = a;
        return [r.root, i.container && r.container];
      },
    }),
    componentName: "MuiGrid2",
    useThemeProps: (a) => yt({ props: a, name: "MuiGrid2" }),
    useTheme: Gf,
  }),
  fC = wu({
    cssVariables: !0,
    typography: { fontFamily: ["Poppins", "Sans-serif"].join(",") },
    palette: {
      primary: { main: "#556cd6" },
      secondary: { main: "#19857b" },
      error: { main: rl.A400 },
      background: { default: "#000" },
      text: { primary: "#fff" },
    },
  });
var ci = {},
  Dg;
function dC() {
  if (Dg) return ci;
  (Dg = 1),
    Object.defineProperty(ci, "__esModule", { value: !0 }),
    (ci.parse = d),
    (ci.serialize = m);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    u = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    f = (() => {
      const x = function () {};
      return (x.prototype = Object.create(null)), x;
    })();
  function d(x, R) {
    const T = new f(),
      E = x.length;
    if (E < 2) return T;
    const _ = (R == null ? void 0 : R.decode) || b;
    let z = 0;
    do {
      const H = x.indexOf("=", z);
      if (H === -1) break;
      const k = x.indexOf(";", z),
        U = k === -1 ? E : k;
      if (H > U) {
        z = x.lastIndexOf(";", H - 1) + 1;
        continue;
      }
      const M = p(x, z, H),
        G = g(x, H, M),
        P = x.slice(M, G);
      if (T[P] === void 0) {
        let ee = p(x, H + 1, U),
          Z = g(x, U, ee);
        const v = _(x.slice(ee, Z));
        T[P] = v;
      }
      z = U + 1;
    } while (z < E);
    return T;
  }
  function p(x, R, T) {
    do {
      const E = x.charCodeAt(R);
      if (E !== 32 && E !== 9) return R;
    } while (++R < T);
    return T;
  }
  function g(x, R, T) {
    for (; R > T; ) {
      const E = x.charCodeAt(--R);
      if (E !== 32 && E !== 9) return R + 1;
    }
    return T;
  }
  function m(x, R, T) {
    const E = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!a.test(x)) throw new TypeError(`argument name is invalid: ${x}`);
    const _ = E(R);
    if (!r.test(_)) throw new TypeError(`argument val is invalid: ${R}`);
    let z = x + "=" + _;
    if (!T) return z;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      z += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!i.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      z += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!u.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      z += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!S(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      z += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && (z += "; HttpOnly"),
      T.secure && (z += "; Secure"),
      T.partitioned && (z += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          z += "; Priority=Low";
          break;
        case "medium":
          z += "; Priority=Medium";
          break;
        case "high":
          z += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          z += "; SameSite=Strict";
          break;
        case "lax":
          z += "; SameSite=Lax";
          break;
        case "none":
          z += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return z;
  }
  function b(x) {
    if (x.indexOf("%") === -1) return x;
    try {
      return decodeURIComponent(x);
    } catch {
      return x;
    }
  }
  function S(x) {
    return s.call(x) === "[object Date]";
  }
  return ci;
}
dC();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var zg = "popstate";
function hC(a = {}) {
  function r(u, s) {
    let { pathname: f, search: d, hash: p } = u.location;
    return yf(
      "",
      { pathname: f, search: d, hash: p },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function i(u, s) {
    return typeof s == "string" ? s : xi(s);
  }
  return mC(r, i, null, a);
}
function Xe(a, r) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(r);
}
function Nn(a, r) {
  if (!a) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function pC() {
  return Math.random().toString(36).substring(2, 10);
}
function _g(a, r) {
  return { usr: a.state, key: a.key, idx: r };
}
function yf(a, r, i = null, u) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? ir(r) : r),
    state: i,
    key: (r && r.key) || u || pC(),
  };
}
function xi({ pathname: a = "/", search: r = "", hash: i = "" }) {
  return (
    r && r !== "?" && (a += r.charAt(0) === "?" ? r : "?" + r),
    i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i),
    a
  );
}
function ir(a) {
  let r = {};
  if (a) {
    let i = a.indexOf("#");
    i >= 0 && ((r.hash = a.substring(i)), (a = a.substring(0, i)));
    let u = a.indexOf("?");
    u >= 0 && ((r.search = a.substring(u)), (a = a.substring(0, u))),
      a && (r.pathname = a);
  }
  return r;
}
function mC(a, r, i, u = {}) {
  let { window: s = document.defaultView, v5Compat: f = !1 } = u,
    d = s.history,
    p = "POP",
    g = null,
    m = b();
  m == null && ((m = 0), d.replaceState({ ...d.state, idx: m }, ""));
  function b() {
    return (d.state || { idx: null }).idx;
  }
  function S() {
    p = "POP";
    let _ = b(),
      z = _ == null ? null : _ - m;
    (m = _), g && g({ action: p, location: E.location, delta: z });
  }
  function x(_, z) {
    p = "PUSH";
    let H = yf(E.location, _, z);
    m = b() + 1;
    let k = _g(H, m),
      U = E.createHref(H);
    try {
      d.pushState(k, "", U);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      s.location.assign(U);
    }
    f && g && g({ action: p, location: E.location, delta: 1 });
  }
  function R(_, z) {
    p = "REPLACE";
    let H = yf(E.location, _, z);
    m = b();
    let k = _g(H, m),
      U = E.createHref(H);
    d.replaceState(k, "", U),
      f && g && g({ action: p, location: E.location, delta: 0 });
  }
  function T(_) {
    let z = s.location.origin !== "null" ? s.location.origin : s.location.href,
      H = typeof _ == "string" ? _ : xi(_);
    return (
      (H = H.replace(/ $/, "%20")),
      Xe(
        z,
        `No window.location.(origin|href) available to create URL for href: ${H}`,
      ),
      new URL(H, z)
    );
  }
  let E = {
    get action() {
      return p;
    },
    get location() {
      return a(s, d);
    },
    listen(_) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(zg, S),
        (g = _),
        () => {
          s.removeEventListener(zg, S), (g = null);
        }
      );
    },
    createHref(_) {
      return r(s, _);
    },
    createURL: T,
    encodeLocation(_) {
      let z = T(_);
      return { pathname: z.pathname, search: z.search, hash: z.hash };
    },
    push: x,
    replace: R,
    go(_) {
      return d.go(_);
    },
  };
  return E;
}
function Ly(a, r, i = "/") {
  return gC(a, r, i, !1);
}
function gC(a, r, i, u) {
  let s = typeof r == "string" ? ir(r) : r,
    f = Ua(s.pathname || "/", i);
  if (f == null) return null;
  let d = qy(a);
  yC(d);
  let p = null;
  for (let g = 0; p == null && g < d.length; ++g) {
    let m = MC(f);
    p = RC(d[g], m, u);
  }
  return p;
}
function qy(a, r = [], i = [], u = "") {
  let s = (f, d, p) => {
    let g = {
      relativePath: p === void 0 ? f.path || "" : p,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    g.relativePath.startsWith("/") &&
      (Xe(
        g.relativePath.startsWith(u),
        `Absolute route path "${g.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (g.relativePath = g.relativePath.slice(u.length)));
    let m = na([u, g.relativePath]),
      b = i.concat(g);
    f.children &&
      f.children.length > 0 &&
      (Xe(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      qy(f.children, r, b, m)),
      !(f.path == null && !f.index) &&
        r.push({ path: m, score: TC(m, f.index), routesMeta: b });
  };
  return (
    a.forEach((f, d) => {
      var p;
      if (f.path === "" || !((p = f.path) != null && p.includes("?"))) s(f, d);
      else for (let g of Gy(f.path)) s(f, d, g);
    }),
    r
  );
}
function Gy(a) {
  let r = a.split("/");
  if (r.length === 0) return [];
  let [i, ...u] = r,
    s = i.endsWith("?"),
    f = i.replace(/\?$/, "");
  if (u.length === 0) return s ? [f, ""] : [f];
  let d = Gy(u.join("/")),
    p = [];
  return (
    p.push(...d.map((g) => (g === "" ? f : [f, g].join("/")))),
    s && p.push(...d),
    p.map((g) => (a.startsWith("/") && g === "" ? "/" : g))
  );
}
function yC(a) {
  a.sort((r, i) =>
    r.score !== i.score
      ? i.score - r.score
      : AC(
          r.routesMeta.map((u) => u.childrenIndex),
          i.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
var vC = /^:[\w-]+$/,
  bC = 3,
  SC = 2,
  xC = 1,
  EC = 10,
  CC = -2,
  Ng = (a) => a === "*";
function TC(a, r) {
  let i = a.split("/"),
    u = i.length;
  return (
    i.some(Ng) && (u += CC),
    r && (u += SC),
    i
      .filter((s) => !Ng(s))
      .reduce((s, f) => s + (vC.test(f) ? bC : f === "" ? xC : EC), u)
  );
}
function AC(a, r) {
  return a.length === r.length && a.slice(0, -1).every((u, s) => u === r[s])
    ? a[a.length - 1] - r[r.length - 1]
    : 0;
}
function RC(a, r, i = !1) {
  let { routesMeta: u } = a,
    s = {},
    f = "/",
    d = [];
  for (let p = 0; p < u.length; ++p) {
    let g = u[p],
      m = p === u.length - 1,
      b = f === "/" ? r : r.slice(f.length) || "/",
      S = gu(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: m },
        b,
      ),
      x = g.route;
    if (
      (!S &&
        m &&
        i &&
        !u[u.length - 1].route.index &&
        (S = gu(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          b,
        )),
      !S)
    )
      return null;
    Object.assign(s, S.params),
      d.push({
        params: s,
        pathname: na([f, S.pathname]),
        pathnameBase: _C(na([f, S.pathnameBase])),
        route: x,
      }),
      S.pathnameBase !== "/" && (f = na([f, S.pathnameBase]));
  }
  return d;
}
function gu(a, r) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [i, u] = OC(a.path, a.caseSensitive, a.end),
    s = r.match(i);
  if (!s) return null;
  let f = s[0],
    d = f.replace(/(.)\/+$/, "$1"),
    p = s.slice(1);
  return {
    params: u.reduce((m, { paramName: b, isOptional: S }, x) => {
      if (b === "*") {
        let T = p[x] || "";
        d = f.slice(0, f.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const R = p[x];
      return (
        S && !R ? (m[b] = void 0) : (m[b] = (R || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: a,
  };
}
function OC(a, r = !1, i = !0) {
  Nn(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
  );
  let u = [],
    s =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, p, g) => (
            u.push({ paramName: p, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    a.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (s += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
        ? (s += "\\/*$")
        : a !== "" && a !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, r ? void 0 : "i"), u]
  );
}
function MC(a) {
  try {
    return a
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Nn(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      a
    );
  }
}
function Ua(a, r) {
  if (r === "/") return a;
  if (!a.toLowerCase().startsWith(r.toLowerCase())) return null;
  let i = r.endsWith("/") ? r.length - 1 : r.length,
    u = a.charAt(i);
  return u && u !== "/" ? null : a.slice(i) || "/";
}
function wC(a, r = "/") {
  let {
    pathname: i,
    search: u = "",
    hash: s = "",
  } = typeof a == "string" ? ir(a) : a;
  return {
    pathname: i ? (i.startsWith("/") ? i : DC(i, r)) : r,
    search: NC(u),
    hash: BC(s),
  };
}
function DC(a, r) {
  let i = r.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Fc(a, r, i, u) {
  return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function zC(a) {
  return a.filter(
    (r, i) => i === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Vy(a) {
  let r = zC(a);
  return r.map((i, u) => (u === r.length - 1 ? i.pathname : i.pathnameBase));
}
function Yy(a, r, i, u = !1) {
  let s;
  typeof a == "string"
    ? (s = ir(a))
    : ((s = { ...a }),
      Xe(
        !s.pathname || !s.pathname.includes("?"),
        Fc("?", "pathname", "search", s),
      ),
      Xe(
        !s.pathname || !s.pathname.includes("#"),
        Fc("#", "pathname", "hash", s),
      ),
      Xe(!s.search || !s.search.includes("#"), Fc("#", "search", "hash", s)));
  let f = a === "" || s.pathname === "",
    d = f ? "/" : s.pathname,
    p;
  if (d == null) p = i;
  else {
    let S = r.length - 1;
    if (!u && d.startsWith("..")) {
      let x = d.split("/");
      for (; x[0] === ".."; ) x.shift(), (S -= 1);
      s.pathname = x.join("/");
    }
    p = S >= 0 ? r[S] : "/";
  }
  let g = wC(s, p),
    m = d && d !== "/" && d.endsWith("/"),
    b = (f || d === ".") && i.endsWith("/");
  return !g.pathname.endsWith("/") && (m || b) && (g.pathname += "/"), g;
}
var na = (a) => a.join("/").replace(/\/\/+/g, "/"),
  _C = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  NC = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  BC = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function UC(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var Xy = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Xy);
var jC = ["GET", ...Xy];
new Set(jC);
var or = A.createContext(null);
or.displayName = "DataRouter";
var zu = A.createContext(null);
zu.displayName = "DataRouterState";
var Qy = A.createContext({ isTransitioning: !1 });
Qy.displayName = "ViewTransition";
var kC = A.createContext(new Map());
kC.displayName = "Fetchers";
var $C = A.createContext(null);
$C.displayName = "Await";
var Bn = A.createContext(null);
Bn.displayName = "Navigation";
var zi = A.createContext(null);
zi.displayName = "Location";
var ra = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ra.displayName = "Route";
var Kf = A.createContext(null);
Kf.displayName = "RouteError";
function HC(a, { relative: r } = {}) {
  Xe(
    _i(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: i, navigator: u } = A.useContext(Bn),
    { hash: s, pathname: f, search: d } = Ni(a, { relative: r }),
    p = f;
  return (
    i !== "/" && (p = f === "/" ? i : na([i, f])),
    u.createHref({ pathname: p, search: d, hash: s })
  );
}
function _i() {
  return A.useContext(zi) != null;
}
function fl() {
  return (
    Xe(
      _i(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    A.useContext(zi).location
  );
}
var Ky =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zy(a) {
  A.useContext(Bn).static || A.useLayoutEffect(a);
}
function LC() {
  let { isDataRoute: a } = A.useContext(ra);
  return a ? IC() : qC();
}
function qC() {
  Xe(
    _i(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let a = A.useContext(or),
    { basename: r, navigator: i } = A.useContext(Bn),
    { matches: u } = A.useContext(ra),
    { pathname: s } = fl(),
    f = JSON.stringify(Vy(u)),
    d = A.useRef(!1);
  return (
    Zy(() => {
      d.current = !0;
    }),
    A.useCallback(
      (g, m = {}) => {
        if ((Nn(d.current, Ky), !d.current)) return;
        if (typeof g == "number") {
          i.go(g);
          return;
        }
        let b = Yy(g, JSON.parse(f), s, m.relative === "path");
        a == null &&
          r !== "/" &&
          (b.pathname = b.pathname === "/" ? r : na([r, b.pathname])),
          (m.replace ? i.replace : i.push)(b, m.state, m);
      },
      [r, i, f, s, a],
    )
  );
}
A.createContext(null);
function Ni(a, { relative: r } = {}) {
  let { matches: i } = A.useContext(ra),
    { pathname: u } = fl(),
    s = JSON.stringify(Vy(i));
  return A.useMemo(() => Yy(a, JSON.parse(s), u, r === "path"), [a, s, u, r]);
}
function GC(a, r) {
  return Py(a, r);
}
function Py(a, r, i, u) {
  var H;
  Xe(
    _i(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: s, static: f } = A.useContext(Bn),
    { matches: d } = A.useContext(ra),
    p = d[d.length - 1],
    g = p ? p.params : {},
    m = p ? p.pathname : "/",
    b = p ? p.pathnameBase : "/",
    S = p && p.route;
  {
    let k = (S && S.path) || "";
    Wy(
      m,
      !S || k.endsWith("*") || k.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === "/" ? "*" : `${k}/*`}">.`,
    );
  }
  let x = fl(),
    R;
  if (r) {
    let k = typeof r == "string" ? ir(r) : r;
    Xe(
      b === "/" || ((H = k.pathname) == null ? void 0 : H.startsWith(b)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${k.pathname}" was given in the \`location\` prop.`,
    ),
      (R = k);
  } else R = x;
  let T = R.pathname || "/",
    E = T;
  if (b !== "/") {
    let k = b.replace(/^\//, "").split("/");
    E = "/" + T.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let _ =
    !f && i && i.matches && i.matches.length > 0
      ? i.matches
      : Ly(a, { pathname: E });
  Nn(
    S || _ != null,
    `No routes matched location "${R.pathname}${R.search}${R.hash}" `,
  ),
    Nn(
      _ == null ||
        _[_.length - 1].route.element !== void 0 ||
        _[_.length - 1].route.Component !== void 0 ||
        _[_.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let z = KC(
    _ &&
      _.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, g, k.params),
          pathname: na([
            b,
            s.encodeLocation
              ? s.encodeLocation(k.pathname).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === "/"
              ? b
              : na([
                  b,
                  s.encodeLocation
                    ? s.encodeLocation(k.pathnameBase).pathname
                    : k.pathnameBase,
                ]),
        }),
      ),
    d,
    i,
    u,
  );
  return r && z
    ? A.createElement(
        zi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...R,
            },
            navigationType: "POP",
          },
        },
        z,
      )
    : z;
}
function VC() {
  let a = FC(),
    r = UC(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    i = a instanceof Error ? a.stack : null,
    u = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: u },
    f = { padding: "2px 4px", backgroundColor: u },
    d = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (d = A.createElement(
      A.Fragment,
      null,
      A.createElement("p", null, "💿 Hey developer 👋"),
      A.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        A.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        A.createElement("code", { style: f }, "errorElement"),
        " prop on your route.",
      ),
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement("h2", null, "Unexpected Application Error!"),
      A.createElement("h3", { style: { fontStyle: "italic" } }, r),
      i ? A.createElement("pre", { style: s }, i) : null,
      d,
    )
  );
}
var YC = A.createElement(VC, null),
  XC = class extends A.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, r) {
      return r.location !== a.location ||
        (r.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : r.error,
            location: r.location,
            revalidation: a.revalidation || r.revalidation,
          };
    }
    componentDidCatch(a, r) {
      console.error(
        "React Router caught the following error during render",
        a,
        r,
      );
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            ra.Provider,
            { value: this.props.routeContext },
            A.createElement(Kf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function QC({ routeContext: a, match: r, children: i }) {
  let u = A.useContext(or);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = r.route.id),
    A.createElement(ra.Provider, { value: a }, i)
  );
}
function KC(a, r = [], i = null, u = null) {
  if (a == null) {
    if (!i) return null;
    if (i.errors) a = i.matches;
    else if (r.length === 0 && !i.initialized && i.matches.length > 0)
      a = i.matches;
    else return null;
  }
  let s = a,
    f = i == null ? void 0 : i.errors;
  if (f != null) {
    let g = s.findIndex(
      (m) => m.route.id && (f == null ? void 0 : f[m.route.id]) !== void 0,
    );
    Xe(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`,
    ),
      (s = s.slice(0, Math.min(s.length, g + 1)));
  }
  let d = !1,
    p = -1;
  if (i)
    for (let g = 0; g < s.length; g++) {
      let m = s[g];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = g),
        m.route.id)
      ) {
        let { loaderData: b, errors: S } = i,
          x =
            m.route.loader &&
            !b.hasOwnProperty(m.route.id) &&
            (!S || S[m.route.id] === void 0);
        if (m.route.lazy || x) {
          (d = !0), p >= 0 ? (s = s.slice(0, p + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((g, m, b) => {
    let S,
      x = !1,
      R = null,
      T = null;
    i &&
      ((S = f && m.route.id ? f[m.route.id] : void 0),
      (R = m.route.errorElement || YC),
      d &&
        (p < 0 && b === 0
          ? (Wy(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (x = !0),
            (T = null))
          : p === b &&
            ((x = !0), (T = m.route.hydrateFallbackElement || null))));
    let E = r.concat(s.slice(0, b + 1)),
      _ = () => {
        let z;
        return (
          S
            ? (z = R)
            : x
              ? (z = T)
              : m.route.Component
                ? (z = A.createElement(m.route.Component, null))
                : m.route.element
                  ? (z = m.route.element)
                  : (z = g),
          A.createElement(QC, {
            match: m,
            routeContext: { outlet: g, matches: E, isDataRoute: i != null },
            children: z,
          })
        );
      };
    return i && (m.route.ErrorBoundary || m.route.errorElement || b === 0)
      ? A.createElement(XC, {
          location: i.location,
          revalidation: i.revalidation,
          component: R,
          error: S,
          children: _(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
        })
      : _();
  }, null);
}
function Zf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ZC(a) {
  let r = A.useContext(or);
  return Xe(r, Zf(a)), r;
}
function PC(a) {
  let r = A.useContext(zu);
  return Xe(r, Zf(a)), r;
}
function WC(a) {
  let r = A.useContext(ra);
  return Xe(r, Zf(a)), r;
}
function Pf(a) {
  let r = WC(a),
    i = r.matches[r.matches.length - 1];
  return (
    Xe(
      i.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    i.route.id
  );
}
function JC() {
  return Pf("useRouteId");
}
function FC() {
  var u;
  let a = A.useContext(Kf),
    r = PC("useRouteError"),
    i = Pf("useRouteError");
  return a !== void 0 ? a : (u = r.errors) == null ? void 0 : u[i];
}
function IC() {
  let { router: a } = ZC("useNavigate"),
    r = Pf("useNavigate"),
    i = A.useRef(!1);
  return (
    Zy(() => {
      i.current = !0;
    }),
    A.useCallback(
      async (s, f = {}) => {
        Nn(i.current, Ky),
          i.current &&
            (typeof s == "number"
              ? a.navigate(s)
              : await a.navigate(s, { fromRouteId: r, ...f }));
      },
      [a, r],
    )
  );
}
var Bg = {};
function Wy(a, r, i) {
  !r && !Bg[a] && ((Bg[a] = !0), Nn(!1, i));
}
A.memo(eT);
function eT({ routes: a, future: r, state: i }) {
  return Py(a, void 0, i, r);
}
function Jy(a) {
  Xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function tT({
  basename: a = "/",
  children: r = null,
  location: i,
  navigationType: u = "POP",
  navigator: s,
  static: f = !1,
}) {
  Xe(
    !_i(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let d = a.replace(/^\/*/, "/"),
    p = A.useMemo(
      () => ({ basename: d, navigator: s, static: f, future: {} }),
      [d, s, f],
    );
  typeof i == "string" && (i = ir(i));
  let {
      pathname: g = "/",
      search: m = "",
      hash: b = "",
      state: S = null,
      key: x = "default",
    } = i,
    R = A.useMemo(() => {
      let T = Ua(g, d);
      return T == null
        ? null
        : {
            location: { pathname: T, search: m, hash: b, state: S, key: x },
            navigationType: u,
          };
    }, [d, g, m, b, S, x, u]);
  return (
    Nn(
      R != null,
      `<Router basename="${d}"> is not able to match the URL "${g}${m}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    R == null
      ? null
      : A.createElement(
          Bn.Provider,
          { value: p },
          A.createElement(zi.Provider, { children: r, value: R }),
        )
  );
}
function nT({ children: a, location: r }) {
  return GC(vf(a), r);
}
function vf(a, r = []) {
  let i = [];
  return (
    A.Children.forEach(a, (u, s) => {
      if (!A.isValidElement(u)) return;
      let f = [...r, s];
      if (u.type === A.Fragment) {
        i.push.apply(i, vf(u.props.children, f));
        return;
      }
      Xe(
        u.type === Jy,
        `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Xe(
          !u.props.index || !u.props.children,
          "An index route cannot have child routes.",
        );
      let d = {
        id: u.props.id || f.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 ||
          u.props.ErrorBoundary != null ||
          u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      u.props.children && (d.children = vf(u.props.children, f)), i.push(d);
    }),
    i
  );
}
var iu = "get",
  ou = "application/x-www-form-urlencoded";
function _u(a) {
  return a != null && typeof a.tagName == "string";
}
function aT(a) {
  return _u(a) && a.tagName.toLowerCase() === "button";
}
function lT(a) {
  return _u(a) && a.tagName.toLowerCase() === "form";
}
function rT(a) {
  return _u(a) && a.tagName.toLowerCase() === "input";
}
function iT(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function oT(a, r) {
  return a.button === 0 && (!r || r === "_self") && !iT(a);
}
var Io = null;
function uT() {
  if (Io === null)
    try {
      new FormData(document.createElement("form"), 0), (Io = !1);
    } catch {
      Io = !0;
    }
  return Io;
}
var sT = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ic(a) {
  return a != null && !sT.has(a)
    ? (Nn(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`,
      ),
      null)
    : a;
}
function cT(a, r) {
  let i, u, s, f, d;
  if (lT(a)) {
    let p = a.getAttribute("action");
    (u = p ? Ua(p, r) : null),
      (i = a.getAttribute("method") || iu),
      (s = Ic(a.getAttribute("enctype")) || ou),
      (f = new FormData(a));
  } else if (aT(a) || (rT(a) && (a.type === "submit" || a.type === "image"))) {
    let p = a.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let g = a.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((u = g ? Ua(g, r) : null),
      (i = a.getAttribute("formmethod") || p.getAttribute("method") || iu),
      (s =
        Ic(a.getAttribute("formenctype")) ||
        Ic(p.getAttribute("enctype")) ||
        ou),
      (f = new FormData(p, a)),
      !uT())
    ) {
      let { name: m, type: b, value: S } = a;
      if (b === "image") {
        let x = m ? `${m}.` : "";
        f.append(`${x}x`, "0"), f.append(`${x}y`, "0");
      } else m && f.append(m, S);
    }
  } else {
    if (_u(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (i = iu), (u = null), (s = ou), (d = a);
  }
  return (
    f && s === "text/plain" && ((d = f), (f = void 0)),
    { action: u, method: i.toLowerCase(), encType: s, formData: f, body: d }
  );
}
function Wf(a, r) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(r);
}
async function fT(a, r) {
  if (a.id in r) return r[a.id];
  try {
    let i = await import(a.module);
    return (r[a.id] = i), i;
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function dT(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function hT(a, r, i) {
  let u = await Promise.all(
    a.map(async (s) => {
      let f = r.routes[s.route.id];
      if (f) {
        let d = await fT(f, i);
        return d.links ? d.links() : [];
      }
      return [];
    }),
  );
  return yT(
    u
      .flat(1)
      .filter(dT)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function Ug(a, r, i, u, s, f) {
  let d = (g, m) => (i[m] ? g.route.id !== i[m].route.id : !0),
    p = (g, m) => {
      var b;
      return (
        i[m].pathname !== g.pathname ||
        (((b = i[m].route.path) == null ? void 0 : b.endsWith("*")) &&
          i[m].params["*"] !== g.params["*"])
      );
    };
  return f === "assets"
    ? r.filter((g, m) => d(g, m) || p(g, m))
    : f === "data"
      ? r.filter((g, m) => {
          var S;
          let b = u.routes[g.route.id];
          if (!b || !b.hasLoader) return !1;
          if (d(g, m) || p(g, m)) return !0;
          if (g.route.shouldRevalidate) {
            let x = g.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: ((S = i[0]) == null ? void 0 : S.params) || {},
              nextUrl: new URL(a, window.origin),
              nextParams: g.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof x == "boolean") return x;
          }
          return !0;
        })
      : [];
}
function pT(a, r, { includeHydrateFallback: i } = {}) {
  return mT(
    a
      .map((u) => {
        let s = r.routes[u.route.id];
        if (!s) return [];
        let f = [s.module];
        return (
          s.clientActionModule && (f = f.concat(s.clientActionModule)),
          s.clientLoaderModule && (f = f.concat(s.clientLoaderModule)),
          i &&
            s.hydrateFallbackModule &&
            (f = f.concat(s.hydrateFallbackModule)),
          s.imports && (f = f.concat(s.imports)),
          f
        );
      })
      .flat(1),
  );
}
function mT(a) {
  return [...new Set(a)];
}
function gT(a) {
  let r = {},
    i = Object.keys(a).sort();
  for (let u of i) r[u] = a[u];
  return r;
}
function yT(a, r) {
  let i = new Set();
  return (
    new Set(r),
    a.reduce((u, s) => {
      let f = JSON.stringify(gT(s));
      return i.has(f) || (i.add(f), u.push({ key: f, link: s })), u;
    }, [])
  );
}
function vT(a) {
  let r =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : a;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function bT() {
  let a = A.useContext(or);
  return (
    Wf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    a
  );
}
function ST() {
  let a = A.useContext(zu);
  return (
    Wf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    a
  );
}
var Jf = A.createContext(void 0);
Jf.displayName = "FrameworkContext";
function Fy() {
  let a = A.useContext(Jf);
  return (
    Wf(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function xT(a, r) {
  let i = A.useContext(Jf),
    [u, s] = A.useState(!1),
    [f, d] = A.useState(!1),
    {
      onFocus: p,
      onBlur: g,
      onMouseEnter: m,
      onMouseLeave: b,
      onTouchStart: S,
    } = r,
    x = A.useRef(null);
  A.useEffect(() => {
    if ((a === "render" && d(!0), a === "viewport")) {
      let E = (z) => {
          z.forEach((H) => {
            d(H.isIntersecting);
          });
        },
        _ = new IntersectionObserver(E, { threshold: 0.5 });
      return (
        x.current && _.observe(x.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [a]),
    A.useEffect(() => {
      if (u) {
        let E = setTimeout(() => {
          d(!0);
        }, 100);
        return () => {
          clearTimeout(E);
        };
      }
    }, [u]);
  let R = () => {
      s(!0);
    },
    T = () => {
      s(!1), d(!1);
    };
  return i
    ? a !== "intent"
      ? [f, x, {}]
      : [
          f,
          x,
          {
            onFocus: fi(p, R),
            onBlur: fi(g, T),
            onMouseEnter: fi(m, R),
            onMouseLeave: fi(b, T),
            onTouchStart: fi(S, R),
          },
        ]
    : [!1, x, {}];
}
function fi(a, r) {
  return (i) => {
    a && a(i), i.defaultPrevented || r(i);
  };
}
function ET({ page: a, ...r }) {
  let { router: i } = bT(),
    u = A.useMemo(() => Ly(i.routes, a, i.basename), [i.routes, a, i.basename]);
  return u ? A.createElement(TT, { page: a, matches: u, ...r }) : null;
}
function CT(a) {
  let { manifest: r, routeModules: i } = Fy(),
    [u, s] = A.useState([]);
  return (
    A.useEffect(() => {
      let f = !1;
      return (
        hT(a, r, i).then((d) => {
          f || s(d);
        }),
        () => {
          f = !0;
        }
      );
    }, [a, r, i]),
    u
  );
}
function TT({ page: a, matches: r, ...i }) {
  let u = fl(),
    { manifest: s, routeModules: f } = Fy(),
    { loaderData: d, matches: p } = ST(),
    g = A.useMemo(() => Ug(a, r, p, s, u, "data"), [a, r, p, s, u]),
    m = A.useMemo(() => Ug(a, r, p, s, u, "assets"), [a, r, p, s, u]),
    b = A.useMemo(() => {
      if (a === u.pathname + u.search + u.hash) return [];
      let R = new Set(),
        T = !1;
      if (
        (r.forEach((_) => {
          var H;
          let z = s.routes[_.route.id];
          !z ||
            !z.hasLoader ||
            ((!g.some((k) => k.route.id === _.route.id) &&
              _.route.id in d &&
              (H = f[_.route.id]) != null &&
              H.shouldRevalidate) ||
            z.hasClientLoader
              ? (T = !0)
              : R.add(_.route.id));
        }),
        R.size === 0)
      )
        return [];
      let E = vT(a);
      return (
        T &&
          R.size > 0 &&
          E.searchParams.set(
            "_routes",
            r
              .filter((_) => R.has(_.route.id))
              .map((_) => _.route.id)
              .join(","),
          ),
        [E.pathname + E.search]
      );
    }, [d, u, s, g, r, a, f]),
    S = A.useMemo(() => pT(m, s), [m, s]),
    x = CT(m);
  return A.createElement(
    A.Fragment,
    null,
    b.map((R) =>
      A.createElement("link", {
        key: R,
        rel: "prefetch",
        as: "fetch",
        href: R,
        ...i,
      }),
    ),
    S.map((R) =>
      A.createElement("link", { key: R, rel: "modulepreload", href: R, ...i }),
    ),
    x.map(({ key: R, link: T }) => A.createElement("link", { key: R, ...T })),
  );
}
function AT(...a) {
  return (r) => {
    a.forEach((i) => {
      typeof i == "function" ? i(r) : i != null && (i.current = r);
    });
  };
}
var Iy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Iy && (window.__reactRouterVersion = "7.2.0");
} catch {}
function RT({ basename: a, children: r, window: i }) {
  let u = A.useRef();
  u.current == null && (u.current = hC({ window: i, v5Compat: !0 }));
  let s = u.current,
    [f, d] = A.useState({ action: s.action, location: s.location }),
    p = A.useCallback(
      (g) => {
        A.startTransition(() => d(g));
      },
      [d],
    );
  return (
    A.useLayoutEffect(() => s.listen(p), [s, p]),
    A.createElement(tT, {
      basename: a,
      children: r,
      location: f.location,
      navigationType: f.action,
      navigator: s,
    })
  );
}
var e0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  t0 = A.forwardRef(function (
    {
      onClick: r,
      discover: i = "render",
      prefetch: u = "none",
      relative: s,
      reloadDocument: f,
      replace: d,
      state: p,
      target: g,
      to: m,
      preventScrollReset: b,
      viewTransition: S,
      ...x
    },
    R,
  ) {
    let { basename: T } = A.useContext(Bn),
      E = typeof m == "string" && e0.test(m),
      _,
      z = !1;
    if (typeof m == "string" && E && ((_ = m), Iy))
      try {
        let Z = new URL(window.location.href),
          v = m.startsWith("//") ? new URL(Z.protocol + m) : new URL(m),
          Q = Ua(v.pathname, T);
        v.origin === Z.origin && Q != null
          ? (m = Q + v.search + v.hash)
          : (z = !0);
      } catch {
        Nn(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let H = HC(m, { relative: s }),
      [k, U, M] = xT(u, x),
      G = DT(m, {
        replace: d,
        state: p,
        target: g,
        preventScrollReset: b,
        relative: s,
        viewTransition: S,
      });
    function P(Z) {
      r && r(Z), Z.defaultPrevented || G(Z);
    }
    let ee = A.createElement("a", {
      ...x,
      ...M,
      href: _ || H,
      onClick: z || f ? r : P,
      ref: AT(R, U),
      target: g,
      "data-discover": !E && i === "render" ? "true" : void 0,
    });
    return k && !E
      ? A.createElement(A.Fragment, null, ee, A.createElement(ET, { page: H }))
      : ee;
  });
t0.displayName = "Link";
var OT = A.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: u = "",
    end: s = !1,
    style: f,
    to: d,
    viewTransition: p,
    children: g,
    ...m
  },
  b,
) {
  let S = Ni(d, { relative: m.relative }),
    x = fl(),
    R = A.useContext(zu),
    { navigator: T, basename: E } = A.useContext(Bn),
    _ = R != null && UT(S) && p === !0,
    z = T.encodeLocation ? T.encodeLocation(S).pathname : S.pathname,
    H = x.pathname,
    k =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  i ||
    ((H = H.toLowerCase()),
    (k = k ? k.toLowerCase() : null),
    (z = z.toLowerCase())),
    k && E && (k = Ua(k, E) || k);
  const U = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
  let M = H === z || (!s && H.startsWith(z) && H.charAt(U) === "/"),
    G =
      k != null &&
      (k === z || (!s && k.startsWith(z) && k.charAt(z.length) === "/")),
    P = { isActive: M, isPending: G, isTransitioning: _ },
    ee = M ? r : void 0,
    Z;
  typeof u == "function"
    ? (Z = u(P))
    : (Z = [
        u,
        M ? "active" : null,
        G ? "pending" : null,
        _ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let v = typeof f == "function" ? f(P) : f;
  return A.createElement(
    t0,
    {
      ...m,
      "aria-current": ee,
      className: Z,
      ref: b,
      style: v,
      to: d,
      viewTransition: p,
    },
    typeof g == "function" ? g(P) : g,
  );
});
OT.displayName = "NavLink";
var MT = A.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: r,
      navigate: i,
      reloadDocument: u,
      replace: s,
      state: f,
      method: d = iu,
      action: p,
      onSubmit: g,
      relative: m,
      preventScrollReset: b,
      viewTransition: S,
      ...x
    },
    R,
  ) => {
    let T = NT(),
      E = BT(p, { relative: m }),
      _ = d.toLowerCase() === "get" ? "get" : "post",
      z = typeof p == "string" && e0.test(p),
      H = (k) => {
        if ((g && g(k), k.defaultPrevented)) return;
        k.preventDefault();
        let U = k.nativeEvent.submitter,
          M = (U == null ? void 0 : U.getAttribute("formmethod")) || d;
        T(U || k.currentTarget, {
          fetcherKey: r,
          method: M,
          navigate: i,
          replace: s,
          state: f,
          relative: m,
          preventScrollReset: b,
          viewTransition: S,
        });
      };
    return A.createElement("form", {
      ref: R,
      method: _,
      action: E,
      onSubmit: u ? g : H,
      ...x,
      "data-discover": !z && a === "render" ? "true" : void 0,
    });
  },
);
MT.displayName = "Form";
function wT(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function n0(a) {
  let r = A.useContext(or);
  return Xe(r, wT(a)), r;
}
function DT(
  a,
  {
    target: r,
    replace: i,
    state: u,
    preventScrollReset: s,
    relative: f,
    viewTransition: d,
  } = {},
) {
  let p = LC(),
    g = fl(),
    m = Ni(a, { relative: f });
  return A.useCallback(
    (b) => {
      if (oT(b, r)) {
        b.preventDefault();
        let S = i !== void 0 ? i : xi(g) === xi(m);
        p(a, {
          replace: S,
          state: u,
          preventScrollReset: s,
          relative: f,
          viewTransition: d,
        });
      }
    },
    [g, p, m, i, u, r, a, s, f, d],
  );
}
var zT = 0,
  _T = () => `__${String(++zT)}__`;
function NT() {
  let { router: a } = n0("useSubmit"),
    { basename: r } = A.useContext(Bn),
    i = JC();
  return A.useCallback(
    async (u, s = {}) => {
      let { action: f, method: d, encType: p, formData: g, body: m } = cT(u, r);
      if (s.navigate === !1) {
        let b = s.fetcherKey || _T();
        await a.fetch(b, i, s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: m,
          formMethod: s.method || d,
          formEncType: s.encType || p,
          flushSync: s.flushSync,
        });
      } else
        await a.navigate(s.action || f, {
          preventScrollReset: s.preventScrollReset,
          formData: g,
          body: m,
          formMethod: s.method || d,
          formEncType: s.encType || p,
          replace: s.replace,
          state: s.state,
          fromRouteId: i,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [a, r, i],
  );
}
function BT(a, { relative: r } = {}) {
  let { basename: i } = A.useContext(Bn),
    u = A.useContext(ra);
  Xe(u, "useFormAction must be used inside a RouteContext");
  let [s] = u.matches.slice(-1),
    f = { ...Ni(a || ".", { relative: r }) },
    d = fl();
  if (a == null) {
    f.search = d.search;
    let p = new URLSearchParams(f.search),
      g = p.getAll("index");
    if (g.some((b) => b === "")) {
      p.delete("index"),
        g.filter((S) => S).forEach((S) => p.append("index", S));
      let b = p.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      s.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (f.pathname = f.pathname === "/" ? i : na([i, f.pathname])),
    xi(f)
  );
}
function UT(a, r = {}) {
  let i = A.useContext(Qy);
  Xe(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: u } = n0("useViewTransitionState"),
    s = Ni(a, { relative: r.relative });
  if (!i.isTransitioning) return !1;
  let f = Ua(i.currentLocation.pathname, u) || i.currentLocation.pathname,
    d = Ua(i.nextLocation.pathname, u) || i.nextLocation.pathname;
  return gu(s.pathname, d) != null || gu(s.pathname, f) != null;
}
new TextEncoder();
const jT = "/assets/bg-BiTVKxA4.png";
function kT() {
  return B.jsx("section", {
    className: "section section-title",
    children: B.jsx(_n, {
      height: "fit-content",
      color: "#fff",
      fontSize: "25px",
      textAlign: "left",
      justifyContent: "center",
      fontWeight: "bold",
      padding: "200px 0px 200px 0px",
      sx: {
        backgroundImage: `url(${jT})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      children: B.jsxs(_n, {
        width: "38%",
        marginLeft: "15%",
        children: [
          B.jsx("p", {
            children:
              "CHEGA DE RASGAR DINHEIRO COMPRANDO PLR's QUE NÃO VENDEM E SEM QUALIDADE!",
          }),
          B.jsx("p", {
            children:
              "DEIXE DE SER AFILIADO E TENHA EM MÃOS PRODUTOS PARA LUCRAR 100% DE COMISSÃO E VENDER DIARIAMENTE NA INTERNET SEM APARECER OU CRIAR CONTEÚDO",
          }),
          B.jsx("p", {
            children:
              "O ÚNICO PACK COM PLR's TESTADOS E APROVADOS QUE JÁ GERARAM MILHÕES EM VENDAS, E O MELHOR, ELES PODEM SER SEUS AGORA MESMO!",
          }),
        ],
      }),
    }),
  });
}
const $T = "/assets/cadastro-CXVXFos5.png",
  HT = "/assets/comissao-CzO0mc9O.png",
  LT = "/assets/ferramentas-CzgurrTj.png",
  qT = "/assets/garantia-Dj6iFYhP.png",
  GT = "/assets/lancamento-CSfQse26.png",
  VT = "/assets/premio-DNJ4Iw9H.png",
  YT = "/assets/rico-BxA8UtRw.png",
  XT = "/assets/tempo-B6WcGXxN.png";
function QT() {
  return B.jsx("img", { src: $T, alt: "cadastro", width: "30%" });
}
function KT() {
  return B.jsx("img", { src: HT, alt: "comissao", width: "30%" });
}
function ZT() {
  return B.jsx("img", { src: LT, alt: "ferramentas", width: "30%" });
}
function PT() {
  return B.jsx("img", { src: qT, alt: "garantia", width: "30%" });
}
function WT() {
  return B.jsx("img", { src: GT, alt: "lancamento", width: "30%" });
}
function JT() {
  return B.jsx("img", { src: VT, alt: "premio", width: "30%" });
}
function FT() {
  return B.jsx("img", { src: YT, alt: "rico", width: "30%" });
}
function IT() {
  return B.jsx("img", { src: XT, alt: "tempo", width: "30%" });
}
function Ff({ text: a, href: r, click: i }) {
  return B.jsx(Z2, {
    onClick: i ?? void 0,
    href: r ?? void 0,
    sx: {
      backgroundColor: "#F8B603",
      boxShadow: "0px 0px 10px 0px #F8B603",
      fill: "#000",
      color: "#000",
      fontSize: "22px",
      fontWeight: "bold",
    },
    children: a,
  });
}
function a0() {
  const a = document.getElementById("buysection");
  a && a.scrollIntoView({ behavior: "smooth" });
}
const jg = [
  { icon: JT(), text: "E-BOOKS MILIONÁRIOS COM QUALIDADE PREMIUM" },
  { icon: KT(), text: "100% DE COMISSÃO POR VENDA" },
  { icon: PT(), text: "DIREITO GARANTIDO DE REVENDA" },
  {
    icon: QT(),
    text: "COMO CADASTRAR O PRODUTO NAS MAIORES PLATAFORMAS, COMO MONETIZZE, HOTMART, BRAIP, KIWIFY",
  },
  { icon: FT(), text: "TORNE-SE UM INFOPRODUTOR" },
  { icon: IT(), text: "ECONOMIZE TEMPO E DINHEIRO EM CRIAÇÃO DE PRODUTOS" },
  { icon: WT(), text: "PRODUTOS 100% EDITÁVEIS" },
  { icon: ZT(), text: "DESIGNER PROFISSIONAL" },
];
function eA() {
  return (
    console.log(jg),
    B.jsx("section", {
      className: "section section-beneficts",
      children: B.jsxs(_n, {
        sx: { textAlign: "center" },
        children: [
          B.jsx(zn, {
            fontSize: 22,
            children: "VEJA O QUÊ PODE SER SEU AINDA HOJE:",
          }),
          B.jsx(sl, {
            container: !0,
            spacing: 2,
            marginBottom: 5,
            marginTop: 5,
            justifyContent: "center",
            children: jg.map((a, r) =>
              B.jsx(
                sl,
                {
                  size: { md: 4, xs: 12 },
                  children: B.jsx(Du, {
                    sx: {
                      borderRadius: 7,
                      height: "100%",
                      backgroundColor: "transparent",
                      backgroundImage:
                        "linear-gradient(180deg, #FF9600 0%, #FF1E00 100%)",
                    },
                    children: B.jsxs(Qf, {
                      sx: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 5,
                      },
                      children: [a.icon, a.text],
                    }),
                  }),
                },
                r,
              ),
            ),
          }),
          B.jsx(Ff, { text: "EU PRECISO DISSO AINDA HOJE", click: a0 }),
        ],
      }),
    })
  );
}
const tA = wy(
    B.jsx("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }),
    "Check",
  ),
  nA = "/assets/garantia-BKKzG5kt.png",
  aA = "/assets/money-DuAKZ6QQ.png",
  lA = [
    "MÉTODO AUMENTE SEU SCORE EM 7 DIAS",
    "MANUAL POWER PET",
    "ALFABETIZAÇÃO",
    "12 FORMAS DE GANHAR DINHEIRO ONLINE",
    "RECEITAS LOW CARB",
    "CONFEITARIA DE SUCESSO",
    "MÉTODO PÁSCOA LUCRATIVA",
    "RECEITAS DE PÃES E PIZZAS SEM GLÚTEN",
    "PACK DE CANVA",
  ],
  rA = B.jsx(Du, {
    sx: {
      height: "100%",
      textAlign: "center",
      borderRadius: 15,
      backgroundColor: "#000",
      opacity: "72%",
      boxShadow: "0px 0px 23px 5px rgba(0, 0, 0, 0.5)",
    },
    children: B.jsxs(Qf, {
      children: [
        B.jsx(zn, {
          sx: { opacity: 1 },
          children:
            "COMPRANDO HOJE, VOCÊ LEVA TODOS ESTES PRODUTOS COM UM DESCONTO ESPECIAL!",
        }),
        B.jsx("ul", {
          children: lA.map((a, r) =>
            B.jsxs(
              "li",
              {
                children: [
                  B.jsx(tA, { sx: { marginRight: 1, color: "#FF1E00" } }),
                  a,
                ],
              },
              r,
            ),
          ),
        }),
        B.jsxs("p", {
          children: ["DE: ", B.jsx("s", { children: "R$1.999" })],
        }),
        B.jsx("p", { children: "POR R$97" }),
        B.jsx("p", { children: "OU 12X DE R$9,74" }),
        B.jsx(Ff, {
          text: "Comprar Agora",
          href: "https://app.monetizze.com.br/checkout/KJV326612",
        }),
      ],
    }),
  }),
  iA = B.jsx(Du, {
    sx: {
      height: "100%",
      borderRadius: 15,
      backgroundColor: "#000",
      opacity: 0.72,
      boxShadow: "0px 0px 23px 5px rgba(0, 0, 0, 0.5)",
    },
    elevation: 5,
    children: B.jsxs(Qf, {
      children: [
        B.jsx("img", { src: nA, alt: "Garantia", width: "100%" }),
        B.jsx("p", {
          children:
            "Ciente da qualidade do conteúdo ministrado e com a finalidade de dar segurança às pessoas que queiram adquirir, concedemos 7 dias de garantia, para que você possa solicitar o reembolso de seu investimento, caso não estejam satisfeitos com sua compra.",
        }),
      ],
    }),
  });
function oA() {
  return B.jsx("section", {
    id: "buysection",
    className: "section section-buy",
    children: B.jsx(_n, {
      padding: "5% 15% 5% 15%",
      sx: {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(180deg, #FF9600 0%, #FF1E00 100%)",
      },
      children: B.jsxs(sl, {
        container: !0,
        spacing: 4,
        sx: { background: aA },
        children: [
          B.jsx(sl, { size: { md: 6, xs: 12 }, children: rA }),
          B.jsx(sl, { size: { md: 6, xs: 12 }, children: iA }),
        ],
      }),
    }),
  });
}
const l0 = wy(
    B.jsx("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
    "ExpandMore",
  ),
  Tn = "/assets/card-product1-BUSc6f9l.png",
  uA = [
    {
      title: "MÉTODO AUMENTE SEU SCORE EM 7 DIAS",
      image: Tn,
      description:
        "Você terá em suas mãos o E-book em que faturei mais de 3 milhões de reais.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$97",
      ],
    },
    {
      title: "MANUAL POWER PET",
      image: Tn,
      description:
        "O nicho de pets vem ganhando cada dia mais espaço no mercado, é por isso que esse E-book vai te trazer vendas diariamente de forma rápida.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$27",
      ],
    },
    {
      title: "ALFABETIZAÇÃO",
      image: Tn,
      description:
        "O nicho de pets vem ganhando cada dia mais espaço no mercado, é por isso que esse E-book vai te trazer vendas diariamente de forma rápida.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$67",
      ],
    },
    {
      title: "12 FORMAS DE GANHAR DINHEIRO ONLINE",
      image: Tn,
      description:
        "Vou te dar de bandeja o meu produto sobre Alfabetização Infantil para que você receba notificações de vendas o tempo inteiro sem complicação.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$97",
      ],
    },
    {
      title: "RECEITAS LOW CARB",
      image: Tn,
      description:
        "A nova profissão do século com toda a certeza é o trabalho Home Office. Então, a procura por essa classe de trabalho vem tomando conta do mercado, e nesse E-book, listamos as 12 melhores formas de trabalhar sem sair de casa.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$97",
      ],
    },
    {
      title: "CONFEITARIA DE SUCESSO",
      image: Tn,
      description:
        "Vou te dar de bandeja o meu E-book onde já faturei mais de 1 milhão em vendas. Ele pode ser seu ainda hoje.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$97",
      ],
    },
    {
      title: "MÉTODO PÁSCOA LUCRATIVA",
      image: Tn,
      description:
        "A páscoa vem chegando? É hora de lucrar muito com essa data tão especial. Receba agora mesmo o meu E-book com receitas exclusivas de páscoa para vender diariamente.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$97",
      ],
    },
    {
      title: "RECEITAS DE PÃES E PIZZAS SEM GLÚTEN",
      image: Tn,
      description:
        "O número de pessoas intolerantes ao glúten disparou nos últimos anos e a busca por uma alimentação saudável e variada é a febre do momento. Fature alto com esse E-book ainda hoje.",
      list: [
        "Produto que vende todos os dias",
        "100% de comissão",
        "Direito de revenda",
        "Venda fácil e rápida",
        "Ticket médio de vendas R$97",
      ],
    },
    {
      title: "PACK CRIATIVOS WIKIHOW",
      image: Tn,
      description:
        "Triplique seu CTR com esse pack de criativos wikihow e que não vão te dar bloqueios. Você não precisa mais quebrar a cabeça na hora de fazer um anúncio.",
      list: [],
    },
    {
      title: "PACK DE CANVA",
      image: Tn,
      description:
        "Receba templates validados e editáveis para a criação de seus posts e nunca mais perca tempo na criação de artes. Até porque tempo é dinheiro, e você não pode mais ficar rasgando à toa.",
      list: [],
    },
  ];
function sA({ title: a, image: r, description: i, list: u }) {
  return B.jsxs(Du, {
    sx: { textAlign: "center", height: "auto", background: "#000" },
    children: [
      B.jsx(zn, { fontSize: 18, height: "55px", children: a }),
      B.jsx("img", { className: "product-cards-img", src: r, alt: "" }),
      B.jsxs(_n, {
        children: [
          B.jsxs(By, {
            sx: { background: "transparent", color: "#FF1E00" },
            children: [
              B.jsx(ky, {
                expandIcon: B.jsx(l0, { sx: { color: "#ff9900" } }),
                "aria-controls": "panel1-content",
                id: "panel1-header",
                sx: {
                  flexDirection: "row-reverse",
                  "& .Mui-expanded": { color: "#ff9900 !important" },
                },
                children: B.jsx(zn, {
                  component: "span",
                  fontSize: "20px",
                  children: "Ver Descrição",
                }),
              }),
              B.jsxs(Uy, {
                sx: { textAlign: "left", color: "#fff" },
                children: [
                  B.jsx(zn, {
                    fontSize: "16px",
                    fontWeight: "bold",
                    children: i,
                  }),
                  u.length > 0 &&
                    B.jsx("ul", {
                      children: u.map((s, f) =>
                        B.jsxs("li", { children: ["- ", s] }, f),
                      ),
                    }),
                ],
              }),
            ],
          }),
          B.jsx(mu, { color: "#fff" }),
        ],
      }),
    ],
  });
}
function cA() {
  return B.jsx("section", {
    className: "section section-products",
    children: B.jsxs(_n, {
      children: [
        B.jsx(zn, {
          variant: "h5",
          textAlign: "center",
          marginBottom: 15,
          children:
            "QUAIS SÃO OS PRODUTOS CAMPEÕES EM VENDAS QUE VOCÊ IRÁ RECEBER?",
        }),
        B.jsx(sl, {
          container: !0,
          spacing: 1,
          children: uA.map((a, r) =>
            B.jsx(sl, {
              size: 2.4,
              children: B.jsx(sA, {
                title: a.title,
                image: a.image,
                description: a.description,
                list: a.list,
              }),
            }),
          ),
        }),
        B.jsxs(_n, {
          sx: { textAlign: "center", marginTop: 15 },
          children: [
            "        ",
            B.jsx(Ff, { text: "EU QUERO ESSES PRODUTOS", click: a0 }),
          ],
        }),
      ],
    }),
  });
}
const fA = "/assets/bonus-bg-BS06LxBp.png";
function dA() {
  return B.jsx("section", {
    className: "section section-bonus",
    children: B.jsxs(_n, {
      sx: { textAlign: "center" },
      children: [
        B.jsx(zn, {
          children:
            "COMPRANDO AINDA HOJE, VOCÊ VAI GANHAR DE FORMA 100% GRATUITA UM MEGA BÔNUS!",
        }),
        B.jsx("img", { src: fA, alt: "", width: "100%" }),
        B.jsx("p", { children: "CURSO DE TRÁFEGO DIRETO" }),
        B.jsx("p", { children: "(de 197 por 0)" }),
        B.jsx("p", { children: "Vou abrir as minhas estratégias para você!" }),
        B.jsx("p", {
          children:
            "Através de um Curso de Tráfego Direto vou te mostrar o passo a passo que me fez faturar MAIS DE 5 MILHÕES com meus produtos, para você apenas COPIAR E COLAR quando for anunciar qualquer dos Infoprodutos do pack.",
        }),
        B.jsx("p", {
          children:
            "Eu vou direto ao ponto, no clique a clique, para que você também possa FATURAR ALTO com tráfego direto!",
        }),
      ],
    }),
  });
}
function hA() {
  return B.jsxs(tC, {
    maxWidth: !1,
    children: [
      B.jsx(kT, {}),
      B.jsx(eA, {}),
      B.jsx(cA, {}),
      B.jsx(dA, {}),
      B.jsx(oA, {}),
    ],
  });
}
const pA = [
  {
    question: "Como vou receber?",
    content:
      "Após a confirmação do pagamento, você receberá o Pack diretamente no seu e-mail.",
  },
  {
    question: "Posso vender em qualquer plataforma?",
    content:
      " Sim! Você pode vender tanto na Monetizze, Hotmart, Braip, ou qualquer outra.",
  },
  {
    question: "Quais são os meus direitos sobre os produtos?",
    content:
      "Depois da compra, você receberá um contrato em seu nome, onde vou te dar plenos direitos sobre o produto.",
  },
  {
    question: "Posso editar os produtos?",
    content:
      "É claro que sim. Você será o dono e pode fazer qualquer alteração que achar necessária.",
  },
];
function mA() {
  return B.jsxs(_n, {
    padding: 15,
    paddingRight: 35,
    paddingLeft: 35,
    color: "#FF1E00",
    children: [
      B.jsx(zn, {
        variant: "h5",
        textAlign: "center",
        color: "#ff9900",
        fontWeight: "bold",
        children: "FAQ",
      }),
      pA.map((a, r) =>
        B.jsx("div", {
          className: "footer-accordion",
          children: B.jsxs(
            _n,
            {
              children: [
                B.jsxs(By, {
                  sx: { background: "transparent", color: "#FF1E00" },
                  children: [
                    B.jsx(ky, {
                      expandIcon: B.jsx(l0, { sx: { color: "#ff9900" } }),
                      "aria-controls": "panel1-content",
                      id: "panel1-header",
                      sx: {
                        flexDirection: "row-reverse",
                        "& .Mui-expanded": { color: "#ff9900 !important" },
                      },
                      children: B.jsx(zn, {
                        component: "span",
                        fontSize: "20px",
                        children: a.question,
                      }),
                    }),
                    B.jsx(Uy, {
                      children: B.jsx(zn, {
                        fontSize: "16px",
                        color: "#fff",
                        children: a.content,
                      }),
                    }),
                  ],
                }),
                B.jsx(mu, { color: "#fff" }),
              ],
            },
            r,
          ),
        }),
      ),
    ],
  });
}
function gA() {
  return B.jsxs(RT, {
    children: [
      B.jsx(nT, { children: B.jsx(Jy, { Component: hA, path: "/" }) }),
      B.jsx(mA, {}),
    ],
  });
}
_1.createRoot(document.getElementById("root")).render(
  B.jsx(A.StrictMode, {
    children: B.jsxs(wE, {
      theme: fC,
      children: [B.jsx(iC, {}), B.jsx(gA, {})],
    }),
  }),
);
