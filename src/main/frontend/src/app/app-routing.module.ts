import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { RequestComponent } from './views/request/request.component';

const routes: Routes = [
  {path:'', component: ListComponent},
{path:'create', component: RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
