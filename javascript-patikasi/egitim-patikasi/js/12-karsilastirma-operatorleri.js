//  ******** Karsilastirma Operatorleri ve Mantiksal Operatorler *********

let price = "100"
let user = "eray"
//eşitse
console.log( price == 1 ) 
console.log( price = 100 )

// hem türü hem değeri eşitse
console.log( price === 1)
console.log( price === 100 )

// eşit değilse
console.log(user != "guest")

// küçükse
console.log(price<100)

// küçük eşitse
console.log(price<=100)

// && ve

console.log(price && user != "guest") // 1 ve 1 = 1 true
console.log(price < 100 && user != "guest") // 0 ve 1 = 0 false

// || veya

console.log(price < 100 || user != "guest") // 0 veya 1 = 1 true

// ! degil (tersi)

console.log(price < 100 && !user == "guest") // 0 