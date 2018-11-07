const menu = document.querySelector('.options');
const options = document.querySelector('.menu-options');
const colors = document.querySelectorAll('.option')
const links = document.querySelectorAll('.menu-options a');

menu.addEventListener('click', function(){

    options.classList.toggle('menu-options-active');
    
    
    links.forEach(function(a){
        a.addEventListener('click', function(e){
            e.preventDefault();
            
            const kotwica = document.querySelector(a.getAttribute('href'));
            
            for(el of colors){
                el.classList.remove('option-active');
            }
            
            options.classList.remove('menu-options-active');
            kotwica.classList.add('option-active');
        });
    });
    
});

window.addEventListener('resize', function(){
    for(el of links){
        el.style.setProperty('line-height',el.clientHeight+'px');
    }
});
window.addEventListener('load', function(){
    for(el of links){
        el.style.setProperty('line-height',el.clientHeight+'px');
    }
});

