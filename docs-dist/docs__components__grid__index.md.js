(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '03vr': function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('cDcd'),
        r = n.n(a),
        i = n('dEAq'),
        c = n('1R9V'),
        d = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        l = n('Rsk4').default['components-grid'].component;
      t['default'] = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h1',
                { id: 'grid-\u4e5d\u5bab\u683c' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#grid-\u4e5d\u5bab\u683c', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Grid \u4e5d\u5bab\u683c',
              ),
              r.a.createElement('p', null, '\u4e5d\u5bab\u683c\u7ec4\u4ef6'),
              r.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            r.a.createElement(
              c['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Grid, GridItem } from 'weui-react-v2';\n\nconst data = ['\u6211\u7684', '\u672a\u8bfb\u6d88\u606f', '\u8bbe\u7f6e', '\u5206\u4eab', '\u6ce8\u518c', '\u6ce8\u9500', '\u63d0\u73b0', '\u8d26\u6237', '\u7ed3\u7b97\u5361'];\nexport default () => (\n  <div\n    style={{\n      minHeight: '100vh',\n      backgroundColor: '#f4f4f4',\n      padding: '30px',\n      margin: '-28px',\n    }}\n  >\n    <Grid>\n      {data.map((d, i) => (\n        <GridItem key={d} icon={<img src={require('./icon_tabbar.png')} />}>\n          {d}\n        </GridItem>\n      ))}\n    </Grid>\n  </div>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { Grid, GridItem } from 'weui-react-v2';\n\nconst data: string[] = ['\u6211\u7684', '\u672a\u8bfb\u6d88\u606f', '\u8bbe\u7f6e', '\u5206\u4eab', '\u6ce8\u518c', '\u6ce8\u9500', '\u63d0\u73b0', '\u8d26\u6237', '\u7ed3\u7b97\u5361'];\n\nexport default () => (\n  <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '30px', margin: '-28px' }}>\n    <Grid>\n      {data.map((d, i) => (\n        <GridItem key={d} icon={<img src={require('./icon_tabbar.png')} />}>\n          {d}\n        </GridItem>\n      ))}\n    </Grid>\n  </div>\n);",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u4e5d\u5bab\u683c\u6bcf\u884c3\u5217',
                identifier: 'components-grid',
              },
              r.a.createElement(l, null),
            ),
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'p',
                null,
                r.a.createElement(
                  'h2',
                  { id: 'api' },
                  r.a.createElement(
                    i['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(
                  'h3',
                  { id: 'api-grid' },
                  r.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-grid', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Grid',
                ),
                r.a.createElement(d['a'], {
                  src: '../../../src/Grid/Grid.tsx',
                  identifier: '../../../src/Grid/Grid.tsx',
                  export: 'Grid',
                }),
                r.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  r.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(
                  'h3',
                  { id: 'api-griditem' },
                  r.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-griditem', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'GridItem',
                ),
                r.a.createElement(d['a'], {
                  src: '../../../src/Grid/GridItem.tsx',
                  identifier: '../../../src/Grid/GridItem.tsx',
                  export: 'GridItem',
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
        r = n.n(a),
        i = n('dEAq'),
        c = {
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
          d = Object(i['useApiData'])(t),
          l = Object(a['useContext'])(i['context']),
          m = l.locale,
          o = c[m] || c['en-US'];
        return r.a.createElement(
          r.a.Fragment,
          null,
          d &&
            r.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, o.name),
                  r.a.createElement('th', null, o.description),
                  r.a.createElement('th', null, o.type),
                  r.a.createElement('th', null, o.default),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                d[n].map((e) =>
                  r.a.createElement(
                    'tr',
                    { key: e.identifier },
                    r.a.createElement('td', null, e.identifier),
                    r.a.createElement('td', null, e.description || '--'),
                    r.a.createElement('td', null, r.a.createElement('code', null, e.type)),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement('code', null, e.default || (e.required && o.required) || '--'),
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
