import style from './Card.module.scss';
import chekFill from '../../assets/checkFill.jpg';

const Card = ({
  title,
  subtitle,
  prise,
  period,
  descriptionPrise,
  services,
}) => {
  return (
    <section>
      <div className={style.card}>
        <div className={style.descriptionCard}>More Popular</div>
        <div className={style.content}>
          <div className={style.text}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div>
            <p className={style.prise}>
              {prise}
              <span className={style.period}>{period}</span>
            </p>
            <p className={style.description}>{descriptionPrise}</p>
          </div>

          <div className={style.linkPrise}>
            <ul>
              {services.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={chekFill} alt="" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.buttonCards}>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
