import { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

interface Filters {
  location: string;
  procedure: string;
  minPrice: string;
  maxPrice: string;
  minRating: string;
}

interface SearchFiltersProps {
  onFilter: (filters: Filters) => void;
}

export const SearchFilters = ({ onFilter }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<Filters>({
    location: '',
    procedure: '',
    minPrice: '',
    maxPrice: '',
    minRating: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <Card className="mb-4 border-0 shadow-sm">
      <Card.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={3}>
              <Form.Group>
                <Form.Label className="fw-medium text-olive">
                  <i className="bi bi-geo-alt me-2"></i>Localização
                </Form.Label>
                <Form.Select 
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="rounded-pill"
                >
                  <option value="">Todas as cidades</option>
                  <option value="São Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Belo Horizonte">Belo Horizonte</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={3}>
              <Form.Group>
                <Form.Label className="fw-medium text-olive">
                  <i className="bi bi-heart me-2"></i>Procedimento
                </Form.Label>
                <Form.Select 
                  value={filters.procedure}
                  onChange={(e) => setFilters({...filters, procedure: e.target.value})}
                  className="rounded-pill"
                >
                  <option value="">Todos</option>
                  <option value="Botox">Botox</option>
                  <option value="Preenchimento">Preenchimento</option>
                  <option value="Limpeza de Pele">Limpeza de Pele</option>
                  <option value="Laser">Laser</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={2}>
              <Form.Group>
                <Form.Label className="fw-medium text-olive">
                  <i className="bi bi-star me-2"></i>Avaliação
                </Form.Label>
                <Form.Select 
                  value={filters.minRating}
                  onChange={(e) => setFilters({...filters, minRating: e.target.value})}
                  className="rounded-pill"
                >
                  <option value="">Qualquer</option>
                  <option value="4">4+ estrelas</option>
                  <option value="4.5">4.5+ estrelas</option>
                  <option value="5">5 estrelas</option>
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={2}>
              <Form.Group>
                <Form.Label className="fw-medium text-olive">Preço Min</Form.Label>
                <Form.Control 
                  type="number"
                  placeholder="R$"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                  className="rounded-pill"
                />
              </Form.Group>
            </Col>
            
            <Col md={2} className="d-flex align-items-end">
              <Button type="submit" variant="olive" className="w-100 rounded-pill">
                <i className="bi bi-search me-2"></i>Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};