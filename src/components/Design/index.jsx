import InfoCardsSection from '../InfoCardsSection';
import style from './Design.module.scss';
import LogoHd from '../../assets/HD.jpg';
import LogoWater from '../../assets/Woter.jpg';
import LogoLine from '../../assets/Line.jpg';
import LogoDesing from '../../assets/DesingLogo.jpg';
import FeatureLayout from '../FeatureLayout';

const infoCardsData = [
  {
    image: LogoHd,
    title: '5K resolution support',
    subtitle:
      'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
  },
  {
    image: LogoWater,
    title: 'From water to glass',
    subtitle:
      'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
  },
  {
    image: LogoLine,
    title: 'Portrait or landscape',
    subtitle: `Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.`,
  },
];

const Design = () => {
  return (
    <FeatureLayout
      classNames={style.content}
      info={'High quality images'}
      title={'For designers, by designers'}
      subtitle={
        'Unleash boundless creativity with a large repository of images optimized for designers'
      }
    >
      <InfoCardsSection layout="row" items={infoCardsData} />
      <img className={style.image} src={LogoDesing} alt="image" />
    </FeatureLayout>
  );
};

export default Design;
