/**
 * 状态
 * init/reset -> pulling -> enough -> refreshing -> refreshed -> reset
 * init/reset -> pulling -> reset
 * init/reset -> loading -> reset
 */
export enum PullRefreshAction {
  /** 组件初始状态 */
  init = '',
  /** 下拉状态 */
  pulling = 'pulling',
  /** 下拉并且已经满足阈值 */
  enough = 'pulling-enough',
  /** 刷新中 */
  refreshing = 'refreshing',
  /** 完成刷新动作 */
  refreshed = 'refreshed',
  /** 恢复默认状态 */
  reset = 'reset',
  /** 加载中 */
  loading = 'loading',
}

/**
 * 滚动位置
 */
export enum Direction {
  up,
  middle,
  down,
}
