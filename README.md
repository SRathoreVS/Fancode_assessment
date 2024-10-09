# THE TASK (Understanding)

A scenario where we verify that all users in the city called "FanCode" have completed more than half of their to-do tasks.

## Scenario Requirements

### 1. Users in the City "FanCode":
- A user belongs to the city "FanCode" if their latitude is between -40 to 5 and their longitude is between 5 to 100.
- These coordinates will be used to filter users from the `/users` API.

### 2. To-Do Task Completion:
- We need to check the to-do tasks of each user from the `/todos` API.
- The requirement is that the percentage of completed tasks for each user must be greater than 50%.

## Resources (APIs)
- We use the APIs from [JSONPlaceholder](http://jsonplaceholder.typicode.com/), specifically:
   1. `/users` to get user data.
   2. `/todos` to get to-do tasks for each user.

---

# FLOW OF CODE

## 1. `src/api/` Folder
This folder contains the files responsible for interacting with the external APIs (`/users` and `/todos`). These files handle all the data fetching logic.

### - `todosApi.js`:
1. This file contains the logic to fetch to-do tasks for a specific user from the API.
2. It exports a function called `getTodosByUserId(userId)` that makes an HTTP request to the `/todos` endpoint using Axios.

### - `usersApi.js`:
1. This file contains the logic to fetch all users from the API.
2. It exports a function called `getUsers()` that retrieves the user data from the `/users` endpoint using Axios.

## 2. `src/helpers/` Folder
This folder contains utility functions that perform specific operations or calculations, making it easier to reuse logic throughout the project.

### - `fancodeBuissLogic.js`:
1. `isFanCodeCity(lat, long)`: Determines whether a user belongs to the city "FanCode" by checking if the user's latitude and longitude fall within the specified range.
2. `calculateTaskCompletionPercentage(todos)`: Calculates the percentage of tasks that a user has completed by comparing the number of completed tasks with the total number of tasks.
3. These functions are used in the main component to help filter users and calculate task completion.

## 3. `src/components/` Folder
This folder contains the React components that handle the UI logic and presentation. Each component focuses on a specific functionality.

### - `FanCodeCheck.js`:
1. This component is responsible for fetching user data, checking if they belong to "FanCode," and calculating their task completion percentage.
2. It uses React's `useEffect` to trigger the data fetching when the component is first loaded and `useState` to manage the state of the users and loading status.
