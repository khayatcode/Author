const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/author/displayAll', AuthorController.allAuthor);
    app.get('/api/author/displayOne/:id', AuthorController.oneAuthor);
    app.post('/api/author/create', AuthorController.createAuthor);
    app.put('/api/author/edit/:id', AuthorController.editAuthor);
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);
}