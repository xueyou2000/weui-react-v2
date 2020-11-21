(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    HVN5: function (e, n, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('mlvz');
    },
    LwuZ: function (e, n, t) {
      'use strict';
      t.r(n);
      var r = t('cDcd'),
        a = t.n(r),
        l = t('dEAq'),
        i = t('1R9V'),
        o = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        c = t('Rsk4').default['pull-refresh-demo'].component;
      n['default'] = function () {
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
                { id: 'pullrefresh-\u4e0b\u62c9\u5237\u65b0' },
                a.a.createElement(
                  l['AnchorLink'],
                  { to: '#pullrefresh-\u4e0b\u62c9\u5237\u65b0', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'PullRefresh \u4e0b\u62c9\u5237\u65b0',
              ),
              a.a.createElement('p', null, '\u4e0b\u62c9\u5237\u65b0\u548c\u6eda\u52a8\u52a0\u8f7d\u7ec4\u4ef6'),
              a.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                a.a.createElement(
                  l['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            a.a.createElement(
              i['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React, { useState } from 'react';\nimport { PullRefresh, PullRefreshAction, Loadmore, Skeleton, SafeArea } from 'weui-react-v2';\nimport './index.less';\n\nconst MAX = 20;\n\nfunction makeArray(count) {\n  const arr = [];\n\n  for (let i = 0; i < count; ++i) {\n    arr.push(`${count}-${i}`);\n  }\n\n  return arr;\n}\n\nexport default () => {\n  const [action, setAction] = useState(PullRefreshAction.init);\n  const [data, setData] = useState([]);\n  const [nomore, setNomore] = useState(false);\n\n  function handleAction(act) {\n    if (act === action) {\n      return false;\n    }\n\n    if (act === PullRefreshAction.refreshing) {\n      // \u5237\u65b0\n      handRefreshing();\n    } else if (act === PullRefreshAction.loading) {\n      // \u5237\u65b0\n      handleLoadmore();\n    } else {\n      setAction(act);\n    }\n  }\n\n  function handRefreshing() {\n    if (action === PullRefreshAction.refreshing) {\n      return;\n    } // console.log('===\u300b \u5f00\u59cb\u5237\u65b0');\n\n    setTimeout(() => {\n      // console.log('===\u300b \u5237\u65b0\u5b8c\u6bd5');\n      setData(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);\n      setNomore(false);\n      setAction(PullRefreshAction.refreshed);\n    }, 3000);\n    setAction(PullRefreshAction.refreshing);\n  }\n\n  function handleLoadmore() {\n    if (data.length >= MAX) {\n      setAction(PullRefreshAction.reset);\n      setNomore(true);\n      return;\n    }\n\n    if (action === PullRefreshAction.loading) {\n      return;\n    } // console.log('===\u300b \u5f00\u59cb\u52a0\u8f7d');\n\n    setTimeout(() => {\n      // console.log('===\u300b \u52a0\u8f7d\u5b8c\u6bd5', data);\n      setData([...data, ...makeArray(5)]);\n      setAction(PullRefreshAction.reset);\n    }, 3000);\n    setAction(PullRefreshAction.loading);\n  }\n\n  return (\n    <SafeArea className=\"pull-refresh-demo\">\n      <div>\n        <p className=\"tips\">\u6211\u662f\u5934\u90e8</p>\n      </div>\n      <PullRefresh\n        action={action}\n        handleAction={handleAction}\n        scrollTarget={document.querySelector('#root')}\n      >\n        <ul className=\"fake-list\">\n          {data.length === 0 ? (\n            <Skeleton loading></Skeleton>\n          ) : (\n            data.map((x, i) => <li key={i}>\u5217\u8868{i}</li>)\n          )}\n          {nomore && <Loadmore tips=\"\u6682\u65e0\u66f4\u591a\" />}\n        </ul>\n      </PullRefresh>\n      <div>\n        <p className=\"tips\">\u6211\u662f\u5c3e\u90e8</p>\n      </div>\n    </SafeArea>\n  );\n};\n",
                    tsx:
                      "import React, { useEffect, useState } from 'react';\nimport { PullRefresh, PullRefreshAction, Loadmore, Skeleton, SafeArea } from 'weui-react-v2';\nimport './index.less';\n\nconst MAX = 20;\n\nfunction makeArray(count: number) {\n  const arr: Array<string> = [];\n\n  for (let i = 0; i < count; ++i) {\n    arr.push(count + '-' + i);\n  }\n\n  return arr;\n}\n\nexport default () => {\n  const [action, setAction] = useState(PullRefreshAction.init);\n  const [data, setData] = useState<Array<string>>([]);\n  const [nomore, setNomore] = useState(false);\n\n  function handleAction(act: PullRefreshAction) {\n    if (act === action) {\n      return false;\n    }\n    if (act === PullRefreshAction.refreshing) {\n      // \u5237\u65b0\n      handRefreshing();\n    } else if (act === PullRefreshAction.loading) {\n      // \u5237\u65b0\n      handleLoadmore();\n    } else {\n      setAction(act);\n    }\n  }\n\n  function handRefreshing() {\n    if (action === PullRefreshAction.refreshing) {\n      return;\n    }\n    // console.log('===\u300b \u5f00\u59cb\u5237\u65b0');\n    setTimeout(() => {\n      // console.log('===\u300b \u5237\u65b0\u5b8c\u6bd5');\n      setData(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);\n      setNomore(false);\n      setAction(PullRefreshAction.refreshed);\n    }, 3000);\n    setAction(PullRefreshAction.refreshing);\n  }\n\n  function handleLoadmore() {\n    if (data.length >= MAX) {\n      setAction(PullRefreshAction.reset);\n      setNomore(true);\n      return;\n    }\n    if (action === PullRefreshAction.loading) {\n      return;\n    }\n    // console.log('===\u300b \u5f00\u59cb\u52a0\u8f7d');\n    setTimeout(() => {\n      // console.log('===\u300b \u52a0\u8f7d\u5b8c\u6bd5', data);\n      setData([...data, ...makeArray(5)]);\n      setAction(PullRefreshAction.reset);\n    }, 3000);\n    setAction(PullRefreshAction.loading);\n  }\n\n  return (\n    <SafeArea className=\"pull-refresh-demo\">\n      <div>\n        <p className=\"tips\">\u6211\u662f\u5934\u90e8</p>\n      </div>\n      <PullRefresh action={action} handleAction={handleAction} scrollTarget={document.querySelector('#root')}>\n        <ul className=\"fake-list\">\n          {data.length === 0 ? <Skeleton loading={true}></Skeleton> : data.map((x, i) => <li key={i}>\u5217\u8868{i}</li>)}\n          {nomore && <Loadmore tips=\"\u6682\u65e0\u66f4\u591a\" />}\n        </ul>\n      </PullRefresh>\n      <div>\n        <p className=\"tips\">\u6211\u662f\u5c3e\u90e8</p>\n      </div>\n    </SafeArea>\n  );\n};\n",
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      'html,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n#root {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: auto;\n}\n.pull-refresh-demo {\n  .tips {\n    padding: 80px;\n    background-color: antiquewhite;\n    text-align: center;\n    font-size: 24px;\n    color: #000;\n    margin: 0;\n  }\n\n  .fake-list {\n    min-height: 600px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0;\n    margin: 20px 0;\n\n    li {\n      padding: 40px;\n      text-align: center;\n      font-size: 28px;\n      color: #000;\n      background-color: aliceblue;\n      margin-bottom: 20px;\n      overflow: hidden;\n      border-radius: 15px;\n    }\n  }\n}\n\n// html,\n// body {\n//   height: 100%;\n//   overflow: hidden;\n// }\n// #root {\n//   height: 100%;\n//   overflow: auto;\n// }\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u4e0b\u62c9\u5237\u65b0',
                description:
                  '<div class="markdown"><p>\u8bbe\u7f6e\u9608\u503c\u53ef\u4ee5\u6307\u5b9a\u4e0b\u62c9\u591a\u5c11\u8ddd\u79bb\uff0c\u677e\u5f00\u540e\u5237\u65b0</p></div>',
                identifier: 'pull-refresh-demo',
              },
              a.a.createElement(c, null),
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
                    l['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'default',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.init' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.init', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.init',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.init',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.pulling' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.pulling', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.pulling',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.pulling',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.enough' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.enough', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.enough',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.enough',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.refreshing' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.refreshing', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.refreshing',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.refreshing',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.refreshed' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.refreshed', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.refreshed',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.refreshed',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.reset' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.reset', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.reset',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.reset',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-pullrefreshaction.loading' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-pullrefreshaction.loading', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PullRefreshAction.loading',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'PullRefreshAction.loading',
                }),
                a.a.createElement(
                  'h3',
                  { id: 'api-direction' },
                  a.a.createElement(
                    l['AnchorLink'],
                    { to: '#api-direction', 'aria-hidden': 'true', tabIndex: -1 },
                    a.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Direction',
                ),
                a.a.createElement(o['a'], {
                  src: '../../../src/PullRefresh/index.tsx',
                  identifier: 'PullRefresh',
                  export: 'Direction',
                }),
              ),
            ),
          ),
        );
      };
    },
    OGKa: function (e, n, t) {},
    'TN5+': function (e, n, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('kERV');
    },
    UpFc: function (e, n, t) {
      'use strict';
      var r = t('cDcd'),
        a = t.n(r),
        l = t('dEAq'),
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
      n['a'] = (e) => {
        var n = e.identifier,
          t = e.export,
          o = Object(l['useApiData'])(n),
          c = Object(r['useContext'])(l['context']),
          s = c.locale,
          u = i[s] || i['en-US'];
        return a.a.createElement(
          a.a.Fragment,
          null,
          o &&
            a.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              a.a.createElement(
                'thead',
                null,
                a.a.createElement(
                  'tr',
                  null,
                  a.a.createElement('th', null, u.name),
                  a.a.createElement('th', null, u.description),
                  a.a.createElement('th', null, u.type),
                  a.a.createElement('th', null, u.default),
                ),
              ),
              a.a.createElement(
                'tbody',
                null,
                o[t].map((e) =>
                  a.a.createElement(
                    'tr',
                    { key: e.identifier },
                    a.a.createElement('td', null, e.identifier),
                    a.a.createElement('td', null, e.description || '--'),
                    a.a.createElement('td', null, a.a.createElement('code', null, e.type)),
                    a.a.createElement(
                      'td',
                      null,
                      a.a.createElement('code', null, e.default || (e.required && u.required) || '--'),
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
