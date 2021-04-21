import { ArrowDownOutlined, CheckCircleOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import useMergeValue from 'use-merge-value';
import Loadmore from '../Loadmore';
import { Direction, PullRefreshAction } from './enums';
import './style';
import { findClientHeight, findScrollHeight, findScrollTop, isBound, setScrollTop } from './utils';

export interface PullRefreshProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 内联样式
   */
  style?: React.CSSProperties;
  /**
   * 包裹内容
   */
  children?: React.ReactNode;
  /**
   * 是否开启下拉刷新
   */
  enablePullRefresh?: boolean;
  /**
   * 是否开启上滑加载更多,
   */
  enableLoadMore?: boolean;
  /**
   * 阈值, 下拉刷新的距离
   */
  threshold?: number;
  /**
   * 刷新完成空闲时间, 默认2000
   */
  idleTime?: number;
  /**
   * 状态
   */
  action: PullRefreshAction;
  /**
   * 处理状态
   */
  handleAction: (action: PullRefreshAction) => void;
  /**
   * 滚动元素, 默认为window
   */
  scrollTarget?: any | 'self';
  /**
   * 是否自动刷新
   */
  autoRefresh?: boolean;
}

function PullRefresh(props: PullRefreshProps) {
  const {
    prefixCls = 'weui-pull-refresh',
    className,
    style,
    children,
    enableLoadMore = true,
    enablePullRefresh = true,
    autoRefresh = true,
    idleTime = 2000,
    threshold = 60,
  } = props;
  const [action, setAction] = useMergeValue<PullRefreshAction>(PullRefreshAction.init, {
    value: props.action,
    onChange: props.handleAction,
  });
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tempActionRef = useRef(action);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lastYRef = useRef(0);
  const touchYRef = useRef(0);
  const directionRef = useRef(Direction.middle);
  const [{ y }, set] = useSpring(() => ({ y: 0 }));
  const scrollTarget = props.scrollTarget === 'self' ? wrapperRef : props.scrollTarget || window;

  function changeAction(act: PullRefreshAction) {
    tempActionRef.current = act;
    setAction(act);
  }

  function onTouchStart(event: React.TouchEvent<HTMLElement>) {
    lastYRef.current = event.touches[0].clientY;
    touchYRef.current = lastYRef.current;
    directionRef.current = Direction.middle;
  }

  function onTouchMove(event: React.TouchEvent<HTMLElement>) {
    const target = event.target as any;
    target.stopScroll = false;
    const touchY = event.touches[0].clientY;
    const clientHeight = findClientHeight(scrollTarget);
    const scrollTop = findScrollTop(scrollTarget);
    const scrollHeight = findScrollHeight(scrollTarget);
    // 当前触摸方向, delta > 0 = 下滑刷新, delta < 0 = 上滑加载
    const delta = touchY - lastYRef.current;
    // tip: 0.3为了模拟阻感
    let distance = (touchY - touchYRef.current) * 0.3;
    // 方向
    const direction =
      scrollTop <= 0 && delta > 0
        ? Direction.up
        : scrollTop + 1 >= scrollHeight - clientHeight && delta < 0
        ? Direction.down
        : Direction.middle;

    // 忽略刷新中的拖拽操作
    if (tempActionRef.current == PullRefreshAction.refreshing || tempActionRef.current == PullRefreshAction.refreshed) {
      if (direction !== Direction.middle) {
        // 防止拖拽出浏览器底色
        target.stopScroll = true;
        event.preventDefault();
      }
      return;
    }

    if (directionRef.current !== Direction.middle || direction !== Direction.middle) {
      if (directionRef.current === Direction.middle) {
        // 设置此次触摸方向
        directionRef.current = direction;
      }
      // 忽略边界溢出
      if (isBound(directionRef.current, distance)) {
        return;
      }

      // 设置状态
      if (directionRef.current === Direction.up && enablePullRefresh) {
        changeAction(distance >= threshold ? PullRefreshAction.enough : PullRefreshAction.pulling);
      } else if (
        directionRef.current === Direction.down &&
        tempActionRef.current !== PullRefreshAction.loading &&
        enableLoadMore
      ) {
        changeAction(PullRefreshAction.loading);
      }

      set({ y: distance, immediate: true });
      // 防止拖拽出浏览器底色
      target.stopScroll = true;
      event.preventDefault();
    }
    lastYRef.current = touchY;
  }

  function onTouchEnd(e: React.TouchEvent<HTMLElement>) {
    lastYRef.current = 0;
    touchYRef.current = 0;
    const header = headerRef.current;
    if (!header || tempActionRef.current === PullRefreshAction.refreshing) {
      return;
    }

    if (directionRef.current === Direction.up && enablePullRefresh) {
      if (tempActionRef.current === PullRefreshAction.enough) {
        changeAction(PullRefreshAction.refreshing);
      } else {
        set({
          y: 0,
          immediate: false,
          reset: true,
          onRest: ({ value: { y } }) => {
            if (y === 0) {
              changeAction(PullRefreshAction.reset);
            }
          },
        });
      }
    } else {
      if (tempActionRef.current !== PullRefreshAction.loading) {
        changeAction(PullRefreshAction.reset);
      }
      set({ y: 0, immediate: false });
    }
  }

  useScroll(
    ({ xy: [, scrollTop], event }) => {
      const clientHeight = findClientHeight(scrollTarget);
      // 方向
      const direction =
        scrollTop <= 0
          ? Direction.up
          : scrollTop + 1 >= findScrollHeight(scrollTarget) - clientHeight
          ? Direction.down
          : Direction.middle;

      if (direction === Direction.down && tempActionRef.current !== PullRefreshAction.loading) {
        changeAction(PullRefreshAction.loading);
      }

      if (direction !== Direction.middle) {
        event.preventDefault();
      }
    },
    {
      enabled: enableLoadMore,
      domTarget: scrollTarget,
      eventOptions: { passive: true },
    },
  );

  useEffect(() => {
    let timehandle: any;
    if (action === PullRefreshAction.refreshing) {
      setScrollTop(scrollTarget);
      set({ y: headerRef.current?.clientHeight || 0, immediate: false });
    } else if (action === PullRefreshAction.refreshed) {
      set({ y: headerRef.current?.clientHeight || 0, immediate: false });
      timehandle = window.setTimeout(() => {
        set({ y: 0, immediate: false });
        changeAction(PullRefreshAction.reset);
      }, idleTime);
    } else if (action === PullRefreshAction.reset && tempActionRef.current === PullRefreshAction.loading) {
      tempActionRef.current = PullRefreshAction.reset;
    }

    tempActionRef.current = action;
    return () => {
      if (timehandle) {
        window.clearTimeout(timehandle);
      }
    };
  }, [action]);

  useEffect(() => {
    if (autoRefresh && enablePullRefresh) {
      changeAction(PullRefreshAction.refreshing);
    }
  }, []);

  useEffect(() => {
    function stopFunc(e: TouchEvent) {
      const target = e.target as any;
      if (target && target.stopScroll) {
        e.preventDefault();
      }
    }
    document.addEventListener('touchmove', stopFunc, { passive: false });
    return () => document.removeEventListener('touchmove', stopFunc);
  }, []);

  function renderHead() {
    if (action === PullRefreshAction.pulling || action === PullRefreshAction.enough) {
      return (
        <div>
          <ArrowDownOutlined className="arrow" />
          {action === PullRefreshAction.pulling ? '下拉刷新' : '松开刷新'}
        </div>
      );
    } else if (action === PullRefreshAction.refreshing) {
      return <Loadmore tips="刷新中" loading={true} />;
    } else if (action === PullRefreshAction.refreshed) {
      return (
        <div className="refresh-complete">
          <CheckCircleOutlined /> 完成刷新
        </div>
      );
    } else {
      return null;
    }
  }

  function renderFooter() {
    if (action === PullRefreshAction.loading) {
      return <Loadmore tips="正在加载..." loading={true} />;
    } else {
      return null;
    }
  }

  return (
    <div
      className={classNames(prefixCls, className, 'scroll', `action-${action}`)}
      style={style}
      ref={wrapperRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <animated.div className={`${prefixCls}-body`} style={{ y }}>
        <div className={`${prefixCls}-head`} ref={headerRef}>
          <div className={`${prefixCls}-head-default`}>{renderHead()}</div>
        </div>
        {children}
        <div className={`${prefixCls}-footer`}>
          <div className={`${prefixCls}-footer-default`}>{renderFooter()}</div>
        </div>
      </animated.div>
    </div>
  );
}

export default React.memo(PullRefresh);
