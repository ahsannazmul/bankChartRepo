
const ctx = document.getElementById('myChart');

const chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Total', 'Deposit', 'Withdraw'],
    datasets: [{
      label: '# of Money',
      data: [19, 13, 9],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// deposit chart update
const depo = document.getElementById("depoBtn");
depo.addEventListener('click', () => {
  const displayDepo = parseFloat(document.getElementById("deposite").innerText);
  chart.data.datasets[0].data[1] = displayDepo;

  //total chart update
  const totalDisply = parseFloat(document.getElementById("totalDisply").innerText);
  chart.data.datasets[0].data[0] = totalDisply
  chart.update();
})

//withdraw chart update
const widBtn = document.getElementById("withdrawBtn");
widBtn.addEventListener('click', () => {
  const displayWithdraw = parseFloat(document.getElementById("withdrawAmount").innerText);
  chart.data.datasets[0].data[2] = displayWithdraw;

  //total chart update
  const totalDisply = parseFloat(document.getElementById("totalDisply").innerText);
  chart.data.datasets[0].data[0] = totalDisply
  chart.update();
})

