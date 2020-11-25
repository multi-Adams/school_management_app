const mongoose = require('mongoose');
const { Schema } = mongoose;

const nonTeachingSchema = new Schema(
    {
         name:{type:String,},
        surname:{type:String,},
        start_date:{type:String,},
        salary:{type:String,},
        surname:{type:String,},
         contract: {type:String,},
      job: String

      },
    );

    const nonTeachingModel = mongoose.model('nonTeachingModel', nonTeachingSchema)

    module.exports = nonTeachingModel




















  //   {
  //     "name":"Alao",
  //    "surname":"Salami",
  //    "start_date":"01-03-2010",
  //    "salary":"65,000",
  //     "contract":"Full-Time",
  //  "job": "Security"

  //  },