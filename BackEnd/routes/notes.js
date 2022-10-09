const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');
// Route : 1 fetching all notes for user 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
        try {
                const notes = await Note.find({ user: req.user.id });
                res.json(notes);
        } catch (error) {
                console.error(error.message);
                res.status(500).send("some error occured");
        }
});

// Route : 2 adding  note 
router.post('/addnote', [body('title').isLength({ min: 3 }), body('description').isLength({ min: 6 })], fetchuser, async (req, res) => {
        try {
                const { title, description, tag } = req.body;
                // if there are errors return bad request request 
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                }
                const note = new Note({
                        user: req.user.id,
                        title, description, tag
                });
                const savedNote = await note.save();
                res.json(savedNote);

        } catch (error) {
                console.error(error.message);
                res.status(500).send("some error occured");
        }
});

// Route : 3 update a note
router.put('/updatenote/:id', [body('title').isLength({ min: 3 }), body('description').isLength({ min: 6 })], fetchuser, async (req, res) => {
        try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                }
                const { title, description, tag } = req.body;
                const newNote = {};
                if (title) { newNote.title = title };
                if (description) { newNote.description = description };
                if (tag) { newNote.tag = tag };

                let note = await Note.findById(req.params.id);
                if (!note) {
                        return res.status(404).send("Not found");
                }
                if (note.user.toString() !== req.user.id) {
                        return res.status(401).send("Not found");
                }

                note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
                res.json(note);
        } catch (error) {
                console.error(error.message);
                res.status(500).send("some error occured");
        }

});

// Route : 4 delete a note
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
        try {

                let note = await Note.findById(req.params.id);
                if (!note) {
                        return res.status(404).send("Not found");
                }
                if (note.user.toString() !== req.user.id) {
                        return res.status(401).send("Not found");
                }

                note = await Note.findByIdAndDelete(req.params.id);
                //res.send("note is deleted successfully");
        } catch (error) {
                console.error(error.message);
                res.status(500).send("some error occured");
        }


});
module.exports = router;