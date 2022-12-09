import React, { useState } from "react";
import styles from './styles.module.scss';

function Btn_Projects() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <button className={styles.main} onClick={toggleMenu}>Projetos</button>
            {openMenu ? (
                <section className={styles.section_projects}>
                    <p>Select your project:</p>
                    <div className={styles.projects_content}>
                        <a href="https://github.com/vbreksidler/project_online_store">
                            1 Project Online Store
                        </a>
                    </div>
                    <div className={styles.projects_content}>
                        <a href="https://github.com/vbreksidler/project_delivery_app">
                            2 Delivery App
                        </a>
                    </div>
                    <div className={styles.container_work}>
                        <div className={styles.carousel}>
                            <div className={styles.carousel__face}><span>1</span></div>
                            <div className={styles.carousel__face}><span>2</span></div>
                            <div className={styles.carousel__face}><span>3</span></div>
                            <div className={styles.carousel__face}><span>4</span></div>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default Btn_Projects;