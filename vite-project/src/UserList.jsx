import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
