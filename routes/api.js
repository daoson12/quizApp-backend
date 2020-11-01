const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('./../models/users');
const Questions = require('./../models/questions')





router.get('/', (req, res) => {
    res.send('from API route')
})

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')

    }
    req.userId = payload.subject
    next()
}
router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }

    })

})

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ username: userData.username }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid username')
            } else
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({ token })

            }

        }
    })
})


// get all questin
router.get('/api/v1/questions', (req, res) => {

    res.status(200).send({
        success: 'true',
        message: 'questions retrieved successfully',
        questions: Questions
    })
});
router.get('/take-test', (req, res) => {
    let takeTest = [{
            "id": 1,
            "course1": "Adam Carter",
            "date": "2020-6-12"
        },
        {
            "id": 2,
            "course1": "Adam Carter",
            "date": "2020-6-12"


        }, {
            "id": 3,
            "course1": "Adam Carter",
            "date": "2020-6-12"

        }
    ]
    res.json(takeTest)
})

module.exports = router