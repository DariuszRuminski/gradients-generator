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

const r=document.querySelector('.r');
const g=document.querySelector('.g');
const b=document.querySelector('.b');
const r2=document.querySelector('.r2');
const g2=document.querySelector('.g2');
const b2=document.querySelector('.b2');


const randomBtn = document.querySelector('.random');
const gradient = document.querySelector('.gradient-box');
const randomColor = [];
let randomColorOne = '';
let randomColorTwo = '';
let randomRotate = '';
randomBtn.addEventListener('click', function(){
    for(let i=0; i<6 ;i++){
        randomColor[i] = Math.floor(Math.random()*256);
    }
    randomColorOne = 'rgb('+randomColor[0]+','+randomColor[1]+','+randomColor[2]+')';
    randomColorTwo = 'rgb('+randomColor[3]+','+randomColor[4]+','+randomColor[5]+')';
    randomRotate = Math.floor(Math.random()*361) + 'deg';
            r.value = randomColor[0];
            g.value = randomColor[1];
            b.value = randomColor[2];
            r2.value = randomColor[3];
            g2.value = randomColor[4];
            b2.value = randomColor[5];
    
    gradient.style.setProperty('background-image', 'linear-gradient('+randomRotate+','+randomColorOne+','+randomColorTwo+')');
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
    let x ='linear-gradient('+randomRotate+',rgb('+r.value+','+g.value+','+b.value+')'+',rgb('+r2.value+','+g2.value+','+b2.value+'))';
    gradient.style.setProperty('background-image', x);
}
for(let el of colorsInput){
    el.addEventListener('input', inputChange);
}


const orientationChange = function(){
    for(el of links){
        el.style.setProperty('line-height',el.clientHeight+'px');
    }
}
window.addEventListener('resize', orientationChange);
window.addEventListener('load', orientationChange);

