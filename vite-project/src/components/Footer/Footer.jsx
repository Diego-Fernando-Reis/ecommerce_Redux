import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'

import '../../styles/footer.css'

const Footer = () => {
  return(
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/res-logo.png" alt="logo" />
              <h5>Tasty Treat</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odio, modi eligendi.</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Contact</h5>
              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <p>Location: Brasil, Rio de Janeiro, Ramos</p>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Phone: 01547895621</span>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email: example@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Enter your Email'/>
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>Copyright - 2023, website made by Diego Fernando, All Rights Reserved.</p>
          </Col>
          <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow: </p>
              <span><Link to=''><i class="ri-facebook-fill"></i></Link></span>
              <span><Link to=''><i class="ri-facebook-fill"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;