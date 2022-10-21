import React from 'react';
import styles from '../components/styles.module.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className={styles.header}>
          <div className={styles.sides}>
          </div>
          <div className={styles.info}>
            <h4>Saudações! Seja bem-vindo(a) ao meu portifolio</h4>
            <h1>VICTOR BARIATTO REKSIDLER</h1>
            <div className={styles.meta}>
              <div className={styles.author} />
              <h4>Full Stack Web Developer</h4>
            </div>
            <div>
              <a href="#down" className={styles.meet}>Clique aqui para me conhecer melhor</a>
            </div>
          </div>
        </div>
        <div id="down"></div>
      </header >
    );
  }
}

export default Header;
