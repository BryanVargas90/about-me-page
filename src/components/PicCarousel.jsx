import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PicCarousel() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>Fun Trips</h2>
            <Carousel fade>
              <Carousel.Item>
                <img
                  src="/images/ca1.jpg"
                  className="d-block w-100"
                  alt="slide 1"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/images/ca2.jpg"
                  className="d-block w-100"
                  alt="slide 2"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="/images/ca3.jpg"
                  className="d-block w-100"
                  alt="slide 3"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
