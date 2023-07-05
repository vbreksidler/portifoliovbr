import React from "react";
import styles from '../components/styles.module.scss';
import { Carousel } from 'react-carousel-minimal';

function Body() {

  const data = [
    {
      image: "https://github.com/vbreksidler/project_online_store/blob/main/project-front-master-responsive.gif?raw=true",
      caption: `<a href="https://github.com/vbreksidler/project_online_store">
              Online Store
            </a>`
    },
    {
      image: "https://github.com/vbreksidler/portifoliovbr/blob/master/src/images/output_name.gif?raw=true",
      caption: `<a href="https://github.com/vbreksidler/project_delivery_app">
              Delivery App
            </a>`
    },
    {
      image: "https://github.com/vbreksidler/project-patient-register/blob/master/patient-register/public/60120.gif?raw=true",
      caption: `<a href="https://github.com/vbreksidler/project-patient-register">
              Patient Register
            </a>`
    },
    // {
    //   image: "https://i.ibb.co/xCyJ98n/pocoesdaterra.gif",
    //   caption: `<a href="https://pocoesdaterra.com.br/">
    //           Poções da Terra
    //         </a>`
    // },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  //test


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
          HTML, CSS, SASS, Python, JavaScript, TypeScript, Redux, React, Context API, NodeJS, Express, Metodologias Ágeis, Componentes e Estados, Higher Order Functions, GitHub, Unix & Bash, Docker, MySQL, MongoDB, DynamoDB, AWS Cloud.
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
        <div style={{ textAlign: "center" }}>
          <div style={{
            padding: "0 20px"
          }}>
            <Carousel
              data={data}
              time={3000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Body;
