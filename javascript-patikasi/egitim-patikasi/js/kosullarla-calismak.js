// ********** Kosullarla Calismak **********

// kullanici bilgisi varsa ekrana ismini yazdir

let username = prompt("Kullanici Adinizi Giriniz: ")

if (username.length) { 
    console.log(`Kullanici adiniz: ${username}`)
}
else
    console.log("Bilgi yok")


//vucut kitle indeksi hesaplama ornegi
let weight = prompt("Kilonuzu Giriniz: ", "Kilo?")
let height = prompt("Boyunuzu Giriniz: ", "Boy?")
function vkiHesapla(weight, height) {
    var vki = weight/(height^2);
    if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
    if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
    if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
    if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
    return alert("Girdiğiniz değerleri kontrol ediniz");
};
vkiHesapla(weight, height);