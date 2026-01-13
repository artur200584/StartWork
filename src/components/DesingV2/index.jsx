import FeatureLayout from '../FeatureLayout';
import LogoDesingV2 from '../../assets/LogoDesingV2.jpg';
import InfoCardsSection from '../InfoCardsSection';
import DowloadIcon from '../../assets/DowloadIcons.jpg';
import TeamsIncon from '../../assets/TeamsIcons.jpg';
import Money from '../../assets/Money.jpg';
import styles from './DesingV2.module.scss';

const infoCardsData = [
  {
    image: DowloadIcon,
    title: '5K resolution support',
    subtitle:
      'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
  },
  {
    image: TeamsIncon,
    title: 'From water to glass',
    subtitle:
      'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
  },
  {
    image: Money,
    title: 'Portrait or landscape',
    subtitle: `Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.`,
  },
];

const DesignV2 = () => {
  return (
    <FeatureLayout
      classNames={styles.content}
      info={'Best-in-class support'}
      title={'Convenience and licensing that empowers'}
      subtitle={`In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.`}
    >
      <img className={styles.image} src={LogoDesingV2} alt="imge" />
      <InfoCardsSection layout="row" items={infoCardsData} />
    </FeatureLayout>
  );
};

export default DesignV2;
