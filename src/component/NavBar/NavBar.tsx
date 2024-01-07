import { useSelector } from "react-redux";
import { AppState } from "../../model/AppState";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './navBar.css'
import { Button, Nav, NavDropdown } from "react-bootstrap";
import { TOKEN_COOKIE } from "../../constants/Cookies";
import { useCookies } from "react-cookie";

function NavBar() {
    
  const user = useSelector((state: AppState) => state.userState.user);
  const [,, removeCookie] = useCookies([TOKEN_COOKIE]);

  const signOut = () => {
    removeCookie(TOKEN_COOKIE);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">QuickList</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/lists">Lists</Nav.Link>
          </Nav>
          { user ? 
          <NavDropdown title={user.username} className="d-flex space-right" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/account">
                My Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Button onClick={signOut}>Sign Out</Button>
              </NavDropdown.Item>
            </NavDropdown>
        : <Nav.Link className="d-flex space-right" href="/signIn">Sign In</Nav.Link>
        }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;