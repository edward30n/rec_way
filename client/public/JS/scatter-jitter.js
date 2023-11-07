// Generate test data with discrete X values and continuous Y values.
const getTestData = x => {
    const off = 0.2 + 0.2 * Math.random();
    return new Array(200).fill(1).map(() => [
        x,
        off + (Math.random() - 0.5) * (Math.random() - 0.5)
    ]);
};

// Make all the colors semi-transparent so we can see overlapping dots
const colors = Highcharts.getOptions().colors.map(color =>
    Highcharts.color(color).setOpacity(0.5).get()
);

Highcharts.chart('container_scatter', {
    chart: {
        type: 'scatter'
    },

    colors,

    title: {
        text: 'distribución de los tipos de carretera'
    },

    xAxis: {
        categories: ['Autopistas', 'Primaria', 'Secundaria', 'Terciaria', 'Residencial']
    },

    yAxis: {
        title: {
            text: 'Indice'
        }
    },

    plotOptions: {
        scatter: {
            showInLegend: false,
            jitter: {
                x: 0.24,
                y: 0
            },
            marker: {
                radius: 2,
                symbol: 'circle'
            },
            tooltip: {
                pointFormat: 'Measurement: {point.y:.3f}'
            }
        }
    },

    series: [{
        name: 'Autopistas',
        data: getTestData(0)
    }, {
        name: 'Primaria',
        data: getTestData(1)
    }, {
        name: 'Secundaria',
        data: getTestData(2)
    }, {
        name: 'Terciaria',
        data: getTestData(3)
    }, {
        name: 'Residencial',
        data: getTestData(4)
    }]
});