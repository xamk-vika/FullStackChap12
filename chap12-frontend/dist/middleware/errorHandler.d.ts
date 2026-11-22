import { Request, Response, NextFunction } from "express";
export declare function prismaErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): void;
export declare function generalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): void;
