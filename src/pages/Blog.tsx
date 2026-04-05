import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Os benefícios do tratamento com laser',
      excerpt: 'Descubra como a tecnologia a laser pode rejuvenescer sua pele...',
      image: 'https://via.placeholder.com/600x400',
      category: 'Tecnologia',
      readTime: 5
    },
    {
      id: 2,
      title: 'Cuidados pós-botox: O que você precisa saber',
      excerpt: 'Maximize os resultados do seu tratamento com estas dicas...',
      image: 'https://via.placeholder.com/600x400',
      category: 'Pós-procedimento',
      readTime: 3
    }
  ];

  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h2 className="font-serif fw-bold text-olive">Blog Magnolia Royale</h2>
        <p className="text-muted">Dicas e tendências do mundo da estética</p>
      </div>

      <Row className="g-4">
        {posts.map(post => (
          <Col md={6} key={post.id}>
            <Card className="border-0 shadow-sm card-hover h-100">
              <Card.Img src={post.image} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body className="p-4">
                <Badge bg="light" text="dark" className="mb-2">{post.category}</Badge>
                <h4 className="font-serif fw-bold text-olive mb-2">{post.title}</h4>
                <p className="text-muted mb-3">{post.excerpt}</p>
                <small className="text-muted">
                  <i className="bi bi-clock me-1"></i>
                  {post.readTime} min de leitura
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};