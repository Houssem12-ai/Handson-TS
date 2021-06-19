/* import { person } from './classes/person.js';

const hoss = new person('houssemeddine', 21, 'prog and eco');
//hoss.age = 20; => no cause it's read only 

console.log(hoss.format())
 */

//where we could use those special caracters ??/

/* const form = document.querySelector('new-item-form') */     //u see when u hover => it says Element type and don't recognize it as a form
/* const form = document.querySelector('.new-item-form') as HTMLFormElement

const types = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

//console.log(types)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(types.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.value)
    alert("it's done bb");
}) */

/* interface Isperson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(b: number): number;
}

const me: Isperson = {
    name: 'houssem',
    age: 21,//we can't define arrow functions here ?
    speak(a:string){
        console.log("salem "+a);
    },
    spend(b: number) {
        console.log("salem2")
        return b + 2;
    }
}

const jan = (amount: Isperson): number => {
    return amount.age + 99;
}

console.log(jan(me)); */

import { invoice } from './intefaces/una.js'
import {person} from './classes/person.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

const types = document.querySelector("#type") as HTMLSelectElement
const tofrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

//console.log(types)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (types.value == 'invoice') {
        let doc: invoice;
        doc = new person('hoss', 21, 'yowyow');
        console.log(doc.name);//why the attribute should be in the interface so i can call it ??? else i couldn't call it ????
    }

    /* console.log(types.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.value) */
})