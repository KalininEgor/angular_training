import { Component } from '@angular/core';
import { User } from "../../User";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users: User[] = [
    { name: "Egor", age: 23, isActivated: true },
    { name: "Vasya", age: 45, isActivated: false },
    { name: "Katya", age: 8, isActivated: true },
    { name: "John", age: 65, isActivated: true },
    { name: "Edward", age: 30, isActivated: true },
    { name: "Christine", age: 10, isActivated: true },
  ];
}
