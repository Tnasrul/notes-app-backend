const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNoteByIdHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: () => {},
  },
];
module.exports = routes;
