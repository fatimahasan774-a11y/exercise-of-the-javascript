const togglebuutton = document.querySelector(".toggle-button")
const navbar = document.querySelector(".nav-bars")

togglebuutton.addEventListener("click", function(){
    navbar.classList.toggle("active");
})