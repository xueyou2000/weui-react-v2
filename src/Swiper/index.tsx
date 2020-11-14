import { clamp } from '@/utils/number-utils';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMergeValue from 'use-merge-value';
import './style';

export interface SwiperProps {
  /**
   * 附加类名
   */
  prefixCls?: string;
  /**
   * 根节点的附加类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 包裹内容
   */
  children?: React.ReactNode;
  /**
   * 当前索引
   */
  index?: number;
  /**
   * 索引改变
   */
  onChange?: (index: number) => void;
  /**
   * 默认索引
   */
  defaultIndex?: number;
  /**
   * 是否自动播放
   */
  autoplay?: boolean;
  /**
   * 自动播放间隔
   */
  autoplayInterval?: number;
  /**
   * 是否垂直展示, 垂直展示请给组件提供固定高度
   */
  vertical?: boolean;
  /**
   * 是否滑动缩放特效
   */
  scaleMode?: boolean;
  /**
   * 自动高度. 此模式下非当前索引的元素会被`display: none;`形式隐藏
   */
  audoHeight?: boolean;
  /**
   * 是否显示面板指示点
   */
  dots?: boolean;
}

export default function Swiper(props: SwiperProps) {
  const {
    prefixCls = 'weui-swiper',
    className,
    style,
    children,
    defaultIndex = 0,
    autoplay,
    autoplayInterval = 3000,
    vertical,
    scaleMode = true,
    audoHeight,
    dots = true,
  } = props;
  const items = React.Children.toArray(children);
  const [index, setIndex] = useMergeValue<number>(defaultIndex, {
    value: props.index,
    onChange: props.onChange,
  });
  const [{ offset, scale }, set] = useSpring(() => ({ offset: 0, scale: 1 }));
  const sizeRef = useRef({ width: 0, height: 0 });
  const start = useRef(offset.get());
  const isMove = useRef(false);
  const [displays, setDisplays] = useSprings(items.length, (i) => ({
    display: index === i ? 'block' : 'none',
    top: 0,
  }));
  const cacheOffset = useRef(offset.get());

  function saveSize(ins: HTMLDivElement | null) {
    if (ins) {
      sizeRef.current = { width: ins.clientWidth, height: ins.clientHeight };
    }
  }

  useEffect(() => {
    var itemSize = vertical ? sizeRef.current.height : sizeRef.current.width;
    cacheOffset.current = -(index * itemSize);
    set({
      offset: cacheOffset.current,
      immediate: false,
      onRest: () => {
        if (!isMove.current) {
          set({ offset: 0, immediate: true });
          setDisplays((i) => ({
            display: index === i ? 'block' : 'none',
            top: i * itemSize,
            immediate: true,
          }));
        }
      },
    });
  }, [index]);

  useEffect(() => {
    var handler: number | undefined;
    if (autoplay) {
      handler = window.setInterval(() => {
        if (!isMove.current) {
          setDisplays((i) => ({ display: 'block', top: i * sizeRef.current.height, immediate: true }));
          setIndex(index + 1 >= items.length ? 0 : index + 1);
        }
      }, autoplayInterval);
    }
    return () => window.clearInterval(handler);
  }, [index, autoplay]);

  const bind = useDrag(
    ({ down, first, last, movement: [mx, my], direction: [xDir, yDir], distance, cancel }) => {
      var size = sizeRef.current;
      var itemSize = vertical ? size.height : size.width;
      var mv = vertical ? my : mx;
      var dir = vertical ? yDir : xDir;

      if (first) {
        start.current = cacheOffset.current;
        setDisplays((i) => ({ display: 'block', top: i * sizeRef.current.height, immediate: true }));
      }
      isMove.current = true;
      if (down && distance > itemSize / 2) {
        isMove.current = false;
        setIndex(clamp(index + (dir > 0 ? -1 : 1), 0, items.length - 1));
        cancel();
      }

      set({
        offset: clamp(start.current + mv, -(items.length - 1) * itemSize, 0),
        scale: down ? 1 - distance / size.width / 2 : 1,
      });

      if (last) {
        isMove.current = false;
        set({ offset: -(index * itemSize), scale: 1, immediate: false });
      }
    },
    { axis: vertical ? 'y' : 'x' },
  );

  return (
    <div className={classNames(prefixCls, className, { [`${prefixCls}-vertical`]: vertical })} style={style}>
      <animated.div
        {...bind()}
        ref={saveSize}
        className={`${prefixCls}-carousel`}
        style={{ [vertical ? 'top' : 'left']: offset }}
      >
        {displays.map(({ display, top }: any, i) => (
          <animated.div
            className={`${prefixCls}-item`}
            key={i}
            style={{ display: audoHeight ? display : 'block', scale: scaleMode ? scale : 1, top: vertical ? top : 0 }}
          >
            {items[i]}
          </animated.div>
        ))}
      </animated.div>
      {dots && (
        <div className={`${prefixCls}-decorator`}>
          <div className={`${prefixCls}-decorator-inner`}>
            {items.map((_, i) => (
              <div className={classNames(`${prefixCls}-dot`, { active: index === i })} key={i}>
                <span />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
