import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmSignUpScreen = (props) => {
  const location = useLocation()
  console.log({location})
  return (
    <div>
      <h1>this is just another webpage</h1>
      <pre>{JSON.stringify(location.state?.formContent,null,1)}</pre>
    </div>
  );
}

export { ConfirmSignUpScreen};
