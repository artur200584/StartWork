import Header from '../Header';
import style from '../../styles/global.module.scss';

export default ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.wrapper}>{children}</main>
    </>
  );
};
