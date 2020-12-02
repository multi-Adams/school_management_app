const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
	name: String,
	surname: String,
	class: String,
	entry_year: String,
	d_o_b: String,
	parents_details: [
		{
			mother: [
				{
					name: String,
					surname: String,
					dob: String,
					phone: String,
					email: String,
				},
			],
			father: [
				{
					name: String,
					surname: String,
					dob: String,
					phone: String,
					email: String,
				},
			],
		},
	],
	subjects: [String],
	class_teacher: String,
});

studentSchema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

const studentModel = mongoose.model('StudentModel', studentSchema);

module.exports = studentModel;

// subjects: [
//     {
//      subject_name: String,
//      weekly_assesment:[{
//     type:String
//      }],
//      notebook_marks:[{

//      }],
//      notebook_marks:[{

//     }],
//     }
//   ],

//     {

//       "name": "Folashade",
//       "surname":"Kunle",
//       "class":"SS2",
//        "entry_year": "20-09-2011",
//        "d_o_b": "17-09-1999",
//     "parents_details": [
//      {
//        "mother": [
//        {  "name":"Victoria",
//          "surname":"Akinleye",
//          "dob":"31-01-1956",
//          "phone":"+234 909 8899 456",
//          "email":"victakin@gmail.com"}
//        ],
//        "father": [
//  {       "name":"Akinoye",
//         "surname":"Akinleye",
//         "dob":"16-08-1946",
//         "phone":"+234 909 7807 456",
//         "email":"aakinyele@gmail.com"}
//       ]
//      }
//     ],
//     "subjects":["Mathematics","English","Economics","History","Yoruba","Fishery","Agricultural Science","Biology","Physics"],
//     "class_teacher": "Mrs Abiona"
// }

//     {

//         "name": "Folashade",
//         "surname":"Kunle",
//         "classes":[
//           "SS1",
//           "SS2",
//         "SS3"  ],
//          "contract": "Full-Time",
//       "subjects": [
//         "Mathematics",
//         "Geography",
//         "Physics"
//       ],
//       "supervisor":"Mrs. Aiyenero",
//       "no_on_duty": 1
// }
