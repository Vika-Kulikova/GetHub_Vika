class PersonProp {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    getName(){
        let name = prompt('Enter your name, please', '');
        return this.name = name;
    }

    getAge(){
        let age = prompt('Enter your age, please', '');
        return this.age = age;
    }
    getWeight(){
        let weight = prompt('Enter your weight, please', '');
        this.weight = weight;
    }
    getHeight(){
        let height = prompt('Enter your height in Mts, please', '');
        this.height = height;
    }
}

let personProp = new PersonProp();

class Person {

    // constructor(name = "", age = "0", DNI, sex = "M", weight = 0, height = 0) {
    //     this.name = name;
    //     this.age = age;
    //     this.DNI = DNI;
    //     this.sex = sex;
    //     this.weight = weight;
    //     this.height = height;
    // }

    constructor(name, age, DNI=0, sex, weight = 0, height = 0) {
        this.name = name;
        this.age = age;
        this.DNI = DNI;
        this.sex = sex;
        this.weight = weight;
        this.height = height;
    }

    // constructor(name, age, DNI, sex, weight, height) {
    //     this.name = name;
    //     this.age = age;
    //     this.DNI = DNI;
    //     this.sex = sex;
    //     this.weight = weight;
    //     this.height = height;
    // }


    calculateIMC() {
        let result = this.weight / Math.pow(this.height, 2);
        if (result < 20) {
            return console.log(-1);
        } else if (20 < result && result < 25) {
            return console.log(0);
        }
        return console.log(1);
    }

    isAdult() {
        if (this.age >= 18) {
            return console.log(1);
        }
        return console.log(0);
    }

    checkSex(sex) {
        if (sex !== 'F' && sex !== 'M') {
            this.sex = 'M';
        }
        return console.log(this.sex);
    }


    toString() {
        return console.log(JSON.stringify(this));
    }

    createDNI() {
        if (this.DNI === null) {
            let dni = Math.floor(10000000 + Math.random() * 90000000);

            //to make sure that the generated code is unique
            while (dni_s.indexOf(dni) !== -1) {
                dni = Math.floor(10000000 + Math.random() * 90000000);
            }

            dni_s.push(dni);
            this.DNI = dni;
            console.log(this.DNI)
        }

        console.log(this.DNI)
    }

    set name(name) {
        this.name = name;
    }
    set age(age) {
        this.age = age;
    }
    set sex(sex) {
        this.sex = sex;
    }
    set weight(weight) {
        this.weight = weight;
    }
    set height(weight) {
        this.height = weight;
    }
}


let person = new Person();
person.createDNI();
person.calculateIMC();
person.isAdult();
person.checkSex(person.sex);
person.toString();