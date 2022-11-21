const notesCtrl = {};

const Note = require('../models/note')

notesCtrl.renderNoteform = (req,res) => {
    res.render('notes/new-note');
}


notesCtrl.createNewNote= async (req,res)  => {
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    await newNote.save();
    res.send('new note')
}

notesCtrl.renderNotes = async (req,res)  => {
    const notas = await Note.find();
    res.render('notes/all-notes', { Note });
}
notesCtrl.renderEditForm = (req,res)  => {
    res.send('render edit form')
}
notesCtrl.updateNote = (req,res)  => {
    res.send('Update notes')
}
notesCtrl.delateNote = (req,res)  => {
    res.send('Delating notes')
}

module.exports = notesCtrl;