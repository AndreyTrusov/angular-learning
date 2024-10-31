import {Routes} from "@angular/router";
import {routes as userRoutes} from "./users/users.routes";
import {resolveTitle, resolveUserTasks, TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UserNameResolver} from "./users/user-tasks/UserNameResolver";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
    title: 'No task selected there',
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    data: {message: 'Hello'}, // static data
    runGuardsAndResolvers: "paramsChange",
    resolve: {
      userName: UserNameResolver, // if withComponentInputBinding activated in config
      userTasks: resolveUserTasks,
    }, // dynamic data
    title: resolveTitle,

  },
  {path: '', component: NoTaskComponent},
  {path: '**', component: NotFoundComponent},
]
