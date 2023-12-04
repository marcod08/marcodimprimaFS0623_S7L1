//esercizio 1
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    compareAge(otherUser) {
        return this.age > otherUser.age
    }
}

const UserX = new User("Gesu", "Cristo", 33, "Nazareth");
const UserY = new User("Giulio", "Cesare", 55, "Roma");

const OlderUser = UserX.compareAge(UserY);
console.log(UserX.compareAge(UserY))  // da false perchè UserX non ha una età maggiore di UserY

//esercizio 2

pets = []

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
    compareOwner(otherPet) {
        return this.ownerName === otherPet.ownerName
    }
}

function showComparison() {
    for (let i = 0; i < pets.length; i++) {
        for (let j = i + 1; j < pets.length; j++) {
            if (pets[i].compareOwner(pets[j])) {
                console.log(`Gli animali ${pets[i].petName} e ${pets[j].petName} hanno lo stesso proprietario.`);
            }
        }
    }
}

function addPet() {
    const _petName = document.getElementById("petName").value;
    const _ownerName = document.getElementById("ownerName").value;
    const _species = document.getElementById("species").value;
    const _breed = document.getElementById("breed").value;
    const newPet = new Pet(_petName, _ownerName, _species, _breed);
    pets.push(newPet);
    document.getElementById("petForm").reset();
    console.log(pets);
    showComparison();
}