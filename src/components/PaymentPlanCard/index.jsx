import chekFill from '../../assets/checkFill.jpg';
import style from './PaymentPlanCard.module.scss';

const PaymentPlanCard = ({ items }) => {
  return (
    <div className={style.linkPrise}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <img src={chekFill} alt="image" />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaymentPlanCard;
