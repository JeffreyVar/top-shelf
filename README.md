
<div align="center"> <img src="./README_visuals/Logo.png" width="45%"> </div>
<br />

## <div align="center">  An easy to use application for searching, saving, editing, and creating cocktail recipes! </div>
### <div align="center"> ⭐ See [<img src="./README_visuals/Logo.png" width="11%">](https://topshelf-4e8e54ffbe62.herokuapp.com/#/home) in action [HERE](https://topshelf-4e8e54ffbe62.herokuapp.com/#/home) ⭐ </div>
---

### 🗓️ _Duration: Three-Week-Sprint_

<p> This mobile-first application was built to make cocktail-making easy and accessible. </p>
<p> The search feature allows users to find cocktails by name or ingredient(s). When a user finds a recipe they like, they can save it for future reference. Saved cocktail recipes can also be customized to accommodate a user's specific tastes. Or, users can make their own recipes completely from scratch. <p>

---

# Design

Application flowcharting and wireframes were designed using Figma. Before ever writing a line of code, several days were spent on scoping TopShelf. Taking the time to parse through the data from the API, set up the database, design routes, and create each wireframe helped ensure that the application flowed logically. The goal was to have a final design that was user-friendly and consistently themed throughout.

<p align="center"> 
  <img float="center" src="./README_visuals/figma_wireframes.png" height="700px">
</p>

--- 

# Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

---

# Setup and Installation

- Create a database using the provided `database.sql` file, title the DB `top_shelf`
- Run the queries in the included `database.sql` file
- Run `npm install` from the project root directory
- Run `npm run server` to run the node server
- In a separate terminal tab, run `npm run client` to launch the React app

---

# Built with

JavaScript <br />
React <br />
Redux <br />
Redux-Saga <br />
Node.js <br />
Express <br />
PostgreSQL <br />
[Material UI](https://mui.com/) <br />
[Garamond Font](https://www.npmjs.com/package/@fontsource/eb-garamond) <br />
[TheCocktailDB API](https://www.thecocktaildb.com/) <br />
[Postico](https://eggerapps.at/postico/) <br />
[Visual Studio Code](https://code.visualstudio.com/) <br />

---

<img align="right" src="./README_visuals/Search_Gif.gif" height="400px">
<img align="right" src="./README_visuals/transparent.png" width="35px" height="400px">

# Application Use

- Users will first need to **REGISTER** using a username and password
- Once logged in, users will be navigated to the **HOME PAGE**
- From the **HOME PAGE**, users can search for a cocktail recipe by entering a name in the search bar, selecting the **'By Name'** radio button, and clicking on the <img src="./README_visuals/SEARCH_Button.png" width="12%"> button
- Users can also search by ingredient by selecting the **'By Ingredient'** radio button and separating each entered ingredient by a comma
- Clicking on a cocktail reveals its full recipe details
- To save, select the <img src="./README_visuals/ADD_Button.png" width="12%"> button
- Once saved, a cocktail can be edited, or even removed from the user's **SAVED** list

<br />

<img align="left" src="./README_visuals/Create_Gif.gif" height="400px">
<img align="left" src="./README_visuals/transparent.png" width="30px" height="400px">

- Cocktails can also be created from scratch by selecting the <img src="./README_visuals/CREATE_Button.png" width="14%"> button on the **HOME PAGE**
- Created cocktails are then also added to the user's **SAVED** list
- The&nbsp; <img src="./README_visuals/menuIcon.png" width="2%">&nbsp; button allows navigation BACK, to the **HOME PAGE**, to the **SAVED** list, or to the CREATE new cocktails page
- The  <img src="./README_visuals/HomeIcon.png" width="8%">  button navigates back to the **HOME PAGE**
- The&nbsp; <img src="./README_visuals/profileIcon.png" width="2%">&nbsp; button navigates to the **ABOUT PAGE**, or allows for LOGOUT
<br />
<br />
<br />
<br />
<br />
<br />
<br />

---

# Future Features

### Manage/View Shelf
<p>Users would have to option to add items they have in their personal bar shelf. Items would be sorted by types of liquor (whiskey, rum, tequila, etc.) and other categories (mixers, garnishes, bitters, etc).</p>

---

# 👏🏾 Special Thanks 👏🏾

I would like to extend my deepest gratitude and appreciation to the instructors, code-coaches, and to all of my cohortmates at [Prime Digital Academy](www.primeacademy.io), thank you!
<br />

