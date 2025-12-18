import NavLogo from '../../assets/navLogo.jpg';
import menu_burger from '../../assets/menu__burger.jpg';
import styles from './Navigation.module.scss';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'About us', href: '#about us' },
  { title: 'Contact', href: '#contact' },
];

const Nav = ({ setActive }) => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.brand}>
        <a href="logoLinks">
          <img className={styles.logo} src={NavLogo} alt="navLogo" />
        </a>
        <p className={styles.text}>Abstractly</p>
      </div>
      <div>
        <ul className={styles.links}>
          {navLinks.map((item) => (
            <li key={item}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttons}>
        <button>Learn More</button>
        <button>See Pricing</button>
      </div>
      <img
        onClick={() => setActive(true)}
        className={styles.burgers}
        src={menu_burger}
        alt="burger_logo"
      />
    </nav>
  );
};

export default Nav;
