import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
function Projects() {
    const project = [

      {
        image: require('../images/hde.png'),
        title: 'HDE Light : MERN Based Lighting Product Showcase Web App',
        lang: 'MongoDB, Express.js, React, Node.js, Cloudinary',
        des: 'HDE Light is a full-featured MERN web application designed to manage a catalog of indoor and outdoor lighting products. It features separate admin and user panels, allowing administrators to perform secure CRUD operations, manage multi-level categories, and upload product images via Cloudinary. Users can browse products through a clean, responsive interface tailored for scalability and performance.',
        visit: 'https://hde-light.onrender.com/',
        git: 'https://github.com/sirvinaresh/HDE-LIGHT.git'
      },
      
      {
       image: require('../images/quick.png'),
       title:'QuickKart : E-commerce Shopping Cart',
       lang:'React, Redux, Bootstrap, FetchAPI',
       des:'QuickKart is a responsive single-page e-commerce web application that allows users to browse a product catalog, add items to the cart, update quantities, and view the total cost. It uses Redux for efficient state management and fetches real product data from the DummyJSON API. The interface is styled using React Bootstrap for a modern and mobile-friendly design.',
       visit:'https://quickkart-jade.vercel.app/',
       git:'https://github.com/sirvinaresh/quickkart.git'
      },

      {
        image:require('../images/finance.png'),
        title:'Finance Tracker : Personal Expense Manager',
        lang:'React, Redux, Bootstrap, JavaScript',
        des:'Finance Tracker is a simple and intuitive web application that helps users manage their income and expenses. It allows users to add or delete transactions and view real-time balance updates. Ideal for tracking daily spending in an organized way.',
        visit:'https://finance-tracker-rust-seven.vercel.app/',
        git:'https://github.com/sirvinaresh/finance-tracker.git'
      },

      {
        image:require('../images/todo.png'),
        title:'ToDo List : Task Management Web App',
        lang:'React, Bootstrap, JavaScript, Redux',
        des:'ToDo List is a clean and functional web application that helps users organize their daily tasks. Users can add, edit, delete, and mark tasks as completed. Its designed for simplicity and productivity, with a smooth and responsive UI.',
        visit:'https://todo-list-jet-theta.vercel.app/',
        git:'https://github.com/sirvinaresh/todo-list.git'
      },

      {
        image:require('../images/book.png'),
        title:'Book Inventory : Book Management System',
        lang:'React, Bootstrap, JavaScript, Redux',
        des:'Book Inventory is a web application designed to manage a collection of books. Users can add, edit, delete, and search books by details like title, author, or category. It’s ideal for maintaining a personal or small library inventory.',
        visit:'https://book-inventory-khaki.vercel.app/',
        git:'https://github.com/sirvinaresh/book-inventory.git'
      },

      {
        image: require('../images/recipes.png'),
        title: 'Recipes App : Recipe Search & Management',
        lang: 'React, Bootstrap, JavaScript, API Integration',
        des: 'Recipes App is a user-friendly web application that allows users to search for various recipes using an external API. It displays detailed information like ingredients and instructions, making it easy to explore and try new dishes.',
        visit: 'https://recipes-one-iota.vercel.app/',
        git: 'https://github.com/sirvinaresh/recipes.git'
      },

      {
        image: require('../images/weather.png'),
        title: 'Weather App : Real-Time Weather Forecast',
        lang: 'React, Bootstrap, JavaScript, OpenWeatherMap API',
        des: 'Weather App is a responsive web application that allows users to search for any city and get real-time weather updates including temperature, humidity, and conditions. It fetches data using the OpenWeatherMap API and displays it in a clean, user-friendly interface.',
        visit: 'https://weather-app-xi-pearl.vercel.app/',
        git: 'https://github.com/sirvinaresh/weather-app.git'
      },

      {
        image: require('../images/quiz.png'),
        title: 'Quiz App: Interactive Quiz Platform',
        lang: 'React, Bootstrap, JavaScript',
        des: 'Quiz App is a responsive and interactive web application that lets users take multiple-choice quizzes. It provides instant feedback, tracks scores, and ensures a smooth user experience with dynamic question rendering and a clean UI built using React and Bootstrap.',
        visit: 'https://quiz-app-fawn-nu.vercel.app/',
        git: 'https://github.com/sirvinaresh/quiz-app.git'
      },

      {
        image: require('../images/mv.png'),
        title: 'Movie Review App: Rate & Review Films',
        lang: 'React, Bootstrap, JavaScript',
        des: 'Movie Review App is a responsive web application that allows users to browse, rate, and review movies. Built with React and Bootstrap, the app provides a smooth and modern user interface.',
        visit: 'https://movie-review-app-khaki-kappa.vercel.app/',
        git: 'https://github.com/sirvinaresh/movie-review.git'
      },

      {
        image: require('../images/blog.png'),
        title: 'Blog App: Share & Explore Articles',
        lang: 'React, Bootstrap, JavaScript, Redux',
        des: 'Blog App is a dynamic platform that allows users to create, publish, and explore blog posts in real time. With Firebase authentication and database integration, users can securely manage their content, while the sleek React-powered interface ensures a smooth reading and writing experience.',
        visit: 'https://blog-ten-omega-64.vercel.app/',
        git: 'https://github.com/sirvinaresh/blog.git'
      },

    ]
    
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    
      setTimeout(() => {
        AOS.refresh(); 
      }, 500);
    }, []);
    
  return (
    <>
        <Container className=" my-5 text-light" data-aos="fade-up">
            <Row>
                <div className="position-relative text-center my-5">
                    <h1 className="display-4 fw-bold text-shadow">PROJECTS</h1>
                    <h1 className="position-absolute top-0 start-50  translate-middle fw-bold text-white">PROJECTS</h1>
                </div>

            {
              project.map((val,i)=>{
                return(
                    <Col lg={4} md={6} sm={12} key={i} className='mb-5' data-aos="fade-up" >
                        <Card className='card' >
                        <Card.Img variant="top p-3" src={val.image} />
                        <Card.Body>
                          <Card.Title className='title'>{val.title}</Card.Title>
                          <Card.Text style={{textAlign:'justify'}}>{val.des}</Card.Text>
                          <Card.Text style={{textAlign:'justify'}}>Tech Stack: <br />{val.lang}</Card.Text>
                          <div className='d-flex justify-content-between my-2'>
                            <Button variant="secondary" href={val.visit} target='_blank' rel="noopener noreferrer" className='px-5 logo border-0 rounded-5'>Visit</Button> 
                            <Button href={val.git} target='_blank' rel="noopener noreferrer" className='logo bg-black text-light border-0 px-4 rounded-5'>
                              <FaGithub className='mb-1 fs-5'/> GitHub
                            </Button> 
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                )
              })
            }
            </Row>
        </Container>
    </>
  )
}

export default Projects