class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9) {
        // this.name = name;
        // this.age = age;
        // instead of create new name and age
        // we can reference to class Pet constructor by using super
        super(name, age); // this will use name and age of Pet constructor
        // but it needs to be extends from Pet.
        // This is the basic inheritance
        this.livesLeft = livesLeft;
        
    }
    meow() {
        return 'MEOWWW!!';
    }
}
class Dog extends Pet {
    bark() {
        return "WOOF!!";
    }
    // If calling Dog.eat()
    // first it will find on dog to see if that method exist
    // Then if it cannot find it on dog it will use the Pet().
    eat() {
        return `${this.name} is eating!`;
    }
}


