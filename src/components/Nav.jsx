import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={() => navigate('/')}>
        Cricket Craft
      </div>
    </nav>
  );
};

export default Nav;
