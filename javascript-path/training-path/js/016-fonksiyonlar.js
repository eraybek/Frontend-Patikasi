// ** Ilk Fonksiyonumuzu Tanimlamak **

function hello() {
    console.log("Hello!")
}

function helloWorld() {
    console.log("Hello World!")
}

hello() // calistir

// ************ //

function printHello(name){ //name adında bir parametre aldı
    console.log("Merhaba " + name)
}
printHello("Eray");  // bir argüman vererek fonksiyonu çağırdık.

// ************ //

function addition(sayi1,sayi2){  //function name and parameters
    console.log(sayi1+sayi2);     //body
}
addition(3, 5) // çıktı 8

function toplama(sayi1,sayi2){
    return (sayi1+sayi2);
}

var add = toplama(1,2);
console.log(add)

// ************ //

//global değişkenleri tanımlıyoruz
var sayi1 = 5;
var sayi2 = 2;   
function topla(){
    var sayi3 = 3;             //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1+sayi2+sayi3;  //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

console.log(topla()) // çıktı: 10

function multiplication(){
    return sayi1*sayi3;  
//Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}

//Asenkron Çalışma

function printScreen1 (){
    console.log("İlk ekran çıktısı");
}

 function printScreen2 (){
    setTimeout(function(){
        console.log("İkinci ekran çıktısı")  
    }, 2000);
}

function printScreen3 (){
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();

//Callback functions

function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }


 printScreen2(printScreen1, printScreen3);

// *** example 1 ***

function greetings(firstName) {
    console.log(`Merhaba ${firstName ? firstName : ""}`)
}
greetings() // Merhaba

//or

function greetings2(firstName = ""){
    console.log(`Merhaba ${firstName ? firstName : ""}`)
}
greetings("Apple") // Merhaba Apple

// *** example 2 ***

function greetings3(firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info // fonksiyon cagrildiginda info'yu döndürür
}
let greetingsInfo = greetings2("Eray","Aybek")
console.log(greetingsInfo) // Merhaba Eray Aybek

// *** example 3 ***

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}
// Index.html dosyasi icerisindeki "id"ye sahip bir html ogesinin icerisine gerekli "info" bilgisini kolay bir sekilde tek bir fonksiyonla yazdirmis olduk. 
domIdWriteInfo('greeting', 'Merhaba') 
domIdWriteInfo('greeting', greetings3("Lorem","Ipsum"))

