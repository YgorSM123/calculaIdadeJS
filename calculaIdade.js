function calculaIdade(anoDeNascimento, anoAtual ){
    if (anoDeNascimento <= anoAtual ){ 
        let resultado=anoAtual-anoDeNascimento;
        return "você tem "+ resultado+ " anos de idade"

      }
    return "As datas informadas não batem, Como isso é possível?!";
 }
 console.log (calculaIdade(2002,2023));
 console.log (calculaIdade(1961,2023));
 console.log (calculaIdade(2000,1990));