(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [27],
  {
    '3UPi': function (e, t, n) {},
    '7ZSp': function (e, t, n) {},
    '8JWO': function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        r = n.n(a),
        o = n('Gb9n'),
        i = n.n(o),
        l = (e) => {
          var t = e.children;
          return (
            Object(a['useEffect'])(() => {
              var e = () => {
                i()(100, 750), document.documentElement.setAttribute('data-scale', !0);
              };
              return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, []),
            r.a.createElement('div', { className: '__dumi-default-mobile-demo-layout' }, t)
          );
        };
      t['default'] = l;
    },
    D1Df: function (e, t, n) {
      'use strict';
      function a(e) {
        return (
          (a =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          a(e)
        );
      }
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(n, !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = u(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          o = Object.keys(e);
        for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      function c(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function d(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function m(e, t) {
        return !t || ('object' !== a(t) && 'function' !== typeof t) ? f(e) : t;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function p(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && g(e, t);
      }
      function g(e, t) {
        return (
          (g =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          g(e, t)
        );
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      var y = n('cDcd'),
        E = (n('17x9'), n('H38U')),
        b = n('aRTE');
      function w(e) {
        for (var t = '', n = 0; n < e.length; n++) {
          var a = e.charCodeAt(n);
          a < 128
            ? (t += String.fromCharCode(a))
            : a < 2048
            ? ((t += String.fromCharCode(192 | (a >> 6))), (t += String.fromCharCode(128 | (63 & a))))
            : a < 55296 || a >= 57344
            ? ((t += String.fromCharCode(224 | (a >> 12))),
              (t += String.fromCharCode(128 | ((a >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & a))))
            : (n++,
              (a = 65536 + (((1023 & a) << 10) | (1023 & e.charCodeAt(n)))),
              (t += String.fromCharCode(240 | (a >> 18))),
              (t += String.fromCharCode(128 | ((a >> 12) & 63))),
              (t += String.fromCharCode(128 | ((a >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & a))));
        }
        return t;
      }
      var _ = { size: 128, level: 'L', bgColor: '#FFFFFF', fgColor: '#000000', includeMargin: !1 },
        C = 4,
        k = 0.1;
      function P(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = [];
        return (
          e.forEach(function (e, a) {
            var r = null;
            e.forEach(function (o, i) {
              if (!o && null !== r)
                return (
                  n.push(
                    'M'
                      .concat(r + t, ' ')
                      .concat(a + t, 'h')
                      .concat(i - r, 'v1H')
                      .concat(r + t, 'z'),
                  ),
                  void (r = null)
                );
              if (i !== e.length - 1) o && null === r && (r = i);
              else {
                if (!o) return;
                null === r
                  ? n.push(
                      'M'
                        .concat(i + t, ',')
                        .concat(a + t, ' h1v1H')
                        .concat(i + t, 'z'),
                    )
                  : n.push(
                      'M'
                        .concat(r + t, ',')
                        .concat(a + t, ' h')
                        .concat(i + 1 - r, 'v1H')
                        .concat(r + t, 'z'),
                    );
              }
            });
          }),
          n.join('')
        );
      }
      function A(e, t) {
        return e.slice().map(function (e, n) {
          return n < t.y || n >= t.y + t.h
            ? e
            : e.map(function (e, n) {
                return (n < t.x || n >= t.x + t.w) && e;
              });
        });
      }
      function O(e, t) {
        var n = e.imageSettings,
          a = e.size,
          r = e.includeMargin;
        if (null == n) return null;
        var o = r ? C : 0,
          i = t.length + 2 * o,
          l = Math.floor(a * k),
          u = i / a,
          c = (n.width || l) * u,
          s = (n.height || l) * u,
          d = null == n.x ? t.length / 2 - c / 2 : n.x * u,
          m = null == n.y ? t.length / 2 - s / 2 : n.y * u,
          h = null;
        if (n.excavate) {
          var f = Math.floor(d),
            p = Math.floor(m),
            g = Math.ceil(c + d - f),
            v = Math.ceil(s + m - p);
          h = { x: f, y: p, w: g, h: v };
        }
        return { x: d, y: m, h: s, w: c, excavation: h };
      }
      var L = (function () {
          try {
            new Path2D().addPath(new Path2D());
          } catch (e) {
            return !1;
          }
          return !0;
        })(),
        T = (function (e) {
          function t() {
            var e, n;
            c(this, t);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
            return (
              (n = m(this, (e = h(t)).call.apply(e, [this].concat(r)))),
              v(f(n), '_canvas', void 0),
              v(f(n), '_image', void 0),
              v(f(n), 'state', { imgLoaded: !1 }),
              v(f(n), 'handleImageLoad', function () {
                n.setState({ imgLoaded: !0 });
              }),
              n
            );
          }
          return (
            p(t, e),
            d(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.update();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.update();
                },
              },
              {
                key: 'update',
                value: function () {
                  var e = this.props,
                    t = e.value,
                    n = e.size,
                    a = e.level,
                    r = e.bgColor,
                    o = e.fgColor,
                    i = e.includeMargin,
                    l = e.imageSettings,
                    u = new E(-1, b[a]);
                  if ((u.addData(w(t)), u.make(), null != this._canvas)) {
                    var c = this._canvas,
                      s = c.getContext('2d');
                    if (!s) return;
                    var d = u.modules;
                    if (null === d) return;
                    var m = i ? C : 0,
                      h = d.length + 2 * m,
                      f = O(this.props, d);
                    null != l && null != f && null != f.excavation && (d = A(d, f.excavation));
                    var p = window.devicePixelRatio || 1;
                    c.height = c.width = n * p;
                    var g = (n / h) * p;
                    s.scale(g, g),
                      (s.fillStyle = r),
                      s.fillRect(0, 0, h, h),
                      (s.fillStyle = o),
                      L
                        ? s.fill(new Path2D(P(d, m)))
                        : d.forEach(function (e, t) {
                            e.forEach(function (e, n) {
                              e && s.fillRect(n + m, t + m, 1, 1);
                            });
                          }),
                      this.state.imgLoaded &&
                        this._image &&
                        null != f &&
                        s.drawImage(this._image, f.x + m, f.y + m, f.w, f.h);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.value, t.size),
                    a = (t.level, t.bgColor, t.fgColor, t.style),
                    o = (t.includeMargin, t.imageSettings),
                    u = l(t, [
                      'value',
                      'size',
                      'level',
                      'bgColor',
                      'fgColor',
                      'style',
                      'includeMargin',
                      'imageSettings',
                    ]),
                    c = i({ height: n, width: n }, a),
                    s = null,
                    d = o && o.src;
                  return (
                    null != o &&
                      null != d &&
                      (s = y.createElement('img', {
                        src: d,
                        style: { display: 'none' },
                        onLoad: this.handleImageLoad,
                        ref: function (t) {
                          return (e._image = t);
                        },
                      })),
                    y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(
                        'canvas',
                        r(
                          {
                            style: c,
                            height: n,
                            width: n,
                            ref: function (t) {
                              return (e._canvas = t);
                            },
                          },
                          u,
                        ),
                      ),
                      s,
                    )
                  );
                },
              },
            ]),
            t
          );
        })(y.PureComponent);
      v(T, 'defaultProps', _);
      var S = (function (e) {
        function t() {
          return c(this, t), m(this, h(t).apply(this, arguments));
        }
        return (
          p(t, e),
          d(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.size,
                  a = e.level,
                  o = e.bgColor,
                  i = e.fgColor,
                  u = e.includeMargin,
                  c = e.imageSettings,
                  s = l(e, ['value', 'size', 'level', 'bgColor', 'fgColor', 'includeMargin', 'imageSettings']),
                  d = new E(-1, b[a]);
                d.addData(w(t)), d.make();
                var m = d.modules;
                if (null === m) return null;
                var h = u ? C : 0,
                  f = m.length + 2 * h,
                  p = O(this.props, m),
                  g = null;
                null != c &&
                  null != p &&
                  (null != p.excavation && (m = A(m, p.excavation)),
                  (g = y.createElement('image', {
                    xlinkHref: c.src,
                    height: p.h,
                    width: p.w,
                    x: p.x + h,
                    y: p.y + h,
                    preserveAspectRatio: 'none',
                  })));
                var v = P(m, h);
                return y.createElement(
                  'svg',
                  r({ shapeRendering: 'crispEdges', height: n, width: n, viewBox: '0 0 '.concat(f, ' ').concat(f) }, s),
                  y.createElement('path', { fill: o, d: 'M0,0 h'.concat(f, 'v').concat(f, 'H0z') }),
                  y.createElement('path', { fill: i, d: v }),
                  g,
                );
              },
            },
          ]),
          t
        );
      })(y.PureComponent);
      v(S, 'defaultProps', _);
      var B = function (e) {
        var t = e.renderAs,
          n = l(e, ['renderAs']),
          a = 'svg' === t ? S : T;
        return y.createElement(a, n);
      };
      (B.defaultProps = i({ renderAs: 'canvas' }, _)), (e.exports = B);
    },
    Gb9n: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = window;
      (t.default = a.vw = function (e, t) {
        var n = e || 100,
          r = t || 750,
          o = a.document,
          i = navigator.userAgent,
          l = i.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
          u = i.match(/U3\/((\d+|\.){5,})/i),
          c = u && parseInt(u[1].split('.').join(''), 10) >= 80,
          s = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
          d = a.devicePixelRatio || 1,
          m = o.documentElement,
          h = 1,
          f = 1 / d;
        if (s);
        else if ((l && l[1] > 534) || c) {
          m.style.fontSize = n + 'px';
          var p = o.createElement('div');
          p.setAttribute('style', 'width: 1rem;display:none'), m.appendChild(p);
          var g = a.getComputedStyle(p).width;
          if ((m.removeChild(p), g !== m.style.fontSize)) {
            var v = parseInt(g, 10);
            (h = n / v), (f *= h);
          }
        } else f = 1;
        var y = o.querySelector('meta[name="viewport"]');
        y || ((y = o.createElement('meta')), y.setAttribute('name', 'viewport'), o.head.appendChild(y)),
          y.setAttribute(
            'content',
            'width=device-width,user-scalable=no,initial-scale=' +
              f +
              ',maximum-scale=' +
              f +
              ',minimum-scale=' +
              f +
              ',viewport-fit=cover',
          );
        var E = function () {
          m.style.fontSize = (n / r) * m.clientWidth * h + 'px';
        };
        E(), a.addEventListener('resize', E);
      }),
        (e.exports = t['default']);
    },
    H38U: function (e, t, n) {
      var a = n('f4xo'),
        r = n('rcnY'),
        o = n('wU8J'),
        i = n('Iq15'),
        l = n('dWSS');
      function u(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var c = u.prototype;
      (c.addData = function (e) {
        var t = new a(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (c.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + ',' + t);
          return this.modules[e][t];
        }),
        (c.getModuleCount = function () {
          return this.moduleCount;
        }),
        (c.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (var t = r.getRSBlocks(e, this.errorCorrectLevel), n = new o(), a = 0, l = 0; l < t.length; l++)
                a += t[l].dataCount;
              for (l = 0; l < this.dataList.length; l++) {
                var u = this.dataList[l];
                n.put(u.mode, 4), n.put(u.getLength(), i.getLengthInBits(u.mode, e)), u.write(n);
              }
              if (n.getLengthInBits() <= 8 * a) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (c.makeImpl = function (e, t) {
          (this.moduleCount = 4 * this.typeNumber + 17), (this.modules = new Array(this.moduleCount));
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[n] = new Array(this.moduleCount);
            for (var a = 0; a < this.moduleCount; a++) this.modules[n][a] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache &&
              (this.dataCache = u.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
            this.mapData(this.dataCache, t);
        }),
        (c.setupPositionProbePattern = function (e, t) {
          for (var n = -1; n <= 7; n++)
            if (!(e + n <= -1 || this.moduleCount <= e + n))
              for (var a = -1; a <= 7; a++)
                t + a <= -1 ||
                  this.moduleCount <= t + a ||
                  (this.modules[e + n][t + a] =
                    (0 <= n && n <= 6 && (0 == a || 6 == a)) ||
                    (0 <= a && a <= 6 && (0 == n || 6 == n)) ||
                    (2 <= n && n <= 4 && 2 <= a && a <= 4));
        }),
        (c.getBestMaskPattern = function () {
          for (var e = 0, t = 0, n = 0; n < 8; n++) {
            this.makeImpl(!0, n);
            var a = i.getLostPoint(this);
            (0 == n || e > a) && ((e = a), (t = n));
          }
          return t;
        }),
        (c.createMovieClip = function (e, t, n) {
          var a = e.createEmptyMovieClip(t, n),
            r = 1;
          this.make();
          for (var o = 0; o < this.modules.length; o++)
            for (var i = o * r, l = 0; l < this.modules[o].length; l++) {
              var u = l * r,
                c = this.modules[o][l];
              c &&
                (a.beginFill(0, 100),
                a.moveTo(u, i),
                a.lineTo(u + r, i),
                a.lineTo(u + r, i + r),
                a.lineTo(u, i + r),
                a.endFill());
            }
          return a;
        }),
        (c.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++)
            null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++)
            null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (c.setupPositionAdjustPattern = function () {
          for (var e = i.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
            for (var n = 0; n < e.length; n++) {
              var a = e[t],
                r = e[n];
              if (null == this.modules[a][r])
                for (var o = -2; o <= 2; o++)
                  for (var l = -2; l <= 2; l++)
                    this.modules[a + o][r + l] = -2 == o || 2 == o || -2 == l || 2 == l || (0 == o && 0 == l);
            }
        }),
        (c.setupTypeNumber = function (e) {
          for (var t = i.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
            var a = !e && 1 == ((t >> n) & 1);
            this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] = a;
          }
          for (n = 0; n < 18; n++) {
            a = !e && 1 == ((t >> n) & 1);
            this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] = a;
          }
        }),
        (c.setupTypeInfo = function (e, t) {
          for (var n = (this.errorCorrectLevel << 3) | t, a = i.getBCHTypeInfo(n), r = 0; r < 15; r++) {
            var o = !e && 1 == ((a >> r) & 1);
            r < 6
              ? (this.modules[r][8] = o)
              : r < 8
              ? (this.modules[r + 1][8] = o)
              : (this.modules[this.moduleCount - 15 + r][8] = o);
          }
          for (r = 0; r < 15; r++) {
            o = !e && 1 == ((a >> r) & 1);
            r < 8
              ? (this.modules[8][this.moduleCount - r - 1] = o)
              : r < 9
              ? (this.modules[8][15 - r - 1 + 1] = o)
              : (this.modules[8][15 - r - 1] = o);
          }
          this.modules[this.moduleCount - 8][8] = !e;
        }),
        (c.mapData = function (e, t) {
          for (var n = -1, a = this.moduleCount - 1, r = 7, o = 0, l = this.moduleCount - 1; l > 0; l -= 2) {
            6 == l && l--;
            while (1) {
              for (var u = 0; u < 2; u++)
                if (null == this.modules[a][l - u]) {
                  var c = !1;
                  o < e.length && (c = 1 == ((e[o] >>> r) & 1));
                  var s = i.getMask(t, a, l - u);
                  s && (c = !c), (this.modules[a][l - u] = c), r--, -1 == r && (o++, (r = 7));
                }
              if (((a += n), a < 0 || this.moduleCount <= a)) {
                (a -= n), (n = -n);
                break;
              }
            }
          }
        }),
        (u.PAD0 = 236),
        (u.PAD1 = 17),
        (u.createData = function (e, t, n) {
          for (var a = r.getRSBlocks(e, t), l = new o(), c = 0; c < n.length; c++) {
            var s = n[c];
            l.put(s.mode, 4), l.put(s.getLength(), i.getLengthInBits(s.mode, e)), s.write(l);
          }
          var d = 0;
          for (c = 0; c < a.length; c++) d += a[c].dataCount;
          if (l.getLengthInBits() > 8 * d)
            throw new Error('code length overflow. (' + l.getLengthInBits() + '>' + 8 * d + ')');
          l.getLengthInBits() + 4 <= 8 * d && l.put(0, 4);
          while (l.getLengthInBits() % 8 != 0) l.putBit(!1);
          while (1) {
            if (l.getLengthInBits() >= 8 * d) break;
            if ((l.put(u.PAD0, 8), l.getLengthInBits() >= 8 * d)) break;
            l.put(u.PAD1, 8);
          }
          return u.createBytes(l, a);
        }),
        (u.createBytes = function (e, t) {
          for (var n = 0, a = 0, r = 0, o = new Array(t.length), u = new Array(t.length), c = 0; c < t.length; c++) {
            var s = t[c].dataCount,
              d = t[c].totalCount - s;
            (a = Math.max(a, s)), (r = Math.max(r, d)), (o[c] = new Array(s));
            for (var m = 0; m < o[c].length; m++) o[c][m] = 255 & e.buffer[m + n];
            n += s;
            var h = i.getErrorCorrectPolynomial(d),
              f = new l(o[c], h.getLength() - 1),
              p = f.mod(h);
            u[c] = new Array(h.getLength() - 1);
            for (m = 0; m < u[c].length; m++) {
              var g = m + p.getLength() - u[c].length;
              u[c][m] = g >= 0 ? p.get(g) : 0;
            }
          }
          var v = 0;
          for (m = 0; m < t.length; m++) v += t[m].totalCount;
          var y = new Array(v),
            E = 0;
          for (m = 0; m < a; m++) for (c = 0; c < t.length; c++) m < o[c].length && (y[E++] = o[c][m]);
          for (m = 0; m < r; m++) for (c = 0; c < t.length; c++) m < u[c].length && (y[E++] = u[c][m]);
          return y;
        }),
        (e.exports = u);
    },
    Iq15: function (e, t, n) {
      var a = n('nVVt'),
        r = n('dWSS'),
        o = n('dQei'),
        i = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        },
        l = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (e) {
            var t = e << 10;
            while (l.getBCHDigit(t) - l.getBCHDigit(l.G15) >= 0)
              t ^= l.G15 << (l.getBCHDigit(t) - l.getBCHDigit(l.G15));
            return ((e << 10) | t) ^ l.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            var t = e << 12;
            while (l.getBCHDigit(t) - l.getBCHDigit(l.G18) >= 0)
              t ^= l.G18 << (l.getBCHDigit(t) - l.getBCHDigit(l.G18));
            return (e << 12) | t;
          },
          getBCHDigit: function (e) {
            var t = 0;
            while (0 != e) t++, (e >>>= 1);
            return t;
          },
          getPatternPosition: function (e) {
            return l.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, t, n) {
            switch (e) {
              case i.PATTERN000:
                return (t + n) % 2 == 0;
              case i.PATTERN001:
                return t % 2 == 0;
              case i.PATTERN010:
                return n % 3 == 0;
              case i.PATTERN011:
                return (t + n) % 3 == 0;
              case i.PATTERN100:
                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
              case i.PATTERN101:
                return ((t * n) % 2) + ((t * n) % 3) == 0;
              case i.PATTERN110:
                return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
              case i.PATTERN111:
                return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
              default:
                throw new Error('bad maskPattern:' + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var t = new r([1], 0), n = 0; n < e; n++) t = t.multiply(new r([1, o.gexp(n)], 0));
            return t;
          },
          getLengthInBits: function (e, t) {
            if (1 <= t && t < 10)
              switch (e) {
                case a.MODE_NUMBER:
                  return 10;
                case a.MODE_ALPHA_NUM:
                  return 9;
                case a.MODE_8BIT_BYTE:
                  return 8;
                case a.MODE_KANJI:
                  return 8;
                default:
                  throw new Error('mode:' + e);
              }
            else if (t < 27)
              switch (e) {
                case a.MODE_NUMBER:
                  return 12;
                case a.MODE_ALPHA_NUM:
                  return 11;
                case a.MODE_8BIT_BYTE:
                  return 16;
                case a.MODE_KANJI:
                  return 10;
                default:
                  throw new Error('mode:' + e);
              }
            else {
              if (!(t < 41)) throw new Error('type:' + t);
              switch (e) {
                case a.MODE_NUMBER:
                  return 14;
                case a.MODE_ALPHA_NUM:
                  return 13;
                case a.MODE_8BIT_BYTE:
                  return 16;
                case a.MODE_KANJI:
                  return 12;
                default:
                  throw new Error('mode:' + e);
              }
            }
          },
          getLostPoint: function (e) {
            for (var t = e.getModuleCount(), n = 0, a = 0; a < t; a++)
              for (var r = 0; r < t; r++) {
                for (var o = 0, i = e.isDark(a, r), l = -1; l <= 1; l++)
                  if (!(a + l < 0 || t <= a + l))
                    for (var u = -1; u <= 1; u++)
                      r + u < 0 || t <= r + u || (0 == l && 0 == u) || (i == e.isDark(a + l, r + u) && o++);
                o > 5 && (n += 3 + o - 5);
              }
            for (a = 0; a < t - 1; a++)
              for (r = 0; r < t - 1; r++) {
                var c = 0;
                e.isDark(a, r) && c++,
                  e.isDark(a + 1, r) && c++,
                  e.isDark(a, r + 1) && c++,
                  e.isDark(a + 1, r + 1) && c++,
                  (0 != c && 4 != c) || (n += 3);
              }
            for (a = 0; a < t; a++)
              for (r = 0; r < t - 6; r++)
                e.isDark(a, r) &&
                  !e.isDark(a, r + 1) &&
                  e.isDark(a, r + 2) &&
                  e.isDark(a, r + 3) &&
                  e.isDark(a, r + 4) &&
                  !e.isDark(a, r + 5) &&
                  e.isDark(a, r + 6) &&
                  (n += 40);
            for (r = 0; r < t; r++)
              for (a = 0; a < t - 6; a++)
                e.isDark(a, r) &&
                  !e.isDark(a + 1, r) &&
                  e.isDark(a + 2, r) &&
                  e.isDark(a + 3, r) &&
                  e.isDark(a + 4, r) &&
                  !e.isDark(a + 5, r) &&
                  e.isDark(a + 6, r) &&
                  (n += 40);
            var s = 0;
            for (r = 0; r < t; r++) for (a = 0; a < t; a++) e.isDark(a, r) && s++;
            var d = Math.abs((100 * s) / t / t - 50) / 5;
            return (n += 10 * d), n;
          },
        };
      e.exports = l;
    },
    KAdo: function (e, t, n) {},
    KcUY: function (e, t, n) {
      'use strict';
      function a(e) {
        return (
          (a =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          a(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = s(n('cDcd')),
        o = u(n('q3YX')),
        i = u(n('bYHP')),
        l = u(n('nLCz'));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function s(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== a(e) && 'function' !== typeof e)) return { default: e };
        var t = c();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
          }
        return (n.default = e), t && t.set(e, n), n;
      }
      function d(e, t) {
        return g(e) || p(e, t) || h(e, t) || m();
      }
      function m() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function h(e, t) {
        if (e) {
          if ('string' === typeof e) return f(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? f(e, t)
              : void 0
          );
        }
      }
      function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a;
      }
      function p(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            a = !0,
            r = !1,
            o = void 0;
          try {
            for (var i, l = e[Symbol.iterator](); !(a = (i = l.next()).done); a = !0)
              if ((n.push(i.value), t && n.length === t)) break;
          } catch (u) {
            (r = !0), (o = u);
          } finally {
            try {
              a || null == l['return'] || l['return']();
            } finally {
              if (r) throw o;
            }
          }
          return n;
        }
      }
      function g(e) {
        if (Array.isArray(e)) return e;
      }
      var v = function (e, t) {
          var n = function () {
              for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
              var r = n[1].replace(/[^^]\/$/, '');
              return (
                (null ===
                  (e = n[0].find(function (e) {
                    var t = e.path;
                    return t === r;
                  })) || void 0 === e
                  ? void 0
                  : e.meta) || {}
              );
            },
            a = (0, r.useState)(n(e, t)),
            o = d(a, 2),
            i = o[0],
            l = o[1];
          return (
            (0, r.useLayoutEffect)(
              function () {
                l(n(e, t));
              },
              [t],
            ),
            i
          );
        },
        y = function (e, t) {
          var n = function () {
              for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
              return (
                (null ===
                  (t = a[0].find(function (e) {
                    return a[1].startsWith('/'.concat(e.name));
                  })) || void 0 === t
                  ? void 0
                  : t.name) || e[0].name
              );
            },
            a = (0, r.useState)(n(e, t)),
            o = d(a, 2),
            i = o[0],
            l = o[1];
          return (
            (0, r.useLayoutEffect)(
              function () {
                l(n(e, t));
              },
              [t],
            ),
            i
          );
        },
        E = function (e, t, n) {
          var a = function () {
              for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
              for (var r = n[0].navs[n[1]] || [], o = '*', i = r.length - 1; i >= 0; i -= 1) {
                var l = r[i],
                  u = [l].concat(l.children).filter(Boolean),
                  c = u.find(function (e) {
                    return e.path && new RegExp('^'.concat(e.path.replace(/\.html$/, ''), '(/|.|$)')).test(n[2]);
                  });
                if (c) {
                  o = c.path;
                  break;
                }
              }
              return (null === (e = n[0].menus[n[1]]) || void 0 === e ? void 0 : e[o]) || [];
            },
            o = (0, r.useState)(a(e, t, n)),
            i = d(o, 2),
            l = i[0],
            u = i[1];
          return (
            (0, r.useLayoutEffect)(
              function () {
                u(a(e, t, n));
              },
              [e.navs, e.menus, t, n],
            ),
            l
          );
        },
        b = function (e) {
          var t = e.location,
            n = e.route,
            a = e.children,
            u = v(n.routes, t.pathname),
            c = y(o.default.locales, t.pathname),
            s = E(o.default, c, t.pathname);
          return (
            (0, r.useEffect)(function () {
              t.hash && i.default.scrollToAnchor(decodeURIComponent(t.hash.slice(1)));
            }, []),
            r.default.createElement(
              l.default.Provider,
              {
                value: {
                  config: o.default,
                  meta: u,
                  locale: c,
                  nav: o.default.navs[c] || [],
                  menu: s,
                  base: o.default.locales.length && c !== o.default.locales[0].name ? '/'.concat(c) : '/',
                  routes: n.routes,
                },
              },
              a,
            )
          );
        },
        w = b;
      t.default = w;
    },
    OxFa: function (e, t, n) {},
    Uhn4: function (e, t, n) {},
    aRTE: function (e, t) {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    dQei: function (e, t) {
      for (
        var n = {
            glog: function (e) {
              if (e < 1) throw new Error('glog(' + e + ')');
              return n.LOG_TABLE[e];
            },
            gexp: function (e) {
              while (e < 0) e += 255;
              while (e >= 256) e -= 255;
              return n.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          a = 0;
        a < 8;
        a++
      )
        n.EXP_TABLE[a] = 1 << a;
      for (a = 8; a < 256; a++)
        n.EXP_TABLE[a] = n.EXP_TABLE[a - 4] ^ n.EXP_TABLE[a - 5] ^ n.EXP_TABLE[a - 6] ^ n.EXP_TABLE[a - 8];
      for (a = 0; a < 255; a++) n.LOG_TABLE[n.EXP_TABLE[a]] = a;
      e.exports = n;
    },
    dWSS: function (e, t, n) {
      var a = n('dQei');
      function r(e, t) {
        if (void 0 == e.length) throw new Error(e.length + '/' + t);
        var n = 0;
        while (n < e.length && 0 == e[n]) n++;
        this.num = new Array(e.length - n + t);
        for (var a = 0; a < e.length - n; a++) this.num[a] = e[a + n];
      }
      (r.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
            for (var o = 0; o < e.getLength(); o++) t[n + o] ^= a.gexp(a.glog(this.get(n)) + a.glog(e.get(o)));
          return new r(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var t = a.glog(this.get(0)) - a.glog(e.get(0)), n = new Array(this.getLength()), o = 0;
            o < this.getLength();
            o++
          )
            n[o] = this.get(o);
          for (o = 0; o < e.getLength(); o++) n[o] ^= a.gexp(a.glog(e.get(o)) + t);
          return new r(n, 0).mod(e);
        },
      }),
        (e.exports = r);
    },
    f4xo: function (e, t, n) {
      var a = n('nVVt');
      function r(e) {
        (this.mode = a.MODE_8BIT_BYTE), (this.data = e);
      }
      (r.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8);
        },
      }),
        (e.exports = r);
    },
    hQjr: function (e, t, n) {},
    jp8u: function (e, t, n) {},
    mAF5: function (e, t, n) {},
    nVVt: function (e, t) {
      e.exports = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 };
    },
    q3YX: function (e) {
      e.exports = JSON.parse(
        '{"menus":{"en-US":{"*":[{"path":"/","title":"\u4f7f\u7528\u6307\u5357","meta":{}}],"/components":[{"title":"\u901a\u7528","path":"/components/common","meta":{},"children":[{"path":"/components/common/button","title":"Button \u6309\u94ae","meta":{"order":1}}]},{"title":"\u6570\u636e\u5c55\u793a","path":"/components/data-display","meta":{},"children":[{"path":"/components/data-display/grid","title":"Grid \u4e5d\u5bab\u683c","meta":{"order":1}},{"path":"/components/data-display/list","title":"List \u5217\u8868","meta":{"order":1}},{"path":"/components/data-display/panel","title":"Panel \u9762\u677f","meta":{"order":1}},{"path":"/components/data-display/preview","title":"Preview \u8868\u5355\u9884\u89c8","meta":{"order":1}}]},{"title":"\u6570\u636e\u8f93\u5165","path":"/components/data-input","meta":{},"children":[{"path":"/components/data-input/amount-key-board","title":"AmountKeyBoard \u91d1\u989d\u952e\u76d8","meta":{"order":1}},{"path":"/components/data-input/rate","title":"Rate \u8bc4\u7ea7","meta":{"order":1}}]},{"title":"\u64cd\u4f5c\u53cd\u9988","path":"/components/feedback","meta":{},"children":[{"path":"/components/feedback/action-sheet","title":"ActionSheet \u5f39\u51fa\u5f0f\u83dc\u5355","meta":{"order":1}},{"path":"/components/feedback/dialog","title":"Dialog \u6a21\u6001\u5bf9\u8bdd\u6846","meta":{"order":1}},{"path":"/components/feedback/half-screen-dialog","title":"HalfScreenDialog \u534a\u5c4f\u5bf9\u8bdd\u6846","meta":{"order":1}},{"path":"/components/feedback/image-view","title":"ImageView \u56fe\u7247\u67e5\u770b","meta":{"order":1}},{"path":"/components/feedback/loading","title":"Loading \u52a0\u8f7d\u4e2d","meta":{"order":1}},{"path":"/components/feedback/loadmore","title":"Loadmore \u52a0\u8f7d\u66f4\u591a","meta":{"order":1}},{"path":"/components/feedback/pull-refresh","title":"PullRefresh \u4e0b\u62c9\u5237\u65b0","meta":{"order":1}},{"path":"/components/feedback/spin","title":"Spin \u52a0\u8f7d\u4e2d","meta":{"order":1}},{"path":"/components/feedback/swipe-action","title":"SwipeAction \u6ed1\u52a8\u64cd\u4f5c","meta":{"order":1}},{"path":"/components/feedback/swiper","title":"Swiper \u8f6e\u64ad","meta":{"order":1}},{"path":"/components/feedback/toast","title":"Toast \u8f7b\u63d0\u793a","meta":{"order":1}},{"path":"/components/feedback/tooptips","title":"Toptips \u9876\u90e8\u63d0\u793a","meta":{"order":1}}]},{"title":"\u6570\u636e\u5c55\u793a","path":"/components/layout","meta":{},"children":[{"path":"/components/layout/flex","title":"Flex \u5f39\u6027\u5e03\u5c40","meta":{"order":1}},{"path":"/components/layout/safe-area","title":"SafeArea \u5b89\u5168\u7a7a\u95f4","meta":{"order":1}},{"path":"/components/layout/skeleton","title":"Skeleton \u9aa8\u67b6\u5c4f","meta":{"order":1}},{"path":"/components/layout/white-space","title":"WhiteSpace \u4e0a\u4e0b\u7559\u767d","meta":{"order":1}},{"path":"/components/layout/wing-blank","title":"WingBlank \u4e24\u7ffc\u7559\u767d","meta":{"order":1}}]},{"title":"\u5bfc\u822a","path":"/components/navigation","meta":{},"children":[{"path":"/components/navigation/tabs","title":"Tabs \u9009\u9879\u5361","meta":{"order":1}}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u5e03\u5c40","path":"/components"},{"title":"Gitee","path":"https://gitee.com/xueyou2000/weui-react-v2"}]},"title":"weui-react-v2","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"branch":"master"}}',
      );
    },
    rcnY: function (e, t, n) {
      var a = n('aRTE');
      function r(e, t) {
        (this.totalCount = e), (this.dataCount = t);
      }
      (r.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
      ]),
        (r.getRSBlocks = function (e, t) {
          var n = r.getRsBlockTable(e, t);
          if (void 0 == n) throw new Error('bad rs block @ typeNumber:' + e + '/errorCorrectLevel:' + t);
          for (var a = n.length / 3, o = new Array(), i = 0; i < a; i++)
            for (var l = n[3 * i + 0], u = n[3 * i + 1], c = n[3 * i + 2], s = 0; s < l; s++) o.push(new r(u, c));
          return o;
        }),
        (r.getRsBlockTable = function (e, t) {
          switch (t) {
            case a.L:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case a.M:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case a.Q:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case a.H:
              return r.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (e.exports = r);
    },
    wU8J: function (e, t) {
      function n() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (n.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var n = 0; n < t; n++) this.putBit(1 == ((e >>> (t - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = n);
    },
    wtx7: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('tJVT'),
        r = n('PpiC'),
        o = n('cDcd'),
        i = n.n(o),
        l = n('dEAq'),
        u = n('9kvl'),
        c =
          (n('OxFa'),
          (e) => {
            var t = e.location,
              n = Object(o['useContext'])(l['context']),
              a = n.locale,
              r = n.config.locales,
              c = r.find((e) => {
                var t = e.name;
                return t !== a;
              });
            function s(e) {
              var n = t.pathname.replace('/'.concat(a), '') || '/';
              return e !== r[0].name && (n = '/'.concat(e).concat(n).replace(/\/$/, '')), n;
            }
            return c
              ? i.a.createElement(
                  'div',
                  { className: '__dumi-default-locale-select', 'data-locale-count': r.length },
                  r.length > 2
                    ? i.a.createElement(
                        'select',
                        { value: a, onChange: (e) => u['a'].push(s(e.target.value)) },
                        r.map((e) => i.a.createElement('option', { value: e.name, key: e.name }, e.label)),
                      )
                    : i.a.createElement(l['Link'], { to: s(c.name) }, c.label),
                )
              : null;
          }),
        s = c,
        d =
          (n('jp8u'),
          (e) => {
            var t = e.onMobileMenuClick,
              n = e.navPrefix,
              a = e.location,
              r = Object(o['useContext'])(l['context']),
              u = r.base,
              c = r.config,
              d = c.mode,
              m = c.title,
              h = c.logo,
              f = r.nav;
            return i.a.createElement(
              'div',
              { className: '__dumi-default-navbar', 'data-mode': d },
              i.a.createElement('button', { className: '__dumi-default-navbar-toggle', onClick: t }),
              i.a.createElement(
                l['Link'],
                {
                  className: '__dumi-default-navbar-logo',
                  style: { backgroundImage: h && "url('".concat(h, "')") },
                  to: u,
                  'data-plaintext': !1 === h || void 0,
                },
                m,
              ),
              i.a.createElement(
                'nav',
                null,
                n,
                f.map((e) => {
                  var t,
                    n =
                      Boolean(null === (t = e.children) || void 0 === t ? void 0 : t.length) &&
                      i.a.createElement(
                        'ul',
                        null,
                        e.children.map((e) =>
                          i.a.createElement(
                            'li',
                            { key: e.path },
                            i.a.createElement(l['NavLink'], { to: e.path }, e.title),
                          ),
                        ),
                      );
                  return e.path
                    ? i.a.createElement(l['NavLink'], { to: e.path, key: e.path }, e.title, n)
                    : i.a.createElement('span', { key: e.title }, e.title, n);
                }),
                i.a.createElement(s, { location: a }),
              ),
            );
          }),
        m = d,
        h = n('0Owb'),
        f =
          (n('mAF5'),
          (e) => {
            var t = e.slugs,
              n = Object(r['a'])(e, ['slugs']);
            return i.a.createElement(
              'ul',
              Object(h['a'])({ role: 'slug-list' }, n),
              t
                .filter((e) => {
                  var t = e.depth;
                  return t > 1 && t < 4;
                })
                .map((e) =>
                  i.a.createElement(
                    'li',
                    { key: e.heading, title: e.value, 'data-depth': e.depth },
                    i.a.createElement(
                      l['AnchorLink'],
                      { to: '#'.concat(e.heading) },
                      i.a.createElement('span', null, e.value),
                    ),
                  ),
                ),
            );
          }),
        p = f,
        g =
          (n('hQjr'),
          (e) => {
            var t = e.mobileMenuCollapsed,
              n = e.location,
              a = Object(o['useContext'])(l['context']),
              r = a.config,
              u = r.logo,
              c = r.title,
              d = r.description,
              m = r.mode,
              h = r.repository.url,
              f = a.menu,
              g = a.nav,
              v = a.base,
              y = a.meta,
              E = Boolean(y.hero || y.features || y.gapless) || !1 === y.sidemenu || void 0;
            return i.a.createElement(
              'div',
              { className: '__dumi-default-menu', 'data-mode': m, 'data-hidden': E, 'data-mobile-show': !t || void 0 },
              i.a.createElement(
                'div',
                { className: '__dumi-default-menu-inner' },
                i.a.createElement(
                  'div',
                  { className: '__dumi-default-menu-header' },
                  i.a.createElement(l['Link'], {
                    to: v,
                    className: '__dumi-default-menu-logo',
                    style: { backgroundImage: u && "url('".concat(u, "')") },
                  }),
                  i.a.createElement('h1', null, c),
                  i.a.createElement('p', null, d),
                  /github\.com/.test(h) &&
                    'doc' === m &&
                    i.a.createElement(
                      'p',
                      null,
                      i.a.createElement('object', {
                        type: 'image/svg+xml',
                        data: 'https://img.shields.io/github/stars'.concat(
                          h.match(/((\/[^\/]+){2})$/)[1],
                          '?style=social',
                        ),
                      }),
                    ),
                ),
                g.length
                  ? i.a.createElement(
                      'div',
                      { className: '__dumi-default-menu-mobile-area' },
                      i.a.createElement(
                        'ul',
                        { className: '__dumi-default-menu-nav-list' },
                        g.map((e) => {
                          var t,
                            n =
                              Boolean(null === (t = e.children) || void 0 === t ? void 0 : t.length) &&
                              i.a.createElement(
                                'ul',
                                null,
                                e.children.map((e) =>
                                  i.a.createElement(
                                    'li',
                                    { key: e.path || e.title },
                                    i.a.createElement(l['NavLink'], { to: e.path }, e.title),
                                  ),
                                ),
                              );
                          return i.a.createElement(
                            'li',
                            { key: e.path || e.title },
                            e.path
                              ? i.a.createElement(l['NavLink'], { to: e.path }, e.title, n)
                              : i.a.createElement('span', null, e.title, n),
                          );
                        }),
                      ),
                      i.a.createElement(s, { location: n }),
                    )
                  : i.a.createElement(
                      'div',
                      { className: '__dumi-default-menu-doc-locale' },
                      i.a.createElement(s, { location: n }),
                    ),
                i.a.createElement(
                  'ul',
                  { className: '__dumi-default-menu-list' },
                  !E &&
                    f.map((e) => {
                      var t,
                        a = Boolean(null === (t = y.slugs) || void 0 === t ? void 0 : t.length),
                        r = e.children && Boolean(e.children.length),
                        o = 'menu' === y.toc && !r && a && e.path === n.pathname;
                      return i.a.createElement(
                        'li',
                        { key: e.path || e.title },
                        i.a.createElement(
                          l['NavLink'],
                          { to: e.path, exact: !(e.children && e.children.length) },
                          e.title,
                        ),
                        Boolean(e.children && e.children.length) &&
                          i.a.createElement(
                            'ul',
                            null,
                            e.children.map((e) =>
                              i.a.createElement(
                                'li',
                                { key: e.path },
                                i.a.createElement(
                                  l['NavLink'],
                                  { to: e.path, exact: !0 },
                                  i.a.createElement('span', null, e.title),
                                ),
                                Boolean(
                                  'menu' === y.toc && 'undefined' !== typeof window && e.path === n.pathname && a,
                                ) && i.a.createElement(p, { slugs: y.slugs }),
                              ),
                            ),
                          ),
                        o && i.a.createElement(p, { slugs: y.slugs }),
                      );
                    }),
                ),
              ),
            );
          }),
        v = g,
        y =
          (n('KAdo'),
          () => {
            var e = Object(o['useState'])(''),
              t = Object(a['default'])(e, 2),
              n = t[0],
              r = t[1],
              u = Object(o['useState'])([]),
              c = Object(a['default'])(u, 2),
              s = c[0],
              d = c[1],
              m = Object(o['useRef'])(),
              f = Object(l['useSearch'])(n);
            return (
              Object(o['useEffect'])(() => {
                Array.isArray(f) ? d(f) : 'function' === typeof f && f('.'.concat(m.current.className));
              }, [f]),
              i.a.createElement(
                'div',
                { className: '__dumi-default-search' },
                i.a.createElement(
                  'input',
                  Object(h['a'])(
                    { className: '__dumi-default-search-input', type: 'search', ref: m },
                    Array.isArray(f) ? { value: n, onChange: (e) => r(e.target.value) } : {},
                  ),
                ),
                i.a.createElement(
                  'ul',
                  null,
                  s.map((e) => {
                    var t;
                    return i.a.createElement(
                      'li',
                      { key: e.path, onClick: () => r('') },
                      i.a.createElement(
                        l['AnchorLink'],
                        { to: e.path },
                        (null === (t = e.parent) || void 0 === t ? void 0 : t.title) &&
                          i.a.createElement('span', null, e.parent.title),
                        e.title,
                      ),
                    );
                  }),
                ),
              )
            );
          }),
        E =
          (n('7ZSp'),
          (e) =>
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                'div',
                { className: '__dumi-default-layout-hero' },
                i.a.createElement('h1', null, e.title),
                i.a.createElement('div', { dangerouslySetInnerHTML: { __html: e.desc } }),
                e.actions &&
                  e.actions.map((e) =>
                    i.a.createElement(
                      l['Link'],
                      { to: e.link, key: e.text },
                      i.a.createElement('button', { type: 'button' }, e.text),
                    ),
                  ),
              ),
            )),
        b = (e) =>
          i.a.createElement(
            'div',
            { className: '__dumi-default-layout-features' },
            e.map((e) =>
              i.a.createElement(
                'dl',
                { key: e.title, style: { backgroundImage: e.icon ? 'url('.concat(e.icon, ')') : void 0 } },
                i.a.createElement('dt', null, e.title),
                i.a.createElement('dd', { dangerouslySetInnerHTML: { __html: e.desc } }),
              ),
            ),
          ),
        w = (e) => {
          var t,
            n,
            r = e.children,
            u = e.location,
            c = Object(o['useContext'])(l['context']),
            s = c.config,
            d = s.mode,
            h = (s.locales, s.repository),
            f = (s.navs, c.meta),
            g = c.locale,
            w = (c.nav, h.url),
            _ = h.branch,
            C = Object(o['useState'])(!0),
            k = Object(a['default'])(C, 2),
            P = k[0],
            A = k[1],
            O = 'site' === d,
            L = O && f.hero,
            T = O && f.features,
            S = !1 !== f.sidemenu && !L && !T && !f.gapless,
            B =
              !L &&
              !T &&
              Boolean(null === (t = f.slugs) || void 0 === t ? void 0 : t.length) &&
              ('content' === f.toc || void 0 === f.toc) &&
              !f.gapless,
            N = 'zh-CN' === g,
            D = new Date(f.updatedTime).toLocaleString(),
            M = { github: 'GitHub', gitlab: 'GitLab' }[
              (null === (n = (w || '').match(/(github|gitlab)/)) || void 0 === n ? void 0 : n[1]) || 'nothing'
            ];
          return (
            Object(o['useEffect'])(() => {
              window.scrollTo({ top: 0 });
            }, [u.pathname]),
            i.a.createElement(
              'div',
              {
                className: '__dumi-default-layout',
                'data-show-sidemenu': String(S),
                'data-show-slugs': String(B),
                'data-site-mode': O,
                'data-gapless': String(!!f.gapless),
                onClick: () => A(!0),
              },
              i.a.createElement(m, {
                location: u,
                navPrefix: i.a.createElement(y, null),
                onMobileMenuClick: (e) => {
                  A((e) => !e), e.stopPropagation();
                },
              }),
              i.a.createElement(v, { mobileMenuCollapsed: P, location: u }),
              B && i.a.createElement(p, { slugs: f.slugs, className: '__dumi-default-layout-toc' }),
              L && E(f.hero),
              T && b(f.features),
              i.a.createElement(
                'div',
                { className: '__dumi-default-layout-content' },
                r,
                !L &&
                  !T &&
                  f.filePath &&
                  !f.gapless &&
                  i.a.createElement(
                    'div',
                    { className: '__dumi-default-layout-footer-meta' },
                    M &&
                      i.a.createElement(
                        l['Link'],
                        { to: ''.concat(w, '/edit/').concat(_, '/').concat(f.filePath) },
                        N
                          ? '\u5728 '.concat(M, ' \u4e0a\u7f16\u8f91\u8fd9\u7bc7\u6587\u6863')
                          : 'Edit this doc on '.concat(M),
                      ),
                    i.a.createElement(
                      'span',
                      { 'data-updated-text': N ? '\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a' : 'Last Update: ' },
                      D,
                    ),
                  ),
                (L || T) &&
                  f.footer &&
                  i.a.createElement('div', {
                    className: '__dumi-default-layout-footer',
                    dangerouslySetInnerHTML: { __html: f.footer },
                  }),
              ),
            )
          );
        },
        _ = w,
        C = n('D1Df'),
        k = n.n(C),
        P =
          (n('3UPi'),
          (e) => {
            var t = e.url,
              n = e.className,
              r = Object(o['useState'])(Math.random()),
              u = Object(a['default'])(r, 2),
              c = u[0],
              s = u[1],
              d = Object(o['useContext'])(l['context']),
              m = d.config.mode;
            return i.a.createElement(
              'div',
              { className: ['__dumi-default-device'].concat(n).join(' '), 'data-device-type': 'iOS', 'data-mode': m },
              i.a.createElement(
                'div',
                { className: '__dumi-default-device-status' },
                i.a.createElement('span', null, 'dumi'),
                i.a.createElement('span', null, '10:24'),
              ),
              i.a.createElement('iframe', { title: 'dumi-previewer', src: t, key: c }),
              i.a.createElement(
                'div',
                { className: '__dumi-default-device-action' },
                i.a.createElement('button', {
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: () => s(Math.random()),
                }),
                i.a.createElement(
                  'button',
                  { className: '__dumi-default-icon', role: 'qrcode' },
                  i.a.createElement(k.a, { value: t, size: 96 }),
                ),
                i.a.createElement(l['Link'], {
                  to: t,
                  target: '_blank',
                  className: '__dumi-default-icon',
                  role: 'open-demo',
                }),
              ),
            );
          }),
        A = P,
        O = n('1R9V'),
        L =
          (n('Uhn4'),
          (e) => {
            var t = e.children,
              n = Object(r['a'])(e, ['children']),
              u = Object(o['useState'])(''),
              c = Object(a['default'])(u, 2),
              s = c[0],
              d = c[1],
              m = Object(l['useDemoUrl'])(s);
            return (
              Object(o['useEffect'])(() => {
                var e = (e) => {
                  e.data.type === O['ACTIVE_MSG_TYPE'] && d(e.data.value);
                };
                return window.addEventListener('message', e), () => window.removeEventListener('message', e);
              }, []),
              Object(o['useEffect'])(() => {
                d('');
              }, [n.location.pathname]),
              i.a.createElement(
                _,
                n,
                i.a.createElement(
                  'div',
                  { className: '__dumi-default-mobile-content' },
                  i.a.createElement('article', null, t),
                  s && i.a.createElement(A, { className: '__dumi-default-mobile-content-device', url: m }),
                ),
              )
            );
          });
      t['default'] = L;
    },
  },
]);
