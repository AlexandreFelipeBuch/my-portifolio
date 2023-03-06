import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import Perfil from "../../Assets/perfil.png";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Se me permite, gostaria de me{" "}
              <span className="purple"> apresentar </span>
            </h1>
            <p className="home-about-body">
              Eu sou graduado em Sistemas de Informação pela IPIS, trabalho como
              desenvolvedor React Native já a um ano e meio. Minha experiência
              com essas tecnologias me permitiu desenvolver aplicativos e
              interfaces de usuário, além de trabalhar com gerenciamento de
              estado, e integração com APIs. <br />
              <br />
              Estou sempre buscando aprender mais e me aprimorar como
              desenvolvedor, e estou animado para continuar a crescer na minha
              carreira!
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={Perfil} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encontre em</h1>
            <p>
              Sinta-se à vontade para se{" "}
              <span className="purple">conectar comigo. </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlexandreFelipeBuch"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alexandre-felipe-moreira-iargan-buch-268422b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
