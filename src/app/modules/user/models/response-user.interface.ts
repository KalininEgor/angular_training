export interface IResponseUser {
    email: string;
    company?: string;
    department?: string;
    id: IResponseId;
    name: IResponseName;
    dob: IResponseDob;
    gender: ResponseGender;
    picture: IResponsePicture;
    location: IResponseLocation;
};

export interface IResponseId {
    value: string;
};

export interface IResponseName {
    first: string;
    last: string;
};

export type ResponseGender = 'female' | 'male';

export interface IResponseDob {
    age: number;
};

export interface IResponsePicture {
    large: string;
    medium: string;
};

export interface IResponseStreet {
    name: string;
    number: number;
};
export interface IResponseLocation {
    street: IResponseStreet;
    city?: string;
    postcode?: string;
};
