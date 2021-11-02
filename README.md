# React workshop challenge

[2021-11-02_5.20.31.png]

## Part 1: UI and React state implementation

The UI should have the following properties:
On page load, the propertyId should be set to 1.
Clicking the top item in the menu should increment the propertyId. The updated propertyId should display.
Clicking the "Update estimated value through API" button uses an API to fetch the estimated value. While the data is being fetched the UI should update to reflect that. Once it has been fetched the result should be displayed.

## Part 2: API integration

API information:
There are two API endpoints. Where there are multiple APIs that provide the same type data for different inputs, and we have to combine them. We have to do this because each data source only supports some inputs.

For this exercise, the API endpoints are:
https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties/:id
https://5aa9487a4cf36300144e961d.mockapi.io/api/v1/properties_alternative/:id

Each endpoint accepts GET requests and takes a parameter id. The propertyId from the local app state should be passed through to the API call.
The API endpoints will return a not found message if the propertyId is invalid. Each API endpoint only supports some property IDs, so you need to handle this edge case and update the UI accordingly.
