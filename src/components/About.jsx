import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <main>
      <Container>
        <Row className="rounded-circle">
          <Col sm={12} md={6}>
            <img src="/images/profile.jpg" className="rounded-circle" alt="" />
          </Col>

          <Col>
            <h1 className="h1"> Bryan Vargas </h1>
            <p className="para-div">
              I am deeply passionate about the sea and coding. The vastness,
              beauty and mysteries of the ocean have always fascinated me and
              inspired me to explore and learn more about marine life. At the
              same time, I have a strong interest in coding and its applications
              in various fields, especially web development and software
              engineering. I am always striving to improve my skills and learn
              new technologies to stay up-to-date with the latest trends. My
              interests in the sea and coding reflect my curious and open-minded
              nature, and my desire to continually expand my knowledge and
              understanding of the world.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
