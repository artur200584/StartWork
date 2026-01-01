import style from '../InfoCardsSection/InfoCardsSection.module.scss';

const InfoCardsSection = ({ items }) => {
  return (
    <section className={style.content}>
      {items.map((item, index) => {
        return (
          <div className={style.itemsList} key={index}>
            <img className={style.image} src={item.image} alt="" />
            <p className={style.title}>{item.title}</p>
            <p className={style.subtitle}>{item.subtitle}</p>
          </div>
        );
      })}
    </section>
  );
};

export default InfoCardsSection;
