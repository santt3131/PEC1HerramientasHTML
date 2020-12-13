let toggleBooksStatus = false;
let slideIndex = 0;
const el_icon= document.getElementById("icon");
const el_libro= document.getElementById("nuestroLibros");
const el_arrow_left= document.getElementById("prev");
const el_arrow_right= document.getElementById("next");
const playPauseBtn = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwdBtn = document.querySelector('.rwd');
const fwdBtn = document.querySelector('.fwd');
const timeLabel = document.querySelector('.time');
const player = document.querySelector('video');
const controls = document.querySelector('.controls')

if(player){
    player.removeAttribute('controls');
    controls.style.visibility = 'visible';
}

if(playPauseBtn){
    playPauseBtn.onclick = function() {
        if(player.paused) {
        playPauseBtn.setAttribute('data-icon','u');
        player.play();
        } else {
        playPauseBtn.setAttribute('data-icon','P');
        player.pause();
        }
    };
}

if(stopBtn){
    stopBtn.onclick = function() {
        player.pause();
        player.currentTime = 0;
        playPauseBtn.setAttribute('data-icon','P');
    };
}

if(rwdBtn){
rwdBtn.onclick = function() {
    player.currentTime -= 3;
  };
}

if(fwdBtn){
fwdBtn.onclick = function() {
    player.currentTime += 3;
    if(player.currentTime >= player.duration || player.paused) {
      player.pause();
      player.currentTime = 0;
      playPauseBtn.setAttribute('data-icon','P');
    }
  };
}

if(player){
    player.ontimeupdate = function() {
        let minutes = Math.floor(player.currentTime / 60);
        let seconds = Math.floor(player.currentTime - minutes * 60);
        let minuteValue;
        let secondValue;
    
        if (minutes<10) {
        minuteValue = "0" + minutes;
        } else {
        minuteValue = minutes;
        }
    
        if (seconds<10) {
        secondValue = "0" + seconds;
        } else {
        secondValue = seconds;
        }
    
        mediaTime = minuteValue + ":" + secondValue;
        timeLabel.textContent = mediaTime;
    };
}

function myMenuResponsive(){
    const menuList = document.getElementById("menu");
    if(menuList.className ==="menuOff" ){
        menuList.className = "menuOn";
    }else if(menuList.className === "menuOn"){
        menuList.className = "menuOff";
    }else if(menuList.className === undefined ){
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


