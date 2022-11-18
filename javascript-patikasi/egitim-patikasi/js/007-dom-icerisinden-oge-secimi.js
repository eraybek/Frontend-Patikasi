// ***** DOM Icinden Oge Secimi *****

let title = document.getElementById("title")
title.innerHTML = "Deneme"
console.log(title)
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
let kodluyoruzLink = document.querySelector("#kodluyoruzLink")

console.log(link)
console.log(link.innerHTML)
link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add("btn")

console.log(kodluyoruzLink)
console.log(kodluyoruzLink.innerHTML)
kodluyoruzLink.innerHTML += " degisti"

function clicked(){
    alert("Butona Tıklandı");
    } 
document.getElementById("btnClick").addEventListener("click", clicked);

const elems = document.querySelectorAll('.bird, .animal');

//ornek
let gozuken_sayi = document.querySelector("#sayi")
gercek_sayi = 0
gozuken_sayi.innerHTML = gercek_sayi

function sayiyiArttir(){
    gercek_sayi += 1
    gozuken_sayi.innerHTML = gercek_sayi
    } 
document.getElementById("ekle").addEventListener("click", sayiyiArttir);

function sayiyiAzalt(){
    gercek_sayi -= 1
    gozuken_sayi.innerHTML = gercek_sayi
    } 
document.getElementById("cikar").addEventListener("click", sayiyiAzalt);
