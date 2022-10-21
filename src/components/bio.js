import React, { useState } from "react";
import styles from './styles.module.scss';

function Bio() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <button className={styles.btn_bio} onClick={toggleMenu}>Hello World !</button>
            {openMenu ? (
                <div>
                    <p>
                        Nasci em Curitiba/PR, acredito no trabalho com excelência, na cooperação, no respeito e na prática da empatia.
                        Sei que sozinho consigo chegar mais rápido ao objetivo, mas em time, posso ir muito além dele!
                    </p>
                    <p>
                        Hoje estou seguindo na carreira de desenvolvimento de software, na escola de tecnologia Trybe, com muita garra e
                        dedicação sei que posso me tornar um grande profissional na área. E assim, realizar meu maior sonho, que é tornar a vida das
                        pessoas que alcanço, melhor.
                    </p>
                </div>
            ) : null}
        </div>
    );
}


export default Bio;