const { DataTypes } = require('sequelize');

const seq = require('../config/db');

const Todo = seq.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true, //? default is true,
    },
})

module.exports = Todo