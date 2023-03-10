import { Container, Row, Col } from "react-bootstrap";
import Me from "../../Images/Me.png";
import "../AboutMe/AboutMe.css";
import { SkillsAndAbout } from "./SkillsAndAbout";
import React, { useState } from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';



export const AboutMe = () => {
  const [change, setChange] = useState(false);

  return (
    <section className="about-me" id='about'>
      <Container className="container-about  ">
        <div className="back-button">
          {change ?
            (
              <Row className="row-about" >
                <Col xs={12} md={6} xl={5} >
                  <div className='back-border-me '>
                    <button className='btnn left' onClick={() => { setChange(!change); }}>
                      <ArrowLeftCircle className="icon left" size={30} />
                      <span className="label">Frontend Skills</span>
                    </button>

                    <img src={Me} alt='Me' width={520} />
                  </div>
                </Col>
                <Col xs={12} md={6} xl={7} className='handle-skills'>
                  <div className='me-txt'>

                    {change ?
                      (
                        <SkillsAndAbout logo={false} />
                      )
                      :
                      (
                        <SkillsAndAbout logo={true} />
                      )
                    }
                  </div>
                </Col>
              </Row>
            )
            :
            (
              <Row className="row-about">
                <Col xs={12} md={6} xl={7} className='handle-skills'>
                  <div className='me-txt'>
                    {change ?
                      (
                        <SkillsAndAbout logo={false} />
                      )
                      :
                      (
                        <SkillsAndAbout logo={true} />
                      )
                    }
                  </div>
                </Col>
                <Col xs={12} md={6} xl={5} className='back'>
                  <div className='back-border-me right'>
                    <button className='btnn' onClick={() => { setChange(!change); }}>
                      <span className="label">Backend Skills</span>
                      <ArrowRightCircle className="icon" size={30} />
                    </button>
                    <img src={Me} alt='Me' width={520} />
                  </div>
                </Col>
              </Row>
            )
          }
        </div>
      </Container>

    </section >
  )
} 