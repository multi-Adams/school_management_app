const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const teacherModel = require('./models/teachersModel')
app.use(cors())

app.use(bodyParser.json())

console.log('this is the model',teacherModel);


mongoose.connect('mongodb://localhost:27017/school_dbs', {useUnifiedTopology: true, useNewUrlParser: true});

// * gets all teachers
app.use('/api/teachers/', require('./routes/api/teachersApi'))

// * gets  teacher by id
app.use('/api/teachers/:id', require('./routes/api/teachersApi'))

// * creates a teacher 
app.use('/api/teachers/create', require('./routes/api/teachersApi'))



// students api 

app.use('/api/students/', require('./routes/api/studentsApi'))

// * gets  student by id
app.use('/api/students/:id', require('./routes/api/studentsApi'))

// * creates a student 
app.use('/api/students/create', require('./routes/api/studentsApi'))



// Non teaching staff api

app.use('/api/nonteaching/', require('./routes/api/nonTeachingApi'))

// * gets   Non teaching staff by id
app.use('/api/nonteaching/:id', require('./routes/api/nonTeachingApi'))

// * creates a  Non teaching staff
app.use('/api/nonteaching/create', require('./routes/api/nonTeachingApi'))
const PORT = process.env.PORT || 9000 

app.listen(PORT, console.log(`Server listening at http://localhost:${PORT}`))