

window.addEventListener('scroll', onScroll)

onScroll()


function onScroll(){
    showBackToTop()
}

// BACK TO TOP


function showBackToTop(){
    if(scrollY > 250){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}