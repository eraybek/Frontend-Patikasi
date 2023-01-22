// **** Array Filter Kullanimi ****

// 5 harften fazla olan urunler ?
const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Mic", "Mouse"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

//aktif kullanicilar ?
const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

const ACTIVE_USERS = USERS.filter(user => user.isActive) // user.isActive == true
console.log(ACTIVE_USERS) 


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
//odev1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const KULLANICI_1 = person.filter(user => user.age > 30)
console.log("Yasi 30'dan Buyuk Kullanici: ", KULLANICI_1)

//odev2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const KULLANICI_2 = person.filter((user)=> user.languages.includes('JavaScript'));
console.log("Javascript Bilen Kullanici: ", KULLANICI_2)
