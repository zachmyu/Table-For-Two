# {Date Project}

*By [Amber Bancroft](https://github.com/AmberBancroft), [Jefferson Lopez Garcia](https://github.com/JeffersonGarcia15), and [Zach Yu](https://github.com/ZachMYu).

Plan the perfect date!

[Live site](https://placeholder.herokuapp.com)

**Table of Contents**

* [Date Project at a Glance](https://github.com/zachmyu/DateProject)
* [Key Features](https://github.com/zachmyu/DateProject)
* [Technologies Used](https://github.com/zachmyu/DateProject)
* [Application Architecture](https://github.com/zachmyu/DateProject)
* [Frontend Overview](https://github.com/zachmyu/DateProject)
* [Backend Overview](https://github.com/zachmyu/DateProject)
* [Conclusion](https://github.com/zachmyu/DateProject)

## {Date Project} at a Glance

{Date Project} is a full stack application designed for planning out your next perfect date! Browse through all kinds of dating ideas to find the best one for your needs, make reservations, check your reservations, and view honest reviews from users of all the date locations to decide if you would like to reserve a date there!


all game-related articles, where you can read reviews, opinions, walkthroughs, and receive news about the latest and greatest in the gaming world. Read all about upcoming games and honest reviews by users that will help you decide if you would like to buy your next game!

The application is made with a React frontend, and the backend is a Flask server with a SQLAlchemy database.

**Key Features**

- Browse through all kinds of date locations to find one for your needs
- Submit new date locations when you come across a suitable place
- Read reviews and suggestions from users on different date locations
- Favorite a location for your collection
- Make a reservation for your next date

![{Date Project} mini-demo](/readme-assets/mini-demo.gif)

## Technologies Used

- Frontend
  - React
  - Python
  - CSS
- Backend
  - Flask
  - Python
  - SQLAlchemy
  - Heroku deployment

## Application Architecture

The frontend is created using Python, React, and CSS. The backend is created with Python and Flask with a SQLAlchemy database. The complete project is deployed to its own Heroku server.

![application architecture](/readme-assets/{Date Project}-architecture.png)

##### Overview of application architecture

![Database schema](/readme-assets/{Date Project}-schema.jpeg)

##### Pixel8 Sequelize database schema

## Frontend Overview

The frontend is built based off inspiration from the restaurant reservation site, OpenTable.com. All logos, designs, and UI have been designed by group members.

Styling was handled using CSS in Python.

Here's an example of the user feeds home page.

![Home Page Example](readme-assets/home-page.png)

## Backend Overview

The Flask backend is a collection of RESTful routes serving data to the frontend and an interface with the SQLAlchemy database.

Seed data was hand coded by team effort to flesh out all locations, reviews, and user-base. The seed data was of particular importance to this application because we needed a lot of locations and reviews in order to have a good sorting basis.

## Conclusion

{Date Project Conclusion}
