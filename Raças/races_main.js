


const Aasimar= () => {
    const input= document.querySelector("inputAasimar")
    const div= document.querySelector("subAasimar")

    if(input=1){
        return div.innerHTML="<h4>Caído</h4><p><strong>Atributo: +1 FOR.</strong> <br><strong>Consumo Radiante:</strong> A partir do nível 3, uma vez por dia pode liberar energia celestial por 1 minuto ou até terminar o efeito com ação bônus. Ao ativar o efeito criaturas a até 3m devem passar em resistência de CAR baseada em CAR ou ficarem Assustadas até o fim do próximo turno. Uma vez por turno causa +nível dano necrótico em um de seus ataques ou magias.</p>"
    }else if(input=2){
        return div.innerHTML="<h4>Flagelo</h4><p><strong>Atributo: +1 CON. </strong><br><strong>Consumo Radiante:</strong> A partir do nível 3, uma vez por dia pode liberar energia celestial por 1 minuto ou até terminar o efeito com ação bônus. Durante o efeito emana luz brilhante a 3m e luz baixa em mais 3m. Ao final de seu turno você e criaturas a até 3m sofrem ½ seu nível como dano radiante, e uma vez por turno causa +nível dano radiante em um de seus ataques ou magias.</p>"
    }else if(input=3){
        return div.innerHTML="<h4>Caído</h4><p><strong>Atributo: +1 FOR.</strong><br><strong>Alma Radiante:</strong> A partir do nível 3, uma vez por dia pode liberar energia celestial por 1 minuto ou até terminar o efeito com ação bônus. Durante o efeito recebe deslocamento de voo 9m, e uma vez por turno causa +nível dano radiante em um de seus ataques ou magias.</p>"
    }
}