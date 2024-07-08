<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', fetchDrugEvents);
  
    function fetchDrugEvents() {
      const numEvents = document.getElementById('numEvents').value;
      fetch(`https://api.fda.gov/drug/event.json?limit=${numEvents}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const container = document.getElementById('data-container');
          container.innerHTML = ''; // Clear previous data
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
    }
  
    // Fetch default events on page load
    fetchDrugEvents();
  });
  
=======
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
>>>>>>> e45089abbde6e370274f10c0be00e8b7d0bfcd03
