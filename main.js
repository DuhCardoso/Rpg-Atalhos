
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


const d4 = () => {
    let dSomas= 0
    let nD= nDados.value 

    // Error alert
    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *4 +1))
    }

    // Critico
    if(dSomas -mod.value == 4 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}
const d6 = () => {
    let dSomas= 0
    let nD= nDados.value 

    // Error alert
    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *6 +1))
    }

    // Critico
    if(dSomas -mod.value == 6 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}
const d8 = () => {
    let dSomas= 0
    let nD= nDados.value 

    // Error alert
    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *8 +1))
    }

    // Critico
    if(dSomas -mod.value == 8 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}
const d10 = () => {
    let dSomas= 0
    let nD= nDados.value 

    // Error alert
    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *10 +1))
    }

    // Critico
    if(dSomas -mod.value == 10 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}
const d12 = () => {
    let dSomas= 0
    let nD= nDados.value 

    // Error alert
    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *12 +1))
    }

    // Critico
    if(dSomas -mod.value == 12 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}
const d20 = () => {
    let dSomas= 0
    let nD= nDados.value
    
    // Erro alert
    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *20 +1))
    }

    // Critico
    if(dSomas -mod.value == 20 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}
const d100 = () => {
    let dSomas= 0
    let nD= nDados.value 

    if(nD <= 0){
        return result.innerHTML = "<h3>" + "Quantidade de dados invelida" + "</h3>"
        
    }
    
    // Rolagem do dado
    for(let i=0; i < nD; i++){
        dSomas =+ mod.value +(Math.floor(Math.random() *100 +1))
    }

    // Critico
    if(dSomas -mod.value == 100 || dSomas -mod.value == 1){
        return result.innerHTML = "<h2 style='color: red;'>" + dSomas + "</h2>"
    }

    return result.innerHTML = "<h2>" + dSomas + "</h2>"
}

