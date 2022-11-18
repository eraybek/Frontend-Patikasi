// ********* number *********

// number veri turu tanimlamak:

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutari:" ,priceTax,
    "Yeni Fiyat:", total
    )

// arttirma ve azaltma islemleri:

let counter = 320
counter += 1
counter ++
counter --

counter *= 10
counter /= 2

console.log(counter)

// islem onceligi:
console.log(2 + 3 * 10)

// mod(kalan) alma:
// sayi tek mi cift mi?

console.log(15 % 2)

// 8 urun alan koliye tum urunler sigiyor mu?

console.log(18 % 8)

// us alma **:

// asagi yuvarlama islemi -> Math.floor

// yukari yuvarlama islemi -> Math.ceil

// yakina yuvarlama islemi -> Math.round

// string -> number

let stringNumber = "123"
let newNumber = Number(stringNumber)
console.log("Str to Number: ",newNumber)