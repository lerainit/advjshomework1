"use strict";


class Employee {
    constructor(name,age,salary){
        this._name = name;
        this._age = age;
        this._salary = salary;
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value;
    }
    get age(){
        return this._age
    }

    set age(value){
        this._age = value;
    }
    get salary(){
        return this._salary
    }

    set salary(value){
        this._salary = value;
    }
}

class Programmer extends Employee{
 constructor(name,age,salary,lang){
    super(name,age,salary) 
this.lang = lang;

 }

get salary(){
    return super.salary * 3;
}

}


const ivan = new Programmer('Ivan',25,25000,'Java');

const maks = new Programmer('Maks',36,36000,'C++');


console.log(ivan);
console.log(ivan.salary);
console.log(maks);
console.log(maks.salary);


