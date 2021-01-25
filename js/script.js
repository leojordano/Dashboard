const searchBox = document.querySelector('#search-box svg')

searchBox.addEventListener('click', (e) => {
    let input = document.querySelector('#search-box input')
    input.style.display = 'block'
    
    setTimeout(() => {
        input.style.width = '166px'
    }, 0)
})

var ctx = document.getElementsByClassName('line-chart')
const chart = document.getElementsByClassName('chart')

// chart.canvas.parentNode.style.height = '128px';
// chart.canvas.parentNode.style.width = '128px';

var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
        datasets: [{
            label: 'Today',
            data: [
                {x: 0, y:12},
                {x: 5, y:25},
                {x: 10, y:52},
                {x: 12, y:12},
                {x: 15, y:38},
                {x: 17, y:42},
                {x: 19, y:48},
                {x:22, y: 38}
            ],
            borderColor: 'rgba(55, 81, 255, 1)',
        },{
        label: 'Yesterday',
        data: [
            {x: 0, y:32},
            {x: 5, y:20},
            {x: 10, y:29},
            {x: 12, y:12},
            {x: 15, y:40},
            {x: 17, y:35},
            {x: 19, y:38},
            {x:22, y: 39}
        ],
        borderColor: 'rgba(187, 187, 196, 1)'
    }],
    },
    options: {
        major: {
            enabled: true
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    max: 60,
                    min: 0,
                    stepSize: 10
                }
            }],

            xAxes: {
                ticks: {
                    max: 22,
                    min: 0,

                }
            }
        },
        
    }
})