import {Routes} from "@angular/router";
import {TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const ROUTES: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'users/:userId', component: UserTasksComponent, children: [
      {path: '', redirectTo: 'tasks', pathMatch: 'prefix'},
      {path: 'tasks', component: TasksComponent},
      {path: 'tasks/new', component: NewTaskComponent},
    ]},
  {path: '', component: NoTaskComponent},
  {path: '**', component: NotFoundComponent},
]
