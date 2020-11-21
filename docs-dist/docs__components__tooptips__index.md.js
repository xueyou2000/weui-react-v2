(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [22],
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
        c = n.n(a),
        l = n('dEAq'),
        i = {
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
          r = Object(l['useApiData'])(t),
          o = Object(a['useContext'])(l['context']),
          p = o.locale,
          s = i[p] || i['en-US'];
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
                  c.a.createElement('th', null, s.name),
                  c.a.createElement('th', null, s.description),
                  c.a.createElement('th', null, s.type),
                  c.a.createElement('th', null, s.default),
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
                      c.a.createElement('code', null, e.default || (e.required && s.required) || '--'),
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
    w0Im: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        c = n.n(a),
        l = n('dEAq'),
        i = n('1R9V'),
        r = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        o = n('Rsk4').default['components-tooptips'].component;
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
                { id: 'toptips-\u63d0\u793a' },
                c.a.createElement(
                  l['AnchorLink'],
                  { to: '#toptips-\u63d0\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Toptips \u63d0\u793a',
              ),
              c.a.createElement(
                'p',
                null,
                '\u4ece\u5c4f\u5e55\u9876\u90e8\u5f39\u51fa\u63d0\u793a\u5185\u5bb9, \u7531\u4e8e\u6b64\u529f\u80fd\u5e38\u7528',
                c.a.createElement('code', null, 'js'),
                '\u64cd\u4f5c\u7684\u573a\u666f\uff0c\u6240\u4ee5\u63d0\u4f9b\u4e86',
                c.a.createElement('code', null, 'ToptipsPop'),
                '\u65b9\u6cd5\uff0c\u76f4\u63a5\u4ece',
                c.a.createElement('code', null, 'js'),
                '\u4f7f\u7528',
              ),
              c.a.createElement(
                'h2',
                { id: '\u4f55\u65f6\u4f7f\u7528' },
                c.a.createElement(
                  l['AnchorLink'],
                  { to: '#\u4f55\u65f6\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                  c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4f55\u65f6\u4f7f\u7528',
              ),
              c.a.createElement(
                'ul',
                null,
                c.a.createElement('li', null, '\u8868\u5355\u9a8c\u8bc1\u7ed3\u679c'),
                c.a.createElement('li', null, '\u8f7b\u63d0\u793a\uff0c\u4e0d\u6253\u65ad\u7528\u6237\u64cd\u4f5c'),
              ),
              c.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                c.a.createElement(
                  l['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            c.a.createElement(
              i['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Toptips, Button, WhiteSpace } from 'weui-react-v2';\n\nexport default () => (\n  <>\n    <WhiteSpace size=\"lg\" />\n    <Button\n      block\n      onClick={() => {\n        console.log('\u6253\u5f00\u6210\u63d0\u793a');\n        Toptips('\u63d0\u4ea4\u6210\u529f', 'success');\n      }}\n    >\n      \u6210\u529f\u63d0\u793a\n    </Button>\n    <br />\n    <Button block onClick={() => Toptips('\u8bf7\u586b\u5199\u624b\u673a\u53f7', 'fail')}>\n      \u5931\u8d25\u63d0\u793a\n    </Button>\n    <br />\n    <Button block onClick={() => Toptips('\u8bf7\u586b\u5199\u624b\u673a\u53f7', 'default')}>\n      \u666e\u901a\u7c7b\u578b\n    </Button>\n  </>\n);\n",
                    tsx:
                      "import React, { useState } from 'react';\nimport { Toptips, Button, WhiteSpace } from 'weui-react-v2';\n\nexport default () => {\n  return (\n    <>\n      <WhiteSpace size=\"lg\" />\n      <Button\n        block={true}\n        onClick={() => {\n          console.log('\u6253\u5f00\u6210\u63d0\u793a');\n          Toptips('\u63d0\u4ea4\u6210\u529f', 'success');\n        }}\n      >\n        \u6210\u529f\u63d0\u793a\n      </Button>\n      <br />\n      <Button block={true} onClick={() => Toptips('\u8bf7\u586b\u5199\u624b\u673a\u53f7', 'fail')}>\n        \u5931\u8d25\u63d0\u793a\n      </Button>\n      <br />\n      <Button block={true} onClick={() => Toptips('\u8bf7\u586b\u5199\u624b\u673a\u53f7', 'default')}>\n        \u666e\u901a\u7c7b\u578b\n      </Button>\n    </>\n  );\n};",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u4e24\u79cd\u63d0\u793a',
                description:
                  '<div class="markdown"><p>\u5185\u7f6e\u6210\u529f\u548c\u5931\u8d25\u4e24\u79cd\u63d0\u793a \u8bbe\u7f6e <code>type</code> \u5c5e\u6027\u4e3a <code>success</code>, <code>fail</code>\u3002</p></div>',
                identifier: 'components-tooptips',
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
                    l['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                c.a.createElement(
                  'h3',
                  { id: 'api-toptips' },
                  c.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-toptips', 'aria-hidden': 'true', tabIndex: -1 },
                    c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Toptips',
                ),
                c.a.createElement(r['a'], {
                  src: '../../../src/Toptips/Toptips.tsx',
                  identifier: '../../../src/Toptips/Toptips.tsx',
                  export: 'Toptips',
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);
