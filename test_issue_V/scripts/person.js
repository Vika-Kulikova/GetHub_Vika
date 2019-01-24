class PersonProp {
    // constructor(name, age, sex, weight, height) {
    //     this.name = name;
    //     this.age = age;
    //     this.sex = sex;
    //     this.weight = weight;
    //     this.height = height;
    // }

    constructor() {}

    // get name(){
    //     return this.name = prompt('Enter your name, please', '');
    // }

    name(){
        let name = prompt('Enter your name, please', '');
        return name;
    }

    // getAge(){
    //     let age = prompt('Enter your age, please', '');
    //     return this.age = age;
    // }

    age(){
        let age = prompt('Enter your age, please', '');
        return age;
    }

    // getSex(){
    //     let sex = prompt('Enter your sex, please', 'F/M');
    //     return this.sex = sex;
    // }
   sex(){
        let sex = prompt('Enter your sex, please', 'F/M');
    }

    // getWeight(){
    //     let weight = prompt('Enter your weight, please', '');
    //     this.weight = weight;
    // }

    weight(){
        let weight = prompt('Enter your weight, please', '');
    }

    // getHeight(){
    //     let height = prompt('Enter your height in Mts, please', '');
    //     this.height = height;
    // }
    height(){
        let height = prompt('Enter your height in Mts, please', '');
    }
}

let personProp = new PersonProp();


class Person {

    constructor(name = "", age = "0", DNI, sex = "M", weight = 0, height = 0) {
        this._name = name;
        this._age = age;
        this._DNI = DNI;
        this._sex = sex;
        this._weight = weight;
        this._height = height;
    }

    // constructor(name, age, DNI=0, sex, weight = 0, height = 0) {
    //     this._name = name;
    //     this._age = age;
    //     this._DNI = DNI;
    //     this._sex = sex;
    //     this._weight = weight;
    //     this._height = height;
    // }

    // constructor(name, age, DNI, sex, weight, height) {
    //     this.name = name;
    //     this.age = age;
    //     this.DNI = DNI;
    //     this.sex = sex;
    //     this.weight = weight;
    //     this.height = height;
    // }


    calculateIMC() {
        let result = this._weight / Math.pow(this._height, 2);
        if (result < 20) {
            return console.log(-1);
        } else if (20 < result && result < 25) {
            return console.log(0);
        }
        return console.log(1);
    }

    isAdult() {
        if (this._age >= 18) {
            return console.log(1);
        }
        return console.log(0);
    }

    checkSex(sex) {
        if (sex !== 'F' && sex !== 'M') {
            this._sex = 'M';
        }
        return console.log(this._sex);
    }


    toString() {
        return console.log(JSON.stringify(this));
    }

    createDNI() {
        if (this._DNI === null) {
            let dni = Math.floor(10000000 + Math.random() * 90000000);

            //to make sure that the generated code is unique
            while (dni_s.indexOf(dni) !== -1) {
                dni = Math.floor(10000000 + Math.random() * 90000000);
            }

            dni_s.push(dni);
            this._DNI = dni;
            console.log(this._DNI)
        }

        console.log(this._DNI)
    }

    set name(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
    set sex(sex) {
        this._sex = sex;
    }
    set weight(weight) {
        this._weight = weight;
    }
    set height(weight) {
        this._height = weight;
    }
}


let person_first = new Person(personProp.name(), personProp.age(), personProp.sex(), personProp.weight(), personProp.height());
person_first.createDNI();
// person_first.name();
// person_first.agePerson(personProp.age());
// person_first.sexPerson(personProp.sex());
// person_first.weightPerson(personProp.weight());
// person_first.heightPerson(personProp.height());
person_first.calculateIMC();
person_first.isAdult();
person_first.checkSex();
person_first.toString();

// let person_second = new Person();
// person.createDNI();
// person.calculateIMC();
// person.isAdult();
// person.checkSex();
// person.toString();

let person_third = new Person();
person_third.createDNI();
person_third.calculateIMC();
person_third.isAdult();
person_third.checkSex();
person_third.toString();