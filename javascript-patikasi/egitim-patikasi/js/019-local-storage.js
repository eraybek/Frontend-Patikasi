// ******* Local Storage *******

// Hassas olmayan verilerin depolanmasinda kullanilir.

localStorage.setItem('key', 'value') // ilgili key'e value bilgisini atar.
localStorage.getItem('key') // ilgili key'in value bilgisini alir.
localStorage.removeItem('key') // ilgili key bilgisini siler.
localStorage.clear() // tüm verileri siler.

// Kompleks yapilar JSON.stringify(value) ile string hale getirdikten sonra JSON.parse() ile geri elde edilebilir.

let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))
// user = localStorage.getItem('user') --> undefined datas
user = JSON.parse(localStorage.getItem('user'))

console.log("Username: ", user.userName) // Output: Username: kodluyoruz
console.log("isActive: ", user.isActive) // Output: isActive: true
