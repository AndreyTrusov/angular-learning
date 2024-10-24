import {Component, DestroyRef, inject, input} from '@angular/core';
// import {UsersService} from "../users.service";
import {
  // ActivatedRoute,
  // ActivatedRouteSnapshot,
  // ResolveFn,
  RouterLink,
  RouterOutlet,
  // RouterStateSnapshot
} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
// export class UserTasksComponent {
//   // userId = input.required<string>();
//   userName = '';
//   // message = input.required<string>();
//   private destroyRef = inject(DestroyRef);
//   private userService = inject(UsersService);
//   private activateRoute = inject(ActivatedRoute); // info about url
//
//   // userName = computed(
//   //   () => this.userService.users.find(user => user.id === this.userId())?.name)
//   // ;
//
//   ngOnInit(): void {
//     // console.log("Message data: " + this.message());
//     const subscription = this.activateRoute.paramMap.subscribe({ // if userId change then only it will executed
//         next: (paramMap) =>
//           this.userName =
//             this.userService.users.find(user => user.id === paramMap.get('userId'))
//               ?.name || ''
//       }
//     );
//
//     this.destroyRef.onDestroy(() => subscription.unsubscribe());
//   }
// }

// with resolveUserName function we now do not need any code above and out component is now looks very clean:

export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
}

// export const resolveUserName: ResolveFn<string> = (
//   activatedRoute: ActivatedRouteSnapshot,
//   routerState: RouterStateSnapshot
// ) => {
//   const userService = inject(UsersService);
//   const userName = userService.users.find(user => user.id === activatedRoute.paramMap.get('userId'))
//     ?.name || '';
//   return userName;
// }
