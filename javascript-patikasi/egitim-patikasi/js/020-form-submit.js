// ******* Form Submit *******

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() //sayfa yenileme islemini onledi.
    console.log("islem gerceklesti")
    
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value) //degeri aldik.
    localStorage.setItem('score', scoreInputDOM.value) //bilgiyi iceri kaydettik.
}