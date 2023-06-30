import styles from '@styles/modules/StaticLayout.module.scss';
export default function MentionsLegales() {
  return (
    <>
      <div className='titleWrapper'>
        <h1>Mentions légales</h1>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Propriété intellectuelle</h2>
            <p>Blabla</p>
          </article>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Données à caractères personnelles</h2>
            <p>Aucune donnée personnelle n&apos;est collectée pour ce site.</p>
          </article>
        </div>
      </div>
    </>
  );
}
