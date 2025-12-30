import style from '../InfoCardsSection/InfoCardsSection.module.scss';

const InfoCardsSection = ({ items }) => {
  return (
    <section className={style.content}>
      {/* <ul> */}
      {items.map((item, index) => {
        return (
          <div>
            <ul>
              <li className={style.itemsList} key={index}>
                <img className={style.image} src={item.image} alt="" />
                <p className={style.title}>{item.title}</p>
                <p className={style.subtitle}>{item.subtitle}</p>
              </li>
            </ul>
          </div>
        );
      })}
      {/* </ul> */}
    </section>
  );
};

export default InfoCardsSection;
