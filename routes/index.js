const express = require('express')
const router = express.Router()
const users = require('./modules/users')
const home = require('./modules/home')
const todos = require('./modules/todos')
const { authenticator } = require('../middleware/auth')

router.use('/users', users)
router.use('/todos', authenticator, todos)

router.use('/', authenticator, home)

module.exports = router

