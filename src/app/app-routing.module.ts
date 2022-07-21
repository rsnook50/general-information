import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeContainer } from './features/welcome/containers/welcome.container';
import { DefaultLayoutComponent } from './_layouts/default-layout.component';

const routes: Routes = [
  { 
    path: "", 
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: WelcomeContainer
      },
      {
        path: "resume",
        loadChildren: () => import("./features/resume/resume.module").then(m => m.ResumeModule)
      },
      {
        path: "opportunities",
        loadChildren: () => import("./features/opportunity/opportunity.module").then(m => m.OpportunityModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
