import { flatObjectToQueryString, isObject, objectKeysToCamelCase, removeEmptyFields, toCamel } from './dataUtils';

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

describe('dataUtils flatObjectToQueryString', () => {
  it('should convert objects into querystring', () => {
    expect(flatObjectToQueryString({ foo_bar: 1, foo: 'bar' })).toEqual('foo_bar=1&foo=bar');
    expect(flatObjectToQueryString({ foo: true })).toEqual('foo=true');
    expect(flatObjectToQueryString({ bar: 1 })).toEqual('bar=1');
  });

  it('should encode special chars', () => {
    expect(flatObjectToQueryString({ foo: '#ba#r' })).toEqual('foo=%23ba%23r');
  });
});

describe('dataUtils removeEmptyFields', () => {
  it('should remove null or empty fields from objects', () => {
    expect(removeEmptyFields({ fooBar: 1, foo: '', bar: null })).toEqual(<any>{ fooBar: 1 });
    expect(removeEmptyFields({ fooBar: 0 })).toEqual({ fooBar: 0 });
  });
});
