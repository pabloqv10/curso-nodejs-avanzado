class Pet {
  constructor(name) {
    this.name = name;
  }
}

class PetFactory {
  createPet(name) {
    return new Pet(name);
  }
}

const factory = new PetFactory();
const mascota1 = factory.createPet('Firulais');
const mascota2 = factory.createPet('Max');

console.log(mascota1 === mascota2); // false