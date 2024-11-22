/** *
 * Write a JavaScript program to list the properties
 * of a JavaScript object
 */
export function assignment5 (object) {
  const target = document.getElementById('assignment5');

  for( let key in object) {
    target.innerHTML += `<p> ${key}</p>`
  }
}
