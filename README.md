~~~ Student Expense Tracker System ~~~

A full-stack MERN application for managing daily student expenses, monthly budgets, and expense reports with user authentication.

•Features
    User Registration & Login
    JWT Authentication
    Add Expenses
    View User Expenses
    Delete Expenses
    Search Expenses
    Monthly Expense Totals
    Budget Management
    Budget Summary
    React Frontend Dashboard
    MongoDB Database

•Frontend
    React
    Axios
    CSS

•Backend
    Node.js
    Express.js
    MongoDB
    Mongoose
    JWT Authentication
    bcrypt

student-expense-tracker
│
├── backend
│   ├── controller
│   ├── model
│   ├── routes
│   ├── index.js
│   └── .env
│
├── student-expense-frontend
│   ├── src
│   │   ├── api
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── App.css
│
└── README.md

•Backend runs on : http://localhost:5000
•Frontend runs on : http://localhost:5173

•User Routes

    POST -->	/api/users/register	- Register user
    POST -->	/api/users/login -	Login user

•Expense Routes
    POST -->	/api/expenses	- Add expense
    GET -->	/api/expenses	- Get user expenses
    DELETE -->	/api/expenses/:id -	Delete expense
    GET -->	/api/expenses/search -	Search expenses
    GET -->	/api/expenses/reports/monthly -	Monthly totals

•Budget Routes
    POST -->	/api/budgets -	Set budget
    GET -->	/api/budgets/summary -	Budget summary


