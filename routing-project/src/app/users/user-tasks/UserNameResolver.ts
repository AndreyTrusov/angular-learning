// fetch user ( snapshot latest call of this class/road ) re-executed every time route is changed
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UsersService} from "../users.service";


@Injectable({ providedIn: 'root' })
export class UserNameResolver implements Resolve<string> {

  constructor(private usersService: UsersService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  }
}
