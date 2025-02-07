// API key for authenticating requests to The Movie Database API
const apiKey = '';

// URL to fetch trending movies and TV shows for the current week
const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;

// Reference to the container where movie cards will be displayed
const moviesContainer = document.getElementById("movies");

// Asynchronous function to fetch movies or TV shows from the API
async function fetchMovies() {
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Parse the response JSON into a JavaScript object
        const data = await response.json();

        // Iterate through each item (movie or TV show) in the results array
        data.results.forEach(media => {
            // Create a movie card for the current item
            const movieCard = createMovieCard(media);

            // Append the movie card to the container in the DOM
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        // Log any errors that occur during the fetch process
        console.error("Error fetching data:", error);
    }
}

// Function to create a card element for a movie or TV show
function createMovieCard(media) {
    const title = media.title;
    const name = media.name;
    const backdrop_path = media.backdrop_path

    // Create a new div element for the movie card
    const movieCard = document.createElement("div");

    // Add the "movie_item" class to the card for styling
    movieCard.classList.add("movie_item");

    // Set the inner HTML of the card, including the image and title/name
    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title || name}</div>
    `;

    // Return the created card element
    return movieCard;
}

// Call the function to fetch and display movies when the script is executed
fetchMovies();
