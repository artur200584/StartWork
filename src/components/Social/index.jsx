import Marquee from 'react-fast-marquee';
import style from './Social.module.scss';
import LogosNumber from '../../assets/logosNumber.jpg';
import LogosArrow from '../../assets/logosArrow.jpg';
import LogosFigure from '../../assets/logosFigure.jpg';
import LogosDiamant from '../../assets/logosDiamant.jpg';
import LogosCar from '../../assets/logosCar.jpg';
import LogosMarko from '../../assets/logosMarko.jpg';
import LogosTicket from '../../assets/logosTiket.jpg';
import LogosAirPlane from '../../assets/logosAirPlane.jpg';

const logosItem = [
  { image: LogosNumber, text: 'Wan Nain' },
  { image: LogosArrow, text: 'Robinwood' },
  { image: LogosFigure, text: 'SWAPDO' },
  { image: LogosDiamant, text: 'DIAMOND' },
  { image: LogosCar, text: 'Air Car' },
  { image: LogosMarko },
  { image: LogosTicket, text: 'WIRANG' },
  { image: LogosAirPlane, text: 'BitterFly' },
];

const Social = () => {
  return (
    <section className={style.content}>
      <div className={style.text}>Used by teams that you love</div>
      <Marquee>
        <div className={style.logos}>
          <ul>
            {logosItem.map((item, index) => {
              return (
                <>
                  <li key={index}>
                    <img
                      className={style.image}
                      src={item.image}
                      alt="logosImage"
                    />
                  </li>
                  <span>{item.text}</span>
                </>
              );
            })}
          </ul>
        </div>
      </Marquee>
    </section>
  );
};

export default Social;
