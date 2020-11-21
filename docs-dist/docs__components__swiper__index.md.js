(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [19],
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
        r = t.n(a),
        i = t('dEAq'),
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
          o = Object(i['useApiData'])(n),
          c = Object(a['useContext'])(i['context']),
          s = c.locale,
          p = l[s] || l['en-US'];
        return r.a.createElement(
          r.a.Fragment,
          null,
          o &&
            r.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, p.name),
                  r.a.createElement('th', null, p.description),
                  r.a.createElement('th', null, p.type),
                  r.a.createElement('th', null, p.default),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                o[t].map((e) =>
                  r.a.createElement(
                    'tr',
                    { key: e.identifier },
                    r.a.createElement('td', null, e.identifier),
                    r.a.createElement('td', null, e.description || '--'),
                    r.a.createElement('td', null, r.a.createElement('code', null, e.type)),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement('code', null, e.default || (e.required && p.required) || '--'),
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
    nsNu: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        r = t.n(a),
        i = t('dEAq'),
        l = t('1R9V'),
        o = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        c = t('Rsk4').default['components-swiper'].component,
        s = t('Rsk4').default['components-swiper-1'].component;
      n['default'] = function () {
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
                { id: 'swiper-\u8f6e\u64ad' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#swiper-\u8f6e\u64ad', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Swiper \u8f6e\u64ad',
              ),
              r.a.createElement('p', null, '\u8f6e\u64ad\u56fe\u7247'),
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
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Swiper } from 'weui-react-v2';\nimport './index.less';\n\nexport default () => (\n  <>\n    <Swiper className=\"swiper-demo\" autoplay>\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n    </Swiper>\n  </>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { Swiper } from 'weui-react-v2';\nimport './index.less';\n\nexport default () => (\n  <>\n    <Swiper className=\"swiper-demo\" autoplay={true}>\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n    </Swiper>\n  </>\n);",
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.swiper-demo {\n  .fimg {\n    width: 100%;\n    height: 400px;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);\n  }\n}\n.swiper-demo2 {\n  .fimg {\n    width: 100%;\n    height: 100%;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n}\n\n.tabs-demo {\n  font-size: 32px;\n\n  select {\n    display: block;\n    width: 100%;\n    height: 45px;\n    line-height: 45px;\n    font-size: 35px;\n  }\n\n  .weui-tab-panel {\n    // background-color: #607d8b;\n    text-align: center;\n    padding: 20px;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u81ea\u52a8\u8f6e\u64ad, \u5e76\u6709\u62d6\u62fd\u7f29\u653e\u6548\u679c',
                identifier: 'components-swiper',
              },
              r.a.createElement(c, null),
            ),
            r.a.createElement('div', { className: 'markdown' }),
            r.a.createElement(
              l['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React from 'react';\nimport { Swiper } from 'weui-react-v2';\nimport './index.less';\n\nexport default () => (\n  <>\n    <Swiper\n      className=\"swiper-demo2\"\n      autoplay\n      vertical\n      scaleMode={false}\n      style={{\n        height: '500px',\n      }}\n    >\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n    </Swiper>\n  </>\n);\n",
                    tsx:
                      "import React from 'react';\nimport { Swiper } from 'weui-react-v2';\nimport './index.less';\n\nexport default () => (\n  <>\n    <Swiper className=\"swiper-demo2\" autoplay={true} vertical={true} scaleMode={false} style={{ height: '500px' }}>\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n      <div\n        className=\"fimg\"\n        style={{\n          backgroundImage: `url(${require('./pexels-photo-296878.jpeg')})`,\n        }}\n      />\n    </Swiper>\n  </>\n);",
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.swiper-demo {\n  .fimg {\n    width: 100%;\n    height: 400px;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);\n  }\n}\n.swiper-demo2 {\n  .fimg {\n    width: 100%;\n    height: 100%;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n}\n\n.tabs-demo {\n  font-size: 32px;\n\n  select {\n    display: block;\n    width: 100%;\n    height: 45px;\n    line-height: 45px;\n    font-size: 35px;\n  }\n\n  .weui-tab-panel {\n    // background-color: #607d8b;\n    text-align: center;\n    padding: 20px;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u5782\u76f4\u6eda\u52a8',
                description:
                  '<div class="markdown"><p>\u5782\u76f4\u6eda\u52a8\u65f6\u5fc5\u987b\u7ed9\u5bb9\u5668\u8bbe\u7f6e\u56fa\u5b9a\u9ad8\u5ea6</p></div>',
                identifier: 'components-swiper-1',
              },
              r.a.createElement(s, null),
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
                r.a.createElement(o['a'], {
                  src: '../../../src/Swiper/index.tsx',
                  identifier: 'Swiper',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
    tP8H: function (e, n, t) {
      'use strict';
      t('tJVT'), t('cDcd'), t('OGKa');
    },
  },
]);
