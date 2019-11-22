export function remove(arr, func) {
  const removedItems = [];

  arr.forEach(item => {
    if (func(item)) {
      removedItems.push(item);
      arr.splice(item, 1);
    }
  })

  return removedItems;
}