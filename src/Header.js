import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            localStorage.getItem("user-info") ?
                                <>
                                    <Link to="/add">Add Product</Link>
                                </>
                                :
                                <>
                                    <Link to="/login">Loign</Link>
                                    <Link to="/register">Sign Up</Link>
                                </>
                        }


                    </Nav>
                </Container>
            </Navbar>        </div>
    )
}
export default Header;