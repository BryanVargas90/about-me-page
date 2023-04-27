import { Container, Row, Col } from "react-bootstrap";

export default function Grid() {
  return (
    <section>
      <Container className="grid-con">
        <Row>
          <Col sm={12} md={4}>
            <h2>Why Boca Code</h2>
            <p>
            I chose Boca code because it is a highly reputable and well-respected program that offers comprehensive training in Software Development. 
            Boca code has a proven track record of helping students achieve their career goals, 
            with many graduates going on to secure positions at top companies in the industry. 
           The instructors and staff are knowledgeable and experienced professionals who are dedicated to providing personalized support and guidance to each student. 
            Overall, I am confident that Boca Code will provide me with the skills, knowledge, and connections necessary to achieve my career aspirations.
            </p>
          </Col>

          <Col>
            <h2> Exiciting Project</h2>
            <p>
            I am excited to develop a web application that allows me and my friends to easily schedule a gaming session. 
            With this app, we will be able to coordinate our schedules and choose the best day, time, game, and duration for our gaming session.
            
            </p>
          </Col>

          <Col>
            <h2>Ideal Work Place</h2>
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
