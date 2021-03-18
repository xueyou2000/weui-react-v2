import { isTailDot, toFixed } from '../utils/number-utils';

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

/**
 * 检测数值字符串是否中间状态
 * @description -, 1., 0., -0. 1.0 这些输入中间状态, 1.1这种完成状态应该返回false
 *
 * @param val 数值字符串
 */
export function checkNumberIntermediate(val: string, precision: number = 2) {
  // 尾部小数点
  if (precision != 0 && isTailDot(val)) {
    return true;
  }

  // 小数点后尾部是否为0 且小数点没有超过精度
  if (precision != 0) {
    var regexp = new RegExp(`\\.(\\d{1,${precision}}$)`);
    if (regexp.test(val) && /0$/.test(val)) {
      return true;
    }
  }

  // 开头符号
  if (/^(-)$/.test(val)) {
    return true;
  }

  // if (/^([-|+]?)(\d*)(\.?)(\d*)$/.test(val)) {
  //   return true;
  // }

  return false;
}

const FIX_NUMBER = 1000;

/**
 * 提供精确的加法运算
 * @param num1 被加数
 * @param num2 加数
 * @returns 两个参数的和  num1 + num2
 */
export function add(num1: number, num2: number) {
  return (num1 * FIX_NUMBER + num2 * FIX_NUMBER) / FIX_NUMBER;
}

/**
 * 提供精确的减法运算
 * @param num1 被减数
 * @param num2 减数
 * @returns 两个参数的差  num1 - num2
 */
export function sub(num1: number, num2: number) {
  return (num1 * FIX_NUMBER - num2 * FIX_NUMBER) / FIX_NUMBER;
}
