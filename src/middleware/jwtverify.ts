import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { APP_ERROR } from '../common/errors';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    jwt.verify(token, 'secret', (err) => {
      if (err) {
        return res.status(403).json({ message: APP_ERROR.INVALID_TOKEN });
      }
      next();
    });
  } else {
    res.status(401).json({ message: APP_ERROR.TOKEN_NOT_FOUND });
  }
};

export default authenticateJWT;
