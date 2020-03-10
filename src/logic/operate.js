import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let total = Big(numberOne);
  const next = Big(numberTwo);

  switch (operation) {
    case ('%'):
      total = total.times(next.div(100));
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
  return total;
};

export default operate;
