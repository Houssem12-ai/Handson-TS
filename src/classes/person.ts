import { invoice } from '../intefaces/una.js'


export class person implements invoice {
    /* public name: string;
    readonly age: number;
    public hobby: string; */

    // for a cleaner version we could define everything here 
    constructor(/* a: string, b: number, c: string */
    public name:string,
    readonly age: number,
    public hobby: string,
    ){}

    format() {
        return `${this.name} gonna become an amazing muslim programmer in chea llah at the age of ${this.age + 1}`
    }
}
