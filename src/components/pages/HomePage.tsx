import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Animal Care App!</h1>
      <Link to="/animals">View Animals</Link>
      <Link to="/add-animals">Add Animals</Link>
    </div>
  );
}

export default HomePage;