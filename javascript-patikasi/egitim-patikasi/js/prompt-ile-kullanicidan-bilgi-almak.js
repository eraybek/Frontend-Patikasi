// ***** prompt ile kullanicidan bilgi almak *****


let fullName = prompt("Lutfen Adinizi Giriniz: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color: red">${fullName}</small>`

