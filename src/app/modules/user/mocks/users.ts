import { IUser } from "../models/user.interface";

export const users: IUser[] = [
    {
        id: 1,
        firstName: "Egor", 
        lastName: "Kalinin",
        email: "KaEgor@gmail.com", 
        age: 23, 
        gender: true,
        company: 'ISsoft',
        department: 'Marketing',
        imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg',
        addresses: [{addressLine: "Ostrojskih, h.14, app.156"}]
    },
    {
        id: 2,
        firstName: "Vasya", 
        lastName: "Pupkin",
        email: "Puvasya@gmail.com", 
        age: 45, 
        gender: true,
        company: 'ISsoft',
        department: 'Human Resources',
        imageUrl: 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&1966AE6B-E8E5-4D4A-AACA385519F64D03',
        addresses: [{addressLine: "Nikoly Tesly 33", city: "Minsk", zip: "220052"}]
    },
    {
        id: 3,
        firstName: "Katya", 
        lastName: "Kondratyeva",
        email: "Katya@gmail.com", 
        age: 28, 
        gender: false,
        company: 'ISsoft',
        department: 'IT',
        imageUrl: 'https://cdn.britannica.com/92/181392-050-08187DB5/cat-British-Shorthair-grey.jpg',
        addresses: [{addressLine: "Nikoly Tesly 33", city: "Minsk", zip: "220052"}]
    },
    {
        id: 4,
        firstName: "John", 
        lastName: "Wick",
        email: "JW@gmail.com", 
        age: 65, 
        gender: true,
        company: 'ISsoft',
        department: 'InfoSec',
        imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg',
        addresses: [{addressLine: "Nikoly Tesly 33"}]
    },
    {
        id: 5,
        firstName: "Edward", 
        lastName: "Snowden",
        email: "SEdw@gmail.com", 
        age: 18, 
        gender: true,
        company: 'ISsoft',
        department: 'Human Resources',
        imageUrl: 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&1966AE6B-E8E5-4D4A-AACA385519F64D03',
        addresses: [{addressLine: "Nikoly Tesly 33", city: "Minsk", zip: "220052"}]
    },
    {
        id: 6,
        firstName: "Christina", 
        lastName: "Aguilera",
        email: "Pop@gmail.com", 
        age: 17, 
        gender: false,
        company: 'ISsoft',
        department: 'Accountant',
        imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg',
        addresses: [{addressLine: "Nikoly Tesly 33", city: "Minsk", zip: "220052"}]
    },
    {
        id: 7,
        firstName: "Karina", 
        lastName: "Simpson",
        email: "Kars@gmail.com", 
        age: 25, 
        gender: false,
        company: 'ISsoft',
        department: 'Human Resources',
        imageUrl: 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg?w=590&h=800&1966AE6B-E8E5-4D4A-AACA385519F64D03',
        addresses: [{addressLine: "Nikoly Tesly 33"}]
    },
    {
        id: 8,
        firstName: "Maxim", 
        lastName: "Dyak",
        email: "DYAK@gmail.com", 
        age: 75, 
        gender: true,
        company: 'ISsoft',
        department: 'InfoSec',
        imageUrl: 'https://cdn.britannica.com/92/181392-050-08187DB5/cat-British-Shorthair-grey.jpg',
        addresses: [{addressLine: "Nikoly Tesly 33", city: "Minsk", zip: "220052"}, {addressLine: "Nikoly Tesly 323", city: "Minsk", zip: "220052"},  {addressLine: "Nikoly Tesly 323", city: "Minsk", zip: "220052"},  {addressLine: "Nikoly Tesly 323", city: "Minsk", zip: "220052"}]
    },
]