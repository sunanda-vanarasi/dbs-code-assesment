import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ViewUserComponent }from '/Users/rlakkakula/Desktop/SunandaProject/dbs-angular-proj/src/app/view-user/view-user.component';
import {AddEditUserComponent} from '/Users/rlakkakula/Desktop/SunandaProject/dbs-angular-proj/src/app/add-edit-user/add-edit-user.component'


const routes: Routes = [  
{ path: 'view', component: ViewUserComponent },
{ path :'addEdit', component :AddEditUserComponent},
{ path : '', redirectTo:'view',pathMatch:'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



