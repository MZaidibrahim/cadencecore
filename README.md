# Cadence Core Consultancy - Website Project

This project is a MERN stack application (MongoDB, Express, React, Node.js) featuring secure JWT authentication and a database-backed contact form.

## 📋 Prerequisites

Before running the application, ensure the receiving machine has:
1.  **Node.js** (v18 or higher)
2.  **MongoDB**: Either a local instance running on port `27017` OR a MongoDB Atlas connection string.

---

## 🚀 Setup Instructions

### 1. Backend Setup (Server & Database)

The backend handles authentication and stores contact form messages.

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Configure Environment Variables (CRITICAL)**:
    *   Create a file named `.env` in the `backend` directory.
    *   Copy the contents from `.env.example`.
    *   **Action Required**: Update `MONGO_URI` with the actual database connection string.

    **Example `.env`:**
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/cadencecore
    JWT_SECRET=your_super_secure_secret_key_here_123
    ```
    > *Note: If using MongoDB Atlas, the URI will look like `mongodb+srv://user:pass@cluster...`*

4.  Start the backend server:
    ```bash
    npm start
    ```
    *You should see: "Server running on port 3000" and "MongoDB Connected".*

### 2. Frontend Setup (React UI)

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link provided (usually `http://localhost:5173`) in your browser.

---

## 🗄️ Database Structure

The application automatically creates the database `cadencecore` and two collections upon data entry:

*   **`users`**: Stores registered users. Passwords are securely hashed using `bcrypt`.
*   **`messages`**: Stores submissions from the Contact form.

## 🔑 Key Features

*   **Authentication**: Users can Sign Up and Sign In. JWT tokens are stored in `localStorage` to maintain sessions.
*   **Contact Form**: Submissions are validated and stored in the database.
*   **Notifications**: Uses `react-hot-toast` for real-time user feedback.

## ⚠️ Troubleshooting

*   **MongoDB Connection Error**: Ensure MongoDB is running or your IP is whitelisted in MongoDB Atlas. Check the `MONGO_URI` in `.env`.
*   **Port Config**: The frontend expects the backend at `http://localhost:3000`. If you change the backend port, update the fetch URLs in `frontend/src/context/AuthContext.jsx` and `frontend/src/sections/Contact.jsx`.
