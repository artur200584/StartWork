import { useState } from 'react';
import style from './FqaItem.module.scss';
import minus from '../../assets/indeterminateCirclee.jpg';
import plus from '../../assets/plus.png';

const FqaItem = ({ question, answer, key, last }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li className={style.item} key={key}>
      <div className={style.row}>
        <p className={style.textTitle}>{question}</p>
        <p className={style.textSubtitle}>{isOpen === true ? answer : null}</p>
        {!last && <hr className={style.line} />}
      </div>

      <img
        className={style.icon}
        onClick={toggle}
        src={isOpen ? minus : plus}
        alt="imge"
      />
    </li>
  );
};

export default FqaItem;
