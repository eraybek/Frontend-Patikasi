// ****** Dom Events *****

let greeting = document.querySelector("#greeting")

greeting.addEventListener("click", function() {
    console.log("Tiklandi.")
})

greeting.addEventListener("click", domClick) // "click" eventi gerceklestiginde domClick fonksiyonu calisti.

function domClick(){
    this.innerHTML = "tikladigi icin bilgi degisti"
    console.log(this.innerHTML)
}


greeting.addEventListener("mouseover", function(){
    this.style.backgroundColor == "aqua" ? this.style.backgroundColor = "red" : this.style.backgroundColor = "aqua"
    console.log(this.style.backgroundColor)
})


// iç içe elementler çağrıldı  
const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
    })