# Table-For-Two

*By [Amber Bancroft](https://github.com/AmberBancroft), [Jefferson Lopez Garcia](https://github.com/JeffersonGarcia15), and [Zach Yu](https://github.com/ZachMYu).

Plan the perfect date!

[Live site](https://placeholder.herokuapp.com)

**Table of Contents**

* [Table-For-Two at a Glance](https://github.com/zachmyu/Table-For-Two)
* [Key Features](https://github.com/zachmyu/Table-For-Two)
* [Technologies Used](https://github.com/zachmyu/Table-For-Two)
* [Application Architecture](https://github.com/zachmyu/Table-For-Two)
* [Frontend Overview](https://github.com/zachmyu/Table-For-Two)
* [Backend Overview](https://github.com/zachmyu/Table-For-Two)
* [Conclusion](https://github.com/zachmyu/Table-For-Two)

## Table-For-Two at a Glance

Table-For-Two is a full stack application designed for planning out your next perfect date! Browse through all kinds of dating ideas to find the best one for your needs, make reservations, check your reservations, and view honest reviews from users of all the date locations to decide if you would like to reserve a date there!

The application is made with a React frontend, and the backend is a Flask server with a SQLAlchemy database.

**Key Features**

- Browse through all kinds of date locations to find one for your needs
- Read reviews and suggestions from users on different date locations
- Favorite a location for your collection
- Make a reservation for your next date

![Table-For-Two mini-demo](/readme-assets/mini-demo.gif)

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

![application architecture](/readme-assets/Table-For-Two-architecture.png)

##### Overview of application architecture

![Database schema](/readme-assets/Table-For-Two-schema.jpeg)

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
