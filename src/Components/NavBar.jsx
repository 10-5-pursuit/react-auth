import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ user, setUser, setToken }) => {

    const handleLogout = () => {
        setUser(null)
        setToken(null)
    }

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={Link} to="/">Task Manager</Nav.Link>
                    </Navbar.Brand>
                    { !user ? 
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                        </Nav>
                        :
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/tasks">{user.username}</Nav.Link>
                            <Button
                            variant="outline-light"
                            onClick={handleLogout}
                            size="sm"
                            style={{ color: "black" }}
                            >Log Out</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;