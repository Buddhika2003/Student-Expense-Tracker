import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard({ setIsLoggedIn }) {
  const [expenses, setExpenses] = useState([]);
  const [monthlyTotals, setMonthlyTotals] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const getExpenses = async () => {
    try {
      const res = await API.get("/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMonthlyTotals = async () => {
    try {
      const res = await API.get("/expenses/reports/monthly");
      setMonthlyTotals(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExpenses();
    getMonthlyTotals();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addExpense = async (e) => {
    e.preventDefault();

    try {
      await API.post("/expenses", formData);

      setFormData({
        title: "",
        amount: "",
        category: "",
        date: ""
      });

      getExpenses();
      getMonthlyTotals();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await API.delete(`/expenses/${id}`);
      getExpenses();
      getMonthlyTotals();
    } catch (err) {
      console.log(err);
    }
  };

  const searchExpenses = async (e) => {
    e.preventDefault();

    try {
      const res = await API.get(`/expenses/search?keyword=${keyword}`);
      setExpenses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const clearSearch = () => {
    setKeyword("");
    getExpenses();
  };

  const monthName = (monthNumber) => {
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];

    return months[monthNumber - 1];
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Student Expense Dashboard</h1>
        <button className="logout" onClick={logout}>Logout</button>
      </div>

      <div className="card">
        <h2>Add Expense</h2>

        <form onSubmit={addExpense}>
          <div className="form-grid">
            <input
              type="text"
              name="title"
              placeholder="Expense title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <br />

          <button type="submit">Add Expense</button>
        </form>
      </div>

      <div className="card">
        <h2>Search Expenses</h2>

        <form onSubmit={searchExpenses}>
          <input
            type="text"
            placeholder="Search by title or category"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <button type="submit">Search</button>
          <button type="button" onClick={clearSearch}>Clear</button>
        </form>
      </div>

      <div className="card">
        <h2>Monthly Totals</h2>

        {monthlyTotals.length === 0 ? (
          <p>No monthly totals found</p>
        ) : (
          monthlyTotals.map((item) => (
            <div className="expense-item" key={item._id}>
              <h3>{monthName(item._id)}</h3>
              <p>Total: Rs. {item.totalAmount}</p>
            </div>
          ))
        )}
      </div>

      <div className="card">
        <h2>Expense List</h2>

        {expenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          expenses.map((expense) => (
            <div className="expense-item" key={expense._id}>
              <h3>{expense.title}</h3>
              <p>Amount: Rs. {expense.amount}</p>
              <p>Category: {expense.category}</p>
              <p>Date: {new Date(expense.date).toLocaleDateString()}</p>

              <button
                className="delete-btn"
                onClick={() => deleteExpense(expense._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;