const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name:   ${country.name} </h3>
        <p>Capital:  ${country.capital ? country.capital : 'no capital'}</p>
        <p>Region:  ${country.region}</p>
        <button onclick="loadCountryDetails('${country.alpha2Code}')">Details</button>
        
        `
        countriesContainer.appendChild(countryDiv)
    });
}

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v2/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}
const displayCountryDetails = country => {
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML = `
    <h3>Name: ${country.name}</h3>
    <img src="${country.flags.png}">
    `
}

loadCountries()