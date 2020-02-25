import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewApiComponent} from './view_api/view-api/view-api.component';
import {ListViewComponent} from './components/list-view/list-view.component';


const routes: Routes = [
  {
    path: "view_api",
    component: ViewApiComponent
  },
  {
    path:"todoList",
    component:ListViewComponent
  },
  {
    path: '',
    component: ListViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
