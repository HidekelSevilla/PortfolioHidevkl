import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import banner from '../Images/banner.svg';
import { React, useEffect, useRef } from 'react';
import '../components/Banner.css';
import Typed from 'typed.js';


export const Banner = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {

      strings: ["un desarrollador Front-end<br> ", "un desarrollador Back-end<br>"],
      typeSpeed: 120,
      startDelay: 500,
      backSpeed: 120,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      loopCount: false,
      showCursor: false,
    })
    return () => {
      typed.destroy();
    };
  })

  return (
    <section className='banner' id='home'>
      <Container className='container-principal'>
        <Row className='hero-text align-items-center'>
          <Col xs={12} md={6} xl={7} className='fulltxt'>
            <span className='tagline'>Bienvenido a mi portfolio!</span>
            <h1 className='first-txt' > {'¡Hola! soy Hidekel '}<span ref={el} ></span></h1>
            <p>Desarrollador frontend y backend con solidos conocimientos en Java, JavaScript, HTML5, CSS3, MySql,
              manejo de tecnologías cómo React Js, Node Js, Express Js, Spring y Git. Poseo la capacidad para crear API's,
              construcción de páginas web y una fácil adaptación y asimilación a nuevas tecnologías.
            </p>
            <button onClick={() => console.log('')}>Conectemos! <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className='logo-principal' src={banner} alt='header img' height={470}></img>
          </Col>
        </Row>
      </Container>
    </section>
  )
}