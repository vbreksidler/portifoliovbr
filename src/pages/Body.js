import React from 'react';
import Btn_HelloWorld from '../components/btn_hello'
import Btn_Languages from '../components/btn_languages';
import Btn_Projects from '../components/btn_projects';
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
        <div id="btn_hello"></div>
        <div className={styles.all_btns}>
          <a href="#btn_hello"> {<Btn_HelloWorld />}</a>
          <div id="btn_lang"></div>
          <a href="#btn_lang"> {<Btn_Languages />}</a>
          <div id="btn_projects"></div>
          <a href="#btn_projects"> {<Btn_Projects />}</a>
        </div>
      </div>
    </section>
  );
}

export default Body;