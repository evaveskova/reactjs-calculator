import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let total = new Big(numberOne);
  const next = new Big(numberTwo);

  switch (operation) {
    case ('%'):
      total = total.div(next.times(100));
      break;

    case ('÷'):
      total = total.div(next);
      break;

    case ('x'):
      total = total.times(next);
      break;

    case ('-'):
      total = total.minus(next);
      break;

    case ('+'):
      total = total.plus(next);
      break;

    default:
      break;
  }
  return total.toFixed(2);
};

export default operate;
