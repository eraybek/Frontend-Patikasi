// **** For Dongusunun Kullanimi ****
// https://developer.mozilla.org/tr/docs/Web/Javascript/Guide/Loops_and_iteration

/* for (başlangıç ataması ; koşul ifadesi ; arttırım ifadesi) {
    yapilacak islem
}
*/

let users = ["lorem", "ipsum", "dolor"]
const userListDOM = document.querySelector("#userList")

for (let index = 0; index < 10; index++){
    console.log(index)
}

let index = 0
for (; index < 10; index++){
    console.log(index)
}

for (let index = 0; index < users.length; index++){
    const liDOM = document.createElement("li") // ul icerisine eklenmek uzere hazirlanan yeni bir li olusturdu.
    liDOM.innerHTML = users[index] // yeni olusan li'nin inner html'ine for dongusunden o anki indexe sahip users elemanini yazdirdi. ("lorem",...)
    userListDOM.appendChild(liDOM) // daha sonra bu li ogesini ul icerisine ekledi.
    // users.length = 3... 0, 1 ve 2. indexlerdeki "lorem", "ipsum", "dolor" elemanlariyla islem gerceklestirdikten sonra for dongusu bitti ve bu bloktan cikis gerceklesti.
}

// odev1: 20 ile 40 arasındaki tüm sayıları (20 ve 40 dahil degil) konsola yazdırın.
console.log("ODEV 1: ")
for (let i = 21; i < 40; i++){
    console.log(i)
}

// odev2: 0 ve 50 sayıları arasındaki çift olan sayilari konsola yazdırın.
console.log("ODEV 2: ")
for (let ind = 0; ind <= 50 ; ind++){
    if (ind % 2 == 0) console.log(ind)
}

let vowel = "javascript"

for (index = 0; index < vowel.length; index++){
    console.log(vowel[index])
} 