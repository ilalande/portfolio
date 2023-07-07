import styles from '@styles/modules/HomePage.module.scss';
import Footer from '@components/footer';
import Header from '@components/header';
export default function HomePage() {
  return (
    <div className='mainWrapper low-opactiy-bg-image'>
      <Header />
      <main className={`${styles.homeContainer} section`}>
        <div className={styles.titles}>
          <h1>Juliane CASIER</h1>
          <h2>Développeuse web React Node Next</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
