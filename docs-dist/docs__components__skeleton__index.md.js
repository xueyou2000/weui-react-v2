(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
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
        i = n.n(a),
        r = n('dEAq'),
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
          c = Object(r['useApiData'])(t),
          o = Object(a['useContext'])(r['context']),
          s = o.locale,
          m = l[s] || l['en-US'];
        return i.a.createElement(
          i.a.Fragment,
          null,
          c &&
            i.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              i.a.createElement(
                'thead',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('th', null, m.name),
                  i.a.createElement('th', null, m.description),
                  i.a.createElement('th', null, m.type),
                  i.a.createElement('th', null, m.default),
                ),
              ),
              i.a.createElement(
                'tbody',
                null,
                c[n].map((e) =>
                  i.a.createElement(
                    'tr',
                    { key: e.identifier },
                    i.a.createElement('td', null, e.identifier),
                    i.a.createElement('td', null, e.description || '--'),
                    i.a.createElement('td', null, i.a.createElement('code', null, e.type)),
                    i.a.createElement(
                      'td',
                      null,
                      i.a.createElement('code', null, e.default || (e.required && m.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    XNTd: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        i = n.n(a),
        r = n('dEAq'),
        l = n('1R9V'),
        c = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        o = n('Rsk4').default['components-skeleton'].component,
        s = n('Rsk4').default['components-skeleton-1'].component;
      t['default'] = function () {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              'div',
              { className: 'markdown' },
              i.a.createElement(
                'h1',
                { id: 'skeleton-\u9aa8\u67b6\u5c4f' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#skeleton-\u9aa8\u67b6\u5c4f', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Skeleton \u9aa8\u67b6\u5c4f',
              ),
              i.a.createElement('p', null, '\u7528\u4e8e\u52a0\u8f7d\u4e2d\u7684\u6837\u5f0f'),
              i.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            i.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React, { useState } from 'react';\nimport { SafeArea, Skeleton, Button, WhiteSpace } from 'weui-react-v2';\nimport './index.less';\n\nexport default function app() {\n  const [loading, setLoading] = useState(true);\n  return (\n    <SafeArea className=\"safearea-demo\">\n      <Button onClick={() => setLoading(!loading)}>\u5207\u6362</Button>\n      <WhiteSpace />\n      <Skeleton loading={loading}>\n        <p>\u52a0\u8f7d\u5b8c\u6bd5</p>\n      </Skeleton>\n    </SafeArea>\n  );\n}\n",
                    tsx:
                      "import React, { useState } from 'react';\nimport { SafeArea, Skeleton, Stripe, Button, WhiteSpace } from 'weui-react-v2';\nimport './index.less';\n\nexport default function app() {\n  const [loading, setLoading] = useState(true);\n\n  return (\n    <SafeArea className=\"safearea-demo\">\n      <Button onClick={() => setLoading(!loading)}>\u5207\u6362</Button>\n      <WhiteSpace />\n      <Skeleton loading={loading}>\n        <p>\u52a0\u8f7d\u5b8c\u6bd5</p>\n      </Skeleton>\n    </SafeArea>\n  );\n}",
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.skeleton-demo {\n  .weui-item-bd {\n    flex: 0 0 160px;\n  }\n\n  .weui-item-ft {\n    flex: 1;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u5207\u6362\u52a0\u8f7d\u72b6\u6001',
                identifier: 'components-skeleton',
              },
              i.a.createElement(o, null),
            ),
            i.a.createElement('div', { className: 'markdown' }),
            i.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { SafeArea, Stripe, List, ListItem } from 'weui-react-v2';\nimport './index.less';\n\nexport default function app() {\n  return (\n    <SafeArea className=\"skeleton-demo\">\n      <List title=\"\u57fa\u672c\u4fe1\u606f\">\n        <ListItem extra={<Stripe />}>\u7528\u6237\u540d\u79f0:</ListItem>\n        <ListItem extra={<Stripe />}>\u624b\u673a\u53f7\u7801:</ListItem>\n      </List>\n    </SafeArea>\n  );\n}\n",
                    tsx:
                      "import React, { useState } from 'react';\nimport { SafeArea, Skeleton, Stripe, Button, WhiteSpace, Flex, FlexItem, List, ListItem } from 'weui-react-v2';\nimport './index.less';\n\nexport default function app() {\n  return (\n    <SafeArea className=\"skeleton-demo\">\n      <List title=\"\u57fa\u672c\u4fe1\u606f\">\n        <ListItem extra={<Stripe />}>\u7528\u6237\u540d\u79f0:</ListItem>\n        <ListItem extra={<Stripe />}>\u624b\u673a\u53f7\u7801:</ListItem>\n      </List>\n    </SafeArea>\n  );\n}",
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.skeleton-demo {\n  .weui-item-bd {\n    flex: 0 0 160px;\n  }\n\n  .weui-item-ft {\n    flex: 1;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: 'Stripe\u7528\u4e8e\u884c\u5185\u6570\u636e',
                identifier: 'components-skeleton-1',
              },
              i.a.createElement(s, null),
            ),
            i.a.createElement(
              'div',
              { className: 'markdown' },
              i.a.createElement(
                'p',
                null,
                i.a.createElement(
                  'h2',
                  { id: 'api' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                i.a.createElement(
                  'h3',
                  { id: 'api-skeleton' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-skeleton', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Skeleton',
                ),
                i.a.createElement(c['a'], {
                  src: '../../../src/Skeleton/Skeleton.tsx',
                  identifier: '../../../src/Skeleton/Skeleton.tsx',
                  export: 'Skeleton',
                }),
              ),
              i.a.createElement(
                'p',
                null,
                i.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                i.a.createElement(
                  'h3',
                  { id: 'api-stripe' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-stripe', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Stripe',
                ),
                i.a.createElement(c['a'], {
                  src: '../../../src/Skeleton/Stripe.tsx',
                  identifier: '../../../src/Skeleton/Stripe.tsx',
                  export: 'Stripe',
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
