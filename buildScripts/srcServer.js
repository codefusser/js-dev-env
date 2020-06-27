//import express from 'express';
var express = require('express');
var path = require('path');
//import path from 'path';
var open = require('open');
//import open from 'open';
var webpack = require('webpack');
//import webpack from 'webpack';
//import config from '../webpack.config.dev.js';
var config = require('../webpack.config.dev');
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publishPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
