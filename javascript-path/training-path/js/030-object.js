// **** Object(Nesne) ****

// {key: value}
/* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir.
*/

/*
Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
*/

let arrayObj = [1, 2, 3] // object
let object1 = {obj: 1} // object

console.log("arrayObj", typeof(arrayObj))
console.log("object1", typeof(object1))

//Object olusturmak
let item1 = new Object ()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "1kg": "1",
    modelName: "Mac"
}

console.log(laptop1.brand)
console.log(laptop1.model)



// Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1["brand"])
console.log(laptop1["model"])
console.log(laptop1["1kg"])


// Anahtar Bilgisine Yeni Deger Eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1) 

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

// Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo, ":", laptop1[keyInfo])
})

// Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)
let values = Object.values(laptop1)

values.forEach(valueInfo => {
    console.log("value: ", valueInfo)
})

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba"; 
console.log(mesaj == başkaBirMesaj);   //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);   //false



let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],

	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},

	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

alert(state.banList[2]) //Tom

alert(state.settings.website) //https://www.example.com/

alert(state.users[2].favoriteColor) //blue

