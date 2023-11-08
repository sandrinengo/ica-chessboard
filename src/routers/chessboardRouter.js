const express = require("express");
const debug = require("debug")("app:chessboardRouter");
const chessboardRouter = express.Router();

chessboardRouter
.route("/")
.get((req,res)=>{
    res.render('index', { title: 'INFO620 - Chessboard'});
});

chessboardRouter
.route("/")
.post((req,res)=>{

});

module.exports = chessboardRouter;