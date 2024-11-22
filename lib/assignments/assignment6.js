/** 
 * Write a JavaScript function to validate 
 * whether a given value type is NaN or not
 */
export function assignment6 (value) {
  const target = document.getElementById('assignment6')
  target.innerHTML += `<p>Is ${value} NaN?  ${isNaN(value)}</p>`;
}