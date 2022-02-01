# Errand Tracker App

An errand tracking app where you can share lists with friends.

[Errand Tracker Demo]()

## Table of Contents

- [Description](#Description)
- [Motivation](#Motivation)
- [Built with](#Built-with)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
- [Set up locally](#Set-up-locally)
- [Key learnings](#Key-learnings)
- [Next steps](#Next-steps)

## Description

This errand tracking app allows users to create accounts, where they can write and track errands, either freely or categorized into projects. Errands are only required to have a title, but users can also specify a project, due date, and priority. Errands with a specified priority are highlighted with a corresponding color on the dashboard. Clicking on an errand toggles its completion status. Errands can be deleted when no longer needed by toggling edit mode on the dashboard.

Users can create, edit, and delete projects to group errands together in the project view. Friends can be added as members to user projects. Project members are able to create, complete, and delete errands associated with their project, but they cannot edit the project name or member list.

Users can send friend requests, unfriend, and manage requests from others in the friend view. Received friend requests are indicated with a counter on the friend icon of the nav bar. A search bar allows users to filter the list of all users to search for specific usernames.

## Motivation

I created this app as a more efficient solution to using a whiteboard on my fridge as a way to track errands. Since the birth of my daughter, the number of errands I have has seemed to increase significantly. When something is getting low, my partner or I would make a note on the whiteboard. There were two significant problems with this approach:

1. I often forget to take a picture of the white board before going on errands. I then either have to ask my partner to take a picture and send it to me, or try and remember what is on the board.

2. I don't always plan when I run errands. Sometimes I'll drop by a store on the way home. If it's a spontaneous errand run, I am stuck without a list.

This app would be accessible through a link on my phone which would allow me to track errands I needed to run, and categorize them by store/location. I wanted the project member and friend functionality so that I could create shared lists with my partner. This allows her to add items to the lists directly and I don't have to search through our message history to find things.

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
