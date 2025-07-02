document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { day: 'mon', amount: 17.45 },
    { day: 'tue', amount: 34.91 },
    { day: 'wed', amount: 52.36 },
    { day: 'thu', amount: 31.07 },
    { day: 'fri', amount: 23.39 },
    { day: 'sat', amount: 43.28 },
    { day: 'sun', amount: 25.48 }
  ];

  const chartContainer = document.getElementById('spending-chart');
  const maxAmount = Math.max(...data.map(d => d.amount));
  const today = new Date();
  const todayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;

  data.forEach((entry, index) => {
    const bar = document.createElement('div');
    bar.classList.add('spending-chart__bar');
    bar.setAttribute('data-label', entry.day);
    bar.setAttribute('data-amount', `$${entry.amount.toFixed(2)}`);
    const height = (entry.amount / maxAmount) * 100;
    bar.style.height = `${height}%`;

    if (index === todayIndex) {
      bar.classList.add('active');
    }

    chartContainer.appendChild(bar);
  });
});
