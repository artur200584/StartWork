import backArrow from '../../assets/backArrow.svg';
import style from './Modal.module.scss';

const navLinks = ['Home', 'Features', 'Pricing', 'About us', 'Contact'];

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? [style.icons] : [style.modal]}>
      <img
        onClick={() => setActive(false)}
        className={style.arow}
        src={backArrow}
        alt="backArrow"
      />
      <ul>
        {navLinks.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Modal;
