const express = require("express");
const router = express.Router();
// this posts instance is an object in the same format as in the posts file in models directory
const {Users} = require("../models");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
    const {username, password} = req.body;
    //check if user already exists
    const user = await Users.findOne({where: {username: username}});
    if (!user) {
        // second hyperparam you might need to research, has something to do
        // with how hashed the password is.
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({username: username, password:hash});
        });
        res.json(`User: ${username} successfully created`);
    }
    else {res.json(`${username} already exists`)}
    
    
    // await Users.create(user);
    // // visual confirmation
    // res.json(user);
});
router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    // find a user where username is the same as login
    const user = await Users.findOne({where: {username: username}});

    if (!user)  {res.json({auth:false, message:"user doesn't exist!"});}
    else {
        bcrypt.compare(password, user.password).then(async (match) => {
            if (!match) {res.json({auth:false, message:"user doesn't exist!"})} 
            else {
                const id = user.dataValues.id;
                const token = jwt.sign({id}, "jwtSecret", {
                    expiresIn:300,
                })

                res.json({auth:true, token: token, result:user});
            } 
        });
    }

});
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send("we need a token")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({auth:false, message:"you failed to authenticate"})
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
};

router.get('/isUserAuth', verifyJWT,(req,res) => {
    res.json("You are authenticated!");
});



module.exports = router;
