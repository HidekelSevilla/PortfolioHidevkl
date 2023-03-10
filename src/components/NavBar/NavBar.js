import logo from '../../Images/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import '../NavBar/NavBar.css';
import navIcon1 from '../../Images/nav-icon1.svg';
import navIcon2 from '../../Images/icon-github.png';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false)

  const divRef = useRef();
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const scrollY = y <= -60 ? true : false;
      setScrolled(scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="md" bg="blue" className={scrolled ? "scrolled" : ""}>
          <Container >
            <Navbar.Brand href="#home">
              <img src={logo} alt='logo' className='logo' width={87}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  >
              <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className='right-aligned'>
              <Nav >
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} ><span>Home</span></Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} style={{ paddingRight: '9.5rem' }}><span >Habilidades</span> </Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><span>Proyectos</span></Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='social-icon'>
                  <a href="https://www.linkedin.com/in/hidekelsm/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin Profile Hidekel Sevilla" /></a>
                  <a href="https://github.com/HidekelSevilla" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                </div>

                <a className='downloadBtn' href="https://drive.google.com/file/d/1KIQvMmKaufJV0-vv5pCnjWWk_YWB4Y9I/view?usp=share_link"
                  target="_blank" rel="noopener noreferrer">
                  Descargar CV
                </a>

              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className='aa' ref={divRef}></section>
      </div>
    </Router>
  );

}
