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

export function chunk(arr, size) {
  const newArray = [];
  const loop = arr.length / size;
  let counter = 0;

  for(let i = 0; i < loop; i++) {
    const nextCounter = counter + size;

    newArray.push(arr.slice(counter, nextCounter));

    counter = nextCounter;
  }

  return newArray;
}
