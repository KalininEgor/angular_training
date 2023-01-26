import { IAddress } from "../../shared/models/address.interface";
import { INewUser } from "./new-user.interface";

export interface IUser extends INewUser{
    id: string;
    addresses: IAddress[];
}
