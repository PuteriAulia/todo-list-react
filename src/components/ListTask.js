import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class ListTask extends Component {
  render() {
    return (
      <>
        <div className="row">
          {this.props.todos.map((data, index) => {
            return (
              <div key={index} className="col-12">
                <div className="card-wrapper p-4 mb-3 d-flex justify-content-between align-center">
                  <div className="d-flex">
                    <div className="icon-wrapper me-3">
                      <i class="bi bi-sticky"></i>
                    </div>
                    <div className="task d-flex flex-column">
                      <h6>{data.nama}</h6>
                      <span>{data.tanggal}</span>
                    </div>
                  </div>
                  <div>
                    <Button variant="btn btn-green" onClick={() => this.props.handleDelete(data.id)}>Selesai</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
