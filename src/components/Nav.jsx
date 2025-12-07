import header_logo from '../assets/logo_header.jpg';
import menu_burger from '../assets/menu__burger.jpg';
import style from './Header.module.scss';
import navStyle from './Navigation.module.scss';

const navLinks = ['Home', 'Features', 'Pricing', 'About us', 'Contact'];

const Nav = ({ setActive }) => {
  return (
    <nav className={navStyle.navigation}>
      <div className={style['header__brand']}>
        <img className={style.header_logo} src={header_logo} alt="" />
        <p className={style['header__text']}>Abstractly</p>
      </div>
      <div>
        <ul className={navStyle['nav__links']}>
          {navLinks.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className={navStyle['nav__buttons']}>
        <button>Learn More</button>
        <button>See Pricing</button>
      </div>
      <img
        onClick={() => setActive(true)}
        className={navStyle['burger__logo']}
        src={menu_burger}
        alt=""
      />
    </nav>
  );
};

export default Nav;
