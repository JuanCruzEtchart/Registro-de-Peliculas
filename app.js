let moviesDH = {
  leerArchivo: function () {
    const movies = require("./movies");
    return movies;
  },
  listMovies: function () {
    const movies = this.leerArchivo();
    console.log();
    console.log("LISTADO DE PELÍCULAS");
    console.log("--------------------");
    movies.forEach(function (pelicula, index) {
      console.log(index + 1 + " - " + pelicula.title);
    });
  },
  searchMovies: function (elemento) {
    const movies = this.leerArchivo();
    console.log();
    console.log("PELÍCULA BUSCADA: " + elemento);
    console.log("----------------");
    let peliculasFiltradas = movies.find(function (peliculas) {
      return elemento === peliculas.title || elemento === peliculas.id;
    });
    if (peliculasFiltradas === undefined) {
      peliculasFiltradas = null;
    }
    return peliculasFiltradas;
  },
  searchMoviesByGenre: function (genero) {
    const movies = this.leerArchivo();
    console.log();
    console.log("GÉNERO BUSCADO: " + genero);
    console.log("--------------");
    let peliculasFiltradas = movies.filter(function (peliculas) {
      return genero === peliculas.genre;
    });
    return peliculasFiltradas;
  },
  totalPrice: function () {
    const movies = this.leerArchivo();
    let precios = movies
      .map(function (movie) {
        return movie.price;
      })
      .reduce(function (acum, pelicula) {
        return acum + pelicula;
      });
    console.log();
    return "Precio total: $" + precios;
  },
  changeMovieGenre: function (id, newGenre) {
    const movies = this.leerArchivo();
    let genero = this.searchMovies(id);
    genero.genre = newGenre;
    console.log("Genero actualizado:");
    return genero;
  },
};

//console.log(moviesDH.listMovies());
//console.log(moviesDH.searchMovies('Memento'));
console.log(moviesDH.searchMovies(2000));
//console.log(moviesDH.searchMoviesByGenre('Suspen'));
//console.log(moviesDH.totalPrice());
//console.log(moviesDH.changeMovieGenre(5, "Comedia"));
