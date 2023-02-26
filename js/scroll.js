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
}
menuView();
