import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, nextFunction: NextFunction) {
  const authtoken = request.headers.authorization;

  if (!authtoken) {
    return response.status(401).end();
  }

  const [, token] = authtoken.split(" ")
  try {
    const { sub } = verify(token,  `${process.env.JWT_SECRET}`) as IPayload;
  
    request.user_id = sub;

    return nextFunction();
  } catch (err) {
    return response.status(401).end();
  }

}