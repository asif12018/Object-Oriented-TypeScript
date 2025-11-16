

//Inheritance of typeScript

class Person {
    name: string; //common
    age: number; //common
    address: string; // common
    designation: string; //own

    constructor(name: string, age: number, address: string, designation:string){
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    };

    takeSleep(hour: number){
        console.log(`${this.name} ${hour} ghonto ghumay`)
    }

}

class Student extends Person{
    // name: string;
    // age: number;
    // address: string;

    // constructor(name: string, age: number, address: string){
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // };

    // getSleep(hour:number = 0){
    //     console.log(`${this.name} ${hour} ghonta ghuma`);
    // };


};

// const student1 = new Student('Asif', 22, 'dhaka');
// console.log(student1);
// student1.getSleep(25)

class Teacher extends Person {
    // name: string; //common
    // age: number; //common
    // address: string; // common
    designation: string; //own

    constructor(name:string, age:number, address:string, designation:string){
      super(name, age, address, designation);
      this.designation = designation;
    };

    // takeSleep(hour: number){
    //     console.log(`${this.name} ${hour} ghonto ghumay`)
    // }

    takeClass(){
        console.log(`${this.name} eto ghonta class ney`);
    };
};

const teacher1 = new Teacher('mr smart', 27, 'dhaka', 'professor');
console.log(teacher1);

teacher1.takeClass();


