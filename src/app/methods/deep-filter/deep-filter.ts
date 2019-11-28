import { isArray } from '../is-array/is-array';
import { isObject } from '../is-object/is-object';
import { isString } from '../is-string/is-string';

export function deepFilter(arr, searchedValue) {
  const newArray = [];

  arr.forEach(item =>
    createNewArray(item, searchedValue, newArray, item));

  return newArray;
}

const createNewArray = (valueToBeScanned, searchedValue, newArray, itemToInterate) => {
  if (isObject(valueToBeScanned)) {
    Object.values(valueToBeScanned)
      .forEach(value => {
        if (isString(value) && String(value).toLowerCase().includes(searchedValue.toLowerCase())) {
          newArray.push(itemToInterate);
          return;
        }

        createNewArray(value, searchedValue, newArray, itemToInterate);
    })
    return;
  }

  if (isArray(valueToBeScanned)) {
    valueToBeScanned
      .forEach(item =>
        createNewArray(item, searchedValue, newArray, itemToInterate)
    );
  }
}
