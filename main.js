'use strict';

//scroll
document.querySelector('.navbar-nav').addEventListener('click',function(e){
    e.preventDefault();

    console.log(e.target.getAttribute('href'));
    if(e.target.classList.contains('nav-link')){
        const id=e.target.getAttribute('href');
        if(id!=="#")document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});