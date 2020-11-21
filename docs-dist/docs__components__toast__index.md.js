(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21],
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
        o = n.n(a),
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
      t['a'] = (e) => {
        var t = e.identifier,
          n = e.export,
          r = Object(c['useApiData'])(t),
          i = Object(a['useContext'])(c['context']),
          s = i.locale,
          u = l[s] || l['en-US'];
        return o.a.createElement(
          o.a.Fragment,
          null,
          r &&
            o.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              o.a.createElement(
                'thead',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('th', null, u.name),
                  o.a.createElement('th', null, u.description),
                  o.a.createElement('th', null, u.type),
                  o.a.createElement('th', null, u.default),
                ),
              ),
              o.a.createElement(
                'tbody',
                null,
                r[n].map((e) =>
                  o.a.createElement(
                    'tr',
                    { key: e.identifier },
                    o.a.createElement('td', null, e.identifier),
                    o.a.createElement('td', null, e.description || '--'),
                    o.a.createElement('td', null, o.a.createElement('code', null, e.type)),
                    o.a.createElement(
                      'td',
                      null,
                      o.a.createElement('code', null, e.default || (e.required && u.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    'W/fF': function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        o = n.n(a),
        c = n('dEAq'),
        l = n('1R9V'),
        r = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        i = n('Rsk4').default['toast-demo'].component;
      t['default'] = function () {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              'div',
              { className: 'markdown' },
              o.a.createElement(
                'h1',
                { id: 'toast-\u8f7b\u63d0\u793a' },
                o.a.createElement(
                  c['AnchorLink'],
                  { to: '#toast-\u8f7b\u63d0\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  o.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Toast \u8f7b\u63d0\u793a',
              ),
              o.a.createElement(
                'p',
                null,
                '\u5728\u5c4f\u5e55\u4e2d\u5fc3\u5f39\u51fa\u63d0\u793a\uff0c\u5c3d\u53ef\u80fd\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u3002',
              ),
              o.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                o.a.createElement(
                  c['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  o.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            o.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Toast, Button } from 'weui-react-v2';\nimport './demo.less';\n\nexport default () => (\n  <div className=\"toast-demo\">\n    <Button block onClick={() => Toast.text('\u4e00\u884c\u6587\u672c')}>\n      \u6587\u672c\u63d0\u793a\n    </Button>\n    <Button block onClick={() => Toast.success('\u63d0\u4ea4\u6210\u529f')}>\n      \u6210\u529f\u63d0\u793a\n    </Button>\n    <Button block onClick={() => Toast.fail('\u63d0\u4ea4\u5931\u8d25')}>\n      \u5931\u8d25\u63d0\u793a\n    </Button>\n    <Button block onClick={() => Toast.loading('\u6b63\u5728\u52a0\u8f7d...')}>\n      \u52a0\u8f7d\u4e2d\n    </Button>\n  </div>\n);\n",
                    tsx:
                      "import React, { useState } from 'react';\nimport { Toast, Button } from 'weui-react-v2';\nimport './demo.less';\n\nexport default () => {\n  return (\n    <div className=\"toast-demo\">\n      <Button block={true} onClick={() => Toast.text('\u4e00\u884c\u6587\u672c')}>\n        \u6587\u672c\u63d0\u793a\n      </Button>\n      <Button block={true} onClick={() => Toast.success('\u63d0\u4ea4\u6210\u529f')}>\n        \u6210\u529f\u63d0\u793a\n      </Button>\n      <Button block={true} onClick={() => Toast.fail('\u63d0\u4ea4\u5931\u8d25')}>\n        \u5931\u8d25\u63d0\u793a\n      </Button>\n      <Button block={true} onClick={() => Toast.loading('\u6b63\u5728\u52a0\u8f7d...')}>\n        \u52a0\u8f7d\u4e2d\n      </Button>\n    </div>\n  );\n};\n",
                  },
                  'demo.less': {
                    import: './demo.less',
                    content: '.toast-demo {\n  .weui-btn {\n    margin-top: 20px;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u8f7b\u63d0\u793a',
                description:
                  '<div class="markdown"><p>\u5927\u90e8\u5206\u90fd\u662f\u7531js\u5f39\u51fa\u64cd\u4f5c, <code>duration</code>\u6301\u7eed\u4e8b\u4ef6\u8bbe\u4e3a0\u5219\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed</p></div>',
                identifier: 'toast-demo',
              },
              o.a.createElement(i, null),
            ),
            o.a.createElement(
              'div',
              { className: 'markdown' },
              o.a.createElement(
                'p',
                null,
                o.a.createElement(
                  'h2',
                  { id: 'api' },
                  o.a.createElement(
                    c['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    o.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                o.a.createElement(
                  'h3',
                  { id: 'api-toast' },
                  o.a.createElement(
                    c['AnchorLink'],
                    { to: '#api-toast', 'aria-hidden': 'true', tabIndex: -1 },
                    o.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Toast',
                ),
                o.a.createElement(r['a'], {
                  src: '../../../src/Toast/Toast.tsx',
                  identifier: '../../../src/Toast/Toast.tsx',
                  export: 'Toast',
                }),
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
