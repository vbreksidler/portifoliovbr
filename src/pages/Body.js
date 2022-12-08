import React from 'react';
import Btn_HelloWorld from '../components/btn_hello'
import Btn_my_work from '../components/btn_my_work';
import Btn_Projects from '../components/btn_projects';
import styles from '../components/styles.module.scss';

function Body() {
  return (
    <body>
      <div className={styles.p_content}>
        <p>
          Olá, obrigado pela visita! Me chamo Victor, e estou mergulhando nesse universo codificado!
        </p>
      </div>
      <section className={styles.content}>
        <div className={styles.content_btns}>
          <div id="btn_hello"></div>
          <div className={styles.all_btns}>
            <a href="#btn_hello"> {<Btn_HelloWorld />}</a>
            <div id="btn_lang"></div>
            <a href="#btn_lang"> {<Btn_my_work />}</a>
            <div id="btn_projects"></div>
            <a href="#btn_projects"> {<Btn_Projects />}</a>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Body;
