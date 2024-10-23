import {Component, DestroyRef, inject} from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // userId = input.required<string>();
  userName = '';
  private destroyRef = inject(DestroyRef);
  private userService = inject(UsersService);
  private activateRoute = inject(ActivatedRoute); // info about url

  // userName = computed(
  //   () => this.userService.users.find(user => user.id === this.userId())?.name)
  // ;

  ngOnInit(): void {
    const subscription = this.activateRoute.paramMap.subscribe({ // if userId change then only it will executed
        next: (paramMap) =>
          this.userName =
            this.userService.users.find(user => user.id === paramMap.get('userId'))
              ?.name || ''
      }
    );

    this.destroyRef.onDestroy( () => subscription.unsubscribe());
  }
}
