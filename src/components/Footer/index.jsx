import style from './Footer.module.scss';
import YouTubeImage from '../../assets/YouTubeImage.jpg';
import InstagramImage from '../../assets/InstagramImage.jpg';
import FacebookImage from '../../assets/FacebookImage.jpg';
import GithubImage from '../../assets/GithubImage.jpg';
import TwitterImage from '../../assets/TwitterImage.jpg';

let concatItem = [
  { href: '/', text: 'Features' },
  { href: '/', text: 'Pricing' },
  { href: '/', text: 'About us' },
  { href: '/', text: 'Contact' },
];

let imageContact = [
  { image: YouTubeImage },
  { image: InstagramImage },
  { image: FacebookImage },
  { image: GithubImage },
  { image: TwitterImage },
];

const Footer = () => {
  return (
    <section className={style.content}>
      <div className={style.contact}>
        <ul>
          {concatItem.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={style.imageFooter}>
        <ul>
          {imageContact.map((item, index) => (
            <li key={index}>
              <a href="">
                <img src={item.image} alt="image" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span>© 2024 Abstractly, Inc. All rights reserved.</span>
    </section>
  );
};

export default Footer;
