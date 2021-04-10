const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const nonTeachingModel = require('../../models/nonTeachingModel.js');

app.use(bodyParser.json());

router.get('/', async (req, res) => {
	const response = await nonTeachingModel.find();
	res.json(response);
});

router.get('/:id', async (req, res) => {
	const response = await nonTeachingModel.findById(req.params.id);
	res.json(response);
	console.log(req.params.id);
});


router.post('/create', async (req, res) => {
	const obj = req.body;
	if (obj) {
		const response = await nonTeachingModel.create(obj);
		console.log(response);
		res.json(response);
		console.log(`Posted to ${route} successfully`);
	}
});

router.delete('/:id', async (req, res) => {
	if (nonTeachingModel.findOne({ id: req.params.id })) {
		const response = await nonTeachingModel.deleteOne({ _id: req.params.id });
		res.json(response);
		console.log(response);
	}
});

router.patch('/:id', async (req, res) => {
	if (nonTeachingModel.findOne({ id: req.params.id })) {
		const response = await nonTeachingModel.updateOne(
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
