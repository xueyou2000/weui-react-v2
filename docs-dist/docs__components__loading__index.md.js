(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    HVN5: function (e, n, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('mlvz');
    },
    KeZ3: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        l = t.n(a),
        r = t('dEAq'),
        i = t('1R9V'),
        c = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc'), t('Rsk4').default['components-loading'].component);
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
                { id: 'loading-\u52a0\u8f7d\u4e2d' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#loading-\u52a0\u8f7d\u4e2d', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Loading \u52a0\u8f7d\u4e2d',
              ),
              l.a.createElement(
                'p',
                null,
                '\u63d0\u4f9b\u591a\u79cd\u52a0\u8f7d\u4e2d\u7684\u6837\u5f0f\uff0c\u7528\u4e8e\u4e0d\u540c\u573a\u666f\u3002',
              ),
              l.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                l.a.createElement(
                  r['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            l.a.createElement(
              i['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { BallLoading, CircleLoading, WaveLoading, MultistageLoading, Flex } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Flex justify="center">\n      <BallLoading />\n    </Flex>\n    <br />\n    <Flex justify="center">\n      <CircleLoading />\n    </Flex>\n    <br />\n    <Flex justify="center">\n      <WaveLoading />\n    </Flex>\n    <br />\n    <Flex justify="center">\n      <MultistageLoading />\n    </Flex>\n  </>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { BallLoading, CircleLoading, WaveLoading, MultistageLoading, Flex } from \'weui-react-v2\';\n\nexport default () => (\n  <>\n    <Flex justify="center">\n      <BallLoading />\n    </Flex>\n    <br />\n    <Flex justify="center">\n      <CircleLoading />\n    </Flex>\n    <br />\n    <Flex justify="center">\n      <WaveLoading />\n    </Flex>\n    <br />\n    <Flex justify="center">\n      <MultistageLoading />\n    </Flex>\n  </>\n);',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u52a0\u8f7d\u4e2d',
                identifier: 'components-loading',
              },
              l.a.createElement(c, null),
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
      var a = t('cDcd'),
        l = t.n(a),
        r = t('dEAq'),
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
          c = Object(r['useApiData'])(n),
          o = Object(a['useContext'])(r['context']),
          d = o.locale,
          u = i[d] || i['en-US'];
        return l.a.createElement(
          l.a.Fragment,
          null,
          c &&
            l.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', null, u.name),
                  l.a.createElement('th', null, u.description),
                  l.a.createElement('th', null, u.type),
                  l.a.createElement('th', null, u.default),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                c[t].map((e) =>
                  l.a.createElement(
                    'tr',
                    { key: e.identifier },
                    l.a.createElement('td', null, e.identifier),
                    l.a.createElement('td', null, e.description || '--'),
                    l.a.createElement('td', null, l.a.createElement('code', null, e.type)),
                    l.a.createElement(
                      'td',
                      null,
                      l.a.createElement('code', null, e.default || (e.required && u.required) || '--'),
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
