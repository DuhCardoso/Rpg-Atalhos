
// SUB-RACE AASIMAR
function Aasimar() {
    const select= document.querySelector("#selectAasimar")

    
    // CAIDO
    if(select.value==1){
        caido.classList.add("view")
    }else {
        caido.classList.remove("view")
    }
    // Flagelado
    if(select.value==2){
        flagelo.classList.add("view")
    }else {
        flagelo.classList.remove("view")
    }
    // Protetor
    if(select.value==3){
        protetor.classList.add("view")
    }else {
        protetor.classList.remove("view")
    }
}

// SUB-RACE ANAO
function Anao() {
    const select= document.querySelector("#selectAnoes")

    
    // CAIDO
    if(select.value==1){
        anaoColina.classList.add("view")
    }else {
        anaoColina.classList.remove("view")
    }
    // Flagelado
    if(select.value==2){
        anaoMontanha.classList.add("view")
    }else {
        anaoMontanha.classList.remove("view")
    }
    // Protetor
    if(select.value==3){
        anaoPronfundezas.classList.add("view")
    }else {
        anaoPronfundezas.classList.remove("view")
    }
}