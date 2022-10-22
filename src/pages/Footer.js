import React from 'react';
import styles from '../components/styles.module.scss';

function Footer() {
    return (
        <section className={styles.footer}>
            <footer className={styles.fixed_footer}>
                <div class={styles.content_footer}>
                    <div className={styles.icon_content}>
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
                    <p className={styles.p_footer}> ©VBR, 2022. Desenvolvido em Javascript, com React, e estilização com Sass.</p>
                    <div className={styles.links_content}>
                        <div className={styles.links}>
                            <div className={styles.icons_linkedin}>
                                <a href="https://www.linkedin.com/in/vreksidler/">
                                    <img src="https://img.shields.io/badge/-Linkedin-blue?style=flat&logo=Linkedin&logoColor=white" width="100" height="30" alt="Click to Linkedin Profile" />
                                </a>
                            </div>
                            <div className={styles.icons_instagram}>
                                <a href="https://www.instagram.com/vitao_reks/">
                                    <img src="https://img.shields.io/badge/-Instagram-purple?style=flat&logo=Instagram&logoColor=white" width="100" height="30" alt="Click to Linkedin Profile" />
                                </a>
                            </div>
                            <div className={styles.icons_github}>
                                <a href="https://github.com/vbreksidler/">
                                    <img src="https://img.shields.io/badge/-Github-black?style=flat&logo=Github&logoColor=white" width="100" height="30" alt="Click to Linkedin Profile" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;