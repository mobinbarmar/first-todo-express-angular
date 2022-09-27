const Todo = require('../models/todo.model');

exports.getAll = async (req, res) => {
    todos = await Todo.findAll()
    res.send(todos)
}

exports.addTodo = async (req, res) => {
    await Todo.create({ text: req.body.title })
    const result = await Todo.findAll()
    res.send(result)
    
}

exports.checkTodo = async (req, res) => {
    todo = await Todo.findByPk(req.body.id)
    if(todo.completed == true){
        todo.completed = false
    }else{
        todo.completed = true
    }
    await todo.save()

    Todo.findAll().then((result) => {
        res.send(result)
    })
}

exports.deleteTodo = async (req, res) => {
    await Todo.destroy({ where: { id: req.body.id } })

    Todo.findAll().then((result) => {
        res.send(result)
    })
}

exports.todoCheckData = async (req, res) => {
    falseTodos =  (await Todo.findAll( { where: { completed: false } })).length
    trueTodos =  (await Todo.findAll({ where: { completed: true } })).length

    res.json({
        falseTodos: falseTodos,
        trueTodos: trueTodos
    })
}