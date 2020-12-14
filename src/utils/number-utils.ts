/**
 * 限制在 lower 和 upper 之间的值
 * @param i 被限制的值
 * @param min 下限
 * @param max 上限
 */
export function clamp(i: number, min: number, max: number) {
  if (i < min) {
    return min;
  } else if (i > max) {
    return max;
  } else {
    return i;
  }
}

/**
 * 同Number.toFixed方法，但是不会四舍五入
 */
export function toFixed(num: number, fixed: number) {
  var regexp = new RegExp(`\\.([\\d]{1,${fixed}})?$`);
  const str = num + '';
  if (/\./.test(str) && !regexp.test(str)) {
    const dotIndex = str.indexOf('.');
    return str.slice(0, dotIndex + fixed + 1);
  } else {
    return str;
  }
}

/**
 * 尾部是否为小数点
 * @description 不允许多个小数点
 */
export function isTailDot(str: string) {
  if (/\.$/.test(str)) {
    const matchs = str.match(/(\.)/g);
    return matchs?.length == 1;
  } else {
    return false;
  }
}

/**
 * 是否金额字符串
 *
 * @param precision 小数点精度
 */
export function isAmount(val: string, precision: number = 2) {
  if (val == '') {
    return true;
  }
  var regexp = new RegExp(`(^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)(?:\\.\\d{1,${precision}})?$)`);
  return regexp.test(val + '');
}
