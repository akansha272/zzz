// Parent Class
class Animal{
    constructor(name,food){
        this.name = name;
        this.food = food;
    }
    animalProp(){
        return `${name} ${food}`;
    }
    msg(){
        return `I am an animal ${this.name}`;
    }
}
// Child Class
class Dog extends Animal{
    static prop = 'Love Dog'
    constructor(name,food,breed){
        super(name,food);
        this.instanceprop = {}
        this.breed = breed;
    }
    breedName(){
        return `${breed}`;
    }
    static msg(){
        return `I am an animal ${this.name}, I am a dog ${this.breed}`
    }
}

const a1 = new Dog("Tom", "Dog", "dogFood");
const b1 = new Dog("Jim", "Cat", "dogFood");
console.log(a1.msg());
console.log(Dog.prop)
console.log(a1.prop==b1.prop)
console.log(a1.instanceprop==b1.instanceprop)
console.log(Dog.msg());