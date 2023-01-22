// Bolum Sonu Exercise 3

/*
1: Formu Sec
2: Input Bilgisini UL Icerisine Ekle
3: Form Icindeki Bilgiyi Sifirla
4: Eger Forma Bilgi Girilmezse Kullaniciyi Uyar
*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)


const alertDOM = document.querySelector("#alert")
const alertFunction = (title, message, className = "warning") =>  `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value) // gonderir.
        USER_NAME.value = "" // username sifirlanir.
        SCORE.value = "" // score sifirlanir.
    } else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz", // hatali giris durumunda alert fonksiyonu calisir
            "danger"
            )
    }
}


let userListDOM = document.querySelector("#userList")

const addItem = (userName, score)  => {
    let liDOM = document.createElement('li') // li 
    liDOM.innerHTML = ` 
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
    `   // li icerisine gelecek bilgi
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM) // ul icerisine li yi eklemek
}
