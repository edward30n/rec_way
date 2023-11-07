Highcharts.chart('container_boxplot', {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: 'Distribución de las carreteras mas importantes '
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: ['carrera 7', 'Avenida Caracas', 'Autopista Norte', 'Calle 80', 'NQS'],
        title: {
            text: 'Carreteras mas importantes'
        }
    },

    yAxis: {
        title: {
            text: 'Indice'
        },

        //plotLines: [{
        //    value: 3,
        //    color: 'blue',
        //    width: 2,
        //    label: {
        //        text: 'Promedio Teorico',
        //        align: 'center',
        //        style: {
        //            color: 'gray'
        //        }
        //    }
        //}]
    },

    series: [{
        name: 'Indice',
        color: '#496063',
        data: [
            [3.2, 3.5, 4, 4.5, 5],
            [3.2, 3.5, 4, 4.5, 5],
            [3.2, 3.5, 4, 4.5, 5],
            [3.2, 3.5, 4, 4.5, 5],
            [3.2, 3.5, 4, 4.5, 5]
        ],
        tooltip: {
            headerFormat: '<em>muestras {point.key}</em><br/>'
        }
    }, {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, 5],
            [1, 2],
            [2, 1],
            [3, 3]
        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]
    
});

console.log(Highcharts.getOptions().colors[1])