export class Person {
    constructor(fname, 1Name, age){
        this.firstname = fName;
        this.lastname = 1Name;
        this.age = age;
    }
    getFullname(){
        return this.firstname + " " + this.lastname;
    }
}