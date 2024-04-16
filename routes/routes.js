const express = require('express');
const router = express();
const albumController = require('../controllers/controllers');
const passport = require('passport');
const authController = require('../controllers/authControllers');
const auth = require('../auth');


//authentication
router.post('/register', authController.register);
router.post('/login', passport.authenticate('local', {session: false}), authController.login);

// GET ALL ROUTE
router.get('/music', auth.verifyUser, albumController.getAllAlbums);

// GET BY ID ROUTE
router.get('/music/:id', auth.verifyUser, albumController.getAlbumById);

// CREATE ROUTE
router.post('/music', auth.verifyUser, albumController.createAlbum);

// UPDATE ROUTE
router.put('/music/:id', auth.verifyUser, albumController.updateAlbumById);

// DELETE ROUTE
router.delete('/music/:id', auth.verifyUser, albumController.deleteAlbumById);

module.exports = router;