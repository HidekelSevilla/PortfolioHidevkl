import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import banner from '../../Images/banner.svg';
import { React, useEffect, useRef, useState } from 'react';
import '../Hero/Banner.css';
import Typed from 'typed.js';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoop } from '../../store/slices/designSlice';


export const Banner = () => {

  const { controlLoop } = useSelector(state => state.design);
  const dispatch = useDispatch();


  const sectionRef = useRef();
  const el = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const div = sectionRef.current;
      const { y } = div.getBoundingClientRect();
      const scrollY = y <= -230 ? false : true;
      dispatch(toggleLoop(scrollY));
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);



  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["un desarrollador Front-end<br> ", "un desarrollador Back-end<br>"],
      typeSpeed: 120,
      startDelay: 500,
      backSpeed: 120,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1000,
      loop: controlLoop,
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
    <section className='banner' id='home' ref={sectionRef}>
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
            <img className='logo-principal' src={banner} alt='header img' width={"100%"}></img>
          </Col>
        </Row>
      </Container>
    </section>
  )
}