let userName = prompt("İsmin nedir?") // kullanci ismini alır.
let gender = prompt("Cinsiyetiniz nedir?").toLowerCase() // cinsiyetini alır.
userName = gender == "erkek" ?  userName + " Bey"  : userName + " Hanım" // cinsiyet bilgisine gore hitabeti duzenler

let nameInfo = document.querySelector("#nameInfo") // nameInfo id'li html ögesini secer.
let timeInfo = document.querySelector("#timeInfo") // timeInfo id'li html ögesini secer.

nameInfo.innerHTML = `Merhaba ${userName}, Hoşgeldiniz !` // nameInfo id'li html ögesini duzenler ve kullanici adini ekrana yazdirir.

function updateTime(){ 
    var currentTime = new Date() // zaman bilgisini alir.
    var hours = currentTime.getHours() // zaman bilgisinden saat bilgisini alir.
    var minutes = currentTime.getMinutes() // zaman bilgisinden dakika bilgisini alir.
    var seconds = currentTime.getSeconds() // zaman bilgisinden saniye bilgisini alir.
    var day = currentTime.getDay() // zaman bilgisinden gun bilgisini index olarak alir.
    var dds = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'] // gun indeksine gore gunlerin listelenmis hali.
    var today = dds[day] // gun indexine gore listeden ilgili gun bilgisini secer.

    minutes = minutes < 10 ? minutes = "0" + minutes : minutes // dakika eger 10 dan kucukse yanina 0 ekler.
    seconds = seconds < 10 ? seconds = "0" + seconds : seconds // saniye eger 10 dan kucukse yanina 0 ekler.
    var t_str = hours + ":" + minutes + ":" + seconds; // saat:dakika:saniye bilgisini duzenler.
    document.getElementById('timeInfo').innerHTML = t_str + " " + today; // saat:dakika:saniye bilgisini timeInfo id'li ogenin innerHTML'ine gunceller.
    document.body.style.background = `rgba(${hours *10},${minutes * 4  },${seconds *  4 },0.85)`// body objesinin arkaplan rengini duzenler.
}
setInterval(updateTime, 1000); // her saniye fonksiyonu gunceller
