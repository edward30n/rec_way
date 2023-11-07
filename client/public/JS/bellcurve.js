var data1 = [
    [3,0],
    [3,1],
    [3,2],
    [3,3],
    [3,4],
    [3,5]    
];

Highcharts.chart('container_general', {

    title: {
        text: 'Distribución del Indice General'
    },

    xAxis: [{
        title: {
            text: 'Indice General'
        },
        alignTicks: false
    }, {
        title: {
            text: 'distribución estandar'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'cantidad' }
    }, {
        title: { text: 'distribución estandar' },
        opposite: true
    }],

    series: [{
        name: 'desviación estandar',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1,
        color: 'black'
    }, {
        name: 'IRI',
        type: 'scatter',
        data: data1,
        accessibility: {
            exposeAsGroupOnly: false
        },
        marker: {
            radius: 4
        }
    }]
});

Highcharts.chart('container_IRI', {

    title: {
        text: 'Distribución del IRI'
    },

    xAxis: [{
        title: {
            text: 'IRI'
        },
        alignTicks: false
    }, {
        title: {
            text: 'distribución estandar'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'cantidad' }
    }, {
        title: { text: 'distribución estandar' },
        opposite: true
    }],

    series: [{
        name: 'desviación estandar',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1
    }, {
        name: 'IRI',
        type: 'scatter',
        data: data1,
        accessibility: {
            exposeAsGroupOnly: false
        },
        marker: {
            radius: 4
        }
    }]
});

Highcharts.chart('container_az', {

    title: {
        text: 'Distribución del Indice Az'
    },

    xAxis: [{
        title: {
            text: 'Indice Az'
        },
        alignTicks: false
    }, {
        title: {
            text: 'distribución estandar'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'cantidad' }
    }, {
        title: { text: 'distribución estandar' },
        opposite: true
    }],

    series: [{
        name: 'desviación estandar',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1,
        color: 'red'
    }, {
        name: 'Indice Az',
        type: 'scatter',
        data: data1,
        accessibility: {
            exposeAsGroupOnly: false
        },
        marker: {
            radius: 4
        }
    }]
});

Highcharts.chart('container_ax', {

    title: {
        text: 'Distribución del Indice Ax'
    },

    xAxis: [{
        title: {
            text: 'Indice Ax'
        },
        alignTicks: false
    }, {
        title: {
            text: 'distribución estandar'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'cantidad' }
    }, {
        title: { text: 'distribución estandar' },
        opposite: true
    }],

    series: [{
        name: 'desviación estandar',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1,
        color: 'yellow'
    }, {
        name: 'Indice Ax',
        type: 'scatter',
        data: data1,
        accessibility: {
            exposeAsGroupOnly: false
        },
        marker: {
            radius: 4
        }
    }]
});

Highcharts.chart('container_wx', {

    title: {
        text: 'Distribución del Indice Wx'
    },

    xAxis: [{
        title: {
            text: 'Indice Wx'
        },
        alignTicks: false
    }, {
        title: {
            text: 'distribución estandar'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'Cantidad' }
    }, {
        title: { text: 'distribución estandar' },
        opposite: true
    }],

    series: [{
        name: 'desviación estandar',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1,
        color: 'green'
    }, {
        name: 'Indice Wx',
        type: 'scatter',
        data: data1,
        accessibility: {
            exposeAsGroupOnly: false
        },
        marker: {
            radius: 4
        }
    }]
});