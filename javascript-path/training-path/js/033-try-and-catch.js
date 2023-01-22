// Hata Yonetimi - Try & Catch

let products;

try { // 
    products.forEach(item => {
        console.log(item)
    });
} catch (error) { // Eger hata alirsak
    console.log("Alinan Error: ", error)  // Hatayi yazdir
    products = [1, 2, 3] // Duzeltme uygula
    products.forEach(item => { // Tekrar Dene
        console.log(item)
    });
}


console.log("hata yonetimi duzgun calisiyor")

let info = "kodluyoruz"
console.log(info)

//Throw İle İstisnalar Oluşturma

//dogumTarihi id'li bir input nesnesi oldugunu ve bir butonun onclick fonksiyonuna valid()'i atadigimizi dusunelim.
//Eger input nesnemize bir sey girilmediyse throw ifadesiyle exception olusturalim.

function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}
