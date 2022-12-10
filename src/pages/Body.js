import React, { useState } from "react";
import Btn_my_work from '../components/btn_my_work';
import Btn_Projects from '../components/btn_projects';
import styles from '../components/styles.module.scss';

function Body() {

  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };

  const toggleMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };


  return (
    <body>
      <div className={styles.p_content}>
        <p>
          Olá, obrigado pela visita! Me chamo Victor, e estou mergulhando nesse universo codificado!
        </p>
      </div>
      <section className={styles.content}>
        <div className={styles.content_btns}>
          <a href="#down1">
            <button className={styles.main} onClick={toggleMenu1}>Hello World</button>
          </a>
          <a href="#down2">
            <button className={styles.main} onClick={toggleMenu2}>Sobre meu trabalho</button>
          </a>
          <a href="#down3">
            <button className={styles.main} onClick={toggleMenu}>Projetos</button>
          </a>
        </div>
      </section>
      <div className={styles.open_content}>
        <div id="down1"></div>
        {openMenu1 ? (
          <div className={styles.content_hello}>
            <p>HELLO WORLD</p>
            <p>
              Acredito no trabalho com excelência, na cooperação, no respeito e na prática da empatia.
              Sei que sozinho consigo chegar mais rápido ao objetivo, mas em time, posso ir muito além dele!
            </p>
            <p>
              Nasci em Curitiba/PR, desde sempre fui muito criativo, e também sempre tive muita curiosidade
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
        <div id="down2"></div>
        {openMenu2 ? (
          <div className={styles.content_work}>
            <p>SOBRE MEU TRABALHO</p>
            <p>
              • Conhecimentos Soft Skills: Proativo, organizado, dinâmico e comunicativo, com habilidade em adaptar-se às novas rotinas e, facilidade no relacionamento interpessoal.
            </p>
            <p>
              • Conhecimentos Hard Skills: HTML, CSS, JavScript, React, Context API, Metodologias Ágeis, Componentes e estados, React Hooks, Higher Order Functions, GitHUb, Testes Unitários, Unix & Bash, Docker, MySQL.
            </p>
          </div>
        ) : null}
        <div id="down3"></div>
        {openMenu ? (
          <section className={styles.section_projects}>
            <p>PROJETOS</p>
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
    </body>
  );
}

export default Body;
