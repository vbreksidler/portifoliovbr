import React from 'react';
import Bio from './bio'
import styles from './styles.module.scss';

function Body() {
  return (
    <section className={styles.content}>
      <div className={styles.bio_show}>
        <p>
          Olá, obrigado pela visita! Me chamo Victor, e estou mergulhando nesse universo codificado!
        </p>
      </div>
      <div className={styles.bio}>
        {<Bio />}
      </div>
    </section>
  );
}

export default Body;
