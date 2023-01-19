import { IResponseUser } from './response-user.interface';

export interface IResponseGetUsers {
    info: object;
    results: Array<IResponseUser>;
}
