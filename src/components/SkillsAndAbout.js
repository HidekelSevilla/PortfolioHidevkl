import '../components/SkillsAndAbout.css';
import MySqlLogo from '../Images/MySql-logo.png';
import SpringLogo from '../Images/Spring-logo.png';
import ReactLogo from '../Images/React-logo.png';
import MongoLogo from '../Images/MongoDb-logo.png';
import JSLogo from '../Images/JavaScript-logo.png';
import JavaLogo from '../Images/Java-logo.png';
import HtmlLogo from '../Images/Html-logo.png';
import CssLogo from '../Images/Css-logo.png';
import { Container, Row, Col } from 'react-bootstrap';

export const SkillsAndAbout = (props) => {
  return (
    <Container className='container-skills' >
      <div className='bckg'>
        {props.logo ?
          (
            <Row className='skills-icons'>
              <Col xl={12} className='icons-frontend'>
                <div className='skills-div-txt'>
                  <h1 >Frontend Skills</h1>
                </div>
                <div className='skills-icons-frontend' >
                    <img className='' src={JSLogo} alt="Second slide" width={120} height={120} />
                    <img className='' src={HtmlLogo} alt="Second slide" width={120} height={120} />
                    <img className='' src={CssLogo} alt="Second slide" width={120} height={120} />
                    <img className='' src={ReactLogo} alt="Second slide" width={125} height={110} />
                </div>
              </Col>
            </Row>
          )
          :
          (
            <Row className='skills-icons'>
              <Col xs={12} className='icons-backend'>
                <div className='skills-div-txt'>
                  <h1>Backend skills</h1>
                </div>
                <div className='skills-icons-backend' >
                  <img className='' src={JavaLogo} alt="Second slide" width={120} height={120} />
                  <img className='' src={SpringLogo} alt="Second slide" width={120} height={120} />
                  <img className='' src={MySqlLogo} alt="Second slide" width={120} height={90} />
                  <img className='' src={MongoLogo} alt="Second slide" width={130} height={70} />
                </div>
               \
              </Col>
            </Row>

          )}
      </div>
    </Container>
  );
}

