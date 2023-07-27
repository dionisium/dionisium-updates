import { Schema, model } from 'mongoose' ;

const serie_cover_language_season_schema = new Schema({
    season:{type:Schema.Types.ObjectId, required:true, ref:'season'}, 
    number:{type:Number, required:true}
});

const serie_cover_language_schema = new Schema({
    language:{type:String, required:true},
    seasons:{type:[serie_cover_language_season_schema]}
});

const serie_cover_schema = new Schema({
    // COVER
    PCCover:{type:String, required:true},
    MovileCover:{type:String, required:true},
    name:{type:String, required:true},
    description:{type:String, required:true},
    date:{type:String, required:true},
    
    // DATA
    views:{type:Number, default:0},
    seasons:{type:Number, default:0},
    languages:{type:[serie_cover_language_schema]},
    
    // CLASIFICATION
    type:{type:String, required:true},
    tags:{type:Array, required:true},
    score:{type:Number, default:0},
    
    // ASOCIADO
    serie:{type:Schema.Types.ObjectId, ref:'serie', required:true},
}, {timestamps:true});

export default model('serie_cover', serie_cover_schema);