import React from 'react';
import styles from '../components/styles.module.scss';

function Footer() {
    return (
        <section className={styles.footer}>
            <footer className={styles.fixed_footer}>
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
            </footer>
        </section>
    );
}

export default Footer;