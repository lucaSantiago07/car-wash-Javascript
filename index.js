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