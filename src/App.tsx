import { Routes, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import Profile from 'src/components/Profile';
import Login from 'src/components/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default App;
