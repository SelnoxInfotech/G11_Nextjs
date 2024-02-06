    "use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { React, useState, useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import style from "../../styles/Style.module.scss"
import Image from 'next/image';
import dynamic from 'next/dynamic'

// const window = dynamic(() => import('../../Component/Navbar/Function'));
// import { window } from "../../Component/Navbar/Function"

 function OffcanvasExample() {
  // const loadWindowObject = async () => {
  //   const window = await import('next/window');
  //   return window;
  // };
  
  // const window = await loadWindowObject();
  
  const router = useRouter();
  // var window =  window()
  const [Dropshow, setDropshow] = useState(false);
  const [show, setShow] = useState(false);
  const [windowDimenion, detectHW] = useState({
    winWidth: 0,
    winHeight: 0,
  })


  const detectSize = () => {
    detectHW({
      winWidth: window?.innerWidth,
      winHeight: window?.innerHeight,
    })
  }
  useEffect(() => {
    window?.addEventListener('resize', detectSize)
    return () => {
      window?.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])
  
  const toggleOffCanvas = () => {
    if (windowDimenion?.winWidth <= 991) {

      setShow((show) => !show);
    }
  }
  function hrefFunction() {
    // window()?.location?.href = "https://t.me/+TyYoHMGT3r1jMjM1";
  }
  function href() {
    router.push("/")
  }



  const showDropdown = (e) => {
    setDropshow(!Dropshow);
  }
  const hideDropdown = e => {
    setDropshow(false);
  }
  return (
  
      <div className='sticky-top'  >
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className={style.Nav}

          >
            <Container fluid  >
              <Nav><Image src="/G11.png" width={100} height={100} onClick={href} className={style.logo_img} alt="Grand11.logo" /></Nav>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleOffCanvas} />
              <Navbar.Offcanvas

                id={`offcanvasNavbar-expand-${expand}`}

                aria-labelledby="offcanvasNavbarLabel"
                placement='end'
                show={show}
                onHide={toggleOffCanvas}
              >
                <Offcanvas.Header closeButton   >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                    <div className='row'>
                      <div className='col-12 lrftjoin' >
                        <button onClick={hrefFunction} type="button" className={style.btn_tele}> Join Telegram </button>
                      </div>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className={`${style.Homelink } , offcanvas--menu`}>
                    <Link
                      onClick={toggleOffCanvas}
                      className="NavLink" href="/">Home</Link>
                    <Link
                      onClick={toggleOffCanvas}
                      href="/latest-match">Match</Link>
                    <Link
                      onClick={toggleOffCanvas}
                      href="/breakingnews">Breaking News</Link>
                    <Link
                      onClick={toggleOffCanvas}
                      href="/ipl-2024">IPL 2024</Link>
                    <Link
                      onClick={toggleOffCanvas}
                      href="/icc-cricket-world-cup-2024">ICC World Cup 2024</Link >


                    <Link
                      onClick={toggleOffCanvas}
                      href="/about-us">About</Link >
                    {/* <Link
                  onClick={toggleOffCanvas}
                  href="/contact-us">Contact us</Link > */}
                    <NavDropdown
                      id="nav-dropdown-example"
                      title="More"
                    className={style.dropdownLink}
                      show={Dropshow}
                      // onFocus={() => setDropshow(true)}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}

                    >

                      <Link href="/cricket-rules-and-regulation/" active style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ', left: "3%" }}> Cricket Rules and Regulation</Link>
                      <Link href="/icc-cricket-world-cup-2023" active style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ', left: "21%" }}>ICC World Cup 2023</Link>
                      <Link href="/cricket-players" active style={{ fontSize: "17px", margin: '0', display: "inline-flex", position: 'relative ', left: "30%" }}>  Cricket Players</Link>
                      <Link href="/ipl_2023" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', left: "41%", width: 'fit-content' }}>IPL 2023</Link>
                      <Link href="/cricket-news" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', left: "46%", width: 'fit-content' }}>News</Link>

                      <Link href="/latest-video" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', left: "46%", width: 'fit-content' }}>Video</Link>
                      <Link href="/contact-us" active style={{ fontSize: "17px", margin: '0', display: "flex", position: 'relative ', left: "46%", width: 'fit-content' }}>Contact</Link>
                    </NavDropdown>
                  </Nav>

                  <button onClick={hrefFunction} type="button" className=" btn btn_tele visibal "> Join Telegram </button>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

            </Container>
          </Navbar>
        ))}
      </div>
    
  );
}

export default OffcanvasExample;


