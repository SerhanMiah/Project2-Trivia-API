// ? import React Bootstrap components


// ? link needs to be imported 
import { Link } from 'react-router-dom'

// ! import react bootstrap components 
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'





const PageNavBar = () => {


  
  // ! JSX
  return (
    // ! the whole bar is a nav bar using Nav bar react bootstrap 
    <Navbar bg='light' expand='lg'>
      {/* Div with a class container */}
      <Container as='section'>
        <Navbar.Brand as={Link} to='/'>Bread</Navbar.Brand>
        {/* Better way on passing like */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
      
        </Navbar.Collapse>
        {/* Adding a toggle - use of capital */}
      </Container>
    </Navbar>
    // !this is interesting need to look at nav bar settings more 

  )
}

export default PageNavBar
