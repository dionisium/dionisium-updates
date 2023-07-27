// MODELS
import SERIE from './models/SERIE';
import COVER from './models/SERIE_COVER';
import USERS from './models/USERS';

// LIBS
import JsonWebTokenLibs from './libs/jsonwebtoken_config';
const JWTLibs = new JsonWebTokenLibs();

// MODULES
import { FastifyReply } from 'fastify';

export default class {
    async views(req, res:FastifyReply){
        try {
            const { serie_id, cover_id } = req.body;
            const cover = await COVER.findByIdAndUpdate(cover_id, {views: 1}); 
            await cover.updateOne({views: (cover.views + 1)});
            const serie = await SERIE.findById(serie_id); 
            await serie.updateOne({views: (serie.views + 1)});

            return res.code(200).send({message:'update'});
        } catch (error) {
            console.log(error);
            return res.code(400).send({error:'error unexpected'});
        }
    }

    async viewing(req, res:FastifyReply){
        try {
            const { name, thumnail, redirect, minute, token } = req.body;
            const decoded = await JWTLibs.decoded(token);
            if(decoded == 'error unexpected'){return res.code(401).send({error:'you is not authorized or the token is expired'});}
            const userFound = await USERS.findById(decoded?.["_id"]);
            let status:any = false; 
            await userFound.viewing.map(element => {if(element.redirect == redirect){status = true}});
            if(status == true){return res.code(200).send({message:'not update'});}
            await userFound.updateOne({$push:{viewing:{name, thumnail, redirect, minute}}});

            return res.code(200).send({message:'update'});
        } catch (error) {
            console.log(error);
            return res.code(400).send({error:'error unexpected'});
        } 
    }
}