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
    <section>
      <div className={styles.p_content}>
        <h3>HELLO WORLD</h3>
        <p>
          Obrigado pela visita! Sou Desenvolvedor de Software e através da <span className={styles.letter_p}>tecnologia</span> e inovação, almejo melhorar a vida das pessoas.
          Sou apaixonado pela metamorfose, pelo novo, pelo desconhecido e claro, pela <span className={styles.letter_p}>tecnologia</span>.
        </p>
      </div>
      <div className={styles.p_content1}>
        <h3>• SOFT skills</h3>
        <p>
          Proativo, organizado, dinâmico e comunicativo, com habilidade em adaptar-se às novas rotinas e, facilidade no relacionamento interpessoal.
        </p>
        <h3>• HARD skills</h3>
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
        <div className={styles.projects_content}>
          <div className={styles.p_section_projects}>
            <a href="https://github.com/vbreksidler/project_online_store">
              Online Store
            </a>
            <div className={styles.gif_store}></div>
            <p> O projeto possui design responsivo, e o objetivo é um carrinho de compras online, onde a pessoa usuária pode adicionar, remover, alterar, verificar
              detalhes dos produtos, finalizar a compra e fazer checkout.

            </p>
          </div>
          <div className={styles.p_section_projects}>
            <a href="https://github.com/vbreksidler/project_delivery_app">
              Delivery App
            </a>
            <div className={styles.gif_delivery}></div>
            <p>Esse é um aplicativo full-stack, ou seja, possuí integração entre o front-end e o back-end. O objetivo é solucionar o problema do cliente,
              com um sistema que deve possuir:
              Acesso via login com funções diferentes(comprador, vendedor e administrador).
              Fazer a comunicação entre clientes e pessoas vendedoras.
              A pessoa cliente deve ter informações se o pedido está sendo preparado ou se já saiu pra entrega.
            </p>
          </div>
          <div className={styles.p_section_projects}>
            <a href="https://github.com/vbreksidler/project-patient-register">
              Patient Register
            </a>
            <div className={styles.gif_patient}></div>
            <p>É um projeto desafio, e o objetivo é uma aplicação web (CRUD) para gerenciar os registros de pacientes (nome do paciente, data de nascimento, e-mail e endereço), serverless, usando um banco de dados em nuvem.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Body;
