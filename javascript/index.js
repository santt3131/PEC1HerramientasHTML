let toggleBooksStatus = false;

function myMenuResponsive(){
    const menuList = document.getElementById("menu");
    if(menuList.className ==="menuOff" ){
        menuList.className = "menuOn";
    }else{
        menuList.className = "menuOff";

    }
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

let slideIndex = 0;
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


