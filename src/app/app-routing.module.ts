import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechScreenComponent } from './screens/tech-screen/tech-screen.component';


const routes: Routes = [
  { path: '', redirectTo: '/tecnlogia', pathMatch: 'full' },
  { path: 'tecnologia', component: TechScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
