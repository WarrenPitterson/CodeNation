let people = {
    personA: {
        name: "x",
        age: 34,
        pets: ["dog", "cat"]
    },
    personB: {
        name: "y",
        age: 23,
        pets: ["parrot", "dog"]
    },
    personC: {
        name: "z",
        age: 40,
        pets: ["fish", "dog", "rabbit"]
    }
}
people.personB.pets.map((pets)=> {
    console.log(pets)
});

//example of an object(person A,B,C) with a internal array(pets)