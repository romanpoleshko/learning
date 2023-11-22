import useStore from "src/store";
import { User } from "src/types";

import './styles.css';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user: User | null = useStore((state) => state.user);

  const onLogout = () => navigate('/login');

  return (
    <div className="profile-container">
      <form>
        <img src={user?.picture as string} alt="user_picture" />
        <p><b>Email:</b> {user?.email}</p>
        <p><b>Name:</b> {user?.name}</p>
        <button onClick={onLogout}>Logout</button>
      </form>
    </div>
  );
};

export default Profile;
