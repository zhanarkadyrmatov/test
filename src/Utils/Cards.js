import React, { useState } from "react";
import { Card, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ props }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => setShow(false);

  const add = (name_) => {
    console.log(name_);
    setName(name_);
    setShow(true);
  };

  return (
    <>
      {props.map((e) => {
        return (
          <Col className="mb-3" sm={6} md={4}>
            <Card
              onClick={() => add(e.name)}
              style={{
                maxWidth: "35rem",
                backgroundColor: `${e.color}`,
              }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Text>{e.language}</Card.Text>
                <Card.Title className="fs-1 p-5">{e.name}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="m-0">Время: {e.clock} минут</Card.Text>
                  <Card.Text>Заданий: {e.question}</Card.Text>
                </div>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  as={Link}
                  to={"text/"}
                  variant="primary"
                  onClick={handleClose}
                >
                  Начать тест
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        );
      })}
    </>
  );
}

export default Cards;
