import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Table,
  Row,
  Modal,
  Button,
  Card,
} from "react-bootstrap";
import Text from "../Utils/javas.json";
import { Link } from "react-router-dom";
import MyTimer from "./MyTimer";
import { useTimer } from "react-timer-hook";

function TextComponetn({ props }) {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("key")) || []
  );
  const [show, setShow] = useState(false);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const expiryTimestamp = time;
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(item));
  }, [item]);

  const add = (id, boolean, abvg) => {
    if (item.find((a) => a.id === id)) {
      console.log(item, id);
      const aa = item.filter((a) => a.id !== id);
      console.log(aa);
      setItem(aa);
      setItem((prev) => [...prev, { id, boolean, abvg }]);
    } else {
      setItem((prev) => [...prev, { id, boolean, abvg }]);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      handleShow();
    }
  }, 10);

  return (
    <div>
      <Container>
        <Card className="m-5">
          <Card.Header>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "20px",
                  margin: "0",
                }}
              >
                <span>{minutes}</span>:<span>{seconds}</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Row className="m-5">
              {Text.map((e) => {
                return (
                  <Col md={6} className="h-100 mb-4">
                    <h6 className="text-enter">
                      {Text.length} Тапшырманын №{e.id} тапшырмасы
                    </h6>
                    <Table bordered>
                      <thead>
                        <tr>
                          <th className="">{e.id}.</th>
                          <th>{e.title}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {e.test.map((r) => (
                          <tr
                            style={{
                              cursor: "pointer",
                              backgroundColor: item.find(
                                (a) => a.id === e.id && a.abvg === r.abvg
                              )
                                ? "green"
                                : "red",
                            }}
                            onClick={() => add(e.id, r.tuura, r.abvg)}
                          >
                            <td>{r.abvg})</td>
                            <td>{r.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                );
              })}
              <Button variant="primary">Primary</Button>
            </Row>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Убактыныз бутту</Modal.Body>
          <Modal.Footer>
            <Button as={Link} to="/" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default TextComponetn;
