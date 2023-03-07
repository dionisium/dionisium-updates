import serie_model from './models/SERIE';
import serie_cover_model from './models/SERIE_COVER';
import user_model from'./models/USERS';
import jwt_libs from './libs/jsonwebtoken_config';

export default class ctrl extends jwt_libs{
    async views(req, res){
        try {
            const { serie_id, cover_id } = req.body;
            const serieCoverFound = await serie_cover_model.findByIdAndUpdate(cover_id, {views: 1}); await serieCoverFound.updateOne({views: (serieCoverFound.views + 1)});
            const serieFound = await serie_model.findById(serie_id); await serieFound.updateOne({views: (serieFound.views + 1)});
            return res.status(200).json({message:'update'});
        } catch (error) {
            res.status(400).json({error:'error unexpected'});
            console.log(error);
        }
    }

    async viewing(req, res){
        try {
            const { name, thumnail, redirect, minute, token } = req.body;
            const decoded = await jwt_libs.decoded(token);
            if(decoded == 'error unexpected'){return res.status(401).json({error:'you is not authorized or the token is expired'});}
            const userFound = await user_model.findById(decoded._id);
            let status:any = false; 
            await userFound.viewing.map(element => {if(element.redirect == redirect){status = true}});
            if(status == true){return res.status(200).json({message:'not update'});}
            await userFound.updateOne({$push:{viewing:{name, thumnail, redirect, minute}}});
            res.status(200).json({message:'update'});
        } catch (error) {
            res.status(400).json({error:'error unexpected'});
            console.log(error);
        } 
    }
}