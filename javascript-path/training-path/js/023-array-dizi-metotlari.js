// Cok kullanilan Array(Dizi) metotlari
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Eray", "Mehmet"]

items.push(maleUsers) // sona eklendi
items.unshift(femaleUsers) // basa eklendi

console.log(items)
console.log(items[0][0]) // Ayse ^_^
console.log(items[0].length) // 3

// Array icerisinden oge ayirmak -> splice(pos, item)
let newItems = items.splice(1, 5) // items'tan bu index araligi cikarildi ve newItems'a alindi.
console.log(newItems)

// Array icerisindeki ogenin index bilgisin bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items)
console.log(items.indexOf("ipsum")) // 3. indexte bulunuyor

// Array kopyalamak -> slice, [...ES6]
let copyItems = items // aslinda kopyalamiyor.
console.log(items)
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems : ", copyItems)
console.log("items : ", items)

copyItems = items.slice() // slice ile kopyalandi.
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems : ", copyItems)
console.log("items : ", items)

let es6Items = [...items] // es6 ile kopyalandi.
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] // es6 ile birden fazla array yapisi birlestirildi.
console.log("allUsers : ", allUsers)

// Array icerisindeki bilgiyi string'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- ")) // Ahmet --- Mehmet --- Ayse --- 

// Istedigimiz index bilgisine oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melissa")
console.log(allUsers)

allUsers.splice(Math.floor(allUsers.length/2), 0 , "Lorem")

// Array birlestirme -> array_1.concat(array_2)
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.

// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

const sayilar = [1, 2, 3];

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz. Yeni dizi oluşmuş olur.

console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

// some()

const sayilar_s = [4,5,6];

// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar_s.some(function(sayi) {
    return sayi > 5 ;
});

console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.


const sonuc2 = sayilar_s.some(function(sayi) {
    return sayi <3;
});

console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz. 

/* .every()
every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir. 
*/

const sayilar_e = [4,5,6];

const sonuc1_e = sayilar_e.every(function(sayi) {
    return sayi > 3;
});

console.log(sonuc1_e);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


const sonuc2_e = sayilar_e.every(function(sayi) {
    return sayi > 5;
});

console.log(sonuc2_e);
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


const sonuc3_e = sayilar_e.every(function(sayi) {
    return sayi > 7;
});

console.log(sonuc3_e);
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dönmesini bekleriz.

/*.filter()
filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
Yeni oluşacak diziyi bir değişkende saklıyoruz.
Orijinal dizi bozulmuyor.
*/

const sayilar_f = [1,2,3,4,5];

const filtrelenmisSayilar = sayilar_f.filter(function(sayi) {
    return sayi >3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilar_f);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

/*.find()
Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
Diğer metotların aksine find metodu elemanın kendisini döner.
Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
Koşulu sağlayan bir eleman bulamazsa undefined döner.
*/

const sayilar_b = [4,5,6,7];

const bulunacakEleman1 = sayilar_b.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = sayilar_b.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = sayilar_b.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

/*.sort()
Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
*/

const sayilar_so = [3,5,2,10,4];

sayilar_so.sort();
console.log(sayilar_so);
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

sayilar_so.sort(function(a,b) {
    return b-a;
});
console.log(sayilar);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.

/*.reduce()
Bu metot dizimizi yalnızca bir değere indirger.
Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
*/
const sayilar_r = [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1_r = sayilar_r.reduce(indirgeyici, 0);

console.log(sonuc1_r);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.



// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonuc2_r = sayilar_r.reduce(indirgeyici, 5);

console.log(sonuc2_r);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.

