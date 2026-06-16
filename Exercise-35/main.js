function changeImage(){
    const image =document.querySelector('#image');
    
    let url = prompt(" enter your iamge");
    let border =prompt("enter image border");
    let size = prompt("enter image size");
    let backgroundcolor= prompt ("enter your backgroun-color");
    let padding =prompt ("enter your padding")
 
    
    image.setAttribute('src', url, border ,size, backgroundcolor,padding);

    image.style.border= border;
    image.style.width= size+'px';
    image.style.backgroundColor = backgroundcolor;
    image.style.padding= padding +'px';


}