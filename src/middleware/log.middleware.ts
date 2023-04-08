import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    console.log(
      `[${new Date().toISOString()}] Request: ${req.method} ${req.originalUrl}`,
    );

    res.on('finish', () => {
      const elapsedTime = Date.now() - startTime;
      console.log(
        `[${new Date().toISOString()}] Response: ${req.method} ${
          req.originalUrl
        } ${res.statusCode} (${elapsedTime}ms)`,
      );
    });

    next();
  }
}
