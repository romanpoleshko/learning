import { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const App = () => {
  const [ userData, setUserData ] = useState<Record<string, string> | null>(null);

  const onSuccess = (credentialResponse: CredentialResponse) => {
    const decoded: Record<string, string> = jwt_decode(credentialResponse.credential || '');

    if (decoded) setUserData(decoded);
  };

  const onError = () => {
    console.log('Login Failed');
  }

  return userData
    ? (
      <form>
        <img src={userData.picture} alt="user_picture" />
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
      </form>
    )
    : <GoogleLogin onSuccess={onSuccess} onError={onError} />;
};

export default App;
