const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Client = require('./models/client')
const data = require('./models/data')
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/CRM', function () {
    console.log("DB connection established!!!");
})

Client.collection.insertMany(data, function (err, r) {
    assert.equal(null, err);
    assert.equal(3, r.insertedCount);

    db.close();
})

module.exports = router
