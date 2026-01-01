import style from './../HeadingDescription/HeadingDescription.module.scss';

const HeadingDescription = ({ info, title, subtitle }) => {
  return (
    <section className={style.content}>
      <p className={style.description}>{info}</p>
      <h2 className={style.title}>{title}</h2>
      <p className={style.subtitle}>{subtitle}</p>
    </section>
  );
};

export default HeadingDescription;
