// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi

let items = [10, 20, 30, 40]
console.log("items - ilk hal : ", items)

// Sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

// Basa oge/eleman eklemek -> unshift
items.unshift(5)
console.log("5 : ", items)

// Sondaki ogeyi/elemani cikarmak -> pop
items.pop()
let lastItem = items.pop() // cikarttigimiz elemani elde ettik.

// Arrayin elemanlarini poplayarak ters cevirme
let myArray = [1, 2, 3, "dort", "bes"]
let reverseMyArray = []
const lengthMyArray = myArray.length
for (let i = 0; i < lengthMyArray; i++) {
    lastItem = myArray.pop()
    reverseMyArray.push(lastItem)
}
console.log("myArray : ", myArray) //empty
console.log("reverseMyArray : ", reverseMyArray) //reverse

// Bastaki ogeyi/elemani cikartmak -> shift
let firstItem = items.shift()

// Array icindeki bir ogenin bilgisinin degistirilmesi

items[0] = 100
console.log(items)

items[items.length-1] = 200
console.log(items)

// splice() metodu ile array'e eleman ekleme/silme
var sports = ['basketball', 'football', 'tennis']
sports.splice(1, 1) // 1. indexteki 1 elemanı silme islemi

var sports = ['basketball', 'football', 'tennis']
sports.splice(1, 0, 'baseball') // 1. indexteki 0 hiçbir elemanı silme, oraya 'baseball' ekle

/*  NOT:
    Splice metodu da pop ve shift gibi, sildiği elemanı geriye döndürür. Ancak pop ve shift geriye silinen elemanın türünde değer döndürür, splice ise geriye dizi şeklinde sonuç döndürür.
*/