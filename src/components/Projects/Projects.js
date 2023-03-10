import { Container, Row, Tab, Tabs } from "react-bootstrap"
import { BoxArrowUpRight, Github } from "react-bootstrap-icons"
import '../Projects/Projects.css'
import Proyect1 from '../../Images/PortfolioImg.png'



export const Projects = () => {
  return (
    <section className="projects" id='projects'>
      <Container className="projects-container">
        <div className="g-0">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="profile" title="Proyectos" className="tab-container text-center" >
              <Container>
                <Row>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="proyectos">
                      <img src={Proyect1} alt="Proyecto 1 Portfolio" />
                      <div className="overlay">
                        <p>
                          Proyecto: Portfolio personal
                        </p>
                        <div className="iconos-contenedor">
                          <a href="https://github.com/HidekelSevilla/PortfolioHidevkl" target="_blank" rel="noopener noreferrer" >
                            <Github />
                          </a>
                          <a href="https://hidekelsevilla.github.io/PortfolioHidevkl/#" target="_blank" rel="noopener noreferrer">
                            <BoxArrowUpRight />
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </Row>
              </Container>
            </Tab>

          </Tabs>

        </div>


      </Container>


    </section>
  )
} 