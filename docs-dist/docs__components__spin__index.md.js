(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    GUXC: function (n, e, t) {
      'use strict';
      t.r(e);
      var i = t('cDcd'),
        a = t.n(i),
        r = t('dEAq'),
        l = t('1R9V'),
        s = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        o = t('Rsk4').default['components-spin'].component,
        c = t('Rsk4').default['spin-inline'].component,
        d = t('Rsk4').default['components-spin-1'].component;
      e['default'] = function () {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              'div',
              { className: 'markdown' },
              a.a.createElement(
                'h1',
                { id: 'spin-\u52a0\u8f7d\u4e2d' },
                a.a.createElement(
                  r['AnchorLink'],
                  { to: '#spin-\u52a0\u8f7d\u4e2d', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Spin \u52a0\u8f7d\u4e2d',
              ),
              a.a.createElement('p', null, '\u5305\u88f9\u5143\u7d20\uff0c\u663e\u793a\u52a0\u8f7d\u52a8\u753b\u3002'),
              a.a.createElement(
                'h2',
                { id: '\u4f55\u65f6\u4f7f\u7528' },
                a.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u4f55\u65f6\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4f55\u65f6\u4f7f\u7528',
              ),
              a.a.createElement(
                'ul',
                null,
                a.a.createElement('li', null, '\u62c9\u53d6\u6570\u636e'),
                a.a.createElement('li', null, '\u52a0\u8f7d\u9875\u9762'),
                a.a.createElement('li', null, '\u9875\u9762\u63d0\u4ea4\u7b49\u5f85'),
              ),
              a.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                a.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            a.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { Spin } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Spin spinning size="small" />\n    <br />\n    <Spin spinning />\n    <br />\n    <Spin spinning size="large" />\n  </>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { Spin } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Spin spinning={true} size="small" />\n    <br />\n    <Spin spinning={true} />\n    <br />\n    <Spin spinning={true} size="large" />\n  </>\n);',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u4e0d\u540c\u5c3a\u5bf8',
                description:
                  '<div class="markdown"><p>\u5185\u7f6e3\u79cd\u4e0d\u540c\u5c3a\u5bf8\uff0c \u8bbe\u7f6e <code>size</code> \u5c5e\u6027\u4e3a <code>small</code>, <code>large</code>, <code>default</code>\u3002</p></div>',
                identifier: 'components-spin',
              },
              a.a.createElement(o, null),
            ),
            a.a.createElement('div', { className: 'markdown' }),
            a.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React, { useState } from \'react\';\nimport { Spin } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default () => {\n  const [inline, setInline] = useState(false);\n  return (\n    <div className="spin-demo">\n      <Spin spinning inline={inline} tips="\u52a0\u8f7d\u4e2d...">\n        <div className="alert-box">\n          <span className="ant-alert-message">title</span>\n          <span className="ant-alert-description">\n            context of this alert.\n            <br />\n            \u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\u3002\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n          </span>\n        </div>\n      </Spin>\n      <br />\n      <button onClick={() => setInline(pre => !pre)}>\u5207\u6362\u5185\u8054\u72b6\u6001</button>\n    </div>\n  );\n};\n',
                    tsx:
                      'import React, { useState } from \'react\';\nimport { Spin } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default () => {\n  const [inline, setInline] = useState(false);\n\n  return (\n    <div className="spin-demo">\n      <Spin spinning={true} inline={inline} tips="\u52a0\u8f7d\u4e2d...">\n        <div className="alert-box">\n          <span className="ant-alert-message">title</span>\n          <span className="ant-alert-description">\n            context of this alert.\n            <br />\n            \u5c0f\u7684\u7528\u4e8e\u6587\u672c\u52a0\u8f7d\u3002\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n            <br />\n            \u66f4\u591a\u6587\u672c\n          </span>\n        </div>\n      </Spin>\n      <br />\n      <button onClick={() => setInline((pre) => !pre)}>\u5207\u6362\u5185\u8054\u72b6\u6001</button>\n    </div>\n  );\n};\n',
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.spin-demo {\n  .alert-box {\n    font-family: Monospaced Number, Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC,\n      Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 1.5;\n    color: rgba(0, 0, 0, 0.65);\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative;\n    padding: 8px 15px 8px 37px;\n    border-radius: 4px;\n    border: 1px solid #91d5ff;\n    background-color: #e6f7ff;\n    padding: 15px 15px 15px 64px;\n    position: relative;\n    border-radius: 4px;\n    color: rgba(0, 0, 0, 0.65);\n    line-height: 1.5;\n    padding: 15px;\n  }\n\n  .xy-spin {\n    margin-right: 16px;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: 'inline/block\u6a21\u5f0f\u5207\u6362',
                description:
                  '<div class="markdown"><p>\u9ed8\u8ba4\u662f\u5185\u8054\u6a21\u5f0f\uff0c<code>Spin</code>\u4e0d\u4f1a\u5bbd\u5ea6100%</p></div>',
                identifier: 'spin-inline',
              },
              a.a.createElement(c, null),
            ),
            a.a.createElement('div', { className: 'markdown' }),
            a.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Spin } from 'weui-react-v2';\nimport { LoadingOutlined } from '@ant-design/icons';\n\nexport default () => (\n  <div>\n    <Spin size=\"small\" spinning indicator={<LoadingOutlined spin />} />\n    <br />\n    <Spin spinning indicator={<LoadingOutlined spin />} />\n    <br />\n    <Spin size=\"large\" spinning indicator={<LoadingOutlined spin />} />\n  </div>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { Spin } from 'weui-react-v2';\nimport { LoadingOutlined } from '@ant-design/icons';\n\nexport default () => (\n  <div>\n    <Spin size=\"small\" spinning={true} indicator={<LoadingOutlined spin={true} />} />\n    <br />\n    <Spin spinning={true} indicator={<LoadingOutlined spin={true} />} />\n    <br />\n    <Spin size=\"large\" spinning={true} indicator={<LoadingOutlined spin={true} />} />\n  </div>\n);",
                  },
                },
                dependencies: {
                  react: { version: '17.0.1' },
                  'weui-react-v2': { version: '3.0.0-beta.2' },
                  '@ant-design/icons': { version: '4.2.2' },
                },
                title: '\u81ea\u5b9a\u4e49\u6307\u793a\u7b26',
                description:
                  '<div class="markdown"><p>\u8bbe\u7f6e indicator \u5c5e\u6027\uff0c\u81ea\u5b9a\u4e49\u52a0\u8f7d\u6307\u793a\u7b26\u3002</p></div>',
                identifier: 'components-spin-1',
              },
              a.a.createElement(d, null),
            ),
            a.a.createElement(
              'div',
              { className: 'markdown' },
              a.a.createElement(
                'p',
                null,
                a.a.createElement(
                  'h2',
                  { id: 'api' },
                  a.a.createElement(
                    r['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                a.a.createElement(s['a'], {
                  src: '../../../src/Spin/index.tsx',
                  identifier: 'Spin',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
    HVN5: function (n, e, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('mlvz');
    },
    OGKa: function (n, e, t) {},
    'TN5+': function (n, e, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('kERV');
    },
    UpFc: function (n, e, t) {
      'use strict';
      var i = t('cDcd'),
        a = t.n(i),
        r = t('dEAq'),
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
      e['a'] = (n) => {
        var e = n.identifier,
          t = n.export,
          s = Object(r['useApiData'])(e),
          o = Object(i['useContext'])(r['context']),
          c = o.locale,
          d = l[c] || l['en-US'];
        return a.a.createElement(
          a.a.Fragment,
          null,
          s &&
            a.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, d.name),
                  a.a.createElement('th', null, d.description),
                  a.a.createElement('th', null, d.type),
                  a.a.createElement('th', null, d.default),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                s[t].map((n) =>
                  a.a.createElement(
                    'tr',
                    { key: n.identifier },
                    a.a.createElement('td', null, n.identifier),
                    a.a.createElement('td', null, n.description || '--'),
                    a.a.createElement('td', null, a.a.createElement('code', null, n.type)),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, n.default || (n.required && d.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    kERV: function (n, e, t) {},
    mlvz: function (n, e, t) {},
    tP8H: function (n, e, t) {
      'use strict';
      t('tJVT'), t('cDcd'), t('OGKa');
    },
  },
]);
