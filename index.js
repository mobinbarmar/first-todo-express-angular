const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');

const todosRoutes = require('./routes/todos.routes');

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.use(todosRoutes)


db.sync().then(() => {

    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
})