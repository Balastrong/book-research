import { isObject, objectKeysToCamelCase, toCamel } from './dataUtils';

describe('dataUtils toCamel', () => {
  it('should convert snake_case to camelCase', () => {
    expect(toCamel('foo_bar')).toEqual('fooBar');
    expect(toCamel('foo_bar_baz')).toEqual('fooBarBaz');
  });

  it('should keep camelCase as is', () => {
    // lowercase
    expect(toCamel('foobar')).toEqual('foobar');

    // camelCase
    expect(toCamel('fooBar')).toEqual('fooBar');
  });
});

describe('dataUtils isObject', () => {
  it('should return true if an object is given', () => {
    expect(isObject({})).toBeTrue();
    expect(isObject({ foo: 0 })).toBeTrue();
  });

  it('should return false if something that is not an object is given', () => {
    expect(isObject(null)).toBeFalse();
    expect(isObject(undefined)).toBeFalse();
    expect(isObject(2)).toBeFalse();
    expect(isObject(true)).toBeFalse();
    expect(isObject([1, 2])).toBeFalse();
  });

  it('should keep camelCase as is', () => {
    // lowercase
    expect(toCamel('foobar')).toEqual('foobar');

    // camelCase
    expect(toCamel('fooBar')).toEqual('fooBar');
  });
});

describe('dataUtils objectKeysToCamelCase', () => {
  it('should convert snake_case keys camelCase keys on objects', () => {
    expect(
      objectKeysToCamelCase({
        foo_bar: 1,
        foo: 'bar',
      }),
    ).toEqual({
      fooBar: 1,
      foo: 'bar',
    });
  });

  it('should convert snake_case keys camelCase keys on nested objects', () => {
    expect(
      objectKeysToCamelCase({
        foo_bar: 1,
        foo: {
          nested_value: true,
        },
      }),
    ).toEqual({
      fooBar: 1,
      foo: {
        nestedValue: true,
      },
    });
  });

  it('should convert snake_case keys camelCase keys on nested objects and arrays', () => {
    expect(
      objectKeysToCamelCase({
        foo_bar: 1,
        foo: [{ nested_value: true }, { one_more_nested: 1 }],
      }),
    ).toEqual({
      fooBar: 1,
      foo: [{ nestedValue: true }, { oneMoreNested: 1 }],
    });
  });
});
