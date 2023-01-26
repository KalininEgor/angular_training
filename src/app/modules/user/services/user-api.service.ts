import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { PAGE_SIZE } from '../configs/pagination.config';
import { INewUser } from '../models/new-user.interface';
import { IResponseGetUsers } from '../models/response-get-users.interface';
import { IUser } from '../models/user.interface';
import { convertToUser, convertToUserList } from '../utils/convert-user.util';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    constructor(private httpService: HttpService) {}

    getUsers(page: number = 1, pageSize: number = PAGE_SIZE, search?: string): Observable<IUser[]> {
        const options = {
            params: new HttpParams().appendAll({
                'results': pageSize,
                'page': page,
                'search': search ? search : ''
            })
        };
        return this.httpService.get<IResponseGetUsers>('' , options).pipe(
            map((response) => {
                return convertToUserList(response.body.results);
            })
        );
    }

    getExcelByUserId(id: string): Observable<string> {
        const time = Math.floor(1 + Math.random() * 6) * 1000;

        return this.httpService.get<IResponseGetUsers>('', {params: {id: id}}).pipe(
            map(() => {
                return `Received excel from user with ID '${id}' in ${time} ms`
            }),
            delay(time)
        )
    }

    getUserById(id: string): Observable<IUser> {
        const options = {
            params: new HttpParams().append('id', id)
        };
        return this.httpService.get<IResponseGetUsers>(``, options).pipe(
            delay(1000),
            map((response) => convertToUser(response.body.results[0]))
        )
    }

    addUser(user: INewUser): Observable<IUser> {
        return this.httpService.post<IResponseGetUsers>('/users/add', user).pipe(
            map((response) => convertToUser(response.body.results[0]))
        );
    }

    editUser(user: IUser): Observable<IUser> {
        return this.httpService.put<IResponseGetUsers>('/user/edit', user).pipe(
            map((responseUser) => convertToUser(responseUser.results[0]))
        );
    }
}
