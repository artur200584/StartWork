import arrow_right from '../assets/arrow-right-o.svg';
import style from './Modal.module.scss';

const navLiks = ['Home', 'Features', 'Pricing', 'About us', 'Contact'];

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? [style['modal__icons']] : [style.modal]}>
      <img
        onClick={() => setActive(false)}
        className={style['modal__arow']}
        src={arrow_right}
        alt=""
      />
      <ul>
        {navLiks.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Modal;
