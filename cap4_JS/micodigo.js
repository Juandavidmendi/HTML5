function hacerclic(){
    var lista=document.getElementById('principal').querySelectorAll("p");
    lista[1].onclick=mostraralerta;
}
function mostraralerta(){
    alert('hizo clic');
}
window.onload=hacerclic;

    