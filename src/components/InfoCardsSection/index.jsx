import style from '../InfoCardsSection/InfoCardsSection.module.scss';

const InfoCardsSection = ({ items, layout }) => {
  return (
    <section className={style.content}>
      {items.map((item, index) => {
        return (
          <div
            className={layout === 'row' ? style.row : style.itemsList}
            key={index}
          >
            <img
              className={layout === 'row' ? style.imageRow : style.image}
              src={item.image}
              alt="image"
            />
            <div>
              <p className={style.title}>{item.title}</p>
              <p className={style.subtitle}>{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InfoCardsSection;
