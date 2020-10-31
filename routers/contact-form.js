const { send } = require('@sendgrid/mail')
const express = require('express')
const router = new express.Router()
const path = require('path')
const sendMail = require('../src/mail.js')


//Data parsing
router.use(express.urlencoded({ extended: false }))
router.use(express.json())


router.post('/email', (req, res) => {
    console.log('Data: ', req.body)
    //validate right format should be here
    const {email, name, message} = req.body
    sendMail(email, name, message, function(err, data) {
        if (err) {
            res.status(500).json({message: 'Internal Error'})
        } else {
            res.json({message: 'Email sent!!'})
        }
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        style: 'login.css'
    })
    
})

module.exports = router