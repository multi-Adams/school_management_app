const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
	name: { type: String },
	surname: { type: String },
	email: { type: String },
	phone: { type: String },
	classes: [String],
	contract: { type: String },
	subjects: [String],
	photo: { type: String },
	supervisor: { type: String },
	no_on_duty: Number,
});

teacherSchema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

const teacherModel = mongoose.model('TeacherModel', teacherSchema);

module.exports = teacherModel;

// {
//     id: 1,
//     name: 'Adeyeye',
//     surname:'Kolawole',
//     classes:[
//       'SS1',
//       'SS2',
//     'SS3'  ],
//      contract: 'Full-Time',
//   subjects: [
//     'Mathematics',
//     'Geography',
//     'Physics'
//   ],
//   supervisor:'Mrs. Aiyenero',
//   no_on_duty: 1
//   },

// {

//     "name": "Folashade",
//     "surname":"Kunle",
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
