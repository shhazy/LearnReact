import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
function UserList() {
  // State to store users
  const [users, setUsers] = useState([]);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // State to track errors
  const [error, setError] = useState(null);

  // useEffect runs when component loads (like componentDidMount)
  useEffect(() => {
    // Start loading
    setLoading(true);

    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Check if response is OK
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json(); // Parse JSON
      })
      .then((data) => {
        setUsers(data);      // Store the user data in state
        setLoading(false);   // Turn off loading
      })
      .catch((err) => {
        setError(err.message); // Store error message
        setLoading(false);     // Turn off loading
      });
  }, []); // Empty dependency array = run only once after first render

  // Show loading text
  if (loading) return <div>Loading...</div>;

  // Show error if any
  if (error) return <div>Error: {error}</div>;

  // Show user list
  return (
    <>
    <Navbar />
     <Helmet>
            <title>User List | My Website</title>
            <meta name="description" content="Welcome to the homepage" />
            <meta property="og:title" content="Home | My Website" />
            <meta property="og:description" content="Welcome to the homepage" />
          </Helmet>
    <div>
      <h2>User List</h2>
      <ul style={{ backgroundColor: "white" }}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default UserList;
