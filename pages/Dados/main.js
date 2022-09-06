//==== DADOS.html ============================


const dice = (n) => {
    let diceType = n
    let nD= nDados.value


    // Erro alert
    if(nD <= 0){
        return result.innerHTML = "<h2>" + "Quantidade de dados invelida" + "</h2>"
    }

    
    // Rolagem do dado
    function roll(i){
            
        let dSomas=+ mod.value +(Math.floor(Math.random() *diceType +1))
        


        // Result
        if(!(dSomas -mod.value == diceType || dSomas -mod.value == 1) && i==0){
            resultado = `<div><img src="./media/d20.png" alt="imagem de um dado de 20 lados"><h2> ${dSomas} </h2></div>`
        } // Result Crit
        else if((dSomas -mod.value == diceType || dSomas -mod.value == 1)&& i==0){
            resultado = `<div><img src="./media/d20.png" alt="imagem de um dado de 20 lados"><h2 style='color: red;'> ${dSomas} </h2></div>`
        }

        // Result
        if(!(dSomas -mod.value == diceType || dSomas -mod.value == 1) && i>=1){
            resultado += `<div><img src="./media/d20.png" alt="imagem de um dado de 20 lados"><h2> ${dSomas} </h2></div>`
        } // Result Crit
        else if((dSomas -mod.value == diceType || dSomas -mod.value == 1) && i>=1){
            resultado += `<div><img src="./media/d20.png" alt="imagem de um dado de 20 lados"><h2 style='color: red;'> ${dSomas} </h2></div>`
        }

        console.log(resultado)
        result.innerHTML = resultado
    }

    for(let i= 0; i<nD; i++){
        let resultado
        roll(i)
    }
}
dice(20)

// "<div>"+'<img src="./media/d20.jpg" alt="imagem de um dado de 20 lados">'+"<h2 style='color: red;'>" + dSomas + "</h2>">+"</div>"



// function rollDice() {
//     return Math.floor(Math.random() * 6);
//   }
// for(let i = 0; i < 7; i++){ 
//     console.log(rollDice());
// }

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
