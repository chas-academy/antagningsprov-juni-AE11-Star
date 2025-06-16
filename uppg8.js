

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
function uppg8() {
    const personer = [
        { name: "Alexander", age: 28 },
        { name: "Alex", age: 35 },
        { name: "Alexis", age: 42 },
        { name: "Alexia", age: 30 },
        { name: "Alexanderina", age: 33 }
    ];

    function skrivUtOver30(arr) {
        for (let person of arr) {
            if (person.age > 30) {
                console.log(person.name);
            }
        }
    }

    skrivUtOver30(personer); 
}

uppg8();

}

module.exports = { uppg8 };