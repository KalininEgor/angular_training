import { IResponseUser } from './response-user.interface';

export interface IResponseGetUsers {
    body: {
        info: object;
        results: IResponseUser[];
    }
}
