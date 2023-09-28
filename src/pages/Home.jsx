import React from 'react';
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTour from '../components/Featured-tour/FeaturedTour';
import Subtitle from './../shared/Subtitle';
const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtile={'known Before You Go'} />
              </div>
              <h1>Tarveling opens the door to creating
                <span className='highlight'>memories</span></h1>
              <p>Tarveling is a beautiful place were all kind s of activites are of quite natural</p>
            </div>

          </Col>

          <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroImg} alt='' />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-4">
              <video src={heroVideo} alt='' controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src={heroImg02} alt='' />
            </div>
          </Col>
          <SearchBar></SearchBar>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="service__subtitle">what we serve</h5>
            <h2 className='servide__title'>We offer our best services</h2>

          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <subtitle subtitle={Explore} />
            <h2 className="feature__tour-title">Our feature tours</h2>
          </Col>
          <FeaturedTour />
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <subtitle subtitle={'Experience'} />
              <h2>With our all Experience <br /> we will serve you</h2>
              <p>Enjoy the trip is also an happiness<br />
                hapy happy happy happy happy
              </p>
            </div>
            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h1>Succesful Trip</h1>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h1>Regular clients</h1>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h1>Years experience</h1>
              </div>

            </div>
          </Col>
          <Col lg='6'>
            <div className='experience__img'>
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Gallery"}>
              <h2 className="gallery__title">
                Vist our customer tour gallery
              </h2>
              Vist our customer tour gallery
            </Subtitle>
          </Col>
          <Col lg='12'>
            
          </Col>
        </Row>
      </Container>
    </section>
  </>

};

export default Home;