import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const first = Big(numberOne);
  const second = Big(numberTwo);
  if (operation === '+') {
    return first.plus(second).toString();
  }
  if (operation === '-') {
    return first.minus(second).toString();
  }
  if (operation === 'x') {
    return first.times(second).toString();
  }
  if (operation === '÷') {
    try {
      return first.div(second).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return first.mod(second).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
