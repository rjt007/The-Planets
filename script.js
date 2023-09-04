let btn01 = document.getElementById('btn-01');
let btn02 = document.getElementById('btn-02');
let btn03 = document.getElementById('btn-03');

let content01 = document.getElementById('content-01');
let content02 = document.getElementById('content-02');
let content03 = document.getElementById('content-03');


// BUTTON-CLICK 
btn01.addEventListener('click',()=>{
    content02.style.display = 'none';
    content03.style.display = 'none';
    content01.style.display = 'block';
    btn01.style.backgroundColor = 'blueviolet';
    btn02.style.backgroundColor = 'transparent';
    btn03.style.backgroundColor = 'transparent';
})

btn02.addEventListener('click',()=>{
    content01.style.display = 'none';
    content03.style.display = 'none';
    content02.style.display = 'block';
    btn02.style.backgroundColor = 'blueviolet';
    btn01.style.backgroundColor = 'transparent';
    btn03.style.backgroundColor = 'transparent';
})

btn03.addEventListener('click',()=>{
    content01.style.display = 'none';
    content02.style.display = 'none';
    content03.style.display = 'block';
    btn03.style.backgroundColor = 'blueviolet';
    btn01.style.backgroundColor = 'transparent';
    btn02.style.backgroundColor = 'transparent';
})


//BURGER-MENU
let burgerIcon = document.getElementById('brgr-icon');
let sideMenu = document.getElementById('mobile-menu');
let btnclose = document.getElementById('btnclose');
burgerIcon.addEventListener('click',()=>{
    sideMenu.style.display='inline-block';
})
btnclose.addEventListener('click', ()=>{
    sideMenu.style.display='none';
})

