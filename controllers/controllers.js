const Album = require('../database/collection/Album')
// methods available via mongoose model:
// find()
// findById()
// findOne()
// findOneAndDelete()
// findByIdAndDelete()



//get all data 
const getAll = async (req, res) => {
    console.log("someone is coming to music");
    Album.find()
        .then((albums) => {
            if (!albums.length) {
                return res
                    .status(404)
                    .json({ success: false, data: "No albums found." });
            }
            return res.status(200).json({ success: true, data: albums });
        })
        .catch((reason) => {
            return res.status(400).json({ success: false, error: reason });
        });
}

//get one by id
const getById = async (req, res) => {
    console.log("someone is coming to music by id");
    Album.findById(req.params.id)
        .then((data) => {
            //mongodb checks the id is legal or not, if it possible legal, it will return something
            return res.status(200).json({ success: true, data: data });
        })
        .catch((reason) => {
            return res.status(400).json({ success: false, error: reason });
        });
}

//create a new record
const createNew = async (req, res) => {
    console.log("someone is coming to music to post");
    const bodyInfo = req.body;
    if (bodyInfo.constructor === Object && Object.keys(bodyInfo).length === 0) {
        // is a empty object
        return res
            .status(400)
            .json({ success: false, error: "you must provide album information" });
    }
    const newAlbum = new Album(bodyInfo);

    if (!newAlbum) {
        return res
            .status(400)
            .json({ success: false, error: "album creation failed" });
    }

    newAlbum
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: newAlbum._id,
                message: "album created successed!"
            }); //201 for post sucess
        })
        .catch((reason) => {
            return res
                .status(400)
                .json({ success: false, error: reason, message: "album not created" });
        });
}

//update one record by id
const updateById = async (req, res) => {
    const bodyInfo = req.body;
    if (bodyInfo instanceof Object && Object.keys(bodyInfo).length === 0) {
        // is a empty object
        return res
            .status(400)
            .json({ success: false, error: "you must specify an album" });
    }

    Album.findById(req.params.id)
        .then((data) => {
            if (!data)
                return res
                    .status(404)
                    .json({ success: false, error: "Album id not found" });

            if (bodyInfo.album) data.album = bodyInfo.album;
            if (bodyInfo.artist) data.artist = bodyInfo.artist;
            if (bodyInfo.year) data.year = bodyInfo.year;
            if (bodyInfo.artwork) data.artwork = bodyInfo.artwork;

            data
                .save()
                .then(() => {
                    return res
                        .status(200)
                        .json({ success: true, id: data._id, message: "Album updated" });
                })
                .catch((reason) => {
                    return res.status(400).json({ success: false, error: reason });
                });
        })
        .catch((reason) => {
            return res.status(400).json({ success: false, error: reason });
        });
}

//delete one record by id
const deleteById = async (req, res) => {
    Album.findByIdAndDelete(req.params.id).then((album) => {
        if(album === null) return res.status(404).json({success: false, error: "not found"})
        return res.status(200).json({success:true,data: album, message:"deleted"});
    }).catch((reason) => {
        res.status(400).json({success: false, error: reason});
    })
}
const methods = {getAll,getById,createNew,deleteById,updateById}

module.exports = methods;