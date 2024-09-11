document.addEventListener("DOMContentLoaded", function () {
  let movieForm = document.getElementById("movieForm");
  let movieCategory = document.getElementById("movieCategory");

  function showCategory() {
    movieCategory.innerHTML = "";

    let movieList = JSON.parse(localStorage.getItem("categories")) || [];

    movieList.forEach((category) => {
      let option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      movieCategory.appendChild(option);
    });
  }

  movieForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let category = document.getElementById("movieCategory").value;
    let name = document.getElementById("movieName").value;
    let length = document.getElementById("movieLength").value;
    let rating = document.getElementById("movieRating").value;

    if (category && name && length && rating) {
      let movie = JSON.parse(localStorage.getItem("movie")) || [];
      movie.push({ category, name, length, rating });
      localStorage.setItem("movie", JSON.stringify(movie));
      movieForm.reset();
    }
  });
  showCategory();
});
