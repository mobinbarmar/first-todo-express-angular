const express = require('express');

const todoController = require('../controllers/todo.controller');

const router = express.Router()

router.get('/todos', todoController.getAll)
router.get('/', (req, res) => {
    res.send('mobin')
})

router.post('/add-todo', todoController.addTodo)
router.put('/check-todo', todoController.checkTodo)
router.put('/delete-todo', todoController.deleteTodo)
router.get('/check-data-todo', todoController.todoCheckData)

module.exports = router