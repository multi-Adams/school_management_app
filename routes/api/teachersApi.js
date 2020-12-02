const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const teacherModel = require('../../models/teachersModel.js');

app.use(bodyParser.json());

router.get('/', async (req, res) => {
	const response = await teacherModel.find();
	res.json(response);
});

router.post('/create', async (req, res) => {
	const obj = req.body;
	if (obj) {
		const response = await teacherModel.create(obj);
		console.log(response);
		res.json(response);
	}
});

router.get('/:id', async (req, res) => {
	if (teacherModel.findOne({ id: req.params.id })) {
		const response = await teacherModel.findById(req.params.id);
		res.json(response);
		console.log(req.params.id);
	}
});

router.delete('/:id', async (req, res) => {
	if (teacherModel.findOne({ id: req.params.id })) {
		const response = await teacherModel.deleteOne({ _id: req.params.id });
		res.json(response);
		console.log(response);
		res.json({ msg: 'deleted!' });
	}
});

router.patch('/:id', async (req, res) => {
	if (teacherModel.findOne({ id: req.params.id })) {
		const response = await teacherModel.updateOne(
			{ _id: req.params.id },
			{ $set: { name: req.body.name } },
		);
		res.json(response);
		console.log(response);
	}
});

module.exports = router;

// {
//     "name": "Adeyeye",
//     "surname":"Kolawole",
//     "classes":[
//       "SS1",
//       "SS2",
//     "SS3"  ],
//      "contract": "Full-Time",
//   "subjects": [
//     "Mathematics",
//     "Geography",
//     "Physics"
//   ],
//   "supervisor":"Mrs. Aiyenero",
//   "no_on_duty": 1
//   }
