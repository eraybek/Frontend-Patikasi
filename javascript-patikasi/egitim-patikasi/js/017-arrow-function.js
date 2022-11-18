// ******* Arrow Function ******

// Daha az satirla fonksiyon yazabilmeyi saglar

const helloFuncV1 = (firstName) => { console.log(`Hello ${firstName}`)}
helloFuncV1("Eray") // Output: Hello Eray

const helloFuncV2 = firstName => console.log(`Hello ${firstName}`) // tek satir fonksiyonlarda suslu parantez kullanilmasa da olur.
helloFuncV2("Eray") // Output: Hello Eray

const helloFuncV3 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`) // çift parametre iceren fonksiyonlarda parametreler parantez icine alinmalidir.
helloFuncV3("Eray", "Aybek") // Output: Hello Eray Aybek

const helloFuncV4 = (firstName, lastName) => { // birden fazla satir iceren fonksiyonlar suslu parantez icerisine alinmalidir.
    let greeting = document.querySelector("#greeting")
    greeting.innerHTML = `Hello ${firstName} ${lastName}`
}
helloFuncV4("Eray","Aybek")