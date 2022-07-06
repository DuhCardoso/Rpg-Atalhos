
// SUB-RACE AASIMAR
function Aasimar() {
    const select= document.querySelector("#selectAasimar")

    
    // CAIDO
    if(select.value==1){
        document.querySelector("#caido").classList.add("view")
    }else {
        document.querySelector("#caido").classList.remove("view")
    }
    // Flagelado
    if(select.value==2){
        document.querySelector("#flagelo").classList.add("view")
    }else {
        document.querySelector("#flagelo").classList.remove("view")
    }
    // Protetor
    if(select.value==3){
        document.querySelector("#protetor").classList.add("view")
    }else {
        document.querySelector("#protetor").classList.remove("view")
    }
}