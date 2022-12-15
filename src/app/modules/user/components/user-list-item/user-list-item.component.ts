import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user!: IUser;
  constructor(private changeDetectorRef: ChangeDetectorRef){}
  deactivateUser(): void {
    if (this.user.age > 18) {
      this.user.isActivated = false;
      this.changeDetectorRef.markForCheck();
    }  
  }
}

