import React, { Component } from 'react'
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, Form, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col
} from 'reactstrap';

class QuoteForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);

        this.state = {
            isModalOpen: false,
            errors: {},
            quotes: {}
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onChange(event) {
        this.handleValidation();
    }

    handleValidation() {
        let errors = {};
        if (this.refs.quote.value.length < 5) {
            errors['quote'] = "Should be longer than 5 characters"
          }

          if (this.refs.author.value.length < 3) {
            errors['author'] = "Should be longer than 3 characters"
          }
          this.setState({
            errors: errors,
            quotes: {
                quote: this.refs.quote.value,
                author: this.refs.author.value
            }      
          })
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            quotes: {
                quote: this.refs.quote.value,
                author: this.refs.author.value
            }      
          })
        this.props.addQuote( this.state.quotes );
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg">Submit Quote</span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add your own quote</ModalHeader>
                    <ModalBody>
                        <Form ref="form" onSubmit={this.onSubmit} onChange={this.onChange}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="quote">Quote</Label>
                                    <input type="text" ref="quote" id="quote" className="form-control" placeholder="add new quote" />
                                    <div>{this.state.errors.quote}</div>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="author">Author</Label>
                                    <input type="text" ref="author" id="author" className="form-control" placeholder="add author" />
                                    <div>{this.state.errors.quote}</div>
                                </Col>
                            </Row>
                            <Button type="submit" className="bg-primary">
                                Submit
                        </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        )
    }

}

export default QuoteForm;