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
const colorsBoxInput = document.querySelectorAll('.colors-box');

for(let color of colorsBtn){
    color.addEventListener('click', function(){
        for(let el of colorsBtn){
            el.classList.remove('btn-active');
        }
        this.classList.add('btn-active');
        
        if(colorsBtn[0].classList.contains('btn-active')){
            colorsBoxInput[0].classList.add('colors-box-active');
            colorsBoxInput[1].classList.remove('colors-box-active');
        }else{
            colorsBoxInput[0].classList.remove('colors-box-active');
            colorsBoxInput[1].classList.add('colors-box-active');
        }
    });
};

const gradient = document.querySelector('.gradient-box');
const colorsInput = document.querySelectorAll('.colors-box input');
const colorDesktopColor = document.querySelectorAll('.color-desktop-box-color');
const textarea = document.querySelector('.textarea-copy');

const inputChange = function(){
    gradient.style.setProperty('background-image', 'linear-gradient('+angleResult+', rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')'+', rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+'))');
    
    textarea.innerText = 'background-image: '+'linear-gradient( '+angleResult+', rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')'+', rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+'));';
    
    colorDesktopColor[0].style.setProperty('background-color', 'rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')');
    
    colorDesktopColor[1].style.setProperty('background-color', 'rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+')');
}

for(let el of colorsInput){
    el.addEventListener('input', inputChange);
}

const rotate = document.querySelector('.rotate-box');
const rotateCnt = document.querySelector('.rotate-content');
const rotatePointer = document.querySelector('.rotate-pointer');
const rotateInfoAngle = document.querySelector('.rotate-angle-box-info');
let angleResult='';
let rotateAngleText='';

const rotateFunction = function(e){
    let x,y;
    if(window.innerWidth >= '1024'){
        x = (e.clientX - this.offsetLeft) - (rotate.clientWidth / 2 + 5);
        y = (e.clientY - this.offsetTop)*(-1) + (rotate.clientWidth / 2 + 5);
    }else{
        if(window.innerHeight > window.innerWidth){
            x = (e.clientX - this.offsetLeft) - (rotate.clientWidth / 2 + 5); 
            y = (e.clientY - this.offsetTop - gradient.clientHeight) * (-1) + (rotateCnt.clientHeight / 2);  
        }else{
            x = (e.clientX - this.offsetLeft - gradient.clientWidth) - (rotateCnt.clientHeight / 2);
            y = y = (e.clientY - this.offsetTop)*(-1) + (rotate.clientWidth / 2 + 5);
        }
    }
    
    let angle = Math.atan2(x, y)* 180 / Math.PI;
    if(angle < -1){
        angle = 360 + angle;  
    }
    rotateInfoAngle.innerText = Math.ceil(angle);
    angleResult = Math.ceil(angle) + 'deg';
    rotateCnt.style.setProperty('transform','rotate('+angleResult+')');
    
    rotateAngleText = 'linear-gradient( '+angleResult+', rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')'+', rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+'))';
    
    gradient.style.setProperty('background-image', rotateAngleText);   
    textarea.innerText = 'background-image: ' + rotateAngleText + ';';
    rotate.addEventListener('mousemove', rotateFunction);
};

rotate.addEventListener('mousedown', rotateFunction);
rotate.addEventListener("mouseup", function(e){
    rotate.removeEventListener('mousemove', rotateFunction);
});

const randomBtn = document.querySelector('.random');
const randomColor = [];
let randomColorOne = '';
let randomColorTwo = '';
let randomRotate = '';

const randomGradientFunction = function(){
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
    textarea.innerText ='background-image: '+'linear-gradient( '+randomRotate+', '+randomColorOne+', '+randomColorTwo+');';
    
    colorDesktopColor[0].style.setProperty('background-color', 'rgb('+colorsInput[0].value+','+colorsInput[1].value+','+colorsInput[2].value+')');
    
    colorDesktopColor[1].style.setProperty('background-color', 'rgb('+colorsInput[3].value+','+colorsInput[4].value+','+colorsInput[5].value+')');
};

window.addEventListener('load', randomGradientFunction);
randomBtn.addEventListener('click', randomGradientFunction);

const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', function(){
    const el = document.createElement('textarea');
    el.value = textarea.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
});

const lineHeightChange = function(){
    for(el of links){
        el.style.setProperty('line-height',el.clientHeight+'px');
    }
}
window.addEventListener('resize', lineHeightChange);
window.addEventListener('load', lineHeightChange);

const rotateBoxSize = document.querySelector('.rotate');
const rotateBoxSizeMobile = document.querySelector('.menu');
const rotateSize = function(){
    if((rotateBoxSizeMobile.clientWidth <= rotateBoxSizeMobile.clientHeight) && (window.innerWidth < '1024')){
        rotate.style.setProperty('width', (rotateBoxSizeMobile.clientWidth * 0.8) + 'px');
        rotate.style.setProperty('height', (rotateBoxSizeMobile.clientWidth * 0.8) + 'px');
        rotateCnt.style.setProperty('height', (rotateBoxSizeMobile.clientWidth * 0.8) + 'px');
    }else if((rotateBoxSizeMobile.clientWidth > rotateBoxSizeMobile.clientHeight) && (window.innerWidth < '1024')){
        rotate.style.setProperty('width', (rotateBoxSizeMobile.clientHeight * 0.8) + 'px');
        rotate.style.setProperty('height', (rotateBoxSizeMobile.clientHeight * 0.8) + 'px');
        rotateCnt.style.setProperty('height', (rotateBoxSizeMobile.clientHeight * 0.8) + 'px');
    }else if((rotateBoxSize.clientWidth > rotateBoxSize.clientHeight) && (window.innerWidth >= '1024')){
        rotate.style.setProperty('width', (rotateBoxSize.clientHeight * 0.8) + 'px');
        rotate.style.setProperty('height', (rotateBoxSize.clientHeight * 0.8) + 'px');
        rotateCnt.style.setProperty('height', (rotateBoxSize.clientHeight * 0.8) + 'px');
    }else{
        rotate.style.setProperty('width', (rotateBoxSize.clientWidth * 0.8) + 'px');
        rotate.style.setProperty('height', (rotateBoxSize.clientWidth * 0.8) + 'px');
        rotateCnt.style.setProperty('height', (rotateBoxSize.clientWidth * 0.8) + 'px');
    }
}
window.addEventListener('resize', rotateSize);
window.addEventListener('load', rotateSize);
