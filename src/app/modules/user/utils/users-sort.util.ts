import { SortOrder } from '../../shared/models/sort-order.type';
import { IUser } from '../models/user.interface';

export function sortUsersByAlphabet(
    users: IUser[],
    sortField: string,
    sortOrder: SortOrder
): IUser[] {
    const result = users.sort((a, b) => {
        const fieldA = a[sortField].toLowerCase();
        const fieldB = b[sortField].toLowerCase();

        if (fieldA < fieldB) {
            return -1;
        } else if (fieldA > fieldB) {
            return 1;
        } else {
            return 0;
        }
    });

    return sortOrder === 'asc' ? result : result.reverse();
}

export function sortUsersByDigits(
    users: IUser[],
    sortField: string,
    sortOrder: SortOrder
): IUser[] {
    const result = users.sort((a, b) => a[sortField] - b[sortField]);

    return sortOrder === 'asc' ? result : result.reverse();
}
