// ****** Coklu Kosullarla Calismak ******

let userName = prompt("Kullanici Adiniz: ")
let age = prompt("Yasiniz: ")
let info = document.querySelector("#info")

// if / else if
if (userName && age >= 18){
    console.log("Ehliyet alabilirsiniz.")
    info.innerHTML = "Ehliyet alabilirsiniz."
} else if (!userName){
    console.log("Kullanici adiniz yok!")
    info.innerHTML = "Kullanici adiniz yok!"
} else if (!age >= 18){
    console.log("Yas bilginiz yok veya 18 yasindan kücüksünüz.")
    info.innerHTML = "Yas bilginiz yok veya 18 yasindan kücüksünüz."
}

// switch case

let hava = "Gunesli"
switch(hava){
    case "Yagmurlu":
        console.log("Semsiyeni yanina almayi unutma.")
        break;
    case "Gunesli":
        console.log("Hafif giyin.")
        break;
    case "Bulutlu":
        console.log("Disari cik.")
        break;
    default:
        console.log("Bilinmeyen hava durumu:", hava)
}

