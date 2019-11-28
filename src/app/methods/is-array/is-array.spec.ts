import { isArray } from './is-array';

describe('Should return true if', () => {
  test('param is array', () => {
    const param = [1, 2];

    expect(isArray(param)).toBeTruthy();
  });
});

describe('should return false if', () => {
  test('param is number', () => {
    const param = 123;

    expect(
      isArray(param)
    )
    .toBeFalsy();
  });
});