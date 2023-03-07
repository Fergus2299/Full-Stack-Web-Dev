const express = require("express");
const router = express.Router();
// this posts instance is an object in the same format as in the posts file in models directory
const {Comments} = require("../models");




router.get("/:postId", async(req, res) => {
    const postId = req.params.postId;
    // finding by primary key
    const comments = await Comments.findAll({where: {PostId: postId}});
    res.json(comments);
});


router.post("/", async (req, res) => {
    const comment = req.body;
    // then post using sequelize
    await Comments.create(comment);
    // visual confirmation
    res.json(comment);
});

module.exports = router;