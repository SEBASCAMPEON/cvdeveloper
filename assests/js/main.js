console.log("Hola estoy desde un archivo externo");

let doc = document.querySelector(".container");
console.log(doc);

let docs = document.querySelectorAll("a");
//Recorremos el array que devuelve querySelectorAll con forEach
docs.forEach(function (docs) {
    console.log(docs)
});
//querySelector lo que hace es recorrer el DOM y devolver el resultado
//luego vemos que hacer con eso que nos devuelve.
let rowstable = document.querySelectorAll("td");
rowstable.forEach(function (td) {
    td.addEventListener('click', function () {
        console.log(this);
    });
});

let close = document.querySelectorAll(".close");
console.log(close);
//Recorrerlos

close.forEach(function (close) {
    //Agregar un evento click a cada uno de ellos
    close.addEventListener('click', function (ev) {
        //con prevent Default le decimos al navegador que no ejecute la acción
        ev.preventDefault();
        let animaciones = document.querySelector(".content");
        console.log(animaciones);
        animaciones.classList.remove("animate__bounce");
        animaciones.classList.remove("animate__animated");
        animaciones.classList.add("animate__animated");
        animaciones.classList.add("animate__fadeOutUp");
        setTimeout(function () {
            location.href = "/";
        }, 1500);

    })
});

//quitar clases de animacion que tiene
let animacion = document.querySelector(".animate__fadeInDown");
console.log(animacion);
animacion.addEventListener('click', function () {
    animacion.classList.remove("animate__fadeInDown");
    animacion.classList.remove("animate__animated");
    animacion.classList.add("animate__animated");
    animacion.classList.add("animate__bounce");
});



//poner otra clases nuevas






