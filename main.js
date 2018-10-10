const btn = document.querySelector('.btn');
const cnt1 = document.querySelector('.content_1');
const cnt2 = document.querySelector('.content_2');
const col1 = document.querySelector('.col_1');
const col1Info = document.querySelector('.col_1-info');
const col2 = document.querySelector('.col_2');
const col2Info = document.querySelector('.col_2-info');

const tab = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let color_1 = '#';
let color_2 = '#';
let counter = 0;

btn.addEventListener('click', function(){
    for(let i=0;i<6;i++){
        const zmienna_1 = Math.floor(Math.random()*16);
        const zmienna_2 = Math.floor(Math.random()*16);
        color_1 += tab[zmienna_1];
        color_2 += tab[zmienna_2];
        col1.style.setProperty('background-color',color_1);
        col2.style.setProperty('background-color',color_2);
        col1Info.innerText = color_1;
        col2Info.innerText = color_2;
    }
    const kat = Math.floor(Math.random()*361);
    
    if(counter%2==0){
        cnt2.style.setProperty('background-image', 'linear-gradient('+kat+'deg,'+ color_1+','+color_2+')');
    }
    else{
        cnt1.style.setProperty('background-image', 'linear-gradient('+kat+'deg,'+ color_1+','+color_2+')');
    }
    
    cnt1.classList.toggle('b');
    cnt2.classList.toggle('a');
    
    console.log('kolor 1: ' + color_1);
    console.log('kolor 2: ' + color_2);
    console.log('kat: ' + kat);
    
    color_1 = '#';
    color_2 = '#';
    counter++;    
});

btn.addEventListener('mousedown', function(){
    btn.classList.add('btn-click');
});
btn.addEventListener('mouseup', function(){
    btn.classList.remove('btn-click');
});


