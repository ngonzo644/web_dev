import {formatCurrency} from '../../scripts/utils/money.js';


console.log('Test suite: Format currency');

console.log('converts cents to dollars');

if (formatCurrency(2095) === "20.95")
{
  console.log('passed');
}
else{
  console.log('failed');
  console.log(formatCurrency(2095));
}

console.log('converts 0 to dollars');

if (formatCurrency(0) === '0.00')
{
  console.log('passed');
}
else{
  console.log('fail');
}

console.log('round up');


if (formatCurrency(2000.5) === '20.01')
{
  console.log('pass');
}
else{
  console.log('fail');
  console.log(formatCurrency(2000.5));
}