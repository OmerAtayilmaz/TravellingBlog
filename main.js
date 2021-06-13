'use strict';

//scroll
document.querySelector('.navbar-nav').addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav-link')){
       const  id=e.target.getAttribute('href');
        if(id!=="#")document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
});

//
const signUpButton=document.getElementById('signUp');
const signInButton=document.getElementById('signIn');
const container=document.getElementById('container');


signUpButton.addEventListener('click',()=>container.classList.add('right-panel-active'));
signInButton.addEventListener('click',()=>container.classList.remove('right-panel-active'));