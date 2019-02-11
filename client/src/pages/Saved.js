import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  // Setting our component's initial state
  state = {
    books: []
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => {
                return (
                  <ListItem key={book._id}>
                    <h5>{book.title}</h5>
                    <h6>{book.author}</h6>
                    <img src={book.image} alt="Book cover"/>
                    <p>{book.description}</p>
                    <button className="btn btn-primary" href={book.link}>
                      View
                    </button>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Saved Books to Display</h3>
          )}
      </Container>
    );
  }
}

export default Saved;
