import { INewUser } from "./new-user.interface";

export interface IUser extends INewUser{
    id: number;
    imageUrl: string;
}
