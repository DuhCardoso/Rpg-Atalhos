
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

    
    // Anão da Colina
    if(select.value==1){
        anaoColina.classList.add("view")
    }else {
        anaoColina.classList.remove("view")
    }
    // Anão da Montanha
    if(select.value==2){
        anaoMontanha.classList.add("view")
    }else {
        anaoMontanha.classList.remove("view")
    }
    // Anão das Profundezas
    if(select.value==3){
        anaoPronfundezas.classList.add("view")
    }else {
        anaoPronfundezas.classList.remove("view")
    }
}

// ANCESTRAIS DRACONATOS
function Draconato() {
    const select= document.querySelector("#selectAncestral")

    
    // Azul
    if(select.value==1){
        ancestralAzul.classList.add("view")
    }else {
        ancestralAzul.classList.remove("view")
    }
    // Branco
    if(select.value==2){
        ancestralBranco.classList.add("view")
    }else {
        ancestralBranco.classList.remove("view")
    }
    // Bronze
    if(select.value==3){
        ancestralBronze.classList.add("view")
    }else {
        ancestralBronze.classList.remove("view")
    }
    // Cobre
    if(select.value==4){
        ancestralCobre.classList.add("view")
    }else {
        ancestralCobre.classList.remove("view")
    }
    // Latão
    if(select.value==5){
        ancestralLatao.classList.add("view")
    }else {
        ancestralLatao.classList.remove("view")
    }
    // Ouro
    if(select.value==6){
        ancestralOuro.classList.add("view")
    }else {
        ancestralOuro.classList.remove("view")
    }
    // Prata
    if(select.value==7){
        ancestralPrata.classList.add("view")
    }else {
        ancestralPrata.classList.remove("view")
    }
    // Preto
    if(select.value==8){
        ancestralPreto.classList.add("view")
    }else {
        ancestralPreto.classList.remove("view")
    }
    // Verde
    if(select.value==9){
        ancestralVerde.classList.add("view")
    }else {
        ancestralVerde.classList.remove("view")
    }
    // Vermelho
    if(select.value==10){
        ancestralVermelho.classList.add("view")
    }else {
        ancestralVermelho.classList.remove("view")
    }
}

// SUB-RACE ELFO
function Elfo() {
    const select= document.querySelector("#selectElfo")

    
    // Alto Elfo
    if(select.value==1){
        altoElfo.classList.add("view")
    }else {
        altoElfo.classList.remove("view")
    }
    // Eladrin
    if(select.value==2){
        Eladrin.classList.add("view")
    }else {
        Eladrin.classList.remove("view")
    }
    // Elfo Marinho
    if(select.value==3){
        elfoMarinho.classList.add("view")
    }else {
        elfoMarinho.classList.remove("view")
    }
    // Elfo Negro
    if(select.value==3){
        elfoNegro.classList.add("view")
    }else {
        elfoNegro.classList.remove("view")
    }
    // Elfo Silvestre
    if(select.value==3){
        elfoSilvestre.classList.add("view")
    }else {
        elfoSilvestre.classList.remove("view")
    }
    // Shandar-Kai
    if(select.value==3){
        ShandarKai.classList.add("view")
    }else {
        ShandarKai.classList.remove("view")
    }

}

