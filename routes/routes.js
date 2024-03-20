const express = require('express');
const router = express();
const methods = require('../controllers/controllers')

router.use(express.json());


//get all routes
router.get("/music", methods.getAll);

//get by id route
router.get("/music/:id", methods.getById);

//create route
router.post("/music", methods.createNew);

//update route
router.put("/music/:id", methods.updateById);


//delete route
router.delete('/music/:id', methods.deleteById)

module.exports = router;