import { Injectable } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';
// fetching data from API
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users() {
    return DUMMY_USERS;
  }
}
