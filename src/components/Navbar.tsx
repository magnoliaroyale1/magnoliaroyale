import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const NavigationBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <Navbar expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <i className="bi bi-flower1 text-olive fs-3"></i>
          <span className="font-serif fw-bold text-olive fs-4">Magnolia Royale</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" role="navigation">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-olive fw-medium">Início</Nav.Link>
            <Nav.Link as={Link} to="/clinics" className="text-olive fw-medium">Clínicas</Nav.Link>
            <Nav.Link as={Link} to="/ranking" className="text-olive fw-medium">Ranking</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-olive fw-medium">Blog</Nav.Link>
          </Nav>
          
          <Nav className="gap-2">
            {user ? (
              <>
                <Nav.Link as={Link} to={user.type === 'clinic' ? '/dashboard/clinic' : '/dashboard/client'}>
                  <Button variant="outline-olive" className="rounded-pill px-4">
                    <i className="bi bi-person-circle me-2"></i>
                    Painel
                  </Button>
                </Nav.Link>
                <Button variant="olive" className="rounded-pill px-4" onClick={handleLogout}>
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  <Button variant="outline-olive" className="rounded-pill px-4">
                    Entrar
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <Button variant="olive" className="rounded-pill px-4">
                    Cadastrar
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};