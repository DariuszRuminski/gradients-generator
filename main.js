const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const info = document.querySelector('.info');
const info2 = document.querySelector('.info_2');
const copy = document.querySelector('.copy');

btn.addEventListener('click', function(){ 
    let rgb_1;
    let rgb_2;
    
        let color_1 = Math.floor(Math.random() * (255+1));
        let color_2 = Math.floor(Math.random() * (255+1));
        let color_3 = Math.floor(Math.random() * (255+1));
        rgb_1 = 'rgb('+color_1+','+color_2+','+color_3+')';
    
        let color_4 = Math.floor(Math.random() * (255+1));
        let color_5 = Math.floor(Math.random() * (255+1));
        let color_6 = Math.floor(Math.random() * (255+1));
        rgb_2 = 'rgb('+color_4+','+color_5+','+color_6+')';
    
    let text = 'linear-gradient(to right, ' + rgb_1 + ', ' + rgb_2+')';
    info.innerText=rgb_1;
    info2.innerText=rgb_2;
    copy.innerText= 'background-image: linear-gradient(to right, '+ rgb_1 + ', ' + rgb_2+');';
    
    box.style.setProperty('background-image',text);
    box.style.setProperty('transition','background-image 1s');
    
});