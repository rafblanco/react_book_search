import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=";
const APIKEY = "AIzaSyCgUZ6A16dA7O_9t9OWYG8pXFFq1MSqgvw";

export default {
    getBooks: function(){
        return axios.get("/")
    }
}