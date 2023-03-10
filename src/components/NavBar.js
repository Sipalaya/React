import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    {
      pathname: 'Home',
      path: '/',
    },
    {
      pathname: 'About',
      path: '/about',
    },
  ];

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {links.map((linkelement) => {
              return (
                <Nav.Link>
                  <NavLink to={linkelement.path}>
                    {linkelement.pathname}
                  </NavLink>
                </Nav.Link>
              );
            })}
            {/* <Nav.Link>
              <NavLink to='/'>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to='/about'>About</NavLink>
            </Nav.Link> */}
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
