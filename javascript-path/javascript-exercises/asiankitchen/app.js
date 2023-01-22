const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen-500x375.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];



const menuIds = menu.map(item => {
  return item.id
})

const menuTitles = menu.map(item => {
  return item.title
})

const menuPrices = menu.map(item => {
  return item.price
})

const menuCategories = menu.map(item => {
  return item.category
})

let categ = menuCategories.sort()
let ans = []
for (let i = 0; i< categ.length; i++){
  if(categ[i] === categ[i+1]){
     if(ans[ans.length -1] !== categ[i]){
      ans.push(categ[i])
     }
  } 
}

console.log(ans)

const menuImgs= menu.map(item => {
  return item.img
})

const menuDescs= menu.map(item => {
  return item.desc
})


// btnListDOM = document.querySelector("#btnList")

let menuDiv = document.querySelector("#menuDiv")

let showAllBool = true
let showKoreaBool = true
let showJapanBool = true
let showChinaBool = true


// let bttn = document.createElement('button')
// bttn.classList.add("btn","btn-outlin-dark", "btn-item")
// bttn.innerHTML = "All"
// bttn.addEventListener("click", showAll())
// btnListDOM.appendChild(bttn)

// for (index = 0; index < ans.length; index++){
//   let bttn = document.createElement('button')
//   bttn.classList.add("btn","btn-outlin-dark", "btn-item")
//   bttn.innerHTML = ans[index]
//   bttn.addEventListener("click", `show${ans[index]}()`)
//   btnListDOM.appendChild(bttn)

// }

function showAll(){
  
  if (menuDiv.childElementCount > 0){
    while (menuDiv.firstChild) {
      menuDiv.removeChild(menuDiv.lastChild);
    }
  }

  if (showAllBool) {

    for (index = 0; index < menu.length; index++){

      let div = document.createElement("div")
      let divInfo = document.createElement("div")
      let divTitle = document.createElement("div")
      let divText = document.createElement("div")
      let divTitleHeader = document.createElement("h4")
      let divPriceHeader = document.createElement("h4")
      let divImg = document.createElement("img")

      div.classList.add("menu-items", "col-lg-6", "col-sm-12", "bg-temp")
      divInfo.classList.add("menu-info")
      divTitle.classList.add("menu-title")
      divText.classList.add("menu-text")
      divImg.classList.add("photo")
      divPriceHeader.id = "price"

      divTitleHeader.innerHTML = menuTitles[index]
      divPriceHeader.innerHTML = menuPrices[index]
      divText.textContent = menuDescs[index]
      divImg.src = menuImgs[index]

      menuDiv.appendChild(div)
      div.appendChild(divImg)
      div.appendChild(divInfo)
      divInfo.appendChild(divTitle)
      divInfo.appendChild(divText)
      divTitle.appendChild(divTitleHeader)
      divTitle.appendChild(divPriceHeader)

      div.id = "product" + menuIds[index]


    }

    showAllBool = false
    showKoreaBool = true
    showJapanBool = true
    showChinaBool = true
    
    console.log("Added all menus.")
    
  }
  // .menu-items.col-lg-6.col-sm-12#urun

  
  
}

function showKorea(){

  if (showKoreaBool) {

    if (menuDiv.childElementCount > 0){
      while (menuDiv.firstChild) {
        menuDiv.removeChild(menuDiv.lastChild);
      }
    }

    for (index = 0; index < menu.length; index++){

      if (menuCategories[index] == "Korea") {

        let div = document.createElement("div")
        let divInfo = document.createElement("div")
        let divTitle = document.createElement("div")
        let divText = document.createElement("div")
        let divTitleHeader = document.createElement("h4")
        let divPriceHeader = document.createElement("h4")
        let divImg = document.createElement("img")
  
        div.classList.add("menu-items", "col-lg-6", "col-sm-12", "bg-temp")
        divInfo.classList.add("menu-info")
        divTitle.classList.add("menu-title")
        divText.classList.add("menu-text")
        divImg.classList.add("photo")
        divPriceHeader.id = "price"
  
        divTitleHeader.innerHTML = menuTitles[index]
        divPriceHeader.innerHTML = menuPrices[index]
        divText.textContent = menuDescs[index]
        divImg.src = menuImgs[index]
  
        menuDiv.appendChild(div)
        div.appendChild(divImg)
        div.appendChild(divInfo)
        divInfo.appendChild(divTitle)
        divInfo.appendChild(divText)
        divTitle.appendChild(divTitleHeader)
        divTitle.appendChild(divPriceHeader)
  
        div.id = "product" + menuIds[index]

      }
    }
    showAllBool = true
    showKoreaBool = false
    showJapanBool = true
    showChinaBool = true

    console.log("Added Korea menu.")
    
  }
  // .menu-items.col-lg-6.col-sm-12#urun

  
  
}

