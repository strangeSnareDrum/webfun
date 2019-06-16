function plotData() {
		var ctx = document.getElementById('myChart').getContext('2d');

		var chart = new Chart(ctx, {
		   type: 'scatter',
		   data: {
		      datasets: [{
		         data: [{
		            x: 1,
		            y: 1
		         }, {
		            x: 3,
		            y: 7
		         }, {
		            x: 16,
		            y: 5
		         }],
		         borderColor: 'red',
		         borderWidth: 2,
		         pointBackgroundColor: ['black', 'black'],
		         pointBorderColor: ['black', 'black'],
		         pointRadius: 2,
		         pointHoverRadius: 5,
		         fill: false,
		         tension: 0,
		         showLine: true
		      }]
		   },
		   options: {
		      legend: false,
		      tooltips: false,
		      scales: {
		         xAxes: [{
		            ticks: {
		               min: 0,
		               max: 20
		            },
		            gridLines: {
		               color: 'grey',
		               drawOnChartArea: true
		            }
		         }],
		         yAxes: [{
		            ticks: {
		               min: 0,
		               max: 8,
		               padding: 10
		            },
		            gridLines: {
		               color: 'grey',
		               drawOnChartArea: true
		            }
		         }]
		      }
		   }
		});	
}