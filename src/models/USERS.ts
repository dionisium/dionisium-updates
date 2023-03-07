import { Schema, model } from 'mongoose';

const user_schema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    date:{type:Date, default:Date.now()},
    roles:[{type:String, required:true}],
    plain:[{type:String, required:true}],
    viewing:[{type:Object, ref:'viewing'}],
    avatar:{type:String, default:'deku'}
});

export default model('user', user_schema);