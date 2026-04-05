import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, ProgressBar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import type { Clinic } from '../types';

export const RegisterClinic = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    email: '',
    phone: '',
    password: '',
    street: '',
    number: '',
    city: '',
    state: '',
    description: '',
    procedures: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(user, { displayName: formData.name });

      const clinicData: Omit<Clinic, 'id'> = {
        name: formData.name,
        cnpj: formData.cnpj,
        email: formData.email,
        phone: formData.phone,
        status: 'pending',
        address: {
          street: formData.street,
          number: formData.number,
          city: formData.city,
          state: formData.state,
          zipCode: '',
          neighborhood: ''
        },
        procedures: formData.procedures,
        description: formData.description,
        rating: 0,
        reviewCount: 0,
        verified: false,
        score: 0,
        images: [],
        plan: 'basic',
        userId: user.uid
      };

      await setDoc(doc(db, 'clinics', user.uid), clinicData);
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: formData.email,
        displayName: formData.name,
        type: 'clinic',
        createdAt: new Date()
      });

      navigate('/dashboard/clinic');
    } catch (err) {
      setError('Erro ao cadastrar clínica. Verifique os dados.');
    } finally {
      setLoading(false);
    }
  };

  const proceduresList = ['Botox', 'Preenchimento', 'Limpeza de Pele', 'Laser', 'Peeling', 'Microagulhamento'];

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <i className="bi bi-building-add text-olive fs-1"></i>
                <h2 className="font-serif fw-bold text-olive mt-2">Cadastrar Clínica</h2>
                <p className="text-muted">Junte-se à rede premium de estética</p>
              </div>

              <ProgressBar now={(step / 3) * 100} className="mb-4" variant="olive" />

              {error && <Alert variant="danger" className="rounded-3">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <h5 className="font-serif text-olive mb-3">Dados da Empresa</h5>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Razão Social</Form.Label>
                          <Form.Control
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CNPJ</Form.Label>
                          <Form.Control
                            type="text"
                            value={formData.cnpj}
                            onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Telefone</Form.Label>
                          <Form.Control
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="rounded-pill"
                        required
                      />
                    </Form.Group>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h5 className="font-serif text-olive mb-3">Endereço</h5>
                    <Row>
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Label>Rua</Form.Label>
                          <Form.Control
                            type="text"
                            value={formData.street}
                            onChange={(e) => setFormData({...formData, street: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Número</Form.Label>
                          <Form.Control
                            type="text"
                            value={formData.number}
                            onChange={(e) => setFormData({...formData, number: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Cidade</Form.Label>
                          <Form.Control
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                            className="rounded-pill"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Estado</Form.Label>
                          <Form.Select
                            value={formData.state}
                            onChange={(e) => setFormData({...formData, state: e.target.value})}
                            className="rounded-pill"
                            required
                          >
                            <option value="">Selecione</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h5 className="font-serif text-olive mb-3">Especialidades</h5>
                    <Form.Group className="mb-3">
                      <Form.Label>Descrição da Clínica</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="rounded-4"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Procedimentos Oferecidos</Form.Label>
                      <div className="d-flex flex-wrap gap-2">
                        {proceduresList.map(proc => (
                          <Form.Check
                            key={proc}
                            type="checkbox"
                            label={proc}
                            checked={formData.procedures.includes(proc)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({...formData, procedures: [...formData.procedures, proc]});
                              } else {
                                setFormData({...formData, procedures: formData.procedures.filter(p => p !== proc)});
                              }
                            }}
                            className="user-select-none"
                          />
                        ))}
                      </div>
                    </Form.Group>
                  </>
                )}

                <div className="d-flex justify-content-between mt-4">
                  {step > 1 && (
                    <Button variant="outline-secondary" className="rounded-pill" onClick={() => setStep(step - 1)}>
                      Voltar
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button variant="olive" className="rounded-pill ms-auto" onClick={() => setStep(step + 1)}>
                      Próximo <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                  ) : (
                    <Button variant="gold" className="rounded-pill ms-auto" type="submit" disabled={loading}>
                      {loading ? 'Enviando...' : 'Finalizar Cadastro'}
                    </Button>
                  )}
                </div>
              </Form>

              <div className="text-center mt-3">
                <Link to="/login" className="text-decoration-none text-muted small">
                  Já tem uma conta? Entre aqui
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};