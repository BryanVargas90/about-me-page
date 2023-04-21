import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const gitHubUrl = "https://github.com/BryanVargas90/about-me-page";
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              &copy; {2023} Bryan D. Vargas
              <br />
              <a href={gitHubUrl} target="blank" rel="noreferrer">
                Code in GitHub
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
