import HeadingDescription from '../HeadingDescription';
import InfoCardsSection from '../InfoCardsSection';
import LogoDowload from '../../assets/dowload.jpg';
import LogoPurely from '../../assets/Pulery.jpg';
import LogoMoney from '../../assets/Money.jpg';
import LogoDolar from '../../assets/Dolar.jpg';
import LogoTeam from '../../assets/Team.jpg';
import LogoCricle from '../../assets/Cricle.jpg';
const infoItems = [
  {
    image: LogoDowload,
    title: 'Infinite Download',
    subtitle: `Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.`,
  },
  {
    image: LogoPurely,
    title: 'Infinite Download',
    subtitle: `No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.`,
  },
  {
    image: LogoMoney,
    title: 'Infinite Download',
    subtitle: `The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).`,
  },
  {
    image: LogoDolar,
    title: 'Infinite Download',
    subtitle: `Subscribe at your own pace, and cancel when you feel it's enough.`,
  },
  {
    image: LogoTeam,
    title: 'Infinite Download',
    subtitle: `We support multiple seats at once, requiring only a single payment.`,
  },
  {
    image: LogoCricle,
    title: 'Infinite Download',
    subtitle: `Use as many as you want, from Dribbble presentations to PowerPoint presentations.`,
  },
];

const Features = () => {
  return (
    <>
      <HeadingDescription
        info={'Premium abstract images'}
        title={'Easy access to top quality images'}
        subtitle={
          'In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.'
        }
      />
      <InfoCardsSection items={infoItems} />
    </>
  );
};

export default Features;
