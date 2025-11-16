

//? instance of type guard

//* oop: instance of type guard / type narrowing

class Person{
    name: string;

    constructor(name: string){
        this.name = name; 
    };

    getSleep(numOfHour: number){
        console.log(`${this.name} doinik ${numOfHour} ghumay`)
    };
};

class Student extends Person{
    constructor(name:string){
        super(name);
    };

    doStudy(numOfHour: number){
        console.log(`${this.name} doinik ${numOfHour}`);
    };


};

class Teacher extends Person{
    constructor(name: string){
        super(name);
    };

    takeClass(numOfHour: number){
        console.log(`${this.name} doinik ${numOfHour} class`);
    };

    
};

//* function guard

const isStudent = (user:Person) =>{
    return user instanceof Student; // true or false
}

const isTeacher = (user: Person) =>{
    return user instanceof Teacher // true or false
}

const getUserInfo = (user: Person) =>{

    if(isStudent(user)){
       user.doStudy(10)
    }else if(isTeacher(user)){
        user.takeClass(5)
    }else{
       user.getSleep(5)
    }

}



const student1 = new Student("mr. student");
const teacher1 = new Teacher("mr. teacher");

getUserInfo(student1)
getUserInfo(teacher1);