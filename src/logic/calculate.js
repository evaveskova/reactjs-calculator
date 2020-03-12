import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  debugger
  switch (buttonName) {
    case ('0'):
    case ('1'):
    case ('2'):
    case ('3'):
    case ('4'):
    case ('5'):
    case ('6'):
    case ('7'):
    case ('8'):
    case ('9'):
      if (!operation) {
        total = total ? total += buttonName : buttonName;
      } else {
        next = next ? next += buttonName : buttonName;
      }
      break;

    case ('÷'):
    case ('x'):
    case ('-'):
    case ('+'):
    case ('%'):
      if(operation) {
        total = operate(total, next, operation);
      }
      operation = buttonName;
      break;

    case ('+/-'):
      if (next) {
        next *= (-1);
      } else {
        total *= (-1);
      }
      break;

    case ('.'):
      if (next) {
        next = `${next}.`;
      } else {
        total = `${total}.`;
      }
      break;

    case ('='):
      if (next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }

      break;
    case ('AC'):
      total = null;
      next = null;
      operation = null;
      break;

    default:
      return total;
  }

  return { total, next, operation };
};


export default calculate;
