// import express
const express = require('express');

const { connect } = require('./src/utils/db.connections');

//appllication initiate
const app = express();


//server Create
app.listen(8000, () => {
    console.log('Application is running...');
    connect()
})