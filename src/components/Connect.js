import { Container, Row, Col } from "react-bootstrap"
import '../components/Connect.css'
import { EnvelopeAtFill, MdMarkEmailRead } from "react-bootstrap-icons";



export const Connect = () => {
  return (
    <section className="connect dark-section">
      <Container>
        <div className="connect rectangle">
          <Row>
            <Col className="col-12 col-md-4 title-section">
              <span>Conectemos!</span>
            </Col>
            <Col className="col-12 col-md-4 description-section">
              <span style={{ filter: 'drop-shadow(2px 2px 2px rgba(30, 30, 30, 0.474))' }} >Tengo total disposicion a cualquier propuesta laboral como becario o Jr para asi,
                empezar a generar experiencia y adquirir nuevos conocimientos
                en el mundo laboral.</span>

            </Col>
            <Col className="col-12 col-md-4">

              <a href="mailto:hidekel.sevilla.morlet@gmail.com">
                <button className="contactBtn">Contactame!
                  <EnvelopeAtFill />

                </button>

              </a>

            </Col>
          </Row>
        </div>
      </Container>
    </section >
  )
} 