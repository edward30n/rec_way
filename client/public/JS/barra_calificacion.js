Highcharts.setOptions({
    chart: {
        inverted: true,
        marginLeft: 10,
        type: 'bullet'
    },
    title: {
        text: null
    },
    legend: {
        enabled: false
    },
    yAxis: {
        gridLineWidth: 0
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderWidth: 0,
            color: '#C0C0C0',
            targetOptions: {
                width: '200%'
            }
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});
Highcharts.chart('container_barra', {
    chart: {
        marginTop: 40,
        backgroundColor:'#F3F3F3'
    },
    title: {
        text: 'calificación Indice General'
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">Indice General</span><br/> de 0 a 5']
    },
    yAxis: {
        plotBands: [{
            from: 0,
            to: 1,
            color: 'red'
        }, {
            from: 1,
            to: 2,
            color: 'orange'
        }, {
            from: 2,
            to: 3,
            color: 'yellow'
        },
        {
            from: 3,
            to: 4,
            color: '#B5E61D'
        },
        {
            from: 4,
            to: 5,
            color: 'green'
        },{
            from: 5,
            to: 6,
            color: 'white'
        }],
        title: null
    },
    series: [{
        data: [{
            y: 4.5,
            target: 0
        }]
    }],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (con un valor objetivo de {point.target})'
    }
});


Highcharts.chart('container_barra_IRI', {
    chart: {
        marginTop: 40,
        backgroundColor:'#F3F3F3'
    },
    title: {
        text: 'calificación IRI'
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">IRI</span><br/> de 0 a 5']
    },
    yAxis: {
        plotBands: [{
            from: 0,
            to: 1,
            color: 'red'
        }, {
            from: 1,
            to: 2,
            color: 'orange'
        }, {
            from: 2,
            to: 3,
            color: 'yellow'
        },
        {
            from: 3,
            to: 4,
            color: '#B5E61D'
        },
        {
            from: 4,
            to: 5,
            color: 'green'
        },{
            from: 5,
            to: 6,
            color: 'white'
        }],
        title: null
    },
    series: [{
        data: [{
            y: 4.5,
            target: 0
        }]
    }],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (con un valor objetivo de {point.target})'
    }
});

Highcharts.chart('container_barra_az', {
    chart: {
        marginTop: 40,
        backgroundColor:'#F3F3F3'
    },
    title: {
        text: 'calificación Indice Az'
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">IRI</span><br/> de 0 a 5']
    },
    yAxis: {
        plotBands: [{
            from: 0,
            to: 1,
            color: 'red'
        }, {
            from: 1,
            to: 2,
            color: 'orange'
        }, {
            from: 2,
            to: 3,
            color: 'yellow'
        },
        {
            from: 3,
            to: 4,
            color: '#B5E61D'
        },
        {
            from: 4,
            to: 5,
            color: 'green'
        },{
            from: 5,
            to: 6,
            color: 'white'
        }],
        title: null
    },
    series: [{
        data: [{
            y: 4.5,
            target: 0
        }]
    }],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (con un valor objetivo de {point.target})'
    }
});

Highcharts.chart('container_barra_ax', {
    chart: {
        marginTop: 40,
        backgroundColor:'#F3F3F3'
    },
    title: {
        text: 'calificación Indice Ax'
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">IRI</span><br/> de 0 a 5']
    },
    yAxis: {
        plotBands: [{
            from: 0,
            to: 1,
            color: 'red'
        }, {
            from: 1,
            to: 2,
            color: 'orange'
        }, {
            from: 2,
            to: 3,
            color: 'yellow'
        },
        {
            from: 3,
            to: 4,
            color: '#B5E61D'
        },
        {
            from: 4,
            to: 5,
            color: 'green'
        },{
            from: 5,
            to: 6,
            color: 'white'
        }],
        title: null
    },
    series: [{
        data: [{
            y: 4.5,
            target: 0
        }]
    }],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (con un valor objetivo de {point.target})'
    }
});

Highcharts.chart('container_barra_wx', {
    chart: {
        marginTop: 40,
        backgroundColor:'#F3F3F3'
    },
    title: {
        text: 'calificación Indice Wx'
    },
    xAxis: {
        categories: ['<span class="hc-cat-title">IRI</span><br/> de 0 a 5']
    },
    yAxis: {
        plotBands: [{
            from: 0,
            to: 1,
            color: 'red'
        }, {
            from: 1,
            to: 2,
            color: 'orange'
        }, {
            from: 2,
            to: 3,
            color: 'yellow'
        },
        {
            from: 3,
            to: 4,
            color: '#B5E61D'
        },
        {
            from: 4,
            to: 5,
            color: 'green'
        },{
            from: 5,
            to: 6,
            color: 'white'
        }],
        title: null
    },
    series: [{
        data: [{
            y: 4.5,
            target: 0
        }]
    }],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (con un valor objetivo de {point.target})'
    }
});



