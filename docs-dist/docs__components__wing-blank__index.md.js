(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [24],
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
        l = t.n(a),
        i = t('dEAq'),
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
      n['a'] = (e) => {
        var n = e.identifier,
          t = e.export,
          r = Object(i['useApiData'])(n),
          o = Object(a['useContext'])(i['context']),
          u = o.locale,
          m = c[u] || c['en-US'];
        return l.a.createElement(
          l.a.Fragment,
          null,
          r &&
            l.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, m.name),
                  l.a.createElement('th', null, m.description),
                  l.a.createElement('th', null, m.type),
                  l.a.createElement('th', null, m.default),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                r[t].map((e) =>
                  l.a.createElement(
                    'tr',
                    { key: e.identifier },
                    l.a.createElement('td', null, e.identifier),
                    l.a.createElement('td', null, e.description || '--'),
                    l.a.createElement('td', null, l.a.createElement('code', null, e.type)),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, e.default || (e.required && m.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    Z61v: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        l = t.n(a),
        i = t('dEAq'),
        c = t('1R9V'),
        r = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        o = t('Rsk4').default['components-wing-blank'].component;
      n['default'] = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'h1',
                { id: 'wingblank-\u4e24\u7ffc\u7559\u767d' },
                l.a.createElement(
                  i['AnchorLink'],
                  { to: '#wingblank-\u4e24\u7ffc\u7559\u767d', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'WingBlank \u4e24\u7ffc\u7559\u767d',
              ),
              l.a.createElement('p', null, '\u5e38\u7528\u4e0e\u9875\u9762\u7684\u4e24\u7aef\u7a7a\u767d\u3002'),
              l.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                l.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            l.a.createElement(
              c['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { WingBlank, WhiteSpace, Button } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <WingBlank size="sm">\n      <Button block>\u5c0f\u5c3a\u5bf8</Button>\n    </WingBlank>\n    <WhiteSpace />\n    <WingBlank size="md">\n      <Button block>\u4e2d\u7b49\u5c3a\u5bf8(\u9ed8\u8ba4)</Button>\n    </WingBlank>\n    <WhiteSpace />\n    <WingBlank size="lg">\n      <Button block>\u5927\u5c3a\u5bf8</Button>\n    </WingBlank>\n  </>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { WingBlank, WhiteSpace, Button } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <WingBlank size="sm">\n      <Button block>\u5c0f\u5c3a\u5bf8</Button>\n    </WingBlank>\n    <WhiteSpace />\n    <WingBlank size="md">\n      <Button block>\u4e2d\u7b49\u5c3a\u5bf8(\u9ed8\u8ba4)</Button>\n    </WingBlank>\n    <WhiteSpace />\n    <WingBlank size="lg">\n      <Button block>\u5927\u5c3a\u5bf8</Button>\n    </WingBlank>\n  </>\n);',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u4e0d\u540c\u5c3a\u5bf8',
                identifier: 'components-wing-blank',
              },
              l.a.createElement(o, null),
            ),
            l.a.createElement(
              'div',
              { className: 'markdown' },
              l.a.createElement(
                'p',
                null,
                l.a.createElement(
                  'h2',
                  { id: 'api' },
                  l.a.createElement(
                    i['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                l.a.createElement(r['a'], {
                  src: '../../../src/WingBlank/index.tsx',
                  identifier: 'WingBlank',
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
