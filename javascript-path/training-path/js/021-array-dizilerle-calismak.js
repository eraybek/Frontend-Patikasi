// *** Array - Dizilerle Calismak ***

/*Array nedir?
    Programlamanın temel amaçlarından birisi verileri saklamak ve manipüle edebilmektir. Arrays (diziler) bu işe yaramaktadır. Array'lerde bir değişken (variable) tanımlayarak birden fazla değeri (value) saklayabilir ve onları daha sonra çeşitli metotlarla kullanabiliriz. Array oluşturmak için köşeli parantez kullanırız. Oluşturulan array'de her bir değere 'element' (eleman) denir.
*/

// Array olusturmak
let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // bos liste

// Array icerisindeki eleman/oge sayisini ogrenmek
document.querySelector("#info").innerHTML = items.length

// Array icindeki ilk elemanin cagrilmasi
items[0]

// Array icindeki ortadaki elemanin cagrilmasi
items[Math.floor(items.length/2)] // index -> 5/2= 2.5 floor 3 

// Array icindeki son elemanin cagrimasi
items[items.length-1]

// Degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(typeof(items)) // object? ciktisi verdi
console.log(Array.isArray(items)) // true

// hangileri isArray -> True verir?

console.log(
    "[] : ", Array.isArray([]) / true
)

console.log(
    "1 : ", Array.isArray(1) / false
)

// Dizi icerisindeki elemanlara For dongusu ile erisim

for (let i = 0; i < items.length; i++) {
    console.log("for : ", items[i])
}

// Dizi icerisindeki elemanlara forEach dongusu ile erisim

items.forEach((item, index) => {
    console.log("forEach : ", item) // ("forEach : ", item, index)
})