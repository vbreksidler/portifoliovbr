import React, { useState } from "react";
import styles from './styles.module.scss';

function Btn_Languages() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <button className={styles.btn_languages} onClick={toggleMenu}>Sobre meu trabalho</button>
            {openMenu ? (
                <div>
                    <p>
                        • Conhecimentos Soft Skills: Proativo, organizado, dinâmico e comunicativo, com habilidade em adaptar-se às novas rotinas e, facilidade no relacionamento interpessoal.
                    </p>
                    <p>
                        • Conhecimentos Hard Skills: HTML, CSS, JavScript, React, Context API, Metodologias Ágeis, Componentes e estados, React Hooks, Higher Order Functions, GitHUb, Testes Unitários, Unix & Bash, Docker, MySQL.
                    </p>
                </div>
            ) : null}
        </div>
    );
}


export default Btn_Languages;