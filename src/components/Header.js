import React from 'react';
import styles from './styles.module.scss';

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className={styles.header}>
          <div className={styles.sides}>
            <html>
              <a href="#down" className={styles.logo}>PORTIFOLIO</a>
            </html>
          </div>
          <div className={styles.sides}>
          </div>
          <div className={styles.info}>
            <h4>Saudações! Seja bem-vindo(a) ao portifolio</h4>
            <h1>VICTOR BARIATTO REKSIDLER</h1>
            <div className={styles.meta}>
              <a target="_b" className={styles.author}></a>
              Full Stack Web Developer
            </div>
          </div>
        </div>
        <div id="down"></div>
        <section className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl turpis, porttitor et finibus id, viverra a metus. Praesent non ante sed orci posuere varius quis sit amet dui. Cras molestie magna orci, id gravida dolor molestie in. Duis sollicitudin turpis quis tortor egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo pellentesque.</p>
          <p align="center"><a href="https://twitter.com/nodws" className={styles.btn} twtr target="_b">Follow me on Twitter</a>
          </p>
        </section>
      </header>
    );
  }
}

export default Header;
