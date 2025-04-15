function calcular(){
    let element1 = document.getElementById("number1");
    let element2 = document.getElementById("number2");
    let MultiplosDe5 = [];
    let NaoMultiplosDe5 = [];


    if((element1 instanceof HTMLInputElement) && (element2 instanceof HTMLInputElement)){
        let number1 = parseInt(element1.value);
        let number2 = parseInt(element2.value);

        if(!isNaN(number1) && !isNaN(number2)){
            
            for(let i = number1; i <= number2; i++){
                if(i % 5 === 0){
                    MultiplosDe5.push(i);
                    let tamanho = (MultiplosDe5.length);
                    // exibirResultado(tamanho);
                    console.log(tamanho);
                }else{
                    NaoMultiplosDe5.push(i);
                }
            }
        }else{
            alert("Digite um valor válido como 10 ou 3")
        }
    }else{
        alert("Erro, tente novamente")
    }   
}

// function exibirResultado(tamanho){
//     document.getElementById("output"). = tamanho;
// }

// SAIDA EM CONSOLE

