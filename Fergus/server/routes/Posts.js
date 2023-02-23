// this file contains all the routes for posts

const { application } = require("express");
const express = require("express");
const router = express.Router();
// this posts instance is an object in the same format as in the posts file in models directory
const {Posts} = require("../models");

// get requests - gets the data from the whole posts table
router.get("/", async (req, res) => {
    // get everything from table
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

// get an individual post
router.get("/byId/:id", async(req, res) => {
    const id = req.params.id;
    // finding by primary key
    const post = await Posts.findByPk(id);
    res.json(post);
});

// post requests
// we send post request to this route and it creates an object which is sent to models
// inserts data into our table.
router.post("/", async (req, res) => {
    const post = req.body;
    // then post using sequelize
    await Posts.create(post);
    // visual confirmation
    res.json(post);
});

// allows us to access the router in the index file
module.exports = router;
