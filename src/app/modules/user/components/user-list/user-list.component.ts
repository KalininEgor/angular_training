import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: IUser[] = [];
  @ViewChildren(UserListItemComponent) 
  userListItems!: QueryList<UserListItemComponent>;

  deactivateAll() {
    this.userListItems.forEach(user => user.deactivateUser());
  }

}
