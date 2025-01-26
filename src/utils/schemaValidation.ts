import { Request, Response } from "express";

export async function checkSchema(schema: any, req: Request, res: Response) {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log("Error is - ", error);
    return res.status(400).json({ message: error.details[0].message });
  }
}
