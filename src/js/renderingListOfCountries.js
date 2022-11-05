export default renderingListOfCountries;

function renderingListOfCountries(
  ulCountriesRef,
  divCountryInfoRef,
  listOfCountries
) {
  ulCountriesRef.innerHTML = "";
  divCountryInfoRef.innerHTML = "";
  const arr = [];
  listOfCountries.forEach((country) => {
    const { flags, name } = country;
    const img = document.createElement("img");
    img.src = flags.svg;
    img.width = 40;
    img.height = 30;
    img.alt = "Flag of country";
    const span = document.createElement("span");
    span.textContent = name.official;
    span.classList.add("listCoutry-name");
    const li = document.createElement("li");
    li.append(img);
    li.append(span);
    li.classList.add("item");
    arr.push(li);
  });
  ulCountriesRef.append(...arr);
}
