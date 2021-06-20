/* import { person } from './classes/person.js';

const hoss = new person('houssemeddine', 21, 'prog and eco');
//hoss.age = 20; => no cause it's read only

console.log(hoss.format())
 */
import { person } from './classes/person.js';
import { ListTemplate } from './classes/Listtemplate.js';
const form = document.querySelector('.new-item-form');
const ul = document.querySelector('ul');
const types = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//console.log(types)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //if (types.value == 'invoice') {
    let doc;
    let dab;
    dab = ['hoss', 21, 'yowyow'];
    doc = new person(...dab);
    console.log(doc.name); //why the attribute should be in the interface so i can call it ??? else i couldn't call it ????
    //}
    const list = new ListTemplate(ul);
    let brud; //'start'|'end' is a type and not only a simple condition !!! 
    brud = [doc, tofrom.value, 'start'];
    list.render(...brud);
    console.log(types.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.value);
});
//____________________________________________________________________________________________________________________________________________
/* const addUID = <T extends {name:string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 10);
    return {...obj, uid};
}
let obj = { name:'houssem',pren:'khi'};
console.log(addUID(obj))
 */
var Resourcetype;
(function (Resourcetype) {
    Resourcetype[Resourcetype["BOOK"] = 0] = "BOOK";
    Resourcetype[Resourcetype["CAHIER"] = 1] = "CAHIER";
    Resourcetype[Resourcetype["SOM"] = 2] = "SOM";
    Resourcetype[Resourcetype["BREAK"] = 3] = "BREAK";
})(Resourcetype || (Resourcetype = {}));
const config1 = {
    name: 'houssem',
    pren: 'khi',
    age: Resourcetype.BOOK
};
