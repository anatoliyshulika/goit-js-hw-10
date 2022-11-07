export default fetchCountries;
import Notiflix from "notiflix";

function fetchCountries(baseUrl, name, requestParams) {
  return fetch(`${baseUrl}${name}?${requestParams}`)
    .then((response) => {
      if (!response.ok && response.status === 404) {
        return Notiflix.Notify.failure(
          "Oops, there is no country with that name"
        );
      } else {
        return response.json();
      }
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      console.error("Oops, there is no country with that name");
    });
}
