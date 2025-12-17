import navLogo from '../../assets/navLogo.jpg';
import menu_burger from '../../assets/menu__burger.jpg';
import navStyle from './Navigation.module.scss';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Features', href: '/features' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'About us', href: '/about us' },
  { title: 'Contact', href: '/contact' },
];

const Nav = ({ setActive }) => {
  return (
    <nav className={navStyle.navigation}>
      <div className={navStyle.brand}>
        <a href="logoLinks">
          <img className={navStyle.logo} src={navLogo} alt="navLogo" />
        </a>
        <p className={navStyle.text}>Abstractly</p>
      </div>
      <div>
        <ul className={navStyle.links}>
          {navLinks.map((item) => (
            <li key={item}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={navStyle.buttons}>
        <button>Learn More</button>
        <button>See Pricing</button>
      </div>
      <img
        onClick={() => setActive(true)}
        className={navStyle.burgers}
        src={menu_burger}
        alt="burger_logo"
      />
    </nav>
  );
};

export default Nav;
