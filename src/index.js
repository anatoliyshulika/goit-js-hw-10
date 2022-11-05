import "./styles/main.scss";
const _ = require("lodash");
import fetchCountries from "./js/fetchCountries";
import renderingListOfCountries from "./js/renderingListOfCountries";
import Notiflix from "notiflix";
import renderingCardOfCountry from "./js/renderingCardOfCountry";

const inputRef = document.querySelector("#search-box");
const ulCountriesRef = document.querySelector(".country-list");
const divCountryInfoRef = document.querySelector(".country-info");

const DEBOUNCE_DELAY = 300;
const baseUrl = "https://restcountries.com/v3.1/name/";
const requestParams = "fields=name,capital,population,flags,languages";

function responseManagerFunction(listOfCountries) {
  if (listOfCountries) {
    if (listOfCountries.length === 1) {
      renderingCardOfCountry(
        ulCountriesRef,
        divCountryInfoRef,
        listOfCountries
      );
    }
    if (listOfCountries.length > 1 && listOfCountries.length <= 10) {
      renderingListOfCountries(
        ulCountriesRef,
        divCountryInfoRef,
        listOfCountries
      );
    } else if (listOfCountries.length > 10) {
      Notiflix.Notify.info(
        "Too many matches found. Please enter a more specific name."
      );
    }
  } else {
    ulCountriesRef.innerHTML = "";
    divCountryInfoRef.innerHTML = "";
  }
}

inputRef.addEventListener(
  "input",
  _.debounce((e) => {
    if (e.target.value.trim() === "") {
      ulCountriesRef.innerHTML = "";
      divCountryInfoRef.innerHTML = "";
    } else {
      fetchCountries(baseUrl, e.target.value.trim(), requestParams).then(
        (listOfCountries) => {
          responseManagerFunction(listOfCountries);
        }
      );
    }
  }, DEBOUNCE_DELAY)
);
