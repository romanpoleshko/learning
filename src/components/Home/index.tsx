import { Link } from "react-router-dom";

import useStore from "src/store";

import './style.css';

const Home = () => {
  const avatar: string = useStore((state) => state.user?.picture || '');
  const name: string = useStore((state) => state.user?.name || '');

  return (
    <div className="main">
      <div className="profile-link-container">
        <img src={avatar} alt="user_picture" />
        <Link to='/profile'>{name}</Link>
      </div>
      <h1 className="title">Welcome!</h1>
    </div>
  );
};

export default Home;
