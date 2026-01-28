import { useState } from 'react';
import Button from '../Button';
import InfoCardsSection from '../InfoCardsSection';
import style from './Support.module.scss';
import clsx from 'clsx';
import AdressImage from '../../assets/AdressImage.jpg';
import PhoneImage from '../../assets/PhoneImage.jpg';
import EmailImage from '../../assets/EmailImage.jpg';

let infoItems = [
  { image: AdressImage, title: '123 Maple Street, Springfield, IL, USA' },
  { image: PhoneImage, title: '+1 (650) 555-0198' },
  { image: EmailImage, title: 'hello@abstractly.com' },
];

const maxLeaght = 500;

const Suport = () => {
  const [count, SetCount] = useState('');

  const handleClick = (e) => SetCount(e.target.value);

  return (
    <section className={style.conteiner}>
      <div className={style.content}>
        <div className={style.text}>
          <h2>Talk to our team</h2>
          <p>
            We're committed to delivering the support you require to make your
            experience as smooth as possible.
          </p>

          <InfoCardsSection items={infoItems} layout="row" />
        </div>

        <form className={style.form} action="/">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="example@example.com"
            />
          </div>

          <div className={style.textareaForm}>
            <label htmlFor="message">Message</label>
            <textarea
              className={clsx(
                style.textarea,
                count.length === maxLeaght && style.error
              )}
              onChange={handleClick}
              id="message"
              name="message"
              type="text"
              maxLength={maxLeaght}
              placeholder="Write your message..."
            />
            <p className={style.counter}>
              {count.length < maxLeaght ? (
                `${count.length}/500`
              ) : (
                <span className={style.textError}>
                  This is an error message.
                </span>
              )}
            </p>
          </div>

          <Button className={style.button} variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Suport;
