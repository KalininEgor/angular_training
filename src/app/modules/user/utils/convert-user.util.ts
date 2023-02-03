import { IResponseUser } from "../models/response-user.interface";
import { IUser } from "../models/user.interface";

export function convertToUserList(userDataList: IResponseUser[]): IUser[] {
    return userDataList.map(user => convertToUser(user));
};

export function convertToUser(userData: IResponseUser): IUser {
    return {
        id: userData.id.value || userData.name.first + userData.name.last,
        firstName: userData.name.first,
        lastName: userData.name.last,
        email: userData.email,
        age: userData.dob.age,
        gender: userData.gender === 'male' ? true : false,
        company: 'ISoft',
        department: 'Front End',
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