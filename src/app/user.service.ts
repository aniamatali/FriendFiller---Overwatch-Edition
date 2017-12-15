import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.users = database.list('users');
}

  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }

  updateUser(localUpdatedUser){
    var userEntryInFirebase = this.getUserById(localUpdatedUser.$key);
    userEntryInFirebase.update({name: localUpdatedUser.name,
                                mainclass: localUpdatedUser.mainclass,
                                description: localUpdatedUser.description,
                                skillrating: localUpdatedUser.skillrating,
                                playtimes: localUpdatedUser.playtimes,
                                usercover: localUpdatedUser.usercover});
  }

  deleteUser(localUserToDelete){
    var userEntryInFirebase = this.getUserById(localUserToDelete.$key);
    userEntryInFirebase.remove();
  }
}
