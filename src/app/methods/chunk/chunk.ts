export function chunk(arr: any[], size: number): any[] {
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