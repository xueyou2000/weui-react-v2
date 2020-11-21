(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
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
      var l = n('cDcd'),
        a = n.n(l),
        m = n('dEAq'),
        x = {
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
          i = Object(m['useApiData'])(t),
          r = Object(l['useContext'])(m['context']),
          c = r.locale,
          s = x[c] || x['en-US'];
        return a.a.createElement(
          a.a.Fragment,
          null,
          i &&
            a.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, s.name),
                  a.a.createElement('th', null, s.description),
                  a.a.createElement('th', null, s.type),
                  a.a.createElement('th', null, s.default),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                i[n].map((e) =>
                  a.a.createElement(
                    'tr',
                    { key: e.identifier },
                    a.a.createElement('td', null, e.identifier),
                    a.a.createElement('td', null, e.description || '--'),
                    a.a.createElement('td', null, a.a.createElement('code', null, e.type)),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, e.default || (e.required && s.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    kERV: function (e, t, n) {},
    m2ph: function (e, t, n) {
      'use strict';
      n.r(t);
      var l = n('cDcd'),
        a = n.n(l),
        m = n('dEAq'),
        x = n('1R9V'),
        i = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        r = n('Rsk4').default['flex-flex'].component;
      t['default'] = function () {
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
                { id: 'flex-\u5f39\u6027\u5e03\u5c40' },
                a.a.createElement(
                  m['AnchorLink'],
                  { to: '#flex-\u5f39\u6027\u5e03\u5c40', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Flex \u5f39\u6027\u5e03\u5c40',
              ),
              a.a.createElement(
                'p',
                null,
                'Flex \u662f CSS flex \u5e03\u5c40\u7684\u4e00\u4e2a\u5c01\u88c5\u300224 \u6805\u683c\u5e03\u5c40, \u57fa\u4e8e\u884c(',
                a.a.createElement('code', null, 'FLex'),
                ')\u548c \u5217(',
                a.a.createElement('code', null, 'FLexItem'),
                ')\u6765\u6392\u7248.',
              ),
              a.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                a.a.createElement(
                  m['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            a.a.createElement(
              x['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { Flex, FlexItem } from \'weui-react-v2\';\nimport \'./flex-demo.less\';\n\nexport default () => (\n  <div className="flex-demo">\n    <p className="title">\u5de6\u5bf9\u9f50</p>\n    <Flex type="flex" justify="start">\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n    </Flex>\n\n    <p className="title">\u5c45\u4e2d\u5bf9\u9f50</p>\n    <Flex type="flex" justify="center">\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n    </Flex>\n\n    <p className="title">\u53f3\u5bf9\u9f50</p>\n    <Flex type="flex" justify="end">\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n    </Flex>\n\n    <p className="title">\u5747\u5206</p>\n    <Flex type="flex" justify="space-between">\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n    </Flex>\n\n    <p className="title">\u5747\u5206-\u4e24\u8fb9\u7559\u767d</p>\n    <Flex type="flex" justify="space-around">\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n      <FlexItem span={4}>4</FlexItem>\n    </Flex>\n  </div>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { Flex, FlexItem } from \'weui-react-v2\';\nimport \'./flex-demo.less\';\n\nexport default () => {\n  return (\n    <div className="flex-demo">\n      <p className="title">\u5de6\u5bf9\u9f50</p>\n      <Flex type="flex" justify="start">\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n      </Flex>\n\n      <p className="title">\u5c45\u4e2d\u5bf9\u9f50</p>\n      <Flex type="flex" justify="center">\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n      </Flex>\n\n      <p className="title">\u53f3\u5bf9\u9f50</p>\n      <Flex type="flex" justify="end">\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n      </Flex>\n\n      <p className="title">\u5747\u5206</p>\n      <Flex type="flex" justify="space-between">\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n      </Flex>\n\n      <p className="title">\u5747\u5206-\u4e24\u8fb9\u7559\u767d</p>\n      <Flex type="flex" justify="space-around">\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n        <FlexItem span={4}>4</FlexItem>\n      </Flex>\n    </div>\n  );\n};\n',
                  },
                  'flex-demo.less': {
                    import: './flex-demo.less',
                    content:
                      '.flex-demo {\n  .title {\n    font-size: 34px;\n    padding: 20px 10px;\n    font-weight: bold;\n  }\n\n  .title + .title {\n    margin-top: 50px;\n  }\n\n  .ant-col {\n    min-height: 30px;\n    margin-top: 8px;\n    margin-bottom: 8px;\n    padding: 5px 0;\n    color: #fff;\n    text-align: center;\n    border-radius: 0;\n    font-size: 24px;\n    padding: 16px 0;\n    background: #00a0e9;\n\n    &:nth-child(2n + 1) {\n      background: rgba(0, 160, 233, 0.7);\n    }\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u5bf9\u5176\u65b9\u5f0f',
                description:
                  '<div class="markdown"><p>\u6839\u636e\u4e3b\u8f74\u8fdb\u884c\u5de6\u5bf9\u9f50\uff0c\u5c45\u4e2d\u5bf9\u9f50\uff0c\u53f3\u5bf9\u9f50</p></div>',
                identifier: 'flex-flex',
              },
              a.a.createElement(r, null),
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
                    m['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                a.a.createElement(
                  'h3',
                  { id: 'api-flex' },
                  a.a.createElement(
                    m['AnchorLink'],
                    { to: '#api-flex', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Flex',
                ),
                a.a.createElement(i['a'], {
                  src: '../../../src/Flex/Flex.tsx',
                  identifier: '../../../src/Flex/Flex.tsx',
                  export: 'Flex',
                }),
              ),
              a.a.createElement(
                'p',
                null,
                a.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  a.a.createElement(
                    m['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                a.a.createElement(
                  'h3',
                  { id: 'api-flexitem' },
                  a.a.createElement(
                    m['AnchorLink'],
                    { to: '#api-flexitem', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'FLexItem',
                ),
                a.a.createElement(i['a'], {
                  src: '../../../src/Flex/FLexItem.tsx',
                  identifier: '../../../src/Flex/FLexItem.tsx',
                  export: 'FLexItem',
                }),
              ),
            ),
          ),
        );
      };
    },
    mlvz: function (e, t, n) {},
    tP8H: function (e, t, n) {
      'use strict';
      n('tJVT'), n('cDcd'), n('OGKa');
    },
  },
]);
