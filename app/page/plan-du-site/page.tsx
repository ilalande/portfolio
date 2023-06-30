import styles from '@styles/modules/StaticLayout.module.scss';

export default function Plan() {
  return (
    <>
      <div className='titleWrapper'>
        <h1>Mentions légales</h1>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Plan du site</h2>
            <p>Blabla</p>
          </article>
        </div>
      </div>
    </>
  );
}
