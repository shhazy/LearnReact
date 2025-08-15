// Import React and useState hook
import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import {counterContext} from './context/context'
function LoginForm() {
  const counter = useContext(counterContext);
  // State to store form input values
  const [formData, setFormData] = useState({ email: '', password: '' });

  // State to store validation error messages
  const [errors, setErrors] = useState({});

  // Function to validate form fields
  const validate = () => {
    const newErrors = {}; // Temporary object to collect error messages

    // Validate Email
    if (!formData.email) {
      newErrors.email = 'Email is required'; // If email is empty
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'; // If email format is incorrect
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = 'Password is required'; // If password is empty
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'; // If too short
    }

    // Update error state
    setErrors(newErrors);

    // Return true if no errors (form is valid), else false
    return Object.keys(newErrors).length === 0;
  };

  // Handle input field changes
  const handleChange = (e) => {
    // Update formData with new value for the input that changed
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Optionally clear error message for the changed field
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    if (validate()) {
      // If form is valid, you can now send data to a backend or show a success message
      alert('Form submitted');
    }
  };

  return (
    <>
    <Helmet>
            <title>Login Form | Learn React</title>
            <meta name="description" content="Welcome to the homepage" />
            <meta property="og:title" content="Home | My Website" />
            <meta property="og:description" content="Welcome to the homepage" />
          </Helmet>
          <Navbar />
          <div className='main-wrapper'>
            <p>Counter is {counter}</p>
    <form onSubmit={handleSubmit}>
      {/* Email Field */}
      <div>
        <label>Email:</label><br />
        <input
          name="email"                          // Input name matches key in formData
          value={formData.email}                // Controlled input value
          onChange={handleChange}               // Handle input change
        />
        {/* Show email error if it exists */}
        <div style={{ color: 'red' }}>{errors.email}</div>
      </div>

      {/* Password Field */}
      <div>
        <label>Password:</label><br />
        <input
          name="password"                       // Input name matches key in formData
          type="password"                       // Hide password input
          value={formData.password}             // Controlled input value
          onChange={handleChange}               // Handle input change
        />
        {/* Show password error if it exists */}
        <div style={{ color: 'red' }}>{errors.password}</div>
      </div>

      {/* Submit Button */}
      <button type="submit">Login</button>
    </form>
    <Link to="/"> Home Page</Link>
    </div>
    </>
  );
}

// Export component so it can be used elsewhere
export default LoginForm;
