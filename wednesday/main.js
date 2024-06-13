class Car{
    constructor(make,model){
        this.make = make
        this.model = model
    }

    typeof() {
        return `This is the make: ${this.make} and model: ${this.model} of the car`
    }
}

let brand = new Car ("Honda", "Civic")
console.log(brand.typeof());

let brand2 = new Car("Toyota", "Corolla")
console.log(brand2.typeof());

class Name extends Car{
    constructor(name, make, model){
        super(make, model);
        this.name = name;
    }
    typeof(){
        return `The cars silly name is ${this.name}, its a ${this.make} ${this.model}`
    }
}

class Hers extends Name{
    constructor(name){
        super(name, "Toyota","Corolla")
    }
}
class his extends Name{
    constructor(name){
        super(name, "Honda","Civic")
    }
}


cory = new Hers ("Cory")
console.log(cory.typeof())

vic = new his ("Victor")
console.log(vic.typeof())