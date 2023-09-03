import React from "react"
import { Container, Row, Col } from "react-bootstrap"


const PreLoginPageContainer = ({ children }) => {

  return (
    <Container>
      <Row>
        <Col className="w-75 d-flex align-items-center justify-content-center">
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default PreLoginPageContainer