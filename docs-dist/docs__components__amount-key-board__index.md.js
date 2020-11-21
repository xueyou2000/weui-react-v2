(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    HVN5: function (n, e, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('mlvz');
    },
    MQzz: function (n, e, t) {
      'use strict';
      t.r(e);
      var a = t('cDcd'),
        i = t.n(a),
        o = t('dEAq'),
        s = t('1R9V'),
        l = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        r = t('Rsk4').default['amount-key-board-demo'].component;
      e['default'] = function () {
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
                { id: 'amountkeyboard-\u91d1\u989d\u952e\u76d8' },
                i.a.createElement(
                  o['AnchorLink'],
                  { to: '#amountkeyboard-\u91d1\u989d\u952e\u76d8', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'AmountKeyBoard \u91d1\u989d\u952e\u76d8',
              ),
              i.a.createElement(
                'p',
                null,
                '\u5f25\u8865\u539f\u751f\u6ca1\u6709\u91d1\u989d\u8f93\u5165\u7684\u95ee\u9898',
              ),
              i.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                i.a.createElement(
                  o['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            i.a.createElement(
              s['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React, { useState } from \'react\';\nimport { AmountKeyBoard, Toast } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default function AmountKeyBoardDemo() {\n  const [amount, setAmount] = useState(45.65);\n  const [amountStr, setAmountStr] = useState(\'45.65\');\n  const [visible, setVisible] = useState(true);\n\n  function amountChange(amount, _amountStr) {\n    console.log(\'\u91d1\u989d\', amount, \'_amountStr\', _amountStr);\n    setAmount(amount);\n    setAmountStr(_amountStr);\n  }\n\n  function submit(amount) {\n    Toast.success(`\u63d0\u4ea4\u91d1\u989d${amount}`);\n  }\n\n  return (\n    <div className="keyboard-demo">\n      <div className="payment-page__bd">\n        <h1 className="paymeny-title">\u8f93\u5165\u4ed8\u6b3e\u91d1\u989d</h1>\n        <p\n          style={{\n            textAlign: \'center\',\n          }}\n        >\n          (Tips: \u89e6\u6478\u4e8b\u4ef6\u9700\u8981\u5728\u79fb\u52a8\u7aef\u67e5\u770b)\n        </p>\n\n        <div className="fake-amount-input" onClick={() => setVisible(true)}>\n          <div className="amount-placeholder">\u8bf7\u8f93\u5165\u91d1\u989d</div>\n          <div className="amount-input"></div>\n          <div className="amount_plan">\n            <span className="amount">{amountStr}</span>\n            <span className="unit">$</span>\n          </div>\n        </div>\n      </div>\n      <AmountKeyBoard // confirmBtn={\n        //   <span className="submit-btn">\n        //     <div>\u786e</div>\n        //     <div>\u8ba4</div>\n        //   </span>\n        // }\n        value={amount}\n        visible={visible}\n        onVisibleChange={setVisible}\n        onChange={amountChange}\n        onConfirm={submit}\n      />\n    </div>\n  );\n}\n',
                    tsx:
                      'import React, { useState } from \'react\';\nimport { AmountKeyBoard, Toast } from \'weui-react-v2\';\nimport \'./index.less\';\n\nexport default function AmountKeyBoardDemo() {\n  const [amount, setAmount] = useState(45.65);\n  const [amountStr, setAmountStr] = useState(\'45.65\');\n  const [visible, setVisible] = useState(true);\n\n  function amountChange(amount: number, _amountStr: string) {\n    console.log(\'\u91d1\u989d\', amount, \'_amountStr\', _amountStr);\n    setAmount(amount);\n    setAmountStr(_amountStr);\n  }\n\n  function submit(amount: number) {\n    Toast.success(\'\u63d0\u4ea4\u91d1\u989d\' + amount);\n  }\n\n  return (\n    <div className="keyboard-demo">\n      <div className="payment-page__bd">\n        <h1 className="paymeny-title">\u8f93\u5165\u4ed8\u6b3e\u91d1\u989d</h1>\n        <p style={{ textAlign: \'center\' }}>(Tips: \u89e6\u6478\u4e8b\u4ef6\u9700\u8981\u5728\u79fb\u52a8\u7aef\u67e5\u770b)</p>\n\n        <div className="fake-amount-input" onClick={() => setVisible(true)}>\n          <div className="amount-placeholder">\u8bf7\u8f93\u5165\u91d1\u989d</div>\n          <div className="amount-input"></div>\n          <div className="amount_plan">\n            <span className="amount">{amountStr}</span>\n            <span className="unit">$</span>\n          </div>\n        </div>\n      </div>\n      <AmountKeyBoard\n        // confirmBtn={\n        //   <span className="submit-btn">\n        //     <div>\u786e</div>\n        //     <div>\u8ba4</div>\n        //   </span>\n        // }\n        value={amount}\n        visible={visible}\n        onVisibleChange={setVisible}\n        onChange={amountChange}\n        onConfirm={submit}\n      />\n    </div>\n  );\n}\n',
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      ".keyboard-demo {\n  font-size: 24px;\n\n  .payment-page__bd {\n    padding-top: 80px;\n    padding-bottom: 80px;\n  }\n  .paymeny-title {\n    font-size: 48px;\n    line-height: 106px;\n    text-align: center;\n  }\n  .fake-amount-input {\n    padding: 0 30px 24px;\n    position: relative;\n    box-sizing: border-box;\n\n    .amount-placeholder {\n      width: 100%;\n      padding: 0 50px;\n      text-align: left;\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 1;\n      color: #bebebe;\n      font-size: 36px;\n      height: 108px;\n      line-height: 108px;\n      box-sizing: border-box;\n    }\n    .amount-input {\n      z-index: 2;\n      position: relative;\n      padding: 0 20px;\n      border: 2px solid #06bf04;\n      border-radius: 10px;\n      text-align: right;\n      height: 108px;\n      line-height: 108px;\n      font-size: 72px;\n      width: 100%;\n      box-sizing: border-box;\n    }\n    .amount_plan {\n      position: absolute;\n      color: #bebebe;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      padding: 0 50px;\n      height: 108px;\n      line-height: 108px;\n      font-size: 72px;\n      width: 100%;\n      text-align: right;\n      box-sizing: border-box;\n    }\n    .unit {\n      display: inline-block;\n      vertical-align: top;\n    }\n    .amount {\n      display: inline-block;\n      max-width: 62%;\n      color: #000;\n      vertical-align: top;\n      word-break: keep-all;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Helvetica Neue', 'Hiragino Sans GB', 'Microsoft Yahei',\n        sans-serif;\n    }\n  }\n}\n",
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u91d1\u989d\u952e\u76d8',
                description:
                  '<div class="markdown"><p>\u4e00\u822c\u9ed8\u8ba4\u7528Input\u7ec4\u4ef6\u5524\u8d77\u3002</p></div>',
                identifier: 'amount-key-board-demo',
              },
              i.a.createElement(r, null),
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
                    o['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    i.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                i.a.createElement(l['a'], {
                  src: '../../../src/AmountKeyBoard/index.tsx',
                  identifier: 'AmountKeyBoard',
                  export: 'default',
                }),
              ),
            ),
          ),
        );
      };
    },
    OGKa: function (n, e, t) {},
    'TN5+': function (n, e, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('kERV');
    },
    UpFc: function (n, e, t) {
      'use strict';
      var a = t('cDcd'),
        i = t.n(a),
        o = t('dEAq'),
        s = {
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
      e['a'] = (n) => {
        var e = n.identifier,
          t = n.export,
          l = Object(o['useApiData'])(e),
          r = Object(a['useContext'])(o['context']),
          m = r.locale,
          u = s[m] || s['en-US'];
        return i.a.createElement(
          i.a.Fragment,
          null,
          l &&
            i.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              i.a.createElement(
                'thead',
                null,
                i.a.createElement(
                  'tr',
                  null,
                  i.a.createElement('th', null, u.name),
                  i.a.createElement('th', null, u.description),
                  i.a.createElement('th', null, u.type),
                  i.a.createElement('th', null, u.default),
                ),
              ),
              i.a.createElement(
                'tbody',
                null,
                l[t].map((n) =>
                  i.a.createElement(
                    'tr',
                    { key: n.identifier },
                    i.a.createElement('td', null, n.identifier),
                    i.a.createElement('td', null, n.description || '--'),
                    i.a.createElement('td', null, i.a.createElement('code', null, n.type)),
                    i.a.createElement(
                      'td',
                      null,
                      i.a.createElement('code', null, n.default || (n.required && u.required) || '--'),
                    ),
                  ),
                ),
              ),
            ),
        );
      };
    },
    kERV: function (n, e, t) {},
    mlvz: function (n, e, t) {},
    tP8H: function (n, e, t) {
      'use strict';
      t('tJVT'), t('cDcd'), t('OGKa');
    },
  },
]);
