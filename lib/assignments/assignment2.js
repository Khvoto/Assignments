/** 
 * Write a JavaScript function to add rows to a table.
 */

export function assignment2 () {
  const target = document.getElementById('assignment2');
  const table = Array.from(target.getElementsByTagName('table'));
  table[0].innerHTML += `<tr><td>JS 1</td><td>JS 2</td></tr>`
}