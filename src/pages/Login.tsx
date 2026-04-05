import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard/client');
    } catch (err) {
      setError('Email ou senha incorretos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <i className="bi bi-flower1 text-olive fs-1"></i>
                <h2 className="font-serif fw-bold text-olive mt-2">Bem-vindo</h2>
                <p className="text-muted">Entre na sua conta Magnolia Royale</p>
              </div>

              {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-pill py-2 px-4"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-pill py-2 px-4"
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="olive"
                  className="w-100 rounded-pill py-2 mb-3"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  ) : (
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                  )}
                  Entrar
                </Button>

                <div className="text-center">
                  <Link to="/forgot-password" className="text-decoration-none text-muted small">
                    Esqueceu a senha?
                  </Link>
                </div>
              </Form>

              <hr className="my-4" />

              <div className="text-center">
                <p className="text-muted mb-2">Não tem uma conta?</p>
                <Link to="/register">
                  <Button variant="outline-olive" className="rounded-pill w-100">
                    Criar conta como Cliente
                  </Button>
                </Link>
                <Link to="/register-clinic" className="mt-2 d-block">
                  <Button variant="link" className="text-gold text-decoration-none">
                    Cadastrar minha Clínica
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};