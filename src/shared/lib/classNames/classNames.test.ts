import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional classes', () => {
    const expected = 'someClass addClass1 addClass2';
    expect(classNames('someClass', {}, ['addClass1', 'addClass2'])).toBe(expected);
  });
  test('with object classes', () => {
    const expected = 'someClass addClass2 objClass';
    expect(classNames('someClass', { objClass: true }, ['addClass2'])).toBe(expected);
  });
  test('with object false', () => {
    const expected = 'someClass addClass2 objClass';
    expect(classNames('someClass', { objClass: true, objClass2: false }, ['addClass2'])).toBe(expected);
  });
  test('with object undefined', () => {
    const expected = 'someClass addClass2 objClass';
    expect(classNames('someClass', { objClass: true, objClass2: undefined }, ['addClass2'])).toBe(expected);
  });
});
