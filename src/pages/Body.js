import React from "react";
import styles from '../components/styles.module.scss';

function Body() {

  // const [openMenu, setOpenMenu] = useState(false);
  // const [openMenu1, setOpenMenu1] = useState(false);
  // const [openMenu2, setOpenMenu2] = useState(false);

  // const toggleMenu = () => {
  //   setOpenMenu(!openMenu);
  // };

  // const toggleMenu1 = () => {
  //   setOpenMenu1(!openMenu1);
  // };

  // const toggleMenu2 = () => {
  //   setOpenMenu2(!openMenu2);
  // };


  return (
    <body>
      <div className={styles.p_content}>
        <h3>HELLO WORLD</h3>
        <p>
          Obrigado pela visita! Sou Desenvolvedor de Software e através da tecnologia e inovação, almejo melhorar a vida das pessoas.
          Sou apaixonado pela metamorfose, pelo novo, pelo desconhecido e claro, pela tecnologia.
        </p>
      </div>
      <div className={styles.p_content1}>
        <h3>• Soft Skills</h3>
        <p>
          Proativo, organizado, dinâmico e comunicativo, com habilidade em adaptar-se às novas rotinas e, facilidade no relacionamento interpessoal.
        </p>
        <h3>• Hard Skills</h3>
        <p>
          HTML, CSS, SASS, Python, JavaScript, TypeScript, Redux, React, Context API, NodeJS, Express, Metodologias Ágeis, Componentes e Estados, React Hooks, Higher Order Functions, GitHub, Unix & Bash, Docker, MySQL, MongoDB, DynamoDB, AWS Cloud.
        </p>
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
      <section className={styles.section_projects}>
        <h3>PROJETOS</h3>
        <div className={styles.container_work}>
          <div className={styles.carousel}>
            <div className={styles.carousel__face}><span>1</span></div>
            <div className={styles.carousel__face}><span>2</span></div>
            <div className={styles.carousel__face}><span>3</span></div>
            <div className={styles.carousel__face}><span>4</span></div>
          </div>
        </div>
      </section>
      <div className={styles.projects_content}>
        <a href="https://github.com/vbreksidler/project_online_store">
          1 - Project Online Store
        </a>
      </div>
      <div className={styles.projects_content}>
        <a href="https://github.com/vbreksidler/project_delivery_app">
          2 - Delivery App
        </a>
      </div>
      <div className={styles.projects_content}>
        <a href="https://github.com/vbreksidler/project-patient-register">
          3 - Patient Register
        </a>
      </div>
      <section className={styles.content}>
        <div className={styles.content_btns}>
          {/* <a href="#down1">
            <button className={styles.main} onClick={toggleMenu1}>Hello World</button>
          </a> */}
          {/* <a href="#down2">
            <button className={styles.main} onClick={toggleMenu2}>Sobre meu trabalho</button>
          </a> */}
        </div>
      </section>
    </body>
  );
}

export default Body;
