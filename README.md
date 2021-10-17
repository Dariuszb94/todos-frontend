# Todo list

The App lets you add, edit and delete todos.

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

On init, a list of todos is fetched from http://localhost:8080/todos. If an error occured, error will be shown. If there is no todos, no todo will be shown.

After submitting todo, new todo will be displayed on the list below ("name" and "status"). There is option for delete or edit it, you can also delete all todos by clicking "Reset".

Editing todo can be done after clicking "Edit", there is a possibility to change name and/or status of it. If no name is submitted, name will be unchanged.

## Technologies

Project is created with:

- React version: 17.0.2
- Material-ui/icons: 4.11.2,
- MSW : 0.35.0,
- React-router-dom : 5.3.0,
- Styled-components : 5.3.1

## Setup

To run this project, download a repo, then go to repo folder and open terminal:

```
$ npm install
$ npm run start
```
