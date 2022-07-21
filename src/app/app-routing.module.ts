import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/components/welcome.component';
import { DefaultLayoutComponent } from './_layouts/default-layout.component';

const routes: Routes = [
  { 
    path: "", 
    component: DefaultLayoutComponent,
    children: [
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
