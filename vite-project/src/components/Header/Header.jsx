import {Container} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import '../../styles/header.css'

const nav_links =[
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  return(
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src="https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/res-logo.png" alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* ====menu==== */}
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-5">

              {
                nav_links.map((item, index) => (
                  <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'active__menu' : ''}>{item.display}</NavLink>
                ))
              }

            </div>
          </div>
          {/* ====nav right icons==== */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>
            <span className="user">
              <Link to='/login'>
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;