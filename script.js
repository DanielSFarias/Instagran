let picture = document.getElementById('print');


function trocaImagem(){
    

    if(picture.style.opacity == 0){
        picture.style.opacity = 1
    }else{
        picture.style.opacity = 0
    }
    
}

setInterval(function(){
    trocaImagem()
},3000);