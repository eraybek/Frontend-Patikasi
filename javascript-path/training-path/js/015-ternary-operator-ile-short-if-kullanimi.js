// *********** ternary operator ile short if kullanimi ***********

// eger kullanici adi varsa yazdir yoksa kullanici bilginiz bulunamadi yazdir

let userName = prompt("Kullanici Bilginizi Yazin")
let info = document.querySelector("#info")

// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz bulunamadi :("}`

//zincirleme ornek:
var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."