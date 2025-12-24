import Image from '../../assets/HeroImage.jpg';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.titleDesktop}>
          Well crafted <br />
          abstract images
        </h1>
        <h1 className={styles.textMobile}>Well crafted abstract gradient</h1>
        <p>
          High quality abstract images for your projects,
          <br /> wallpaper and presentations.
        </p>
        <div className={styles.buttons}>
          <button>Learn More</button>
          <button>See pricing</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={Image} alt="image" />
      </div>
    </section>
  );
};

export default Hero;
