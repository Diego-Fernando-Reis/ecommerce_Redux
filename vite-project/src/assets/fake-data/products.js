const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_01.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_01.1.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_01.3.jpg',
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_2.1.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_2.2.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_2.3.jpg',
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_3.1.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_3.2.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_3.3.jpg',
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_4.1.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_4.2.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_4.3.png',
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  // {
  //   id: "05",
  //   title: "Cheese Burger",
  //   price: 24.0,
  //   image01: product_05_image_01,
  //   image02: product_05_image_02,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
  // {
  //   id: "06",
  //   title: "Royal Cheese Burger",
  //   price: 24.0,
  //   image01: product_01_image_01,
  //   image02: product_01_image_02,
  //   image03: product_01_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_2.2.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_2.1.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_2.3.jpg',
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_3.2.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_3.1.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_3.3.jpg',
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_4.2.jpg',
    image02: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_4.1.jpg',
    image03: 'https://raw.githubusercontent.com/codingwithmuhib/React-food-delivery-app/startup/src/assets/images/product_4.3.png',
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  // {
  //   id: "10",
  //   title: "Classic Hamburger",
  //   price: 24.0,
  //   image01: product_05_image_02,
  //   image02: product_05_image_01,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  // {
  //   id: "11",
  //   title: "Crunchy Bread ",
  //   price: 35.0,
  //   image01: product_06_image_01,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  // {
  //   id: "13",
  //   title: "Loaf Bread ",
  //   price: 35.0,
  //   image01: product_06_image_03,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
];

export default products;