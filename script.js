let menuShow = document.querySelector('.menu-responsive')

function menuResponsive() {
    if(menuShow.classList.contains('open'))
        menuShow.classList.remove('open')
    else(menuShow.classList.add('open'))
}