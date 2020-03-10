import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  let total = Big(numberOne);
  const next = Big(numberTwo);

  switch (operation) {
    case ('%'):
      total *= (next / 100);
      break;

    case ('÷'):
      total /= next;
      break;

    case ('x'):
      total *= next;
      break;

    case ('-'):
      total -= next;
      break;

    case ('+'):
      total += next;
      break;

    default:
      break;
  }
  return total;
};

export default operate;
