import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';

const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "home"
},{
  path: "home",
  component: HomepageComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
