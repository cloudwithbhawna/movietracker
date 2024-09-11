document.addEventListener("DOMContentLoaded", function () {
  let movieForm = document.getElementById("movieForm");
  let selectedcategories = document.getElementById("selectedcategories");

  movieForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("movieName").value;

    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push(name);
    localStorage.setItem("categories", JSON.stringify(categories));
    movieForm.reset();
    displayCategories();
  });
  displayCategories = () => {
    selectedcategories.innerHTML = "";

    let movieList = JSON.parse(localStorage.getItem("categories")) || [];

    movieList.forEach((category) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = category;
      selectedcategories.appendChild(li);
    });
  };
});
