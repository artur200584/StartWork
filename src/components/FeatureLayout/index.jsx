import HeadingDescription from '../HeadingDescription';
import clsx from 'clsx';
import styles from './FeatureLayout.module.scss';

export default ({ children, classNames, ...headingProps }) => {
  return (
    <div className={styles.content}>
      <HeadingDescription {...headingProps} />
      <section className={clsx(classNames)}>{children}</section>
    </div>
  );
};
