(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    D6ik: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('cDcd'),
        l = t.n(a),
        i = t('dEAq'),
        r = t('1R9V'),
        c = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        m = t('Rsk4').default['components-panel'].component;
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
                { id: 'panel-\u9762\u677f' },
                l.a.createElement(
                  i['AnchorLink'],
                  { to: '#panel-\u9762\u677f', 'aria-hidden': 'true', tabIndex: -1 },
                  l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Panel \u9762\u677f',
              ),
              l.a.createElement('p', null, '\u5e38\u7528\u4e8e\u5c55\u793a\u7ec4\u5408\u6570\u636e'),
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
              r['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { Panel, PanelItem, Brief, ListItem } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default () => (\n  <div\n    className="panel-demo"\n    style={{\n      minHeight: \'100vh\',\n      backgroundColor: \'#f4f4f4\',\n      padding: \'30px\',\n      margin: \'-28px\',\n    }}\n  >\n    <Panel title="\u56fe\u6587\u7ec4\u5408\u5217\u8868">\n      <PanelItem title="\u6807\u9898\u4e00" thumb={require(\'./icon_tabbar.png\')}>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n      <PanelItem title="\u6807\u9898\u4e8c" thumb={require(\'./icon_tabbar.png\')}>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n      <ListItem arrow>\n        <a>\u67e5\u770b\u66f4\u591a</a>\n      </ListItem>\n    </Panel>\n    <Panel title="\u6587\u5b57\u7ec4\u5408\u5217\u8868">\n      <PanelItem title="\u6807\u9898\u4e00" text>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n      <PanelItem title="\u6807\u9898\u4e8c" text>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n    </Panel>\n    <Panel title="\u6587\u5b57\u5217\u8868\u9644\u52a0\u6e90">\n      <PanelItem\n        title="\u6807\u9898\u4e00"\n        text\n        info={\n          <>\n            <Brief>\u6587\u5b57\u6765\u6e90</Brief>\n            <Brief>\u65f6\u95f4</Brief>\n            <Brief divider>\u5176\u4ed6\u4fe1\u606f</Brief>\n          </>\n        }\n      >\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n    </Panel>\n  </div>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { Panel, PanelItem, Brief, ListItem } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default () => (\n  <div\n    className="panel-demo"\n    style={{ minHeight: \'100vh\', backgroundColor: \'#f4f4f4\', padding: \'30px\', margin: \'-28px\' }}\n  >\n    <Panel title="\u56fe\u6587\u7ec4\u5408\u5217\u8868">\n      <PanelItem title="\u6807\u9898\u4e00" thumb={require(\'./icon_tabbar.png\')}>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n      <PanelItem title="\u6807\u9898\u4e8c" thumb={require(\'./icon_tabbar.png\')}>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n      <ListItem arrow={true}>\n        <a>\u67e5\u770b\u66f4\u591a</a>\n      </ListItem>\n    </Panel>\n    <Panel title="\u6587\u5b57\u7ec4\u5408\u5217\u8868">\n      <PanelItem title="\u6807\u9898\u4e00" text={true}>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n      <PanelItem title="\u6807\u9898\u4e8c" text={true}>\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n    </Panel>\n    <Panel title="\u6587\u5b57\u5217\u8868\u9644\u52a0\u6e90">\n      <PanelItem\n        title="\u6807\u9898\u4e00"\n        text={true}\n        info={\n          <>\n            <Brief>\u6587\u5b57\u6765\u6e90</Brief>\n            <Brief>\u65f6\u95f4</Brief>\n            <Brief divider={true}>\u5176\u4ed6\u4fe1\u606f</Brief>\n          </>\n        }\n      >\n        \u7531\u5404\u79cd\u7269\u8d28\u7ec4\u6210\u7684\u5de8\u578b\u7403\u72b6\u5929\u4f53\uff0c\u53eb\u505a\u661f\u7403\u3002\u661f\u7403\u6709\u4e00\u5b9a\u7684\u5f62\u72b6\uff0c\u6709\u81ea\u5df1\u7684\u8fd0\u884c\u8f68\u9053\u3002\n      </PanelItem>\n    </Panel>\n  </div>\n);',
                  },
                  'index.less': {
                    import: './index.less',
                    content: '.panel-demo {\n  background: #eee;\n  font-size: 26px;\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u56fe\u6587\u7ec4\u5408\u9762\u677f',
                identifier: 'components-panel',
              },
              l.a.createElement(m, null),
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
                l.a.createElement(
                  'h3',
                  { id: 'api-panel' },
                  l.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-panel', 'aria-hidden': 'true', tabIndex: -1 },
                    l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Panel',
                ),
                l.a.createElement(c['a'], {
                  src: '../../../src/Panel/Panel.tsx',
                  identifier: '../../../src/Panel/Panel.tsx',
                  export: 'Panel',
                }),
                l.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  l.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                l.a.createElement(
                  'h3',
                  { id: 'api-panelitem' },
                  l.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-panelitem', 'aria-hidden': 'true', tabIndex: -1 },
                    l.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'PanelItem',
                ),
                l.a.createElement(c['a'], {
                  src: '../../../src/Panel/PanelItem.tsx',
                  identifier: '../../../src/Panel/PanelItem.tsx',
                  export: 'PanelItem',
                }),
              ),
            ),
          ),
        );
      };
    },
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
        r = {
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
          c = Object(i['useApiData'])(n),
          m = Object(a['useContext'])(i['context']),
          o = m.locale,
          d = r[o] || r['en-US'];
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
                  l.a.createElement('th', null, d.name),
                  l.a.createElement('th', null, d.description),
                  l.a.createElement('th', null, d.type),
                  l.a.createElement('th', null, d.default),
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
                      l.a.createElement('code', null, e.default || (e.required && d.required) || '--'),
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
