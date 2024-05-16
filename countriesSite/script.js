
let getCountries = async function () {
    let countriesAPI = 'https://restcountries.com/v3.1/all';

    let response = await fetch(countriesAPI);
    let countries = await response.json();

    return countries;
};

let getWeatherOfCapital = async function (country) {
    const weatherApiKey = 'ece332b805db46d109fbf90b5ebb2d1c'
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${weatherApiKey}`

    let response = await fetch(weatherAPI)
    let weather = await response.json()

    return weather
}

async function renderHomePage() {
    location.hash = 'countries';

    let homePageDiv = createElement('div', 'home_page_div');
    let title = createElement('a', 'title', 'Countries');
    let countriesDiv = createElement('div', 'countries_div');

    title.href = "#countries";
    homePageDiv.id = "countries";

    homePageDiv.append(title);
    homePageDiv.append(countriesDiv);

    window.addEventListener('hashchange', () => updateContent(homePageDiv));

    window.countries.forEach(country => {
        let countryLink = renderCountry(country);
        countryLink.href = `#country/${country.cca3.toLowerCase()}`;
        countryLink.addEventListener('click', () => renderCountryPage(country));

        countriesDiv.append(countryLink);
    });

    updateContent(homePageDiv);
}

function updateContent(homePageDiv) {

    let currentHash = location.hash.split('/')[0];
    document.body.innerHTML = '';

    if (currentHash === '#countries') {
        document.body.append(homePageDiv);
    } else if (currentHash === '#country') {
        let countryCode = location.hash.split('/')[1];
        let country = window.countries.find(c => c.cca3.toLowerCase() === countryCode);
        let countryPage = renderCountryPage(country);
        document.body.append(countryPage);
    }
}

function renderCountryPage(country) {
    let countryPageDiv = createElement('div', 'country_page_div');
    countryPageDiv.id = 'country';

    createCountryPage(countryPageDiv, country)

    return countryPageDiv;
}

function renderCountry(country) {
    let countryLink = createElement('a', 'country_link');
    let countryFlag = createElement('img', 'country_flag');
    let countryName = createElement('h4', 'country_title');
    let countryPopulation = createElement('p', 'country_population');

    countryLink.href = `#country/${country.cca3.toLowerCase()}`;
    countryFlag.src = country.flags.png;
    countryName.innerText = country.name.common;
    countryPopulation.innerText = `Population: ${country.population}`;

    countryLink.append(countryFlag);
    countryLink.append(countryName);
    countryLink.append(countryPopulation);

    return countryLink;
}

function createElement(type, classname, content) {
    let element = document.createElement(type);
    element.classList.add(classname);
    if (content) element.innerHTML = content;

    return element;
}

async function createCountryPage(countryPageDiv, country) {

    const weather = await getWeatherOfCapital(country)

    let backBtn = createElement('a', 'back_btn')
    let countryFlag = createElement('img', 'country_flag');
    let countryInfoDiv = createElement('div', 'caoutry_info_div')

    let countryName = createElement('h2', 'country_title');
    let countryCapital = createElement('p', 'country_capital');
    let countryPopulation = createElement('p', 'country_population');
    let countryRegion = createElement('p', 'country_region');

    let weatherInfoDiv = createElement('div', 'weather_info_div')
    let weatherTitle = createElement('h4', 'weather_title')
    let weatherTempMin = createElement('p', 'weather_temp_min')
    let weatherTempMax = createElement('p', 'weather_temp_max')
    let weatherDescription = createElement('p', 'weather_description')

    backBtn.innerText = 'Back'
    backBtn.href = '#countries'
    countryFlag.src = country.flags.png;
    countryName.innerText = country.name.common;
    countryCapital.innerText = `Capital: ${country.capital[0]}`
    countryPopulation.innerText = `Population: ${country.population}`;
    countryRegion.innerText = `Region: ${country.region}`

    weatherTitle.innerText = 'Weather'
    weatherTempMin.innerText = `Temp min: ${weather.main.temp_min}`
    weatherTempMax.innerText = `Temp max: ${weather.main.temp_max}`
    weatherDescription.innerText = `Description: ${weather.weather[0].description}`


    countryPageDiv.append(backBtn)
    countryPageDiv.append(countryFlag);
    countryPageDiv.append(countryInfoDiv)
    countryInfoDiv.append(countryName);
    countryInfoDiv.append(countryCapital)
    countryInfoDiv.append(countryPopulation);
    countryInfoDiv.append(countryRegion)

    countryInfoDiv.append(weatherInfoDiv)
    weatherInfoDiv.append(weatherTitle)
    weatherInfoDiv.append(weatherTempMin)
    weatherInfoDiv.append(weatherTempMax)
    weatherInfoDiv.append(weatherDescription)
}

document.addEventListener('DOMContentLoaded', async () => {
    window.countries = await getCountries();
    renderHomePage();
});