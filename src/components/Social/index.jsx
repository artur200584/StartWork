import style from './Social.module.scss';
import LogosNumbers from '../../logosNumber.jpg';

const logosItem = [
  { image: LogosNumbers, text: 'Wan Nain' },
  //   { image: '', text: 'Wan Nain' },
];

const Social = () => {
  return (
    <section className={style.content}>
      <div className={style.text}>Used by teams that you love</div>
      <div className={style.logos}>
        {logosItem.map((item) => {
          return item;
        })}
      </div>
    </section>
  );
};

export default Social;
