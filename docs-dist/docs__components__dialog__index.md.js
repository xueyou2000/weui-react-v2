(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    HVN5: function (e, n, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('mlvz');
    },
    OGKa: function (e, n, t) {},
    'TN5+': function (e, n, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('kERV');
    },
    UpFc: function (e, n, t) {
      'use strict';
      var a = t('cDcd'),
        i = t.n(a),
        r = t('dEAq'),
        o = {
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
      n['a'] = (e) => {
        var n = e.identifier,
          t = e.export,
          l = Object(r['useApiData'])(n),
          c = Object(a['useContext'])(r['context']),
          s = c.locale,
          u = o[s] || o['en-US'];
        return i.a.createElement(
          i.a.Fragment,
          null,
          l &&
            i.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              i.a.createElement(
                'thead',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('th', null, u.name),
                  i.a.createElement('th', null, u.description),
                  i.a.createElement('th', null, u.type),
                  i.a.createElement('th', null, u.default),
                ),
              ),
              i.a.createElement(
                'tbody',
                null,
                l[t].map((e) =>
                  i.a.createElement(
                    'tr',
                    { key: e.identifier },
                    i.a.createElement('td', null, e.identifier),
                    i.a.createElement('td', null, e.description || '--'),
                    i.a.createElement('td', null, i.a.createElement('code', null, e.type)),
                    i.a.createElement(
                      'td',
                      null,
                      i.a.createElement('code', null, e.default || (e.required && u.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    i4s4: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        i = t.n(a),
        r = t('dEAq'),
        o = t('1R9V'),
        l = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        c = t('Rsk4').default['dialog-demo'].component,
        s = t('Rsk4').default['dialog-input'].component;
      n['default'] = function () {
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
                { id: 'dialog-\u6a21\u6001\u5bf9\u8bdd\u6846' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#dialog-\u6a21\u6001\u5bf9\u8bdd\u6846', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Dialog \u6a21\u6001\u5bf9\u8bdd\u6846',
              ),
              i.a.createElement(
                'p',
                null,
                '\u5c4f\u5e55\u4e2d\u5fc3\u5f39\u51fa\u6a21\u6001\u5bf9\u8bdd\u6846\uff0c\u8ba9\u7528\u6237\u8fdb\u884c\u9009\u62e9\u64cd\u4f5c\u3002',
              ),
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
              o['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Button, DialogPop } from 'weui-react-v2';\n\nexport default function() {\n  function pop() {\n    DialogPop({\n      title: '\u5bf9\u8bdd\u6846\u6807\u9898',\n      children: '\u5f39\u7a97\u5185\u5bb9\uff0c\u544a\u77e5\u5f53\u524d\u72b6\u6001\u3001\u4fe1\u606f\u548c\u89e3\u51b3\u65b9\u6cd5\uff0c\u63cf\u8ff0\u6587\u5b57\u5c3d\u91cf\u63a7\u5236\u5728\u4e09\u884c\u5185',\n      onConfirm: () =>\n        new Promise(resolve => {\n          setTimeout(() => {\n            resolve();\n          }, 2000);\n        }),\n    });\n  }\n\n  return (\n    <div>\n      <Button onClick={pop}>\u663e\u793a</Button>\n    </div>\n  );\n}\n",
                    tsx:
                      "import React from 'react';\nimport { Button, DialogPop } from 'weui-react-v2';\n\nexport default function () {\n  function pop() {\n    DialogPop({\n      title: '\u5bf9\u8bdd\u6846\u6807\u9898',\n      children: '\u5f39\u7a97\u5185\u5bb9\uff0c\u544a\u77e5\u5f53\u524d\u72b6\u6001\u3001\u4fe1\u606f\u548c\u89e3\u51b3\u65b9\u6cd5\uff0c\u63cf\u8ff0\u6587\u5b57\u5c3d\u91cf\u63a7\u5236\u5728\u4e09\u884c\u5185',\n      onConfirm: () => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            resolve();\n          }, 2000);\n        });\n      },\n    });\n  }\n\n  return (\n    <div>\n      <Button onClick={pop}>\u663e\u793a</Button>\n    </div>\n  );\n}\n",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u6a21\u6001\u5bf9\u8bdd\u6846',
                description:
                  '<div class="markdown"><p>\u5c5e\u6027\u57fa\u672c\u4e0e<code>HalfScreenDialog</code>\u4fdd\u6301\u4e00\u81f4</p></div>',
                identifier: 'dialog-demo',
              },
              i.a.createElement(c, null),
            ),
            i.a.createElement('div', { className: 'markdown' }),
            i.a.createElement(
              o['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React, { useState } from \'react\';\nimport { Button, Dialog } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default function() {\n  const [visible, setVisible] = useState(false);\n  const [char, setChar] = useState(\'Luck\');\n  const [error, setError] = useState(null);\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>\u663e\u793a</Button>\n\n      <Dialog\n        className="demo-prompt"\n        title="\u8f93\u5165\u6570\u503c"\n        visible={visible}\n        onVisibleChange={setVisible}\n        onConfirm={() =>\n          new Promise((resolve, reject) => {\n            if (char) {\n              console.log(\'\u5e78\u8fd0\u5b57\u7b26: \', char);\n              setTimeout(() => {\n                resolve();\n              }, 2000);\n            } else {\n              setError(\'\u8bf7\u8f93\u5165\u5e78\u8fd0\u5b57\u7b26!\');\n              reject();\n            }\n          })\n        }\n      >\n        <p className="title">\u8bf7\u8f93\u5165\u60a8\u7684\u5e78\u8fd0\u5b57\u7b26</p>\n        <div className="input-container">\n          <input\n            type="text"\n            value={char}\n            onInput={e => setChar(e.currentTarget.value)}\n            onFocus={() => setError(null)}\n          />\n        </div>\n        {error && <p className="tips">{error}</p>}\n      </Dialog>\n    </div>\n  );\n}\n',
                    tsx:
                      'import React, { useState } from \'react\';\nimport { Button, Dialog, Toast } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default function () {\n  const [visible, setVisible] = useState(false);\n  const [char, setChar] = useState(\'Luck\');\n  const [error, setError] = useState<string | null>(null);\n\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>\u663e\u793a</Button>\n\n      <Dialog\n        className="demo-prompt"\n        title="\u8f93\u5165\u6570\u503c"\n        visible={visible}\n        onVisibleChange={setVisible}\n        onConfirm={() => {\n          return new Promise((resolve, reject) => {\n            if (char) {\n              console.log(\'\u5e78\u8fd0\u5b57\u7b26: \', char);\n              setTimeout(() => {\n                resolve();\n              }, 2000);\n            } else {\n              setError(\'\u8bf7\u8f93\u5165\u5e78\u8fd0\u5b57\u7b26!\');\n              reject();\n            }\n          });\n        }}\n      >\n        <p className="title">\u8bf7\u8f93\u5165\u60a8\u7684\u5e78\u8fd0\u5b57\u7b26</p>\n        <div className="input-container">\n          <input\n            type="text"\n            value={char}\n            onInput={(e) => setChar(e.currentTarget.value)}\n            onFocus={() => setError(null)}\n          />\n        </div>\n        {error && <p className="tips">{error}</p>}\n      </Dialog>\n    </div>\n  );\n}\n',
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.demo-prompt {\n  .title {\n    font-size: 30px;\n    color: #888;\n    line-height: 1.5;\n  }\n  .tips {\n    font-size: 26px;\n    color: #ff4d4f;\n    margin-top: 10px;\n    margin-bottom: 0;\n    text-align: left;\n  }\n  .input-container {\n    margin-top: 18px;\n    border: 2px solid #ddd;\n    border-radius: 6px;\n    height: 72px;\n    line-height: 1;\n\n    input {\n      font-size: 30px;\n      position: relative;\n      border: 0;\n      width: 100%;\n      height: 100%;\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0 15px;\n    }\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u5c01\u88c5\u8f93\u5165\u6846',
                description:
                  '<div class="markdown"><p>\u6839\u636e\u4e1a\u52a1\u548c\u6837\u5f0f\u9700\u8981\uff0c\u81ea\u884c\u5c01\u88c5</p></div>',
                identifier: 'dialog-input',
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
                  { id: 'api-dialog' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-dialog', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Dialog',
                ),
                i.a.createElement(l['a'], {
                  src: '../../../src/Dialog/Dialog.tsx',
                  identifier: '../../../src/Dialog/Dialog.tsx',
                  export: 'Dialog',
                }),
              ),
            ),
          ),
        );
      };
    },
    kERV: function (e, n, t) {},
    mlvz: function (e, n, t) {},
    tP8H: function (e, n, t) {
      'use strict';
      t('tJVT'), t('cDcd'), t('OGKa');
    },
  },
]);
