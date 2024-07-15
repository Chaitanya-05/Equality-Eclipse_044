import React from 'react';
import { BrowserRouter as Router, Route,  Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Online Bookstore</Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Books</Link>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link className="nav-item nav-link" to="/register">Register</Link>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={BookList} />
          <Route path="/book/:id" element={BookDetails} />
          <Route path="/login" element={Login} />
          <Route path="/register" element={Register} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;