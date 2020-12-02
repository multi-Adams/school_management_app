const express = require('express');
// const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const studentModel = require('../../models/studentsModel.js');

app.use(bodyParser.json());

router.get('/', async (req, res) => {
	const response = await studentModel.find();
	res.json(response);
});

router.post('/create', async (req, res) => {
	const obj = req.body;
	if (obj) {
		const response = await studentModel.create(obj);
		console.log(response);
		res.json(response);
	}
});

router.get('/:id', async (req, res) => {
	if (studentModel.findOne({ id: req.params.id })) {
		const response = await studentModel.findById(req.params.id);
		res.json(response);
		console.log(req.params.id);
	}
});

router.delete('/:id', async (req, res) => {
	if (studentModel.findOne({ id: req.params.id })) {
		const response = await studentModel.deleteOne({ _id: req.params.id });
		res.json(response);
		console.log(
			`Student with the id of ${req.params.id} is  deleted from  Database!`,
		);
	}
});

router.patch('/:id', async (req, res) => {
	if (studentModel.findOne({ id: req.params.id })) {
		const response = await studentModel.updateOne(
			{ _id: req.params.id },
			{ $set: { name: req.body.name } },
		);
		res.json(response);
		console.log(response);
	}
});

module.exports = router;
