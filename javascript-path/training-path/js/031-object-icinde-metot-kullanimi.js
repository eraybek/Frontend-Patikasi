// ****** OBject icinde metot kullanimi ******

let user1= {
    firstName: "Eray",
    lastName: "Aybek",
    city: "Istanbul",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase}. ${this.lastName}`
    }
}
console.log(user1) 
console.log(user1.shortName()) // E. Aybek

user1.myCity = function () {
	console.log(`I live in ${this.city}`);
};

console.log(user1.myCity())