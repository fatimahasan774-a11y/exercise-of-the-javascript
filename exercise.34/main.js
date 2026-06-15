const list = document.querySelector("#list");
console.log(list)


function addItem(){
    const newItem = document.createElement("li")
    newItem.textContent= "item three"
    list.appendChild(newItem);

    console.log(newItem)

}

function removeItem(){
list.removeChild(list.lastChild)
}