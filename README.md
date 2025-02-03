# Full Stack Blog Project

## Overview

This project is a **Full Stack Blog** application that uses **Vue.js** (with **Vite**) for the frontend and **MySQL** for the backend. It allows users to **create** and **view** blog posts.

The repository includes both **frontend** and **backend** code, with a MySQL database for data persistence.

---

## Features

- **Frontend (Vue.js + Vite)**:
  - Display a list of blog posts.
  - Create new blog posts via a form.

- **Backend (Node.js + Express + MySQL)**:
  - API endpoints for creating and reading posts.
  - MySQL used to store blog post data.

---

## Getting Started

Follow these steps to set up and run the project locally in a **virtual environment**.

### 1. **Clone the Repository**

To get started, clone the repository from GitHub to your local machine:

```bash
git clone https://github.com/your-username/the-full-stack.git
cd the-full-stack
```

### 2. **Set Up the Backend**

The backend uses **Node.js** and **MySQL**.

1. **Install MySQL** (if not already installed)
   - Download and install MySQL from [MySQL Downloads](https://dev.mysql.com/downloads/).
   - Set up a new MySQL database, e.g., `blog_db`.

2. **Install Backend Dependencies**

   Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

   Then install the backend dependencies:

   ```bash
   npm install
   ```

3. **Configure MySQL Connection**

   In `server.js`, ensure the MySQL connection details are correct for your environment:

   ```javascript
   const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',    // Replace with your MySQL username
     password: '',    // Replace with your MySQL password
     database: 'blog_db' // Replace with your MySQL database name
   });
   ```

4. **Run the Backend Server**

   In the `backend` directory, start the server:

   ```bash
   node server.js
   ```

   The backend API should now be running on `http://localhost:3001`.

### 3. **Set Up the Frontend**

The frontend uses **Vue.js** and **Vite**.

1. **Install Node.js** (if not already installed)

   Download and install Node.js from [Node.js Downloads](https://nodejs.org/en/download/).

2. **Install Frontend Dependencies**

   Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

   Install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Run the Frontend**

   In the `frontend` directory, start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:5173`.

---

## Setting Up in a Virtual Environment

To ensure your project is isolated, it's best to use a **virtual environment** for both the backend and frontend.

### Backend Virtual Environment (Node.js)

1. **Use Node Version Manager (NVM)**:
   - Install **NVM** to manage Node.js versions and maintain isolated environments. [NVM Installation Guide](https://github.com/nvm-sh/nvm).

2. **Install the Desired Version of Node.js**:

   ```bash
   nvm install node
   nvm use node
   ```

3. **Create an `npm` environment** for your project to keep dependencies isolated.

   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install
   ```

### Frontend Virtual Environment (Vue.js + Vite)

1. **Use NVM** to manage your Node.js version in the frontend as well.

2. **Initialize the frontend environment**:

   If you are not already using a `package-lock.json` file (in case of a fresh installation), you can initialize your frontend environment by running:

   ```bash
   npm install
   ```

---

## Database Setup

Make sure your MySQL database is configured correctly:

1. **Create the MySQL Database**:
   - Log into MySQL:

     ```bash
     mysql -u root -p
     ```

   - Create the database `blog_db`:

     ```sql
     CREATE DATABASE blog_db;
     ```

2. **Create the Posts Table**:
   In the `blog_db` database, create the `posts` table:

   ```sql
   CREATE TABLE posts (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     content TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

---

## Common Errors

### 1. **CORS Errors**

If you encounter CORS issues while making requests from the frontend to the backend, make sure that you’ve included the `cors` package in your backend:

```bash
npm install cors
```

Then, enable CORS in your `server.js`:

```javascript
const cors = require('cors');
app.use(cors());
```

### 2. **MySQL Connection Errors**

Ensure that your MySQL server is running and your credentials in `server.js` are correct. Check the MySQL logs if you continue to face issues.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Conclusion

This documentation provides instructions for setting up the **Full Stack Blog Project** in a local development environment, including setting up the backend (Node.js + MySQL) and frontend (Vue.js + Vite). Follow the steps carefully to get the application up and running.
