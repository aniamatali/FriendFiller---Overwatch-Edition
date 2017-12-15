import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  @Input() selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  beginUpdatingUser(userToUpdate){
    this.userService.updateUser(userToUpdate);
    console.log(this);
  }

  beginDeletingUser(userToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.userService.deleteUser(userToDelete);
    }
  }

}
