//Front-end Function Mobile
function openMenuMobile () {
    let menuMobile = document.getElementById('navMobile')
    let classMenuMobile = menuMobile.getAttribute('class') 
    
    let classMenuMobileOpen = classMenuMobile + ' open'
    
    if (classMenuMobile.match('open')) {
        classMenuMobile = classMenuMobileOpen.substring(0,49)
        menuMobile.setAttribute('class',classMenuMobile)
    }
    else {
        menuMobile.setAttribute('class',classMenuMobileOpen)
    }
}

document.getElementById('btnMobile').addEventListener('click', openMenuMobile)


//Front-end Function
function switchSymb (button, text, sizeFont) {
    let scrollDownArrow = document.getElementById(button)
    scrollDownArrow.style.paddingLeft = '2rem'
       scrollDownArrow.innerHTML = text
       scrollDownArrow.style.fontSize = sizeFont
       scrollDownArrow.style.textDecoration = 'none'
       
}

document.getElementById('scrollDownArrow').addEventListener('mouseenter',function() {
    switchSymb ('scrollDownArrow','Scroll Down', '1.2rem')
})


//Front-end Function
function returnSymb (button, fontSize, text) {
    let scrollDownArrow = document.getElementById(button)
    scrollDownArrow.style.fontSize = fontSize    
    scrollDownArrow.innerHTML = text
    
}
 
document.getElementById("scrollDownArrow").addEventListener('mouseleave', function () {
    returnSymb ('scrollDownArrow', '2.2rem', '&#10096&#10096') 
})