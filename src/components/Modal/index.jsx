import BackArrow from '../../assets/backArrow.svg';
import style from './Modal.module.scss';

const navLinks = [
  { title: 'Home', href: '#hero' },
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'About us', href: '#about us' },
  { title: 'Contact', href: '#contact' },
];

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? [style.icons] : [style.modal]}>
      <img
        onClick={() => setActive(false)}
        className={style.arow}
        src={BackArrow}
        alt="backArrow"
      />
      <ul>
        {navLinks.map((item) => {
          return <li key={item.href}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Modal;
