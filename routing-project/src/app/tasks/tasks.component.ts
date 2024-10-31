import {Component, computed, DestroyRef, inject, input, signal} from '@angular/core';

import {TaskComponent} from './task/task.component';
import {TasksService} from "./tasks.service";
import {ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterStateSnapshot} from "@angular/router";
import {Task} from './task/task.model';
import {UsersService} from "../users/users.service";


@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})

export class TasksComponent {
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
}

export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks';
};

// export class TasksComponent {
//   userId = input.required<string>();
//   // order = input<'asc' | 'desc'>();
//   // order?: 'asc' | 'desc';
//   order = signal<'asc' | 'desc'>('desc');
//   // reading tasks from service
//   private tasksService = inject(TasksService);
//   userTasks = computed( () =>
//     this.tasksService
//       .allTasks()
//       .filter((task) => task.userId === this.userId())
//       .sort((a, b) => {
//         if(this.order() === 'desc'){
//           return a.id > b.id ? -1 : 1;
//         } else{
//           return a.id > b.id ? 1 : -1;
//         }
//       }),
//   )
//
//   private activatedRoute = inject(ActivatedRoute);
//   private destroyRef = inject(DestroyRef);
//
//   ngOnInit(): void{
//     const subscription = this.activatedRoute.queryParams.subscribe({
//       next: params => this.order.set(params['order']), // this will be updated whenever query param is changed
//     })
//
//     this.destroyRef.onDestroy( () => subscription.unsubscribe());
//   }
// }
