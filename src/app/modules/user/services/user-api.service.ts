import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { INewUser } from '../models/new-user.interface';
import { IResponseGetUsers } from '../models/response-get-users.interface';
import { IUser } from '../models/user.interface';
import { convertToUser, convertToUserList } from '../utils/convert-user.util';

@Injectable({
    providedIn: 'root',
})
export class UserApiService {
    constructor(private httpService: HttpService) {}

    getUsers(page: number = 1, pageSize: number = 10, search: string = ''): Observable<IUser[]> {
        const options = {
            params: new HttpParams().appendAll({
                'results': pageSize,
                'page': page,
                'search': search
            })
        };
        return this.httpService.get<IResponseGetUsers>('' , options).pipe(
            map((response) => convertToUserList(response.body.results))
        );
    }

    getUserById(id: number): Observable<IUser> {
        const options = {
            params: new HttpParams().append('id', id)
        };
        return this.httpService.get<IResponseGetUsers>(`/user`, options).pipe(
            map((response) => convertToUser(response.body.results[0], id))
        )
    }

    // getUsersByName(name: string): Observable<IUser[]> {
    //     const options = {
    //         params: new HttpParams().append('search', name)
    //     };
    //     return this.httpService.get<IResponseGetUsers>('/users/find', options).pipe(
    //         map((response) => convertToUserList(response.body.results))
    //     )
    // }

    addUser(user: INewUser): Observable<IUser> {
        return this.httpService.post<IResponseGetUsers>('/users/add', user).pipe(
            map((response) => convertToUser(response.body.results[0], response.body.results[0].id.value))
        );
    }

    editUser(user: IUser): Observable<IUser> {
        return this.httpService.put<IResponseGetUsers>('/user/edit', user).pipe(
            map((responseUser) => convertToUser(responseUser.results[0], responseUser.id))
        );
    }
}
