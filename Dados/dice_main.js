//==== DADOS.html ============================

for(let i = 0; i >= 10; i++){
    // codigo
    console.log(i) // console: 1;  2;  3;  4;  5;  6;  7;  8;  9;  10
}

const dice = (n) => {
    let dadoType = n
    let nD= nDados.value


    // Erro alert
    if(nD <= 0){
        return result.innerHTML = "<h2>" + "Quantidade de dados invelida" + "</h2>"
    }

    
    // Rolagem do dado
    let i = 0
    try{
        while(i < nD){
        let dSomas=+ mod.value +(Math.floor(Math.random() *n +1))
        let resultado

        // Result
        if(i == 0){
            resultado = result.innerHTML = "<div>" + '<img src="./media/d20.jpg" alt="imagem de um dado de 20 lados">'+"<h2>" + dSomas + "</h2>" + "</div>"
        }else if(i>=1){ // Mais de 1 dado
            resultado = result.innerHTML = +"<div>" + '<img src="./media/d20.jpg" alt="imagem de um dado de 20 lados">'+"<h2>" + dSomas + "</h2>" + "</div>"
        }

        // Result Crit
        if((dSomas -mod.value == n || dSomas -mod.value == 1) && i==0){
            resultado = result.innerHTML = "<div>" + '<img src="./media/d20.jpg" alt="imagem de um dado de 20 lados">'+"<h2 style='color: red;'>" + dSomas + "</h2>" + "</div>"
        
        }else if((dSomas -mod.value == n || dSomas -mod.value == 1) && i>=1){
            resultado = result.innerHTML = +"<div>" + '<img src="./media/d20.jpg" alt="imagem de um dado de 20 lados">'+"<h2 style='color: red;'>" + dSomas + "</h2>" + "</div>"
        }

        i++
        return resultado
    }} catch{
        e => {console.log(e)}
    }
}










/* 
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
        return result.innerHTML = '<img src="./media/d20.jpg" alt="imagem de um dado de 20 lados">'+"<h2 style='color: red;'>" + dSomas + "</h2>"
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
*/
