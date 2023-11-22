import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import useStore from 'src/store';
import { User } from 'src/types';

import './styles.css';

const Login = () => {
  const setUser = useStore((state) => state.setUser);

  const onSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded: User = jwt_decode(credentialResponse.credential);
      
      setUser(decoded);
    }
  };

  const onError = () => {
    console.log('Login Failed');
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default Login;
