let toggleBooksStatus = false;
let slideIndex = 0;
const el_icon= document.getElementById("icon");
const el_libro= document.getElementById("nuestroLibros");
const el_arrow_left= document.getElementById("prev");
const el_arrow_right= document.getElementById("next");


function myMenuResponsive(){
    const menuList = document.getElementById("menu");
    if(menuList.className ==="menuOff" ){
        menuList.className = "menuOn";
    }else{
        menuList.className = "menuOff";
    }
}
if(el_icon){
el_icon.addEventListener("click",myMenuResponsive,false);
}

function toggleBooks(){
    let getDropCategoryBooks = document.querySelector(".drop"); 
    if (toggleBooksStatus === false){
        getDropCategoryBooks.style.visibility= "visible";
        toggleBooksStatus = true;
    }else{
        getDropCategoryBooks.style.visibility= "hidden";
        toggleBooksStatus = false;
    }
}

if(el_libro){
    el_libro.addEventListener("click",toggleBooks,false);
}

function showSlider(){
    let i;
    let slides = document.getElementsByClassName("mySlider");
    for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlider,2000);
}

if(el_arrow_left){
el_arrow_left.addEventListener("click",showSlider,false);
}

if(el_arrow_right){
el_arrow_right.addEventListener("click",showSlider,false);
}


