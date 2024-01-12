import React, { useEffect, useState } from 'react';
import facade from './util/apiFacade';

const ProtectedComponent = ({ requiredRole }) => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const roles = facade.getUserRoles();
    const access = roles.includes(requiredRole);
    setHasAccess(access);
  }, [requiredRole]);

  if (hasAccess) {
    return <div>This component requires {requiredRole} role. User has access!</div>;
  } else {
    return <div>Sorry, you don't have the required role to access this component.</div>;
  }
}

export default ProtectedComponent;
