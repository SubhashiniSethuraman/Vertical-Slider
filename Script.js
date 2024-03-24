const slider=document.querySelector(".slider")
const leftSlide=document.querySelector(".left")
const rightSlide=document.querySelector(".right")
const upBtn=document.querySelector(".up-button")
const downBtn=document.querySelector(".down-button")
const slidelength=rightSlide.querySelectorAll("div").length //length of slider (ie) 4 slides

let activeSlideIndex=0 //starts from 0

leftSlide.style.top=`-${(slidelength - 1) * 100}vh` //style for left slide -- top -- negative cz it goes up upto length-1 (0 to 3) 100%vh height

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = slider.clientHeight //clientheight--viewable height of elmt in pixel including padding (dynamic)
    if(direction === 'up')
    {
        activeSlideIndex++  //goes up==> 1 slide up
        if(activeSlideIndex > slidelength - 1) //4>3
        {
            activeSlideIndex=0  //comes to 0th slide
        }
    }
    else if(direction === 'down')
    {
        activeSlideIndex--  //goes down==> 1 slide down
        if(activeSlideIndex < 0) //-1<0
        {
            activeSlideIndex=slidelength - 1  //comes to 3rd slide
        }
    }

    //transform in Y axis
    rightSlide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)` //rightside to go up (upto slideheight)
    leftSlide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`  //leftside to go down (upto slideheight)
}