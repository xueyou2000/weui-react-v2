export function isEmpy(val: any) {
  return val === undefined || val === null;
}

/**
 * 默认格式化
 * @description 返回数值的字符串
 */
export function defaultFormatter(value: any) {
  if (isEmpy(value)) {
    return '';
  } else {
    return value + '';
  }
}

/**
 * 默认解析
 * @description 返回对应的反格式化字符串
 */
export function defaultParser(value: string) {
  if (value) {
    return value + '';
  } else {
    return '';
  }
}

/**
 * 保留精度
 *
 * @param precision 精度
 * @param val 数值字符串
 */
export function keepPrecision(precision: number | undefined, val: string | number): string {
  if (precision === undefined || val === undefined || val === '') {
    return String(val);
  } else {
    return parseFloat(val + '').toFixed(precision);
  }
}

/**
 * 字符串转换为数值
 * @description 返回undefined则不是数值
 */
export function toNumber(val: string) {
  if (val) {
    const number = parseFloat(val + '');
    if (!isNaN(number)) {
      return number;
    }
  }
}
