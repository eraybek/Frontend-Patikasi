// DOM Click Event Exercise

let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter // Sayiciyi sayfaya yazdirdik. Default 0'dan basliyor.

increaseDOM.addEventListener("click", clickFunc)
decreaseDOM.addEventListener("click", clickFunc)


function clickFunc(){
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}



