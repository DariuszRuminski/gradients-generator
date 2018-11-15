const menuBtn = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');
const option = document.querySelectorAll('.option')
const links = document.querySelectorAll('.menu-options a');

menuBtn.addEventListener('click', function(){
    menuOptions.classList.toggle('menu-options-active');
    
    links.forEach(function(a){
        a.addEventListener('click', function(e){
            e.preventDefault();
            
            const elAnchor = document.querySelector(a.getAttribute('href'));
            
            for(el of option){
                el.classList.remove('option-active');
            }
            menuOptions.classList.remove('menu-options-active');
            elAnchor.classList.add('option-active');
        });
    });
});

const colorsBtn = document.querySelectorAll('.colors-box-btn button');
const colorsBoxInput = document.querySelectorAll('.colors-box-input');
const colorsInput = document.querySelectorAll('.colors-box-input input');

for(let color of colorsBtn){
    color.addEventListener('click', function(){
        for(let el of colorsBtn){
            el.classList.remove('btn-active');
        }
        this.classList.add('btn-active');
        
        if(colorsBtn[0].classList.contains('btn-active')){
            colorsBoxInput[0].classList.add('colors-box-input-active');
            colorsBoxInput[1].classList.remove('colors-box-input-active');
        }else{
            colorsBoxInput[0].classList.remove('colors-box-input-active');
            colorsBoxInput[1].classList.add('colors-box-input-active');
        }
    });
};

const inputChange = function(){
    gradient.style.setProperty('background-image', 'linear-gradient('+randomRotate+',rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')'+',rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+'))');
}
for(let el of colorsInput){
    el.addEventListener('input', inputChange);
}

const randomBtn = document.querySelector('.random');
const gradient = document.querySelector('.gradient-box');
const randomColor = [];
let randomColorOne = '';
let randomColorTwo = '';
let randomRotate = '';
randomBtn.addEventListener('click', function(){
    for(let i=0; i<6 ;i++){
        randomColor[i] = Math.floor(Math.random()*256);
        colorsInput[i].value = randomColor[i];
    }
    randomColorOne = 'rgb('+randomColor[0]+','+randomColor[1]+','+randomColor[2]+')';
    randomColorTwo = 'rgb('+randomColor[3]+','+randomColor[4]+','+randomColor[5]+')';
    randomRotate = Math.floor(Math.random()*361) + 'deg';
    
    gradient.style.setProperty('background-image', 'linear-gradient('+randomRotate+','+randomColorOne+','+randomColorTwo+')');
});

const orientationChange = function(){
    for(el of links){
        el.style.setProperty('line-height',el.clientHeight+'px');
    }
}
window.addEventListener('resize', orientationChange);
window.addEventListener('load', orientationChange);


const rotate = document.querySelector('.rotate-box');
const rotateCnt = document.querySelector('.rotate-content');
const rotatePointer = document.querySelector('.rotate-pointer');
const gradientHeight = document.querySelector('.gradient-box');

const rotateAngle = document.querySelector('.rotate-angle');

rotate.addEventListener('mousedown', function(e){
    const x = (e.clientX - this.offsetLeft);
    const xx = rotate.clientWidth / 2 + 1;
    const xxx = x - xx;
    
    const y = e.clientY - this.offsetTop - gradientHeight.clientHeight;
    const yy = y * (-1) + 55;
    
    const result = Math.atan2(xxx, yy)* 180 / Math.PI;
    console.log(result + '*');
    rotateAngle.innerText = Math.ceil(result)+'*';
    
    console.log(xxx);
    console.log(yy);
    rotateCnt.style.setProperty('transform','rotate('+result+'deg)');
});

rotate.addEventListener('touchstart', function(e){
    const x = (e.clientX - this.offsetLeft);
    const xx = rotate.clientWidth / 2 + 1;
    const xxx = x - xx;
    
    const y = e.clientY - this.offsetTop - gradientHeight.clientHeight;
    const yy = y * (-1) + 55;
    
    const result = Math.atan2(xxx, yy)* 180 / Math.PI;
    console.log(result + '*');
    rotateAngle.innerText = Math.ceil(result)+'*';
    
    console.log(xxx);
    console.log(yy);
    rotateCnt.style.setProperty('transform','rotate('+result+'deg)');
});
