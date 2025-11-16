

// polymorphism in oop

class Person{
    getSleep(){
        console.log(`i am a normal happy person, i sleep for 8 hours`);
    };
};

class Student extends Person{
    getSleep() {
        console.log(`i am a student i sleep for 7 hour`);
    };
};

class NextLevelDeveloper extends Person{
    getSleep() {
        console.log(`i'm a next level developer, i sleep for 6 hour`);
    };
};

const getSleepingHours = (param: Person) =>{
       param.getSleep();
}

// const Person1 = new Person();
// const Person2 = new Student();
// const Person3 = new NextLevelDeveloper();

// getSleepingHours(Person1);
// getSleepingHours(Person2);
// getSleepingHours(Person3);

class Shape {
    getArea():number{
        return 0;
    }
};

class Circle extends Shape{
    // area = pie * radius * radius
    radius: number;
    constructor(radius:number){
       super();
       this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    };
};

class Rectangle extends Shape{

    height:number;
    width:number
    
    constructor(height:number, width:number){
        super();
        this.height = height;
        this.width= width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}

const getArea = (param:Shape) =>{
    console.log(param.getArea());
}


const shape1 = new Circle(5);
const rectangle = new Rectangle(5, 10);

getArea(shape1);
getArea(rectangle);