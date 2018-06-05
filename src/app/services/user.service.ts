import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './data-model';
import 'firebase/storage';
import { USERS } from './database-constants';

/**
 * User service
 *
 */

@Injectable()
export class UserService {
  /**
   * Constructor
   *
   * @param {AngularFireDatabase} fireDb provides the functionality for
   Firebase Database
   */
  constructor(private fireDb: AngularFireDatabase) {}

  public addUser(user: User): void {
    this.fireDb
      .object(`${USERS}/${user.uid}`)
      .set(user)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
