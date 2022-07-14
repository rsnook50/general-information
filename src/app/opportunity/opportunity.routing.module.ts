import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OpportunityListCompoent } from "./opportunity-list.component";

const routes: Routes = [
    {
        path: "",
        component: OpportunityListCompoent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class OpportunityRoutingModule {}