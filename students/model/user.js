const mongoose = require('mongoose');
// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        minlength: 2,
        maxlength: 10
    },
    age:{
        type: Number,
        min: 10,
        max:25
    },
    sex: {
        type: String
    },
    email: String,
    hobbies:[String],
    collage:String,
    enterDate:{
        type:Date,
        default:Date.now()
    }
});

// 使用集合规则
const Student = mongoose.model('Student',studentsSchema);
// 开放集合构造函数
module.exports = Student;