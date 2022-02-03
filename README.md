# Errand Tracker App

An errand tracking app where you can share lists with friends.

The [Errand Tracker App](https://mdesanker.github.io/errand-tracker-frontend)

## Table of Contents

- [Description](#Description)
- [Motivation](#Motivation)
- [How to use](#How-to-use)
- [Built with](#Built-with)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
- [Lessons learned](#Lessons-learned)
- [Next steps](#Next-steps)
- [Credits](#Credits)
- [Links](#Links)

## Description

This errand tracking app allows users to create errands with titles, due dates, and priorities. Errand completion status is toggled by clicking or pressing (mobile) the errand. Errands can be added to projects, which can be shared with and updated by friends.

## Motivation

This app was created to facilitate errand sharing with my partner. After the birth of our daughter, the number of errands we need to do has increased, while my ability to keep track of lists has decreased.

Using a shared project on this app, we can keep each other updated in real time on what needs to be bought and where.

## How to use app

1. Log in or sign up for an account.

   - Username is displayed in the app and how other users find you.

   - Email is only used for logging in to your account and to generate you avatar. It needs to be a valid email format, but does not need to be a working email address.

2. Home page - Toggle, create, delete errands. Select project from select menu to filter visible errands.

3. Project page - Create and edit your own projects. Remove yourself as member from shared projects.

4. Friends page - Respond to and send friend requests, search list of users. Unfriend users.

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

## Lessons learned

- The importance of planning - I started this project with only a rough idea of what I wanted to be able to do with the app, and what the model schemas should include, and then started coding. I could have saved a lot of time and effort with a thorough plan of the functionality and UI.

- Test driven development of the REST API using the supertest library makes writing endpoints much more efficient.

## Wish list

- Implement errand sorting by priority
- Implement testing of the frontend with react testing library
- Support images in errands

## Credits

- favicon: [Flaticon](https://www.flaticon.com/free-icon/checked_190411?term=check&page=1&position=3&page=1&position=3&related_id=190411&origin=search)

## Links

- [API Repository](https://github.com/mdesanker/errand-tracker-api)
