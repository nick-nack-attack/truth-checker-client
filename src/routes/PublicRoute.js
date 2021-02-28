// Redirect utility for non-authenticated users
import React    from 'react';
import {Route}  from 'react-router-dom';

// non-signed users can access components through this route
const PublicOnlyRoute = ({ component, ...props }) => {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        <Component {...componentProps} />
      )}
    />
  );
};

export default PublicOnlyRoute;
