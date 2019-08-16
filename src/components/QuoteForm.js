import React, { Component } from 'react'
import {
  Container, FormGroup, Input, Form, Label, FormFeedback,
  Modal, ModalHeader, ModalBody, Button, Col
} from 'reactstrap';

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.formReset = this.formReset.bind(this)
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      isModalOpen: false,
      validate: {
        quoteState: '',
        authorState: ''
      },
      formValid: false
    }
  }

  formReset() {
    this.setState({
      validate: {
        quoteState: '',
        authorState: ''
      }
    })
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
    this.formReset();
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
    this.disableButton();
  }

  disableButton() {
    if (this.state.validate.quoteState === 'has-success' && this.state.validate.authorState === "has-success") {
      this.setState({
        formValid: true
      })
    } else {
      this.setState({
        formValid: false
      })
    }
  }

  handleValidation(e) {
    const { validate } = this.state;
    if (e.target.name === 'quote') {
      if (e.target.value.length > 5) {
        validate.quoteState = "has-success"
      } else {
        validate.quoteState = "has-danger"
      }
    }

    if (e.target.name === 'author') {
      if (e.target.value.length > 3) {
        validate.authorState = "has-success"
      } else {
        validate.authorState = "has-danger"
      }
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    })

    this.props.addQuote(this.state);
    this.formReset();
    this.toggleModal();
    alert('Quote submitted successfuly!')
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal} color="success"><span className="fa fa-pencil fa-lg margin-button"></span>New Quote</Button>
        <Modal contentClassName="bg-dark text-light" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add your own quote</ModalHeader>
          <ModalBody >
            <Container className="App">
              <Form className="form" onSubmit={(e) => this.onSubmit(e)} >
                <Col>
                  <FormGroup>
                    <Label>Quote</Label>
                    <Input
                      valid={this.state.validate.quoteState === 'has-success'}
                      invalid={this.state.validate.quoteState === 'has-danger'}
                      onChange={(e) => {
                        this.handleValidation(e)
                        this.handleChange(e)
                      }}
                      type="text"
                      name="quote"
                      ref="quote"
                      id="quote"
                      placeholder="Add new quote"
                    />
                    <FormFeedback valid={true}>
                      Looks Good!
                          </FormFeedback>
                    <FormFeedback invalid={true}>
                      Quote should be at least 5 characters long.
                          </FormFeedback>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                      valid={this.state.validate.authorState === 'has-success'}
                      invalid={this.state.validate.authorState === 'has-danger'}
                      type="text"
                      name="author"
                      ref="author"
                      id="author"
                      placeholder="Add the author of the quote"
                      onChange={(e) => {
                        this.handleValidation(e)
                        this.handleChange(e)
                      }}
                    />
                    <FormFeedback valid>
                      Looks Good!
                          </FormFeedback>
                    <FormFeedback invalid>
                      Author name should be at least 3 characters long.
                          </FormFeedback>
                  </FormGroup>
                </Col>
                <Button disabled={this.state.formValid === false}>Submit</Button>
              </Form>
            </Container>
          </ModalBody>
        </Modal>
      </div>

    )
  }

}

export default QuoteForm;

/*
<Form ref="form" onSubmit={this.onSubmit}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="quote">Quote</Label>
                                    <input  onChange={this.onChange} type="text" ref="quote" id="quote" className="form-control" placeholder="add new quote" />
                                    <div>{this.state.errors.quote}</div>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="author">Author</Label>
                                    <input type="text" ref="author" id="author" className="form-control" placeholder="add author" />
                                    <div>{this.state.errors.author}</div>
                                </Col>
                            </Row>
                            <Button type="submit" className="bg-primary" disabled={this.state.isValid}>
                                Submit
                        </Button>
                        </Form>*/