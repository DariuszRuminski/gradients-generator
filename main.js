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

const gradient = document.querySelector('.gradient-box');
const colorsInput = document.querySelectorAll('.colors-box-input input');

const inputChange = function(){
    gradient.style.setProperty('background-image', 'linear-gradient('+angleResult+',rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')'+',rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+'))');
}
for(let el of colorsInput){
    el.addEventListener('input', inputChange);
}

const rotate = document.querySelector('.rotate-box');
const rotateCnt = document.querySelector('.rotate-content');
const rotatePointer = document.querySelector('.rotate-pointer');
const rotateInfoAngle = document.querySelector('.rotate-info-angle');
let angleResult='';
let rotateAngleText='';

rotate.addEventListener('mousedown',function(e){
    let x,y;
    if(window.innerHeight > window.innerWidth){
        x = (e.clientX - this.offsetLeft) - (rotate.clientWidth / 2 + 5); 
        y = (e.clientY - this.offsetTop - gradient.clientHeight) * (-1) + (rotateCnt.clientHeight / 2);  
    }else{
        x = (e.clientX - this.offsetLeft - gradient.clientWidth) - (rotateCnt.clientHeight / 2);
        y = (e.clientY - this.offsetTop)*(-1) + (rotate.clientWidth / 2 + 5);
    }

    let angle = Math.atan2(x, y)* 180 / Math.PI;
    if(angle < -1){
        angle = 360 + angle;  
    }
    rotateInfoAngle.innerText = Math.ceil(angle);
    angleResult = Math.ceil(angle) + 'deg';
    rotateCnt.style.setProperty('transform','rotate('+angleResult+')');
    
    rotateAngleText = 'linear-gradient('+angleResult+',rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')'+',rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+'))';
    
    gradient.style.setProperty('background-image', rotateAngleText);  
});

const randomBtn = document.querySelector('.random');
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
    randomRotate = Math.floor(Math.random()*361);
    rotateInfoAngle.innerText = randomRotate;
    randomRotate += 'deg';
    angleResult = randomRotate;
    rotateCnt.style.setProperty('transform','rotate('+randomRotate+')');
    
    
    gradient.style.setProperty('background-image', 'linear-gradient('+randomRotate+','+randomColorOne+','+randomColorTwo+')');
});

const lineHeightChange = function(){
    for(el of links){
        el.style.setProperty('line-height',el.clientHeight+'px');
    }
}
window.addEventListener('resize', lineHeightChange);
window.addEventListener('load', lineHeightChange);

const menuSize = document.querySelector('.menu');
const rotateSize = function(){
    if(menuSize.clientWidth <= menuSize.clientHeight){
        rotate.style.setProperty('width', (menuSize.clientWidth * 0.8) + 'px');
        rotate.style.setProperty('height', (menuSize.clientWidth * 0.8) + 'px');
        rotateCnt.style.setProperty('height', (menuSize.clientWidth * 0.8) + 'px');
    }else{
        rotate.style.setProperty('width', (menuSize.clientHeight * 0.8) + 'px');
        rotate.style.setProperty('height', (menuSize.clientHeight * 0.8) + 'px');
        rotateCnt.style.setProperty('height', (menuSize.clientHeight * 0.8) + 'px');
    }
}
window.addEventListener('resize', rotateSize);
window.addEventListener('load', rotateSize);
