import { Container, Row, Tab, Tabs, Col } from "react-bootstrap"
import '../components/Projects.css'



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
            <Tab eventKey="home" title="Frontend" className="tab-container text-center">
              <Row className="prueba" >
                  <Col className="col-project" xs={12} md={6} xl={4} >
                    <div>
                      <img>
                      </img>
                      <div className="overlay"></div>
                    </div>
                     
                  </Col >
                  <Col className="col-project" xs={12} md={6} xl={4} >
                  </Col>
                  <Col className="col-project" xs={12} md={6} xl={4}>
                  </Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Fullstack" className="tab-container">
            </Tab>
            <Tab eventKey="longer-tab" title="Backend" className="tab-container">
            </Tab>

          </Tabs>

        </div>


      </Container>


    </section>
  )
} 