import {Routes} from "@angular/router";
import {routes as userRoutes} from "./users/users.routes";
import {TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const ROUTES: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'users/:userId', component: UserTasksComponent, children: userRoutes},
  {path: '', component: NoTaskComponent},
  {path: '**', component: NotFoundComponent},
]
