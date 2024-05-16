import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function IncomeExpenses() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Income</Card.Title>
            <h2 className="text-success">$0.00</h2>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Expenses</Card.Title>
            <h2 className="text-danger">$0.00</h2>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default IncomeExpenses;