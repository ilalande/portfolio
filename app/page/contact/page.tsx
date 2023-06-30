import Form from '@components/form';
import styles from '@styles/modules/StaticLayout.module.scss';

export default function Contact() {
  return (
    <>
      <div className='titleWrapper'>
        <h1>Contact et infos</h1>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Qui suis-je</h2>
            <p>Blabla</p>
          </article>
        </div>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Me contacter</h2>
            <Form />
          </article>
        </div>
      </div>
    </>
  );
}
