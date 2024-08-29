import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users.list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userSelected: IUser ={} as IUser;
  ShowUserDetails: boolean = false;

  ngOnInit(){
    setTimeout(() => {
      this.usersList = UsersList;
    }, 3000)
  }

  onUserSected(user: IUser) {
    this.userSelected = user;
    this.ShowUserDetails = true;
  }
}
