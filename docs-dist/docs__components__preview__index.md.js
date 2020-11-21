(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12],
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
        r = n.n(i),
        a = n('dEAq'),
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
          l = Object(a['useApiData'])(t),
          m = Object(i['useContext'])(a['context']),
          o = m.locale,
          v = c[o] || c['en-US'];
        return r.a.createElement(
          r.a.Fragment,
          null,
          l &&
            r.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, v.name),
                  r.a.createElement('th', null, v.description),
                  r.a.createElement('th', null, v.type),
                  r.a.createElement('th', null, v.default),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                l[n].map((e) =>
                  r.a.createElement(
                    'tr',
                    { key: e.identifier },
                    r.a.createElement('td', null, e.identifier),
                    r.a.createElement('td', null, e.description || '--'),
                    r.a.createElement('td', null, r.a.createElement('code', null, e.type)),
                    r.a.createElement(
                      'td',
                      null,
                      r.a.createElement('code', null, e.default || (e.required && v.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    cUEM: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n('cDcd'),
        r = n.n(i),
        a = n('dEAq'),
        c = n('1R9V'),
        l = (n('ZpkN'), n('TN5+'), n('HVN5'), n('tP8H'), n('UpFc')),
        m = n('Rsk4').default['components-preview'].component;
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
                { id: 'preview-\u8868\u5355\u9884\u89c8' },
                r.a.createElement(
                  a['AnchorLink'],
                  { to: '#preview-\u8868\u5355\u9884\u89c8', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Preview \u8868\u5355\u9884\u89c8',
              ),
              r.a.createElement('p', null, '\u5c55\u793a\u952e\u503c\u5bf9\u7684\u5185\u5bb9'),
              r.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                r.a.createElement(
                  a['AnchorLink'],
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
                      'import React from \'react\';\nimport { Preview, PreviewItem, PreviewButton, WhiteSpace } from \'weui-react-v2\';\n\nexport default () => (\n  <div\n    style={{\n      minHeight: \'100vh\',\n      backgroundColor: \'#f4f4f4\',\n      padding: \'30px\',\n      margin: \'-28px\',\n    }}\n  >\n    <Preview\n      subTitle="\u4ed8\u6b3e\u91d1\u989d"\n      title="\xa52400.00"\n      footer={<PreviewButton key="c">\u64cd\u4f5c</PreviewButton>}\n    >\n      <PreviewItem title="\u5546\u54c1">\u7535\u52a8\u6253\u5355\u673a</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\u540d\u5b57\u540d\u5b57\u540d\u5b57</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\n        \u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\n      </PreviewItem>\n    </Preview>\n\n    <WhiteSpace size="xl" />\n\n    <Preview\n      subTitle="\u4ed8\u6b3e\u91d1\u989d"\n      title="\xa52400.00"\n      footer={[\n        <PreviewButton key="a">\u8f85\u52a9\u64cd\u4f5c</PreviewButton>,\n        <PreviewButton type="primary" key="b">\n          \u63d0\u4ea4\n        </PreviewButton>,\n      ]}\n    >\n      <PreviewItem title="\u5546\u54c1">\u7535\u52a8\u6253\u5355\u673a</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\u540d\u5b57\u540d\u5b57\u540d\u5b57</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\n        \u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\n      </PreviewItem>\n    </Preview>\n  </div>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { Preview, PreviewItem, PreviewButton, WhiteSpace } from \'weui-react-v2\';\n\nexport default () => (\n  <div style={{ minHeight: \'100vh\', backgroundColor: \'#f4f4f4\', padding: \'30px\', margin: \'-28px\' }}>\n    <Preview subTitle="\u4ed8\u6b3e\u91d1\u989d" title="\xa52400.00" footer={<PreviewButton key="c">\u64cd\u4f5c</PreviewButton>}>\n      <PreviewItem title="\u5546\u54c1">\u7535\u52a8\u6253\u5355\u673a</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\u540d\u5b57\u540d\u5b57\u540d\u5b57</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57</PreviewItem>\n    </Preview>\n\n    <WhiteSpace size="xl" />\n\n    <Preview\n      subTitle="\u4ed8\u6b3e\u91d1\u989d"\n      title="\xa52400.00"\n      footer={[\n        <PreviewButton key="a">\u8f85\u52a9\u64cd\u4f5c</PreviewButton>,\n        <PreviewButton type="primary" key="b">\n          \u63d0\u4ea4\n        </PreviewButton>,\n      ]}\n    >\n      <PreviewItem title="\u5546\u54c1">\u7535\u52a8\u6253\u5355\u673a</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\u540d\u5b57\u540d\u5b57\u540d\u5b57</PreviewItem>\n      <PreviewItem title="\u6807\u9898\u6807\u9898">\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57\u5f88\u957f\u5f88\u957f\u7684\u540d\u5b57</PreviewItem>\n    </Preview>\n  </div>\n);',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u9884\u89c8\u5185\u5bb9',
                identifier: 'components-preview',
              },
              r.a.createElement(m, null),
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
                    a['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(
                  'h3',
                  { id: 'api-preview' },
                  r.a.createElement(
                    a['AnchorLink'],
                    { to: '#api-preview', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Preview',
                ),
                r.a.createElement(l['a'], {
                  src: '../../../src/Preview/Preview.tsx',
                  identifier: '../../../src/Preview/Preview.tsx',
                  export: 'Preview',
                }),
                r.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  r.a.createElement(
                    a['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(
                  'h3',
                  { id: 'api-previewbutton' },
                  r.a.createElement(
                    a['AnchorLink'],
                    { to: '#api-previewbutton', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PreviewButton',
                ),
                r.a.createElement(l['a'], {
                  src: '../../../src/Preview/PreviewButton.tsx',
                  identifier: '../../../src/Preview/PreviewButton.tsx',
                  export: 'PreviewButton',
                }),
                r.a.createElement(
                  'h2',
                  { id: 'api-2' },
                  r.a.createElement(
                    a['AnchorLink'],
                    { to: '#api-2', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                r.a.createElement(
                  'h3',
                  { id: 'api-previewitem' },
                  r.a.createElement(
                    a['AnchorLink'],
                    { to: '#api-previewitem', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PreviewItem',
                ),
                r.a.createElement(l['a'], {
                  src: '../../../src/Preview/PreviewItem.tsx',
                  identifier: '../../../src/Preview/PreviewItem.tsx',
                  export: 'PreviewItem',
                }),
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
