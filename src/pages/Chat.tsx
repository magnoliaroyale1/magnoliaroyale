import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

export const Chat = () => {
  const [message, setMessage] = useState('');
  const [activeChat, setActiveChat] = useState('1');

  const chats = [
    { id: '1', name: 'Clínica Belle Époque', lastMessage: 'Olá, gostaria de agendar...', time: '10:30', unread: 2 },
    { id: '2', name: 'Spa Radiance', lastMessage: 'Confirmado para amanhã!', time: '09:15', unread: 0 }
  ];

  const messages = [
    { id: 1, sender: 'clinic', text: 'Olá! Como posso ajudar?', time: '10:00' },
    { id: 2, sender: 'client', text: 'Gostaria de saber sobre o procedimento de botox', time: '10:05' },
    { id: 3, sender: 'clinic', text: 'Claro! Temos disponibilidade para esta semana.', time: '10:30' }
  ];

  return (
    <Container className="py-5 mt-5">
      <Card className="border-0 shadow-sm" style={{ height: '70vh' }}>
        <Row className="g-0 h-100">
          <Col md={4} className="border-end">
            <div className="p-3 border-bottom">
              <h5 className="font-serif fw-bold text-olive mb-0">Conversas</h5>
            </div>
            <ListGroup variant="flush">
              {chats.map(chat => (
                <ListGroup.Item
                  key={chat.id}
                  action
                  active={activeChat === chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className="border-0 py-3"
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="mb-1 fw-bold">{chat.name}</h6>
                      <small className="text-muted text-truncate d-block" style={{ maxWidth: '150px' }}>
                        {chat.lastMessage}
                      </small>
                    </div>
                    <div className="text-end">
                      <small className="text-muted d-block">{chat.time}</small>
                      {chat.unread > 0 && (
                        <span className="badge bg-olive rounded-pill">{chat.unread}</span>
                      )}
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={8} className="d-flex flex-column">
            <div className="p-3 border-bottom bg-white">
              <h6 className="fw-bold mb-0">Clínica Belle Époque</h6>
              <small className="text-success">Online</small>
            </div>

            <div className="flex-grow-1 p-4 overflow-auto bg-light">
              {messages.map(msg => (
                <div key={msg.id} className={`d-flex mb-3 ${msg.sender === 'client' ? 'justify-content-end' : ''}`}>
                  <div 
                    className={`p-3 rounded-4 ${msg.sender === 'client' ? 'bg-olive text-white' : 'bg-white shadow-sm'}`}
                    style={{ maxWidth: '70%' }}
                  >
                    <p className="mb-1">{msg.text}</p>
                    <small className={msg.sender === 'client' ? 'opacity-75' : 'text-muted'}>{msg.time}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-top bg-white">
              <Form className="d-flex gap-2">
                <Form.Control
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-pill"
                />
                <Button variant="olive" className="rounded-pill px-4">
                  <i className="bi bi-send"></i>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};