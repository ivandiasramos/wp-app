import { isArray } from '../is-array/is-array';
import { isObject } from '../is-object/is-object';
import { isString } from '../is-string/is-string';

export function search(arr: any[], searchedValue: string) {
  const newArray = [];

  arr.forEach(item =>
    createNewArray(item, searchedValue, newArray, item));

  return newArray;
}

const createNewArray = (valueToBeScanned: any, searchedValue: string, newArray: any[], itemToInterate: any) => {
  if (isObject(valueToBeScanned)) {
    objSearch(valueToBeScanned, searchedValue, newArray, itemToInterate);
  }

  if (strContains(valueToBeScanned, searchedValue)) {
    newArray.push(itemToInterate);
    return;
  }

  if (isArray(valueToBeScanned)) {
    valueToBeScanned
      .forEach(item =>
        createNewArray(item, searchedValue, newArray, itemToInterate)
    );
    return;
  }
}

const objSearch = (valueToBeScanned: Object, searchedValue: string, newArray: any[], itemToInterate: any) => {
  const values = Object.values(valueToBeScanned);
  for (let i = 0; i < values.length; i ++) {
    if (strContains(values[i], searchedValue)) {
      newArray.push(itemToInterate);
      break;
    }

    createNewArray(values[i], searchedValue, newArray, itemToInterate);
  }
}

const formatSearchedString = (str: string): string =>
  str.toLocaleLowerCase().trim();

const strContains = (valueToBeScanned: any, searchedValue: string) =>
  isString(valueToBeScanned) && formatSearchedString(valueToBeScanned).includes(formatSearchedString(searchedValue))
