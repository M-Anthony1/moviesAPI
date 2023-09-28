# moviesAPI

<h3>Introduction</h3>
Use this API to get access to movie data.<br />

Example deployment: https://dark-gray-fish-kilt.cyclic.app/ <br/>

<h3>Using the API</h3>

<h4>Step 1: Loading Sample Data in MongoDB Atlas</h4>
1.Create a new "Project" in your MongoDB Atlas account. </br>  
2.Load the "Sample Dataset" into your cluster. Refer to the official documentation for details.  

<h4>Step 2: Building a Web API</h4>
1.Create a folder for your project (e.g., "moviesAPI").</br>  
2.Open the folder in Visual Studio Code.</br>  
3.Create a simple Express server:

* Import and use the "cors" middleware.
* Import the "dotenv" package to read from a ".env" file.
* Use the express.json() middleware to parse JSON in the request body.

4.Install required packages:

* npm install cors
* npm install mongoose


5.Create a .gitignore file with these entries:
```
node_modules
.env
```

6.Initialize a Git repository: 'git init'

<h3>Setting up the MongoDB Connection</h3>
1.Obtain your MongoDB Atlas connection string.</br>  
2.Replace <password> with your actual password.</br>  
3.Add the database name (e.g., sample_mflix) after "mongodb.net/":

```
...mongodb.net/sample_mflix?retryWrites...
```
4.Place the updated connection string in your .env file:
```
MONGODB_CONN_STRING=myUpdatedConnectionString
```
<h3>Initializing the Module</h3>
Ensure a successful MongoDB Atlas connection before starting the server:

```
db.initialize(process.env.MONGODB_CONN_STRING)
    .then(() => {
        // Start the server
    })
    .catch((err) => {
        console.log(err);
    });
```

    
<h3>Defining API Routes</h3></br>  

POST /api/movies: Add a new "Movie" document. Provide the request body with movie details.</br>  
GET /api/movies: Retrieve movies with optional pagination and filtering by title. Use query parameters page, perPage, and title.</br>  
GET /api/movies/:id Retrieve a specific movie by its _id parameter.</br>  
PUT /api/movies/:id Update a movie by its _id parameter. Provide the updated details in the request body.</br>  
DELETE /api/movies/:id Delete a movie by its _id parameter.</br>  

<h2>Usage Example</h2>
Simple code example demonstrating how to use the API, such as making a GET request to retrieve a list of movies.

// Example using Axios
```
const axios = require('axios');

axios.get('http://localhost:8080/api/movies')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

```
//Example using deployed link: https://dark-gray-fish-kilt.cyclic.app/api/movies/573a1390f29313caabcd548c
    
