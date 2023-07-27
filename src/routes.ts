// MODULES
import { FastifyInstance } from "fastify/types/instance";

// CONTROLLER
import Controller from './controller'; 

// LIBS
import validator from './libs/validator';

export default class extends Controller{
    constructor(private routes:FastifyInstance, private path:string){super()}
    
    router(){
        this.routes.post(this.path + '/views', {preValidation:validator}, this.views);
        this.routes.post(this.path + '/viewing', {preValidation:validator}, this.viewing);
    }
}