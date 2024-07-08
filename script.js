document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', fetchDrugEvents);
  
    function formatDate(dateString) {
        // Assuming dateString is in the format YYYYMMDD
        const year = dateString.substr(0, 4);
        const month = dateString.substr(4, 2);
        const day = dateString.substr(6, 2);
        return `${year}-${month}-${day}`;
    }

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
                const eventsTable = document.getElementById('events-table');
                eventsTable.innerHTML = ''; // Clear previous data

                data.results.forEach(event => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${event.safetyreportid}</td>
                        <td>${formatDate(event.receivedate)}</td>
                    `;
                    eventsTable.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                const eventsTable = document.getElementById('events-table');
                eventsTable.innerHTML = `<tr><td colspan="2">Error fetching data. Please try again later.</td></tr>`;
            });
    }

    // Fetch default events on page load
    fetchDrugEvents();

});
