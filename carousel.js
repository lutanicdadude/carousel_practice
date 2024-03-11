/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // initialize i
    let i;

    // asigning all elements called mySlides
    let slides = document.getElementsByClassName("mySlides");

    // asigning all elements called dot
    let dots = document.getElementsByClassName("dot");

    // when n is more than 3, n changes to 1
    if (n > slides.length) {slideIndex = 1}

    // when n is less than 1, n changes to 3
    if (n < 1) {slideIndex = slides.length}

    // i is 0 at first. while i is less than 3, i increase by 1
    for (i = 0; i < slides.length; i++) {
        // elements are hidden
        slides[i].style.display = "none";
    }
    
    
    // i is 0 at first. while i is less than 3, i increase by 1
    for (i = 0; i < dots.length; i++) {
        // class name of dot changes from active to nil
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // now n is 0. the first mySlides div would be displayed
    slides[slideIndex-1].style.display = "block";

    // now n is 0. the first dot class would be set as active
    dots[slideIndex-1].className += " active";
    
}
*/

//automate slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    // asigning all elements called mySlides
    let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");

    // i is 0 at first. while i is less than 3, i increse by 1
    for (i = 0; i < slides.length; i++) {
        //elements are hidden
        slides[i].style.display = "none";
    }

    // slideIndex would increase by 1
    slideIndex++;
    // when slideIndex is more than 3, change slideIndex to 1
    if (slideIndex > slides.length) {slideIndex=1}

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    // slideIdex is 0 at first. Show first mySlides
    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";

    // set how fast the slides would change (this is 2s)
    setTimeout(showSlides, 2000);
}

// fix arrows and dots so they move