import React from 'react';
import './postAddForm.css';
import { Button, Form, Row, Col } from 'react-bootstrap';

const PostAddForm = ({ addItem }) => {
  return (
    <Form>
      <Row>
        <Col sm={10}>
          <Form.Control type="text" placeholder="О чем вы думаете сейчас ?" />
        </Col>
        <Col>
          <Button variant="outline-secondary" onClick={() => addItem('Hello')}>
            Добавить
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PostAddForm;
