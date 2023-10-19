const apiUrl = "https://api.themoviedb.org/3/trending/all/week?api_key=c5cf12ec677e4a8152e9957bb30d8edd";
const moviesContainer = document.getElementById("movies");

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createMovieCard(media) {
    const { title, name, backdrop_path } = media;
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item")
    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded" alt="Movie Poster">
        <div class = "title" >${title || name}</div>
    `;
    return movieCard;
}

fetchMovies();
