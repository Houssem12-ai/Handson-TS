export class person {
    /* public name: string;
    readonly age: number;
    public hobby: string; */
    // for a cleaner version we could define everything here 
    constructor(/* a: string, b: number, c: string */ name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    format() {
        return `${this.name} gonna become an amazing muslim programmer in chea llah at the age of ${this.age + 1}`;
    }
}
