(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    FwwP: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        r = n.n(a),
        l = n('dEAq'),
        c = n('1R9V'),
        i = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        d = n('Rsk4').default['components-rate'].component;
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
                { id: 'rate-\u8bc4\u7ea7' },
                r.a.createElement(
                  l['AnchorLink'],
                  { to: '#rate-\u8bc4\u7ea7', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Rate \u8bc4\u7ea7',
              ),
              r.a.createElement('p', null, '\u5e38\u7528\u4e0e\u5e97\u94fa\u70b9\u8bc4'),
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
                      "import React from 'react';\nimport { Rate } from 'weui-react-v2';\n\nexport default () => (\n  <>\n    <div\n      style={{\n        textAlign: 'center',\n      }}\n    >\n      <Rate defaultValue={3} />\n    </div>\n  </>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { Rate } from 'weui-react-v2';\n\nexport default () => (\n  <>\n    <div style={{ textAlign: 'center' }}>\n      <Rate defaultValue={3} />\n    </div>\n  </>\n);",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: 'count\u53ef\u4ee5\u81ea\u5b9a\u4e49\u661f\u661f\u6570\u91cf',
                identifier: 'components-rate',
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
                    l['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(i['a'], {
                  src: '../../../src/Rate/index.tsx',
                  identifier: 'Rate',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
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
          i = Object(l['useApiData'])(t),
          d = Object(a['useContext'])(l['context']),
          u = d.locale,
          m = c[u] || c['en-US'];
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
                  r.a.createElement('th', null, m.name),
                  r.a.createElement('th', null, m.description),
                  r.a.createElement('th', null, m.type),
                  r.a.createElement('th', null, m.default),
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
  },
]);
