/* import { person } from './classes/person.js';

const hoss = new person('houssemeddine', 21, 'prog and eco');
//hoss.age = 20; => no cause it's read only

console.log(hoss.format())
 */
import { person } from './classes/person.js';
const form = document.querySelector('.new-item-form');
const types = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//console.log(types)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (types.value == 'invoice') {
        let doc;
        doc = new person('hoss', 21, 'yowyow');
        console.log(doc.name); //why the attribute should be in the interface so i can call it ??? else i couldn't call it ????
    }
    /* console.log(types.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.value) */
});
