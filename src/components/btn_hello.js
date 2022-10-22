import React, { useState } from "react";
import styles from './styles.module.scss';

function Btn_HelloWorld() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <button className={styles.btn_hello} onClick={toggleMenu}>Hello World</button>
            {openMenu ? (
                <div>
                    <p>
                        Nasci em Curitiba/PR, acredito no trabalho com excelência, na cooperação, no respeito e na prática da empatia.
                        Sei que sozinho consigo chegar mais rápido ao objetivo, mas em time, posso ir muito além dele!
                    </p>
                    <p>
                        Desde sempre fui muito criativo, e também sempre tive muita curiosidade
                        sobre tudo ao meu redor, gostava muito de explorar lugares diferentes, observar os animais, desmontar e montar relógios, videogames,
                        controles, etc. Até hoje carrego essa vontade do novo, não atoa, eu passei por diversas áreas antes de chegar aqui, na tecnologia.
                        Trabalhei como auxiliar geral, químico de processo, desenhista mecânico, assistente administrativo em tecnologia e inovação, empreendedor,
                        músico, mecânico, entre varios outros.
                        Meu último emprego foi como gerente geral na empresa QuickUp, empresa familiar do meu irmao, que aluga máquinas
                        de lanches e de café para grandes instituições, como a PIB (primeira igreja batista). Amo trabalhar e amo estudar,
                        nessa minha jornada comecei 3 faculdades, química ambiental na UTFPR , administração na FAE  e a última foi comunicação
                        organizacional na UTFPR.
                    </p>
                    <p>
                        Sempre gostei de várias áreas diferentes, porém a área da tecnologia me abriu os olhos, por ser uma área dinâmica, desafiadora e empolgante, uma área que me desperta a vontade
                        de buscar mais, criar mais, e entender mais. Com a trybe meus horizontes se ampliaram, começamos devagar com os fundamentos, onde aprendi
                        sobre Unix e bash, dominar o github, e a base da programação com HTML e css e lógica de programação. Quando pisquei já estava lidando com
                        a arte do React em frontend, e logo mais, aprendendo sobre Node no backend, foi quando eu realmente percebi o tamanho do universo que existe na
                        programacao. A area da tecnologia me apresentou um caminho diferente aonde traz um balanco mais dinamico entre o desenvolvimento de carreira  e
                        um impacto de valores mais concretos, me sinto sempre motivado e impulsionado a tirar o melhor de mim. Na area, a habilidade de se adaptar e
                        aprender é de essencial valor,  diferente das experiencias passadas onde me sentia mais engessado e ultrapassado.
                    </p>
                    <p>
                        Com resultado disso espero
                        melhorar a vida das pessoas, desde uma ajuda no dia a dia até quem sabe, trabalhar numa empresa que gere impacto no desenvolvimento social.
                        Sou apaixonado pela metamorfose, pelo novo, pelo desconhecido e claro pela tecnologia.
                    </p>
                </div>
            ) : null}
        </div>
    );
}


export default Btn_HelloWorld;