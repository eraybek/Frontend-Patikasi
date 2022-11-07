// ********* let ve const ile degisken tanimlama ********* 

// var ile degisken tanimlamak:

// var serverName = "api.kodluyoruz.org"
// console.log(serverName)

// let ile degiskeni bos tanimlamak:

let serverName;
console.log(serverName)

// let ile degiskene bilgi atamak:

serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile degiskene bilgi atayarak tanimlamak:

let password = "1234";
console.log(password)

// degisken atamasi yapmadan once kullanmaya calismak:

/* HATALI KULLANIM:
console.log(fullName)
let fullName = "Eray Aybek"
*/

// const ile degiskeni bos tanimlamaya calismak:

let fullName = "Eray Aybek"
console.log(fullName)

// let ile tanimalanan degiskenin icindeki bilgiyi degistirmek:

fullName = "Lorem Ipsum Dolor"
console.log(fullName)

// birlestirme veya ekleme islemi:

fullName += " Yeni Eklenen Bilgi"
console.log(fullName)

// const ile degisken tanimlamak:

const SERVER_PASSWORD = "osdfo13osdflpğ4324"
console.log(SERVER_PASSWORD)
// sabit bir degisken, artik degisemez.
// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)
//hata verir.


