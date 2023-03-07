import { Schema, model } from 'mongoose';

const viewing_schema = new Schema({
    name:{type:String, required:true},
    redirect:{type:String, required:true},
    thumnail:{type:String, required:true},
    minute:{type:String, required:true}
});

export default model('viewing', viewing_schema);