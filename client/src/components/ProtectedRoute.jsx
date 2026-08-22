import React from 'react';

const ProtectedRoute = ({ children }) => {
  return children ? children : <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
