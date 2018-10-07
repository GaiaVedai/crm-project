var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Posts', () => { console.log('Connected') });
const Schema = mongoose.Schema


let clientSchema = new Schema({

    _id: String,
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String

});

let Client = mongoose.model('client', clientSchema)

export default Client