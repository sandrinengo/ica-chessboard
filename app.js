const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const debug = require("debug")("app");
const path = require("path");
const PORT = process.env.PORT;

const app = express();
const chessboardRouter = require('./src/routers/chessboardRouter');

//register middlewares
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname,"/public/")));//set up middleware to handle static files, and where we're going pull those static files from.
app.use('/', chessboardRouter);
//end

//set app variables
app.set('views', './src/views');
app.set('view engine', 'ejs');
//end



//listener
app.listen(PORT,()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});