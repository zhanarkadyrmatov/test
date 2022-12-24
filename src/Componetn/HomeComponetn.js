import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "../Utils/Cards";
import Home from "../Utils/home.json";

function HomeComponetn() {
  return (
    <div>
      <Container>
        <Row className="m-3">
          <Cards props={Home} />
        </Row>
      </Container>
    </div>
  );
}

export default HomeComponetn;
