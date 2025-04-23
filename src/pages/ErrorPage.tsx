import { Link } from "react-router-dom"; // Import Link if you're using React Router
import React from 'react';  

const ErrorPage = () => {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404: Page Not Found</h1>
      <h2>¯\_(ツ)_/¯</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>
        Go back to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
