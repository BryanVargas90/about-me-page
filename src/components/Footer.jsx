import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const gitHubUrl = "https://github.com/BryanVargas90/about-me-page";
  const PortfolioUrl = "https://github.com/BryanVargas90/portfolio-c10v2"
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
              <br />
              <a href={PortfolioUrl} target="blank" rel="noreferrer">
                See Portfolio
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
