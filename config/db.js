const { Sequelize } = require('sequelize');


const seq = new Sequelize('todo_db', 'sa', 'Q@rsche0098', {
    dialect: 'mssql',
    host: 'localhost'
})

module.exports = seq