
//==== ALL ============================
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



//==== DADOS.html ============================


class Dado{
    constructor(mod, dados){
        this.mod= mod
        this.dados= dados
    }
    dices(){
        let dSomas= 0

        for(let i=-1; i >= this.dados; i++){
            return dSomas += this.mod
        }

        return dSomas
    }
}
let d20 = new Dado(3, 1)

console.log(d20.dices())