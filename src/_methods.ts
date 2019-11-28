export function compact(arr) {
  return arr.filter(Boolean);
}

export function concat(arr, ...values) {
  return [...arr, ...values];
}

// export function difference(arr, values) {
//   const newArray = arr;

//   remove(newArray, item => values.includes(item));

//   return newArray;
// }

export function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

export function isFunction (value) {
  return typeof value === 'function';
}

export function isNull(value) {
  return value === null;
}
  
export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isRegExp (value) {
  return value && typeof value === 'object' && value.constructor === RegExp;
}

export function isError (value) {
  return value instanceof Error && typeof value.message !== 'undefined';
}

export function isDate (value) {
  return value instanceof Date;
}

export function isSymbol (value) {
  return typeof value === 'symbol';
}
