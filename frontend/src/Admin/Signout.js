// SignOut.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform sign-out logic here
    // For example, clear authentication tokens, user data, etc.

    // Redirect the user to the home page after signing out
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>Signing Out...</h2>
      {/* You can add a spinner or other UI indication if needed */}
    </div>
  );
}

export default SignOut;
