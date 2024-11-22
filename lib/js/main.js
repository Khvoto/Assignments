/** * 
 * To watch these assignments in action within a browser,
 * use the following steps:
 * 1. npm install
 * 2. npm run dev
 * 3. ctrl/alt + click the localhost found in the terminal.
 */


import { assignment1 } from '../assignments/assignment1'
import { assignment2 } from '../assignments/assignment2'
import { assignment3 } from '../assignments/assignment3'
import { assignment4 } from '../assignments/assignment4'
import { assignment5 } from '../assignments/assignment5'
import { assignment6 } from '../assignments/assignment6'
import '../css/style.css'


const testObject = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

assignment1()
assignment2()
assignment3()
assignment4(16)
assignment4(18)
assignment4(25)
assignment5(testObject)
assignment6('asd')
assignment6('0');
assignment6('12');
assignment6('blurp');
assignment6(true);



