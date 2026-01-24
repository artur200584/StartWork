import { useState } from 'react';
import style from './FqaItem.module.scss';
import minus from '../../assets/indeterminateCirclee.jpg';
import plus from '../../assets/plus.png';

const FqaItem = ({ title, subtitle, key, last }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={style.item} key={key}>
      <div className={style.list}>
        <p className={style.textTitle}>{title}</p>
        <p className={style.textSubtitle}>
          {isOpen === true ? subtitle : null}
        </p>
        {!last && <hr className={style.line} />}
      </div>

      {isOpen ? (
        <img src={minus} onClick={() => setIsOpen(false)} alt="close" />
      ) : (
        <img
          className={style.image}
          src={plus}
          onClick={() => setIsOpen(true)}
          alt="open"
        />
      )}
    </li>
  );
};

export default FqaItem;
