import { Request, Response, Router } from 'express';
import Controller from '../interfaces/controller.interface';
import { RequestService } from './request.service';

export class RequestController implements Controller {
    path = '/requests';
    router = Router();
    private requestService = new RequestService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.getRequestById.bind(this));
        this.router.get(`${this.path}`, this.getRequests.bind(this));
    }

    private getRequestById(req: Request, res: Response) { }

    private getRequests(req: Request, res: Response) {
        res.status(200).json(this.requestService.getAllRequests());
    }
}
