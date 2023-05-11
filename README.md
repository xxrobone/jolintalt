### Webbservers & databases
# Node express crud assignment

## Getting started
To run the project:
1. clone this repo or fork it, or download zip
2. Open the project using vs code or your favorite editor
3. Open a terminal and write "npm i" or "npm install" to insstall the dependencies 
4. Type command "Npm run server" (opens a port on 5500)
5. Open a browser to check the API or use postman to test the endpoints 
6. ## You need an api key to access endpoints
- like so ?apikey=123

**The Movie ###ENDPOINTS are as follows:**

GET http://localhost:5500/movies?apiKey=123 (all movies)

GET http://localhost:5500/movies/tt6110504?apiKey=120 (single movie by id)

POST http://localhost:5500/movies?apiKey=123 (add a ne movie)

PUT http://localhost:5500/movies/tt6110504?apiKey=123 (update a movie by id)

DELETE http://localhost:5500/movies/tt6110504?apiKey=123 (delete movie by id)

---

## EXAMPLES 

### GET /movies

-  http://localhost:5500/movies?apikey=123
- This would give you a response with all movies

### Example of the response:

{
    "Title": "Becoming Bond",
    "Year": "2017",
    "Rated": "TV-MA",
    "Released": "20 May 2017",
    "Runtime": "95 min",
    "Genre": "Documentary, Biography, Comedy",
    "Director": "Josh Greenbaum",
    "Writer": "Josh Greenbaum",
}
...

---

### GET /movies/:id

-  http://localhost:5500/movies/tt1692489?apiKey=456
- Get single movie by parameter id, like so
> req.params.id == **tt1692489**
- where id is the imdbID

### Example of the response:

{
    "Title": "James Bond 007: Blood Stone",
    "Year": "2010",
    "Rated": "T",
    "Released": "02 Nov 2010",
    ...
    "imdbID": "tt1692489",
}
...

---
### POST /movies/

-  http://localhost:5500/movies?apiKey=123
- Add a new movie 
- Must include Title, Year (has to be number), Released, Genre
### Example of successfull response:
{
    "Title": "Le Bönd de Bond 333",
        "Year": "2023",
        "Rated": "TV-MA",
       "Released": "18 Feb 2004",
        "Runtime": "95 min",
        "Genre": "Documentary, Biography, Comedy",
        "Director": "Josh Greenbaum",
        "Writer": "Josh Greenbaum",
}
...
### Example of missing key/values:
- in this example year is set to abc

{
    "code": "InvalidJsonInput",
    "message": "The Year has to be numbers, please include a year using number no letters allowed"
}
...

### Example of missing a title:

{
    "code": "InvalidJsonInput",
    "message": "Title is missing, please include a movie title"
}

---

### PUT /movies/:id

-  http://localhost:5500/movies/tt6110504?apiKey=123
- Update a movie 

- here we change the title with the id tt6110504
### Example of response:
{
        "Title": "Becoming Bond again",
        "Year": "2017",
        "Rated": "TV-MA",
        "Released": "20 May 2017"
 }
...

---

### DELETE /movies/:id

-  http://localhost:5500/movies/tt6110504?apiKey=123
- Delete a movie using its id
### Example of response:

"The movie Becoming Bond again with the id: tt6110504 successfully removed"
...

---


# __Tech & Tools:__

- ☕
- [node]
- [express]
- [nodemon]
- [cors]
- [javascript]
- [vscode]
- [github]





---
[node]: https://nodejs.org/en
[express]: https://expressjs.com/
[nodemon]: https://nodemon.io/
[cors]: https://github.com/expressjs/cors#readme
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[vscode]: https://code.visualstudio.com/
[github]: https://github.com/