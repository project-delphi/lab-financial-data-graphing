const coindeskUrl = "http://api.coindesk.com/v1/bpi/historical/close.json"

window.onload = function() { 
    const ctx = document.getElementById("canvas").getContext("2d")
    const axios_data = axiosCall(coindeskUrl)
    window.myLine = new Chart(ctx, configData(axios_data))
}

const axiosCall = (my_url) => {
  axios.get(my_url)
    .then(response => {
      return response.bpi
    })
    .catch(err => {
      err ? console.log(err)
    })
}
 const configData = (obj) => {
  const {keys, values} = Object.entries(obj)
  const config = {
      type: 'line',
      data: {
          labels: [keys],
          datasets: [{
              label: "My First dataset",
              backgroundColor: window.chartColors.red,
              borderColor: window.chartColors.red,
              data: [values],
              fill: false,
          }]
      },
      options: {
          responsive: true,
          title:{
              display:true,
              text:'Chart.js Line Chart'
          },
          tooltips: {
              mode: 'index',
              intersect: false,
          },
          hover: {
              mode: 'nearest',
              intersect: true
          },
          scales: {
              xAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Date'
                  }
              }],
              yAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Value'
                  }
              }]
          }
      }
  }
 return config
}
