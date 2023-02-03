const { application } = require("express");
const express = require("express");
const router = express.Router();
const {Posts} = require("../models");

// get requests - gets the data from the whole posts table
router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

// post requests
// we send post request to this route and it creates an object which is sent to models
// inserts data into our table.
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

// export the router
module.exports = router;
