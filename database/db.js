const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/QuizDB"

mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true

    },
    err => {
        if (err) {
            console.error('Error!' + err)
        } else {
            console.log('Connection to your dataase was Successful!!!')
        }
    })
module.exports = mongoose