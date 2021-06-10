function MaiorNum(){

    var n1= parseInt(document.getElementById("n1").value);

    var n2= parseInt(document.getElementById("n2").value);

    var resultado = document.getElementById("Resultado");

    if(n1>n2){
    
        resultado.innerHTML= n1 + "maior"+ n2+"menor";
    }
    else if(n2>n1){
        
        resultado.innerHTML= n2 +"maior"+ n1+ "menor";
    }

    else{

      resultado.innerHTML="Nao definido";
    }
         
      
}