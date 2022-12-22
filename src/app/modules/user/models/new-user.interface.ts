export interface INewUser {
    fullName: {
        firstName: string;
        lastName: string;
    };
    company: string;
    department: string;
    email: string;
    age: number;
    gender: boolean;
}
