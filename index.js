const express = require('express');
const serverless = require('serverless-http');

const app = express();

const getPage = page => require(`./.next/serverless/pages/${page}`).render;

app.get("/", getPage("index"));

app.get("*", require("./.next/serverless/pages/_error").render);

exports.handler = serverless(app);
