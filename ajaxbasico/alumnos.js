var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno/"
//2ª Parte
function guardarDatos()
{
    var obj = {
        nombre: document.getElementById("txtNom").value,
        nombre: document.getElementById("txtApe").value,
        nombre: document.getElementById("txtEda").value,
        nombre: document.getElementById("txtNot").value,

    };

    var ajax = new XMLHttpRequest();
    //inicia la comunicacio con el servidor con el metodo get para escribir con post
    ajax.open("post", url);
    //manda una cabecera de peticion adicional en formao JSON
    ajax.setRequestHeader("Content-Type", "application / json")

    ajax.onreadystatechange = function () {
        if (ajax.readyState ==4) {
            if (ajax.status >= 200 && ajax.status < 300){
                obtenerdatos();
            }
            else {
                alert("Error");
            }

        }
    }

    //
    var data =JSON.stringify(obj);
    ajax.send(data);




}
//FIN DE LA 2ª PARTE


function obtenerdatos()
{
    //crear el objeto ajax
    var ajax = new XMLHttpRequest();
    //inicia la comunicacio con el servidor con el metodo get para obtener
    ajax.open("get", url);

    //cada vez que cambie de esstado, es un evento
     ajax.onreadystatechange = function ()
    {
        //devuelve el estado del objeto, en que estado se encuentra
         if (ajax.readyState == 4) 
         {
             if (ajax.status >= 200 && ajax.status < 300){
                //coge texto y convierte en cadena java Script con JSON.parse
                var data =JSON.parse(ajax.responseText);
                //ahora que data es un array entonces pintamos la tabla
                var salida= "<table>";
                for (var i=0; i<data.lenght; i++)
                {
                    salida += "<tr>";
                    salida += "<td>" + data[i].nombre + "</td>";
                    salida += "<td>" + data[i].edad + "</td>";
                    salida += "<tr>";
                
                }
                salida += "<table>";
                document.getElementById("alumnos").innerHTML=salida;
            }
            else
                {
                alert("Error en la Aplicacion");
                console.log(resultado.error);
                }

            }
        }

   
    //en esta funcion envia
    ajax.send(null);
}

//cuando arranque llame a esta funcion
obtenerdatos()
//en este apartado al dar click 
document.getElementById("btnEnviar").onclick=guardarDatos;


