import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

  function toHome() {
    console.log('To Home');
    navigate('/');
  }
  function toPokemon() {
    navigate('/Pokemon');
  }
  function toAboutUs() {
    navigate('/AboutUs');
  }
  return (
    
    <div className="navbar">
      <h1>PokedeX</h1>
      <ul>
        <li className="navbar-item">
        <a href="/" onClick={toHome}>
          Home
        </a>
        </li>
        <li className="navbar-item">
        <a href="pokemon" onClick={toPokemon}>
          Pokemon
        </a>
        </li>
        <li className="navbar-item">
        <a href="aboutUs" onClick={toAboutUs}>
          About Us
        </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
