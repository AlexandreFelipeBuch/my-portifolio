import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import superFilmes from "../../Assets/Projects/SuperFilmes.png";
import Snake from "../../Assets/Projects/Snake.png";
import Portifolio from "../../Assets/Projects/Portifolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos nos quais trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portifolio}
              isBlog={false}
              title="Portifólio"
              description="Portidólio feito em React construída com a biblioteca JavaScript e React. O React permite a criação de componentes reutilizáveis e interativos, o que torna a construção de interfaces dinâmicas e responsivas mais fácil. Ao construir um site com React, é possível utilizar recursos como roteamento, gerenciamento de estado e comunicação com APIs. Além disso, o React também oferece ferramentas de desenvolvimento para facilitar a depuração e o teste de código. Com uma estrutura bem organizada e um design adequado, é possível construir um site profissional e moderno utilizando o React, oferecendo uma experiência de usuário mais fluida e satisfatória."
              ghLink="https://felipe-buch-portifolio.netlify.app"
              demoLink="https://snakegamejavascript.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superFilmes}
              isBlog={false}
              title="Super Filmes"
              description="Projeto React que utiliza uma API para exibir dados de filmes na tela. Os usuários podem salvar seus filmes favoritos e assistir aos trailers no YouTube. O projeto inclui as seguintes funcionalidades:
                           Consumo de dados da API para exibir informações do filme, como título, descrição e imagem; Opção de salvar filmes favoritos para visualização posterior; Interação com o YouTube para fornecer um link direto para assistir ao trailer do filme."
              ghLink="https://github.com/AlexandreFelipeBuch/super-filmes"
              demoLink="https://superfilmesreact.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snake}
              isBlog={false}
              title="Snake Game"
              description="Desenvolvi um jogo Snake usando JavaScript. O jogo é baseado no clássico jogo Snake dos anos 90, no qual os jogadores controlam uma cobra que come bolinhas para crescer e evitar bater nas paredes ou em seu próprio corpo. No meu jogo, utilizei JavaScript para criar a lógica do jogo e tornar a experiência do usuário interativa e agradável. Foi um projeto divertido e desafiador, que me permitiu aprimorar minhas habilidades em JavaScript e desenvolvimento de jogos."
              ghLink="https://github.com/AlexandreFelipeBuch/Snake"
              demoLink="https://snakegamejavascript.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
