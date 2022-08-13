import type { NextPage } from 'next'
import {Container, Row, Col} from 'react-bootstrap'

const Home: NextPage = () => {
  return (    
    <Container fluid>
      <Row>
        <Col>
          <p>Fluid Container</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
