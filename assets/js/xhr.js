// es5
// const getData = (url) => new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//
//     xhr.open('GET', url);
//
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             let json = JSON.parse(xhr.response);
//             resolve(json.Search);
//         } else {
//             reject(xhr.statusText);
//         }
//     };
//
//     xhr.onerror = (err) => reject (err);
//
//     xhr.send();
// });

// es6
const getData = (url) => fetch(url)
    .then((response) => response.json())
    .then((json) => {
        if (json.Search) return json.Search;
        throw Error ('Сервер вернул неправильный объект');
    });

// let ironman = getData(`http://www.omdbapi.com/?s=Iron%20man&apikey=972d897b&`);
// let batman = getData(`http://www.omdbapi.com/?s=Batman&apikey=972d897b&`);
// let superman = getData(`http://www.omdbapi.com/?s=Superman&apikey=972d897b&`);
//
// // ironman.then((movies) => movies.forEach((movie) => addMovieTolist(movie)));
// // batman.then((movies) => movies.forEach((movie) => addMovieTolist(movie)));
// // superman.then((movies) => movies.forEach((movie) => addMovieTolist(movie)));
//
// Promise.all([ironman, batman, superman])
//     .then((result) => result.forEach((movies) => movies.forEach((movie) => addMovieTolist(movie))));

inputSearch.addEventListener('keyup', (e) => {
    delay(() => {
    const searchString = e.target.value;

    if (searchString && searchString.length > 4) if (!triggerMode) clearMoviesMarkup();

        getData(`https://www.omdbapi.com/?s=${searchString}&apikey=972d897b&`)
            .then((movies) => movies.forEach((movie) => addMovieTolist(movie)
            ))
            .catch((err) => console.log(err));

    }, 1000);
})