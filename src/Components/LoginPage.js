import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [createProfile, setCreateProfile] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const isEmailValid = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password must be at least 6 characters long
    return password.length >= 6;
  };

  const handleLogin = () => {
    // Implement your login logic here
    // Check credentials or use authentication service
    // For simplicity, let's assume a hardcoded email and password
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password';

    if (
      (email === hardcodedEmail && password === hardcodedPassword) ||
      (newEmail === email && newPassword === password)
    ) {
      setLoggedIn(true);
      setCreateProfile(true); // Set createProfile to true after successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleCreateProfile = () => {
    // If the user has not set a new email and password, show the create profile form
    if (!newEmail || !newPassword || !confirmPassword || !name) {
      alert('Please fill in all the required fields.');
    } else if (!isEmailValid(newEmail)) {
      alert('Invalid email. Please enter a valid email address.');
    } else if (!isPasswordValid(newPassword)) {
      alert('Password must be at least 6 characters long.');
    } else if (newPassword !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
    } else {
      // Implement your logic to save the new email, password, and name
      alert('Profile created successfully! You can now log in.');
      setCreateProfile(false);
      setEmail(newEmail);
      setPassword(newPassword);
      setNewEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setName('');
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      {loggedIn ? (
        <div>
          <h3>Welcome</h3>
          {/* Display user information or redirect to the user's profile */}
        </div>
      ) : (
        <div>
          {createProfile ? (
            <div>
              <h3>Create Profile</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input"
              />
              <input
                type="text"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="login-input"
              />
              <button className="create-profile-btn" onClick={handleCreateProfile}>
                Save and Login
              </button>
            </div>
          ) : (
            <div>
              <h3>Login</h3>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
              <p className="create-account">
                Don't have an account?{' '}
                <span className="create-account-link" onClick={() => setCreateProfile(true)}>
                  Create Profile
                </span>
                .
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
