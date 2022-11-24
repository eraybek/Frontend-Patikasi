// *** To-Do-List Js ***

ekleButonDOM = document.querySelector("#ekle")
textDOM = document.querySelector("#task")
listDOM = document.querySelector("#list")
elementDOM = document.querySelector("#element")

let toDoList = []

function addFunc(){
    if (textDOM.value != Boolean(textDOM.value.trim())){
        const liDOM = document.createElement("li")
        const removeButon = document.createElement('button')
        const doneButton = document.createElement('button')
        doneButton.innerHTML = "Done."
        doneButton.classList.add("mx-2")
        removeButon.id = "remove"
        removeButon.style = "float:right;"
        removeButon.classList.add("btn-danger")
        removeButon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        removeButon.onclick = removeFunc = () => {
            liDOM.remove()
        }
        liDOM.id = "element"
        liDOM.innerHTML = textDOM.value
        listDOM.append(liDOM)
        liDOM.appendChild(removeButon)

        liDOM.onclick = doneFunc = () => {
            if (liDOM.classList.contains("bg-primary")){
                liDOM.classList.remove("bg-primary")
                liDOM.style = "color: black;"
                doneButton.remove()
            }
            else {
                liDOM.classList.add("bg-primary")
                liDOM.appendChild(doneButton)
                liDOM.style = "color: white;"
            }
        }
    }
    else{
        alert("Bos ekleme yapamazsiniz!")

    }
    textDOM.value = ""

}

