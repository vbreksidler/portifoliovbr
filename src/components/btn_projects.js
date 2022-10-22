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
                    <p>
                        AASDADASDADASD
                    </p>
                </div>
            ) : null}
        </div>
    );
}


export default Btn_Projects;