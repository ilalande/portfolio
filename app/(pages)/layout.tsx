import styles from '@styles/modules/StaticLayout.module.scss';
import Footer from '@components/footer';
import Header from '@components/header';

const StaticLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mainWrapper'>
      <Header />
      <main>
        <div className={styles.staticLayout}>{children}</div>{' '}
      </main>
      <Footer />
    </div>
  );
};

export default StaticLayout;
