const { request, response } = require('express');
const Author = require('../models/author.model');

// Create
module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

//Display

module.exports.allAuthor = (request, response) => {
    Author.find({})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

//Display One
module.exports.oneAuthor = (request, response) => {
    Author.findById({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// Edit One

module.exports.editAuthor = (request, response) => {
    Author.findByIdAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

// Delete One

module.exports.deleteAuthor = (request, response) => {
    Author.findByIdAndDelete({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}