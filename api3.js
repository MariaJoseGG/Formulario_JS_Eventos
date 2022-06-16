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
        var trace1 = {
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            mode: 'markers',
            type: 'scatter'
          };
          
          var trace2 = {
            x: [2, 3, 4, 5],
            y: [16, 5, 11, 9],
            mode: 'lines',
            type: 'scatter'
          };
          
          var trace3 = {
            x: [1, 2, 3, 4],
            y: [12, 9, 15, 12],
            mode: 'lines+markers',
            type: 'scatter'
          };
          
          var data = [trace1, trace2, trace3];
          
          Plotly.newPlot('myDiv', data);
    });
