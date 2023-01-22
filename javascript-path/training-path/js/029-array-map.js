// Array Map Kullanimi

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orijinal isimler kalsin.
// shortName icinde ilk harf buyuk ("A.")
// newName icinde ilk harf buyuk olsun. ("Ayse")

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS) //butun harfler kucuk

// const USERS_OBJ = USERS.map( item => 
//     {
//         return {
//             userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//          }
//     }
// )

const USERS_OBJ = USERS.map( item => 
    (
        {
            userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }

    )
)
console.log(USERS_OBJ)

//Ödev: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];

const MAAS_ZAM = maaslar.map(item => (
    item += item > 3000 ? item * 0.15 : item * 0.25
)
)
console.log(MAAS_ZAM)