import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Form, Tab, Tabs } from 'react-bootstrap';
import { StarRating } from '../components/StarRating';

export const ClinicPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Mock data - substituir por busca real do Firestore
  const clinic = {
    id,
    name: 'Clínica Belle Époque',
    description: 'Especialistas em rejuvenescimento facial e corporal com as mais avançadas tecnologias.',
    rating: 4.8,
    reviewCount: 127,
    verified: true,
    address: { street: 'Av. Paulista', number: '1000', city: 'São Paulo', state: 'SP' },
    procedures: ['Botox', 'Preenchimento', 'Laser'],
    images: ['https://via.placeholder.com/800x400'],
    score: 95
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar envio da avaliação
    console.log({ rating, comment });
  };

  return (
    <Container className="py-5 mt-5">
      <Row>
        <Col lg={8}>
          <Card className="border-0 shadow-sm mb-4">
            <div className="position-relative">
              <Card.Img src={clinic.images[0]} style={{ height: '400px', objectFit: 'cover' }} />
              {clinic.verified && (
                <Badge className="position-absolute top-0 end-0 m-3 badge-verified rounded-pill px-3 py-2 fs-6">
                  <i className="bi bi-patch-check-fill me-2"></i>
                  Clínica Verificada
                </Badge>
              )}
            </div>
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h1 className="font-serif fw-bold text-olive">{clinic.name}</h1>
                  <p className="text-muted mb-0">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {clinic.address.street}, {clinic.address.number} - {clinic.address.city}, {clinic.address.state}
                  </p>
                </div>
                <div className="text-end">
                  <h3 className="font-serif fw-bold text-gold mb-0">{clinic.rating}</h3>
                  <StarRating rating={Math.round(clinic.rating)} />
                  <small className="text-muted">{clinic.reviewCount} avaliações</small>
                </div>
              </div>

              <div className="d-flex gap-2 mb-4">
                {clinic.procedures.map((proc, idx) => (
                  <Badge key={idx} bg="light" text="dark" className="px-3 py-2 border">
                    {proc}
                  </Badge>
                ))}
              </div>

              <div className="d-flex align-items-center gap-3 p-3 bg-light rounded-3 mb-4">
                <div className="flex-grow-1">
                  <small className="text-muted">Score de Confiança</small>
                  <div className="progress mt-1">
                    <div className="progress-bar" style={{ width: `${clinic.score}%` }}></div>
                  </div>
                </div>
                <span className="fw-bold text-olive fs-4">{clinic.score}</span>
              </div>

              <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'about')} className="mb-4">
                <Tab eventKey="about" title="Sobre">
                  <p className="mt-3">{clinic.description}</p>
                </Tab>
                <Tab eventKey="reviews" title={`Avaliações (${clinic.reviewCount})`}>
                  <div className="mt-3">
                    <h5 className="font-serif mb-3">Deixe sua avaliação</h5>
                    <Form onSubmit={handleSubmitReview}>
                      <Form.Group className="mb-3">
                        <Form.Label>Sua nota</Form.Label>
                        <StarRating rating={rating} interactive onRate={setRating} size="lg" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Comentário</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="rounded-4"
                        />
                      </Form.Group>
                      <Button variant="olive" type="submit" className="rounded-pill">
                        Enviar Avaliação
                      </Button>
                    </Form>
                  </div>
                </Tab>
                <Tab eventKey="portfolio" title="Portfólio">
                  <Row className="g-3 mt-2">
                    {[1, 2, 3, 4].map((img) => (
                      <Col md={6} key={img}>
                        <img src={`https://via.placeholder.com/400x300`} className="rounded-3 w-100" alt="Portfolio" />
                      </Col>
                    ))}
                  </Row>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
            <Card.Body className="p-4">
              <h5 className="font-serif fw-bold text-olive mb-3">Agendar Consulta</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Procedimento</Form.Label>
                  <Form.Select className="rounded-pill">
                    <option>Selecione...</option>
                    {clinic.procedures.map(p => <option key={p}>{p}</option>)}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Data</Form.Label>
                  <Form.Control type="date" className="rounded-pill" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Horário</Form.Label>
                  <Form.Select className="rounded-pill">
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>14:00</option>
                    <option>16:00</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="gold" className="w-100 rounded-pill py-2">
                  <i className="bi bi-calendar-check me-2"></i>
                  Solicitar Agendamento
                </Button>
              </Form>

              <hr className="my-4" />

              <Button variant="outline-olive" className="w-100 rounded-pill">
                <i className="bi bi-chat-dots me-2"></i>
                Conversar com Clínica
              </Button>

              <div className="mt-3">
                <Form.Check
                  type="checkbox"
                  label="Denunciar esta clínica"
                  className="text-muted small"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};