import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitForm(name: string, mainclass: string, description: string, skillrating: string, playtimes: string, usercover: string) {
    var newUser: User = new User(name, mainclass, description, skillrating, playtimes, usercover);
    this.userService.addUser(newUser);
  }

}
