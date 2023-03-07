import { req_verify } from '../libs/verify_req_body_libs';

export default async function validator(req:any, res:any, next:any){
    // if(req.headers.token != process.env.JWT_KEY){
    //     return res.status(401).json({message:'you is not authorized'});
    // }
    const req_body_result:boolean = await req_verify(req.body || {});
    if(req_body_result == false){return res.status(401).json({error:'some fields are inconplete'});}
    next();
}