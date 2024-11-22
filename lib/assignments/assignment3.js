/** 
 * Write a JavaScript program to get integers 
 * in the range (x, y) using recursion.  
 */

export function assignment3 () {
  const target = document.getElementById('assignment3');
  const lowerValue = 2;
  const upperValue = 9;
  let values = range(lowerValue, upperValue);
  target.innerHTML += `<p>${values}</p>`
}

function range(lowerValue, upperValue) {
  let value = [];
  for( ; lowerValue < upperValue - 1; lowerValue++ ) {
    value.push(lowerValue+1)
  }
  return value;
}