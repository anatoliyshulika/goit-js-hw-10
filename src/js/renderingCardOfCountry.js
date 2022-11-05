export default renderingCardOfCountry;

function renderingCardOfCountry(
  ulCountriesRef,
  divCountryInfoRef,
  listOfCountries
) {
  ulCountriesRef.innerHTML = "";
  divCountryInfoRef.innerHTML = "";
  const { name, capital, population, flags, languages } = listOfCountries[0];
  console.log(listOfCountries[0]);
  const img = document.createElement("img");
  img.src = flags.svg;
  img.width = 40;
  img.height = 30;
  img.alt = "Flag of country";
  const span = document.createElement("span");
  span.textContent = name.official;
  span.classList.add("coutry-name");
  const divHead = document.createElement("div");
  divHead.classList.add("item");
  divHead.append(img);
  divHead.append(span);
  divCountryInfoRef.append(divHead);

  const spanCapital = document.createElement("span");
  spanCapital.classList.add("value");
  spanCapital.textContent = capital;
  const pCapital = document.createElement("p");
  pCapital.classList.add("head");
  pCapital.textContent = "Capital: ";
  pCapital.append(spanCapital);
  divCountryInfoRef.append(pCapital);

  const spanPopulation = document.createElement("span");
  spanPopulation.classList.add("value");
  spanPopulation.textContent = population;
  const pPopulation = document.createElement("p");
  pPopulation.classList.add("head");
  pPopulation.textContent = "Population: ";
  pPopulation.append(spanPopulation);
  divCountryInfoRef.append(pPopulation);

  const pLanguages = document.createElement("p");
  pLanguages.classList.add("head");
  pLanguages.textContent = "Languages: ";
  Object.values(languages).forEach((language) => {
    const spanLanguages = document.createElement("span");
    spanLanguages.classList.add("value");
    spanLanguages.textContent = language + ",";
    pLanguages.append(spanLanguages);
  });
  divCountryInfoRef.append(pLanguages);
}
