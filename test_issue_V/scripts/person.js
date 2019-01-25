class PersonProp {
    // constructor(name, age, sex, weight, height) {
    //     this.name = name;
    //     this.age = age;
    //     this.sex = sex;
    //     this.weight = weight;
    //     this.height = height;
    // }

    constructor() {
    }

    name() {
        let name = prompt('Enter your name, please', '');
        return name;
    }

    age() {
        let age = +prompt('Enter your age, please', '');
        return age;
    }

    sex() {
        let sex = prompt('Enter your sex, please', 'F/M');
        return sex;
    }

    weight() {
        let weight = +prompt('Enter your weight, please', '');
        return weight;
    }

    height() {
        let height = +prompt('Enter your height in Mts, please', '');
        return height;
    }
}

let personProp = new PersonProp();
let name = personProp.name();
let age = personProp.age();
let sex = personProp.sex();
let weight = personProp.weight();
let height = personProp.height();



class Person {

    constructor(name = "", age = "0", sex = "M", weight = 0, height = 0) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._weight = weight;
        this._height = height;
    }

    // constructor(name, age, sex, weight = 0, height = 0) {
    //     this._name = name;
    //     this._age = age;
    //     this._sex = sex;
    //     this._weight = weight;
    //     this._height = height;
    // }

    // constructor(name, age, sex, weight, height) {
    //     this.name = name;
    //     this.age = age;
    //     this.sex = sex;
    //     this.weight = weight;
    //     this.height = height;
    // }


    calculateIMC() {
        if (this._weight <= 0  || this._height <= 0) {
            throw 'Weight or height can\'t be <=0';
        }
        let result = this._weight / Math.pow(this._height, 2);

        if (result < 20) {
            return console.log(-1);
        } else if (20 < result && result < 25) {
            return console.log(0);
        }
        return console.log(1);
    }

    isAdult() {
        if (this._age <= 0) {
            throw 'Age can\'t be <=0';
        }
        this._age >= 18 ? console.log(1) : console.log(0);
    }

    checkSex(sex) {
        this._sex = (sex !== 'F' && sex !== 'M') ? 'M' : sex;
    }


    toString() {
        return console.log(JSON.stringify(this));
    }

    createDNI() {
        this._DNI = Math.floor(10000000 + Math.random() * 90000000);

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

    set height(height) {
        this._height = height;
    }
}


let person_first = new Person();
person_first.createDNI();

person_first.name = name;
person_first.age = age;
person_first.sex = sex;
person_first.weight = weight;
person_first.height = height;


person_first.calculateIMC();
person_first.isAdult();
person_first.checkSex();
person_first.toString();

let person_second = new Person();
person_second.createDNI();
person_second.name = name;
person_second.age = age;
person_second.sex = sex;
person_second.calculateIMC();
person_second.isAdult();
person_second.checkSex();
person_second.toString();

let person_third = new Person();
person_third.createDNI();
person_third.calculateIMC();
person_third.isAdult();
person_third.checkSex();
person_third.toString();


