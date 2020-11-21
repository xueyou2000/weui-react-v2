(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [0],
  {
    DUAz: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        c = n.n(a),
        o = n('dEAq'),
        i = n('1R9V'),
        r = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        l = n('Rsk4').default['components-action-sheet'].component;
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
                { id: 'actionsheet-\u5f39\u51fa\u5f0f\u83dc\u5355' },
                c.a.createElement(
                  o['AnchorLink'],
                  { to: '#actionsheet-\u5f39\u51fa\u5f0f\u83dc\u5355', 'aria-hidden': 'true', tabIndex: -1 },
                  c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'ActionSheet \u5f39\u51fa\u5f0f\u83dc\u5355',
              ),
              c.a.createElement(
                'p',
                null,
                '\u4ece\u5e95\u90e8\u5f39\u51fa\u83dc\u5355\uff0c\u5feb\u901f\u9009\u62e9\u3002',
              ),
              c.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                c.a.createElement(
                  o['AnchorLink'],
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
                      "import React from 'react';\nimport { ActionSheet, Button } from 'weui-react-v2';\n\nfunction pop() {\n  ActionSheet({\n    title: '\u8bf7\u9009\u62e9\u559c\u6b22\u7684\u6c34\u679c?',\n    menus: ['\u82f9\u679c', '\u897f\u74dc', '\u68a8\u5b50'],\n    rootSelector: '#root',\n    onClick: index =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          resolve();\n        }, 2000);\n      }),\n  });\n}\n\nexport default () => (\n  <>\n    <Button onClick={pop}>\u70b9\u51fb\u9009\u62e9</Button>\n    <img\n      style={{\n        width: '100%',\n        display: 'block',\n      }}\n      src=\"https://images.pexels.com/photos/1239387/pexels-photo-1239387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\"\n      alt=\"\"\n    />\n    <img\n      style={{\n        width: '100%',\n        display: 'block',\n      }}\n      src=\"https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940\"\n      alt=\"\"\n    />\n  </>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { ActionSheet, Button } from 'weui-react-v2';\n\nfunction pop() {\n  ActionSheet({\n    title: '\u8bf7\u9009\u62e9\u559c\u6b22\u7684\u6c34\u679c?',\n    menus: ['\u82f9\u679c', '\u897f\u74dc', '\u68a8\u5b50'],\n    rootSelector: '#root',\n    onClick: (index) => {\n      return new Promise((resolve, reject) => {\n        setTimeout(() => {\n          resolve();\n        }, 2000);\n      });\n    },\n  });\n}\n\nexport default () => (\n  <>\n    <Button onClick={pop}>\u70b9\u51fb\u9009\u62e9</Button>\n    <img\n      style={{ width: '100%', display: 'block' }}\n      src=\"https://images.pexels.com/photos/1239387/pexels-photo-1239387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\"\n      alt=\"\"\n    />\n    <img\n      style={{ width: '100%', display: 'block' }}\n      src=\"https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940\"\n      alt=\"\"\n    />\n  </>\n);",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u914d\u7f6e\u83dc\u5355',
                description:
                  '<div class="markdown"><p>\u8bbe\u7f6e<code>menus</code>\u5c5e\u6027\u6765\u914d\u7f6e\u83dc\u5355\uff0c<code>onClick</code>\u76d1\u542c\u83dc\u5355\u70b9\u51fb\u4e8b\u4ef6</p></div>',
                identifier: 'components-action-sheet',
              },
              c.a.createElement(l, null),
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
                    o['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                c.a.createElement(
                  'h3',
                  { id: 'api-actionsheet' },
                  c.a.createElement(
                    o['AnchorLink'],
                    { to: '#api-actionsheet', 'aria-hidden': 'true', tabIndex: -1 },
                    c.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'ActionSheet',
                ),
                c.a.createElement(r['a'], {
                  src: '../../../src/ActionSheet/ActionSheet.tsx',
                  identifier: '../../../src/ActionSheet/ActionSheet.tsx',
                  export: 'ActionSheet',
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
        c = n.n(a),
        o = n('dEAq'),
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
          r = Object(o['useApiData'])(t),
          l = Object(a['useContext'])(o['context']),
          s = l.locale,
          m = i[s] || i['en-US'];
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
