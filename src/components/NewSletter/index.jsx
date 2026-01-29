import Button from '../Button';
import ListServices from '../PaymentPlanCard';
import style from './NewSletter.module.scss';
import NewSletterImage from '../../assets/NewSletterImage.jpg';

let services = [
  'Exclusive access to new abstract images and collections',
  'Unlock special promotions only for subscribers',
  'Regular doses of artistic inspiration',
];

const NewSletter = () => {
  return (
    <section className={style.row}>
      <div className={style.content}>
        <div className={style.text}>
          <h2 className={style.title}>
            Get the finest curated abstracts delivered weekly to your inbox
          </h2>

          <ListServices items={services} />

          <div className={style.inputs}>
            <input placeholder=" Enter your Email" type="text" />
            <Button variant="primary">Subscribe</Button>
          </div>
          <p>We only send you the best! No spam.</p>
        </div>
        <img src={NewSletterImage} alt="image" />
      </div>
    </section>
  );
};

export default NewSletter;
