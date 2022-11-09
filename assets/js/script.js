let numSlides = document.querySelectorAll('.slide').length;

let currentSlide = 0;

document.querySelector('.slides').style.width = `calc(100vw * ${numSlides})`;
document.querySelector('.slider-buttons').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrevious() {
    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = numSlides - 1;
    }

    updateMargin();
}

function goNext() {
    currentSlide++;

    if(currentSlide > (numSlides - 1)) {
        currentSlide = 0;
    }

    updateMargin();
}

function updateMargin() {
    let sliderWidth = document.querySelector('.slide').clientWidth;
    let newMargin = (currentSlide * sliderWidth);

    document.querySelector('.slides').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);