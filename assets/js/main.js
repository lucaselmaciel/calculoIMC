
function calculoImc(){
    const form = document.querySelector('.form');
    
   
    function calculo(event){
        event.preventDefault();
        
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        let imc = Number(peso.value)/(Number(altura.value)**2);
        
        setResultado(`${imc.toFixed(2)}`);
        if (imc < 18.5){
            alert('Você está abaixo do peso');
        }
        else if(imc>=18.5 && imc<24.9){
            alert('Seu peso está normal');
        }
        else if(imc>=25 && imc<29.9){
            alert('Você tem sobrepeso');
        }
        else if(imc>=30 && imc<34.9){
            alert('Obesidade grau 1');
        }
        else if(imc>=35 && imc<39.9){
            alert('Obesidade grau 2');
        }
        else if(imc>=40){
            alert('Obesidade nivel 3');
        }
    }
    form.addEventListener('submit', calculo)

    function setResultado(msg){
        const texto = document.querySelector('.texto');
        texto.innerHTML = '';
        const p = document.createElement('p');
        p.classList.add('paragrafo-resultado');
        p.innerHTML = `IMC = ${msg}`;
        texto.appendChild(p);
    }
}
calculoImc();
