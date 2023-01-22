// **** Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
    "lorem","ipsum","dolor","amet","consectetur", "adipisicing", "elit"
]

let counter = 0

console.log("Break: ")
for (; counter < 10; counter++){
    console.log(counter)
    if (counter == 5) {break} // if icerisindeki kosul saglanirsa for dongusunu durdurur.
}

counter = 0
console.log("Continue: ")
for (; counter < 10; counter++){
    if (counter == 5) {continue} 
    console.log(counter) // if icerisindeki kosul saglanirsa o kosuldaki islemi atlayacaktir.
}

const UL_DOM = document.querySelector("#userList")

let index = 0;

for (; index < LOREM_LIST.length; index++){
    if (LOREM_LIST[index] == "dolor") {break} // bu kosuldaki ogeye kadar olan ogeleri alacak.
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}

for (; index < LOREM_LIST.length; index++){
    if (LOREM_LIST[index] == "dolor") {continue} // bu kosuldaki ogeyi atlayacak.
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}


//Etiketli break: dongu icerisinde dongu oldugunda en icteki dongude normal break kullanilmasi en distaki donguden cikilmasini saglamayacagi icin boyle bir yontem kullanildiginda o etikete sahip donguden cikilmasini saglayacaktir.
//Ornek:

cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
      if (j == 9) {
        break cikis_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }