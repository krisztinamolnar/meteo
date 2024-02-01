function handleSearchSubmit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");
  cityElement = document.querySelector("#city");
  cityElement.innerHTML = SearchInput.value;
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);
