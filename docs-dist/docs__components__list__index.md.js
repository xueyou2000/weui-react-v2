(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
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
      var i = n('cDcd'),
        a = n.n(i),
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
          s = Object(i['useContext'])(r['context']),
          m = s.locale,
          o = l[m] || l['en-US'];
        return a.a.createElement(
          a.a.Fragment,
          null,
          c &&
            a.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, o.name),
                  a.a.createElement('th', null, o.description),
                  a.a.createElement('th', null, o.type),
                  a.a.createElement('th', null, o.default),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                c[n].map((e) =>
                  a.a.createElement(
                    'tr',
                    { key: e.identifier },
                    a.a.createElement('td', null, e.identifier),
                    a.a.createElement('td', null, e.description || '--'),
                    a.a.createElement('td', null, a.a.createElement('code', null, e.type)),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, e.default || (e.required && o.required) || '--'),
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
    w92d: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n('cDcd'),
        a = n.n(i),
        r = n('dEAq'),
        l = n('1R9V'),
        c = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        s = n('Rsk4').default['components-list'].component;
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
                { id: 'list-\u5217\u8868' },
                a.a.createElement(
                  r['AnchorLink'],
                  { to: '#list-\u5217\u8868', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'List \u5217\u8868',
              ),
              a.a.createElement(
                'p',
                null,
                '\u5355\u4e2a\u8fde\u7eed\u6a21\u5757\u5782\u76f4\u6392\u5217\uff0c\u663e\u793a\u5f53\u524d\u7684\u5185\u5bb9\u3001\u72b6\u6001\u548c\u53ef\u8fdb\u884c\u7684\u64cd\u4f5c\u3002',
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
                      'import React from \'react\';\nimport { List, ListItem } from \'weui-react-v2\';\nimport { CheckCircleFilled } from \'@ant-design/icons\';\n\nexport default () => (\n  <div\n    style={{\n      minHeight: \'100vh\',\n      backgroundColor: \'#f4f4f4\',\n      padding: \'30px\',\n      margin: \'-28px\',\n    }}\n  >\n    <List title="\u5e26\u8bf4\u660e\u7684\u5217\u8868">\n      <ListItem extra="\u8bf4\u660e\u6587\u5b57">\u6807\u9898\u6587\u5b57</ListItem>\n      <ListItem extra="\u8bf4\u660e\u6587\u5b57">\u6807\u9898\u6587\u5b57</ListItem>\n    </List>\n    <List title="\u5e26\u56fe\u6807\uff0c\u8bf4\u660e\u7684\u5217\u8868">\n      <ListItem\n        thumb={\n          <CheckCircleFilled\n            style={{\n              color: \'#07c160\',\n            }}\n          />\n        }\n        extra="\u8bf4\u660e\u6587\u5b57"\n      >\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n      <ListItem\n        thumb={\n          <CheckCircleFilled\n            style={{\n              color: \'#07c160\',\n            }}\n          />\n        }\n        extra="\u8bf4\u660e\u6587\u5b57"\n      >\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n    </List>\n    <List title="\u5e26\u8df3\u8f6c\u7684\u5217\u8868">\n      <ListItem arrow extra="\u8bf4\u660e\u6587\u5b57">\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n      <ListItem arrow="up" extra="\u8bf4\u660e\u6587\u5b57">\n        \u4e0a\u7bad\u5934\n      </ListItem>\n      <ListItem arrow="down" extra="\u8bf4\u660e\u6587\u5b57">\n        \u4e0b\u7bad\u5934\n      </ListItem>\n    </List>\n    <List title="\u5e26\u56fe\u6807\uff0c\u8bf4\u660e, \u8df3\u8f6c\u7684\u5217\u8868">\n      <ListItem\n        arrow\n        thumb={\n          <CheckCircleFilled\n            style={{\n              color: \'#07c160\',\n            }}\n          />\n        }\n        extra="\u8bf4\u660e\u6587\u5b57"\n      >\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n      <ListItem\n        arrow\n        thumb={\n          <CheckCircleFilled\n            style={{\n              color: \'#07c160\',\n            }}\n          />\n        }\n        extra="\u8bf4\u660e\u6587\u5b57"\n      >\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n    </List>\n  </div>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { List, ListItem } from \'weui-react-v2\';\nimport { CheckCircleFilled } from \'@ant-design/icons\';\n\nexport default () => (\n  <div style={{ minHeight: \'100vh\', backgroundColor: \'#f4f4f4\', padding: \'30px\', margin: \'-28px\' }}>\n    <List title="\u5e26\u8bf4\u660e\u7684\u5217\u8868">\n      <ListItem extra="\u8bf4\u660e\u6587\u5b57">\u6807\u9898\u6587\u5b57</ListItem>\n      <ListItem extra="\u8bf4\u660e\u6587\u5b57">\u6807\u9898\u6587\u5b57</ListItem>\n    </List>\n    <List title="\u5e26\u56fe\u6807\uff0c\u8bf4\u660e\u7684\u5217\u8868">\n      <ListItem thumb={<CheckCircleFilled style={{ color: \'#07c160\' }} />} extra="\u8bf4\u660e\u6587\u5b57">\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n      <ListItem thumb={<CheckCircleFilled style={{ color: \'#07c160\' }} />} extra="\u8bf4\u660e\u6587\u5b57">\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n    </List>\n    <List title="\u5e26\u8df3\u8f6c\u7684\u5217\u8868">\n      <ListItem arrow={true} extra="\u8bf4\u660e\u6587\u5b57">\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n      <ListItem arrow="up" extra="\u8bf4\u660e\u6587\u5b57">\n        \u4e0a\u7bad\u5934\n      </ListItem>\n      <ListItem arrow="down" extra="\u8bf4\u660e\u6587\u5b57">\n        \u4e0b\u7bad\u5934\n      </ListItem>\n    </List>\n    <List title="\u5e26\u56fe\u6807\uff0c\u8bf4\u660e, \u8df3\u8f6c\u7684\u5217\u8868">\n      <ListItem arrow={true} thumb={<CheckCircleFilled style={{ color: \'#07c160\' }} />} extra="\u8bf4\u660e\u6587\u5b57">\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n      <ListItem arrow={true} thumb={<CheckCircleFilled style={{ color: \'#07c160\' }} />} extra="\u8bf4\u660e\u6587\u5b57">\n        \u6807\u9898\u6587\u5b57\n      </ListItem>\n    </List>\n  </div>\n);',
                  },
                },
                dependencies: {
                  react: { version: '17.0.1' },
                  'weui-react-v2': { version: '3.0.0-beta.2' },
                  '@ant-design/icons': { version: '4.2.2' },
                },
                title: '\u52a0\u8f7d\u4e2d',
                identifier: 'components-list',
              },
              a.a.createElement(s, null),
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
                a.a.createElement(c['a'], {
                  src: '../../../src/List/index.tsx',
                  identifier: 'List',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
  },
]);
