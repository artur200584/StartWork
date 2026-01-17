import { useState } from 'react';
import style from './Cards.module.scss';
import checkFiil from '../../assets/checkFill.jpg';

const Cards = ({ items }) => {
  const [billingPeriod, setBillingPeriod] = useState('Monthly');

  function handleClickMonthly() {
    setBillingPeriod('Monthly');
  }

  function handleClickAnnually() {
    setBillingPeriod('Annually');
  }
  return (
    <>
      <div className={style.buttonContent}>
        <button onClick={handleClickMonthly}>Monthly</button>
        <button onClick={handleClickAnnually}>Annually</button>
      </div>
      <section className={style.content}>
        {items.map((item) => {
          return (
            <div className={style.card}>
              <div className={style.descriptionCard}>More Popular</div>
              <div className={style.card2}>
                <div className={style.text}>
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>

                <div>
                  <p className={style.price}>
                    {billingPeriod === 'Monthly' ? item.prise : item.priseYear}
                    <span className={style.period}>
                      {billingPeriod === 'Monthly'
                        ? item.period
                        : item.periodYear}
                    </span>
                  </p>
                  <p className={style.description}>
                    {billingPeriod === 'Monthly'
                      ? item.descriptionPrise
                      : item.descriptionPriseYear}
                  </p>
                </div>

                <div className={style.linkPrise}>
                  <ul>
                    {item.services.map((item, index) => {
                      return (
                        <>
                          <li key={index}>
                            <img src={checkFiil} alt="image" />
                            <span>{item}</span>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className={style.buttonCards}>
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
