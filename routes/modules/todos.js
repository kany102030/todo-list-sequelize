const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

router.get('/:id/edit', (req, res) => {
  Todo.findByPk(req.params.id)
    .then(todo => res.render('edit', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

router.get('/new', (req, res) => {
  return res.render('new')
})
router.put('/:id', (req, res) => {
  const name = req.body.name
  Todo.update({ name }, {
    where: {
      id: req.params.id
    }
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
router.delete('/:id', (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))

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