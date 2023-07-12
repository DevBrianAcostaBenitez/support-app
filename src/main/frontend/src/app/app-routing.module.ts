import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { RequestComponent } from './views/request/request.component';
import {EditRequestComponent} from "./views/edit-request/edit-request.component"
const routes: Routes = [
  {path:'', component: ListComponent},
  {path:'create', component: RequestComponent},
  {path:'edit/:id', component: EditRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
