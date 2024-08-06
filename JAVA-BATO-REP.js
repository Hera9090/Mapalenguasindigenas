let titulo = document.getElementById('title');
let tablaDatos = document.getElementById('tablaDatos');

title.addEventListener('mouseenter', function() {
    tablaDatos.style.display = 'table'; 
});

title.addEventListener('mouseleave', function() {
    tablaDatos.style.display = 'none'; 
});

let titulo = document.getElementById('image');
let tablaDatos = document.getElementById('img-div');

image.addEventListener('mouseenter', function() {
    tablaDatos.style.display = 'figure'; 
});

image.addEventListener('mouseleave', function() {
    tablaDatos.style.display = 'none'; 
});
