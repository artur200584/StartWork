import FeatureLayout from '../FeatureLayout';
import style from './OrderCards.module.scss';
import checkFiil from '../../assets/checkFill.jpg';

const orderCardsInfo = [
  {
    title: 'Basic Plan',
    subtitle: 'Access to a curated selection of abstract images',
    prise: '$9.99',
    period: '/ month',
    descriptionPrise: 'Billed monthly',

    services: [
      'Standard quality images',
      'Limited to personal use',
      'Email support',
    ],
  },
  {
    title: 'Standard Plan',
    subtitle: 'Next-level Integrations, priced economically',
    prise: '$19.99',
    period: '/ month',
    descriptionPrise: 'Billed monthly',

    services: [
      'Expanded library with more diverse abstract images',
      'High-resolution images available',
      'Suitable for commercial use',
      'Priority email support',
      'Advanced analytics',
    ],
  },
  {
    title: 'Premium Plan',
    subtitle: 'Experience limitless living for power users',
    prise: '$29.99',
    period: '/ month',
    descriptionPrise: 'Billed monthly',

    services: [
      'Full access to the entire image library, including exclusive content',
      'Highest quality images, including premium collections',
      'Commercial and resale rights',
      'Dedicated customer support line',
      '24/7 support response time',
      'Advanced analytics and insights',
    ],
  },
];

const OrderCards = () => {
  return (
    <FeatureLayout
      info={'Pricing Tiers'}
      title={'Fit for all your needs'}
      subtitle={
        'Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.'
      }
    >
      <div className={style.buttonContent}>
        <button>Monthly</button>
        <button>Annually</button>
      </div>
      <section className={style.content}>
        {orderCardsInfo.map((item, index) => {
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
                    {item.prise}
                    <span className={style.period}>{item.period}</span>
                  </p>
                  <p className={style.description}>{item.descriptionPrise}</p>
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
    </FeatureLayout>
  );
};

export default OrderCards;
