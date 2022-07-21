import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResumeContainer } from "./containers/resume.container";

const routes: Routes = [
    {
        path: "",
        component: ResumeContainer
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ResumeRoutingModule {}