### Webbservers & databases

### Till lärare
Angående obligatoriska fält, jag har ej lagt till dom i PUT requesten för tänk om man bara vill ändra titel tex. 
Har dessa med i POST antar att det är just den dom skall finnas i. 

# Node express crud assignment
# Bond Movie RestAPI

## Project description
This application requires Node installed 
You can download it here [node] <br>
This is a simple crud operations project to handle Rest Api using a Bond Movie mockData (Dummy data) 

## Getting started
To run the project:
1. Clone this repo, fork it, or download the zip [bond_movie_crud]
2. Open the project using vs code or your favorite editor
3. Open a terminal and write "npm i" or "npm install" to install the dependencies
4. Type command "Npm run server" (opens a port on 5500)
5. Open a browser to check the API or use [postman] to test the endpoints 

## You need an api key to access endpoints
example: http://localhost:5500/movies?apiKey=123 <br>
Write: ?apiKey=<apikey> <br>
List of keys:<br>
123, 456, 789, 120, 102, 303, 404, 205 <br>
(I know very simple)

### If api key would be wrong you will get an error like so:
 
```
{
    "message": "unouthorized, no valid api key",
    "code": 401
}

```

To try this out in a browser you can copy paste this - http://localhost:5500/movies/?apiKey=456 <br>
Will show all movies 

## **The Movie ENDPOINTS are as follows:** <br>

GET http://localhost:5500/movies?apiKey=123 (all movies)

GET http://localhost:5500/movies/tt6110504?apiKey=123 (single movie by id)

POST http://localhost:5500/movies?apiKey=123 (add a ne movie)

PUT http://localhost:5500/movies/tt6110504?apiKey=123 (update a movie by id)

DELETE http://localhost:5500/movies/tt6110504?apiKey=123 (delete movie by id)

---

<br>

## EXAMPLES 
<br>

---
### Method: GET /movies

-  http://localhost:5500/movies?apikey=123
- This would give you a response with all movies

### Example of the response:

```

{
    "Title": "Becoming Bond",
    "Year": "2017",
    "Rated": "TV-MA",
    "Released": "20 May 2017",
    "Runtime": "95 min",
    "Genre": "Documentary, Biography, Comedy",
    "Director": "Josh Greenbaum",
    "Writer": "Josh Greenbaum",
    ...
},

 {
    "Title": "Demon Slayer: Kimetsu no Yaiba - Sibling's Bond",
    "Year": "2019",
    "Rated": "N/A",
    "Released": "29 Mar 2019",
    "Runtime": "105 min",
    "Genre": "Animation, Action, Fantasy",
    "Director": "Haruo Sotozaki",
    "Writer": "Koyoharu Gotouge",
...
}

```

---

### Method: GET /movies/:id

-  http://localhost:5500/movies/tt1692489?apiKey=456
- Get single movie by parameter id, like so
> ( req.params.id = / **tt1692489** )
- where id is the imdbID

### Example of the response:

``` 
{
    "Title": "James Bond 007: Blood Stone",
    "Year": "2010",
    "Rated": "T",
    "Released": "02 Nov 2010",
    ...
    "imdbID": "tt1692489",
}
...

``` 

---
### Method: POST /movies/

-  http://localhost:5500/movies?apiKey=123
- Add a new movie 

### Example of body: 
These keys and values of the object has to be included
- Title, Year (has to be number), Released, Genre
```

{
        "Title": "Le Bönd de Bond 333",
        "Year": "2023",
        "Released": "18 Feb 2004",
        "Genre": "Documentary, Biography, Comedy",
}

```

- (If no id "imdbID": "tt1231231" is given it will be provided)

### Example of successfull response:

```

{
        "Title": "Le Bönd de Bond 333",
        "Year": "2023",
        "Rated": "TV-MA",
        "Released": "18 Feb 2004",
        "Runtime": "95 min",
        "Genre": "Documentary, Biography, Comedy",
        "Director": "Josh Greenbaum",
        "Writer": "Josh Greenbaum",
        ...
        "imdbID": "tt624483"
}
...

```

### Example of missing key/values:
- in this example "Year": "abc" is set to abc

```

{
    "code": "InvalidJsonInput",
    "message": "The Year has to be numbers, please include a year using number no letters allowed"
}
...

```
### Example of missing a "Title":

```

{
    "code": "InvalidJsonInput",
    "message": "Title is missing, please include a movie title"
}

```

---

### Method: PUT /movies/:id

-  http://localhost:5500/movies/tt6110504?apiKey=123
- Update a movie 

- here we change the title and released of the movie with the id tt6110504
### Example of body:

``` 

{
        "Title": "Becoming Bond again",
        "Year": "2017",
        "Rated": "TV-MA",
        "Released": "20 May 1990"
 }
...

``` 
---

### Method: DELETE /movies/:id

-  http://localhost:5500/movies/tt6110504?apiKey=123
- Delete a movie using its id
### Example of response:

``` 

"The movie Becoming Bond again with the id: tt6110504 successfully removed"

```

---

<br>

## There is also methods to add or delete an apikey
### Below is examples of how to Post or Delete keys

<br>

---
### Method: POST 
To add an apikey using query (createNewApiKey)

### To add key you can copy paste this to test it

- http://localhost:5500/apikeys/?apiKey=789&createNewApiKey=555

### Example of successfully added api key

```
{
    "message": "Successfully added a new api key: 555",
    "code": 201
}

```

### Example of bad request
Using an already existing key

```
{
    "message": "Bad Request, unable to add key, please provide an other api key",
    "error": "Api key is already in use, please try a new api key"
}

```

---

### Example of no key or wrong input
Using an already existing key

```
{
   {
    "code": "Invalid input in query",
    "message": "No api key provided or not valid input, unable to create new key, api key has to be numbers"
}
}

```

---
### Method: Delete
To Delete an apikey using query (deleteApiKey)

- http://localhost:5500/apikeys/?apiKey=456&deleteApiKey=123

### Example of successfull response

```

"Api key: 123 successfully deleted"

```


### Example of error response:
if the apikey is not in the array of keys

```
{
    "message": "You need to provide a valid api key",
    "error": "Invalid or no api key in query"
}

```


# __Tech & Tools:__

- ☕
- [node]
- [express]
- [nodemon]
- [postman]
- [cors]
- [javascript]
- [vscode]
- [github]





---
[node]: https://nodejs.org/en
[express]: https://expressjs.com/
[nodemon]: https://nodemon.io/
[postman]: https://www.postman.com/
[cors]: https://github.com/expressjs/cors#readme
[javascript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[vscode]: https://code.visualstudio.com/
[github]: https://github.com/
[bond_movie_crud]: https://github.com/xxrobone/Bond_Movie_Crud