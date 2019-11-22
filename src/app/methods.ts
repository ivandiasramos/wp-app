export function remove(arr, func) {
  const removedItems = [];

  arr.forEach((item, i) => {
    if (func(item)) {
      removedItems.push(item);
      arr.splice(i, 1);
    }
  })

  return removedItems;
}