/**
 * Write a JavaScript function to test if a number is a power of 2
 */

export function assignment4 (value) {
  const target = document.getElementById('assignment4');
  target.innerHTML += `<p>${value % 2 === 0}</p>`; 

}