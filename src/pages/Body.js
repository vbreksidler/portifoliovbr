import React from 'react';
import Btn_HelloWorld from '../components/btn_hello'
import Btn_Languages from '../components/btn_languages';
import styles from '../components/styles.module.scss';

function Body() {
  return (
    <section className={styles.content}>
      <div className={styles.p_content}>
        <p>
          Olá, obrigado pela visita! Me chamo Victor, e estou mergulhando nesse universo codificado!
        </p>
      </div>
      <div className={styles.content_btns}>
        <div className={styles.all_btns}>
          {<Btn_HelloWorld />}
          {<Btn_Languages />}
        </div>
      </div>
    </section>
  );
}

export default Body;
