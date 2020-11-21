(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    HVN5: function (n, e, t) {
      'use strict';
      t('0Owb'), t('cDcd'), t('mlvz');
    },
    LPge: function (n, e, t) {
      'use strict';
      t.r(e);
      var a = t('cDcd'),
        s = t.n(a),
        i = t('dEAq'),
        o = t('1R9V'),
        r = (t('ZpkN'), t('TN5+'), t('HVN5'), t('tP8H'), t('UpFc')),
        l = t('Rsk4').default['components-tabs'].component,
        c = t('Rsk4').default['components-tabs-1'].component,
        p = t('Rsk4').default['tabs-vertical'].component;
      e['default'] = function () {
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              'div',
              { className: 'markdown' },
              s.a.createElement(
                'h1',
                { id: 'tabs-\u9009\u9879\u5361' },
                s.a.createElement(
                  i['AnchorLink'],
                  { to: '#tabs-\u9009\u9879\u5361', 'aria-hidden': 'true', tabIndex: -1 },
                  s.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                'Tabs \u9009\u9879\u5361',
              ),
              s.a.createElement(
                'p',
                null,
                '\u9009\u9879\u5361\u7ec4\u4ef6, \u5185\u7f6e',
                s.a.createElement('code', null, 'tabbar'),
                '\u6ea2\u51fa\u7bad\u5934',
              ),
              s.a.createElement(
                'h2',
                { id: '\u4ee3\u7801\u6f14\u793a' },
                s.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u4ee3\u7801\u6f14\u793a', 'aria-hidden': 'true', tabIndex: -1 },
                  s.a.createElement('span', { className: ['icon', 'icon-link'] }),
                ),
                '\u4ee3\u7801\u6f14\u793a',
              ),
            ),
            s.a.createElement(
              o['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import React from \'react\';\nimport { Tabs, TabPanel } from \'weui-react-v2\';\nimport \'../swiper/index.less\';\n\nexport default () => (\n  <>\n    <Tabs className="swiper-demo2" lazy>\n      <TabPanel tabKey="a" tab={<span className="tab_point">tab1</span>}>\n        <div\n          className="fimg"\n          style={{\n            height: \'350px\',\n            backgroundImage: `url(${require(\'../swiper/pexels-photo-296878.jpeg\')})`,\n          }}\n        />\n      </TabPanel>\n      <TabPanel tabKey="b" tab={<span className="tab_point">tab2</span>}>\n        <div\n          className="fimg"\n          style={{\n            height: \'350px\',\n            backgroundImage: `url(${require(\'../swiper/pexels-photo-296878.jpeg\')})`,\n          }}\n        />\n      </TabPanel>\n      <TabPanel tabKey="c" tab={<span className="tab_point">tab3</span>}>\n        <div\n          className="fimg"\n          style={{\n            height: \'350px\',\n            backgroundImage: `url(${require(\'../swiper/pexels-photo-296878.jpeg\')})`,\n          }}\n        />\n      </TabPanel>\n    </Tabs>\n  </>\n);\n',
                    tsx:
                      'import React from \'react\';\nimport { Tabs, TabPanel } from \'weui-react-v2\';\nimport \'../swiper/index.less\';\n\nexport default () => (\n  <>\n    <Tabs className="swiper-demo2" lazy={true}>\n      <TabPanel tabKey="a" tab={<span className="tab_point">tab1</span>}>\n        <div\n          className="fimg"\n          style={{\n            height: \'350px\',\n            backgroundImage: `url(${require(\'../swiper/pexels-photo-296878.jpeg\')})`,\n          }}\n        />\n      </TabPanel>\n      <TabPanel tabKey="b" tab={<span className="tab_point">tab2</span>}>\n        <div\n          className="fimg"\n          style={{\n            height: \'350px\',\n            backgroundImage: `url(${require(\'../swiper/pexels-photo-296878.jpeg\')})`,\n          }}\n        />\n      </TabPanel>\n      <TabPanel tabKey="c" tab={<span className="tab_point">tab3</span>}>\n        <div\n          className="fimg"\n          style={{\n            height: \'350px\',\n            backgroundImage: `url(${require(\'../swiper/pexels-photo-296878.jpeg\')})`,\n          }}\n        />\n      </TabPanel>\n    </Tabs>\n  </>\n);',
                  },
                  'swiper/index.less': {
                    import: '../swiper/index.less',
                    content:
                      '.swiper-demo {\n  .fimg {\n    width: 100%;\n    height: 400px;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);\n  }\n}\n.swiper-demo2 {\n  .fimg {\n    width: 100%;\n    height: 100%;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n}\n\n.tabs-demo {\n  font-size: 32px;\n\n  select {\n    display: block;\n    width: 100%;\n    height: 45px;\n    line-height: 45px;\n    font-size: 35px;\n  }\n\n  .weui-tab-panel {\n    // background-color: #607d8b;\n    text-align: center;\n    padding: 20px;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u61d2\u52a0\u8f7d',
                description:
                  '<div class="markdown"><p>F12\u67e5\u770b\u5143\u7d20\uff0c\u53ef\u4ee5\u770b\u5230\u61d2\u52a0\u8f7d\u65f6\uff0c\u5185\u5bb9\u4e0d\u4f1a\u771f\u7684\u63d2\u5165dom,\u800c\u662f\u5360\u4f4d\u7b26\u53d6\u4ee3</p></div>',
                identifier: 'components-tabs',
              },
              s.a.createElement(l, null),
            ),
            s.a.createElement('div', { className: 'markdown' }),
            s.a.createElement(
              o['default'],
              {
                sources: {
                  _: {
                    jsx:
                      "import React, { useState, useRef } from 'react';\nimport { Tabs, TabPanel, ScrollableTabBar, Button, WhiteSpace } from 'weui-react-v2';\nimport '../swiper/index.less';\n\nfunction makeSection(count) {\n  const result = [];\n\n  for (let i = 0; i < count + 3; ++i) {\n    result.push(<p key={i}>count: {count}</p>);\n  }\n\n  return result;\n}\n\nexport default () => {\n  // \u521d\u59cb\u5316\u79cd\u5b50\u6570\u636e\n  const [tabs, setTabs] = useState(['\u9009\u98790', '\u9009\u98791', '\u9009\u98792']);\n  const [key, setKey] = useState(tabs[0]);\n  const scrollToRef = useRef(null);\n\n  function addTab() {\n    setTabs(tabs.concat([`\u9009\u9879${tabs.length}`]));\n  }\n\n  function removeTab() {\n    setKey(0);\n    setTabs(tabs.slice(0, tabs.length - 1));\n  }\n\n  function scrollTo() {\n    if (scrollToRef.current) {\n      scrollToRef.current(key);\n    }\n  }\n\n  return (\n    <div className=\"tabs-demo\">\n      <Button block onClick={addTab}>\n        \u52a8\u6001\u589e\u52a0\n      </Button>\n\n      <Button block onClick={removeTab}>\n        \u52a8\u6001\u51cf\u5c11\n      </Button>\n      <WhiteSpace size=\"lg\" />\n      <select value={key} onChange={e => setKey(e.target.value)}>\n        {tabs.map(tab => (\n          <option key={tab} value={tab}>\n            {tab}\n          </option>\n        ))}\n      </select>\n      <WhiteSpace size=\"lg\" />\n      <Button block onClick={scrollTo}>\n        \u6eda\u52a8\u5230\u6307\u5b9atab\n      </Button>\n\n      <Tabs renderTabBar={() => <ScrollableTabBar scrollToRef={scrollToRef} />}>\n        {tabs.map((tab, i) => (\n          <TabPanel key={i} tabKey={tab} tab={<span className=\"tab_point\">{tab}</span>}>\n            {makeSection(i)}\n          </TabPanel>\n        ))}\n      </Tabs>\n\n      <p>\u89c2\u5bdf\u6211\u5c31\u77e5\u9053\uff0c \u4e0a\u9762\u662f\u81ea\u52a8\u9ad8\u5ea6</p>\n    </div>\n  );\n};\n",
                    tsx:
                      "import React, { useState, useRef } from 'react';\nimport { Tabs, TabPanel, ScrollableTabBar, Button, WhiteSpace } from 'weui-react-v2';\nimport '../swiper/index.less';\n\nfunction makeSection(count: number) {\n  const result = [];\n\n  for (let i = 0; i < count + 3; ++i) {\n    result.push(<p key={i}>count: {count}</p>);\n  }\n  return result;\n}\n\nexport default () => {\n  // \u521d\u59cb\u5316\u79cd\u5b50\u6570\u636e\n  const [tabs, setTabs] = useState(['\u9009\u98790', '\u9009\u98791', '\u9009\u98792']);\n  const [key, setKey] = useState(tabs[0]);\n  const scrollToRef = useRef<Function>(null);\n\n  function addTab() {\n    setTabs(tabs.concat(['\u9009\u9879' + tabs.length]));\n  }\n\n  function removeTab() {\n    setKey(0);\n    setTabs(tabs.slice(0, tabs.length - 1));\n  }\n\n  function scrollTo() {\n    if (scrollToRef.current) {\n      scrollToRef.current(key);\n    }\n  }\n\n  return (\n    <div className=\"tabs-demo\">\n      <Button block={true} onClick={addTab}>\n        \u52a8\u6001\u589e\u52a0\n      </Button>\n\n      <Button block={true} onClick={removeTab}>\n        \u52a8\u6001\u51cf\u5c11\n      </Button>\n      <WhiteSpace size=\"lg\" />\n      <select value={key} onChange={(e) => setKey(e.target.value)}>\n        {tabs.map((tab) => (\n          <option key={tab} value={tab}>\n            {tab}\n          </option>\n        ))}\n      </select>\n      <WhiteSpace size=\"lg\" />\n      <Button block={true} onClick={scrollTo}>\n        \u6eda\u52a8\u5230\u6307\u5b9atab\n      </Button>\n\n      <Tabs renderTabBar={() => <ScrollableTabBar scrollToRef={scrollToRef} />}>\n        {tabs.map((tab, i) => (\n          <TabPanel key={i} tabKey={tab} tab={<span className=\"tab_point\">{tab}</span>}>\n            {makeSection(i)}\n          </TabPanel>\n        ))}\n      </Tabs>\n\n      <p>\u89c2\u5bdf\u6211\u5c31\u77e5\u9053\uff0c \u4e0a\u9762\u662f\u81ea\u52a8\u9ad8\u5ea6</p>\n    </div>\n  );\n};",
                  },
                  'swiper/index.less': {
                    import: '../swiper/index.less',
                    content:
                      '.swiper-demo {\n  .fimg {\n    width: 100%;\n    height: 400px;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);\n  }\n}\n.swiper-demo2 {\n  .fimg {\n    width: 100%;\n    height: 100%;\n    touch-action: none;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n  }\n}\n\n.tabs-demo {\n  font-size: 32px;\n\n  select {\n    display: block;\n    width: 100%;\n    height: 45px;\n    line-height: 45px;\n    font-size: 35px;\n  }\n\n  .weui-tab-panel {\n    // background-color: #607d8b;\n    text-align: center;\n    padding: 20px;\n  }\n}\n',
                  },
                },
                dependencies: { react: { version: '17.0.1' }, 'weui-react-v2': { version: '3.0.0-beta.2' } },
                title: '\u52a8\u6001\u589e\u51cf',
                description:
                  '<div class="markdown"><p>\u5f53tabbar\u6ea2\u51fa\u540e\uff0c\u4f1a\u663e\u793a\u7bad\u5934, \u9ed8\u8ba4\u5f00\u542f\u81ea\u52a8\u9ad8\u5ea6</p></div>',
                identifier: 'components-tabs-1',
              },
              s.a.createElement(c, null),
            ),
            s.a.createElement('div', { className: 'markdown' }),
            s.a.createElement(
              o['default'],
              {
                sources: {
                  _: {
                    jsx:
                      'import classNames from \'classnames\';\nimport React from \'react\';\nimport { Tabs, TabPanel, SwipeableTabContent } from \'weui-react-v2\';\nimport data from \'./data.json\';\nimport \'./index.less\';\n\nlet allFoods = data.reduce((pre, cur) => pre.concat(cur.foods), []);\nallFoods = allFoods.map(d => {\n  d.cover = require(`./images/${d.cover}`);\n  return d;\n});\n\nfunction FoodList({ data }) {\n  return (\n    <React.Fragment>\n      {data.map((d, i) => (\n        <ListSegment key={i} cover={d.cover} extra={<NumberBtn />}>\n          <p className="dish-list__name">{d.name}</p>\n          <p className="dish-list__price">\xa5{d.unitPrice}</p>\n        </ListSegment>\n      ))}\n    </React.Fragment>\n  );\n}\n\nfunction ListSegment(props) {\n  const { className, style, cover, extra, children } = props;\n  const classList = classNames([\'list-segment-item\', className]);\n  return (\n    <div className={classList} style={style}>\n      <div className="list-segment__cover">\n        <img src={cover} alt="" />\n      </div>\n      <div className="list-segment__content">{children}</div>\n      <div className="list-segment__extra">{extra}</div>\n    </div>\n  );\n}\n\nfunction NumberBtn(props) {\n  const { className, onAdd, onRemove } = props;\n  return (\n    <div className={classNames(\'number-btn-wrap\', className)}>\n      <span className="number-btn left" onClick={onRemove}>\n        +\n      </span>\n      <span className="number-btn right" onClick={onAdd}>\n        -\n      </span>\n    </div>\n  );\n}\n\nexport default function() {\n  return (\n    <div className="tabs-v-demo">\n      <Tabs vertical renderTabContent={() => <SwipeableTabContent disabled />}>\n        <TabPanel tabKey="all" tab={<span className="tab_point">\u5168\u90e8\u83dc\u54c1</span>}>\n          <FoodList data={allFoods} />\n        </TabPanel>\n        {data.map((d, i) => (\n          <TabPanel key={d.type} tabKey={d.type} tab={<span className="tab_point">{d.type}</span>}>\n            <FoodList data={d.foods} />\n          </TabPanel>\n        ))}\n      </Tabs>\n    </div>\n  );\n}\n',
                    tsx:
                      'import classNames from \'classnames\';\nimport React from \'react\';\nimport { Tabs, TabPanel, SwipeableTabContent, ScrollableTabBar } from \'weui-react-v2\';\nimport data from \'./data.json\';\nimport \'./index.less\';\n\nlet allFoods: IDishInfo[] = data.reduce((pre: any, cur: any) => {\n  return pre.concat(cur.foods);\n}, []);\nallFoods = allFoods.map((d) => {\n  d.cover = require(`./images/${d.cover}`);\n  return d;\n});\n\ninterface IDishInfo {\n  name: string;\n  unitPrice: number;\n  cover: string;\n}\n\nfunction FoodList({ data }: { data: IDishInfo[] }) {\n  return (\n    <React.Fragment>\n      {data.map((d, i) => (\n        <ListSegment key={i} cover={d.cover} extra={<NumberBtn />}>\n          <p className="dish-list__name">{d.name}</p>\n          <p className="dish-list__price">\xa5{d.unitPrice}</p>\n        </ListSegment>\n      ))}\n    </React.Fragment>\n  );\n}\n\ninterface ListSegmentProps {\n  /**\n   * \u7c7b\u540d\n   */\n  className?: string;\n  /**\n   * \u6837\u5f0f\n   */\n  style?: React.CSSProperties;\n  /**\n   * \u5c01\u9762\u56fe\u7247\n   */\n  cover: string;\n  /**\n   * \u53f3\u4fa7\u64cd\u4f5c\u533a\u57df\n   */\n  extra?: React.ReactNode;\n  children?: React.ReactNode;\n}\nfunction ListSegment(props: ListSegmentProps) {\n  const { className, style, cover, extra, children } = props;\n  const classList = classNames([\'list-segment-item\', className]);\n\n  return (\n    <div className={classList} style={style}>\n      <div className="list-segment__cover">\n        <img src={cover} alt="" />\n      </div>\n      <div className="list-segment__content">{children}</div>\n      <div className="list-segment__extra">{extra}</div>\n    </div>\n  );\n}\n\ninterface NumberBtnProps {\n  className?: string;\n  onAdd?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;\n  onRemove?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;\n}\nfunction NumberBtn(props: NumberBtnProps) {\n  const { className, onAdd, onRemove } = props;\n  return (\n    <div className={classNames(\'number-btn-wrap\', className)}>\n      <span className="number-btn left" onClick={onRemove}>\n        +\n      </span>\n      <span className="number-btn right" onClick={onAdd}>\n        -\n      </span>\n    </div>\n  );\n}\n\nexport default function () {\n  return (\n    <div className="tabs-v-demo">\n      <Tabs vertical={true} renderTabContent={() => <SwipeableTabContent disabled={true} />}>\n        <TabPanel tabKey="all" tab={<span className="tab_point">\u5168\u90e8\u83dc\u54c1</span>}>\n          <FoodList data={allFoods} />\n        </TabPanel>\n        {data.map((d, i) => (\n          <TabPanel key={d.type} tabKey={d.type} tab={<span className="tab_point">{d.type}</span>}>\n            <FoodList data={d.foods} />\n          </TabPanel>\n        ))}\n      </Tabs>\n    </div>\n  );\n}\n',
                  },
                  'data.json': {
                    import: './data.json',
                    content:
                      '[\n  {\n    "type": "\u51ac\u9634\u529f",\n    "foods": [\n      {\n        "name": "\u9999\u83c7\u51ac\u9634\u529f",\n        "unitPrice": 35,\n        "cover": "dish_03_preview.png"\n      },\n      {\n        "name": "\u9c9c\u867e\u7092\u9762(\u9ebb\u8fa3)",\n        "unitPrice": 40,\n        "cover": "dish_04_preview.png"\n      },\n      {\n        "name": "\u51ac\u9634\u529f(\u5fae\u8fa3)",\n        "unitPrice": 58,\n        "cover": "dish_03_preview.png"\n      },\n      {\n        "name": "\u9999\u83c7\u51ac\u9634\u529f(\u9ebb\u8fa3)",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u51c9\u83dc",\n    "foods": [\n      {\n        "name": "\u852c\u83dc\u51ac\u9634\u529f",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u7ca4\u83dc",\n    "foods": [\n      {\n        "name": "\u9ebb\u8fa3\u79c3\u5934",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      },\n      {\n        "name": "\u6c34\u716e\u8089\u7247",\n        "unitPrice": 35,\n        "cover": "dish_03_preview.png"\n      },\n      {\n        "name": "\u6253\u5364\u9762",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u70e7\u70e4",\n    "foods": [\n      {\n        "name": "\u70e4\u571f\u8c46",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u5bb5\u591c\u5fc5\u70b9",\n    "foods": [\n      {\n        "name": "\u9ebb\u8fa3\u9e21\u722a",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u770b\u4e0d\u89c11",\n    "foods": [\n      {\n        "name": "\u6d4b\u8bd5\u770b\u4e0d\u89c1",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u770b\u4e0d\u89c12",\n    "foods": [\n      {\n        "name": "\u6d4b\u8bd5\u770b\u4e0d\u89c1",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  },\n  {\n    "type": "\u770b\u4e0d\u89c13",\n    "foods": [\n      {\n        "name": "\u6d4b\u8bd5\u770b\u4e0d\u89c1",\n        "unitPrice": 35,\n        "cover": "dish_04_preview.png"\n      }\n    ]\n  }\n]\n',
                  },
                  'index.less': {
                    import: './index.less',
                    content:
                      '.tabs-v-demo {\n  height: 700px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);\n\n  p {\n    margin: 0;\n  }\n\n  .weui-tabs {\n    display: flex;\n    height: 100%;\n    background-color: #f2f5f7;\n    padding: 0.26667vw;\n    box-sizing: border-box;\n  }\n\n  .weui-scrollable-tabbar {\n    width: 21.33333vw;\n    height: 100%;\n    flex-shrink: 0;\n  }\n  .weui-scrollable-tabbar-inner {\n    flex-direction: column;\n    margin-bottom: 0;\n  }\n  .weui-tab {\n    margin: 0;\n    box-sizing: border-box;\n    line-height: 13.33333vw;\n    text-align: center;\n    font-size: 3.46667vw;\n    color: #202020;\n    list-style: none;\n    padding: 1.33333vw;\n    border-bottom: none;\n\n    &.active {\n      border-left: 1vw solid #06ad56;\n    }\n  }\n\n  .weui-tab-panel {\n    box-sizing: border-box;\n    height: 100%;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .weui-swiper-tabcontent {\n    flex: 1;\n    height: 100%;\n    position: relative;\n  }\n\n  .weui-swiper,\n  .weui-swiper-carousel,\n  .weui-swiper-item {\n    height: 100%;\n  }\n\n  .weui-swiper-item {\n    background-color: #fff;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    list-style: none;\n  }\n\n  .list-segment-item {\n    display: flex;\n    padding: 25px 30px 25px 30px;\n    background: #fff;\n  }\n\n  .list-segment__cover {\n    img {\n      width: 100px;\n      height: 100px;\n    }\n  }\n  .list-segment__content {\n    padding: 0 21px;\n    flex: 1;\n  }\n\n  .food-list {\n    padding: 20px 30px 60px 30px;\n    background: #fff;\n\n    .food-item {\n      margin-bottom: 30px;\n    }\n  }\n  .food-list__header {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 17px;\n    border-bottom: 1px solid #9b9b9b;\n    margin-bottom: 39px;\n  }\n  .foof-list__title {\n    font-size: 26px;\n    color: #202020;\n    font-weight: bold;\n\n    img {\n      width: 29px;\n      height: 29px;\n      margin-right: 11px;\n      vertical-align: text-bottom;\n    }\n  }\n  .foof-list__clear {\n    font-size: 26px;\n    color: #d5d5d5;\n\n    .icon {\n      margin-right: 6px;\n    }\n  }\n  .food-item {\n    display: flex;\n    justify-content: space-between;\n    font-size: 26px;\n    color: #202020;\n  }\n  .food-item__name {\n    flex: 1;\n    font-size: 26px;\n    color: #202020;\n    font-weight: bold;\n  }\n  .mr-12 {\n    margin-right: 12px;\n  }\n  .food-item__extra {\n    display: flex;\n\n    .price {\n      font-size: 26px;\n      color: #ffdd03;\n      font-weight: bold;\n    }\n  }\n\n  @size: 35px;\n\n  .number-btn-wrap {\n    display: flex;\n    box-sizing: border-box;\n    width: 82px;\n    height: @size;\n    line-height: @size - 10px;\n    border-radius: @size;\n    border: solid 1px #ffdd03;\n    background-color: #ffdd03;\n    padding: 2px;\n    text-align: center;\n  }\n  .number-btn {\n    flex: 1 1 50%;\n    font-size: 20px;\n    transition: 0.3s;\n    cursor: pointer;\n\n    &.left {\n      border-radius: @size 0 0 @size;\n      background: #fff;\n    }\n\n    &.right {\n      border-radius: 0 @size @size 0;\n    }\n\n    &:hover,\n    &:active {\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n  }\n}\n',
                  },
                },
                dependencies: {
                  classnames: { version: '2.2.6' },
                  react: { version: '17.0.1' },
                  'weui-react-v2': { version: '3.0.0-beta.2' },
                },
                title: '\u5782\u76f4\u663e\u793a',
                description:
                  '<div class="markdown"><p>\u901a\u8fc7\u81ea\u5b9a\u4e49\u6837\u5f0f\uff0c\u53ef\u4ee5\u5b9e\u73b0\u66f4\u52a0\u4e30\u5bcc\u7684\u529f\u80fd</p></div>',
                identifier: 'tabs-vertical',
              },
              s.a.createElement(p, null),
            ),
            s.a.createElement(
              'div',
              { className: 'markdown' },
              s.a.createElement(
                'p',
                null,
                s.a.createElement(
                  'h2',
                  { id: 'api' },
                  s.a.createElement(
                    i['AnchorLink'],
                    { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                    s.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                s.a.createElement(
                  'h3',
                  { id: 'api-tabs' },
                  s.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-tabs', 'aria-hidden': 'true', tabIndex: -1 },
                    s.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'Tabs',
                ),
                s.a.createElement(r['a'], {
                  src: '../../../src/Tabs/Tabs.tsx',
                  identifier: '../../../src/Tabs/Tabs.tsx',
                  export: 'Tabs',
                }),
              ),
              s.a.createElement(
                'p',
                null,
                s.a.createElement(
                  'h2',
                  { id: 'api-1' },
                  s.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-1', 'aria-hidden': 'true', tabIndex: -1 },
                    s.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'API',
                ),
                s.a.createElement(
                  'h3',
                  { id: 'api-tabpanel' },
                  s.a.createElement(
                    i['AnchorLink'],
                    { to: '#api-tabpanel', 'aria-hidden': 'true', tabIndex: -1 },
                    s.a.createElement('span', { className: ['icon', 'icon-link'] }),
                  ),
                  'TabPanel',
                ),
                s.a.createElement(r['a'], {
                  src: '../../../src/Tabs/TabPanel.tsx',
                  identifier: '../../../src/Tabs/TabPanel.tsx',
                  export: 'TabPanel',
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
        s = t.n(a),
        i = t('dEAq'),
        o = {
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
          r = Object(i['useApiData'])(e),
          l = Object(a['useContext'])(i['context']),
          c = l.locale,
          p = o[c] || o['en-US'];
        return s.a.createElement(
          s.a.Fragment,
          null,
          r &&
            s.a.createElement(
              'table',
              { style: { marginTop: 24 } },
              s.a.createElement(
                'thead',
                null,
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('th', null, p.name),
                  s.a.createElement('th', null, p.description),
                  s.a.createElement('th', null, p.type),
                  s.a.createElement('th', null, p.default),
                ),
              ),
              s.a.createElement(
                'tbody',
                null,
                r[t].map((n) =>
                  s.a.createElement(
                    'tr',
                    { key: n.identifier },
                    s.a.createElement('td', null, n.identifier),
                    s.a.createElement('td', null, n.description || '--'),
                    s.a.createElement('td', null, s.a.createElement('code', null, n.type)),
                    s.a.createElement(
                      'td',
                      null,
                      s.a.createElement('code', null, n.default || (n.required && p.required) || '--'),
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
