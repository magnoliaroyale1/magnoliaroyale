import { Card, Row, Col, Container, ListGroup, Badge, Button, ProgressBar } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export const DashboardClinic = () => {
  const { user } = useAuth();

  return (
    <Container className="py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="font-serif fw-bold text-olive">Painel da Clínica</h2>
          <p className="text-muted mb-0">Bem-vindo de volta, {user?.displayName}</p>
        </div>
        <Badge bg="warning" className="rounded-pill px-3 py-2">Status: Pendente de Aprovação</Badge>
      </div>

      <Row className="g-4 mb-4">
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center h-100">
            <Card.Body className="p-4">
              <i className="bi bi-calendar-check text-gold fs-1 mb-2"></i>
              <h3 className="font-serif fw-bold text-olive">24</h3>
              <p className="text-muted mb-0">Agendamentos</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center h-100">
            <Card.Body className="p-4">
              <i className="bi bi-star-fill text-gold fs-1 mb-2"></i>
              <h3 className="font-serif fw-bold text-olive">4.8</h3>
              <p className="text-muted mb-0">Avaliação Média</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center h-100">
            <Card.Body className="p-4">
              <i className="bi bi-eye text-gold fs-1 mb-2"></i>
              <h3 className="font-serif fw-bold text-olive">1.2k</h3>
              <p className="text-muted mb-0">Visualizações</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm text-center h-100">
            <Card.Body className="p-4">
              <i className="bi bi-trophy text-gold fs-1 mb-2"></i>
              <h3 className="font-serif fw-bold text-olive">#5</h3>
              <p className="text-muted mb-0">Ranking Regional</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
              <h5 className="font-serif fw-bold text-olive mb-0">Solicitações Recentes</h5>
              <Button variant="link" className="text-gold text-decoration-none">Ver todas</Button>
            </Card.Header>
            <Card.Body className="p-4">
              <ListGroup variant="flush">
                {['Maria Silva - Botox', 'Ana Paula - Preenchimento', 'Carolina Mendes - Limpeza'].map((item, idx) => (
                  <ListGroup.Item key={idx} className="px-0 py-3 d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-0 fw-bold">{item}</h6>
                      <small className="text-muted">Hoje, 14:0{idx}</small>
                    </div>
                    <div className="d-flex gap-2">
                      <Button variant="outline-success" size="sm" className="rounded-pill">Aceitar</Button>
                      <Button variant="outline-danger" size="sm" className="rounded-pill">Recusar</Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="p-4">
              <h5 className="font-serif fw-bold text-olive mb-3">Score de Confiança</h5>
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="flex-grow-1">
                  <ProgressBar now={92} variant="gold" className="mb-1" />
                </div>
                <span className="fw-bold text-olive">92</span>
              </div>
              <small className="text-muted">Complete seu perfil para aumentar o score</small>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm bg-olive text-white">
            <Card.Body className="p-4">
              <h5 className="font-serif fw-bold mb-3">Plano Atual: Básico</h5>
              <p className="opacity-75 mb-3">Aproveite mais recursos com o plano Profissional</p>
              <Button variant="gold" className="w-100 rounded-pill">Fazer Upgrade</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};