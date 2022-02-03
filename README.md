# Errand Tracker App

An errand tracking app where you can share lists with friends.

The [Errand Tracker App](https://mdesanker.github.io/errand-tracker-frontend)

## Table of Contents

- [Description](#Description)
- [Motivation](#Motivation)
- [Built with](#Built-with)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
- [Set up locally](#Set-up-locally)
- [Key learnings](#Key-learnings)
- [Next steps](#Next-steps)
- [Credits](#Credits)

## Description

This errand tracking app allows users to create errands with titles, due dates, and priorities. Errand completion status is toggled by clicking or pressing (mobile) the errand. Errands can be added to projects, which can be shared with and updated by friends.

## Motivation

This app was created to facilitate errand sharing with my partner. After the birth of our daughter, the number of errands we need to do has increased, while my ability to keep track of lists has decreased.

Using a shared project on this app, we can keep each other updated in real time on what needs to be bought and where.

## Built with

This app is built with the MERN stack.

### Frontend

- React
- React Router
- Redux
- Axios
- styled-components

### Backend

- NodeJS
- ExpressJS
- JWT Authentication
- MongoDB/Mongoose
- supertest

## Set up locally

```bash
git clone git@github.com:mdesanker/errand-tracker-frontend.git
cd errand-tracker-frontend
npm install
npm start
```

## Key learnings

My biggest take away from this project was the importance of planning out the project. I did not plan nearly thoroughly enough before starting to write any code. As a result, I wrote many API endpoints that I ended up not needing and fumbled around with the design and layout of the frontend. I am happy with where I ended up, but it would have been much more efficient with a thorough plan.

Using test driven design (TDD) with the supertest module for the REST API really improved the the quality of my code in the backend. Not to mention what a rush it is to write out the tests first, then create the endpoints to turn the test conditions turn green.

## Wish list

- Implement errand sorting by priority
- Implement testing of the frontend with react testing library
- Support images in errands

## Credits

- favicon: [Flaticon](https://www.flaticon.com/free-icon/checked_190411?term=check&page=1&position=3&page=1&position=3&related_id=190411&origin=search)
