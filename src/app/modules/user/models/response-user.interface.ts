export interface IResponseUser {
    id: {
        value: string;
    };
    name: {
        first: string;
        last: string;
    };
    email: string;
    dob: {
        age: number;
    };
    gender: 'female' | 'male';
    company?: string;
    department: string;
    picture: {
        large: string;
        medium: string;
    };
    location: {
        street: {
            name: string;
            number: number;
        };
        city?: string;
        postcode?: string;
    };
}
