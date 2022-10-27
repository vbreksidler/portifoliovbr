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
                    <div>
                        <p>Project Online Store</p>
                        <img src="https://github.com/vbreksidler/project_online_store/blob/main/project-front-master-responsive.gif?raw=true"
                            alt="Project Online Store" width="1000" />
                    </div>
                    <div>
                        <p>Project Delivery App</p>
                        <img src=""
                            alt="Project Online Store" width="1000" />
                    </div>
                    <a className={styles.projects_content} href="https://github.com/vbreksidler">
                        Clique aqui para acessar meu repositório no Github.
                    </a>
                </div>
            ) : null}
        </div>
    );
}

export default Btn_Projects;