# openFDA Project

## Description
This project retrieves data from the openFDA API and displays recent drug event reports.

## Setup
1. Clone the repository: https://github.com/BryanAlano04/openFDA-API.git
2. Open index.html in your browser.

## Files
1. index.html - This file is the main HTML document that structures the webpage.
It contains:
	An h1 heading for the title.
	An input-container div with:
	A label and an input field (numEvents) for specifying the number of events to fetch.
	A fetch button (fetchButton) to initiate the data retrieval.
	A data-container div where fetched event data will be displayed.
2. Style.css- This file contains CSS styles to define the appearance of your webpage.
Styles include:
	Body formatting (font, background color, margins).
	Styling for headers (h1).
	Formatting for input-container, numEvents input field, fetchButton, and data-container.
	Styling for .event-item which formats each individual event displayed.

3. Script.js - This file contains JavaScript code that handles the dynamic fetching and display of data.
It:
	Listens for the DOMContentLoaded event to ensure the DOM is fully loaded before executing.
	Defines fetchDrugEvents() function:
	Fetches data from the openFDA API based on the number entered (numEvents).
	Clears previous data in data-container.
	Creates and appends new event-item divs for each fetched event, displaying ID and Received Date.
	Invokes fetchDrugEvents() initially when the page loads to fetch default events.
	Handles errors if the API call fails, displaying an error message.

## Usage
- The website displays recent drug event reports retrieved from the openFDA API.

## License
This project is licensed under the MIT License.
