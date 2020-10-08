import { Response } from 'express';

export class NotFoundError{
    static send = (res: Response, param: string, value: any) => {
        return res
            .status(404)
            .send({
                code: 'ResourceNotFound',
                message: `no resource exists with ${param} '${value}'`
            });
    }
}

export class InternalServerError{
    static send = (res: Response, error: Error) => {
        return res
            .status(500)
            .send({
                code: 'InternalServerError',
                message: error.message
            });
    }
}