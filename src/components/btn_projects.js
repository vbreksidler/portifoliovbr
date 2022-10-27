import React, { useState } from "react";
import styles from './styles.module.scss';

function Btn_Projects() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <button className={styles.btn_languages} onClick={toggleMenu}>Projetos</button>
            {openMenu ? (
                <div>
                    <div className={styles.projects_content}>
                        <a href="https://github.com/vbreksidler/project_online_store">
                            Clique aqui para acessar o repositório Project Online Store
                        </a>
                        <div>
                            <img src="https://github.com/vbreksidler/project_online_store/blob/main/project-front-master-responsive.gif?raw=true"
                                alt="Project Online Store" width="80%" />
                        </div>
                    </div>
                    <div className={styles.projects_content}>
                        <a href="https://github.com/vbreksidler/project_delivery_app">
                            Clique aqui para acessar o repositório Delivery App
                        </a>
                        <div>
                            <img src="https://github.com/vbreksidler/portifoliovbr/blob/master/src/images/output_name.gif?raw=true"
                                alt="Project Delivery App" width="80%" />
                        </div>
                    </div>
                    <div>
                        <a href="https://github.com/vbreksidler">
                            Clique aqui para acessar meu repositório no Github.
                        </a>
                    </div>

                </div>
            ) : null}
        </div>
    );
}

export default Btn_Projects;