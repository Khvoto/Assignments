/**
 * Write a JavaScript function that changes the background color 
 * of anelement when a mouse enters it.
 */

export function assignment1 () {
  const target = document.getElementById('assignment1');
  target.addEventListener('mouseover', (e) => {
    console.log(e);
    e.target.style.backgroundColor = 'white';
  })
}