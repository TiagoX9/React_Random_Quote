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

        this.state = {
            isModalOpen: false
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onSubmit(event) {
        event.preventDefault();
        var newQuote = this.refs.quote.value;
        var author = this.refs.author.value;
        this.props.addQuote({ newQuote, author });
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg">Submit Quote</span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add your own quote</ModalHeader>
                    <ModalBody>
                        <Form ref="form" onSubmit={this.onSubmit}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="quote">Quote</Label>
                                    <input type="text" ref="quote" id="quote" className="form-control" placeholder="add new quote" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="author">Author</Label>
                                    <input type="text" ref="author" id="author" className="form-control" placeholder="add author" />
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