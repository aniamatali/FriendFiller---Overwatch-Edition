import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [UserService]
})

export class MarketplaceComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private userService: UserService){}

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

 goToDetailPage(clickedUser) {
     this.router.navigate(['users', clickedUser.$key]);
   }
}
