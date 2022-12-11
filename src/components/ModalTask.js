import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class ModalTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <Button variant={this.props.variant} onClick={this.handleShow}>
          {this.props.content}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Kegiatan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Kegiatan</Form.Label>
                <Form.Control type="text" placeholder="Masukkan kegiatan..." name="nama" value={this.props.nama} onChange={(e) => this.props.handleChange(e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Deadline</Form.Label>
                <Form.Control type="date" placeholder="Masukkan tanggal..." name="tanggal" value={this.props.tanggal} onChange={(e) => this.props.handleChange(e)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handleSubmit}>
              Tambah
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
