function insert(num){
let numero =document.getElementById('telinha').innerHTML;
document.getElementById('telinha').innerHTML = numero +num
}

function clean(){
    document.getElementById('telinha').innerHTML= '';
    document.getElementById('resultado').innerHTML= '';
}

function back(){
    let resultado = document.getElementById('telinha').innerHTML;
    document.getElementById('telinha').innerHTML = resultado.substring(0 ,resultado.length -1)
}

function resulteded(){
    let resultad = document.getElementById('telinha').innerHTML;
    if(resultad){
  document.getElementById('resultado').innerHTML = eval(resultad);
  document.getElementById('telinha').innerHTML = resultad;
    }
}