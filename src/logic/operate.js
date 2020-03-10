import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const total = Big(numberOne);
  const next = Big(numberTwo);

  switch (operation) {
    case ('%'):
      total.times(next.div(100));
      break;

    case ('÷'):
      total.div(next);
      break;

    case ('x'):
      total.times(next);
      break;

    case ('-'):
      total.minus(next);
      break;

    case ('+'):
      total.plus(next);
      break;

    default:
      break;
  }
  return total;
};

export default operate;
