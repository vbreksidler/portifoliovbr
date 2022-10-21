import React from 'react';
import styles from './styles.module.scss';

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
        <div className={styles.links2}>
          <div className={styles.icons}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-plain-wordmark.svg" title="CSS3" alt="CSS" width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original-wordmark.svg" title="MySQL" alt="MySQL" width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40" />&nbsp;
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original-wordmark.svg" title="MongoDB" alt="MongoDB" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original-wordmark.svg" title="Python" alt="Python" width="40" height="40" />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.icons_lkd}>
            <a href="https://www.linkedin.com/in/vreksidler/">
              <img src="https://img.shields.io/badge/-Linkedin-white?style=flat&logo=Linkedin&logoColor=black" width="150" height="45" alt="Click to Linkedin Profile" />
            </a>
          </div>
          <div className={styles.icons_itg}>
            <a href="https://www.instagram.com/vitao_reks/">
              <img src="https://img.shields.io/badge/-Instagram-white?style=flat&logo=Instagram&logoColor=black" width="150" height="45" alt="Click to Linkedin Profile" />
            </a>
          </div>
          <div className={styles.icons_github}>
            <a href="https://github.com/vbreksidler/">
              <img src="https://img.shields.io/badge/-Github-white?style=flat&logo=Github&logoColor=black" width="150" height="45" alt="Click to Linkedin Profile" />
            </a>
          </div>
        </div>
        <div id="down"></div>
      </header >
    );
  }
}

export default Header;
