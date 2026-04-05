import { Container, Row, Col } from 'react-bootstrap';
import { useClinics } from '../hooks/useClinics';
import { ClinicCard } from '../components/ClinicCard';
import { SearchFilters } from '../components/SearchFilters';

export const ClinicsList = () => {
  const { clinics, loading } = useClinics();

  const handleFilter = (filters: any) => {
    console.log(filters);
    // Implementar lógica de filtro
  };

  return (
    <Container className="py-5 mt-5">
      <div className="mb-4">
        <h2 className="font-serif fw-bold text-olive">Encontre sua Clínica</h2>
        <p className="text-muted">Explore as melhores clínicas de estética premium</p>
      </div>

      <SearchFilters onFilter={handleFilter} />

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-olive" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      ) : (
        <Row className="g-4">
          {clinics.map(clinic => (
            <Col md={6} lg={4} key={clinic.id}>
              <ClinicCard clinic={clinic} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};