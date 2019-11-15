class MovieServices {
  getMovies(title) {
    let key = "c67df929";
    let url = `http://www.omdbapi.com/?apikey=${key}&s=${title}`;
    return fetch(url).then(response => response.json());
    // return [
    //   {
    //     title: "Name",
    //     desc: "Desc"
    //   },
    //   {
    //     title: "Name",
    //     desc: "Desc"
    //   }
    // ];
  }
}

export default new MovieServices();