function showJapan(){

  if (showJapanBool) {

    if (menuDiv.childElementCount > 0){
      while (menuDiv.firstChild) {
        menuDiv.removeChild(menuDiv.lastChild);
      }
    }

    for (index = 0; index < menu.length; index++){

      if (menuCategories[index] == "Japan") {

        let div = document.createElement("div")
        let divInfo = document.createElement("div")
        let divTitle = document.createElement("div")
        let divText = document.createElement("div")
        let divTitleHeader = document.createElement("h4")
        let divPriceHeader = document.createElement("h4")
        let divImg = document.createElement("img")
  
        div.classList.add("menu-items", "col-lg-6", "col-sm-12", "bg-temp")
        divInfo.classList.add("menu-info")
        divTitle.classList.add("menu-title")
        divText.classList.add("menu-text")
        divImg.classList.add("photo")
        divPriceHeader.id = "price"
  
        divTitleHeader.innerHTML = menuTitles[index]
        divPriceHeader.innerHTML = menuPrices[index]
        divText.textContent = menuDescs[index]
        divImg.src = menuImgs[index]
  
        menuDiv.appendChild(div)
        div.appendChild(divImg)
        div.appendChild(divInfo)
        divInfo.appendChild(divTitle)
        divInfo.appendChild(divText)
        divTitle.appendChild(divTitleHeader)
        divTitle.appendChild(divPriceHeader)
  
        div.id = "product" + menuIds[index]

      }
    }
    showAllBool = true
    showKoreaBool = true
    showJapanBool = false
    showChinaBool = true

    console.log("Added Japan menu.")
    
  }
  // .menu-items.col-lg-6.col-sm-12#urun

  
  
}

function showChina(){

  if (showChinaBool) {

    if (menuDiv.childElementCount > 0){
      while (menuDiv.firstChild) {
        menuDiv.removeChild(menuDiv.lastChild);
      }
    }

    for (index = 0; index < menu.length; index++){

      if (menuCategories[index] == "China") {

        let div = document.createElement("div")
        let divInfo = document.createElement("div")
        let divTitle = document.createElement("div")
        let divText = document.createElement("div")
        let divTitleHeader = document.createElement("h4")
        let divPriceHeader = document.createElement("h4")
        let divImg = document.createElement("img")
  
        div.classList.add("menu-items", "col-lg-6", "col-sm-12", "bg-temp")
        divInfo.classList.add("menu-info")
        divTitle.classList.add("menu-title")
        divText.classList.add("menu-text")
        divImg.classList.add("photo")
        divPriceHeader.id = "price"
  
        divTitleHeader.innerHTML = menuTitles[index]
        divPriceHeader.innerHTML = menuPrices[index]
        divText.textContent = menuDescs[index]
        divImg.src = menuImgs[index]
  
        menuDiv.appendChild(div)
        div.appendChild(divImg)
        div.appendChild(divInfo)
        divInfo.appendChild(divTitle)
        divInfo.appendChild(divText)
        divTitle.appendChild(divTitleHeader)
        divTitle.appendChild(divPriceHeader)
  
        div.id = "product" + menuIds[index]

      }
    }
    showAllBool = true
    showKoreaBool = true
    showJapanBool = true
    showChinaBool = false

    console.log("Added China menu.")
    
  }

}


