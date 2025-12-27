import style from './Social.module.scss';

const Social = () => {
  return (
    <section className={style.content}>
      <div className={style.text}>Used by teams that you love</div>
      <div className={style.logos}></div>
    </section>
  );
};

export default Social;
