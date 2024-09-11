const navIconElt = document.querySelector('nav__icon'); 
const navCloseElt = document.querySelector('nav__close'); 
const navList = document.querySelector('nav__list'); 
const navBgOverlayElt = document.querySelector('nav__bgOverlay'); 

const navOpen = () => {
    navList.classList.add('show'); 
    navBgOverlayElt.classList.add('active'); 
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;'; 
}
if(navIconElt){ // to try to prevent errors, does not work 
    navIconElt.addEventListener('click', () => {
        console.log('btn clicked');
    });
}
const navClose = () => {
    navList.classList.remove('show'); 
    navBgOverlayElt.classList.remove('active'); 
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;'; 
}

if(navIconElt){ // condition to only execute if there is an elt, no error but it does not work
    navIconElt.addEventListener('click', navOpen); 
}
if(navCloseElt){
    navCloseElt.addEventListener('click', navClose); 
}
if(navBgOverlayElt){
    navBgOverlayElt.addEventListener('click', navClose); 
}

// aos
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom' 
})