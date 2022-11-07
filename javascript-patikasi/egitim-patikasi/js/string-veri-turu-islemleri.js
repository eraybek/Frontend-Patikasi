// ******* String Veri Türü İşlemleri *******

let email = "aybek17@itu.edu.tr"
let firstName = "Eray"
let lastName = "AYBEK"

// string karakter sayisi - length
console.log(email.length)

// Ilk karakteri bulmak -> [0]
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf / kucuk harf

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search

console.log(email.search("@"))
console.log(email[15])
console.log(email.search(/\./)) // noktayı bulmak için.

email.search('olmayan') // -1

// belli bir yere kadar olanını almak  -> slice
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(DOMAIN.indexOf("."))
console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")))

// bilgiyi degistir -> replace

email = email.replace('itu.edu.tr', 'kodluyoruz.org')
console.log(email)

// istedigim bilgi var mi?

console.log(email.includes('0')) // false
console.log(email.includes('org')) // true

// istedigim bilgiyle basladi mi bitti mi?

console.log(email.endsWith(".org"))
console.log(email.startsWith("aybek"))

// ilk harflerini buyuk yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)