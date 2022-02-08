const movies = [
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 80
    }
]
// Passed every property of movies array as argument of function (movie)

movies.forEach(function (movie){
    console.log(movie.title);
})
