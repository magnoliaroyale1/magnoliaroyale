import { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DashboardClient = () => {
  const [appointments] = useState([
    { id: 1, clinic: 'Clínica Belle Époque', procedure: 'Botox', date: '2026-04-10', status: 'confirmed' },
    { id: 2, clinic: 'Spa Radiance', procedure: 'Limpeza de Pele', date: '2026-04-15', status: 'pending' }
  ]);

  return (
    <Container className="py-5 mt-5">
      <h2 className="font-serif fw-bold text-olive mb-4">Meu Painel</h2>
      
      <Row className="g-4">
        <Col md={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4 text-center">
              <div className="bg-olive text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                <i className="bi bi-person fs-1"></i>
              </div>
              <h5 className="font-serif fw-bold">Maria Silva</h5>
              <p className="text-muted mb-3">Cliente desde 2025</p>
              <Badge bg="light" text="dark" className="rounded-pill px-3">
                <i className="bi bi-star-fill text-gold me-1"></i>
                12 avaliações
              </Badge>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-0 pt-4 px-4">
              <h5 className="font-serif fw-bold text-olive mb-0">Próximos Agendamentos</h5>
            </Card.Header>
            <Card.Body className="p-4">
              <ListGroup variant="flush">
                {appointments.map(app => (
                  <ListGroup.Item key={app.id} className="px-0 py-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="fw-bold mb-1">{app.clinic}</h6>
                        <p className="text-muted mb-0 small">{app.procedure} • {app.date}</p>
                      </div>
                      <Badge bg={app.status === 'confirmed' ? 'success' : 'warning'} className="rounded-pill">
                        {app.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                      </Badge>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/clinics">
                <Button variant="outline-olive" className="w-100 rounded-pill mt-3">
                  <i className="bi bi-plus-lg me-2"></i>Novo Agendamento
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-2">
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="font-serif fw-bold text-olive mb-3">
                <i className="bi bi-chat-left-text me-2"></i>
                Mensagens
              </h5>
              <p className="text-muted mb-3">Você tem 2 mensagens não lidas</p>
              <Button variant="olive" className="rounded-pill w-100">Ver Mensagens</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="font-serif fw-bold text-olive mb-3">
                <i className="bi bi-heart me-2"></i>
                Favoritos
              </h5>
              <p className="text-muted mb-3">5 clínicas salvas</p>
              <Button variant="outline-olive" className="rounded-pill w-100">Ver Favoritos</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};