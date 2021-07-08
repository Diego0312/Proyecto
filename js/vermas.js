function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none";    
    document.getElementById("chao").style.display="none";
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    document.getElementById("chao").style.display="inline";
    }
    }

    function perfil(id){
        if(id=="mas2"){
        document.getElementById("bajar").style.display="block";   
        document.getElementById("mas1").style.display="none";    
        document.getElementById("quitar").style.display="none";
        }
        else{
        document.getElementById("bajar").style.display="none";
        document.getElementById("mas1").style.display="inline";
        document.getElementById("quitar").style.display="inline";
        }
        }