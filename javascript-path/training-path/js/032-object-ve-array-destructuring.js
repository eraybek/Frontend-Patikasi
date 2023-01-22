// ****** Object ve Array Destructuring ******

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// rename && destructuring

// let {userName, password, ip, serverName} = settings
let {userName: user, password, ip: serverIP, serverName} = settings


// console.log(userName, password, ip, serverName)
console.log(user, password, serverIP, serverName)
console.log(settings)

// console.log(userName)
console.log(user) // "loremIpsum"

let {userName: userName2, password:password2, ...newSettings} = settings
console.log(newSettings) // ip ve serverName yazdirir.
console.log(userName2, password2, newSettings)

// objenin destructuring ile kopyalanmasi

//hatalı yöntem:
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log("settings ", settings)
// console.log("settings2 ", settings2)

let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
// console.log(settings)   // loremIpsum
// console.log(settings2) // Degisen Bilgi
// settings2 ve settings birbirinden farklı array oldu.

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore) // otherScore 300 ve 400 e sahip yeni bir array oldu.

let copyOfScore = [...score]
console.log(copyOfScore) // score ile copyOfScore farklı 2 array oldu.


//Spreading Operator
const toplama = ({ sayi1, sayi2, ...args }) => {
    let sonuc = sayi1 + sayi2;
    for (let sayi in args){
     sonuc += args[sayi];
    }
    return sonuc;
   }
   const sayilar = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
   }
   toplama(sayilar); 

   
/* Yani burada {sayi1, sayi2, ...args} ile diyoruz ki sayi1 ve sayi2 destructure olsun ama geri kalanlar args değişkende obje olarak kalsın yani args { sayi3: 7, sayi4: 9, sayi5: 11 } seklinde bir obje kalır ve bu obje destructuring'ten arta kalan değerleri içeren bir objedir.

Bir obje içindeki tüm değerleri de for...in ile teker teker dolaşabilir. for...in seklinde oluşturduğumuz döngü yani for (let sayi in args) satiri der ki args içindeki tüm property'lerin key'lerini dön bana. Bu döngüdeki sayi değişken her bir property için bize sayi3 , sayi4, sayi5 string anahtarını döner. Ama biz anahtar değil de değerleri almak istersek args[sayi] yazabiliriz. bu bize teker teker 7, 9, 11 sayılarını dönecektir ve toplama işlemine bunu bir döngüde dahil edebiliriz.

Elbette gerçek hayat için mantıklı bir işlem değil bu ama spreading özelliğinin anlaşılması için böyle bir fonksiyon yazılabilir. hatta for...in yerine map() veya reduce() fonksiyonları kullanarak bu örnek daha da iyi hale getirilebilir.
*/