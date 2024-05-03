const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = Schema({
    name: {
        type:String,
        required: true
    },
    age: {
        type:Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type:String,
        default: "Active"
    },
    gender: {
        enum: ['Male', 'Female', 'Other'],
        type: String
    }, 
    joiningDate: {
        type: Date,
        default: Date.now
    }

})


const StudentModel = mongoose.model("student", studentSchema);
module.exports = {StudentModel};