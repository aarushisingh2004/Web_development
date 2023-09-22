let searchBtn = document.querySelector( '#search-btn');
let searchBar= document.querySelector('.search-bar-container');

let formBtn = document.querySelector( '#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');

// //register form 
// let formBtn1 = document.querySelector( '#register-btn');
// let registerForm= document.querySelector('.register-form-container');
// let formClose1= document.querySelector('#form-close');

// //end register form


let menu=document.querySelector('#menu-bar');
let navbar=document.querySelectorAll('.navbar');

let videoBtn=document.querySelectorAll('.vid-btn');
 
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    //to make login button active on phone
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    loginForm.classList.remove('active');
    // //for register
    // registerForm.classList.remove('active');
}
// for mobile view
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', ()=>{
    
    loginForm.classList.add('active');
});


// //switching register form
// formBtn1.addEventListener('click', ()=>{
    
//     registerForm.classList.add('active');
// });



formClose.addEventListener('click', ()=>{
    
    loginForm.classList.remove('active');
});

// //registeration close 
// formClose1.addEventListener('click', ()=>{
    
//     loginForm.classList.remove('active');
// });




 
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src= src;

    });


});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    
});