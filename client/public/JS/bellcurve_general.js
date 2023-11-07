var data1 = [
    [3,0],
    [3,1],
    [3,2],
    [3,3],
    [3,4],
    [3,5]    
];

Highcharts.chart('container_septima', {

    title: {
        text: 'Distribución del Indice General en la Carrera 7'
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
        color: '#86CEFA'
    }, {
        name: 'Indice General',
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

Highcharts.chart('container_caracas', {

    title: {
        text: 'Distribución del Indice General en la Carrera 7'
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
        color: '#CCCCFE'
    }, {
        name: 'Indice General',
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

Highcharts.chart('container_norte', {

    title: {
        text: 'Distribución del Indice General en la Carrera 7'
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
        color: '#308CE6'
    }, {
        name: 'Indice General',
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
Highcharts.chart('container_80', {

    title: {
        text: 'Distribución del Indice General en la Carrera 7'
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
        color: '#9ED4D0'
    }, {
        name: 'Indice General',
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


Highcharts.chart('container_NQS', {

    title: {
        text: 'Distribución del Indice General en la Carrera 7'
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
        color: '#B2FEFE'
    }, {
        name: 'Indice General',
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


