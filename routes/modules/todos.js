const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo


router.get('/new', (req, res) => {
  return res.render('new')
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})
router.post('/', (req, res) => {
  const name = req.body.name
  const UserId = req.user.id
  Todo.create({ name, UserId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router