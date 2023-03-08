import { Container, Row, Col } from "react-bootstrap"
import '../components/Connect.css'



export const Connect = () => {
  return (
    <section className="connect dark-section">
      <Container>
        <div className="connect rectangle">
          <Row>
            <Col className="col-12 col-md-4 title-section">
              Let's Talk!
            </Col>
            <Col className="col-12 col-md-4 description-section">
              contactame para hacer tu proyecto realidad de desarrollo web
              y hare que tu vision no se  que no se que xd se vuelva realidad
            </Col>
            <Col className="col-12 col-md-4">
              <button>Conectemos xd</button>

            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
} 