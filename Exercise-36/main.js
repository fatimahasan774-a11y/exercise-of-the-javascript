const colorpicker = document.querySelector("#colorpicker");
const colorpreview = document.querySelector("#colorPreview");
const colorhistory = document.querySelector("#colorhistory");
const colorhistorybuton = document.querySelector("#colorhistorybuton");

let colorList = [];

colorpicker.addEventListener("input", function(){
        const selectedColor=colorpicker.value;
        colorpreview.style.backgroundColor =  selectedColor
        colorpreview.textContent= selectedColor;

});

colorhistorybuton.addEventListener("click", function(){
        const selectedColor=colorpicker.value;

        if(!colorList.includes(selectedColor)){
            colorList.push(selectedColor)
        

        const listItem = document.createElement("li");

        listItem.textContent =selectedColor;
        colorhistory.appendChild(listItem);
        }
});




