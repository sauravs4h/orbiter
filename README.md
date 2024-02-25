# ORBITER

## Description
This project implements login and signup functionality with backend built using Node.js and frontend using React. It includes a backend API with endpoints for user signup, login, and retrieving user profile, along with frontend pages for login, signup, and user profile. If a user attempts to access the profile page without being logged in, they will be redirected to the login page. Redux is utilized for state management in the frontend.

## Backend

### Setup
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Create a `.env` file and add the necessary environment variables (e.g., database connection URL, JWT secret).

### Running the Server
- Run `npm start` to start the backend server.

### Endpoints

#### Signup
- Endpoint: `POST /api/signup`
- Description: Creates a new user account.
- Request Body:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "userName": "johndoe",
    "email": "johndoe@example.com",
    "mobile_no": "1234567890",
    "password": "password"
  }
  ```
- Response:
  - 200 OK: `{ "message": "signup successfull" }`
  - 401 Unauthorized: `{ "message": "user already available" }`

#### Login
- Endpoint: `POST /api/login`
- Description: Logs in an existing user.
- Request Body:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password"
  }
  ```
- Response:
  - 200 OK: `{ "msg": "Login Successfull", "token": "JWT_TOKEN" }`
  - 401 Unauthorized: `{ "message": "Please signup first" }` or `{ "message": "Wrong credentials" }`

#### Get User Profile
- Endpoint: `GET /api/profile/:userName`
- Description: Retrieves user profile by username.
- Response:
  - 200 OK: `{ "user": { "firstName": "John", "lastName": "Doe", "userName": "johndoe", "email": "johndoe@example.com", "mobile_no": "1234567890" } }`
  - 404 Not Found: `{ "message": "User not found" }`

## Frontend

### Setup
1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Run `npm install` to install dependencies.

### Running the Application
- Run `npm start` to start the frontend server.

### Pages
- Login: `/`
- Signup: `/signup`
- User Profile: `/profile/:userName`

### Redux
Redux is used for state management in the frontend.


## Deployment
- Backend Deployment Link: https://orbiter.onrender.com
- Frontend Deployment Link: https://orbiters4h.netlify.app/


