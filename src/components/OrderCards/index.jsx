import { useState } from 'react';
import FeatureLayout from '../FeatureLayout';
import Card from '../Card';
import Button from '../Button';
import style from './OrderCards.module.scss';

let itemsOrderCard = [
  {
    title: 'Basic Plan',
    subtitle: 'Access to a curated selection of abstract images',
    prise: '$9.99',
    priseYear: '$119.88',
    period: '/ month',
    periodYear: '/ year',
    descriptionPrise: 'Billed monthly',
    descriptionPriseYear: 'Billed annually',

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
    priseYear: '$239.88',
    period: '/ month',
    periodYear: '/ year',
    descriptionPrise: 'Billed monthly',
    descriptionPriseYear: 'Billed annually',

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
    priseYear: '$359.88',
    period: '/ month',
    periodYear: '/ year',
    descriptionPrise: 'Billed monthly',
    descriptionPriseYear: 'Billed annually',

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
  const [isMonthly, setIsMonthly] = useState('Monthly');

  const handleClickMonthly = () => setIsMonthly('Monthly');
  const handleClickAnnually = () => setIsMonthly('Annually');

  return (
    <FeatureLayout
      info={'Pricing Tiers'}
      title={'Fit for all your needs'}
      subtitle={
        'Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.'
      }
    >
      <div className={style.buttonContent}>
        <Button
          variant={isMonthly === 'Monthly' ? 'shadow' : 'text'}
          onClick={handleClickMonthly}
        >
          Monthly
        </Button>
        <Button
          variant={isMonthly === 'Annually' ? 'shadow' : 'text'}
          onClick={handleClickAnnually}
        >
          Annually
        </Button>
      </div>
      <div className={style.content}>
        {itemsOrderCard.map((item, index) => {
          const priceDescription =
            isMonthly === 'Monthly' ? item.prise : item.priseYear;

          const periodDescription =
            isMonthly === 'Monthly' ? item.period : item.periodYear;

          const descriptionPriseCard =
            isMonthly === 'Monthly'
              ? item.descriptionPrise
              : item.descriptionPriseYear;
          return (
            <Card
              key={index}
              {...item}
              prise={priceDescription}
              period={periodDescription}
              descriptionPrise={descriptionPriseCard}
            />
          );
        })}
      </div>
    </FeatureLayout>
  );
};

export default OrderCards;
