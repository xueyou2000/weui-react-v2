(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    HVN5: function (e, t, n) {
      'use strict';
      n('0Owb'), n('cDcd'), n('mlvz');
    },
    OGKa: function (e, t, n) {},
    'TN5+': function (e, t, n) {
      'use strict';
      n('0Owb'), n('cDcd'), n('kERV');
    },
    UpFc: function (e, t, n) {
      'use strict';
      var a = n('cDcd'),
        r = n.n(a),
        l = n('dEAq'),
        c = {
          'zh-CN': {
            name: '\u5c5e\u6027\u540d',
            description: '\u63cf\u8ff0',
            type: '\u7c7b\u578b',
            default: '\u9ed8\u8ba4\u503c',
            required: '(\u5fc5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      t['a'] = (e) => {
        var t = e.identifier,
          n = e.export,
          o = Object(l['useApiData'])(t),
          i = Object(a['useContext'])(l['context']),
          d = i.locale,
          m = c[d] || c['en-US'];
        return r.a.createElement(
          r.a.Fragment,
          null,
          o &&
            r.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, m.name),
                  r.a.createElement('th', null, m.description),
                  r.a.createElement('th', null, m.type),
                  r.a.createElement('th', null, m.default),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                o[n].map((e) =>
                  r.a.createElement(
                    'tr',
                    { key: e.identifier },
                    r.a.createElement('td', null, e.identifier),
                    r.a.createElement('td', null, e.description || '--'),
                    r.a.createElement('td', null, r.a.createElement('code', null, e.type)),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement('code', null, e.default || (e.required && m.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    kERV: function (e, t, n) {},
    mlvz: function (e, t, n) {},
    tP8H: function (e, t, n) {
      'use strict';
      n('tJVT'), n('cDcd'), n('OGKa');
    },
    tmkq: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        r = n.n(a),
        l = n('dEAq'),
        c = n('1R9V'),
        o = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc'), n('Rsk4').default['components-loadmore'].component);
      t['default'] = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h1',
                { id: 'loadmore-\u52a0\u8f7d\u66f4\u591a' },
                r.a.createElement(
                  l['AnchorLink'],
                  { to: '#loadmore-\u52a0\u8f7d\u66f4\u591a', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Loadmore \u52a0\u8f7d\u66f4\u591a',
              ),
              r.a.createElement('p', null, '\u53ef\u914d\u5408\u4e0b\u62c9\u5237\u65b0\u7ec4\u4ef6'),
              r.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                r.a.createElement(
                  l['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            r.a.createElement(
              c['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { Loadmore } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Loadmore tips="\u6b63\u5728\u52a0\u8f7d" loading />\n    <br />\n    <Loadmore tips="\u6682\u65e0\u6570\u636e" />\n    <br />\n    <Loadmore dot />\n    <br />\n  </>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { Loadmore } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Loadmore tips="\u6b63\u5728\u52a0\u8f7d" loading={true} />\n    <br />\n    <Loadmore tips="\u6682\u65e0\u6570\u636e" />\n    <br />\n    <Loadmore dot={true} />\n    <br />\n  </>\n);',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u52a0\u8f7d\u66f4\u591a',
                identifier: 'components-loadmore',
              },
              r.a.createElement(o, null),
            ),
          ),
        );
      };
    },
  },
]);
