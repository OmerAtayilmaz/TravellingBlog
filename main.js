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


//reader
const readBtn=document.getElementById("readBtn");
const reader=document.getElementById("reader");
const closeReaderBtn=document.getElementById("closeBtn");
readBtn.addEventListener('click',function(){
    reader.classList.toggle("d-none");
}); 
closeReaderBtn.addEventListener('click',function(){
    reader.classList.toggle("d-none");
}); 