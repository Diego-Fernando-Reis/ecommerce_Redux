import {Container, Row, Col} from 'reactstrap'
import '../../../styles/category.css'
const categoryData = [
  {
    display: 'Fastfood',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/category-01.png'
  },
  {
    display: 'Pizza',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/category-02.png'
  },
  {
    display: 'Asian Food',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/category-03.png'
  },
  {
    display: 'Row Meat',
    imgUrl: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/category-04.png'
  },
]

const Category = () => {
  return(
    <Container>
      <Row>
        {
          categoryData.map((item, index)=>(
            <Col lg='3' md='4'>
              <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Category;