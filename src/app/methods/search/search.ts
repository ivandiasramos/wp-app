import { isArray } from '../is-array/is-array';
import { isObject } from '../is-object/is-object';
import { isString } from '../is-string/is-string';

export function search(arr: any[], searchedValue: string) {
  const newArray = [];

  arr.forEach(item =>
    createNewArray(item, searchedValue, newArray, item));
  
    newArray
  return newArray;
}

const createNewArray = (valueToBeScanned: any, searchedValue: string, newArray: any[], itemToInterate: any) => {
  if (isObject(valueToBeScanned)) {
    Object.values(valueToBeScanned)
      .forEach(value => {
        if (strContains(valueToBeScanned, searchedValue)) {
          newArray.push(itemToInterate);
          return;
        }

        createNewArray(value, searchedValue, newArray, itemToInterate);
    })
    return;
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
  }
}

const formatSearchedString = (str: string) =>
  str.toLocaleLowerCase().trim();

const strContains = (valueToBeScanned: string, searchedValue: string) =>
  isString(valueToBeScanned) && formatSearchedString(valueToBeScanned).includes(formatSearchedString(searchedValue))
