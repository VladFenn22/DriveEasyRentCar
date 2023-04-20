var URLserver = "https://vladfenn22.github.io/PhotosJSON/Photos.json";
window.onload = callService;
var datos;
function callService() {

    $.ajax({
        url: URLserver,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError
    });
}

function onError(jqXHR, textStatus, errorThrown) {
    alert("Mensaje de Error " + errorThrown);
}

function onSuccess(data) {
    datos = data;
    cargarPhotos();

}

function cargarPhotos() {

    let leo = document.getElementById("leo");
    let ana = document.getElementById("ana");
    let jose = document.getElementById("jose");
    let valle = document.getElementById("valle");
    let antony = document.getElementById("antony");
    let noel = document.getElementById("noel");
    let imgLeo;
    let imgAna;
    let imgJose;
    let imgNoel;
    let imgAntony;
    let imgValle;

    datos.reviews.forEach(nombre => {
        if(nombre.nombre == "ana") {
            imgAna = document.createElement("img");
            imgAna.setAttribute("src",nombre.imagen);
            ana.appendChild(imgAna);
        }
        if(nombre.nombre == "leo") {
            imgLeo = document.createElement("img");
            imgLeo.setAttribute("src",nombre.imagen);
            leo.appendChild(imgLeo);
        }
        if(nombre.nombre == "jose") {
            imgJose = document.createElement("img");
            imgJose.setAttribute("src",nombre.imagen);
            jose.appendChild(imgJose);
        }
        if(nombre.nombre == "noel") {
            imgNoel = document.createElement("img");
            imgNoel.setAttribute("src",nombre.imagen);
            noel.appendChild(imgNoel);
        }
        if(nombre.nombre == "antony") {
            imgAntony = document.createElement("img");
            imgAntony.setAttribute("src",nombre.imagen);
            antony.appendChild(imgAntony);
        }
        if(nombre.nombre == "valle") {
            imgValle = document.createElement("img");
            imgValle.setAttribute("src",nombre.imagen);
            valle.appendChild(imgValle);
        }
    });

    
}