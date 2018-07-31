

document.getElementById('MiFormulario').addEventListener('submit',guardarMarcador);


function guardarMarcador(e) {
    //console.log("Funciona");
    var nombreSitio = document.getElementById('sitioWeb').value;
    var urlSitio = document.getElementById('urlWeb').value;

    var marcador = {
        nombre: nombreSitio,
        url: urlSitio
    }

    if (localStorage.getItem('marcadores') === null) {

        //iniciar el arreglo

        var marcadores = [];

        //agregar el arreglo

        marcadores.push(marcador);

        //guardar en el localstorage

        localStorage.setItem('marcadores', JSON.stringify(marcadores));

    } else {
        var marcadores = JSON.parse(localStorage.getItem('marcadores'));

        //agregar el arreglo

        marcadores.push(marcador);

        //guardar en el localstorage

        localStorage.setItem('marcadores', JSON.stringify(marcadores));


    }

    //resetear el campo formulario

    document.getElementById('MiFormulario').reset();

    //llamar a la funcion  mostrarMarcadores

    mostrarMarcadores();
    e.preventDefault();
}

function mostrarMarcadores () {
    //obtener los favoritos del localstorage

    var marcadores =JSON.parse(localStorage.getItem('marcadores'));

    //guardamos en variable el id  del formulario

    var resultados=document.getElementById('resultados');

    //codigo de salida que muestra los resultados
    resultados.innerHTML='';
    for (var i = 0; i < marcadores.length; i++ ){
        var nombre = marcadores[i].nombre;
        var url = marcadores[i].url;

        resultados.innerHTML += '<div class ="well"> '+
                                   '<h3>'+nombre+
                                   ' <a class="btn btn-success" target="_blank" href=" '+url+' ">Ver Favorito </a> '  +
                                   ' <a onclick="borrarMarcador(\''+url+'\')" class = "btn btn-danger" href="#"> Borrar </a> '
                                   '</h3>'+
                                   '</div>';
    }

}

function borrarMarcador(url) {
    //obtener los marcadores del localstorage
    var marcadores =JSON.parse(localStorage.getItem('marcadores'));

    for (var i = 0; i < marcadores.length; i++) {
        if (marcadores[i].url == url){
            //eliminar el arreglo
            marcadores.splice(i, 1);
        }
    }
    localStorage.setItem('marcadores', JSON.stringify(marcadores));
    mostrarMarcadores();
    
}
function validarForm(nombreSitio , urlSitio) {
    if (!nombreSitio || !urlSitio){
        alert('debe llenar los campos');
        return false;
    }
var expresion =/[-a-zA-z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-z0-9@:%_\+.~#?&//=]*)?/gi;
 var regex=new RegExp(expresion);

    if (!urlSitio.match(regex)){
        alert('debe ingresar una url valida');
        return false ;
    }

    return true ;
}





    



