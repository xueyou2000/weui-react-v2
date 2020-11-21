(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
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
      n['a'] = (e) => {
        var n = e.identifier,
          t = e.export,
          c = Object(r['useApiData'])(n),
          o = Object(a['useContext'])(r['context']),
          d = o.locale,
          m = l[d] || l['en-US'];
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
                      i.a.createElement('code', null, e.default || (e.required && m.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    joAn: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        i = t.n(a),
        r = t('dEAq'),
        l = t('1R9V'),
        c = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        o = t('Rsk4').default['swipe-action-demo'].component;
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
                { id: 'swipeaction-\u6ed1\u52a8\u64cd\u4f5c' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#swipeaction-\u6ed1\u52a8\u64cd\u4f5c', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'SwipeAction \u6ed1\u52a8\u64cd\u4f5c',
              ),
              i.a.createElement('p', null, '\u6ed1\u52a8\u64cd\u4f5c\u7ec4\u4ef6\u3002'),
              i.a.createElement(
                'h2',
                { id: '\u5b9a\u4e49' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u5b9a\u4e49', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u5b9a\u4e49',
              ),
              i.a.createElement(
                'p',
                null,
                '\u7ed3\u5408\u624b\u52bf\u64cd\u4f5c\uff0c\u4ece\u5c4f\u5e55\u4e00\u4fa7\u5524\u51fa\u64cd\u4f5c\u3002',
              ),
              i.a.createElement(
                'h2',
                { id: '\u89c4\u5219' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u89c4\u5219', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u89c4\u5219',
              ),
              i.a.createElement(
                'ol',
                null,
                i.a.createElement('li', null, '\u4e00\u6b21\u53ea\u53ef\u6ed1\u52a8\u4e00\u884c\u5217\u8868'),
                i.a.createElement(
                  'li',
                  null,
                  '\u70b9\u51fb\u4efb\u610f\u6309\u94ae\u4e4b\u5916\u5904\u6216\u5f80\u56de\u6ed1\u52a8\u8be5\u5217\u8868\u53ef\u9690\u85cf\u64cd\u4f5c\u3002',
                ),
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
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { List, ListItem, SwipeAction } from 'weui-react-v2';\nimport './index.less';\n\nexport default () => (\n  <div className=\"swiper-action-demo\">\n    <List>\n      <SwipeAction right={[<a>\u5220\u9664</a>, <a>\u5f52\u6863</a>]}>\n        <ListItem>\u53f3\u4fa7\u6309\u94ae</ListItem>\n      </SwipeAction>\n      <SwipeAction left={[<a>\u5220\u9664</a>, <a>\u5f52\u6863</a>]}>\n        <ListItem>\u5de6\u4fa7\u6309\u94ae</ListItem>\n      </SwipeAction>\n      <SwipeAction\n        left={[\n          <a\n            style={{\n              backgroundColor: '#108ee9',\n            }}\n          >\n            \u5df2\u8bfb\n          </a>,\n          <a onClick={() => alert('\u70b9\u51fb\u4e86\u56de\u590d\u6309\u94ae')}>\u56de\u590d</a>,\n        ]}\n        right={[\n          <a\n            style={{\n              backgroundColor: 'red',\n            }}\n          >\n            \u5220\u9664\n          </a>,\n          <a>\u5f52\u6863</a>,\n        ]}\n      >\n        <ListItem>\u79d8\u7b08\uff1a \u5de6\u53f3\u64cd\u4f5c</ListItem>\n      </SwipeAction>\n    </List>\n  </div>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { List, ListItem, SwipeAction } from 'weui-react-v2';\nimport './index.less';\n\nexport default () => {\n  return (\n    <div className=\"swiper-action-demo\">\n      <List>\n        <SwipeAction right={[<a>\u5220\u9664</a>, <a>\u5f52\u6863</a>]}>\n          <ListItem>\u53f3\u4fa7\u6309\u94ae</ListItem>\n        </SwipeAction>\n        <SwipeAction left={[<a>\u5220\u9664</a>, <a>\u5f52\u6863</a>]}>\n          <ListItem>\u5de6\u4fa7\u6309\u94ae</ListItem>\n        </SwipeAction>\n        <SwipeAction\n          left={[\n            <a style={{ backgroundColor: '#108ee9' }}>\u5df2\u8bfb</a>,\n            <a onClick={() => alert('\u70b9\u51fb\u4e86\u56de\u590d\u6309\u94ae')}>\u56de\u590d</a>,\n          ]}\n          right={[<a style={{ backgroundColor: 'red' }}>\u5220\u9664</a>, <a>\u5f52\u6863</a>]}\n        >\n          <ListItem>\u79d8\u7b08\uff1a \u5de6\u53f3\u64cd\u4f5c</ListItem>\n        </SwipeAction>\n      </List>\n    </div>\n  );\n};\n",
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      'html,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n#root {\n  width: 100%;\n  height: 100%;\n  // background-color: rgb(244, 244, 244);\n  overflow-y: auto;\n  -webkit-overflow-scrolling: auto;\n}\n#root .__dumi-default-mobile-demo-layout {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u5de6\u53f3\u6ed1\u52a8\u663e\u793a\u6309\u94ae',
                description:
                  '<div class="markdown"><p>\u53ef\u8bbe\u7f6e\u6ed1\u52a8\u6253\u5f00\u8ddd\u79bb</p></div>',
                identifier: 'swipe-action-demo',
              },
              i.a.createElement(o, null),
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
                i.a.createElement(c['a'], {
                  src: '../../../src/SwipeAction/index.tsx',
                  identifier: 'SwipeAction',
                  export: 'default',
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
