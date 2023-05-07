import { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import '../styles/hero-section.css'
import {Link} from 'react-router-dom'
import Category from '../components/UI/category/Category'
import '../styles/home.css'
import products from '../assets/fake-data/products.js'

import ProductCard from '../components/UI/product-card/ProductCard'



const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/service-01.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Super Dine In',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/service-02.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    title: 'Easy Pick Up',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/service-03.png',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
]

const Home = () => {

  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(()=>{
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0,4)
    setHotPizza(slicePizza)
  },[])

  useEffect(()=>{

    if(category === 'ALL'){
      setAllProducts(products)
    }

    if(category === 'BURGER'){
      const filteredProducts = products.filter(item=> item.category === 'Burger')

      setAllProducts(filteredProducts)
    }

    if(category === 'PIZZA'){
      const filteredProducts = products.filter(item=> item.category === 'Pizza')

      setAllProducts(filteredProducts)
    }

    if(category === 'BREAD'){
      const filteredProducts = products.filter(item=> item.category === 'Bread')

      setAllProducts(filteredProducts)
    }

  }, [category])

  return(
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content mt-5">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'><span>HUNGRY?</span> just wait<br/> food at <span>your door</span></h1>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus doloremque iste nisi temporibus.</p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className='order__btn d-flex align-items-center justify-content-between'>Order Now <i class="ri-arrow-right-s-line"></i></button>

                  <button className='all__foods-btn'><Link to='/foods'>See all Foods</Link></button>
                </div>
              </div>

              <div className='hero__service d-flex aliig-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-car-line"></i></span> No Shipping charge</p>

                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-shield-check-line"></i></span> 100% secure checkout</p>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/hero.png" alt="hero-img" className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-5'>
        <Category />
      </section>

      <section className='py-5'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, eaque?</p>
              <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, mollitia.</p>
            </Col>

            {
              featureData.map((item, index) => (
                <Col lg='4' md='4' key={index} className='mt-5'>
                  <div className="feature__item text-center px-5 py-3">
                    <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3'/>
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>

      <section className='my-5'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={()=>setCategory('ALL')}>All</button>

                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''}`} onClick={()=>setCategory('BURGER')}><img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/hamburger.png" alt="" />Burger</button>

                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''}`} onClick={()=>setCategory('PIZZA')}><img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/pizza.png" alt="" />Pizza</button>

                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`} onClick={()=>setCategory('BREAD')}><img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/bread.png" alt="" />Bread</button>
              </div>
            </Col>

            {
              allProducts.map((item) => (
                <Col lg='3' md='4' key={item.id} className='mt-5'>
                  <ProductCard item={item}/>
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>

      <section className='mb-5 pt-5 mt-0'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/location.png" alt="why-tasty-treat" className='w-100'/>
            </Col>

            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className='tasty__treat-title mb-4'>Why <span>Tasty Treat?</span></h2>
                <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis ea excepturi earum, tenetur aliquam temporibus sequi reprehenderit dolor voluptas et rem. Ea eveniet ipsum perferendis labore nostrum ratione quibusdam voluptates porro quaerat sapiente? Quo voluptatum quae optio! Ex, illo?</p>

                <ListGroup className='mt-5'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, alias.</p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Quality support</p>
                    <p className='choose__us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, inventore.</p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i>Order from any location</p>
                    <p className='choose__us-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, inventore.</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='my-5 pb-5'>
        <Container>
          <Row>
            <Col lg="12" className='text-center my-5'>
              <h2>Hot Pizza</h2>
            </Col>

            {
              hotPizza.map(item=>(
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial mb-5'>
                <h5 className='testimonial__subtitle'>Testimonial</h5>
                <h2 className='testimonial__title'>What our <span>customers</span> are saying.</h2>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/network.png" alt="testimonial-img" className='w-100'/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default Home;