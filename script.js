document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.fda.gov/drug/event.json?limit=10')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('data-container');
      data.results.forEach(event => {
        const item = document.createElement('div');
        item.classList.add('event-item');
        item.textContent = `ID: ${event.safetyreportid}, Received Date: ${event.receivedate}`;
        container.appendChild(item);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('data-container').textContent = 'Error fetching data. Please try again later.';
    });
});
