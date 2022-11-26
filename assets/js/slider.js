let infoSwitches = document.querySelectorAll('.info_switch-item');
let infoImg = document.querySelectorAll('.info__img');
let infoBox = document.querySelectorAll('.info__box');
var position = NaN


function infoSlideFunc(pos) {
    if (position === pos) {return}
    infoSwitches.forEach(el => {
        el.classList.remove('active')
    });
    infoImg.forEach(el => {
        el.classList.remove('active')
    });
    infoBox.forEach(el => {
        el.classList.remove('active')
    });

    infoSwitches[pos].classList.add('active')
    infoImg[pos].classList.add('active')
    infoBox[pos].classList.add('active')
    console.log('change');
    position = pos
}


