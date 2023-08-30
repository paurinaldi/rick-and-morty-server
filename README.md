# Radium Rocket FullStack Dev Coding Challenge

## Approach

- You can choose between using a monorepo to host the frontend and backend repositories or creating two separate repositories. It is at the choice of the developer.
- You must figure out on your own how to consume the data from the following api to meet the requirements described below
  https://rickandmortyapi.com/documentation
- The designs comes out of your imagination.
- The development of the project can be carried out as a team.

## Good Practice Requirements

- There should be no lint errors or warnings
- The code should be readable and maintainable
- The code should be well documented
  Frontend Requirements
- The app should be able to load the data from the api and display it in a list
- There must be a pagination of 20 characters per page.
- Pagination should appear below the list
- If I click on a character, it should redirect me to a page with details of that character. Use id for routing.
- A selector should appear on the main page that allows you to select the type of order of the character. By default it should be alphabetical, other options are: by planet and by gender. If you choose by planet or by gender, you must order them alphabetically. For example, Earth, Mars, Venus. The same for the genders, feminine, masculine.
- Create an initial screen where users can register or log in. Use Firebase for authentication.
- Users should be able to fave characters.
- A new section of the web must be created so that each user can view their favorite characters.
- A new section should be created where the episodes of the series are listed.
- Users should be able to leave comments on episodes and view comments left by other users.

## Backend Requirements

- Create a server which consumes the api mentioned above and is able to save the data in a database.
- Backend architecture must be REST.
- Each user's record in the database must contain the firebaseUid key and must match the respective one in the Firebase console.
- Characters that users favor must be saved in the database on each user's record.
- Episode data must be saved in the database and an endpoint must be created to be able to consume it from the web.

## Extra

- Use Redux for state management, and implement thunks for asynchronous actions.
- The order of the characters must be done in the backend so that the app does not carry out any expensive process.
- Use the tools that React offers to improve the performance of the web.
- The web application must be 100% responsive.
- Create unit test for backend and frontend.
