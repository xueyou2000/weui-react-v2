(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [23],
  {
    HVN5: function (e, t, n) {
      'use strict';
      n('0Owb'), n('cDcd'), n('mlvz');
    },
    LtsG: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        c = n.n(a),
        i = n('dEAq'),
        l = n('1R9V'),
        r = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        o = n('Rsk4').default['components-white-space'].component;
      t['default'] = function () {
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(
              'div',
              { className: 'markdown' },
              c.a.createElement(
                'h1',
                { id: 'whitespace-\u4e0a\u4e0b\u7559\u767d' },
                c.a.createElement(
                  i['AnchorLink'],
                  { to: '#whitespace-\u4e0a\u4e0b\u7559\u767d', 'aria-hidden': 'true', tabIndex: -1 },
                  c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'WhiteSpace \u4e0a\u4e0b\u7559\u767d',
              ),
              c.a.createElement('p', null, '\u5e38\u7528\u4e0e\u9875\u9762\u7684\u4e0a\u4e0b\u7a7a\u767d\u3002'),
              c.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                c.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            c.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { WhiteSpace, Button } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Button block>\u6700\u5c0f\u95f4\u8ddd</Button>\n    <WhiteSpace size="xs" />\n    <Button block>\u5c0f\u95f4\u8ddd</Button>\n    <WhiteSpace size="sm" />\n    <Button block>\u4e2d\u7b49\u95f4\u8ddd(\u9ed8\u8ba4)</Button>\n    <WhiteSpace size="md" />\n    <Button block>\u5927\u95f4\u8ddd</Button>\n    <WhiteSpace size="lg" />\n    <Button block>\u6700\u5927\u95f4\u8ddd</Button>\n    <WhiteSpace size="xl" />\n  </>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { WhiteSpace, Button } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Button block>\u6700\u5c0f\u95f4\u8ddd</Button>\n    <WhiteSpace size="xs" />\n    <Button block>\u5c0f\u95f4\u8ddd</Button>\n    <WhiteSpace size="sm" />\n    <Button block>\u4e2d\u7b49\u95f4\u8ddd(\u9ed8\u8ba4)</Button>\n    <WhiteSpace size="md" />\n    <Button block>\u5927\u95f4\u8ddd</Button>\n    <WhiteSpace size="lg" />\n    <Button block>\u6700\u5927\u95f4\u8ddd</Button>\n    <WhiteSpace size="xl" />\n  </>\n);',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u4e0d\u540c\u5c3a\u5bf8',
                identifier: 'components-white-space',
              },
              c.a.createElement(o, null),
            ),
            c.a.createElement(
              'div',
              { className: 'markdown' },
              c.a.createElement(
                'p',
                null,
                c.a.createElement(
                  'h2',
                  { id: 'api' },
                  c.a.createElement(
                    i['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                c.a.createElement(r['a'], {
                  src: '../../../src/WingBlank/index.tsx',
                  identifier: 'WingBlank',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
    OGKa: function (e, t, n) {},
    'TN5+': function (e, t, n) {
      'use strict';
      n('0Owb'), n('cDcd'), n('kERV');
    },
    UpFc: function (e, t, n) {
      'use strict';
      var a = n('cDcd'),
        c = n.n(a),
        i = n('dEAq'),
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
      t['a'] = (e) => {
        var t = e.identifier,
          n = e.export,
          r = Object(i['useApiData'])(t),
          o = Object(a['useContext'])(i['context']),
          u = o.locale,
          m = l[u] || l['en-US'];
        return c.a.createElement(
          c.a.Fragment,
          null,
          r &&
            c.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              c.a.createElement(
                'thead',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('th', null, m.name),
                  c.a.createElement('th', null, m.description),
                  c.a.createElement('th', null, m.type),
                  c.a.createElement('th', null, m.default),
                ),
              ),
              c.a.createElement(
                'tbody',
                null,
                r[n].map((e) =>
                  c.a.createElement(
                    'tr',
                    { key: e.identifier },
                    c.a.createElement('td', null, e.identifier),
                    c.a.createElement('td', null, e.description || '--'),
                    c.a.createElement('td', null, c.a.createElement('code', null, e.type)),
                    c.a.createElement(
                      'td',
                      null,
                      c.a.createElement('code', null, e.default || (e.required && m.required) || '--'),
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
