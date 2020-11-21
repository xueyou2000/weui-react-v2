(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
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
          s = Object(a['useContext'])(r['context']),
          o = s.locale,
          m = l[o] || l['en-US'];
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
    kERV: function (e, n, t) {},
    mTRG: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        i = t.n(a),
        r = t('dEAq'),
        l = t('1R9V'),
        c = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        s = t('Rsk4').default['image-view-demo'].component;
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
                { id: 'imageview-\u56fe\u7247\u67e5\u770b' },
                i.a.createElement(
                  r['AnchorLink'],
                  { to: '#imageview-\u56fe\u7247\u67e5\u770b', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'ImageView \u56fe\u7247\u67e5\u770b',
              ),
              i.a.createElement(
                'p',
                null,
                '\u624b\u673a\u4e0a\u67e5\u770b\u56fe\u7247, \u652f\u6301\u53cc\u51fb\u653e\u5927\uff0c\u65cb\u8f6c\uff0c\u7f29\u653e',
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
                      "import React, { useState } from 'react';\nimport { Gallery, Button } from 'weui-react-v2';\nimport './index.less';\n\nconst images = [\n  {\n    src: require('../../swiper/pexels-photo-296878.jpeg'),\n    title: 'Photo: Michael Hull',\n    desc:\n      \"Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.\",\n  },\n  {\n    src: require('./15008465772_d50c8f0531_h.jpg'),\n    title: '\u4e00\u53ea\u718a',\n    desc: '\u61a8\u61a8\u7684\u718a\uff0c \u77ed\u77ed\u7684\u5c3e\u5df4',\n  },\n  {\n    src: require('./15008518202_c265dfa55f_h.jpg'),\n  },\n  {\n    src: require('./15008867125_b61960af01_h.jpg'),\n  },\n];\nexport default () => {\n  const [visible, setVisible] = useState(true);\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>\u6253\u5f00</Button>\n      <Gallery\n        className=\"image-view-demo\"\n        data={images}\n        visible={visible}\n        onVisibleChange={setVisible}\n      />\n    </div>\n  );\n};\n",
                    tsx:
                      "import React, { useState } from 'react';\nimport { Gallery, Button } from 'weui-react-v2';\nimport './index.less';\n\nconst images = [\n  {\n    src: require('../../swiper/pexels-photo-296878.jpeg'),\n    title: 'Photo: Michael Hull',\n    desc: \"Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.\",\n  },\n  {\n    src: require('./15008465772_d50c8f0531_h.jpg'),\n    title: '\u4e00\u53ea\u718a',\n    desc: '\u61a8\u61a8\u7684\u718a\uff0c \u77ed\u77ed\u7684\u5c3e\u5df4',\n  },\n  {\n    src: require('./15008518202_c265dfa55f_h.jpg'),\n  },\n  {\n    src: require('./15008867125_b61960af01_h.jpg'),\n  },\n];\n\nexport default () => {\n  const [visible, setVisible] = useState(true);\n  return (\n    <div>\n      <Button onClick={() => setVisible(true)}>\u6253\u5f00</Button>\n      <Gallery className=\"image-view-demo\" data={images} visible={visible} onVisibleChange={setVisible} />\n    </div>\n  );\n};\n",
                  },
                  'index.less': { import: './index.less', content: '' },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u591a\u5f20\u56fe\u7247',
                description:
                  '<div class="markdown"><p>\u53ef\u8bbe\u7f6e\u9ed8\u8ba4\u67e5\u770b\u54ea\u4e00\u5f20\u56fe\u7247</p></div>',
                identifier: 'image-view-demo',
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
                    r['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                i.a.createElement(
                  'h3',
                  { id: 'api-gallery' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-gallery', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Gallery',
                ),
                i.a.createElement(c['a'], {
                  src: '../../../src/ImageView/Gallery.tsx',
                  identifier: '../../../src/ImageView/Gallery.tsx',
                  export: 'Gallery',
                }),
                i.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                i.a.createElement(
                  'h3',
                  { id: 'api-imageview' },
                  i.a.createElement(
                    r['AnchorLink'],
                    { to: '#api-imageview', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'ImageView',
                ),
                i.a.createElement(c['a'], {
                  src: '../../../src/ImageView/ImageView.tsx',
                  identifier: '../../../src/ImageView/ImageView.tsx',
                  export: 'ImageView',
                }),
              ),
            ),
          ),
        );
      };
    },
    mlvz: function (e, n, t) {},
    tP8H: function (e, n, t) {
      'use strict';
      t('tJVT'), t('cDcd'), t('OGKa');
    },
  },
]);
