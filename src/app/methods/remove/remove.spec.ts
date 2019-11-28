
import { remove } from './remove';

describe('When firstParam is array', () => {
  let firstParam: any[];
  let secondParam: Function;

  beforeEach(() => {
    firstParam = [1, 2, 3]
    secondParam = item => item === 3;
  })

  test('should remove item 3 from the array received', () => {
    const expectedResult = [1, 2];
  
    remove(firstParam, secondParam);
  
    expect(
      firstParam
    )
    .toEqual(expectedResult);
  });
  
  test('should return itens removed from array', () => {
    const expectedResult = [3];
  
    expect(
      remove(firstParam, secondParam)
    )
    .toEqual(expectedResult);
  });
});

describe('When firstParam is not an array', () => {
  let firstParam: number;
  let secondParam: Function;

  beforeEach(() => {
    firstParam = 123;
    secondParam = item => item === 3;
  })

  test('should not change the array received', () => {
    remove(firstParam, secondParam);
  
    expect(
      firstParam
    )
    .toEqual(123);
  });

  test('should return undefined', () => {
    expect(
      remove(firstParam, secondParam)
    )
    .toEqual(undefined);
  });
});
