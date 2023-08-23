
//open the Modal
function openModal(){
    document.getElementById("myModal").style.display="block";
}

//close the Modal
function closeModal(){
    document.getElementById("myModal").style.display="none";
}

var slideIndex=1;
showSlide(slideIndex);

//next/previous controls
function plusSlides(n){
    showSlide(slideIndex+=n);
}

//Thumbnail image controls
function currentSlide(n){
    showSlide(slideIndex=n);
}

function showSlide(n){
    console.log("showSlide called with n =", n);
    var i;
    var slides=document.getElementsByClassName("mySlides")
    console.log("Number of slides:", slides.length);
    var dots=document.getElementsByClassName("demo")
    var captionText=document.getElementById("caption")
    if(n>slides.length){slideIndex=1}
    console.log("n > slides.length, setting slideIndex to 1"); 
    if(n<1){slideIndex=slides.length}
    console.log("n < 1, setting slideIndex to slides.length");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active","")
    }
    console.log("slideIndex - 1:", slideIndex - 1);
    console.log("slides[slideIndex - 1]:", slides[slideIndex - 1]);
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+=" active";
    captionText.innerHTML=dots[slideIndex-1].alt;
}


