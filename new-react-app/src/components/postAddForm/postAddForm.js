import React, { Component } from 'react';
import './postAddForm.css';
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class PostAddForm extends Component {
  state = {
    text: '',
  };

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className="d-flex">
        <Row>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="О чем вы думаете сейчас ?"
              onChange={this.onValueChange}
              value={this.state.text}
            />
          </Col>
          <Col sm={2}>
            <Button type="submit" variant="outline-secondary">
              Добавить
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
