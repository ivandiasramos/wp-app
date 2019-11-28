import { chunk } from './chunk';

describe('Should return a chunk', () => {
  let firstParam: any[];
  let secondParam: number;
  let expectedReturn: any;

  beforeEach(() => {
    firstParam = [1, '2', { num: 3 }, [4]];
  });

  test('1 item', () => {
    secondParam = 1;
    expectedReturn = [[1], ['2'], [{ num: 3 }], [[4]]];
  
    expect(
      chunk(firstParam, secondParam)
    )
    .toEqual(expectedReturn);
  });

  test('2 items', () => {
    secondParam = 2;
    expectedReturn = [[1, '2'], [{ num: 3 }, [4]]];
  
    expect(
      chunk(firstParam, secondParam)
    )
    .toEqual(expectedReturn);
  });

  test('3 items', () => {
    secondParam = 3;
    expectedReturn = [[1, '2', { num: 3 }], [[4]]];
  
    expect(
      chunk(firstParam, secondParam)
    )
    .toEqual(expectedReturn);
  });

  test('4 items', () => {
    secondParam = 4;
    expectedReturn = [[1, '2', { num: 3 }, [4]]];
  
    expect(
      chunk(firstParam, secondParam)
    )
    .toEqual(expectedReturn);
  });
});
