const page_dark = document.querySelector('#boton');

page_dark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    page_dark.classList.toggle('active')
});

/*----------------------------POPUP--------------------------------*/

var abrir_popup = document.getElementById('emerge-btn');
var backgroundpopup = document.getElementById('background-popup');
var popup = document.getElementById('popup');
var cerrar_popup = document.getElementById('enlace');

abrir_popup.addEventListener('click', function(){
    backgroundpopup.classList.add('active');
})

cerrar_popup.addEventListener('click', function(){
    backgroundpopup.classList.remove('active');
})