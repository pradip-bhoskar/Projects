
const chart = document.querySelector("#chart").getContext('2d');

//create a new chart instance

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Bitcoin',
                data: [45575, 46555, 44564, 49545, 45575, 46555,
                    44545, 41575, 46555, 52545, 45575, 48565],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'Ethereum',
                data: [14545, 15575, 16555, 14564, 18545, 15575,
                    16555, 14545, 15575, 16555, 14564, 15876],
                borderColor: 'yellow',
                borderWidth: 2
            },
            {
                label: 'Rupee',
                data: [4564, 4545, 5575, 6555, 4564,
                    5575, 6555, 4564, 4545, 5575, 6555, 7646],
                borderColor: 'black',
                borderWidth: 2
            },

        ]
    },
    options: {
        responsive: true
    }
})