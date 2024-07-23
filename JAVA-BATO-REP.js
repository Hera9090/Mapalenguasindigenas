var titulo = document.getElementById('title');
var tablaDatos = document.getElementById('tablaDatos');

title.addEventListener('mouseenter', function() {
    tablaDatos.style.display = 'table'; 
});

title.addEventListener('mouseleave', function() {
    tablaDatos.style.display = 'none'; 
});

var titulo = document.getElementById('image');
var tablaDatos = document.getElementById('img-div');

image.addEventListener('mouseenter', function() {
    tablaDatos.style.display = 'figure'; 
});

image.addEventListener('mouseleave', function() {
    tablaDatos.style.display = 'none'; 
});
