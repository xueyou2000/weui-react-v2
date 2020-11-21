(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [15],
  {
    HVN5: function (e, a, n) {
      'use strict';
      n('0Owb'), n('cDcd'), n('mlvz');
    },
    OGKa: function (e, a, n) {},
    'TN5+': function (e, a, n) {
      'use strict';
      n('0Owb'), n('cDcd'), n('kERV');
    },
    UpFc: function (e, a, n) {
      'use strict';
      var t = n('cDcd'),
        r = n.n(t),
        c = n('dEAq'),
        l = {
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
      a['a'] = (e) => {
        var a = e.identifier,
          n = e.export,
          i = Object(c['useApiData'])(a),
          d = Object(t['useContext'])(c['context']),
          s = d.locale,
          o = l[s] || l['en-US'];
        return r.a.createElement(
          r.a.Fragment,
          null,
          i &&
            r.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, o.name),
                  r.a.createElement('th', null, o.description),
                  r.a.createElement('th', null, o.type),
                  r.a.createElement('th', null, o.default),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                i[n].map((e) =>
                  r.a.createElement(
                    'tr',
                    { key: e.identifier },
                    r.a.createElement('td', null, e.identifier),
                    r.a.createElement('td', null, e.description || '--'),
                    r.a.createElement('td', null, r.a.createElement('code', null, e.type)),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement('code', null, e.default || (e.required && o.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    kERV: function (e, a, n) {},
    mlvz: function (e, a, n) {},
    tP8H: function (e, a, n) {
      'use strict';
      n('tJVT'), n('cDcd'), n('OGKa');
    },
    tuQA: function (e, a, n) {
      'use strict';
      n.r(a);
      var t = n('cDcd'),
        r = n.n(t),
        c = n('dEAq'),
        l = n('1R9V'),
        i = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        d = n('Rsk4').default['components-safe-area'].component;
      a['default'] = function () {
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
                { id: 'safearea-\u5b89\u5168\u7a7a\u95f4' },
                r.a.createElement(
                  c['AnchorLink'],
                  { to: '#safearea-\u5b89\u5168\u7a7a\u95f4', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'SafeArea \u5b89\u5168\u7a7a\u95f4',
              ),
              r.a.createElement(
                'p',
                null,
                '\u4e00\u822c\u5305\u88f9\u5728\u9875\u9762\u5916\u5c42\uff0c\u517c\u5bb9\u5f02\u5f62\u5c4f\u7684\u4e0d\u89c4\u5219\u56db\u5468\u3002',
              ),
              r.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                r.a.createElement(
                  c['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            r.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { SafeArea } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default () => (\n  <SafeArea className="safearea-demo">\n    <div className="block">1</div>\n    <div className="block">2</div>\n    <div className="block">3</div>\n    <div className="block">4</div>\n    <div className="block">5</div>\n    <div className="block">6</div>\n    <div className="block">7</div>\n    <div className="block">8</div>\n  </SafeArea>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { SafeArea } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default () => (\n  <SafeArea className="safearea-demo">\n    <div className="block">1</div>\n    <div className="block">2</div>\n    <div className="block">3</div>\n    <div className="block">4</div>\n    <div className="block">5</div>\n    <div className="block">6</div>\n    <div className="block">7</div>\n    <div className="block">8</div>\n  </SafeArea>\n);',
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.safearea-demo {\n  .block {\n    font-size: 60px;\n    color: #fff;\n    display: block;\n    width: 100%;\n    text-align: center;\n    height: 600px;\n    line-height: 600px;\n    background-color: #009a61;\n    background-image: linear-gradient(\n      -45deg,\n      rgba(255, 255, 255, 0.2) 25%,\n      transparent 25%,\n      transparent 50%,\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(255, 255, 255, 0.2) 75%,\n      transparent 75%,\n      transparent\n    );\n\n    &:nth-child(odd) {\n      background: repeating-linear-gradient(135deg, #ffeb3b, #ffeb3b 0.25em, #0092b7 0, #0092b7 0.75em);\n    }\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u56db\u5468\u4fdd\u7559\u5b89\u5168\u8fb9\u8ddd',
                identifier: 'components-safe-area',
              },
              r.a.createElement(d, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'p',
                null,
                r.a.createElement(
                  'h2',
                  { id: 'api' },
                  r.a.createElement(
                    c['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(i['a'], {
                  src: '../../../src/SafeArea/index.tsx',
                  identifier: 'SafeArea',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);
