import { Col, Container, Row } from "react-bootstrap";

export default function Quote() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <p>
              <q>
                It Does Not Matter How Slowly You Go As Long You Do No Stop.
              </q>
            </p>{" "}
            - Confucius
          </Col>
        </Row>
      </Container>
    </section>
  );
}
