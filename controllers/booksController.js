const db = require("../models");

module.exports = {
  // Should return all saved books as JSON.
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Will be used to save a new book to the database.
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Will be used to delete a book from the database by Mongo `_id`.
  remove: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}; 
