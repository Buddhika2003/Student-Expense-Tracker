# Student Expense Tracker System

A full-stack MERN application for managing daily student expenses, monthly budgets, and expense reports with user authentication.

---

# Problem Description

Many university students struggle to manage their expenses properly.

Students often spend money without tracking it and may run out of money before the end of the month.

Most students do not have a simple system to:

- Record daily expenses
- Track monthly spending
- Search past expenses
- Manage monthly budgets

This creates financial management problems for students.

---

# Proposed Solution

The system allows users to:

- Register and login securely
- Add and manage expenses
- Search expenses
- View monthly expense totals
- Set monthly budgets
- View remaining budget balance

The system provides a simple and user-friendly dashboard to manage personal finances.

---

# Features

- User Registration & Login
- JWT Authentication
- Add Expenses
- View User Expenses
- Delete Expenses
- Search Expenses
- Monthly Expense Totals
- Budget Management
- Budget Summary
- React Frontend Dashboard
- MongoDB Database Integration

---

# Technologies Used

## Frontend

- React
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

# Tools

- VS Code
- Postman
- MongoDB Compass
- GitHub

---

# Folder Structure

```text
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
```

---

# Running Ports

## Backend Runs On

```text
http://localhost:5000
```

## Frontend Runs On

```text
http://localhost:5173
```

---

# Process in Postman

## 1. User Registration

```http
POST http://localhost:5000/api/users/register
```

<img width="1280" height="800" alt="User Registration" src="https://github.com/user-attachments/assets/3248ba88-ce34-441f-b8c5-814934d7f46c" />

---

## 2. User Login

```http
POST http://localhost:5000/api/users/login
```

<img width="1280" height="800" alt="User Login" src="https://github.com/user-attachments/assets/037727e6-c292-4b4e-b373-40713bf1bbb6" />

---

## 3. Add Expense

```http
POST http://localhost:5000/api/expenses
```

<img width="1280" height="800" alt="Add Expense" src="https://github.com/user-attachments/assets/5c64913f-ddec-4c7f-8ab3-7db3dc860c2a" />

---

## 4. Get Expenses

```http
GET http://localhost:5000/api/expenses
```

<img width="1280" height="800" alt="Get Expenses" src="https://github.com/user-attachments/assets/154abb44-913a-4e0d-a644-9adcb803697c" />

---

## 5. Delete Expense

```http
DELETE http://localhost:5000/api/expenses/:id
```

<img width="1280" height="800" alt="Delete Expense" src="https://github.com/user-attachments/assets/4622e6f5-ef28-43c1-b9d5-5b2387109738" />
