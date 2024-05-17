# Weather App

This web app fetches and displays real-time weather data for any city. Users can search for a city, and the app shows humidity, temperature, and wind speed using the Weather by API Ninjas service.

## Features

- **Search Weather**: Enter a city name to get current weather information.
- **Real-Time Data**: Displays real-time weather data including humidity, temperature, and wind speed.
- **User-Friendly Interface**: Simple and intuitive user interface with a centered search bar.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- Fetch API

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection

### Installation

1. Clone the repository or download the ZIP file.
    ```bash
    git clone https://github.com/tiggachris/PRODIGY_WD_05.git
    ```
2. Navigate to the project directory.
    ```bash
    cd PRODIGY_WD_05
    ```
3. Open `index.html` in your preferred web browser.

### Usage

1. Open the app in your web browser.
2. Enter the name of a city in the search bar.
3. Click the "Search" button.
4. View the current weather data for the specified city.

### Example

1. Enter "Bangalore" in the search bar.
2. Click "Search".
3. The app displays Bangalore's humidity, temperature, and wind speed.

## API

This app uses the Weather by API Ninjas service. For more details, visit the [API Ninjas website](https://rapidapi.com/apininjas/api/weather-by-api-ninjas).

### API Key

An API key is required to fetch weather data. Replace the placeholder API key in the script with your own key.

```javascript
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "your_api_key_here",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
};
