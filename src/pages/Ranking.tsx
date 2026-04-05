import { Container, Card, ListGroup, Badge, ProgressBar } from 'react-bootstrap';

export const Ranking = () => {
  const clinics = [
    { id: 1, name: 'Clínica Royal Beauty', score: 98, rating: 4.9, reviews: 234 },
    { id: 2, name: 'Estética Premium', score: 96, rating: 4.8, reviews: 189 },
    { id: 3, name: 'Belle Époque', score: 95, rating: 4.8, reviews: 156 },
    { id: 4, name: 'Spa Radiance', score: 93, rating: 4.7, reviews: 142 },
    { id: 5, name: 'Clínica Aurora', score: 91, rating: 4.6, reviews: 98 }
  ];

  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h2 className="font-serif fw-bold text-olive">Ranking de Clínicas</h2>
        <p className="text-muted">As clínicas mais bem avaliadas da plataforma</p>
      </div>

      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <ListGroup variant="flush">
            {clinics.map((clinic, index) => (
              <ListGroup.Item key={clinic.id} className="p-4">
                <div className="d-flex align-items-center gap-4">
                  <div className="bg-olive text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                       style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                    {index + 1}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h5 className="fw-bold mb-1">{clinic.name}</h5>
                        <Badge bg="light" text="dark" className="me-2">
                          <i className="bi bi-star-fill text-gold me-1"></i>
                          {clinic.rating}
                        </Badge>
                        <small className="text-muted">{clinic.reviews} avaliações</small>
                      </div>
                      <div className="text-end">
                        <h4 className="font-serif fw-bold text-gold mb-0">{clinic.score}</h4>
                        <small className="text-muted">pontos</small>
                      </div>
                    </div>
                    <ProgressBar now={clinic.score} variant="gold" style={{ height: '8px' }} />
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};