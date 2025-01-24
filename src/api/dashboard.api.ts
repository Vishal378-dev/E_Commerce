import { PrismaClient } from "@prisma/client"
import { Response, Request } from "express";

const prisma = new PrismaClient();

export class authAPI {
    public static userRegister(req:Request, res:Response){
        try{
            console.log("CONTROLLER")
            res.status(200).json({
                message: "Success "
            })
        }catch(err){
            res.status(404).send("Something went wrong")
        }
    }
}
