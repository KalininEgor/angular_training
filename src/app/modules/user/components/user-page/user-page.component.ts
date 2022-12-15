import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{
  users: IUser[] = [];
 
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
