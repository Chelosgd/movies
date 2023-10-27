const moviesContainer = $('#moviesContainer')

$.get('http://localhost:5050/movies?token=123', res => {
    console.log(res)
    for (const movie of res) {
        moviesContainer.append(
            `<div class="card mb-2 col-12">
                <div class="card-body bg-light text-center">
                    <h3 class="card-title ">${movie.name}</h4>
                    <h5 class="card-text">${movie.director}</h5>
                    <p class="card-text">${movie.genre}</p>
                    <p class="card-text">${movie.synopsis}</p>
                    <p class="card-text">Actor(s): ${movie.actors}</p>
                    <p class="card-text">${movie.duration} minutes</p>
                    
                </div>
            </div>`
        )
    }
})

$(document).ready(function(){
    $('#createMovieForm').submit(function(e){
        e.preventDefault();

        // Get form data
        const movieName = $('#movieName').val();
        const movieSynopsis = $('#movieSynopsis').val();
        const movieGenre = $('#movieGenre').val();
        const movieDuration = $('#movieDuration').val();
        const movieDirector = $('#movieDirector').val();
        const movieActors = $('#movieActors').val();

        const movieData = {
            name: movieName,
            synopsis: movieSynopsis,
            genre: movieGenre,
            duration: movieDuration,
            director: movieDirector,
            actors: movieActors
        }

        $.post('http://localhost:5050/movies?token=123', movieData, res => {
            console.log("Pelicula insertada");
        });
    });
});