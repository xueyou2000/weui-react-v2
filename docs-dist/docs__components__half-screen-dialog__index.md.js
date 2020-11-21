(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    ETfu: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        i = t.n(a),
        l = t('dEAq'),
        r = t('1R9V'),
        c = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        o = t('Rsk4').default['half-screen-dialog-confirm'].component,
        s = t('Rsk4').default['components-half-screen-dialog'].component;
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
                { id: 'halfscreendialog-\u534a\u5c4f\u5bf9\u8bdd\u6846' },
                i.a.createElement(
                  l['AnchorLink'],
                  { to: '#halfscreendialog-\u534a\u5c4f\u5bf9\u8bdd\u6846', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'HalfScreenDialog \u534a\u5c4f\u5bf9\u8bdd\u6846',
              ),
              i.a.createElement(
                'p',
                null,
                '\u4ece\u5e95\u90e8\u5f39\u51fa\u5bf9\u8bdd\u6846\uff0c \u5e38\u89c1\u4e8e\u5185\u5bb9\u786e\u8ba4\u7b49\u573a\u666f\u3002',
              ),
              i.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                i.a.createElement(
                  l['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            i.a.createElement(
              r['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React, { useState } from \'react\';\nimport { HalfScreenDialog, Button } from \'weui-react-v2\';\nimport \'./demo.less\';\n\nexport default () => {\n  const [visible, setVisible] = useState(false);\n\n  function handleConfirm() {\n    return new Promise((resovle, reject) => {\n      setTimeout(() => {\n        resovle();\n      }, 2000);\n    });\n  }\n\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>\u5f39\u51fa\u534a\u5c4f</Button>\n\n      <HalfScreenDialog\n        visible={visible}\n        onVisibleChange={setVisible}\n        title="\u5f39\u51fa\u6846\u6807\u9898"\n        subTitle="\u5b50\u6807\u9898"\n        onConfirm={handleConfirm}\n      >\n        <p className="weui-half-screen-dialog__desc">\u8f85\u52a9\u63cf\u8ff0\u5185\u5bb9\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u9700\u8981\u5b89\u6392</p>\n        <p className="weui-half-screen-dialog__tips">\u8f85\u52a9\u63d0\u793a\u5185\u5bb9\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u9700\u8981\u5b89\u6392</p>\n      </HalfScreenDialog>\n    </div>\n  );\n};\n',
                    tsx:
                      'import React, { useState } from \'react\';\nimport { HalfScreenDialog, Button, Grid, GridItem } from \'weui-react-v2\';\nimport \'./demo.less\';\n\nexport default () => {\n  const [visible, setVisible] = useState(false);\n\n  function handleConfirm() {\n    return new Promise((resovle, reject) => {\n      setTimeout(() => {\n        resovle();\n      }, 2000);\n    });\n  }\n\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>\u5f39\u51fa\u534a\u5c4f</Button>\n\n      <HalfScreenDialog\n        visible={visible}\n        onVisibleChange={setVisible}\n        title="\u5f39\u51fa\u6846\u6807\u9898"\n        subTitle="\u5b50\u6807\u9898"\n        onConfirm={handleConfirm}\n      >\n        <p className="weui-half-screen-dialog__desc">\u8f85\u52a9\u63cf\u8ff0\u5185\u5bb9\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u9700\u8981\u5b89\u6392</p>\n        <p className="weui-half-screen-dialog__tips">\u8f85\u52a9\u63d0\u793a\u5185\u5bb9\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u9700\u8981\u5b89\u6392</p>\n      </HalfScreenDialog>\n    </div>\n  );\n};\n',
                  },
                  'demo.less': {
                    import: './demo.less',
                    content:
                      '.weui-half-screen-dialog__tips {\n  padding-top: 32px;\n  font-size: 28px;\n  color: rgba(0, 0, 0, 0.3);\n  line-height: 1.4;\n  margin: 0;\n}\n.weui-half-screen-dialog__desc {\n  padding-top: 8px;\n  font-size: 34px;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.9);\n  line-height: 1.4;\n  margin: 0;\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u786e\u5b9a\u6309\u94ae',
                description:
                  '<div class="markdown"><p>\u786e\u5b9a\u6309\u94ae\u4e8b\u4ef6\u662f\u4e00\u4e2a<code>Promise</code>, \u5728\u8fd4\u56de\u4e4b\u524d\u6309\u94ae\u4f1a\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001</p></div>',
                identifier: 'half-screen-dialog-confirm',
              },
              i.a.createElement(o, null),
            ),
            i.a.createElement('div', { className: 'markdown' }),
            i.a.createElement(
              r['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { HalfScreenDialogPop, Button } from 'weui-react-v2';\n\nfunction pop() {\n  HalfScreenDialogPop({\n    title: '\u6807\u9898',\n    children: (\n      <p\n        style={{\n          fontSize: '24px',\n        }}\n      >\n        \u53ef\u653e\u5165\u81ea\u5b9a\u4e49\u5185\u5bb9\n      </p>\n    ),\n  });\n}\n\nexport default () => (\n  <>\n    <Button onClick={pop}>js\u5f39\u51fa</Button>\n  </>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { HalfScreenDialogPop, Button } from 'weui-react-v2';\n\nfunction pop() {\n  HalfScreenDialogPop({\n    title: '\u6807\u9898',\n    children: <p style={{ fontSize: '24px' }}>\u53ef\u653e\u5165\u81ea\u5b9a\u4e49\u5185\u5bb9</p>,\n  });\n}\n\nexport default () => (\n  <>\n    <Button onClick={pop}>js\u5f39\u51fa</Button>\n  </>\n);",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: 'js\u5f39\u51fa',
                description:
                  '<div class="markdown"><p>\u4f7f\u7528<code>HalfScreenDialogPop</code>\u65b9\u6cd5\u7528\u4ee3\u7801\u5f39\u51fa\u534a\u5c4f\u7ec4\u4ef6</p></div>',
                identifier: 'components-half-screen-dialog',
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
                    l['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                i.a.createElement(
                  'h3',
                  { id: 'api-halfscreendialog' },
                  i.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-halfscreendialog', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'HalfScreenDialog',
                ),
                i.a.createElement(c['a'], {
                  src: '../../../src/HalfScreenDialog/HalfScreenDialog.tsx',
                  identifier: '../../../src/HalfScreenDialog/HalfScreenDialog.tsx',
                  export: 'HalfScreenDialog',
                }),
              ),
            ),
          ),
        );
      };
    },
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
        l = t('dEAq'),
        r = {
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
          c = Object(l['useApiData'])(n),
          o = Object(a['useContext'])(l['context']),
          s = o.locale,
          d = r[s] || r['en-US'];
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
                  i.a.createElement('th', null, d.name),
                  i.a.createElement('th', null, d.description),
                  i.a.createElement('th', null, d.type),
                  i.a.createElement('th', null, d.default),
                ),
              ),
              i.a.createElement(
                'tbody',
                null,
                c[t].map((e) =>
                  i.a.createElement(
                    'tr',
                    { key: e.identifier },
                    i.a.createElement('td', null, e.identifier),
                    i.a.createElement('td', null, e.description || '--'),
                    i.a.createElement('td', null, i.a.createElement('code', null, e.type)),
                    i.a.createElement(
                      'td',
                      null,
                      i.a.createElement('code', null, e.default || (e.required && d.required) || '--'),
                    ),
                  ),
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
