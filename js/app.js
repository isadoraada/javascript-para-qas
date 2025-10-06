var yoda = {
    name: "Mestre Yoda",
    age: 900,
    jedi: true,
    showsAge: function() {
        console.log(`A idade do ${this.name} é ${this.age} anos`) 
    }
}

console.log(yoda)
yoda.showsAge()