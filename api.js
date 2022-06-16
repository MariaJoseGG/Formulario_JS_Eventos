var fecha = [];
var total = [];

let url = 'https://www.datos.gov.co/resource/4wtf-sdh2.json'
//'https://www.datos.gov.co/resource/urxn-xehk.json'
//'https://www.datos.gov.co/resource/7cci-.json'
fetch(url)
    .then(respuesta => respuesta.json())
    //.then(data=>{console.log(data);})
    .then(function transformar(respuesta) {
        //iteramos sobre cada dato
        respuesta.forEach(function agregar(respuesta) {
            //si los datos son diferentes de vacio
            if (respuesta.a_o != undefined && respuesta.total != undefined) {
                total.push(respuesta.total);
                fecha.push(respuesta.a_o);
            }
        });


        //variables para la grafica
        var graf1 =
        {
            y: total,
            x: fecha,
            type: 'bar',
            marker:{
                color: 'pink'
            }
        };
        var datosGraficas = [graf1];

        //estilos de la grafica

        var layout = {
            title: 'inventario de Ganado Bovino - DEPARTAMENTO DE BOYACA',
            font:{
                family: 'Times New Roman'
              },
            xaxis:
            {
                title: 'Año'
            },
            yaxis:
            {
                title: 'Cabezas de Ganado'
            }
        };
        Plotly.newPlot('myDiv', datosGraficas, layout);
    });


