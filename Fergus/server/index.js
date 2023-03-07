// loading and creating an instance of express
//////////////////////////////////
const express = require('express');
const app =  express();
//allows us to give permissions about who can access server
const cors = require("cors");
/////////////////////////////////



app.use(express.json());
app.use(cors());
const db  = require('./models');


// routes for posts, loading file an 
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentRouter = require("./routes/Comments");
app.use("/comments", commentRouter);

const userRouter = require("./routes/Users");
app.use("/users", userRouter);

// whenever we want to run the server, we need to first run the models folder, which checks the databases
// creates databases where needed. It knows which database because of the config directory.
db.sequelize.sync().then(() => {
    // tell the port to run server, and an anonymous func to send a message (the latter isn't absolutely necessary)
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
