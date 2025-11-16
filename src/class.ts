

// oop - class - object

// class Animal{
//     name: string ;
//     species: string ;
//     sound: string ;

//     constructor(name: string, species: string, sound: string){
      
//       this.name = name;
//       this.species = species;
//       this.sound = sound;
//     };

//     makeSound(){
//       console.log(`The animal is making sound ${this.sound}`)
//     }

// };

//? peramemter properties

class Animal{
    // public name: string ;
    // public species: string ;
    // public sound: string ;

    constructor(public name: string,public species: string, public  sound: string){
      
      this.name = name;
      this.species = species;
      this.sound = sound;
    };

    makeSound(){
      console.log(`The animal is making sound ${this.sound}`)
    }

};

const dog = new Animal('dogesh', 'dog', 'ghew ghew');
dog.makeSound();

console.log(dog);