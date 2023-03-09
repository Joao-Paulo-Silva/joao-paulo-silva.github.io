function menuView(){
    let tamanhoSobre = document.getElementById("sobre").getBoundingClientRect().y;
    if (document.body.scrollTop < tamanhoSobre || document.documentElement.scrollTop < tamanhoSobre){
        document.getElementById("menuID").style = 'visibility: hidden;';
    }else{
        document.getElementById("menuID").style = 'visibility: visible;';
    }
}
window.onscroll = function () {
    menuView();
    if ((document.body.scrollTop > document.getElementById("sobre").getBoundingClientRect().y-2 || document.documentElement.scrollTop > document.getElementById("sobre").getBoundingClientRect().y-2) && 
    (document.body.scrollTop < document.getElementById("projetos").getBoundingClientRect().y || document.documentElement.scrollTop < document.getElementById("projetos").getBoundingClientRect().y) ){
        document.getElementById('linkSobre').style = 'color: #e25f71; pointer-events: none;';
        document.getElementById('linkProj').style = 'color: #f4f4f4; pointer-events: all;';
        document.getElementById('linkHab').style = 'color: #f4f4f4; pointer-events: all;';
    }else if ((document.body.scrollTop > document.getElementById("projetos").getBoundingClientRect().y || document.documentElement.scrollTop > document.getElementById("projetos").getBoundingClientRect().y) &&
    (document.body.scrollTop < document.getElementById("habilidades").getBoundingClientRect().y || document.documentElement.scrollTop < document.getElementById("habilidades").getBoundingClientRect().y)){
        document.getElementById('linkProj').style = 'color: #e25f71; pointer-events: none;';

        document.getElementById('linkSobre').style = 'color: #f4f4f4; pointer-events: all;';
        document.getElementById('linkHab').style = 'color: #f4f4f4; pointer-events: all;';

    }else{
        document.getElementById('linkHab').style = 'color: #e25f71; pointer-events: none;';

        document.getElementById('linkSobre').style = 'color: #f4f4f4; pointer-events: all;';
        document.getElementById('linkProj').style = 'color: #f4f4f4; pointer-events: all;';
    }
}
menuView();
