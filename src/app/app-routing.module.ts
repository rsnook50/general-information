import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
  { 
    path: "", 
    component: WelcomeComponent 
  },
  {
    path: "resume",
    loadChildren: () => import("./resume/resume.module").then(m => m.ResumeModule)
  },
  {
    path: "opportunities",
    loadChildren: () => import("./opportunity/opportunity.module").then(m => m.OpportunityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
