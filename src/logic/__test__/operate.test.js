import operate from '../operate';

test('operate function returns calculated result', () => {
  expect(operate(2, 3, '+')).toBe('5');
  expect(operate(3, 3, '-')).toBe('0');
  expect(operate(5, 4, 'x')).toBe('20');
  expect(operate(3, 3, '÷')).toBe('1');
});
