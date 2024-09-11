document.addEventListener("DOMContentLoaded", function () {
  let movieList = document.getElementById("movieList");
  function renderBalanceSheet() {
    let movies = JSON.parse(localStorage.getItem("movie")) || [];
    let categories = {};
    movies.forEach((movie) => {
      if (!categories[movie.category]) {
        categories[movie.category] = [];
      }
      categories[movie.category].push(movie);
    });
    movieList.innerHTML = "";
    for (let category in categories) {
      let caregoryHeader = document.createElement("h3");
      caregoryHeader.textContent = category;
      movieList.appendChild(caregoryHeader);
      let ul = document.createElement("ul");
      ul.className = "list-group";
      let totalRuntime = 0;

      categories[category].forEach((movie) => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `Movie Category - ${movie.name} , Movie Length - ${movie.length} , Movie Rating - ${movie.rating}`;
        ul.appendChild(li);

        totalRuntime += parseInt(movie.length);
      });
      movieList.appendChild(ul);

      let totalRuntimeElement = document.createElement("div");
      totalRuntimeElement.textContent = `Total Runtime: ${totalRuntime} min`;
      totalRuntimeElement, (className = "mt-3 font-weight-bold");
      movieList.appendChild(totalRuntimeElement);
    }
  }
  renderBalanceSheet();
});
