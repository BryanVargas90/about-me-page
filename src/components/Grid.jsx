import { Container, Row, Col } from "react-bootstrap";

export default function Grid() {
  return (
    <section>
      <Container className="grid-con">
        <Row>
          <Col sm={12} md={4}>
            <h2>Why Boca Code</h2>
            <p>
              Coding bootcamps offer an immersive, practical learning experience
              that can help you learn to code quickly and effectively. They
              often provide hands-on experience, job placement assistance,
              flexible scheduling, and a sense of community among students.
              Bootcamps are a great option for those who want to transition into
              a tech career quickly and gain the skills and experience they need
              to succeed.
            </p>
          </Col>

          <Col>
            <h2> Exiciting project</h2>
            <p>
              An interesting project in my opinion would be to make an chess
              game since I don't know how to play chess.
            </p>
          </Col>

          <Col>
            <h2>Ideal work place</h2>
            <p>
              An ideal workplace for me may include a quiet and focused work
              environment, a collaborative work culture, opportunities for
              professional development and growth, and a focus on work-life
              balance.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
