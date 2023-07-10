import styles from '@styles/modules/StaticLayout.module.scss';

export default function Accessibilité() {
  return (
    <>
      <div className='titleWrapper'>
        <h1>Accessibilité</h1>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Etat de conformité du site</h2>
            <p>Blabla</p>
          </article>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Déclaration d&apos;accessibilité</h2>
            <p>
              Cette déclaration d&apos;accessibilité a été établie le 6 décembre
              2022.
            </p>
            <h3>Technologies utilisées pour la réalisation du site</h3>
            <ul>
              <li>HTML5</li>
              <li> CSS</li>
              <li>JavaScript</li>
              <li>Outil de gestion de contenus : CMS Eolas</li>
            </ul>
            <h3>
              Agents utilisateurs, technologies d&apos;assistance et outils
              utilisés pour vérifier l&apos;accessibilité
            </h3>
            <p>Blabla</p>
          </article>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Retour d&apos;information et contact</h2>
            <p>blabla</p>
          </article>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div className={styles.articleDecoration}>
          <article>
            <h2>Voies de recours</h2>
            <p>blabla</p>
          </article>
        </div>
      </div>
    </>
  );
}
