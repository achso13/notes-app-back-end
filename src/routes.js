const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler.js");
const routes = [
    // Routing tambah note
    {
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
    },
    // Routing menampilkan data notes
    {
        method: "GET",
        path: "/notes",
        handler: getAllNotesHandler,
    },
    // Routing menampilkan data detail notes
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNoteByIdHandler,
    },
    // Routing menampilkan data edit notes
    {
        method: "PUT",
        path: "/notes/{id}",
        handler: editNoteByIdHandler,
    },
    // Routing delete notes
    {
        method: "DELETE",
        path: "/notes/{id}",
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;