import navLogo from '../../assets/navLogo.jpg';
import menu_burger from '../../assets/menu__burger.jpg';
import navStyle from './Navigation.module.scss';

const navLinks = ['Home', 'Features', 'Pricing', 'About us', 'Contact'];

const Nav = ({ setActive }) => {
  return (
    <nav className={navStyle.navigation}>
      <div className={navStyle.brand}>
        <img className={navStyle.logo} src={navLogo} alt="navLogo" />
        <p className={navStyle.text}>Abstractly</p>
      </div>
      <div>
        <ul className={navStyle.links}>
          {navLinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={navStyle.buttons}>
        <button>Learn More</button>
        <button>See Pricing</button>
      </div>
      <img
        onClick={() => setActive(true)}
        className={navStyle.burger__logo}
        src={menu_burger}
        alt="burger_logo"
      />
    </nav>
  );
};

export default Nav;
