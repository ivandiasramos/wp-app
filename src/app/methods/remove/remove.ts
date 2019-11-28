import { isArray } from './../is-array/is-array';

export function remove(arr, func) {
  const removedItems = [];

  if (isArray(arr)) {
    arr.forEach((item, i) => {
      if (func(item)) {
        removedItems.push(item);
        arr.splice(i, 1);
      }
    })

    return removedItems;
  }
}
