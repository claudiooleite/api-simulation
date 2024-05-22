
apiSimulation.js 
Overview:
The apiSimulation.js file contains code for simulating an API that provides information about available reservation times for a restaurant. It includes functions for fetching available times for a given date (fetchAPI) and submitting a reservation form (submitAPI).

Functions:
generateAvailableTimesByDate Function:

This function generates available reservation times for the next 3 years for a restaurant.
It dynamically creates an object (availableTimesByDate) where each date maps to an array of available times.
fetchAPI Function:

This function simulates fetching available reservation times for a given date from the generated data.
It takes a date parameter and returns a Promise.
If the date exists in the generated data, it resolves the Promise with the available times for that date. Otherwise, it rejects the Promise with an error.
submitAPI Function:

This function simulates submitting a reservation form and updating the available times data accordingly.
It takes form data as a parameter and returns a Promise.
If the form data is valid, it removes the booked time from the available times for the specified date and resolves the Promise with a success message. Otherwise, it rejects the Promise with an error.
Simulation Data:
The available reservation times data is stored in the availableTimesByDate object.
Each date key in the object corresponds to an array of available times for that date.
The data is generated dynamically for the next 3 years, assuming the restaurant operates from 17:00 to 22:00 each day.
Usage:
The fetchAPI and submitAPI functions can be imported into any JavaScript project.
They can be used to simulate API calls for fetching available times and submitting reservation forms, respectively.
The simulated API is useful for testing and development purposes, providing a realistic environment without relying on real server interactions.
