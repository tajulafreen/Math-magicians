import operate from './operate';

const isNumber = (item) => !!item.match(/[0-9]+/);

export default function calculate(obj, button) {
  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(button)) {
    if (button === '0' && obj.next === '0') {
      return {};
    }

    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + button };
      }
      return { ...obj, next: button };
    }

    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + button,
        total: null,
      };
    }
    return {
      next: button,
      total: null,
    };
  }

  if (button === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  if (button === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (button === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: button };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: button };
    }

    if (!obj.total) {
      return { total: 0, operation: button };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: button,
    };
  }

  if (!obj.next) {
    return { operation: button };
  }

  return {
    total: obj.next,
    next: null,
    operation: button,
  };
}
