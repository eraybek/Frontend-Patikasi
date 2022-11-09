// ***** prompt ile kullanicidan bilgi almak *****

// example 1
let fullName = prompt("Lutfen Adinizi Giriniz: ")
let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color: red">${fullName}</small>`

// example 2
let sign = prompt ("What is your problem dude?", "type here!")
if (sign.toLowerCase() == "you are my problem"){
    alert("Wow! You are my problem too!");
}

