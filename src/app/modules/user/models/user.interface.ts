import { address } from "../../shared/models/address.type";
import { INewUser } from "./new-user.interface";

export interface IUser extends INewUser{
    id: number;
    addresses: address[];
}
