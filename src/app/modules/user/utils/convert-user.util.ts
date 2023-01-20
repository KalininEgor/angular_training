import { IResponseUser } from "../models/response-user.interface";
import { IUser } from "../models/user.interface";

export function convertToUserList(userDataList: IResponseUser[]): IUser[] {
    return userDataList.map((user, index) => convertToUser(user, index));
};

export function convertToUser(userData: IResponseUser, id: number): IUser {
    return {
        id: id,
        firstName: userData.name.first,
        lastName: userData.name.last,
        email: userData.email,
        age: userData.dob.age,
        gender: userData.gender === 'male' ? true : false,
        company: userData.company,
        department: userData.department,
        imageUrl: userData.picture.large,
        addresses: [
            {
                addressLine: userData.location.street.name + ',' + userData.location.street.number,
                city: userData.location.city,
                zip: userData.location.postcode,
            },
        ],
    };
};