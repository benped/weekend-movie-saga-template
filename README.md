# Weekend Project: Movie List

## Description

_Duration: 20 hours_

This app was created to store and view movies, movie posters, genres and descriptions. Its meant to practice using many to many tables in the back end to cross reference a movie with it's genres.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgresql](https://www.postgresql.org/)

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Usage
1. Scroll through movies
2. Click on a movie you want to learn more about
3. Read details
4. Click Add Movie to add a new movie to the database

## Built With 
- node.js
- react.js
- redux
- Express.js
- HTML5
- Axios
- Material UI
- Sagas

## Screenshots
![Image of the Add new movie input](./wireframes/AddMovie.png?raw=true "Add New Movie")
![Image of Detail Page](./wireframes/DetailPage.png?raw=true "Detail View")
![Front page with all movies](./wireframes/FrontPage.png?raw=true "Main Page")

## Reflection
I worked to stretch my sql knowledge to make the simplest possible request to the database to get the most databack. Particularly proud I got the route parameters to work so that I can refresh and correctly load details. 
I wish I had been able to make the cards a little more dynamic, potentially a load animation and figure out how to get the images to cover the card, no matter the input size. 
Really enjoyed making the input form and having that appear and disappear using the FAB. 


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped us to make this application a reality.

