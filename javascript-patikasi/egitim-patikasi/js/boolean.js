// ******* Boolean *******

// 0 ve 1

let isActive = false // 0
isActive = true // 1

let userName;
let isUserName = Boolean(userName)
console.log(isUserName) // olmadığı için false

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user"
console.log("UserName: ", Boolean(userName)) // true

Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) // true


