# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs
PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. We will use a pre-existing API to build a frontend user experience for users to interact with photos!

## Final Product
**View of Homepage with All Photos**

**View of Heart Icon with a notification in the navigation when photo liked**

**View of Photo Modal when photo liked**

**View of Similar Photos in the Photo Modal**

**View of Travel photos based on the topics category(Travel)**

**View of People photos based on the topics category(People)**

## Purpose
This project was created, designed, and built by: 
* [shivangi0109](https://github.com/shivangi0109)

for Web Development React learning purpose at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program).

### Project Approach
* Build components in isolation by starting with those at the outermost nodes of the component tree (e.g. buttons, individual list items). You'll work your way up the tree to the components that need to use the ones built first.
* Manage the state of the application.
* Retrieve data from an API and render the data using components.
* Implement advanced React patterns to manage the state and add live updates.

### Project Goals 
* A user can view photos from the homepage loaded from the API.
* The user can navigate to different photo categories, also called topics.
* The user can click on a photo to view a larger version of the photo and relevant / similar photos.
* The user can like a photo from anywhere within the application where the photo is displayed.
* The user can view a heart icon with a notification in the navigation if there are liked photos.
* The navigation will consist of different topics and heart icon.
* The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

### Technical Specifications with API References
* [React](https://react.dev/)
* [Create React App](https://react.dev/learn/start-a-new-react-project#gatsby-focus-wrapper)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Express](https://expressjs.com/)

### Tools
The PhotoLabs client application will use Create React App (CRA) and Express will be the basis for the PhotoLabs API server application.

Note that two different servers will be running during development:
* Client-side Webpack development server and
* API server to provide photo data

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
