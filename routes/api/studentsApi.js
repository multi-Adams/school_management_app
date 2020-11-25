const express = require('express')
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const studentModel = require('../../models/studentsModel.js')

app.use(bodyParser.json())

router.get('/:id',async (req,res) => {
    const response = await studentModel.findById(req.params.id)
    res.json(response)
     console.log(req.params.id);
})

router.get('/',async (req,res) => {
    const response = await studentModel.find()
    res.json(response)
})

router.post('/create', async (req, res) => {
        const obj = req.body
       const response = await studentModel.create(obj)
       console.log(response);
       res.json(response)
       })


       router.delete('/:id', async (req,res) => {
       const response = await studentModel.deleteOne({_id: req.params.id})
        res.json({msg: `Student with the id of ${req.params.id} is  deleted from  Database!`})
        console.log(`Student with the id of ${req.params.id} is  deleted from  Database!`);
    })

    router.patch('/:id',async (req,res) => {
        const response = await studentModel.updateOne({_id: req.params.id}, {$set: {name: req.body.name}})
        res.json(response)
         console.log(response);
    })



module.exports = router