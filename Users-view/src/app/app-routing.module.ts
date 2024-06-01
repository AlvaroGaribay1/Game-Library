import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasFormComponent } from './componentes/notas-form/notas-form.component';
import { NotasListComponent } from './componentes/notas-list/notas-list.component'


const routes: Routes = [{
  path: '',
  redirectTo: '/notes',
  pathMatch: 'full'  
},
{
  path:'notes',
  component: NotasListComponent
},
{
  path:'notes/add',
  component: NotasFormComponent
},
{
  path:'notes/edit/:id',
  component:NotasFormComponent
},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
