import React, { Component } from "react";
import Container from "../components/Container";
import SaveBtn from "../components/SaveBtn";
import SearchForm from "../components/SearchForm";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  saveBook = book => {
    API.saveBook(book)
      .then(console.log(book)) 
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => this.setState({ results: res.data.items }))
      // .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <List>
            {this.state.results.map((result,i) => {
              return (
                <ListItem key={i}>
                  <h5>{result.volumeInfo.title}</h5>
                  <h6>{result.volumeInfo.authors}</h6>
                  <img src={result.volumeInfo.imageLinks.thumbnail} alt="Book cover"/>
                  <p>{result.volumeInfo.description}</p>
                  <a className="btn btn-primary" href={result.volumeInfo.infoLink}>
                    View
                  </a>
                  <SaveBtn onClick={() => this.saveBook({title: result.volumeInfo.title, authors: result.volumeInfo.authors, image: result.volumeInfo.imageLinks.thumbnail, link: result.volumeInfo.infoLink, description: result.volumeInfo.description})} />
                </ListItem>
              );
            })}
          </List>
        </Container>
      </div>
    );
  }
}

export default Search;
