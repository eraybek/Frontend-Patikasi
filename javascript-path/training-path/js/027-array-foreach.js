// Array forEach metotu

//For'dan farkı sadece Array icin kullanilabilmesi.

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC"]

//array.forEach(item => islem)
PRODUCTS.forEach((product, index, array) => console.log(array[index] = product + "111"))
console.log(PRODUCTS) // ["Laptop111", "Phone111", "Speaker111", "Desktop PC111"]

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`) 
console.log(PRODUCTS) // ["LAPTOP111", "PHONE111", "SPEAKER111", "DESKTOP PC111"]

const userListDOM = document.querySelector("#userList")
PRODUCTS.forEach(item => {
    const liDOM = document.createElement("li") 
    liDOM.innerHTML = item  
    userListDOM.appendChild(liDOM) 
})
