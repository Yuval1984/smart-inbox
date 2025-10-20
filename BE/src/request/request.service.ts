import { InboxItem } from './request.inteface';
import { request } from '../models/dummy1.model';

export class RequestService {
    constructor() { }

    getAllRequests(): InboxItem[] {
        return request;
    }
}
