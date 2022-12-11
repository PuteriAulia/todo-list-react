import React, { Component } from "react";
import "./App.css";
import ListTask from "./components/ListTask";
import ModalTask from "./components/ModalTask";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        // {
        //   id: 1,
        //   nama: "Tugas PBO",
        //   tanggal: "8 Desember 2022",
        // },
      ],
      id: 0,
      nama: "",
      tanggal: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length+1,
          nama: this.state.nama,
          tanggal: this.state.tanggal,
        },
      ],
    });
  };

  handleDelete = (id) => {
    // console.log(id);
    const dataBaru = this.state.todos
      .filter((todo) => todo.id !== id)
      .map((filterTodo) => {
        return filterTodo;
      });

    this.setState({
      todos: dataBaru,
    });
  };

  render() {
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="fw-bold mb-4">My To Do List</h1>
              <ModalTask variant="btn btn-orange mb-3" content="Tambah Task" handleSubmit={this.handleSubmit} handleChange={this.handleChange}></ModalTask>
            </div>
          </div>

          <div className="row">
            <ListTask todos={this.state.todos} handleDelete={this.handleDelete}></ListTask>
          </div>
        </div>
      </>
    );
  }
}
