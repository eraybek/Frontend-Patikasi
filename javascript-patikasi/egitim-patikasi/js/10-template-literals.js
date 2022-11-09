//  ********** Template Literals **********

let username = "Eray"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log(
    "Merhaba " + username + " sitemize hoşgeldin mail adresin: " + email
    )

let info = `Merhaba ${username} sitemize hosgeldin..
Kisa isminiz: ${username[0]}. 
Mail adresin: ${email} 
Mail adresinin uzunlugu: ${email.length}
Gunun saat bilgisi: ${new Date().getHours()}`
console.log(info)
