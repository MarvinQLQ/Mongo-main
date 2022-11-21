const {Router} = require('express')
const router = Router()

const { renderNoteform,
        createNewNote , 
        renderNotes, 
        renderEditForm, 
        updateNote, 
        delateNote} = require('../controllers/notes.controllers');

router.get('/notes/add',renderNoteform);

router.post('/notes/new-note', createNewNote);

// get all note

router.get('/notes',renderNotes)

//  edit notes

router.get('/notes/edit/:id',renderEditForm)

router.put('/notes/edit/:id,',updateNote)

// Delate notes
router.delete('/note/delate/:id',delateNote)



module.exports = router